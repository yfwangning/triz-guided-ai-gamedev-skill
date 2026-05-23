export const hudConfig = {
  playerFacingSurfaces: ["survivalCluster", "objectiveStrip", "contextPing", "dangerCue"],
  persistentSignals: ["health", "stamina", "poison", "quest", "pickup", "incomingAttack"],
  verificationStates: ["lowHealth", "incomingAttack", "pickupNearby"],
  nonGoals: ["largeSecondaryPanel"],
};

export const sampleState = {
  health: 42,
  stamina: 61,
  poisonSeconds: 2,
  quest: "Find the gate key",
  pickup: "Iron Charm",
  warning: "Incoming strike",
};

const MAX_RESOURCE = 100;

function toFiniteNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function clampPercent(value, max = MAX_RESOURCE) {
  return Math.max(0, Math.min(100, Math.round((value / max) * 100)));
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return character;
    }
  });
}

function getSurvivalTone({ healthPercent, poisonActive, warningActive }) {
  if (healthPercent <= 35) {
    return { tone: "critical", label: "Critical" };
  }

  if (warningActive) {
    return { tone: "danger", label: "Brace" };
  }

  if (poisonActive || healthPercent <= 60) {
    return { tone: "warning", label: "Watch" };
  }

  return { tone: "stable", label: "Stable" };
}

export function renderHud(root, state = sampleState) {
  const health = Math.max(0, Math.round(toFiniteNumber(state.health)));
  const stamina = Math.max(0, Math.round(toFiniteNumber(state.stamina)));
  const poisonSeconds = Math.max(0, Math.round(toFiniteNumber(state.poisonSeconds)));
  const healthPercent = clampPercent(health);
  const staminaPercent = clampPercent(stamina);
  const poisonActive = poisonSeconds > 0;
  const warning = String(state.warning ?? "").trim();
  const pickup = String(state.pickup ?? "").trim();
  const quest = String(state.quest ?? "").trim() || "Stay alive";
  const survivalTone = getSurvivalTone({
    healthPercent,
    poisonActive,
    warningActive: Boolean(warning),
  });
  const staminaLabel = staminaPercent <= 30 ? "Recover" : "Ready";

  root.innerHTML = `
    <section class="hud" aria-label="tactical HUD">
      <div class="hud-rack" aria-label="player status">
        <section class="hud-card hud-card--health" data-tone="${survivalTone.tone}">
          <div class="hud-card__eyebrow">
            <span class="hud-card__label">Health</span>
            <span class="hud-card__state">${survivalTone.label}</span>
          </div>
          <div class="hud-card__numbers">
            <strong class="hud-card__value">${health}</strong>
            <span class="hud-card__unit">/100 HP</span>
          </div>
          <div class="hud-meter hud-meter--health" aria-hidden="true">
            <span style="width: ${healthPercent}%;"></span>
          </div>
          ${
            poisonActive
              ? `<div class="hud-card__status"><span class="hud-pill hud-pill--poison">Poison ${poisonSeconds}s</span></div>`
              : ""
          }
        </section>

        <section class="hud-card hud-card--stamina" data-tone="${staminaLabel === "Recover" ? "warning" : "stable"}">
          <div class="hud-card__eyebrow">
            <span class="hud-card__label">Stamina</span>
            <span class="hud-card__state">${staminaLabel}</span>
          </div>
          <div class="hud-card__numbers">
            <strong class="hud-card__value">${stamina}</strong>
            <span class="hud-card__unit">/100 STA</span>
          </div>
          <div class="hud-meter hud-meter--stamina" aria-hidden="true">
            <span style="width: ${staminaPercent}%;"></span>
          </div>
        </section>
      </div>

      <section class="hud-objective" aria-label="current objective">
        <span class="hud-objective__label">Objective</span>
        <strong class="hud-objective__text">${escapeHtml(quest)}</strong>
      </section>

      ${
        pickup
          ? `
            <aside class="hud-ping" aria-live="polite">
              <span class="hud-ping__label">Nearby</span>
              <strong class="hud-ping__value">${escapeHtml(pickup)}</strong>
            </aside>
          `
          : ""
      }

      ${
        warning
          ? `
            <section class="hud-alert" role="alert" aria-live="assertive">
              <span class="hud-alert__label">Danger</span>
              <strong class="hud-alert__text">${escapeHtml(warning)}</strong>
            </section>
          `
          : ""
      }
    </section>
  `;
}

if (typeof document !== "undefined") {
  const root = document.querySelector("#hud-root");
  if (root) {
    renderHud(root);
  }
}

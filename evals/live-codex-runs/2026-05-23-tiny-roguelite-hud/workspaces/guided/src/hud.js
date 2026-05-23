export const hudConfig = {
  playerFacingSurfaces: ["objectiveChip", "threatCallout", "vitalsDock", "nearbyHint"],
  persistentSignals: ["health", "stamina", "poison", "quest", "pickup", "incomingAttack"],
  verificationStates: ["critical threat stands out first", "secondary hints stay visually quiet"],
  nonGoals: ["large quest panel", "always-on inventory surface"],
};

export const sampleState = {
  health: 42,
  stamina: 61,
  poisonSeconds: 2,
  quest: "Find the gate key",
  pickup: "Iron Charm nearby",
  warning: "Incoming strike",
};

function clampPercent(value) {
  return Math.max(0, Math.min(100, value));
}

function getMeterLevel(value, warningThreshold, criticalThreshold) {
  if (value <= criticalThreshold) {
    return "critical";
  }

  if (value <= warningThreshold) {
    return "warning";
  }

  return "stable";
}

function getThreatCallout(state, healthLevel) {
  if (state.warning) {
    return {
      tone: "danger",
      label: "Threat",
      message: state.warning,
    };
  }

  if (healthLevel === "critical") {
    return {
      tone: "danger",
      label: "Health",
      message: "Retreat or heal soon",
    };
  }

  if (state.poisonSeconds > 0) {
    return {
      tone: "warning",
      label: "Status",
      message: `Poison draining for ${state.poisonSeconds}s`,
    };
  }

  return null;
}

export function renderHud(root, state = sampleState) {
  if (!root) {
    return;
  }

  const healthPercent = clampPercent(state.health);
  const staminaPercent = clampPercent(state.stamina);
  const healthLevel = getMeterLevel(state.health, 60, 35);
  const staminaLevel = getMeterLevel(state.stamina, 35, 20);
  const threatCallout = getThreatCallout(state, healthLevel);

  const statusChips = [];

  if (state.poisonSeconds > 0) {
    statusChips.push(
      `<span class="status-chip" data-tone="danger">Poison ${state.poisonSeconds}s</span>`
    );
  }

  if (staminaLevel !== "stable") {
    statusChips.push(
      `<span class="status-chip" data-tone="warning">Guard your sprint</span>`
    );
  }

  if (statusChips.length === 0) {
    statusChips.push(`<span class="status-chip" data-tone="quiet">Stable</span>`);
  }

  root.innerHTML = `
    <section class="hud" aria-label="combat HUD">
      <div class="hud-top">
        <div class="objective-chip">
          <span class="hud-kicker">Objective</span>
          <strong>${state.quest}</strong>
        </div>
        ${
          threatCallout
            ? `
              <div class="alert-pill" data-tone="${threatCallout.tone}" role="status" aria-live="polite">
                <span class="hud-kicker">${threatCallout.label}</span>
                <strong>${threatCallout.message}</strong>
              </div>
            `
            : ""
        }
      </div>
      <div class="hud-bottom">
        <div class="vitals-card">
          <div class="vitals-header">
            <span class="hud-kicker">Scout</span>
            <strong>Readiness</strong>
          </div>
          <div class="meter-row" data-tone="health">
            <div class="meter-meta">
              <span>Health</span>
              <strong>${state.health}/100</strong>
            </div>
            <div class="meter-track" aria-hidden="true">
              <span class="meter-fill" data-tone="health" data-level="${healthLevel}" style="width: ${healthPercent}%"></span>
            </div>
          </div>
          <div class="meter-row" data-tone="stamina">
            <div class="meter-meta">
              <span>Stamina</span>
              <strong>${state.stamina}/100</strong>
            </div>
            <div class="meter-track" aria-hidden="true">
              <span class="meter-fill" data-tone="stamina" data-level="${staminaLevel}" style="width: ${staminaPercent}%"></span>
            </div>
          </div>
          <div class="status-strip" aria-label="status effects">
            ${statusChips.join("")}
          </div>
        </div>
        ${
          state.pickup
            ? `
              <div class="pickup-chip">
                <span class="hud-kicker">Nearby</span>
                <strong>${state.pickup}</strong>
              </div>
            `
            : ""
        }
      </div>
    </section>
  `;
}

if (typeof document !== "undefined") {
  renderHud(document.querySelector("#hud-root"));
}

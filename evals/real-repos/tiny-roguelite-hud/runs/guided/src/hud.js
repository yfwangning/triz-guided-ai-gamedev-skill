export const priority = {
  hidden: -1,
  persistent: 0,
  recentChange: 1,
  urgent: 2,
};

export const tuning = {
  urgentHealthThreshold: 30,
  revealDurationMs: 1800,
  maxContextSignals: 1,
};

export const verificationStates = [
  "idle",
  "damaged",
  "buffed",
  "pickupNearby",
  "objectiveUpdated",
];

export const nonGoals = [
  "no new permanent quest panel",
  "no settings menu",
  "no minimap",
  "no full HUD redesign",
  "no final art pass",
];

export const hudConfig = {
  approach: "priority reveal instead of more permanent UI",
  playerFacingSurfaces: ["coreHud", "contextSlot"],
  persistentSignals: ["health", "stamina"],
  verificationStates,
  nonGoals,
};

export const scenarios = {
  idle: {
    health: 74,
    stamina: 61,
    signals: [],
  },
  damaged: {
    health: 24,
    stamina: 42,
    signals: [{ type: "warning", text: "Low health: create distance", priority: "urgent" }],
  },
  buffed: {
    health: 58,
    stamina: 68,
    signals: [{ type: "status", text: "Haste expires in 4s", priority: "recentChange" }],
  },
  pickupNearby: {
    health: 64,
    stamina: 54,
    signals: [{ type: "pickup", text: "Iron Charm nearby", priority: "recentChange" }],
  },
  objectiveUpdated: {
    health: 70,
    stamina: 58,
    signals: [{ type: "quest", text: "Gate key found", priority: "recentChange" }],
  },
};

export function getContextSignals(state) {
  const lowHealth = state.health <= tuning.urgentHealthThreshold
    ? [{ type: "warning", text: "Low health: create distance", priority: "urgent" }]
    : [];

  return [...lowHealth, ...state.signals]
    .sort((a, b) => priority[b.priority] - priority[a.priority])
    .slice(0, tuning.maxContextSignals);
}

export function renderHud(root, scenarioName = "idle") {
  const state = scenarios[scenarioName];
  const [signal] = getContextSignals(state);

  root.innerHTML = `
    <section class="core-hud" aria-label="core resources">
      <strong>Core</strong>
      <p>HP ${state.health}/100</p>
      <p>STA ${state.stamina}/100</p>
    </section>

    ${signal ? `
      <section class="context-slot" aria-label="current important signal">
        <strong>${signal.text}</strong>
        <p>Reason: ${signal.priority}</p>
      </section>
    ` : ""}

    <section class="debug-visibility" aria-label="HUD visibility debug">
      <strong>Debug visibility</strong>
      <p>Scenario: ${scenarioName}</p>
      <p>Visible contextual signals: ${signal ? 1 : 0}</p>
      <p>Rule: show only the highest-priority contextual signal.</p>
    </section>

    <section class="state-switcher" aria-label="verification states">
      ${verificationStates.map((name) => `<button data-state="${name}">${name}</button>`).join("")}
    </section>
  `;

  root.querySelectorAll("[data-state]").forEach((button) => {
    button.addEventListener("click", () => renderHud(root, button.dataset.state));
  });
}

if (typeof document !== "undefined") {
  renderHud(document.querySelector("#hud-root"));
}

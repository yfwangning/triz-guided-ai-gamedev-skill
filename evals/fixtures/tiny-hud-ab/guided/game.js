export const hudSignalPriority = {
  persistent: 0,
  recentChange: 1,
  urgent: 2,
  hidden: -1,
};

export const tuning = {
  revealDurationMs: 1800,
  urgentHealthThreshold: 30,
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
  "no permanent quest panel",
  "no settings menu",
  "no full HUD redesign",
  "no final art pass",
];

export const scenarios = {
  idle: {
    health: 72,
    stamina: 61,
    signals: [],
  },
  damaged: {
    health: 24,
    stamina: 48,
    signals: [{ kind: "warning", label: "Low health: create distance", priority: "urgent" }],
  },
  buffed: {
    health: 58,
    stamina: 70,
    signals: [{ kind: "status", label: "Haste expires in 4s", priority: "recentChange" }],
  },
  pickupNearby: {
    health: 64,
    stamina: 52,
    signals: [{ kind: "pickup", label: "Iron Charm nearby", priority: "recentChange" }],
  },
  objectiveUpdated: {
    health: 70,
    stamina: 58,
    signals: [{ kind: "quest", label: "Gate key found", priority: "recentChange" }],
  },
};

export function getVisibleSignals(state) {
  const urgentHealth = state.health <= tuning.urgentHealthThreshold
    ? [{ kind: "warning", label: "Low health: create distance", priority: "urgent" }]
    : [];

  return [...urgentHealth, ...state.signals]
    .sort((a, b) => hudSignalPriority[b.priority] - hudSignalPriority[a.priority])
    .slice(0, tuning.maxContextSignals);
}

export function renderHud(root, scenarioName = "idle") {
  const state = scenarios[scenarioName];
  const visibleSignals = getVisibleSignals(state);
  const signal = visibleSignals[0];

  root.innerHTML = `
    <section class="core-hud" aria-label="core resources">
      <strong>Core</strong>
      <p>HP ${state.health}/100</p>
      <p>STA ${state.stamina}/100</p>
    </section>

    ${signal ? `
      <section class="context-signal" aria-label="current important signal">
        <div class="signal-title">${signal.label}</div>
        <div>Reason: ${signal.priority}</div>
      </section>
    ` : ""}

    <section class="debug-panel" aria-label="HUD debug reasons">
      <strong>Debug visibility</strong>
      <p>Scenario: ${scenarioName}</p>
      <p>Visible signals: ${visibleSignals.length}</p>
      <p>Rule: show only the highest-priority contextual signal.</p>
    </section>

    <section class="scenario-switcher" aria-label="verification states">
      ${verificationStates.map((name) => `<button data-scenario="${name}">${name}</button>`).join("")}
    </section>
  `;

  root.querySelectorAll("[data-scenario]").forEach((button) => {
    button.addEventListener("click", () => renderHud(root, button.dataset.scenario));
  });
}

if (typeof document !== "undefined") {
  renderHud(document.querySelector("#app"));
}

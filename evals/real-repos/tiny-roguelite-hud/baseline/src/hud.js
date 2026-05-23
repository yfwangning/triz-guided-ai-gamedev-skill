export const hudConfig = {
  playerFacingSurfaces: ["floatingHudChips"],
  persistentSignals: ["health", "stamina", "poison", "quest", "pickup", "incomingAttack"],
  verificationStates: [],
  nonGoals: [],
};

export const sampleState = {
  health: 42,
  stamina: 61,
  poisonSeconds: 2,
  quest: "Find the gate key",
  pickup: "Iron Charm nearby",
  warning: "Incoming strike",
};

export function renderHud(root, state = sampleState) {
  root.innerHTML = `
    <section class="hud" aria-label="baseline HUD">
      <span class="hud-chip">HP ${state.health}/100</span>
      <span class="hud-chip">STA ${state.stamina}/100</span>
      <span class="hud-chip">Poison ${state.poisonSeconds}s</span>
      <span class="hud-chip">${state.quest}</span>
      <span class="hud-chip">${state.pickup}</span>
      <span class="hud-chip">${state.warning}</span>
    </section>
  `;
}

if (typeof document !== "undefined") {
  renderHud(document.querySelector("#hud-root"));
}

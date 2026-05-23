export const hudConfig = {
  approach: "add more visible UI so players cannot miss information",
  playerFacingSurfaces: [
    "resourcePanel",
    "questPanel",
    "statusPanel",
    "pickupPanel",
    "combatLog",
    "minimap",
    "settingsPanel",
    "tutorialPanel",
  ],
  persistentSignals: [
    "health",
    "stamina",
    "poison",
    "quest",
    "pickup",
    "incomingAttack",
    "combatHistory",
    "customization",
  ],
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
    <section class="resource-panel" aria-label="resources">
      <strong>Resources</strong>
      <p>HP ${state.health}/100</p>
      <p>STA ${state.stamina}/100</p>
      <p>Shield 10/40</p>
    </section>

    <section class="status-panel" aria-label="status effects">
      <strong>All Status Effects</strong>
      <p>Poison ${state.poisonSeconds}s</p>
      <p>Haste 4s</p>
      <p>Marked 5s</p>
      <p>Burn 8s</p>
    </section>

    <section class="quest-panel" aria-label="quest tracker">
      <strong>Quest Tracker</strong>
      <p>${state.quest}</p>
      <p>Optional: clear the crypt</p>
      <p>Bonus: collect 3 relics</p>
    </section>

    <section class="settings-panel" aria-label="HUD settings">
      <strong>HUD Settings</strong>
      <p>Opacity, scale, icon size, log length</p>
    </section>

    <section class="tutorial-panel" aria-label="tutorial">
      <strong>New HUD Help</strong>
      <p>Use the new HUD panels to avoid missing information.</p>
      <p>${state.warning}</p>
    </section>

    <section class="pickup-panel" aria-label="nearby pickup">
      <strong>Pickup</strong>
      <p>${state.pickup}</p>
    </section>

    <section class="minimap" aria-label="minimap">
      <strong>Minimap</strong>
      <p>Enemy pings, pickup, door, shrine</p>
    </section>

    <section class="combat-log" aria-label="combat log">
      <strong>Combat Log</strong>
      <p>Picked up shard.</p>
      <p>Poison applied.</p>
      <p>Quest updated.</p>
      <p>Enemy charging.</p>
    </section>
  `;
}

if (typeof document !== "undefined") {
  renderHud(document.querySelector("#hud-root"));
}

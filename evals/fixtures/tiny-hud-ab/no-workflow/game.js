export const hudPlan = {
  approach: "add-more-permanent-surfaces",
  permanentSurfaces: [
    "resourcePanel",
    "questPanel",
    "combatLog",
    "statusGrid",
    "minimap",
    "settingsMenu",
    "tutorialPopups",
  ],
  verificationStates: [],
  nonGoals: [],
};

export function renderHud(root) {
  root.innerHTML = `
    <section class="hud-panel" aria-label="resources">
      <strong>Resources</strong>
      <p>HP 42/100</p>
      <p>STA 61/100</p>
      <p>Shield 10/40</p>
    </section>

    <section class="quest-panel" aria-label="quest tracker">
      <strong>Quest Tracker</strong>
      <p>Find the gate key</p>
      <p>Optional: clear the crypt</p>
      <p>Bonus: collect 3 relics</p>
    </section>

    <section class="status-grid" aria-label="all status effects">
      <strong>Status Icons</strong>
      <p>Poison 2s</p>
      <p>Haste 4s</p>
      <p>Burn 7s</p>
      <p>Marked 5s</p>
    </section>

    <section class="minimap" aria-label="minimap">
      <strong>Minimap</strong>
      <p>Enemy pings, pickups, door, shrine</p>
    </section>

    <section class="settings-menu" aria-label="HUD settings">
      <strong>HUD Settings</strong>
      <p>Opacity, scale, icon size, log length</p>
    </section>

    <section class="tutorial-popups" aria-label="tutorial popups">
      <strong>New HUD Help</strong>
      <p>Open settings to customize HUD panels.</p>
      <p class="warning">Incoming strike: dodge now.</p>
    </section>

    <section class="combat-log" aria-label="combat log">
      <strong>Combat Log</strong>
      <p>Picked up Iron Charm.</p>
      <p>Poison applied.</p>
      <p>Quest updated.</p>
      <p>Enemy charging attack.</p>
    </section>
  `;
}

if (typeof document !== "undefined") {
  renderHud(document.querySelector("#app"));
}

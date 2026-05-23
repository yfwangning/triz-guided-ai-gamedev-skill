export const baselineHud = {
  resources: ["HP", "STA"],
  competingSignals: ["status", "quest", "pickup", "warning"],
};

if (typeof document !== "undefined") {
  document.body.dataset.fixture = "baseline";
}

const canvas = document.querySelector("#game");
const ctx = canvas.getContext("2d");

const ui = {
  generic: document.querySelector("#modeGeneric"),
  triz: document.querySelector("#modeTriz"),
  restart: document.querySelector("#restart"),
  modeLabel: document.querySelector("#modeLabel"),
  modeTitle: document.querySelector("#modeTitle"),
  modeCopy: document.querySelector("#modeCopy"),
  time: document.querySelector("#time"),
  hits: document.querySelector("#hits"),
  fairness: document.querySelector("#fairness"),
  log: document.querySelector("#log"),
};

const W = canvas.width;
const H = canvas.height;
const keys = new Set();
let mobileMove = 0;
let mobileDash = false;
let mode = "generic";
let lastTime = performance.now();

const modeText = {
  generic: {
    label: "普通 AI 方案",
    title: "普通 AI 方案：用随机加招制造惊喜",
    copy:
      "它确实更“热闹”，但攻击规则、前摇和命中原因不稳定。玩家容易觉得自己是被随机惩罚，而不是学会了 Boss。",
    fairness: "低",
  },
  triz: {
    label: "引导方案",
    title: "引导方案：同一攻击家族先教学，再变化",
    copy:
      "它只做一个 Ground Slam 家族：先给基础版，再给延迟变体。刺激感来自先教再变，而不是随机堆招。",
    fairness: "高",
  },
};

const state = {
  player: { x: W / 2, y: H - 54, r: 13, dash: 0, invuln: 0 },
  boss: { x: W / 2, y: 72, r: 30 },
  attacks: [],
  nextAttack: 1.1,
  elapsed: 0,
  hits: 0,
  dodges: 0,
  sequence: 0,
  log: [],
  flash: 0,
};

function reset(nextMode = mode) {
  mode = nextMode;
  state.player.x = W / 2;
  state.player.dash = 0;
  state.player.invuln = 0;
  state.attacks = [];
  state.nextAttack = 1.0;
  state.elapsed = 0;
  state.hits = 0;
  state.dodges = 0;
  state.sequence = 0;
  state.log = [];
  state.flash = 0;
  updateModeUI();
  pushLog(mode === "triz" ? "引导: 先教基础 Ground Slam。" : "普通: Boss 会随机加招。");
}

function updateModeUI() {
  const text = modeText[mode];
  ui.generic.classList.toggle("active", mode === "generic");
  ui.triz.classList.toggle("active", mode === "triz");
  ui.modeLabel.textContent = text.label;
  ui.modeTitle.textContent = text.title;
  ui.modeCopy.textContent = text.copy;
  ui.fairness.textContent = text.fairness;
}

function pushLog(message) {
  state.log.unshift(`${state.elapsed.toFixed(1)}s · ${message}`);
  state.log = state.log.slice(0, 8);
  ui.log.replaceChildren(
    ...state.log.map((line) => {
      const li = document.createElement("li");
      li.textContent = line;
      return li;
    }),
  );
}

function spawnAttack() {
  state.sequence += 1;
  if (mode === "triz") {
    const delayed = state.sequence > 2 && state.sequence % 3 === 0;
    const attack = {
      kind: delayed ? "delayed-slam" : "base-slam",
      x: state.player.x + (Math.random() * 70 - 35),
      y: state.player.y,
      radius: delayed ? 58 : 50,
      telegraph: delayed ? 1.35 : 0.82,
      age: 0,
      hit: false,
      label: delayed ? "Ground Slam 延迟变体" : "Ground Slam 基础版",
    };
    state.attacks.push(attack);
    pushLog(delayed ? "同一前摇，但延迟 0.5s。" : "基础版前摇出现。");
    state.nextAttack = delayed ? 1.95 : 1.45;
    return;
  }

  const options = [
    { kind: "quick-burst", radius: 62, telegraph: 0.34, label: "突发爆裂" },
    { kind: "wide-slam", radius: 92, telegraph: 0.64, label: "大范围砸地" },
    { kind: "fake-then-hit", radius: 48, telegraph: 1.05, label: "假前摇后命中" },
    { kind: "side-laser", radius: 38, telegraph: 0.42, label: "侧向激光" },
  ];
  const pick = options[Math.floor(Math.random() * options.length)];
  state.attacks.push({
    ...pick,
    x: pick.kind === "side-laser" ? (Math.random() < 0.5 ? 120 : W - 120) : state.player.x + (Math.random() * 120 - 60),
    y: pick.kind === "side-laser" ? state.player.y - 8 : state.player.y,
    age: 0,
    hit: false,
  });
  pushLog(`${pick.label}，前摇 ${pick.telegraph.toFixed(2)}s。`);
  state.nextAttack = 0.85 + Math.random() * 0.7;
}

function update(dt) {
  state.elapsed += dt;
  state.nextAttack -= dt;
  state.flash = Math.max(0, state.flash - dt);

  if (state.nextAttack <= 0) spawnAttack();

  const left = keys.has("ArrowLeft") || keys.has("a") || keys.has("A") || mobileMove < 0;
  const right = keys.has("ArrowRight") || keys.has("d") || keys.has("D") || mobileMove > 0;
  const wantsDash = keys.has(" ") || mobileDash;
  const speed = state.player.dash > 0 ? 390 : 210;

  if (left) state.player.x -= speed * dt;
  if (right) state.player.x += speed * dt;
  state.player.x = Math.max(28, Math.min(W - 28, state.player.x));

  if (wantsDash && state.player.dash <= 0 && state.player.invuln <= 0) {
    state.player.dash = 0.18;
    state.player.invuln = 0.28;
  }
  mobileDash = false;

  state.player.dash = Math.max(0, state.player.dash - dt);
  state.player.invuln = Math.max(0, state.player.invuln - dt);

  for (const attack of state.attacks) {
    attack.age += dt;
    const justLanded = attack.age >= attack.telegraph && !attack.resolved;
    if (!justLanded) continue;
    attack.resolved = true;
    const dist = Math.hypot(state.player.x - attack.x, state.player.y - attack.y);
    const hit = dist < attack.radius + state.player.r && state.player.invuln <= 0;
    if (hit) {
      attack.hit = true;
      state.hits += 1;
      state.flash = 0.16;
      pushLog(`命中：${attack.label}。${mode === "triz" ? "原因可解释。" : "规则不稳定。"}`);
    } else {
      state.dodges += 1;
      if (mode === "triz" && attack.kind === "delayed-slam") {
        pushLog("躲过延迟变体：玩家学会不要闪太早。");
      }
    }
  }

  state.attacks = state.attacks.filter((attack) => attack.age < attack.telegraph + 0.42);
  ui.time.textContent = `${state.elapsed.toFixed(1)}s`;
  ui.hits.textContent = String(state.hits);
}

function drawArena() {
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#242a33";
  ctx.fillRect(0, 0, W, H);

  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  for (let x = 40; x < W; x += 40) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let y = 40; y < H; y += 40) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }

  ctx.fillStyle = "#343b46";
  roundRect(34, 28, W - 68, H - 56, 18, true, false);
}

function drawAttack(attack) {
  const t = Math.min(1, attack.age / attack.telegraph);
  const isTriz = mode === "triz";
  const color = isTriz ? (attack.kind === "delayed-slam" ? "#f0b84c" : "#e45b4f") : "#d94848";
  const alpha = attack.resolved ? 0.2 : 0.18 + t * 0.32;

  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(attack.x, attack.y, attack.radius * (0.78 + t * 0.22), 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = 0.86;
  ctx.strokeStyle = color;
  ctx.lineWidth = isTriz ? 5 : 3;
  ctx.beginPath();
  ctx.arc(attack.x, attack.y, attack.radius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * t);
  ctx.stroke();

  if (isTriz) {
    ctx.fillStyle = attack.kind === "delayed-slam" ? "#ffe6aa" : "#ffd2cd";
    ctx.font = "700 15px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(attack.kind === "delayed-slam" ? "WAIT" : "SLAM", attack.x, attack.y - attack.radius - 12);
  }
  ctx.restore();
}

function drawActors() {
  const boss = state.boss;
  ctx.save();
  ctx.translate(boss.x, boss.y);
  ctx.fillStyle = mode === "triz" ? "#277a69" : "#7d4cd1";
  ctx.beginPath();
  ctx.arc(0, 0, boss.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#fffaf0";
  ctx.fillRect(-18, -6, 36, 8);
  ctx.fillStyle = "#1d2330";
  ctx.fillRect(-11, -4, 7, 4);
  ctx.fillRect(5, -4, 7, 4);
  ctx.restore();

  const p = state.player;
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.fillStyle = p.invuln > 0 ? "#f4ce5e" : "#f3f6fb";
  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, p.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

function drawHUD() {
  const title = mode === "triz" ? "Guided: teach, then vary" : "Generic: random extra attacks";
  ctx.fillStyle = "rgba(17,24,39,0.64)";
  roundRect(18, 16, 276, 54, 8, true, false);
  ctx.fillStyle = "#fffaf0";
  ctx.font = "800 17px system-ui, sans-serif";
  ctx.fillText(title, 32, 39);
  ctx.font = "13px system-ui, sans-serif";
  ctx.fillStyle = "rgba(255,250,240,0.78)";
  ctx.fillText("A/D or arrows move · Space dash", 32, 58);

  if (state.flash > 0) {
    ctx.fillStyle = `rgba(199,61,47,${state.flash * 1.8})`;
    ctx.fillRect(0, 0, W, H);
  }
}

function draw() {
  drawArena();
  for (const attack of state.attacks) drawAttack(attack);
  drawActors();
  drawHUD();
}

function roundRect(x, y, w, h, r, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function loop(now) {
  const dt = Math.min(0.035, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(loop);
}

document.addEventListener("keydown", (event) => {
  keys.add(event.key);
  if (event.key === " ") event.preventDefault();
});

document.addEventListener("keyup", (event) => {
  keys.delete(event.key);
});

ui.generic.addEventListener("click", () => reset("generic"));
ui.triz.addEventListener("click", () => reset("triz"));
ui.restart.addEventListener("click", () => reset(mode));

document.querySelectorAll("[data-move]").forEach((button) => {
  button.addEventListener("pointerdown", () => {
    mobileMove = Number(button.dataset.move);
  });
  button.addEventListener("pointerup", () => {
    mobileMove = 0;
  });
  button.addEventListener("pointercancel", () => {
    mobileMove = 0;
  });
});

document.querySelector("[data-dash]").addEventListener("click", () => {
  mobileDash = true;
});

const initialMode = new URLSearchParams(window.location.search).get("mode") === "triz" ? "triz" : "generic";
reset(initialMode);
requestAnimationFrame(loop);

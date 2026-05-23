#!/usr/bin/env node
import { readFileSync } from "node:fs";

const file = process.argv[2];

if (!file) {
  console.error("Usage: node scripts/check-eval-output.mjs <output.md>");
  process.exit(2);
}

const text = readFileSync(file, "utf8");

const checks = [
  {
    name: "target or improve",
    pass: /\b(Improve|Desired improvement|What should improve|目标|改善|想变好)\b/i.test(text),
  },
  {
    name: "risk or watch out",
    pass: /\b(Watch out|risk|worsen|tradeoff|might get worse|怕变坏|风险|取舍)\b/i.test(text),
  },
  {
    name: "useful pattern",
    pass: /\b(Useful pattern|Useful patterns|solution pattern|pattern|解法|模式)\b/i.test(text),
  },
  {
    name: "smallest test or prototype",
    pass: /\b(Smallest test|smallest playable|prototype slice|prototype|最小|原型|试玩)\b/i.test(text),
  },
  {
    name: "verification",
    pass: /\b(Check|Verify|Verification|Acceptance criteria|playtest|screenshot|prove it works|prove it failed|验证|验收|试玩)\b/i.test(text),
  },
  {
    name: "scope control",
    pass: /\b(Non-goals|Do not|avoid|skip|no new|不要|避免|非目标)\b/i.test(text),
  },
  {
    name: "concrete game-dev action",
    pass: /\b(enemy|boss|HUD|level|asset|icon|dialogue|attack|state|telegraph|debug|config|scene|敌人|关卡|技能|状态|调试|配置)\b/i.test(text),
  },
];

const isDoubleDiamond = /Double-diamond pass|Problem diverge|Solution diverge/i.test(text);
if (isDoubleDiamond) {
  checks.push(
    {
      name: "problem divergence",
      pass: /Problem diverge/i.test(text) && /(1\.|-\s).+(\n|$)/.test(text),
    },
    {
      name: "problem convergence",
      pass: /Problem converge/i.test(text) && /Chosen first tradeoff|first tradeoff|tradeoff/i.test(text),
    },
    {
      name: "solution divergence",
      pass: /Solution diverge/i.test(text) && /Safe option/i.test(text) && /Weird option/i.test(text),
    },
    {
      name: "solution convergence",
      pass: /Solution converge/i.test(text) && /What would prove|prove it works|prove it failed/i.test(text),
    },
  );
}

const trizTerms = (text.match(/\b(TRIZ|Contradiction|Segmentation|Dynamics|Feedback|Intermediary|Separation|IFR)\b/g) || []).length;
const explicitlyAllowsTriz = /Use TRIZ|TRIZ principles|explicit TRIZ|显式|原则/i.test(text);
const trizPenalty = trizTerms > 4 && !explicitlyAllowsTriz;

let score = 0;
for (const check of checks) {
  if (check.pass) score += 2;
}
if (trizPenalty) score -= 2;

const maxScore = checks.length * 2;
const passThreshold = isDoubleDiamond ? 20 : 12;
const passed = score >= passThreshold && !trizPenalty;

console.log(`File: ${file}`);
console.log(`Score: ${score}/${maxScore}`);
for (const check of checks) {
  console.log(`${check.pass ? "PASS" : "FAIL"} ${check.name}`);
}
console.log(`${trizPenalty ? "FAIL" : "PASS"} user-facing terminology`);

if (!passed) {
  console.error(`Eval failed. Expected at least ${passThreshold}/${maxScore} and no TRIZ terminology penalty.`);
  process.exit(1);
}

console.log("Eval passed.");

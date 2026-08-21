#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const command = process.argv[2] || "help";
const cwd = process.cwd();
const marker = "## Kui Vue\n";
const instructions = `${marker}
- This project uses Vue 3 and Kui Vue. Prefer components and public APIs documented at https://k-ui.cn.
- Import components from \`kui-vue\` and icons from \`kui-icons\`; import \`kui-vue/style/index.css\` once.
- Read the installed \`kui-vue/metadata\` before using unfamiliar props, events, or slots. Do not invent component APIs.
- Keep \`theme\`, \`size\`, and \`shape\` consistent and run typecheck/lint after edits.
`;

if (command === "init") {
  const target = path.join(cwd, "AGENTS.md");
  const current = fs.existsSync(target) ? fs.readFileSync(target, "utf8") : "";
  if (!current.includes(marker.trim())) {
    fs.writeFileSync(target, `${current.trim()}${current.trim() ? "\n\n" : ""}${instructions}`);
    console.log(`Added Kui Vue guidance to ${target}`);
  } else {
    console.log("Kui Vue guidance already exists in AGENTS.md");
  }
} else {
  console.log("Usage: kui-vue-ai init");
}

#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { executeTool, metadata } from "./query.mjs";

const packageName = "kui-vue";
const heading = "## Kui Vue";
const legacyLines = [
  "- This project uses Vue 3 and Kui Vue. Prefer components and public APIs documented at https://k-ui.cn.",
  "- Import components from `kui-vue` and icons from `kui-icons`; import `kui-vue/style/index.css` once.",
  "- Read the installed `kui-vue/metadata` before using unfamiliar props, events, or slots. Do not invent component APIs.",
  "- Keep `theme`, `size`, and `shape` consistent and run typecheck/lint after edits.",
  "- Button.icon takes IconType[] data imported from kui-icons: import { Search } from 'kui-icons'; use <Button :icon=\"Search\" /> in Vue templates or <Button icon={Search} /> in TSX. Never pass h(Icon, ...), a VNode, a component function, or an icon-name string to icon. Custom rendered content belongs in the default slot. Input prefix/suffix slots are not the Button.icon API.",
];
const begin = `<!-- ${packageName}:start -->`;
const end = `<!-- ${packageName}:end -->`;
const bin = `${packageName}-ai`;
const root = fileURLToPath(new URL("../", import.meta.url));
const help = `Usage: ${bin} <command>
  init                              Update managed guidance in ./AGENTS.md
  paths                             Show installed version and resource paths
  search <query> [--offset N] [--limit N]
  api <component> [--section NAME]   API without example source
  examples <component> [--offset N] [--limit N]
  example <component> <id>           Read one example from examples output
  templates [query]
  template <id>
  validate <file|->                  Check a source file or stdin; exit 1 if invalid
  migration [vue-to-react|react-to-vue]  Read migration guidance (default: vue-to-react)
  query <MCP-tool-name> '<JSON>'     Same query engine, no MCP setup required
  help
All queries return JSON. Limits: 1–20, default 10. Errors exit nonzero.
Package export specifiers (e.g. ${packageName}/metadata) are not directories.`;

function guidance() {
  return `${begin}
Installed ${packageName} guidance (version ${metadata.version}; managed by ${bin} init).
- Read the installed Skill before implementation: node_modules/${packageName}/ai/skills/${packageName}/SKILL.md. If this path is unavailable, run pnpm exec ${bin} paths to resolve it.
- ${packageName}/metadata and ${packageName}/skill are package export specifiers, NOT directories. Resolve them with node -p "require.resolve('${packageName}/metadata')" or use pnpm exec ${bin} paths.
- Without MCP, use pnpm exec ${bin} search Input, api Input --section props, api Input --section behavior, examples Input, and example Input <id>. Run help for arguments. Do not read the entire metadata JSON at once.
- For migration, read pnpm exec ${bin} migration vue-to-react or migration react-to-vue and query both installed libraries. Confirm both versions; declarations verify types, examples and behavior contracts verify usage.
- Import components from ${packageName}, icons from kui-icons, and ${packageName}/style/index.css once. Button.icon accepts imported icon data, not a rendered Icon element.
- Run pnpm exec ${bin} validate <file>, then application typecheck and interaction tests. Validation is partial; inspect skipped/complete and do not equate typecheck success with behavioral parity.
- Prefer installed-version resources over online docs. Do not invent APIs. Project-specific instructions outside this managed block are preserved.
${end}`;
}

function init() {
  const target = path.resolve("AGENTS.md");
  const current = fs.existsSync(target) ? fs.readFileSync(target, "utf8") : "";
  const start = current.indexOf(begin);
  const finish = current.indexOf(end);
  let next;
  if (start >= 0 || finish >= 0) {
    if (
      start < 0 ||
      finish < start ||
      current.indexOf(begin, start + begin.length) >= 0 ||
      current.indexOf(end, finish + end.length) >= 0
    ) {
      throw new Error("Malformed or duplicate managed markers in AGENTS.md; no changes made.");
    }
    next = current.slice(0, start) + guidance() + current.slice(finish + end.length);
  } else {
    // Upgrade only exact lines emitted by the previous initializer in its own
    // section. Never replace an entire user-maintained heading or paragraph.
    const lines = current.split(/(?<=\n)/);
    let inSection = false;
    next = lines
      .filter((line) => {
        const trimmed = line.trim();
        if (/^##\s/.test(trimmed)) inSection = trimmed === heading;
        return !(inSection && legacyLines.includes(trimmed));
      })
      .join("");
    const headingMatch = new RegExp("^" + heading + "\\r?$", "m").exec(next);
    if (headingMatch) {
      const position = headingMatch.index + headingMatch[0].length;
      next = next.slice(0, position) + "\n\n" + guidance() + next.slice(position);
    } else {
      next +=
        (next ? (next.endsWith("\n") ? "\n" : "\n\n") : "") + heading + "\n\n" + guidance() + "\n";
    }
  }
  if (next !== current) fs.writeFileSync(target, next);
  console.log(
    JSON.stringify({ file: target, updated: next !== current, version: metadata.version }, null, 2),
  );
}

function parseOptions(tokens) {
  const args = [];
  const options = {};
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (!token.startsWith("--")) {
      args.push(token);
      continue;
    }
    const key = token.slice(2);
    if (
      !["offset", "limit", "section"].includes(key) ||
      key in options ||
      tokens[i + 1] === undefined
    )
      throw new Error(`Invalid option: ${token}`);
    const value = tokens[++i];
    options[key] = key === "section" ? value : Number(value);
  }
  return { args, options };
}

try {
  const [command = "help", ...tokens] = process.argv.slice(2);
  if (["help", "--help", "-h"].includes(command)) {
    console.log(help);
  } else if (command === "init") {
    if (tokens.length) throw new Error("init takes no arguments");
    init();
  } else if (command === "paths") {
    if (tokens.length) throw new Error("paths takes no arguments");
    console.log(
      JSON.stringify(
        {
          library: packageName,
          version: metadata.version,
          metadata: path.join(root, "ai/kui-components.json"),
          skill: path.join(root, `ai/skills/${packageName}/SKILL.md`),
          migration: path.join(root, `ai/skills/${packageName}/references/vue-to-react.md`),
          reverseMigration: path.join(root, `ai/skills/${packageName}/references/react-to-vue.md`),
        },
        null,
        2,
      ),
    );
  } else if (command === "migration") {
    const direction = tokens[0] || "vue-to-react";
    if (tokens.length > 1 || !["vue-to-react", "react-to-vue"].includes(direction))
      throw new Error("migration expects vue-to-react or react-to-vue");
    const guide = direction === "react-to-vue" ? "react-to-vue.md" : "vue-to-react.md";
    console.log(
      JSON.stringify(
        {
          version: metadata.version,
          source: fs.readFileSync(
            path.join(root, `ai/skills/${packageName}/references/${guide}`),
            "utf8",
          ),
        },
        null,
        2,
      ),
    );
  } else if (command === "query") {
    if (tokens.length !== 2) throw new Error("query requires a tool name and JSON arguments");
    const result = executeTool(tokens[0], JSON.parse(tokens[1]));
    console.log(JSON.stringify(result, null, 2));
    if (tokens[0] === "validate_kui_usage" && !result.valid) process.exitCode = 1;
  } else {
    const { args, options } = parseOptions(tokens);
    const commands = {
      search: ["search_components", ["query"]],
      api: ["get_component_api", ["name"]],
      examples: ["list_component_examples", ["name"]],
      example: ["get_component_example", ["name", "id"]],
      templates: ["list_templates", ["query"]],
      template: ["get_template", ["id"]],
      validate: ["validate_kui_usage", ["source"]],
    };
    const entry = commands[command];
    if (!entry) throw new Error(`Unknown command: ${command}. Run ${bin} help.`);
    const [tool, keys] = entry;
    if (args.length !== keys.length && !(command === "templates" && !args.length))
      throw new Error(`${command} expects ${keys.join(", ")}; quote arguments containing spaces.`);
    const params = { ...options };
    args.forEach((value, i) => {
      params[keys[i]] = value;
    });
    if (command === "validate")
      params.source = fs.readFileSync(args[0] === "-" ? 0 : args[0], "utf8");
    const result = executeTool(tool, params);
    console.log(JSON.stringify(result, null, 2));
    if (command === "validate" && !result.valid) process.exitCode = 1;
  }
} catch (error) {
  console.error(JSON.stringify({ error: error.message }));
  process.exitCode = 1;
}

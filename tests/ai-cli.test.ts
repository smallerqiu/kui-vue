import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { afterEach, describe, expect, it } from "vitest";

const root = path.resolve(import.meta.dirname, "..");
const dirs: string[] = [];
const temp = () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "kui-ai-cli-"));
  dirs.push(dir);
  return dir;
};
const run = (args: string[], cwd = root, input?: string) =>
  spawnSync(process.execPath, [path.join(root, "ai/cli.mjs"), ...args], {
    cwd,
    input,
    encoding: "utf8",
    timeout: 15000,
  });
const query = (args: string[]) => {
  const result = run(args);
  expect(result.status, result.stderr).toBe(0);
  return JSON.parse(result.stdout);
};
afterEach(() => {
  for (const dir of dirs.splice(0)) fs.rmSync(dir, { recursive: true, force: true });
});

describe("standalone AI CLI", () => {
  it("starts the absolute MCP entry outside the project and serves API queries", () => {
    const messages = [
      {
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
          protocolVersion: "2025-06-18",
          capabilities: {},
          clientInfo: { name: "test", version: "1" },
        },
      },
      { jsonrpc: "2.0", method: "notifications/initialized" },
      { jsonrpc: "2.0", id: 2, method: "tools/list" },
      {
        jsonrpc: "2.0",
        id: 3,
        method: "tools/call",
        params: { name: "get_component_api", arguments: { name: "Button" } },
      },
    ];
    const result = spawnSync(process.execPath, [path.join(root, "ai/mcp.mjs")], {
      cwd: temp(),
      input: messages.map((message) => JSON.stringify(message)).join("\n") + "\n",
      encoding: "utf8",
      timeout: 15000,
    });
    expect(result.status, result.stderr).toBe(0);
    const responses = result.stdout
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line));
    expect(responses).toHaveLength(3);
    expect(responses[0].result.capabilities.tools).toBeDefined();
    expect(
      responses[1].result.tools.some((tool: { name: string }) => tool.name === "get_component_api"),
    ).toBe(true);
    expect(responses[2].result.structuredContent.result.name).toBe("Button");
  });
  it("routes both migration directions and rejects unknown directions", () => {
    expect(query(["migration", "vue-to-react"]).source).toContain("# Vue → React");
    expect(query(["migration", "react-to-vue"]).source).toContain("# React → Vue");
    expect(fs.existsSync(query(["paths"]).reverseMigration)).toBe(true);
    expect(run(["migration", "sideways"]).status).toBe(1);
    expect(run(["migration", "react-to-vue", "extra"]).status).toBe(1);
  });
  it("locates real installed resources without assuming export specifiers are directories", () => {
    const result = query(["paths"]);
    expect(result.library).toBe("kui-vue");
    for (const key of ["metadata", "skill", "migration"])
      expect(fs.existsSync(result[key])).toBe(true);
    expect(fs.readFileSync(result.skill, "utf8")).toContain("references/vue-to-react.md");
    expect(query(["migration"]).source).toContain("theme.setThemeMode");
  });
  it("queries the same API as MCP without examples by default", () => {
    const api = query(["api", "Input"]);
    expect(api.name).toBe("Input");
    expect(api.examples).toBeUndefined();
    const response = spawnSync(process.execPath, [path.join(root, "ai/mcp.mjs")], {
      input:
        JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "tools/call",
          params: { name: "get_component_api", arguments: { name: "Input" } },
        }) + "\n",
      encoding: "utf8",
      timeout: 15000,
    });
    expect(response.status, response.stderr).toBe(0);
    expect(JSON.parse(response.stdout.trim()).result.structuredContent.result).toEqual(api);
    expect(query(["query", "get_component_api", '{"name":"Input","section":"props"}'])).toEqual(
      query(["api", "Input", "--section", "props"]),
    );
  });
  it("paginates and reads individual examples/templates", () => {
    expect(query(["search", "", "--limit", "1"]).items).toHaveLength(1);
    const examples = query(["examples", "Input", "--limit", "1"]);
    expect(examples.items).toHaveLength(1);
    expect(query(["example", "Input", examples.items[0].id]).source).toBeTruthy();
    const templates = query(["templates"]);
    expect(query(["template", templates[0].id]).source).toBeTruthy();
    expect(run(["search", "", "--limit", "21"]).status).toBe(1);
    expect(run(["api", "Input", "--section", "invalid"]).status).toBe(1);
    expect(run(["unknown"]).status).toBe(1);
    expect(run(["query", "get_component_api", "{"]).status).toBe(1);
    expect(run(["example", "Input", "../../package.json"]).status).toBe(1);
  });
  it("validates both stdin and files with a nonzero exit for invalid usage", () => {
    const source = "<template><Button definitely-invalid /></template>";
    const dir = temp();
    const file = path.join(dir, "App.vue");
    fs.writeFileSync(file, source);
    const stdin = run(["validate", "-"], dir, source);
    const disk = run(["validate", file], dir);
    expect(stdin.status).toBe(1);
    expect(disk.status).toBe(1);
    expect(JSON.parse(stdin.stdout)).toEqual(JSON.parse(disk.stdout));
    expect(JSON.parse(stdin.stdout).valid).toBe(false);
  });
  it("upgrades legacy generated guidance without deleting project rules", () => {
    const dir = temp();
    const file = path.join(dir, "AGENTS.md");
    const custom = "# Project\nKeep this rule.\n\n## Kui Vue\n";
    const legacy =
      "- Keep `theme`, `size`, and `shape` consistent and run typecheck/lint after edits.\n";
    fs.writeFileSync(
      file,
      custom + legacy + "Custom component convention.\n\n## Deploy\nNever deploy automatically.\n",
    );
    expect(run(["init"], dir).status).toBe(0);
    let content = fs.readFileSync(file, "utf8");
    expect(content).toContain("Keep this rule.");
    expect(content).toContain("Custom component convention.");
    expect(content).toContain("## Deploy\nNever deploy automatically.");
    expect(content).not.toContain(legacy);
    expect(content).toContain("package export specifiers, NOT directories");
    expect(run(["init"], dir).status).toBe(0);
    expect(fs.readFileSync(file, "utf8")).toBe(content);
    content = content.replace(
      /<!-- kui-vue:start -->[\s\S]*?<!-- kui-vue:end -->/,
      "<!-- kui-vue:start -->\nStale generated text\n<!-- kui-vue:end -->",
    );
    fs.writeFileSync(file, content);
    expect(run(["init"], dir).status).toBe(0);
    const updated = fs.readFileSync(file, "utf8");
    expect(updated).not.toContain("Stale generated text");
    expect(updated).toContain("Custom component convention.");
    expect(updated.match(/<!-- kui-vue:start -->/g)).toHaveLength(1);
  });
  it("does not overwrite a file with malformed managed markers", () => {
    const dir = temp();
    const file = path.join(dir, "AGENTS.md");
    const content = "Project notes\n<!-- kui-vue:start -->\nUnfinished edits";
    fs.writeFileSync(file, content);
    expect(run(["init"], dir).status).toBe(1);
    expect(fs.readFileSync(file, "utf8")).toBe(content);
  });
});

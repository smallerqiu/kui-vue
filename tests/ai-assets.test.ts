import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { afterEach, describe, expect, it } from "vitest";

const root = path.resolve(import.meta.dirname, "..");
const temporaryDirectories: string[] = [];
const metadata = JSON.parse(fs.readFileSync(path.join(root, "ai/kui-components.json"), "utf8")) as {
  library: string;
  components: Array<{
    name: string;
    parent?: string;
    props: Array<{ name: string; descriptionZh: string; descriptionEn: string }>;
    examples: Array<{ source: string }>;
  }>;
};

afterEach(() => {
  temporaryDirectories
    .splice(0)
    .forEach((directory) => fs.rmSync(directory, { recursive: true, force: true }));
});

describe("AI distribution assets", () => {
  it("publishes component APIs and examples", () => {
    expect(metadata.library).toBe("kui-vue");
    const select = metadata.components.find((component) => component.name === "Select");
    expect(select?.props.some((prop) => prop.name === "virtual")).toBe(true);
    expect(select?.examples.some((example) => example.source.includes("<Select"))).toBe(true);
    expect(
      metadata.components.every(
        (component) =>
          component.props.length === 0 ||
          component.props.every((prop) => prop.descriptionEn && prop.descriptionZh)
      )
    ).toBe(true);
    expect(metadata.components.find((component) => component.name === "Option")?.parent).toBe(
      "Select"
    );
  });

  it("publishes compact and complete LLM documentation", () => {
    const compact = fs.readFileSync(path.join(root, "public/llms.txt"), "utf8");
    const full = fs.readFileSync(path.join(root, "public/llms-full.txt"), "utf8");
    expect(compact).toContain("https://k-ui.cn/components/select");
    expect(full.length).toBeGreaterThan(compact.length);
    expect(full).toContain("# Select");
  });

  it("exposes metadata and the Agent Skill through package exports", () => {
    const require = createRequire(import.meta.url);
    expect(require.resolve("kui-vue/metadata")).toBe(path.join(root, "ai/kui-components.json"));
    expect(require.resolve("kui-vue/skill")).toBe(path.join(root, "ai/skills/kui-vue/SKILL.md"));
    const skill = fs.readFileSync(require.resolve("kui-vue/skill"), "utf8");
    expect(skill).toMatch(/^---\nname: kui-vue\ndescription:/);
  });

  it("initializes consumer guidance idempotently", () => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), "kui-vue-ai-"));
    temporaryDirectories.push(directory);
    const cli = path.join(root, "ai/cli.mjs");
    const first = spawnSync(process.execPath, [cli, "init"], { cwd: directory, encoding: "utf8" });
    const second = spawnSync(process.execPath, [cli, "init"], { cwd: directory, encoding: "utf8" });
    const instructions = fs.readFileSync(path.join(directory, "AGENTS.md"), "utf8");

    expect(first.status).toBe(0);
    expect(second.status).toBe(0);
    expect(instructions.match(/## Kui Vue/g)).toHaveLength(1);
    expect(second.stdout).toContain("already exists");
  });

  it("serves component search through the MCP stdio protocol", async () => {
    const child = spawn(process.execPath, [path.join(root, "ai/mcp.mjs")], {
      stdio: ["pipe", "pipe", "pipe"],
    });
    const responses: Array<{ id: number; result: unknown }> = [];
    let output = "";
    child.stdout.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => {
      output += chunk;
      const lines = output.split("\n");
      output = lines.pop() || "";
      lines.filter(Boolean).forEach((line) => responses.push(JSON.parse(line)));
    });
    child.stdin.write(
      `${JSON.stringify({ jsonrpc: "2.0", id: 1, method: "initialize", params: { protocolVersion: "2025-06-18" } })}\n`
    );
    child.stdin.write(
      `${JSON.stringify({ jsonrpc: "2.0", id: 2, method: "tools/call", params: { name: "search_components", arguments: { query: "VirtualList" } } })}\n`
    );
    await new Promise<void>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("MCP response timed out")), 2000);
      const poll = setInterval(() => {
        if (responses.length < 2) return;
        clearTimeout(timeout);
        clearInterval(poll);
        resolve();
      }, 10);
    });
    child.kill();

    expect(responses[0].id).toBe(1);
    expect(JSON.stringify(responses[1].result)).toContain("VirtualList");
  });
});

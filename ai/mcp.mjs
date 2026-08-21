#!/usr/bin/env node
import fs from "node:fs";
import process from "node:process";

const metadata = JSON.parse(fs.readFileSync(new URL("./kui-components.json", import.meta.url)));
const tools = [
  {
    name: "search_components",
    description: "Search Kui Vue components",
    inputSchema: { type: "object", properties: { query: { type: "string" } }, required: ["query"] },
  },
  {
    name: "get_component_api",
    description: "Get props, events, examples, and docs for a Kui Vue component",
    inputSchema: { type: "object", properties: { name: { type: "string" } }, required: ["name"] },
  },
];

const send = (message) => process.stdout.write(`${JSON.stringify(message)}\n`);
process.stdin.setEncoding("utf8");
let buffer = "";
process.stdin.on("data", (chunk) => {
  buffer += chunk;
  const lines = buffer.split("\n");
  buffer = lines.pop() || "";
  for (const line of lines) {
    if (!line.trim()) continue;
    const request = JSON.parse(line);
    let result = {};
    if (request.method === "initialize")
      result = {
        protocolVersion: "2025-06-18",
        capabilities: { tools: {} },
        serverInfo: { name: "kui-vue", version: metadata.version },
      };
    else if (request.method === "tools/list") result = { tools };
    else if (request.method === "tools/call") {
      const { name, arguments: args = {} } = request.params || {};
      const query = String(args.query || args.name || "").toLowerCase();
      const matches = metadata.components.filter(
        (component) =>
          component.name.toLowerCase().includes(query) ||
          component.tags.some((tag) => tag.includes(query))
      );
      const value =
        name === "get_component_api"
          ? matches[0] || null
          : matches.map(({ name, tags, documentation }) => ({ name, tags, documentation }));
      result = {
        content: [{ type: "text", text: JSON.stringify(value, null, 2) }],
        structuredContent: { result: value },
      };
    }
    if (request.id !== undefined) send({ jsonrpc: "2.0", id: request.id, result });
  }
});

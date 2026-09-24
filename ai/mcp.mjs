#!/usr/bin/env node
import process from "node:process";
import { metadata, tools, prompts, promptText, byName, executeTool } from "./query.mjs";

const toolResult = (value) => ({
  content: [{ type: "text", text: JSON.stringify(value, null, 2) }],
  structuredContent: { result: value },
});
const send = (message) => process.stdout.write(`${JSON.stringify(message)}\n`);

process.stdin.setEncoding("utf8");
let buffer = "";
process.stdin.on("data", (chunk) => {
  buffer += chunk;
  const lines = buffer.split("\n");
  buffer = lines.pop() || "";
  for (const line of lines) {
    if (!line.trim()) continue;
    let request;
    try {
      request = JSON.parse(line);
    } catch {
      send({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Invalid JSON" } });
      continue;
    }
    if (!request || typeof request !== "object" || Array.isArray(request)) {
      send({ jsonrpc: "2.0", id: null, error: { code: -32600, message: "Invalid request" } });
      continue;
    }
    try {
      let result = {};
      if (request.method === "initialize") {
        result = {
          protocolVersion: "2025-06-18",
          capabilities: { tools: {}, resources: {}, prompts: {} },
          serverInfo: { name: "kui-vue", version: metadata.version },
        };
      } else if (request.method === "tools/list") result = { tools };
      else if (request.method === "resources/list") {
        result = {
          resources: metadata.components.map((item) => ({
            uri: `kui-vue://components/${item.name}`,
            name: item.name,
            description: item.documentation,
            mimeType: "application/json",
          })),
        };
      } else if (request.method === "resources/read") {
        const name =
          String(request.params?.uri || "")
            .split("/")
            .at(-1) || "";
        const item = byName.get(name.toLowerCase());
        result = {
          contents: item
            ? [
                {
                  uri: request.params.uri,
                  mimeType: "application/json",
                  text: JSON.stringify(item, null, 2),
                },
              ]
            : [],
        };
      } else if (request.method === "prompts/list") result = { prompts };
      else if (request.method === "prompts/get") {
        const create = promptText[request.params?.name];
        result = {
          description: prompts.find((item) => item.name === request.params?.name)?.description,
          messages: create
            ? [
                {
                  role: "user",
                  content: { type: "text", text: create(request.params?.arguments || {}) },
                },
              ]
            : [],
        };
      } else if (request.method === "tools/call") {
        const { name, arguments: args = {} } = request.params || {};
        result = toolResult(executeTool(name, args));
      } else if (!["notifications/initialized", "ping"].includes(request.method)) {
        if (request.id !== undefined)
          send({
            jsonrpc: "2.0",
            id: request.id,
            error: { code: -32601, message: "Unknown method" },
          });
        continue;
      }
      if (request.id !== undefined) send({ jsonrpc: "2.0", id: request.id, result });
    } catch (error) {
      if (request.id !== undefined)
        send({
          jsonrpc: "2.0",
          id: request.id,
          ...(request.method === "tools/call"
            ? { result: { isError: true, content: [{ type: "text", text: error.message }] } }
            : { error: { code: -32602, message: error.message } }),
        });
    }
  }
});

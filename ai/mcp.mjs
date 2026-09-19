#!/usr/bin/env node
import fs from "node:fs";
import process from "node:process";
import { validateUsage } from "./validate.mjs";

const metadata = JSON.parse(fs.readFileSync(new URL("./kui-components.json", import.meta.url)));
const byName = new Map(metadata.components.map((item) => [item.name.toLowerCase(), item]));
const byTag = new Map(
  metadata.components.flatMap((item) =>
    [item.name, ...item.tags].map((tag) => [tag.toLowerCase(), item]),
  ),
);
const templates = JSON.parse(fs.readFileSync(new URL("./templates/index.json", import.meta.url)));
const tools = [
  ["search_components", "Search components by name, tag, or API description", "query"],
  ["get_component_api", "Get component API and behavior contracts without example source", "name"],
  ["list_component_examples", "List example IDs and titles for a component", "name"],
  [
    "get_component_example",
    "Read one complete example; pass its ID from list_component_examples",
    "name",
  ],
  ["list_templates", "List runnable business templates (optional search query)", "query"],
  ["get_template", "Read a complete runnable Vue business template", "id"],
  ["recommend_components", "Recommend components for a UI requirement", "requirement"],
  [
    "validate_kui_usage",
    "Check static props, values, events, models and known slots; reports skipped checks, not full type safety",
    "source",
  ],
].map(([name, description, argument]) => ({
  name,
  description,
  inputSchema: {
    type: "object",
    properties: {
      [argument]: { type: "string" },
      ...(["search_components", "list_component_examples"].includes(name)
        ? {
            offset: { type: "integer", minimum: 0 },
            limit: { type: "integer", minimum: 1, maximum: 20 },
          }
        : {}),
      ...(name === "get_component_api"
        ? {
            section: {
              type: "string",
              enum: ["all", "props", "events", "slots", "behavior", "models"],
            },
          }
        : {}),
      ...(name === "get_component_example" ? { id: { type: "string" } } : {}),
    },
    required:
      name === "list_templates"
        ? []
        : name === "get_component_example"
          ? [argument, "id"]
          : [argument],
    additionalProperties: false,
  },
}));
const prompts = [
  { name: "build_form", description: "Build a validated Kui Vue form", argument: "fields" },
  { name: "build_table", description: "Build a searchable Kui Vue table", argument: "columns" },
  { name: "build_modal_editor", description: "Build a modal form editor", argument: "entity" },
].map(({ name, description, argument }) => ({
  name,
  description,
  arguments: [{ name: argument, required: true }],
}));
const promptText = {
  build_form: ({ fields = "" }) =>
    `Adapt this runnable Kui Vue template for fields: ${fields}.\n${getTemplate("form").setup}\n${getTemplate("form").source}`,
  build_table: ({ columns = "" }) =>
    `Adapt this runnable Kui Vue template for columns: ${columns}.\n${getTemplate("table").setup}\n${getTemplate("table").source}`,
  build_modal_editor: ({ entity = "" }) =>
    `Adapt this runnable Kui Vue template for entity: ${entity}.\n${getTemplate("modal-editor").setup}\n${getTemplate("modal-editor").source}`,
};
const search = (query) => {
  const terms = String(query).toLowerCase().split(/\s+/).filter(Boolean);
  return metadata.components.filter((item) => {
    const text = JSON.stringify(item).toLowerCase();
    return terms.every((term) => text.includes(term));
  });
};
const recommend = (requirement) => {
  const groups = [
    [/(form|表单|edit|编辑)/i, ["Form", "FormItem", "Input", "Button"]],
    [/(table|列表|data|数据)/i, ["Table", "Page", "Input", "Button"]],
    [/(select|选择|dropdown|下拉)/i, ["Select", "Option", "TreeSelect"]],
    [/(modal|dialog|弹窗|对话框)/i, ["Modal", "Button"]],
    [/(upload|上传)/i, ["Upload"]],
    [/(layout|布局|admin|后台)/i, ["Layout", "Sider", "Header", "Content", "Menu"]],
  ];
  const names = new Set(
    groups.filter(([pattern]) => pattern.test(requirement)).flatMap(([, values]) => values),
  );
  if (!names.size)
    search(requirement)
      .slice(0, 8)
      .forEach((item) => names.add(item.name));
  return [...names].map((name) => byName.get(name.toLowerCase())).filter(Boolean);
};
const validate = (source) => validateUsage(source, metadata);
const getComponent = (name) => {
  const item = byName.get(String(name).toLowerCase()) || byTag.get(String(name).toLowerCase());
  if (!item) throw new Error(`Unknown component: ${name}`);
  return item;
};
const pageOf = (items, args) => ({
  total: items.length,
  offset: args.offset || 0,
  items: items.slice(args.offset || 0, (args.offset || 0) + (args.limit || 10)),
});
const getTemplate = (id) => {
  const entry = templates.find((item) => item.id === id);
  if (!entry) throw new Error(`Unknown template: ${id}`);
  return {
    ...entry,
    setup:
      "Vue 3.5+ with kui-vue installed; import kui-vue/style/index.css once in main.ts. Save source as App.vue. Mock requests are local and must be replaced for production.",
    source: fs.readFileSync(new URL(`./templates/${entry.file}`, import.meta.url), "utf8"),
  };
};
const validateArguments = (name, args) => {
  const tool = tools.find((item) => item.name === name);
  if (!tool) throw new Error(`Unknown tool: ${name}`);
  if (!args || typeof args !== "object" || Array.isArray(args))
    throw new Error("Arguments must be an object");
  for (const key of tool.inputSchema.required)
    if (!(key in args)) throw new Error(`Missing argument: ${key}`);
  for (const [key, value] of Object.entries(args)) {
    const spec = tool.inputSchema.properties[key];
    if (!spec) throw new Error(`Unknown argument: ${key}`);
    if (spec.type === "string" && typeof value !== "string")
      throw new Error(`${key} must be a string`);
    if (
      spec.type === "integer" &&
      (!Number.isInteger(value) || value < spec.minimum || (spec.maximum && value > spec.maximum))
    )
      throw new Error(`${key} is out of range`);
    if (spec.enum && !spec.enum.includes(value)) throw new Error(`Invalid ${key}`);
  }
};
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
        validateArguments(name, args);
        let value;
        if (name === "search_components") {
          value = pageOf(
            search(args.query).map(({ name, tags, documentation }) => ({
              name,
              tags,
              documentation,
            })),
            args,
          );
        } else if (name === "get_component_api") {
          const { examples, ...api } = getComponent(args.name);
          value =
            args.section && args.section !== "all"
              ? { name: api.name, version: metadata.version, [args.section]: api[args.section] }
              : { ...api, version: metadata.version, exampleCount: examples.length };
        } else if (name === "list_component_examples") {
          value = pageOf(
            getComponent(args.name).examples.map(({ title, file }) => ({ id: file, title })),
            args,
          );
        } else if (name === "get_component_example") {
          const example = getComponent(args.name).examples.find((item) => item.file === args.id);
          if (!example) throw new Error(`Unknown example: ${args.id}`);
          value = example;
        } else if (name === "list_templates") {
          value = templates.filter(
            (item) =>
              !args.query || JSON.stringify(item).toLowerCase().includes(args.query.toLowerCase()),
          );
        } else if (name === "get_template") {
          value = getTemplate(args.id);
        } else if (name === "recommend_components") {
          value = recommend(args.requirement).map(
            ({ name, tags, documentation, parent, children }) => ({
              name,
              tags,
              documentation,
              parent,
              children,
            }),
          );
        } else if (name === "validate_kui_usage") value = validate(args.source);
        else value = { error: `Unknown tool: ${name}` };
        result = toolResult(value);
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

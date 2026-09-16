#!/usr/bin/env node
import fs from "node:fs";
import process from "node:process";
import { baseParse, ElementTypes, NodeTypes } from "@vue/compiler-dom";

const metadata = JSON.parse(fs.readFileSync(new URL("./kui-components.json", import.meta.url)));
const byName = new Map(metadata.components.map((item) => [item.name.toLowerCase(), item]));
const byTag = new Map(
  metadata.components.flatMap((item) =>
    [item.name, ...item.tags].map((tag) => [tag.toLowerCase(), item]),
  ),
);
const tools = [
  ["search_components", "Search components by name, tag, or API description", "query"],
  ["get_component_api", "Get a component's complete public API and examples", "name"],
  ["recommend_components", "Recommend components for a UI requirement", "requirement"],
  ["validate_kui_usage", "Find unknown Kui Vue props using the Vue template AST", "source"],
].map(([name, description, argument]) => ({
  name,
  description,
  inputSchema: {
    type: "object",
    properties: { [argument]: { type: "string" } },
    required: [argument],
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
    `Create a Vue 3 TypeScript form using Kui Vue Form, FormItem, Input and Button for: ${fields}. Include validation and use documented APIs only.`,
  build_table: ({ columns = "" }) =>
    `Create a Vue 3 TypeScript searchable table using Kui Vue Input, Button, Table and Page for: ${columns}. Use documented APIs only.`,
  build_modal_editor: ({ entity = "" }) =>
    `Create a Vue 3 TypeScript editor for ${entity} using Kui Vue Modal, Form, FormItem, Input and Button. Use documented APIs only.`,
};
const standardAttributes = new Set([
  "class",
  "style",
  "id",
  "key",
  "ref",
  "role",
  "title",
  "slot",
  "name",
  "aria-label",
  "tabindex",
]);

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
const validate = (source) => {
  const issues = [];
  const parseErrors = [];
  const ast = baseParse(String(source), { onError: (error) => parseErrors.push(error) });

  for (const error of parseErrors) {
    issues.push({
      kind: "syntax",
      message: error.message,
      line: error.loc?.start.line,
      column: error.loc?.start.column,
    });
  }

  const visit = (node) => {
    if (node.type === NodeTypes.ELEMENT) {
      if (node.tagType === ElementTypes.COMPONENT) validateElement(node);
      node.children.forEach(visit);
      return;
    }
    if (Array.isArray(node.children)) node.children.forEach(visit);
  };

  const validateElement = (node) => {
    const component = byTag.get(node.tag.toLowerCase());
    if (!component) return;
    const publicNames = new Set(
      component.props.flatMap((prop) => [
        prop.name.toLowerCase(),
        prop.name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).toLowerCase(),
      ]),
    );

    for (const attribute of node.props) {
      let rawName;
      if (attribute.type === NodeTypes.ATTRIBUTE) {
        rawName = attribute.name;
      } else if (
        attribute.type === NodeTypes.DIRECTIVE &&
        (attribute.name === "bind" || attribute.name === "model") &&
        attribute.arg?.type === NodeTypes.SIMPLE_EXPRESSION &&
        attribute.arg.isStatic
      ) {
        rawName =
          attribute.name === "model" && !attribute.arg.content
            ? "modelValue"
            : attribute.arg.content;
      } else if (attribute.type === NodeTypes.DIRECTIVE && attribute.name === "model") {
        rawName = "modelValue";
      }

      if (!rawName) continue;
      const name = rawName.toLowerCase();
      if (standardAttributes.has(name) || name.startsWith("aria-") || name.startsWith("data-")) {
        continue;
      }
      if (!publicNames.has(name)) {
        issues.push({
          kind: "prop",
          component: component.name,
          prop: rawName,
          message: `Unknown prop ${rawName} on ${component.name}`,
          line: attribute.loc.start.line,
          column: attribute.loc.start.column,
        });
      }
    }
  };

  visit(ast);
  return { valid: issues.length === 0, issues };
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
    const request = JSON.parse(line);
    let result = {};
    if (request.method === "initialize") {
      result = {
        protocolVersion: request.params?.protocolVersion || "2025-06-18",
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
      let value;
      if (name === "search_components") {
        value = search(args.query).map(({ name, tags, documentation }) => ({
          name,
          tags,
          documentation,
        }));
      } else if (name === "get_component_api") {
        value = byName.get(String(args.name).toLowerCase()) || null;
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
    }
    if (request.id !== undefined) send({ jsonrpc: "2.0", id: request.id, result });
  }
});

import fs from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { validateUsage } from "../ai/validate.mjs";

const root = path.resolve(import.meta.dirname, "..");
const metadata = JSON.parse(fs.readFileSync(path.join(root, "ai/kui-components.json"), "utf8"));
const validate = (source: string) => validateUsage(source, metadata);
function rpc(requests: unknown[]) {
  const result = spawnSync(process.execPath, [path.join(root, "ai/mcp.mjs")], {
    input:
      requests
        .map((request) => (typeof request === "string" ? request : JSON.stringify(request)))
        .join("\n") + "\n",
    encoding: "utf8",
    timeout: 10000,
  });
  expect(result.status).toBe(0);
  return result.stdout
    .trim()
    .split("\n")
    .map((line) => JSON.parse(line));
}
const call = (id: number, name: string, args: Record<string, unknown>) => ({
  jsonrpc: "2.0",
  id,
  method: "tools/call",
  params: { name, arguments: args },
});

describe("AI usage validation", () => {
  it("rejects unknown props, enums, events, boolean strings and unsupported models", () => {
    for (const source of [
      "<Button made-up />",
      "<QRCode />",
      "<k-button made-up />",
      '<k-switch size="gigantic" />',
      '<Button size="gigantic" />',
      '<Button type="submit" />',
      '<Button @made-up="fn" />',
      '<Input disabled="false" />',
      '<Page v-model="value" />',
      "<Modal><template #bogus /></Modal>",
    ]) {
      expect(validate(source).valid, source).toBe(false);
    }
  });
  it("accepts real aliases, native attributes, model events and literal bindings", () => {
    expect(
      validate(
        '<KButton size="small" @click="save" /><k-switch v-model="enabled" /><Input placeholder="Name" :disabled="false" /><Page v-model:page="page" :total="100" /><Modal><template #footer>Save</template></Modal>',
      ).issues,
    ).toEqual([]);
  });
  it("does not guess dynamic bindings or treat unknown components as fully checked", () => {
    const result = validate('<CustomInput :x="value" /><Button v-bind="props" :size="size" />');
    expect(result.valid).toBe(true);
    expect(result.complete).toBe(false);
    expect(result.skipped.length).toBeGreaterThan(0);
    expect(result.nextStep).toContain("vue-tsc");
  });
  it("ignores script content and comments and reports syntax locations", () => {
    expect(
      validate(
        '<script setup>const html = "<Button made-up />";</script><template><!-- <Button made-up /> --><Button /></template>',
      ).issues,
    ).toEqual([]);
    expect(
      validate("<Button><span></Button>").issues.some(
        (issue: { kind: string }) => issue.kind === "syntax",
      ),
    ).toBe(true);
  });
  it("ships models, defaults, enum values and behavior contracts", () => {
    const page = metadata.components.find((c: { name: string }) => c.name === "Page");
    expect(page.models).toContainEqual({
      prop: "page",
      event: "update:page",
      directive: "v-model:page",
    });
    expect(page.props.find((p: { name: string }) => p.name === "pageSize").defaultExpression).toBe(
      "10",
    );
    expect(page.behavior.rules.length).toBeGreaterThan(0);
  });
  it("serves small API responses and retrieves individual examples/templates", () => {
    const exampleId = metadata.components.find((c: { name: string }) => c.name === "Form")
      .examples[0].file;
    const responses = rpc([
      call(1, "get_component_api", { name: "Form" }),
      call(2, "list_component_examples", { name: "Form", limit: 1 }),
      call(3, "get_component_example", { name: "Form", id: exampleId }),
      call(4, "get_template", { id: "modal-editor" }),
      call(5, "get_component_api", { name: "Page", section: "models" }),
    ]).map((response) => response.result.structuredContent.result);
    expect(responses[0].examples).toBeUndefined();
    expect(JSON.stringify(responses[0]).length).toBeLessThan(15000);
    expect(responses[1].items).toHaveLength(1);
    expect(responses[1].items[0].source).toBeUndefined();
    expect(responses[2].source).toContain("<template>");
    expect(responses[3].source).toContain("saving");
    expect(responses[4].models[0].directive).toBe("v-model:page");
  });
  it("returns errors for bad input and keeps serving subsequent requests", () => {
    const responses = rpc([
      "{",
      call(1, "search_components", { query: "", limit: -1 }),
      call(2, "get_template", { id: "../../package.json" }),
      call(3, "get_component_api", { name: "Button" }),
    ]);
    expect(responses[0].error.code).toBe(-32700);
    expect(responses[1].result.isError).toBe(true);
    expect(responses[2].result.isError).toBe(true);
    expect(responses[3].result.structuredContent.result.name).toBe("Button");
  });
  it("validates all runnable templates", () => {
    for (const file of ["form.vue", "table.vue", "modal-editor.vue"])
      expect(
        validate(fs.readFileSync(path.join(root, "ai/templates", file), "utf8")).issues,
        file,
      ).toEqual([]);
  });
});

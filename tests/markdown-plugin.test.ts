import fs from "node:fs";
import path from "node:path";
import type { HmrContext, ModuleNode, TransformPluginContext } from "vite";
import { describe, expect, it, vi } from "vitest";
import vitePluginKuiMd, { toJavaScriptSfc } from "../plugins/markdown";

describe("markdown demo code", () => {
  it("creates a JavaScript SFC view from a TypeScript demo", () => {
    const source = `<template><Button>{{ count }}</Button></template>
<script setup lang="ts">
interface Props { initial?: number }
const props = defineProps<Props>()
const count: number = props.initial ?? 0
</script>`;

    const result = toJavaScriptSfc(source);

    expect(result).toContain("<script setup>");
    expect(result).toContain("const props = defineProps()");
    expect(result).toContain("const count = props.initial ?? 0");
    expect(result).not.toContain('lang="ts"');
    expect(result).not.toContain("interface Props");
    expect(result).not.toContain(": number");
  });

  it("keeps value imports referenced only by the Vue template", () => {
    const source = `<template><Icon :type="ChevronDown" /></template>
<script setup lang="ts">
import type { IconProps } from "kui-vue";
import { ChevronDown, Search, Power } from "kui-icons";
</script>`;

    const result = toJavaScriptSfc(source);

    expect(result).toContain('import { ChevronDown, Search, Power } from "kui-icons";');
    expect(result).not.toContain("import type");
    expect(result).toContain("<script setup>");
  });

  it("registers demo files as watched markdown dependencies", async () => {
    const markdownPath = path.resolve("components/transfer/index.md");
    const markdown = fs.readFileSync(markdownPath, "utf-8");
    const addWatchFile = vi.fn();
    const plugin = vitePluginKuiMd();
    const transform = plugin.transform;
    if (typeof transform !== "function") throw new Error("Expected a transform hook");

    await transform.call(
      { addWatchFile } as unknown as TransformPluginContext,
      markdown,
      markdownPath,
    );

    expect(addWatchFile).toHaveBeenCalledWith(path.resolve("components/transfer/demo/basic.vue"));
    expect(addWatchFile).toHaveBeenCalledWith(
      path.resolve("components/transfer/demo/pagination.vue"),
    );
  });

  it("gives every rendered demo a source version key", async () => {
    const markdownPath = path.resolve("components/transfer/index.md");
    const plugin = vitePluginKuiMd();
    const transform = plugin.transform;
    if (typeof transform !== "function") throw new Error("Expected a transform hook");
    const result = await transform.call(
      { addWatchFile: vi.fn() } as unknown as TransformPluginContext,
      fs.readFileSync(markdownPath, "utf-8"),
      markdownPath,
    );
    const code = typeof result === "object" && result && "code" in result ? result.code : "";
    const ids = [...code.matchAll(/<Demo id="([^"]+)"/g)].map((match) => match[1]);
    const versionKeys = [...code.matchAll(/<KuiDemo\d+ key="([^"]+)"/g)].map((match) => match[1]);

    expect(ids.length).toBeGreaterThan(1);
    expect(new Set(ids).size).toBe(ids.length);
    expect(versionKeys).toHaveLength(ids.length);
    expect(versionKeys.every(Boolean)).toBe(true);
    expect(code).toMatch(/import KuiDemo0 from '.+\.vue';/);
  });

  it("invalidates the importing markdown module when a demo changes", async () => {
    const markdownPath = path.resolve("components/transfer/index.md");
    const demoPath = path.resolve("components/transfer/demo/basic.vue");
    const plugin = vitePluginKuiMd();
    const transform = plugin.transform;
    if (typeof transform !== "function") throw new Error("Expected a transform hook");
    await transform.call(
      { addWatchFile: vi.fn() } as unknown as TransformPluginContext,
      fs.readFileSync(markdownPath, "utf-8"),
      markdownPath,
    );

    const markdownModule = { id: markdownPath } as ModuleNode;
    const invalidateModule = vi.fn();
    const handleHotUpdate = plugin.handleHotUpdate;
    if (typeof handleHotUpdate !== "function") throw new Error("Expected an HMR hook");
    const result = await handleHotUpdate({
      file: demoPath,
      modules: [],
      server: {
        moduleGraph: {
          getModuleById: vi.fn(() => markdownModule),
          invalidateModule,
        },
      },
    } as unknown as HmrContext);

    expect(invalidateModule).toHaveBeenCalledWith(markdownModule);
    expect(result).toContain(markdownModule);
  });
});

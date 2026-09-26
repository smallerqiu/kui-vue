// @vitest-environment node
import fs from "node:fs/promises";
import path from "node:path";
import less from "less";
import { expect, it } from "vitest";

it("defines CSS variables referenced without a fallback in component and docs styles", async () => {
  const root = path.resolve(import.meta.dirname, "..");
  const styles = await Promise.all(
    ["components/styles/index.less", "src/assets/css/index.less"].map(async (entry) => {
      const filename = path.join(root, entry);
      return (await less.render(await fs.readFile(filename, "utf8"), { filename })).css;
    }),
  );
  const css = styles.join("\n").replace(/\/\*[\s\S]*?\*\//g, "");
  const definitions = new Set([...css.matchAll(/(--[\w-]+)\s*:/g)].map((match) => match[1]));
  // Optional overrides with a fallback intentionally need no global definition.
  const required = new Set([...css.matchAll(/var\(\s*(--[\w-]+)\s*\)/g)].map((match) => match[1]));
  expect([...required].filter((name) => !definitions.has(name)).sort()).toEqual([]);
});

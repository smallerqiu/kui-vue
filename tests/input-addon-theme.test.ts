// @vitest-environment node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { render } from "less";
import { expect, it } from "vitest";

it("gives text addons theme-specific surfaces without styling embedded controls", async () => {
  const filename = resolve("components/input/styles/index.less");
  const { css } = await render(readFileSync(filename, "utf8"), { filename });
  const declarations = (theme: string) => {
    const selector = `.k-input-group.k-input-group-${theme} > .k-input-group-prefix:not(:has(> *))`;
    const start = css.indexOf(selector);
    expect(start).toBeGreaterThan(-1);
    return css.slice(css.indexOf("{", start) + 1, css.indexOf("}", start));
  };
  expect(declarations("fill")).toContain("background: var(--kui-theme-fill-bg");
  expect(declarations("outline")).toContain("border: 1px solid var(--kui-theme-outline-border");
  expect(declarations("outline")).toContain("background: var(--kui-theme-outline-bg)");
  expect(declarations("dashed")).toContain("border: 1px dashed var(--kui-theme-dashed-border");
  expect(declarations("dashed")).toContain("background: var(--kui-theme-outline-bg)");
  expect(declarations("plain")).toContain("background: var(--kui-theme-plain-bg)");
  expect(declarations("solid")).toContain("color: var(--kui-theme-solid-text");
  expect(declarations("underlined")).toContain("border-width: 0 0 1px");
});

// @vitest-environment node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { render } from "less";
import { expect, it } from "vitest";

it("keeps the invisible leave frame until Vue removes the tag", async () => {
  const filename = resolve("components/tag/styles/index.less");
  const { css } = await render(readFileSync(filename, "utf8"), { filename });
  const leave = css.match(/\.k-tag-leave-active\s*\{([^}]+)\}/)?.[1];
  expect(leave).toContain("animation: k-tag-zoom 0.2s ease-out reverse both");
});

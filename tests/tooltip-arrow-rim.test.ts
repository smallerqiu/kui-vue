import fs from "node:fs/promises";
import path from "node:path";
import { mount } from "@vue/test-utils";
import less from "less";
import { h } from "vue";
import { describe, expect, it } from "vitest";
import Tooltip from "../components/tooltip";

/**
 * Tooltip 描边契约（kui-vue 侧，与 kui-react/tests/tooltip-arrow-rim.test.tsx 断言同一件事）：
 * 气泡和箭头共用一圈 1px 边，这圈边既不吃 `.k-popup-content` 的规则，也不在快照里，
 * 掉了没人报警——掉了之后深色气泡压在深色背景上只剩一层阴影，
 * 而箭头根部没有描边时，深色箭头会把气泡的边啃出个缺口。
 */

const tooltipLess = async () => {
  const filename = path.resolve(import.meta.dirname, "../components/tooltip/styles/index.less");
  const { css } = await less.render(await fs.readFile(filename, "utf8"), { filename });
  // 注释不参与规则检查。
  return css.replace(/\/\*[\s\S]*?\*\//g, "");
};

/** 编译后的 `#ot` 那条规则里的声明块 */
const otDeclarations = (css: string) => css.match(/[^{}]*#ot\s*\{([^}]*)\}/)?.[1] ?? "";

const arrowPaths = () => {
  const wrapper = mount(Tooltip, {
    attachTo: document.body,
    props: { show: true, trigger: "manual", title: "提示" },
    slots: { default: () => h("button", "触发") },
  });
  const content = document.querySelector(".k-tooltip-content");
  const paths = [...(content?.querySelectorAll(".k-tooltip-arrow svg path") ?? [])];
  wrapper.unmount();
  return paths;
};

/** 曲线落回 x=0 的那个端点高度，就是箭头与面板相接的"肩线" */
const shoulderY = (d: string) => Number(d.match(/C5\.5 [\d.]+ 4 [\d.]+ 0 ([\d.]+)/)?.[1]);

describe("Tooltip arrow rim", () => {
  it("strokes the bubble with the popup border", async () => {
    const css = await tooltipLess();
    expect(css).toMatch(/\.k-tooltip-content\s*\{[^}]*border:\s*1px solid/);
  });

  it("strokes the arrow outline with the same border, slightly thicker than the panel", async () => {
    const css = await tooltipLess();
    const ot = otDeclarations(css);
    expect(ot).toMatch(/stroke:\s*var\(--kui-popup-border/);
    // 0.1em ≈ 1.2px：比面板那 1px 略宽，压住接缝。
    expect(ot).toMatch(/stroke-width:\s*0\.1em/);
  });

  it("keeps the stroked path inside the bubble so the border rule reaches it", () => {
    const paths = arrowPaths();
    expect(paths).toHaveLength(2);
    expect(paths[1].parentElement?.closest(".k-tooltip-content")).not.toBeNull();
  });

  it("offsets the stroke outward by half its width so it joins the panel border", () => {
    const [fill, stroke] = arrowPaths();
    // 填色路径的肩线在 y=1（箭头盒顶比面板外沿高 2px，1px 描边带占 y 1~2），
    // 描边路径要落在那条带的中线上，也就是 1.5。
    expect(shoulderY(fill.getAttribute("d") ?? "")).toBe(1);
    expect(shoulderY(stroke.getAttribute("d") ?? "")).toBe(1.5);
    // 描边不能顺手把箭头根部横着封一道，否则气泡上会多出一条亮线。
    expect(stroke.getAttribute("fill")).toBe("none");
  });

  it("lets the arrow svg overflow so the tip's stroke is not clipped", async () => {
    const css = await tooltipLess();
    expect(css).toMatch(/\.k-tooltip-arrow svg\s*\{[^}]*overflow:\s*visible/);
  });
});

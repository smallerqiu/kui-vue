import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { PopconfirmPanel } from "../components/popconfirm";
import { PoptipPanel } from "../components/poptip";
import { TooltipPanel } from "../components/tooltip";
import loading from "../components/loading";
import { toCssLength } from "../components/utils/css";

describe("CSS length normalization", () => {
  it("adds px to numbers and numeric strings", () => {
    expect(toCssLength(140)).toBe("140px");
    expect(toCssLength(" 140 ")).toBe("140px");
    expect(toCssLength(".5")).toBe(".5px");
  });

  it("preserves CSS units and ignores invalid empty values", () => {
    expect(toCssLength("25%")).toBe("25%");
    expect(toCssLength("12rem")).toBe("12rem");
    expect(toCssLength("  ")).toBeUndefined();
    expect(toCssLength(Infinity)).toBeUndefined();
  });

  it.each([TooltipPanel, PoptipPanel, PopconfirmPanel])(
    "applies the width prop to %s",
    (Component) => {
      const wrapper = mount(Component, { props: { width: "240" } });
      expect(wrapper.attributes("style")).toContain("width: 240px");
    },
  );

  it("applies a configured loading bar height", () => {
    loading.start({ height: "4" });
    expect(document.querySelector<HTMLElement>(".k-loading-container")?.style.height).toBe("4px");
    loading.destroy();
  });
});

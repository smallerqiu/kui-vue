import { afterEach, describe, expect, it } from "vitest";
import { toggleContainerScroll } from "../components/utils/vnode";

afterEach(() => {
  document.body.className = "";
  document.body.removeAttribute("style");
});

describe("scroll lock", () => {
  it("locks once and restores styles after the final unlock", () => {
    Object.defineProperty(window, "innerWidth", { configurable: true, value: 1024 });
    Object.defineProperty(document.documentElement, "clientWidth", {
      configurable: true,
      value: 1013,
    });
    document.body.style.paddingLeft = "calc(10% + 4px)";
    document.body.style.overflowY = "auto";
    document.body.style.width = "90%";

    toggleContainerScroll(document.body, true);
    toggleContainerScroll(document.body, true);

    expect(document.body.classList.contains("k-scroll-locked")).toBe(true);
    expect(document.body.style.overflowY).toBe("hidden");
    // expect(document.body.style.width).toBe("calc(100% - 11px)");
    expect(document.body.style.paddingLeft).toBe("calc(10% + 4px)");

    toggleContainerScroll(document.body, false);
    expect(document.body.classList.contains("k-scroll-locked")).toBe(true);

    toggleContainerScroll(document.body, false);
    expect(document.body.classList.contains("k-scroll-locked")).toBe(false);
    expect(document.body.style.overflowY).toBe("auto");
    expect(document.body.style.width).toBe("90%");
    expect(document.body.style.getPropertyValue("--kui-scrollbar-width")).toBe("");
    expect(document.body.style.paddingLeft).toBe("calc(10% + 4px)");
  });

  it("preserves an existing lock class and scrollbar variable", () => {
    document.body.classList.add("k-scroll-locked");
    document.body.style.setProperty("--kui-scrollbar-width", "8px");

    toggleContainerScroll(document.body, true);
    toggleContainerScroll(document.body, false);

    expect(document.body.classList.contains("k-scroll-locked")).toBe(true);
    expect(document.body.style.getPropertyValue("--kui-scrollbar-width")).toBe("8px");
  });
});

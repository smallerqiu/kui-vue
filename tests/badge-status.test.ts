import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { Badge } from "../components";

const dotOf = (element: HTMLElement) => element.querySelector(".k-badge-status-dot");

describe("Badge status dot", () => {
  it("paints nothing when the caller asked for nothing", () => {
    const wrapper = mount(Badge);
    try {
      // 无插槽不等于要状态点：一颗谁也没要的灰点在这里什么都没说
      expect(dotOf(wrapper.element)).toBeNull();
      expect(wrapper.find("sup").exists()).toBe(false);
      expect(wrapper.element.childElementCount).toBe(0);
    } finally {
      wrapper.unmount();
    }
  });

  it("treats a cleared count as no badge rather than a status dot", () => {
    for (const count of [0, "", -1]) {
      const wrapper = mount(Badge, { props: { count } });
      try {
        expect(dotOf(wrapper.element)).toBeNull();
        expect(wrapper.find("sup").exists()).toBe(false);
      } finally {
        wrapper.unmount();
      }
    }
  });

  it("still paints the grey dot when status is asked for by name", () => {
    const wrapper = mount(Badge, { props: { status: "default" } });
    try {
      // 收成显式模式不能顺手把 default 这一档也吃掉
      expect(dotOf(wrapper.element)?.className).toContain("k-badge-status-default");
    } finally {
      wrapper.unmount();
    }
  });

  it("opens the status mode through color alone", () => {
    const wrapper = mount(Badge, { props: { color: "#f0f0f0", text: "Offline" } });
    try {
      // 判据是 (status || color)，少认 color 这一臂这里就空了
      expect(dotOf(wrapper.element)?.getAttribute("style")).toContain("rgb(240, 240, 240)");
      expect(wrapper.find(".k-badge-status-text").element.textContent).toBe("Offline");
    } finally {
      wrapper.unmount();
    }
  });

  it("keeps the count bubble alone when a count and a status are both given", () => {
    const wrapper = mount(Badge, { props: { count: 5, status: "success" } });
    try {
      // 有数字时状态点让位，否则一颗点会挤在气泡旁边
      expect(dotOf(wrapper.element)).toBeNull();
      expect(wrapper.find(".k-badge-count").element.textContent).toBe("5");
    } finally {
      wrapper.unmount();
    }
  });
});

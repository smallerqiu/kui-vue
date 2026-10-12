import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";
import StatCard, { statItemKey } from "../components/stat-card/stat-card";
import StatNumber from "../components/stat-card/stat-number";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("StatCard", () => {
  it("updates a number without recreating its element", async () => {
    const wrapper = mount(StatNumber, {
      props: { modelValue: 1234, duration: 0, autoAnimate: false },
    });
    await nextTick();
    const number = wrapper.find(".k-stat-countup-number").element;
    expect(number.textContent).toBe("1,234");

    await wrapper.setProps({ modelValue: 5678 });
    expect(wrapper.find(".k-stat-countup-number").element).toBe(number);
    expect(number.textContent).toBe("5,678");
  });

  it("falls back to immediate animation when IntersectionObserver is unavailable", async () => {
    const wrapper = mount(StatNumber, { props: { modelValue: 42, duration: 0 } });
    await nextTick();
    expect(wrapper.text()).toBe("42");
  });

  it("uses scoped default affixes and omits empty descriptions", async () => {
    const wrapper = mount(StatCard, {
      props: {
        size: "small",
        items: [{ key: "revenue", value: 12, duration: 0, autoAnimate: false }],
      },
      slots: { prefix: ({ item }) => `$${item.key}` },
    });
    await nextTick();
    expect(wrapper.text()).toContain("$revenue12");
    expect(wrapper.find(".k-stat-card-item-desc").exists()).toBe(false);
    expect(wrapper.classes()).toContain("k-stat-card-small");
  });

  it("renders no wrapper for content that cannot be seen", async () => {
    // An empty wrapper keeps its margin and flex gap in the layout, so a card that
    // switched its title off would still pay for a title row.
    for (const title of [undefined, null, false, ""] as const) {
      const wrapper = mount(StatCard, { props: { title } });
      expect(wrapper.find(".k-stat-card-title").exists(), `title: ${String(title)}`).toBe(false);
      wrapper.unmount();
    }

    const wrapper = mount(StatCard, {
      props: {
        prefix: "",
        items: [
          { value: 1, desc: false, duration: 0, autoAnimate: false },
          { value: 2, desc: "", trend: false, duration: 0, autoAnimate: false },
        ],
      },
    });
    await nextTick();
    expect(wrapper.find(".k-stat-card-item-desc").exists()).toBe(false);
    expect(wrapper.find(".k-stat-card-item-trend").exists()).toBe(false);
    expect(wrapper.find(".k-stat-number-prefix").exists()).toBe(false);
  });

  it("still treats zero as content", async () => {
    const wrapper = mount(StatCard, {
      props: { title: 0, items: [{ value: 1, desc: 0, duration: 0, autoAnimate: false }] },
    });
    await nextTick();
    expect(wrapper.find(".k-stat-card-title").text()).toBe("0");
    expect(wrapper.find(".k-stat-card-item-desc").text()).toBe("0");
  });

  it("takes the title from the prop when the slot renders nothing", async () => {
    const wrapper = mount(StatCard, {
      props: { title: "Revenue" },
      // A `v-if="false"` in the slot leaves a comment node, not content.
      slots: { title: () => [] },
    });
    await nextTick();
    expect(wrapper.find(".k-stat-card-title").text()).toBe("Revenue");
  });

  it("accepts a card level prefix prop like the React build does", async () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const wrapper = mount(StatCard, {
      props: {
        prefix: "$",
        items: [{ value: 12, duration: 0, autoAnimate: false }],
      },
    });
    await nextTick();
    expect(wrapper.find(".k-stat-number-prefix").text()).toBe("$");
    // Declared as a prop, so it must no longer fall through onto the root element.
    expect(wrapper.attributes("prefix")).toBeUndefined();
    expect(warn).not.toHaveBeenCalled();
  });

  it("keeps a caller-supplied key out of the positional fallback", () => {
    // Vue does not warn about duplicate keys on mount, so the generator is tested
    // directly: `[{key: 1}, {}]` used to hand both items `number:1`.
    expect(statItemKey({ key: 1, value: 1 }, 0)).not.toBe(statItemKey({ value: 2 }, 1));
    expect(statItemKey({ value: 2 }, 1)).toBe("kui-item-1");
    expect(statItemKey({ key: 1, value: 1 }, 0)).toBe("1");
  });

  it("jumps straight to the target when motion is reduced", async () => {
    vi.stubGlobal(
      "matchMedia",
      (query: string) => ({
        matches: query.includes("prefers-reduced-motion"),
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: () => false,
      }),
    );
    const wrapper = mount(StatNumber, { props: { modelValue: 1234, duration: 1.2, autoAnimate: false } });
    await nextTick();
    expect(wrapper.find(".k-stat-countup-number").text()).toBe("1,234");
  });
});

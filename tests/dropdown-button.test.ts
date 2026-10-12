import { mount, type VueWrapper } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DropdownButton } from "../components/dropdown";

let wrappers: VueWrapper[] = [];

const overlay = () => h("div", "菜单内容");
const settle = async () => {
  await nextTick();
  await nextTick();
  await nextTick();
};
const body = () => document.querySelector<HTMLElement>(".k-dropdown-body");
const panel = () => document.querySelector<HTMLElement>(".k-dropdown");

const mountButton = (props: Record<string, unknown> = {}) => {
  const wrapper = mount(DropdownButton, {
    attachTo: document.body,
    props,
    slots: { default: () => h("span", "主操作"), overlay },
  });
  wrappers.push(wrapper);
  return wrapper;
};

afterEach(() => {
  wrappers.forEach((wrapper) => wrapper.unmount());
  wrappers = [];
  document.body.innerHTML = "";
  vi.restoreAllMocks();
});

describe("DropdownButton split-button trigger", () => {
  it("opens the menu when hovering the trigger button", async () => {
    const wrapper = mountButton();
    await settle();
    const trigger = wrapper.get(".k-dropdown-trigger");
    expect(trigger.attributes("aria-haspopup")).toBe("menu");
    expect(trigger.attributes("aria-expanded")).toBe("false");
    expect(body()).toBeNull();

    await trigger.trigger("mouseenter");
    await settle();

    expect(body()).not.toBeNull();
    expect(trigger.attributes("aria-expanded")).toBe("true");
    // target 锚点也要走完定位再显形，否则用户看到的还是"点不出来"
    expect(panel()?.style.visibility).not.toBe("hidden");
  });

  it("toggles the menu on click when trigger is click", async () => {
    const wrapper = mountButton({ trigger: "click" });
    await settle();
    const trigger = wrapper.get(".k-dropdown-trigger");

    await trigger.trigger("click");
    await settle();
    expect(body()).not.toBeNull();
    expect(trigger.attributes("aria-expanded")).toBe("true");

    await trigger.trigger("click");
    await settle();
    expect(trigger.attributes("aria-expanded")).toBe("false");
  });

  it("keeps the primary button click independent from the menu", async () => {
    const wrapper = mountButton();
    await settle();

    await wrapper.findAll("button.k-btn")[0].trigger("click");
    await settle();

    expect(wrapper.emitted("click")).toHaveLength(1);
    expect(body()).toBeNull();
    expect(wrapper.get(".k-dropdown-trigger").attributes("aria-expanded")).toBe("false");
  });

  it("opens with the arrow keys", async () => {
    const wrapper = mountButton();
    await settle();

    await wrapper.get(".k-dropdown-trigger").trigger("keydown", { key: "ArrowDown" });
    await settle();

    expect(body()).not.toBeNull();
  });

  it("does not open a disabled split button", async () => {
    const wrapper = mountButton({ disabled: true });
    await settle();
    const trigger = wrapper.get(".k-dropdown-trigger");

    await trigger.trigger("mouseenter");
    await trigger.trigger("click");
    await settle();

    expect(body()).toBeNull();
    expect(trigger.attributes("aria-expanded")).toBe("false");
  });
});

import { mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Popup, type PopupRef } from "../components";

const wrappers: ReturnType<typeof mount>[] = [];
afterEach(() => {
  wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  document.body.innerHTML = "";
  vi.useRealTimers();
});
const tick = async () => {
  await nextTick();
  await nextTick();
};

describe("Popup foundation", () => {
  it("keeps the parent open when a child closes itself during the click", async () => {
    const onOuterChange = vi.fn();
    const wrapper = mount(Popup, {
      attachTo: document.body,
      props: { defaultOpen: true, onOpenChange: onOuterChange },
      slots: {
        default: () => h("button", "Parent"),
        overlay: () =>
          h(
            Popup,
            { defaultOpen: true },
            {
              default: () => h("button", "Child"),
              overlay: ({ close }: PopupRef) =>
                h("button", { id: "close-child", onClick: close }, "Close child"),
            },
          ),
      },
    });
    wrappers.push(wrapper);
    await tick();
    (document.querySelector("#close-child") as HTMLElement).click();
    await tick();
    expect(onOuterChange).not.toHaveBeenCalled();
    expect(wrapper.get("button").attributes("aria-expanded")).toBe("true");
    document.body.click();
    await tick();
    expect(onOuterChange).toHaveBeenCalledWith(
      false,
      expect.objectContaining({ reason: "outside" }),
    );
  });

  it("closes retained child portals when the controlled parent closes", async () => {
    const onChildChange = vi.fn();
    const wrapper = mount(Popup, {
      attachTo: document.body,
      props: { open: true },
      slots: {
        default: () => h("button", "Parent"),
        overlay: () =>
          h(
            Popup,
            { defaultOpen: true, onOpenChange: onChildChange, overlay: "Child content" },
            { default: () => h("button", "Child") },
          ),
      },
    });
    wrappers.push(wrapper);
    await tick();
    await wrapper.setProps({ open: false });
    await tick();
    expect(onChildChange).toHaveBeenCalledWith(false, { reason: "host" });
  });
  it("uses slots for generic controls without menu semantics", async () => {
    const wrapper = mount(Popup, {
      attachTo: document.body,
      slots: {
        default: () => h("button", "Open"),
        overlay: () => h("input", { "aria-label": "Search" }),
      },
    });
    wrappers.push(wrapper);
    expect(wrapper.get("button").attributes("aria-haspopup")).toBeUndefined();
    await wrapper.get("button").trigger("click");
    await tick();
    document.querySelector("input")!.click();
    expect(wrapper.get("button").attributes("aria-expanded")).toBe("true");
    document.body.click();
    await tick();
    expect(wrapper.get("button").attributes("aria-expanded")).toBe("false");
    expect(wrapper.emitted("openChange")?.at(-1)).toEqual([
      false,
      expect.objectContaining({ reason: "outside" }),
    ]);
  });

  it("emits controlled updates without opening itself", async () => {
    const wrapper = mount(Popup, {
      props: { open: false, overlay: "Content" },
      slots: { default: () => h("button", "Open") },
    });
    wrappers.push(wrapper);
    await wrapper.get("button").trigger("click");
    expect(wrapper.emitted("update:open")).toEqual([[true]]);
    expect(wrapper.emitted("openChange")?.[0]).toEqual([
      true,
      expect.objectContaining({ reason: "trigger", event: expect.any(Event) }),
    ]);
    expect(document.querySelector(".k-popup")).toBeNull();
  });

  it("exposes an anchored manual trigger", async () => {
    const wrapper = mount(Popup, {
      attachTo: document.body,
      props: { trigger: "manual", overlay: "Content", arrow: true },
      slots: { default: () => h("button", "Open") },
    });
    wrappers.push(wrapper);
    await wrapper.get("button").trigger("click");
    expect(document.querySelector(".k-popup")).toBeNull();
    const api = wrapper.vm as unknown as PopupRef;
    api.open();
    await tick();
    expect(api.getTriggerElement()).toBe(wrapper.get("button").element);
    expect(api.getPopupElement()?.style.visibility).not.toBe("hidden");
    expect(document.querySelector(".k-popup-arrow")).not.toBeNull();
  });

  it("supports nested portals and top-layer Escape", async () => {
    const outer = vi.fn(),
      inner = vi.fn();
    const wrapper = mount(Popup, {
      attachTo: document.body,
      props: { onOpenChange: outer },
      slots: {
        default: () => h("button", { id: "parent" }, "Parent"),
        overlay: () =>
          h(
            Popup,
            { onOpenChange: inner },
            {
              default: () => h("button", { id: "child" }, "Child"),
              overlay: () => h("button", { id: "inside" }, "Inside"),
            },
          ),
      },
    });
    wrappers.push(wrapper);
    await wrapper.get("button").trigger("click");
    await tick();
    (document.querySelector("#child") as HTMLElement).click();
    await tick();
    (document.querySelector("#inside") as HTMLElement).click();
    await tick();
    expect(outer).toHaveBeenCalledTimes(1);
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", cancelable: true }));
    await tick();
    expect(inner).toHaveBeenLastCalledWith(false, expect.objectContaining({ reason: "escape" }));
    expect(outer).toHaveBeenCalledTimes(1);
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", cancelable: true }));
    await tick();
    expect(outer).toHaveBeenLastCalledWith(false, expect.objectContaining({ reason: "escape" }));
  });

  it("preserves input state unless destroyOnClose is set", async () => {
    const wrapper = mount(Popup, {
      attachTo: document.body,
      slots: { default: () => h("button", "Open"), overlay: () => h("input") },
    });
    wrappers.push(wrapper);
    await wrapper.get("button").trigger("click");
    await tick();
    const input = document.querySelector("input")!;
    input.value = "Edited";
    document.body.click();
    await tick();
    expect(document.querySelector("input")).toBe(input);
    await wrapper.get("button").trigger("click");
    await tick();
    expect(document.querySelector("input")?.value).toBe("Edited");
    await wrapper.setProps({ destroyOnClose: true });
    document.body.click();
    await tick();
    expect(document.querySelector("input")).toBeNull();
  });

  it("cancels delayed open when disabled and respects preventDefault", async () => {
    vi.useFakeTimers();
    const wrapper = mount(Popup, {
      props: { trigger: "hover", openDelay: 100, overlay: "Content" },
      slots: { default: () => h("button", "Open") },
    });
    wrappers.push(wrapper);
    await wrapper.get("button").trigger("mouseenter");
    await wrapper.setProps({ disabled: true });
    vi.advanceTimersByTime(200);
    await tick();
    expect(wrapper.emitted("openChange")).toBeUndefined();
    const cancelled = mount(Popup, {
      slots: {
        default: () =>
          h("button", { onClick: (event: MouseEvent) => event.preventDefault() }, "Cancelled"),
      },
    });
    wrappers.push(cancelled);
    await cancelled.get("button").trigger("click");
    expect(cancelled.emitted("openChange")).toBeUndefined();
  });
});

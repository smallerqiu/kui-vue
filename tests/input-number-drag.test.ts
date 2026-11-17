import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import { expect, it } from "vitest";
import InputNumber from "../components/input-number";

const pointer = (target: EventTarget, type: string, x: number) => {
  const event = new MouseEvent(type, { clientX: x, button: 0, bubbles: true, cancelable: true });
  Object.defineProperty(event, "pointerId", { value: 1 });
  target.dispatchEvent(event);
};
it("accelerates dragging and retains decimal steps, bounds and keyboard editing", async () => {
  const w = mount(InputNumber, {
    props: { value: 1, step: 0.1, precision: 2, min: 0, max: 5, addonAfter: "kg" },
  });
  pointer(w.get(".k-input-number-drag").element, "pointerdown", 0);
  pointer(document, "pointermove", 40);
  await nextTick();
  expect(w.emitted("change")!.at(-1)).toEqual([2.5]);
  pointer(document, "pointermove", 160);
  await nextTick();
  expect(w.emitted("change")!.at(-1)).toEqual([5]);
  pointer(document, "pointermove", -40);
  await nextTick();
  expect(w.emitted("change")!.at(-1)).toEqual([0]);
  pointer(document, "pointerup", -40);
  await w.get("input").setValue("3.25");
  expect(w.emitted("change")!.at(-1)).toEqual([3.25]);
  w.unmount();
});
it("does not run parser on numeric drag results and cancels when blocked or unmounted", async () => {
  const w = mount(InputNumber, { props: { value: 10, parser: (v: string) => Number(v) / 100 } });
  pointer(w.get(".k-input-number-drag").element, "pointerdown", 0);
  pointer(document, "pointermove", 40);
  await nextTick();
  expect(w.emitted("change")!.at(-1)).toEqual([25]);
  await w.setProps({ readonly: true });
  const count = w.emitted("change")!.length;
  pointer(document, "pointermove", 80);
  expect(w.emitted("change")!.length).toBe(count);
  expect(w.find(".k-input-number-drag").exists()).toBe(false);
  await w.setProps({ readonly: false, draggable: false });
  expect(w.find(".k-input-number-drag").exists()).toBe(false);
  w.unmount();
});
it("a press without movement focuses the input; cancelled drags stop updating", async () => {
  const w = mount(InputNumber, { attachTo: document.body, props: { value: 1 } });
  const handle = w.get(".k-input-number-drag").element;
  pointer(handle, "pointerdown", 0);
  pointer(document, "pointerup", 0);
  expect(document.activeElement).toBe(w.get("input").element);
  pointer(handle, "pointerdown", 0);
  pointer(document, "pointercancel", 0);
  pointer(document, "pointermove", 50);
  expect(w.emitted("change")).toBeUndefined();
  w.unmount();
});

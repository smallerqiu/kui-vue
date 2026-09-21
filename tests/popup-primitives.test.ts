import { afterEach, describe, expect, it, vi } from "vitest";
import { createFrameScheduler, isEventOutside } from "../components/utils/popup";

afterEach(() => {
  vi.unstubAllGlobals();
  document.body.replaceChildren();
});

describe("popup primitives", () => {
  it("coalesces frames to the latest callback and cancels pending work", () => {
    const callbacks = new Map<number, FrameRequestCallback>();
    let id = 0;
    vi.stubGlobal("requestAnimationFrame", (fn: FrameRequestCallback) => {
      callbacks.set(++id, fn);
      return id;
    });
    vi.stubGlobal("cancelAnimationFrame", (key: number) => callbacks.delete(key));
    const scheduler = createFrameScheduler();
    const first = vi.fn(),
      latest = vi.fn();
    scheduler.schedule(first);
    scheduler.schedule(latest);
    expect(callbacks.size).toBe(1);
    callbacks.get(id)!(123);
    callbacks.clear();
    expect(first).not.toHaveBeenCalled();
    expect(latest).toHaveBeenCalledWith(123);
    scheduler.schedule(first);
    scheduler.cancel();
    expect(callbacks.size).toBe(0);
  });

  it("distinguishes trigger/popup clicks from outside clicks, including component anchors", () => {
    const trigger = document.createElement("button");
    const popup = document.createElement("div");
    const child = document.createElement("span");
    popup.append(child);
    document.body.append(trigger, popup);
    const results: boolean[] = [];
    const handler = (event: Event) =>
      results.push(isEventOutside(event, [{ $el: trigger }, popup]));
    document.addEventListener("click", handler);
    try {
      trigger.click();
      child.click();
      document.body.click();
      expect(results).toEqual([false, false, true]);
    } finally {
      document.removeEventListener("click", handler);
    }
  });

  it("does not dismiss a popup for retargeted shadow-root clicks", () => {
    const host = document.createElement("div");
    const trigger = document.createElement("button");
    host.attachShadow({ mode: "open" }).append(trigger);
    const popup = document.createElement("div");
    document.body.append(host, popup);
    const handler = vi.fn((event: Event) => isEventOutside(event, [trigger, popup]));
    document.addEventListener("click", handler);
    try {
      trigger.click();
      expect(handler).toHaveReturnedWith(false);
    } finally {
      document.removeEventListener("click", handler);
    }
  });

  it("supports context menus excluding their trigger and null-element policies", () => {
    const trigger = document.createElement("button"),
      popup = document.createElement("div");
    document.body.append(trigger, popup);
    const handler = vi.fn((event: Event) => [
      isEventOutside(event, [trigger, popup]),
      isEventOutside(event, [popup, null], false),
      isEventOutside(event, [popup, null]),
    ]);
    document.addEventListener("click", handler);
    try {
      trigger.click();
      expect(handler).toHaveReturnedWith([false, true, false]);
    } finally {
      document.removeEventListener("click", handler);
    }
  });
});

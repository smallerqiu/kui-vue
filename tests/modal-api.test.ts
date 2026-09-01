import { afterEach, describe, expect, it, vi } from "vitest";
import { nextTick } from "vue";
import { modal } from "../components/modal";

afterEach(() => {
  modal.destroyAll();
  vi.useRealTimers();
  document.body.innerHTML = "";
});

describe("modal API", () => {
  it("removes the mounted container after confirming", async () => {
    vi.useFakeTimers();
    modal.success({ title: "Done", content: "Saved" });
    await nextTick();

    expect(document.body.querySelector(".k-toast")).not.toBeNull();
    document.body.querySelector<HTMLButtonElement>(".k-toast-footer button")?.click();
    await nextTick();
    await vi.runAllTimersAsync();

    expect(document.body.querySelector(".k-toast")).toBeNull();
    expect(document.body.children).toHaveLength(0);
  });

  it("removes every mounted container with destroyAll", async () => {
    vi.useFakeTimers();
    modal.info({ title: "First", content: "One" });
    modal.warning({ title: "Second", content: "Two" });
    await nextTick();

    modal.destroyAll();
    await vi.runAllTimersAsync();

    expect(document.body.querySelectorAll(".k-toast")).toHaveLength(0);
    expect(document.body.children).toHaveLength(0);
  });

  it("destroys itself after closing with Escape", async () => {
    vi.useFakeTimers();
    modal.success({ title: "Done", content: "Saved" });
    await nextTick();

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await nextTick();
    await vi.runAllTimersAsync();

    expect(document.body.querySelector(".k-toast")).toBeNull();
    expect(document.body.children).toHaveLength(0);
  });
});

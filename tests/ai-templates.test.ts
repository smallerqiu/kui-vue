import { DOMWrapper, flushPromises, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import FormTemplate from "../ai/templates/form.vue";
import TableTemplate from "../ai/templates/table.vue";
import ModalTemplate from "../ai/templates/modal-editor.vue";

afterEach(() => {
  vi.useRealTimers();
  document.body.innerHTML = "";
});

describe("AI business templates", () => {
  it("validates, submits and resets the form", async () => {
    vi.useFakeTimers();
    const wrapper = mount(FormTemplate);
    await wrapper.get("form").trigger("submit");
    await flushPromises();
    expect(wrapper.text()).toContain("请输入姓名");
    await wrapper.findAll("input")[0].setValue("Ada");
    await wrapper.findAll("input")[1].setValue("invalid-email");
    await wrapper.get("form").trigger("submit");
    await flushPromises();
    expect(wrapper.text()).toContain("邮箱格式不正确");
    await wrapper.findAll("input")[1].setValue("ada@example.com");
    await wrapper.get("form").trigger("submit");
    await flushPromises();
    expect(wrapper.findAll("input")[0].element.disabled).toBe(true);
    await vi.advanceTimersByTimeAsync(250);
    expect(wrapper.text()).toContain("已保存：Ada");
    await wrapper.get("form").trigger("reset");
    expect(wrapper.findAll("input")[0].element.value).toBe("");
    wrapper.unmount();
  });
  it("loads data, changes page and searches", async () => {
    vi.useFakeTimers();
    const wrapper = mount(TableTemplate);
    await vi.advanceTimersByTimeAsync(250);
    expect(wrapper.get("table").text()).toContain("用户 1");
    const next = wrapper.findAll(".k-page li").find((item) => item.text() === "2");
    expect(next).toBeDefined();
    await next!.trigger("click");
    await vi.advanceTimersByTimeAsync(250);
    expect(wrapper.get("table").text()).toContain("用户 11");
    await wrapper.get("input").setValue("用户 47");
    await wrapper
      .findAll("button")
      .find((item) => item.text() === "搜索")!
      .trigger("click");
    await vi.advanceTimersByTimeAsync(250);
    expect(wrapper.get("table").text()).toContain("用户 47");
    expect(wrapper.get("table").text()).not.toContain("用户 11");
    wrapper.unmount();
  });
  it("keeps canceled modal edits isolated and commits a validated save", async () => {
    vi.useFakeTimers();
    const wrapper = mount(ModalTemplate, { attachTo: document.body });
    const body = new DOMWrapper(document.body);
    await wrapper
      .findAll("button")
      .find((item) => item.text() === "编辑")!
      .trigger("click");
    await vi.advanceTimersByTimeAsync(350);
    await body.get("input").setValue("Changed");
    await body
      .findAll("button")
      .find((item) => item.text() === "取消")!
      .trigger("click");
    await vi.advanceTimersByTimeAsync(350);
    expect(wrapper.text()).toContain("示例用户");
    await wrapper
      .findAll("button")
      .find((item) => item.text() === "编辑")!
      .trigger("click");
    await vi.advanceTimersByTimeAsync(350);
    expect(body.get("input").element.value).toBe("示例用户");
    await body.get("input").setValue("Saved");
    await body.get("form").trigger("submit");
    await flushPromises();
    await vi.advanceTimersByTimeAsync(600);
    expect(wrapper.text()).toContain("Saved");
    wrapper.unmount();
  });
});

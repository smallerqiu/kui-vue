import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import { nextTick } from "vue";
import AutoComplete from "../components/auto-complete";
import InputTag from "../components/input-tag";
import Mentions from "../components/mentions";
import Steps from "../components/steps";

afterEach(() => {
  document.body.innerHTML = "";
});

describe("new components", () => {
  it("selects an AutoComplete option with the keyboard", async () => {
    const wrapper = mount(AutoComplete, { props: { options: ["Vue", "React"] } });
    const input = wrapper.find("input");
    await input.trigger("focus");
    await input.trigger("keydown", { key: "ArrowDown" });
    await input.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["Vue"]);
  });

  it("renders the animated Mentions empty state", async () => {
    const mentions = mount(Mentions, { props: { options: [], emptyText: "No people" } });
    const textarea = mentions.find("textarea");
    await textarea.setValue("@");
    (textarea.element as HTMLTextAreaElement).setSelectionRange(1, 1);
    await textarea.trigger("input");
    await nextTick();
    expect(document.querySelector(".k-mentions-dropdown .k-empty")?.textContent).toContain(
      "No people"
    );
  });

  it("does not open AutoComplete when the data source is empty", async () => {
    const wrapper = mount(AutoComplete, { props: { options: [] } });
    await wrapper.find("input").trigger("focus");
    expect(wrapper.find("input").attributes("aria-expanded")).toBe("false");
  });

  it("only opens AutoComplete for an empty input when showOnEmpty is enabled", async () => {
    const hidden = mount(AutoComplete, { props: { options: ["Vue", "React"] } });
    await hidden.find("input").trigger("focus");
    expect(hidden.find("input").attributes("aria-expanded")).toBe("false");
    hidden.unmount();

    const visible = mount(AutoComplete, {
      props: { options: ["Vue", "React"], showOnEmpty: true },
    });
    await visible.find("input").trigger("focus");
    expect(visible.find("input").attributes("aria-expanded")).toBe("true");
  });

  it("shows and handles the AutoComplete clear button only when it has a value", async () => {
    const wrapper = mount(AutoComplete, {
      props: { clearable: true, value: "Vue", options: ["Vue"] },
    });
    const clear = wrapper.find(".k-input-clearable");
    expect(clear.exists()).toBe(true);
    expect(clear.classes()).not.toContain("k-input-clearable-hidden");
    await clear.trigger("click");
    expect(wrapper.emitted("clear")).toHaveLength(1);
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([""]);
    expect(wrapper.find(".k-input-clearable").classes()).toContain("k-input-clearable-hidden");
  });

  it("hides AutoComplete when filtering has no matches", async () => {
    const wrapper = mount(AutoComplete, {
      props: { options: ["Vue", "React"], showOnEmpty: true },
    });
    const input = wrapper.find("input");
    await input.trigger("focus");
    expect(document.querySelectorAll(".k-auto-complete-dropdown .k-select-item")).toHaveLength(2);
    await input.setValue("Angular");
    await wrapper.setProps({ options: ["Vue", "React"] });
    await nextTick();
    expect(input.attributes("aria-expanded")).toBe("false");
    expect(document.querySelector<HTMLElement>(".k-auto-complete-dropdown")?.style.display).toBe(
      "none"
    );
    expect(document.querySelectorAll(".k-auto-complete-dropdown .k-select-item")).toHaveLength(2);
  });

  it("shows the AutoComplete remote loading state", async () => {
    const wrapper = mount(AutoComplete, {
      props: { options: [], onSearch: () => undefined },
    });
    const input = wrapper.find("input");
    await input.setValue("vue");
    expect(wrapper.emitted("search")?.at(-1)).toEqual(["vue"]);
    await wrapper.setProps({ loading: true });
    await nextTick();
    expect(input.attributes("aria-expanded")).toBe("true");
    expect(document.querySelector(".k-auto-complete-dropdown .k-select-loading")).not.toBeNull();
  });

  it("validates remote results before replacing the rendered options", async () => {
    const wrapper = mount(AutoComplete, {
      props: {
        value: "rea",
        options: ["React"],
        onSearch: () => undefined,
      },
    });
    const input = wrapper.find("input");
    await input.trigger("focus");
    expect(document.querySelector(".k-auto-complete-dropdown .k-select-item")?.textContent).toBe(
      "React"
    );

    await wrapper.setProps({ loading: true });
    await wrapper.setProps({ options: ["Vue"] });
    await wrapper.setProps({ loading: false });
    await nextTick();

    const dropdown = document.querySelector<HTMLElement>(".k-auto-complete-dropdown");
    expect(dropdown?.style.display).toBe("none");
    expect(dropdown?.querySelector(".k-select-item")).toBeNull();
    expect(dropdown?.querySelector(".k-select-loading")).not.toBeNull();
    expect(dropdown?.textContent).not.toContain("React");
    expect(dropdown?.textContent).not.toContain("Vue");
  });

  it("applies theme and size to input components and dropdowns", () => {
    const autoComplete = mount(AutoComplete, {
      props: {
        size: "small",
        theme: "plain",
        shape: "circle",
        defaultOpen: true,
        showOnEmpty: true,
        options: ["Vue"],
      },
    });
    expect(autoComplete.find(".k-input").classes()).toContain("k-input-sm");
    expect(autoComplete.find(".k-input").classes()).toContain("k-input-plain");
    expect(autoComplete.find(".k-input").classes()).toContain("k-input-circle");
    expect(document.querySelector(".k-auto-complete-dropdown")?.classList).toContain(
      "k-select-dropdown-sm"
    );

    const inputTag = mount(InputTag, { props: { size: "large", theme: "plain", shape: "square" } });
    expect(inputTag.classes()).toContain("k-input-tag-lg");
    expect(inputTag.classes()).toContain("k-input-tag-plain");
    expect(inputTag.classes()).toContain("k-input-tag-square");

    const mentions = mount(Mentions, { props: { size: "small", theme: "plain", shape: "circle" } });
    expect(mentions.find("textarea").classes()).toContain("k-textarea-sm");
    expect(mentions.find("textarea").classes()).toContain("k-textarea-plain");
    expect(mentions.find("textarea").classes()).toContain("k-textarea-circle");
  });

  it("adds, deduplicates and removes InputTag values", async () => {
    const wrapper = mount(InputTag, { props: { value: ["Vue"] } });
    const input = wrapper.find("input");
    await input.setValue("React");
    await input.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([["Vue", "React"]]);
    await input.setValue("react");
    await input.trigger("keydown", { key: "Enter" });
    expect(wrapper.findAll(".k-input-tag-item")).toHaveLength(2);
    await input.trigger("keydown", { key: "Backspace" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([["Vue"]]);
  });

  it("inserts a mention", async () => {
    const wrapper = mount(Mentions, { attachTo: document.body, props: { options: ["team"] } });
    const textarea = wrapper.find("textarea");
    await textarea.setValue("Hello @t");
    (textarea.element as HTMLTextAreaElement).setSelectionRange(8, 8);
    await textarea.trigger("input");
    await textarea.trigger("keydown", { key: "Enter" });
    expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["Hello @team "]);
    wrapper.unmount();
  });

  it("passes rows and computes a caret-anchored Mentions dropdown position", async () => {
    const wrapper = mount(Mentions, {
      attachTo: document.body,
      props: { rows: 1, placement: "top-right", options: ["team"] },
    });
    const textarea = wrapper.find("textarea");
    expect(textarea.attributes("rows")).toBe("1");
    await textarea.setValue("@");
    (textarea.element as HTMLTextAreaElement).setSelectionRange(1, 1);
    await textarea.trigger("input");
    await nextTick();
    expect(document.querySelector<HTMLElement>(".k-mentions-dropdown")?.style.top).not.toBe("");
    wrapper.unmount();
  });

  it("keeps dropdown options stable while selection closes", async () => {
    const autoComplete = mount(AutoComplete, {
      attachTo: document.body,
      props: { options: ["Vue", "React", "Angular"], showOnEmpty: true },
    });
    await autoComplete.find("input").trigger("focus");
    await nextTick();
    const autoOptions = document.querySelectorAll(".k-auto-complete-dropdown .k-select-item");
    expect(autoOptions).toHaveLength(3);
    (autoOptions[1] as HTMLElement).click();
    await nextTick();
    expect(document.querySelectorAll(".k-auto-complete-dropdown .k-select-item")).toHaveLength(3);
    autoComplete.unmount();

    const mentions = mount(Mentions, {
      attachTo: document.body,
      props: { options: ["alice", "alex", "allen"] },
    });
    const textarea = mentions.find("textarea");
    await textarea.setValue("@a");
    (textarea.element as HTMLTextAreaElement).setSelectionRange(2, 2);
    await textarea.trigger("input");
    await nextTick();
    const mentionOptions = document.querySelectorAll(".k-mentions-dropdown .k-select-item");
    expect(mentionOptions).toHaveLength(3);
    (mentionOptions[0] as HTMLElement).click();
    await nextTick();
    expect(document.querySelectorAll(".k-mentions-dropdown .k-select-item")).toHaveLength(3);
    mentions.unmount();
  });

  it("renders and changes Steps", async () => {
    const wrapper = mount(Steps, {
      props: { current: 0, items: [{ title: "One" }, { title: "Two" }], onChange: () => undefined },
    });
    await wrapper.findAll(".k-step")[1].trigger("click");
    await nextTick();
    expect(wrapper.emitted("change")?.at(-1)).toEqual([1]);
  });
});

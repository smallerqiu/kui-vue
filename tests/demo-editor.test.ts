import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { h, nextTick, ref } from "vue";
import Demo from "../src/components/demo/demo";

vi.mock("vue-router", () => ({ useRouter: () => ({ push: vi.fn() }) }));

describe("Demo editor selection", () => {
  const wrappers: ReturnType<typeof mount>[] = [];
  afterEach(() => {
    wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
  });

  const setup = () => {
    const source = ref("original code");
    const wrapper = mount(Demo, {
      attachTo: document.body,
      props: { toolbar: "status" },
      slots: { "code-ts": () => h("pre", { innerHTML: source.value }) },
    });
    wrappers.push(wrapper);
    const editor = wrapper.get(".k-code").element as HTMLElement;
    editor.textContent = "edited code";
    editor.tabIndex = 0;
    editor.focus();
    const selection = window.getSelection()!;
    selection.setBaseAndExtent(editor.firstChild!, 3, editor.firstChild!, 7);
    editor.scrollTop = 30;
    editor.scrollLeft = 10;
    return { wrapper, editor, selection, source };
  };

  it("keeps the selection and DOM intact when unrelated state rerenders", async () => {
    const { wrapper, editor, selection } = setup();
    const textNode = editor.firstChild;
    await wrapper.setProps({ direction: "vertical" });
    expect(editor.firstChild).toBe(textNode);
    expect(selection.anchorOffset).toBe(3);
    expect(selection.focusOffset).toBe(7);
    expect(editor.scrollTop).toBe(30);
  });

  it("restores the draft and selection when a slot update replaces editor content", async () => {
    const { editor, selection, source } = setup();
    source.value = "new original code";
    await nextTick();
    expect(editor.textContent).toBe("edited code");
    expect(selection.toString()).toBe("ted ");
    expect(editor.scrollTop).toBe(30);
    expect(editor.scrollLeft).toBe(10);
  });
});

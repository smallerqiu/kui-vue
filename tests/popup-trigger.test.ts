import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import { h, nextTick } from "vue";
import Popconfirm from "../components/popconfirm";
import Poptip from "../components/poptip";
import Tooltip from "../components/tooltip";

afterEach(() => {
  document.body.innerHTML = "";
});

describe("popup triggers", () => {
  it("supports element and text Tooltip triggers", async () => {
    const elementWrapper = mount(Tooltip, {
      attachTo: document.body,
      props: { title: "Element tooltip" },
      slots: { default: () => h("a", { href: "#" }, "Hover link") },
    });
    await elementWrapper.get("a").trigger("mouseenter");
    await nextTick();
    expect(document.body.textContent).toContain("Element tooltip");

    const textWrapper = mount(Tooltip, {
      attachTo: document.body,
      props: { title: "Text tooltip" },
      slots: { default: () => "Hover text" },
    });
    await textWrapper.get("span").trigger("mouseenter");
    await nextTick();
    expect(document.body.textContent).toContain("Text tooltip");

    elementWrapper.unmount();
    textWrapper.unmount();
  });

  it("supports element triggers for Poptip and Popconfirm", async () => {
    const poptipWrapper = mount(Poptip, {
      attachTo: document.body,
      props: { content: "Poptip content", trigger: "click" },
      slots: { default: () => h("a", { href: "#" }, "Open poptip") },
    });
    await poptipWrapper.get("a").trigger("click");
    await nextTick();
    expect(document.body.textContent).toContain("Poptip content");

    const popconfirmWrapper = mount(Popconfirm, {
      attachTo: document.body,
      props: { title: "Confirm action?" },
      slots: { default: () => h("a", { href: "#" }, "Open confirm") },
    });
    await popconfirmWrapper.get("a").trigger("click");
    await nextTick();
    expect(document.body.textContent).toContain("Confirm action?");

    poptipWrapper.unmount();
    popconfirmWrapper.unmount();
  });
});

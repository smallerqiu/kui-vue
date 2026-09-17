import { mount } from "@vue/test-utils";
import { afterEach, expect, it, vi } from "vitest";
import { h, nextTick } from "vue";
import Preview from "../components/image/preview";
import Image from "../components/image/image";
import Group from "../components/image/group";
import Slider from "../components/slider";

vi.mock("../components/image/utils", () => ({
  loadImage: (_src: string, done: () => void) => {
    done();
    return () => {};
  },
}));

const cleanup: (() => void)[] = [];
afterEach(() => cleanup.splice(0).forEach((fn) => fn()));

it("constrains a dragged image when shrinking with the slider", async () => {
  const wrapper = mount(Preview, {
    props: { value: true, src: "a.png" },
    attachTo: document.body,
  });
  cleanup.push(() => wrapper.unmount());
  const img = wrapper.get("img");
  Object.defineProperties(img.element, {
    offsetWidth: { value: window.innerWidth },
    offsetHeight: { value: window.innerHeight },
  });
  const transform = () =>
    (wrapper.get(".k-image-preview-img-wrap").element as HTMLElement).style.transform;
  wrapper.findComponent(Slider).vm.$emit("change", 3);
  await nextTick();
  await img.trigger("mousedown", { button: 0, clientX: 100, clientY: 100 });
  const wrap = wrapper.get(".k-image-preview-img-wrap").element as HTMLElement;
  expect(wrap.style.transition).toBe("none");
  document.dispatchEvent(new MouseEvent("mousemove", { clientX: 200, clientY: 200 }));
  document.dispatchEvent(new MouseEvent("mousemove", { clientX: 400, clientY: 400 }));
  await nextTick();
  expect(transform()).toBe("translate3d(300px, 300px, 0px)");
  expect(wrap.style.transition).toBe("none");
  document.dispatchEvent(new MouseEvent("mouseup"));
  await nextTick();
  expect(wrap.style.transition).toBe("");
  expect(transform()).toBe("translate3d(300px, 300px, 0px)");
  wrapper.findComponent(Slider).vm.$emit("change", 1);
  await nextTick();
  expect(transform()).toBe("translate3d(0px, 0px, 0px)");
});

it("updates and removes panel and tool slots when reusing a group preview", async () => {
  const wrapper = mount(Group, {
    attachTo: document.body,
    slots: {
      default: () => [
        h(
          Image,
          { src: "a.png", showPanel: true },
          {
            panel: () => "Panel A",
            tool: () => h("button", { class: "custom-tool" }, "Tool A"),
          },
        ),
        h(
          Image,
          { src: "b.png", showPanel: true },
          {
            panel: () => "Panel B",
            tool: () => h("button", { class: "custom-tool" }, "Tool B"),
          },
        ),
        h(Image, { src: "c.png" }),
      ],
    },
  });
  cleanup.push(() => wrapper.unmount());
  const images = wrapper.findAllComponents(Image);
  await images[0].trigger("click");
  const preview = document.querySelector(".k-image-preview-root");
  expect(document.querySelector(".k-image-preview-panel")?.textContent).toContain("Panel A");
  (document.querySelector(".k-image-preview-mask") as HTMLElement).click();
  await nextTick();
  expect(images[0].emitted("close")).toHaveLength(1);
  await images[1].trigger("click");
  expect(document.querySelector(".k-image-preview-root")).toBe(preview);
  expect(document.querySelector(".k-image-preview-img")?.getAttribute("src")).toBe("b.png");
  expect(document.querySelector(".k-image-preview-panel")?.textContent).toContain("Panel B");
  expect(document.querySelector(".custom-tool")?.textContent).toBe("Tool B");
  (document.querySelector(".k-image-preview-mask") as HTMLElement).click();
  await nextTick();
  expect(images[1].emitted("close")).toHaveLength(1);
  expect(images[0].emitted("close")).toHaveLength(1);
  await images[2].trigger("click");
  expect(document.querySelector(".k-image-preview-panel")).toBeNull();
  expect(document.querySelector(".custom-tool")).toBeNull();
  wrapper.unmount();
  cleanup.pop();
  expect(document.querySelector(".k-image-preview-root")).toBeNull();
});

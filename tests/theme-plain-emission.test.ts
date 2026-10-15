// Audit ⑪ mirror of kui-react's tests/theme-plain-emission.test.tsx: `theme="plain"` used to be
// answered with `k-<component>-borderless`, so "no border and no surface" could not be told apart
// from "no border", and the components' own `.k-<component>-plain` LESS rules were unreachable.
import { enableAutoUnmount, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import Cascader from "../components/cascader";
import DatePicker from "../components/date-picker";
import Select from "../components/select/select";
import TreeSelect from "../components/tree-select";

enableAutoUnmount(afterEach);
afterEach(() => {
  document.body.innerHTML = "";
});

const CASES = [
  { name: "k-datepicker", component: DatePicker, props: {} },
  { name: "k-select", component: Select, props: { options: [{ label: "Apple", value: "apple" }] } },
  {
    name: "k-cascader",
    component: Cascader,
    props: { options: [{ label: "Apple", value: "apple" }] },
  },
  {
    name: "k-tree-select",
    component: TreeSelect,
    props: { treeData: [{ key: "apple", title: "Apple" }] },
  },
];

// The control is the root for these components, but read it by class so a wrapper element around
// it could not make an assertion pass on an empty class list.
const rootClasses = (wrapper: ReturnType<typeof mount>, name: string) => {
  const element = wrapper.element.classList.contains(name)
    ? wrapper.element
    : wrapper.find("." + name).element;
  return Array.from((element as HTMLElement).classList);
};

describe("theme=plain and bordered=false are separate classes", () => {
  for (const { name, component, props } of CASES) {
    it(`${name} emits ${name}-plain without borrowing ${name}-borderless`, () => {
      const wrapper = mount(component, {
        attachTo: document.body,
        props: { ...props, theme: "plain" },
      });
      const plain = rootClasses(wrapper, name);
      expect(plain).toContain(`${name}-plain`);
      expect(plain, `${name} must not alias plain onto borderless`).not.toContain(
        `${name}-borderless`,
      );
    });

    it(`${name} keeps ${name}-borderless for bordered=false alone`, () => {
      const wrapper = mount(component, {
        attachTo: document.body,
        props: { ...props, bordered: false },
      });
      const borderless = rootClasses(wrapper, name);
      expect(borderless).toContain(`${name}-borderless`);
      expect(borderless, `${name} must not paint plain for a borderless box`).not.toContain(
        `${name}-plain`,
      );
    });

    it(`${name} emits both when the two asks are combined`, () => {
      const wrapper = mount(component, {
        attachTo: document.body,
        props: { ...props, theme: "plain", bordered: false },
      });
      expect(rootClasses(wrapper, name)).toEqual(
        expect.arrayContaining([`${name}-plain`, `${name}-borderless`]),
      );
    });

    it(`${name} still emits ${name}-fill for the default theme`, () => {
      const wrapper = mount(component, { attachTo: document.body, props });
      expect(rootClasses(wrapper, name)).toContain(`${name}-fill`);
    });
  }
});

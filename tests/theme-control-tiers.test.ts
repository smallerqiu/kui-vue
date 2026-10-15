// 3b mirror of kui-react's tests/theme-control-tiers.test.tsx: these four controls typed `theme` as
// seven values but emitted a class for two of them, so `theme="outline"` reached neither the DOM nor
// a LESS rule. Every supported tier now reaches the root, and `theme="default"` lands on the
// control's own default (`fill`) instead of reaching no tier class.
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

const TIERS = ["fill", "outline", "plain", "solid", "dashed", "underlined"] as const;

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

describe("every theme tier reaches the control root", () => {
  for (const { name, component, props } of CASES) {
    for (const tier of TIERS) {
      it(`${name} emits ${name}-${tier} for theme="${tier}"`, () => {
        const wrapper = mount(component, {
          attachTo: document.body,
          props: { ...props, theme: tier },
        });
        expect(rootClasses(wrapper, name)).toContain(`${name}-${tier}`);
      });
    }

    it(`${name} lands on its own default tier for theme="default"`, () => {
      // "Listen to the component" for a control means `fill`, so `theme="default"` has to reach the
      // same classes as never writing `theme` — not the bordered base a class-less root rendered.
      const tiers = (extra: Record<string, unknown>) =>
        rootClasses(
          mount(component, { attachTo: document.body, props: { ...props, ...extra } }),
          name,
        ).filter((cls) => cls.startsWith(`${name}-`));
      expect(tiers({ theme: "default" })).toEqual(tiers({}));
    });
  }
});

// 3b mirror of kui-react's tests/theme-control-tiers.test.tsx: these controls typed `theme` as more
// values than they emitted — a class only reached the DOM for `fill` and `plain`, so
// `theme="outline"` reached neither the DOM nor a LESS rule. Every tier the type allows now reaches the
// root, and a control written with no `theme` lands on its own default (`fill`).
// The input family is the same contract on the three elements a tier class can land on: the bare
// `<input>`, the wrapper that replaces it once anything decorates the field, and `<textarea>`.
// The style half is in tests/theme-variants.test.ts.
import { enableAutoUnmount, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it } from "vitest";
import type { Component } from "vue";
import AutoComplete from "../components/auto-complete";
import Cascader from "../components/cascader";
import ColorPicker from "../components/color-picker";
import DatePicker from "../components/date-picker";
import Input from "../components/input/input";
import InputNumber from "../components/input-number";
import InputOTP from "../components/input-otp";
import InputTag from "../components/input-tag";
import Mentions from "../components/mentions";
import Select from "../components/select/select";
import TextArea from "../components/input/textarea";
import TreeSelect from "../components/tree-select";

enableAutoUnmount(afterEach);
afterEach(() => {
  document.body.innerHTML = "";
});

const TIERS = ["fill", "outline", "plain", "solid", "dashed", "underlined"] as const;

const CASES: {
  name: string;
  // Two shapes share a class name, so the test titles need something finer than the name.
  label?: string;
  tag?: string;
  attribute?: string;
  component: Component;
  props: Record<string, unknown>;
}[] = [
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
  {
    // `clearable` defaults to true, so a bare `<Input>` is the wrapper shape and the element that
    // carries only `data-single` needs the chrome switched off.
    name: "k-input",
    label: "k-input[data-single]",
    tag: "INPUT",
    attribute: "data-single",
    component: Input,
    props: { clearable: false },
  },
  {
    name: "k-input",
    label: "k-input[data-multiple]",
    tag: "DIV",
    attribute: "data-multiple",
    component: Input,
    props: {},
  },
  { name: "k-textarea", tag: "TEXTAREA", component: TextArea, props: {} },
  {
    name: "k-input-number",
    label: "k-input-number[data-multiple]",
    tag: "DIV",
    attribute: "data-multiple",
    component: InputNumber,
    props: {},
  },
  // 3b-乙2: these two carry the tier on their own root. A tag box paints it on that wrapper, an OTP
  // group paints it on every cell inside, so the emission contract is the same even though the
  // element the paint lands on is not (`tests/theme-variants.test.ts` reads the compiled rules).
  { name: "k-input-tag", tag: "DIV", component: InputTag, props: {} },
  { name: "k-input-otp", tag: "DIV", component: InputOTP, props: {} },
  // 3b-乙2b: the color picker's box is its root too, and its "open" state is a sibling class.
  { name: "k-color-picker", tag: "DIV", component: ColorPicker, props: {} },
];

// The control is the root for these components, but read it by class so a wrapper element around
// it could not make an assertion pass on an empty class list.
const root = (wrapper: ReturnType<typeof mount>, name: string) =>
  (wrapper.element.classList.contains(name)
    ? wrapper.element
    : wrapper.find("." + name).element) as HTMLElement | undefined;

const rootClasses = (wrapper: ReturnType<typeof mount>, name: string) =>
  Array.from(root(wrapper, name)?.classList ?? []);

const mounted = (case_: (typeof CASES)[number], extra: Record<string, unknown>) =>
  mount(case_.component, { attachTo: document.body, props: { ...case_.props, ...extra } });

describe("every theme tier reaches the control root", () => {
  for (const case_ of CASES) {
    const { name, label = name, tag, attribute } = case_;
    for (const tier of TIERS) {
      it(`${label} emits ${name}-${tier} for theme="${tier}"`, () => {
        expect(rootClasses(mounted(case_, { theme: tier }), name)).toContain(`${name}-${tier}`);
      });
    }

    it(`${label} lands on its own default tier with no theme written`, () => {
      // Writing no `theme` is the only spelling of "listen to the component", and for a control that
      // means `fill` — not the bordered base a class-less root used to render. The tier is named here
      // rather than compared between two renders, because two renders that both land on a class no
      // LESS paints still agree with each other.
      const tiers = (extra: Record<string, unknown>) =>
        rootClasses(mounted(case_, extra), name).filter((cls) => cls.startsWith(`${name}-`));
      expect(tiers({}), `${label} has no default tier of its own`).toContain(`${name}-fill`);
    });

    // The tier has to reach the element the LESS block targets, so which of the box shapes is being
    // rendered is part of the contract, not an implementation detail.
    if (tag)
      it(`${label} puts the tier on the ${tag} the style half expects`, () => {
        const element = root(mounted(case_, { theme: "solid" }), name);
        expect(element?.tagName).toBe(tag);
        if (attribute) expect(element?.hasAttribute(attribute)).toBe(true);
      });
  }
});

// 3b-乙3 mirror of kui-react: `AutoComplete` and `Mentions` have no theme surface of their own. LESS
// holds no `.k-auto-complete-<tier>` / `.k-mentions-<tier>` rule at all — the box a tier paints is the
// `Input` / `TextArea` each of them renders, and the wrapper only sizes and positions it. So the
// contract for these two is the delegation itself: the tier has to arrive on the inner control, and
// the wrapper must not start shipping a class no stylesheet can answer.
const DELEGATED: {
  name: string;
  // The control class the tier actually lands on.
  host: string;
  component: Component;
}[] = [
  { name: "k-auto-complete", host: "k-input", component: AutoComplete },
  { name: "k-mentions", host: "k-textarea", component: Mentions },
];

describe("the tier reaches the control these components delegate to", () => {
  for (const { name, host, component } of DELEGATED) {
    const rendered = (extra: Record<string, unknown>) =>
      mount(component, { attachTo: document.body, props: { ...extra } });
    const classes = (wrapper: ReturnType<typeof rendered>) =>
      Array.from(wrapper.element.classList);

    for (const tier of TIERS) {
      it(`${name} forwards ${host}-${tier} for theme="${tier}"`, () => {
        const wrapper = rendered({ theme: tier });
        expect(
          wrapper.element.querySelector("." + host + "-" + tier),
          `${name} dropped the theme on the floor`,
        ).toBeTruthy();
        expect(classes(wrapper), `${name} emits a tier class LESS never paints`).not.toContain(
          `${name}-${tier}`,
        );
      });
    }

    it(`${name} leaves its own root unthemed when nothing is written`, () => {
      // The inner control answers "listen to the component" with its own `fill`; the wrapper, which
      // has no surface of its own, must not start shipping a tier class no stylesheet can answer.
      const wrapper = rendered({});
      expect(
        wrapper.element.querySelector("." + host + "-fill"),
        `${name} leaves the inner control with no tier`,
      ).toBeTruthy();
      expect(
        classes(wrapper).filter((cls) => TIERS.some((tier) => cls === `${name}-${tier}`)),
        `${name} emits a tier class of its own`,
      ).toEqual([]);
    });
  }
});

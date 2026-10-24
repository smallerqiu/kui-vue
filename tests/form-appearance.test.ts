// mirror of kui-react's tests/form-appearance.test.tsx: `Form`'s `size`, `shape` and `theme` are
// the appearance of its *child controls*, and a Card or an Alert sitting in the same form is not one.
// Vue has always said this with two hooks — `useFormAppearance` for controls, `useConfigAppearance` for
// everything else — and react read the form from the single hook every component called, so
// `<Form theme="solid">` plated every panel around its fields and `<Form size="small">` shrank them.
// The two tables below are that split: which components may take an appearance from the form, which must not.
// One difference in the trees is worth naming, because it is the reason the control cases here are wrapped
// in a `FormItem`: vue hands a control the form's appearance through the field context that `FormItem`
// provides, while react hands it through the form context wherever the control sits. Which files sit on
// which hook is identical in both repositories, and that is the contract this file is checking.
// Every surface is also asked to take the same tier from `ConfigProvider`, so "the form was ignored" can
// never be misread as "inheritance broke" — the split is about `Form`, not about inheriting.
import { enableAutoUnmount, mount } from "@vue/test-utils";
import { afterEach, describe, expect, it, vi } from "vitest";
import { h, type Component } from "vue";
import Alert from "../components/alert";
import AutoComplete from "../components/auto-complete";
import Button from "../components/button/button";
import Card from "../components/card";
import Cascader from "../components/cascader";
import CheckCard from "../components/check-card/check-card";
import Checkbox from "../components/checkbox/checkbox";
import Collapse from "../components/collapse";
import ColorPicker from "../components/color-picker";
import ConfigProvider from "../components/config";
import DatePicker from "../components/date-picker";
import FeatureCard from "../components/feature-card";
import FeedbackPanel from "../components/feedback-panel/feedback-panel";
import Form from "../components/form/form";
import FormItem from "../components/form/form-item";
import { Image } from "../components/image";
import Input from "../components/input/input";
import InputGroup from "../components/input/input-group";
import InputNumber from "../components/input-number";
import InputOTP from "../components/input-otp";
import InputTag from "../components/input-tag";
import Kanban from "../components/kanban";
import ListPanel from "../components/list-panel";
import Mentions from "../components/mentions";
import Page from "../components/page";
import QRCode from "../components/qrcode";
import Radio from "../components/radio/radio";
import Select from "../components/select/select";
import StatCard from "../components/stat-card/stat-card";
import Switch from "../components/switch";
import Tag from "../components/tag";
import TextArea from "../components/input/textarea";
import Transfer from "../components/transfer";
import TreeSelect from "../components/tree-select";

enableAutoUnmount(afterEach);
afterEach(() => {
  document.body.innerHTML = "";
});

// `QRCode` paints into a canvas as soon as it mounts and jsdom hands back no 2d context; these cases only
// read the class list, so the encoder is stubbed instead of left to throw inside the component's own `try`.
vi.mock("qrcode", () => ({ toCanvas: vi.fn(async () => {}) }));

const OPTIONS = [{ label: "Apple", value: "apple" }];
const TREE = [{ key: "apple", title: "Apple" }];
const TRANSFER_DATA = [
  { key: "a", title: "选项一" },
  { key: "b", title: "选项二" },
];
const TRANSFER_SPLIT = ["b"];
const BOARD_COLUMNS = [{ key: "todo", title: "Todo", color: "#87909c" }];

const TIERS = ["fill", "outline", "plain", "solid", "dashed", "underlined"] as const;

// `prefix` is the class that carries the tier, so the two wrappers with no surface of their own name the
// control they delegate to and keep their own name in `label` for the title.
const CONTROLS: {
  prefix: string;
  label?: string;
  tier: string;
  component: Component;
  props: Record<string, unknown>;
}[] = [
  { prefix: "k-input", tier: "solid", component: Input, props: {} },
  { prefix: "k-textarea", tier: "solid", component: TextArea, props: {} },
  { prefix: "k-input-number", tier: "solid", component: InputNumber, props: {} },
  { prefix: "k-input-otp", tier: "solid", component: InputOTP, props: {} },
  { prefix: "k-input-tag", tier: "solid", component: InputTag, props: {} },
  { prefix: "k-select", tier: "solid", component: Select, props: { options: OPTIONS } },
  { prefix: "k-tree-select", tier: "solid", component: TreeSelect, props: { treeData: TREE } },
  { prefix: "k-cascader", tier: "solid", component: Cascader, props: { options: OPTIONS } },
  { prefix: "k-datepicker", tier: "solid", component: DatePicker, props: {} },
  { prefix: "k-color-picker", tier: "solid", component: ColorPicker, props: {} },
  {
    prefix: "k-input",
    label: "k-auto-complete",
    tier: "solid",
    component: AutoComplete,
    props: {},
  },
  { prefix: "k-textarea", label: "k-mentions", tier: "solid", component: Mentions, props: {} },
  // A checkbox and a radio paint two tiers, so the probe has to be the one their own look is not.
  { prefix: "k-checkbox", tier: "outline", component: Checkbox, props: {} },
  { prefix: "k-radio", tier: "outline", component: Radio, props: { value: "a" } },
  {
    prefix: "k-transfer",
    tier: "solid",
    component: Transfer,
    props: { dataSource: TRANSFER_DATA, modelValue: TRANSFER_SPLIT },
  },
  {
    prefix: "k-check-card",
    tier: "solid",
    component: CheckCard,
    props: { title: "选项" },
  },
];

// Everything else a form may wrap: the tier has to stay the one the component was built to look like. `own`
// is that tier, and `Button` owns none — its default look carries no tier class at all.
const SURFACES: {
  prefix: string;
  label?: string;
  own: string | null;
  component: Component;
  props: Record<string, unknown>;
}[] = [
  { prefix: "k-card", own: "fill", component: Card, props: {} },
  {
    prefix: "k-feature-card",
    own: "fill",
    component: FeatureCard,
    props: { title: "标题" },
  },
  { prefix: "k-stat-card", own: "fill", component: StatCard, props: { title: "统计" } },
  { prefix: "k-collapse", own: "outline", component: Collapse, props: {} },
  {
    prefix: "k-feedback-panel",
    own: "outline",
    component: FeedbackPanel,
    props: {},
  },
  {
    prefix: "k-alert",
    own: "fill",
    component: Alert,
    props: { type: "info", message: "提示" },
  },
  { prefix: "k-image", own: "plain", component: Image, props: {} },
  {
    prefix: "k-qrcode",
    own: "outline",
    component: QRCode,
    props: { value: "https://example.com" },
  },
  { prefix: "k-page", own: "fill", component: Page, props: { total: 100 } },
  { prefix: "k-kanban", own: "fill", component: Kanban, props: { columns: BOARD_COLUMNS } },
  {
    prefix: "k-card",
    label: "k-list-panel",
    own: "outline",
    component: ListPanel,
    props: { summary: "12 条" },
  },
  { prefix: "k-tag", own: "fill", component: Tag, props: {} },
  { prefix: "k-btn", own: null, component: Button, props: {} },
];

const classesOf = (wrapper: ReturnType<typeof mount>, selector: string) =>
  Array.from(wrapper.find(selector).element.classList);

const tiersOf = (classes: string[], prefix: string) =>
  classes.filter((cls) => TIERS.some((tier) => cls === `${prefix}-${tier}`));

// A control sits in the field its form provides; a surface sits in the form directly, which is where the
// split has to be visible: the same parent, two answers.
const controlUnderForm = (control: (typeof CONTROLS)[number], formProps: Record<string, unknown>) =>
  mount(Form, {
    attachTo: document.body,
    props: { model: { name: "" }, ...formProps },
    slots: {
      default: () => h(FormItem, { prop: "name" }, () => h(control.component, control.props)),
    },
  });

const surfaceUnderForm = (surface: (typeof SURFACES)[number], formProps: Record<string, unknown>) =>
  mount(Form, {
    attachTo: document.body,
    props: { model: { name: "" }, ...formProps },
    slots: { default: () => h(surface.component, surface.props) },
  });

describe("a Form hands its tier to the controls it wraps", () => {
  for (const control of CONTROLS) {
    const label = control.label ?? control.prefix;
    it(`${label} takes ${control.prefix}-${control.tier} from the form`, () => {
      expect(
        classesOf(controlUnderForm(control, { theme: control.tier }), `.${control.prefix}`),
      ).toContain(`${control.prefix}-${control.tier}`);
    });
  }
});

describe("a Form keeps its tier off everything else", () => {
  for (const surface of SURFACES) {
    const label = surface.label ?? surface.prefix;
    it(`${label} stays on ${surface.own ? `${surface.prefix}-${surface.own}` : "its own look"} under a form`, () => {
      expect(
        tiersOf(
          classesOf(surfaceUnderForm(surface, { theme: "solid" }), `.${surface.prefix}`),
          surface.prefix,
        ),
      ).toEqual(surface.own ? [`${surface.prefix}-${surface.own}`] : []);
    });

    it(`${label} still takes ${surface.prefix}-solid from ConfigProvider`, () => {
      // The form is the only source this component has to ignore; a provider still speaks for everything
      // under it, `Button` included — it owns no default tier, but `k-btn-solid` is one it paints.
      const wrapper = mount(ConfigProvider, {
        attachTo: document.body,
        props: { theme: "solid" },
        slots: { default: () => h(surface.component, surface.props) },
      });
      expect(tiersOf(classesOf(wrapper, `.${surface.prefix}`), surface.prefix)).toEqual([
        `${surface.prefix}-solid`,
      ]);
    });
  }

  // Sizes and shapes travel over the same two hooks, and a large form over a small provider is how the
  // split shows on something that is not a tier. The three controls spell "large" as `-lg`, while a card
  // and a button spell "small" as `-small` and `-sm`, which is why each one is named rather than matched
  // by a pattern.
  it("sizes the controls it wraps and leaves the panels around them to the provider", () => {
    const wrapper = mount(ConfigProvider, {
      attachTo: document.body,
      props: { size: "small" },
      slots: {
        default: () =>
          h(Form, { model: { name: "" }, size: "large" }, () => [
            h(FormItem, { prop: "name" }, () => h(Input, { class: "field" })),
            h(FormItem, { prop: "name" }, () => h(Select, { class: "choice", options: OPTIONS })),
            h(FormItem, { prop: "name" }, () => h(TextArea, { class: "note" })),
            h(FormItem, { prop: "name" }, () => h(Switch, { class: "toggle" })),
            h(Card, { class: "panel" }),
            h(Button, { class: "action" }, () => "按钮"),
          ]),
      },
    });
    expect(classesOf(wrapper, ".field")).toContain("k-input-lg");
    expect(classesOf(wrapper, ".choice")).toContain("k-select-lg");
    expect(classesOf(wrapper, ".note")).toContain("k-textarea-lg");
    // A switch has only the small spelling, so the form's `large` shows up as the provider's `small`
    // not reaching it.
    expect(classesOf(wrapper, ".toggle")).not.toContain("k-switch-sm");
    for (const selector of [".panel", ".action"]) {
      const classes = classesOf(wrapper, selector);
      expect(classes.some((cls) => /-(lg|large)\b/.test(cls))).toBe(false);
    }
    expect(classesOf(wrapper, ".panel")).toContain("k-card-small");
    expect(classesOf(wrapper, ".action")).toContain("k-btn-sm");
  });

  it("shapes the controls it wraps and leaves the panels around them to the provider", () => {
    const wrapper = mount(ConfigProvider, {
      attachTo: document.body,
      props: { shape: "square" },
      slots: {
        default: () =>
          h(Form, { model: { name: "" }, shape: "circle" }, () => [
            h(FormItem, { prop: "name" }, () => h(Input, { class: "field" })),
            h(Card, { class: "panel" }),
            h(Button, { class: "action" }, () => "按钮"),
          ]),
      },
    });
    expect(classesOf(wrapper, ".field")).toContain("k-input-circle");
    expect(classesOf(wrapper, ".panel")).toContain("k-card-square");
    expect(classesOf(wrapper, ".action")).toContain("k-btn-square");
  });
});

// InputGroup forwards the full resolved tier so text addons match the field's surface and border.
// react reaches the group from the form context directly, since its form speaks to everything below it.
// vue's form reaches a control only through `FormItem`, and `FormItem` hands its field to a *marked* field
// component sitting in its own slot — a wrapper is not one, and putting a second channel in the group would
// have it border a field that is still filled. So here the tier arrives through `Input`, which resolves it
// for the field and forwards what it resolved. Same visible result, one channel per tree.
describe("InputGroup follows the tier its field is on", () => {
  const groupTiers = (wrapper: ReturnType<typeof mount>) =>
    tiersOf(classesOf(wrapper, ".k-input-group"), "k-input-group");

  const underProvider = (tier?: string, groupProps: Record<string, unknown> = {}) =>
    mount(ConfigProvider, {
      attachTo: document.body,
      props: tier === undefined ? {} : { theme: tier },
      slots: { default: () => h(InputGroup, groupProps, () => h(Input)) },
    });

  const fieldWithAddon = (
    rootProps: Record<string, unknown>,
    formProps?: Record<string, unknown>,
  ) =>
    mount(ConfigProvider, {
      attachTo: document.body,
      props: rootProps,
      slots: {
        default: () =>
          formProps
            ? h(Form, { model: { name: "" }, ...formProps }, () =>
                h(FormItem, { prop: "name" }, () => h(Input, { addonBefore: "https://" })),
              )
            : h(Input, { addonBefore: "https://" }),
      },
    });

  it("stays on its own fill when nothing asks for a tier", () => {
    expect(groupTiers(underProvider())).toEqual(["k-input-group-fill"]);
  });

  for (const tier of TIERS.filter((name) => name !== "fill")) {
    it(`ConfigProvider theme="${tier}" borders the addon boxes`, () => {
      expect(groupTiers(underProvider(tier))).toEqual([`k-input-group-${tier}`]);
    });

    it(`ConfigProvider theme="${tier}" borders them on the group an Input builds`, () => {
      const wrapper = fieldWithAddon({ theme: tier });
      expect(classesOf(wrapper, ".k-input")).toContain(`k-input-${tier}`);
      expect(groupTiers(wrapper)).toEqual([`k-input-group-${tier}`]);
    });
  }

  it("an explicit theme outranks the tier it is standing in", () => {
    expect(groupTiers(underProvider("outline", { theme: "fill" }))).toEqual(["k-input-group-fill"]);
    expect(groupTiers(underProvider("fill", { theme: "outline" }))).toEqual([
      "k-input-group-outline",
    ]);
  });

  it("a form tier reaches it through the field it wraps", () => {
    // The one shape vue's `FormItem` channel does cover: the form speaks to the control, and the control
    // carries that tier into the group it builds around its own addons.
    const wrapper = fieldWithAddon({}, { theme: "outline" });
    expect(classesOf(wrapper, ".k-input")).toContain("k-input-outline");
    expect(groupTiers(wrapper)).toEqual(["k-input-group-outline"]);
  });

  it("takes its size the same way, and hands it to the controls inside", () => {
    const wrapper = fieldWithAddon({ size: "small" }, { size: "large" });
    expect(classesOf(wrapper, ".k-input")).toContain("k-input-lg");
    expect(classesOf(wrapper, ".k-input-group")).toContain("k-input-group-lg");

    // A provider sizes a bare group exactly as it sizes the control that would sit in it.
    const inherited = mount(ConfigProvider, {
      attachTo: document.body,
      props: { size: "small" },
      slots: {
        default: () => h(InputGroup, {}, () => h(Button, { class: "action" }, () => "按钮")),
      },
    });
    expect(classesOf(inherited, ".k-input-group")).toContain("k-input-group-sm");
    expect(classesOf(inherited, ".action")).toContain("k-btn-sm");

    // A size written on the group outranks the provider, and it is that resolved size — not merely the one
    // written on a parent — that the controls inside inherit, the way the react build passes it on.
    const explicit = mount(ConfigProvider, {
      attachTo: document.body,
      props: { size: "large" },
      slots: {
        default: () =>
          h(InputGroup, { size: "small" }, () => h(Button, { class: "action" }, () => "按钮")),
      },
    });
    expect(classesOf(explicit, ".k-input-group")).toContain("k-input-group-sm");
    expect(classesOf(explicit, ".action")).toContain("k-btn-sm");
  });
});

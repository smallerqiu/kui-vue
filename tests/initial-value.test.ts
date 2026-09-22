import { enableAutoUnmount, mount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { defineComponent, h, nextTick, reactive, type Component } from "vue";
import {
  Calendar,
  Carousel,
  CarouselItem,
  Cascader,
  CheckCard,
  CheckCardGroup,
  CheckboxGroup,
  ColorPicker,
  DatePicker,
  Drawer,
  Modal,
  Tour,
  InputNumber,
  InputOTP,
  Menu,
  RadioGroup,
  Segmented,
  Select,
  Slider,
  Spin,
  StatNumber,
  Transfer,
  TreeSelect,
  TypographyText,
} from "../components";
import { useInitialValue } from "../components/utils/model-value";

enableAutoUnmount(afterEach);
beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

it("reads value once, clones arrays, and gives defined modelValue priority", () => {
  const props = reactive<{ value: number[]; modelValue?: number[] }>({ value: [1] });
  const value = useInitialValue(props);
  value.value.push(2);
  expect(props.value).toEqual([1]);
  props.value = [3];
  expect(value.value).toEqual([1, 2]);
  props.modelValue = [];
  expect(value.value).toEqual([]);
  value.value = [4];
  expect(value.value).toEqual([]);
});

it.each([0, false, "", null])("does not replace a defined falsy modelValue (%s)", (modelValue) => {
  const props = reactive({ value: "fallback" as unknown, modelValue: modelValue as unknown });
  expect(useInitialValue(props).value).toBe(modelValue);
});

const options = [
  { label: "Alpha", value: "a" },
  { label: "Beta", value: "b" },
];
const fixtures: Array<[string, Component, unknown, Record<string, unknown>]> = [
  ["Select", Select, "b", { options }],
  [
    "TreeSelect",
    TreeSelect,
    "b",
    {
      treeData: [
        { key: "a", title: "Alpha" },
        { key: "b", title: "Beta" },
      ],
    },
  ],
  ["Cascader", Cascader, ["b"], { options }],
  ["Segmented", Segmented, "b", { options }],
  ["RadioGroup", RadioGroup, "b", { options }],
  ["CheckboxGroup", CheckboxGroup, ["b"], { options }],
  ["CheckCardGroup", CheckCardGroup, "b", { options }],
  ["InputNumber", InputNumber, 42, {}],
  ["InputOTP", InputOTP, "123456", {}],
  ["DatePicker", DatePicker, "2026-09-15", {}],
  ["DatePicker range", DatePicker, ["2026-09-15", "2026-09-18"], { mode: "dateRange" }],
  ["Calendar", Calendar, "2026-09-15", {}],
  ["Slider", Slider, 42, {}],
  ["ColorPicker", ColorPicker, "#ff0000", {}],
  [
    "Menu",
    Menu,
    ["b"],
    {
      items: [
        { key: "a", title: "Alpha" },
        { key: "b", title: "Beta" },
      ],
    },
  ],
  ["Spin", Spin, false, {}],
  ["StatNumber", StatNumber, 42, { duration: 0, autoAnimate: false }],
  ["TypographyText", TypographyText, "Initial text", {}],
  [
    "Transfer",
    Transfer,
    [2],
    {
      dataSource: [
        { key: 1, title: "Alpha" },
        { key: 2, title: "Beta" },
      ],
    },
  ],
];

describe("value initialization matches modelValue rendering", () => {
  it.each(fixtures)("%s", async (_name, component, value, extra) => {
    const initialized = mount(component, { props: { ...extra, value } });
    const bound = mount(component, { props: { ...extra, modelValue: value } });
    await nextTick();
    const snapshot = (wrapper: typeof initialized) => ({
      text: wrapper.text(),
      classes: wrapper.findAll("*").map((node) => node.classes().join(" ")),
      inputs: wrapper.findAll("input").map((node) => ({
        value: node.element.value,
        checked: node.element.checked,
      })),
      aria: wrapper
        .findAll("[aria-checked], [aria-selected], [aria-valuenow]")
        .map((node) => [
          node.attributes("aria-checked"),
          node.attributes("aria-selected"),
          node.attributes("aria-valuenow"),
        ]),
    });
    expect(snapshot(initialized)).toEqual(snapshot(bound));
    await initialized.setProps({ value: undefined });
    expect(snapshot(initialized)).toEqual(snapshot(bound));
  });
});

it.each([
  ["Modal", Modal],
  ["Drawer", Drawer],
  ["Tour", Tour],
] as const)(
  "%s gives explicit modelValue=false priority over value=true",
  async (_name, component) => {
    const wrapper = mount(component as Component, {
      props: {
        value: true,
        modelValue: false,
        title: "Visible title",
        steps: [{ title: "Visible title" }],
      },
      attachTo: document.body,
    });
    expect(document.body.textContent).not.toContain("Visible title");
    wrapper.unmount();
    const initialized = mount(component as Component, {
      props: { value: true, title: "Visible title", steps: [{ title: "Visible title" }] },
      attachTo: document.body,
    });
    await nextTick();
    expect(document.body.textContent).toContain("Visible title");
    initialized.unmount();
  },
);

it("initializes Carousel on the requested slide and remains navigable", async () => {
  const wrapper = mount(Carousel, {
    props: { value: 1, loop: false },
    slots: { default: () => [0, 1, 2].map((index) => h(CarouselItem, null, () => String(index))) },
  });
  await nextTick();
  const dots = wrapper.findAll('[role="tab"]');
  expect(dots[1].attributes("aria-selected")).toBe("true");
  await dots[2].trigger("click");
  expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([2]);
});

it("keeps Segmented interactive without a v-model listener", async () => {
  const wrapper = mount(Segmented, { props: { value: "a", options } });
  await wrapper.findAll('[role="radio"]')[1].trigger("click");
  expect(wrapper.findAll('[role="radio"]')[1].attributes("aria-checked")).toBe("true");
  await wrapper.setProps({ value: "a" });
  expect(wrapper.findAll('[role="radio"]')[1].attributes("aria-checked")).toBe("true");
  await wrapper.setProps({ modelValue: "a" });
  expect(wrapper.findAll('[role="radio"]')[0].attributes("aria-checked")).toBe("true");
});

it("keeps group option values distinct from the group initial value", async () => {
  const wrapper = mount(CheckCardGroup, {
    props: { value: "a" },
    slots: {
      default: () => [
        h(CheckCard, { value: "a", title: "Alpha" }),
        h(CheckCard, { value: "b", title: "Beta" }),
      ],
    },
  });
  const cards = wrapper.findAllComponents(CheckCard);
  await cards[1].trigger("click");
  expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual(["b"]);
  expect(cards[1].attributes("aria-checked")).toBe("true");
  expect(cards[0].attributes("aria-checked")).toBe("false");
});

it("retains Cascader selection after closing without a v-model listener", async () => {
  const wrapper = mount(Cascader, { props: { value: ["a"], options } });
  await wrapper.trigger("keydown", { key: "Enter" });
  await nextTick();
  await wrapper.trigger("keydown", { key: "ArrowDown" });
  await wrapper.trigger("keydown", { key: "Enter" });
  expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([["b"]]);
  expect(wrapper.text()).toContain("Beta");
});

it("keeps Calendar selection interactive without a v-model listener", async () => {
  const wrapper = mount(Calendar, { props: { value: "2026-09-15" } });
  const cells = wrapper.findAll('[role="gridcell"]');
  const next = cells.find((cell) => cell.attributes("aria-selected") !== "true")!;
  await next.trigger("click");
  expect(wrapper.emitted("update:modelValue")).toHaveLength(1);
  expect(wrapper.find('[aria-selected="true"]').exists()).toBe(true);
  expect(wrapper.emitted("update:modelValue")![0][0]).not.toBe("2026-09-15");
});

it("keeps Transfer data updated after successive uncontrolled moves", async () => {
  const wrapper = mount(Transfer, {
    props: {
      value: [],
      dataSource: [
        { key: 1, title: "Alpha" },
        { key: 2, title: "Beta" },
      ],
    },
  });
  await wrapper.findAll(".k-transfer-item")[0].trigger("click");
  await wrapper.findAll(".k-transfer-operations button")[0].trigger("click");
  await wrapper.findAll(".k-transfer-item")[0].trigger("click");
  await wrapper.findAll(".k-transfer-operations button")[0].trigger("click");
  expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([[1, 2]]);
});

it("uses checked for standalone CheckCard without changing its option value", async () => {
  const wrapper = mount(CheckCard, { props: { value: "option-a", checked: true } });
  await wrapper.trigger("click");
  expect(wrapper.emitted("change")?.at(-1)).toEqual([{ checked: false, value: "option-a" }]);
  await wrapper.setProps({ modelValue: true });
  await wrapper.trigger("click");
  expect(wrapper.emitted("update:modelValue")?.at(-1)).toEqual([false]);
});

it("supports v-model after starting with an initial value", async () => {
  const state = reactive({ value: "a" });
  const Host = defineComponent(
    () => () =>
      h(Segmented, {
        value: "b",
        modelValue: state.value,
        options,
        "onUpdate:modelValue": (value) => {
          state.value = value as string;
        },
      }),
  );
  const wrapper = mount(Host);
  expect(wrapper.findAll('[role="radio"]')[0].attributes("aria-checked")).toBe("true");
  await wrapper.findAll('[role="radio"]')[1].trigger("click");
  expect(state.value).toBe("b");
  state.value = "a";
  await nextTick();
  expect(wrapper.findAll('[role="radio"]')[0].attributes("aria-checked")).toBe("true");
});

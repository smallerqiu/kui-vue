import { defineComponent, type ExtractPropTypes } from "vue";
const splitterPanelProps = {
  size: { type: [Number, String] },
  min: { type: [Number, String] },
  max: { type: [Number, String] },
  resizable: { type: Boolean, default: true },
  collapsible: Boolean,
  collapsed: { type: Boolean, default: undefined },
};
export type SplitterPanelProps = ExtractPropTypes<typeof splitterPanelProps>;

export const SplitterPanel = defineComponent({
  name: "SplitterPanel",
  inheritAttrs: false,
  props: splitterPanelProps,
  emits: { "update:collapsed": (collapsed: boolean) => typeof collapsed === "boolean" },
  setup(_, { attrs, slots }) {
    return () => (
      <div {...attrs} class={["k-splitter-panel", attrs.class]}>
        {slots.default?.()}
      </div>
    );
  },
});

import { defineComponent, type ExtractPropTypes } from "vue";
const splitterPanelProps = {
  size: { type: [Number, String] },
  min: { type: [Number, String] },
  max: { type: [Number, String] },
};
export type SplitterPanelProps = ExtractPropTypes<typeof splitterPanelProps>;

export const SplitterPanel = defineComponent({
  name: "SplitterPanel",
  inheritAttrs: false,
  props: splitterPanelProps,
  setup(_, { attrs, slots }) {
    return () => (
      <div {...attrs} class={["k-splitter-panel", attrs.class]}>
        {slots.default?.()}
      </div>
    );
  },
});

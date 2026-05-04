import { defineComponent, type ExtractPropTypes } from "vue";
const splitterPanelProps = {
  size: { type: [Number, String] },
  min: { type: [Number, String] },
  max: { type: [Number, String] },
};
export type SplitterPanelProps = ExtractPropTypes<typeof splitterPanelProps>;

export const SplitterPanel = defineComponent({
  name: "SplitterPanel",
  props: splitterPanelProps,
  setup(_, { slots }) {
    return () => <div class="k-splitter-panel">{slots.default?.()}</div>;
  },
});

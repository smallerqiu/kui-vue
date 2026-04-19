import { defineComponent, type ExtractPropTypes, type PropType } from "vue";

export const timelineProps = {
  mode: {
    type: String as PropType<"left" | "right" | "center" | "alternate">,
    default: "left",
    validator: (val: string) => {
      return ["left", "right", "center", "alternate"].includes(val);
    },
  },
};

export type TimelineProps = ExtractPropTypes<typeof timelineProps>;

const TimeLine = defineComponent({
  name: "TimeLine",
  props: timelineProps,
  setup(props, { slots }) {
    return () => {
      const classes = ["k-time-line", `k-time-line-${props.mode}`];
      return <ul class={classes}>{slots.default?.()}</ul>;
    };
  },
});

export default TimeLine;

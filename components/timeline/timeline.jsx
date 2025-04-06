import { defineComponent } from "vue";
export default defineComponent({
  name: "TimeLine",
  props: {
    mode: {
      type: String,
      default: "left",
      validator: (val) => {
        return ["left", "right", "center", "alternate"].indexOf(val) > -1;
      },
    },
  },
  setup(ps, { slots }) {
    return () => {
      const classes = ["k-timeline", `k-timeline-${ps.mode}`];
      return <ul class={classes}>{slots.default?.()}</ul>;
    };
  },
});

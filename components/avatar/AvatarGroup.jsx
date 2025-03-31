import { cloneVNode, defineComponent } from "vue";
export default defineComponent({
  name: "AvatarGroup",
  props: {
    maxCount: Number,
    shape: String,
    size: [String, Number],
  },
  setup(props, { slots }) {
    return () => {
      let child = slots.default?.();
      let { shape, size } = props;
      return (
        <div class="k-avatar-group">
          {child.map((c) => {
            return cloneVNode(c, { props: { shape, size } });
          })}
        </div>
      );
    };
  },
});

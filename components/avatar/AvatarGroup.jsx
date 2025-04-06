import { cloneVNode, defineComponent } from "vue";
import { getChildren } from "../utils/vnode";
export default defineComponent({
  name: "AvatarGroup",
  props: {
    maxCount: Number,
    shape: String,
    size: [String, Number],
  },
  setup(props, { slots }) {
    return () => {
      let child = getChildren(slots.default?.());
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

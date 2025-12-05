import { defineComponent, provide, toRefs } from "vue";
import { withInstall } from "../utils/vue";
import { getChildren } from "../utils/vnode";

const AvatarGroup = defineComponent({
  name: "AvatarGroup",
  props: {
    maxCount: Number,
    shape: String,
    size: [String, Number],
  },
  setup(props, { slots }) {
    const { shape, size } = toRefs(props);

    provide("KAvatarGroup", {
      shape,
      size,
    });

    return () => {
      const children = getChildren(slots.default?.());

      return <div class="k-avatar-group">{children}</div>;
    };
  },
});
export default withInstall(AvatarGroup);

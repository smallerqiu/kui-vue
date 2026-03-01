import { defineComponent, provide, toRefs } from "vue";
import { withInstall } from "../utils/vue";
import { getChildren } from "../utils/vnode";
import Avatar from "./avatar";

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
      const { maxCount } = props;

      let childrenToShow = children;
      if (maxCount && maxCount < children.length) {
        childrenToShow = children.slice(0, maxCount);
        childrenToShow.push(
          <Avatar key="_k_avatar_plus_">{`+${children.length - maxCount}`}</Avatar>
        );
      }

      return <div class="k-avatar-group">{childrenToShow}</div>;
    };
  },
});
export default withInstall(AvatarGroup);

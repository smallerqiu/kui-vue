import { defineComponent, provide, toRefs, type ExtractPropTypes, type PropType } from "vue";
import { getChildren } from "../utils/vnode";
import Avatar from "./avatar";

export const avatarGroupProps = {
  maxCount: Number,
  shape: {
    type: String as PropType<"circle" | "square">,
    default: "circle",
  },
  size: {
    type: [String, Number] as PropType<number | "large" | "small" | "default">,
    default: "default",
  },
};

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>;

const AvatarGroup = defineComponent({
  name: "AvatarGroup",
  props: avatarGroupProps,
  setup(props, { slots }) {
    const { shape, size } = toRefs(props);

    provide("KAvatarGroup", {
      shape,
      size,
    });

    return () => {
      const children = getChildren(slots.default?.());
      const { maxCount } = props;

      let childrenToShow = [...children];

      if (maxCount && maxCount < children.length) {
        childrenToShow = children.slice(0, maxCount);
        const restCount = children.length - maxCount;

        childrenToShow.push(
          <Avatar shape={props.shape} size={props.size}>
            {`+${restCount}`}
          </Avatar>
        );
      }

      const groupProps = {
        class: "k-avatar-group",
      };

      return <div {...groupProps}>{childrenToShow}</div>;
    };
  },
});
export default AvatarGroup;

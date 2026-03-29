import { defineComponent, provide, toRefs, type ExtractPropTypes, type PropType } from "vue";
import { getChildren } from "../utils/vnode";
import Avatar from "./avatar";

export const avatarGroupProps = {
  maxCount: Number,
  shape: String as PropType<"circle" | "square">,
  size: [String, Number] as PropType<number | "large" | "small" | "default">,
};

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>;

export default defineComponent({
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
          <Avatar>
            {`+${restCount}`}
          </Avatar>
        );
      }

      const groupProps = {
        class: "k-avatar-group"
      };

      return (
        <div {...groupProps}>
          {childrenToShow}
        </div>
      );
    };
  },
});
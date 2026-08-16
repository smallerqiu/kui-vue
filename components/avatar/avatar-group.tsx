import {
  defineComponent,
  provide,
  toRefs,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { getChildren } from "../utils/vnode";
import Avatar from "./avatar";
import { avatarGroupContextKey, type AvatarShape, type AvatarSize } from "./context";

const avatarGroupProps = {
  maxCount: Number,
  spacing: Number,
  shape: {
    type: String as PropType<AvatarShape>,
    default: "circle",
  },
  size: {
    type: [String, Number] as PropType<AvatarSize>,
    default: "default",
  },
};

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>;

const AvatarGroup = defineComponent({
  name: "AvatarGroup",
  props: avatarGroupProps,
  setup(props, { slots }) {
    const { shape, size } = toRefs(props);

    provide(avatarGroupContextKey, {
      shape,
      size,
    });

    return () => {
      const children = getChildren(slots.default?.());
      const { maxCount } = props;
      const defaultOverlap =
        typeof props.size === "number"
          ? Math.max(0, Math.round(props.size / 4))
          : { small: 6, default: 8, large: 10 }[props.size];
      const overlap = Math.max(0, props.spacing ?? defaultOverlap);

      let childrenToShow = [...children];

      if (maxCount != null && maxCount >= 0 && maxCount < children.length) {
        const visibleCount = Math.floor(maxCount);
        childrenToShow = children.slice(0, visibleCount);
        const restCount = children.length - visibleCount;

        childrenToShow.push(
          <Avatar key="__avatar_group_rest__" shape={props.shape} size={props.size}>
            {`+${restCount}`}
          </Avatar>
        );
      }

      const groupProps = {
        class: "k-avatar-group",
        style: {
          "--kui-avatar-group-overlap": `-${overlap}px`,
        } as CSSProperties,
      };

      return <div {...groupProps}>{childrenToShow}</div>;
    };
  },
});
export default AvatarGroup;

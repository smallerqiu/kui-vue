import { defineComponent, type ExtractPropTypes } from "vue";

import type { CSSProperties } from "vue";

import { skeletonAvatarProps } from "./types";
import { useSkeletonLoading } from "./use-skeleton-loading";

export type SkeletonAvatarProps = ExtractPropTypes<typeof skeletonAvatarProps>;

const SkeletonAvatar = defineComponent({
  name: "SkeletonAvatar",
  props: skeletonAvatarProps,
  setup(props, { slots }) {
    const show = useSkeletonLoading(
      () => props.loading,
      () => props.delay,
    );

    return () => {
      const { size, animated, radius, shape } = props;
      const avatarShape = shape || "circle";
      const _props = {
        class: [
          "k-skeleton k-skeleton-ele",
          {
            "k-skeleton-animated": animated,
          },
        ],
      };
      const innerProps = {
        class: [
          "k-skeleton-avatar",
          {
            "k-skeleton-avatar-lg": size == "large",
            "k-skeleton-avatar-sm": size == "small",
            [`k-skeleton-avatar-${avatarShape}`]: true,
          },
        ],
        style: {} as CSSProperties,
      };
      const child = slots.default?.();

      if (!isNaN(Number(size))) {
        innerProps.style.width = `${size}px`;
        innerProps.style.height = `${size}px`;
      }
      if (radius !== undefined) {
        innerProps.style["border-radius"] = `${radius}px`;
      }
      return (
        <div {..._props} aria-busy={props.loading || undefined}>
          {child?.length && !show.value ? child : <span {...innerProps} aria-hidden="true"></span>}
        </div>
      );
    };
  },
});
export default SkeletonAvatar;

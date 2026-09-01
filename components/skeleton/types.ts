import type { PropType } from "vue";
import type { BooleanType, ShapeType, SizeType } from "../const/types";

type SkeletonSize = SizeType | "default";

const skeletonLoadingProps = {
  animated: Boolean as BooleanType,
  loading: Boolean as BooleanType,
  delay: { type: Number, default: 500 },
};

export const skeletonProps = {
  ...skeletonLoadingProps,
  /** @deprecated Use titleWidth instead. */
  title: Number,
  titleWidth: { type: Number, default: 35 },
  rows: { type: Number, default: 3 },
  avatar: {
    type: [Boolean, Object] as PropType<boolean | { size?: SizeType; shape?: ShapeType }>,
  },
};

export const skeletonAvatarProps = {
  ...skeletonLoadingProps,
  radius: Number,
  shape: String as PropType<ShapeType>,
  size: [Number, String] as PropType<number | SkeletonSize>,
};

export const skeletonButtonProps = {
  ...skeletonLoadingProps,
  block: Boolean as BooleanType,
  width: Number,
  shape: String as PropType<ShapeType>,
  size: String as PropType<SkeletonSize>,
};

export const skeletonImageProps = {
  ...skeletonLoadingProps,
  radius: Number,
  size: [Number, Array] as PropType<number | number[]>,
};

export const skeletonTextProps = {
  ...skeletonLoadingProps,
  width: Number,
  size: String as PropType<SkeletonSize>,
};

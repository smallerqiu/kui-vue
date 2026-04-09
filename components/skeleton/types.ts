import type { PropType } from "vue";
import type { BooleanType } from "../const/types";

type size = "large" | "small" | "default";
type shape = "circle" | "square" | "default";
export const skeletonProps = {
  animated: Boolean as BooleanType,
  radius: Number,
  loading: Boolean as BooleanType,
  block: Boolean as BooleanType,
  width: Number,
  delay: { type: Number, default: 500 },
  shape: String as PropType<shape>,
  size: [Number, String, Array] as PropType<number | size | number[]>,
  title: { type: Number, default: 35 },
  rows: { type: Number, default: 3 },
  avatar: {
    type: [Boolean, Object] as PropType<boolean | { size: size; shape: shape }>,
  },
};

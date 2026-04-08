import type { PropType } from "vue";
import type { TypeBoolean } from "../const/var";

type size = "large" | "small" | "default";
type shape = "circle" | "square" | "default";
export const skeletonProps = {
  animated: Boolean as TypeBoolean,
  radius: Number,
  loading: Boolean as TypeBoolean,
  block: Boolean as TypeBoolean,
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

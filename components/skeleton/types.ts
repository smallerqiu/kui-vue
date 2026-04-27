import type { PropType } from "vue";
import type { BooleanType, ShapeType, SizeType } from "../const/types";

export const skeletonProps = {
  animated: Boolean as BooleanType,
  radius: Number,
  loading: Boolean as BooleanType,
  block: Boolean as BooleanType,
  width: Number,
  delay: { type: Number, default: 500 },
  shape: String as PropType<ShapeType>,
  size: [Number, String, Array] as PropType<number | SizeType | number[]>,
  title: { type: Number, default: 35 },
  rows: { type: Number, default: 3 },
  avatar: {
    type: [Boolean, Object] as PropType<boolean | { size: SizeType; shape: ShapeType }>,
  },
};

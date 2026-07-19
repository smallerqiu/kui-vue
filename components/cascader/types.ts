import type { ExtractPropTypes, PropType } from "vue";
import type {
  BooleanType,
  DropPlacementsType,
  ShapeType,
  SizeType,
  ThemeType,
} from "../const/types";
import type { IconType } from "../icon";

export interface CascaderOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  children?: CascaderOption[];
  isLeaf?: boolean; // 用于异步加载的叶子节点判定
}

export const cascaderProps = {
  modelValue: {
    type: Array as PropType<(string | number)[]>, // [100, 102, 105] 形式的路径数组
    default: () => [],
  },
  options: {
    type: Array as PropType<CascaderOption[]>,
    default: () => [],
  },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  bordered: { type: Boolean as BooleanType, default: true },
  shape: String as PropType<ShapeType>,
  showArrow: { type: Boolean as BooleanType, default: true },
  placeholder: { type: String, default: "" },
  icon: [Array] as PropType<IconType[]>,
  arrowIcon: [Array] as PropType<IconType[]>,
  emptyText: String,
  disabled: Boolean,
  clearable: { type: Boolean, default: true },
  size: String as PropType<SizeType>,
  expandTrigger: {
    type: String as PropType<"click" | "hover">,
    default: "click", // 触发下一级展开的交互
  },
  showAllLevels: {
    type: Boolean,
    default: true, // true 显示 'A / B / C'，false 只显示 'C'
  },
  separator: { type: String, default: " / " },
  placement: {
    type: String as PropType<DropPlacementsType>,
    default: "bottom-left",
  },
};

export type CascaderProps = ExtractPropTypes<typeof cascaderProps>;

import Vue, { VueConstructor } from "vue";

/** TreeSelect component props */
export interface TreeSelectProps {
  placeholder?: string;
  /** default: default */
  size?: any;
  /** default: true */
  transfer?: boolean;
  width?: number;
  value?: string | number | any[];
  clearable?: boolean;
  filterable?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  loading?: boolean;
  /** default: true */
  bordered?: boolean;
  /** default: true */
  showArrow?: boolean;
  theme?: string;
  emptyText?: string;
  icon?: string | any[];
  shape?: string;
  arrowIcon?: string | any[];
  treeData?: any[];
  treeCheckable?: boolean;
  treeShowLine?: boolean;
  /** default: true */
  treeShowIcon?: boolean;
  treeCheckStrictly?: boolean;
  treeExpandedKeys?: any[];
  treeExpandedAll?: boolean;
}

/** TreeSelect component instance */
export interface TreeSelect extends Vue {
  $props: TreeSelectProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** TreeSelect Vue component type */
declare const TreeSelect: VueConstructor<TreeSelect>;

export default TreeSelect;

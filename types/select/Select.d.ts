import Vue from "vue";

/** Select component props */
export interface SelectProps {
  placeholder?: string;
  /** default: default */
  size?: any;
  /** default: true */
  transfer?: boolean;
  width?: number;
  value?: string | number | any[];
  /** default: false */
  clearable?: boolean;
  filterable?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  loading?: boolean;
  /** default: true */
  bordered?: boolean;
  /** default: true */
  showArrow?: boolean;
  options?: any[];
  theme?: string;
  emptyText?: string;
  icon?: string | any[];
  shape?: string;
  arrowIcon?: string | any[];
  maxTagCount?: number;
  /** default: true */
  extendWidth?: boolean;
}

declare class Select extends Vue {
  $props: SelectProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Select;

import Vue, { VueConstructor } from "vue";

/** Select component props */
export interface SelectProps {
  placeholder?: string;
  /** default: default */
  size?: any;
  /** default: bottom-left */
  placement?: any;
  width?: number;
  maxTagCount?: number;
  value?: string | number | any[];
  /** default: true */
  clearable?: boolean;
  filterable?: boolean;
  block?: boolean;
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
  loadingText?: string;
  icon?: string | any[];
  shape?: string;
  arrowIcon?: string | any[];
}

/** Select component instance */
export interface Select extends Vue {
  $props: SelectProps;
  $emit(event: string, ...args: any[]): this;
}

/** Select Vue component type */
declare const Select: VueConstructor<Select>;

export default Select;

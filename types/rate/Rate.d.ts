import Vue, { VueConstructor } from "vue";

/** Rate component props */
export interface RateProps {
  /** default: 0 */
  value?: number;
  /** default: true */
  allowClear?: boolean;
  allowHalf?: boolean;
  character?: string | ((...args: any[]) => any);
  icon?: string | any[] | ((...args: any[]) => any);
  /** default: 5 */
  count?: number;
  disabled?: boolean;
  tooltips?: any[];
  showScore?: boolean;
  size?: number;
  color?: string;
}

/** Rate component instance */
export interface Rate extends Vue {
  $props: RateProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Rate Vue component type */
declare const Rate: VueConstructor<Rate>;

export default Rate;

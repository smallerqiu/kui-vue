import Vue from "vue";

/** Slider component props */
export interface SliderProps {
  value?: any[] | number | string;
  /** default: 0 */
  min?: number;
  /** default: 100 */
  max?: number;
  disabled?: boolean;
  /** default: 1 */
  step?: number;
  size?: string;
  range?: boolean;
  vertical?: boolean;
  reverse?: boolean;
  marks?: Record<string, any>;
  /** default: true */
  included?: boolean;
  tipFormatter?: ((...args: any[]) => any) | Record<string, any>;
  tooltipVisible?: boolean;
}

declare class Slider extends Vue {
  $props: SliderProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Slider;

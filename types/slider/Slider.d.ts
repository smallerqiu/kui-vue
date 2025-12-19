import Vue, { VueConstructor } from "vue";

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
  vertical?: boolean;
  range?: boolean;
  reverse?: boolean;
  marks?: Record<string, any>;
  /** default: true */
  included?: boolean;
  tipFormatter?: ((...args: any[]) => any) | Record<string, any>;
  tooltipVisible?: boolean;
}

/** Slider component instance */
export interface Slider extends Vue {
  $props: SliderProps;
  $emit(event: string, ...args: any[]): void;
}

/** Slider Vue component type */
declare const Slider: VueConstructor<Slider>;

export default Slider;

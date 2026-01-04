import Vue, { VueConstructor } from "vue";

/** Slider component props */
export interface SliderProps {
  /** default: 0 */
  value?: any[] | number;
  /** default: 0 */
  min?: number;
  /** default: 100 */
  max?: number;
  /** default: 1 */
  step?: number | Record<string, any>;
  disabled?: boolean;
  vertical?: boolean;
  reverse?: boolean;
  range?: boolean;
  marks?: Record<string, any>;
  size?: string | number;
  /** default: true */
  included?: boolean;
  tipFormatter?: (...args: any[]) => any;
  tooltipVisible?: boolean;
}

/** Slider component instance */
export interface Slider extends Vue {
  $props: SliderProps;
  $emit(event: string, ...args: any[]): this;
}

/** Slider Vue component type */
declare const Slider: VueConstructor<Slider>;

export default Slider;

import Vue, { VueConstructor } from "vue";

/** StatNumber component props */
export interface StatNumberProps {
  value?: number;
  separator?: string;
  /** default: 1 */
  duration?: number;
  /** default: 0 */
  precision?: number;
  /** default: countup */
  type?: string;
  prefix?: string;
  suffix?: string;
}

/** StatNumber component instance */
export interface StatNumber extends Vue {
  $props: StatNumberProps;
  $emit(event: string, ...args: any[]): void;
}

/** StatNumber Vue component type */
declare const StatNumber: VueConstructor<StatNumber>;

export default StatNumber;

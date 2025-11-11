import Vue, { VueConstructor } from "vue";

/** Spin component props */
export interface SpinProps {
  /** default: true */
  value?: boolean;
  /** default: 500 */
  delay?: number;
  /** default: default */
  size?: string;
  /** default: rotate */
  mode?: string;
}

/** Spin component instance */
export interface Spin extends Vue {
  $props: SpinProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Spin Vue component type */
declare const Spin: VueConstructor<Spin>;

export default Spin;

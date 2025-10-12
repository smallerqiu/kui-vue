import Vue from "vue";

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

declare class Spin extends Vue {
  $props: SpinProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Spin;

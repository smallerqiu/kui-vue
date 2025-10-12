import Vue from "vue";

/** BackTop component props */
export interface BackTopProps {
  /** default: 100 */
  height?: string | number;
  right?: string | number;
  bottom?: string | number;
}

declare class BackTop extends Vue {
  $props: BackTopProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default BackTop;

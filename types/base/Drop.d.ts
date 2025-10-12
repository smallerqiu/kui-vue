import Vue from "vue";

/** Drop component props */
export interface DropProps {
  transfer?: boolean;
  value?: boolean;
  className?: string | any[];
  width?: number;
  placement?: string;
  /** default: click */
  trigger?: string;
  /** default: dropdown */
  transitionName?: string;
  selection?: any;
  updateKey?: string | Record<string, any> | any[];
  /** default: 0 */
  offsetLeft?: number;
  /** default: true */
  extendWidth?: boolean;
}

declare class Drop extends Vue {
  $props: DropProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Drop;

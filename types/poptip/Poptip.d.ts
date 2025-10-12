import Vue from "vue";

/** Poptip component props */
export interface PoptipProps {
  dark?: boolean;
  /** default: hover */
  trigger?: string;
  /** default: true */
  transfer?: boolean;
  title?: string;
  width?: number | string;
  /** default: top */
  placement?: any;
  value?: boolean;
}

declare class Poptip extends Vue {
  $props: PoptipProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Poptip;

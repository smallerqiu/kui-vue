import Vue from "vue";

/** Tooltip component props */
export interface TooltipProps {
  dark?: boolean;
  /** default: true */
  transfer?: boolean;
  title?: string | number | Record<string, any> | any[];
  color?: string;
  trigger?: string;
  width?: number | string;
  /** default: top */
  placement?: any;
  value?: boolean;
  show?: boolean;
}

declare class Tooltip extends Vue {
  $props: TooltipProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Tooltip;

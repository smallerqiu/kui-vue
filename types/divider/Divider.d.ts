import Vue from "vue";

/** Divider component props */
export interface DividerProps {
  /** default: horizontal */
  type?: string;
  text?: string;
  dashed?: boolean;
  /** default: center */
  orientation?: string;
}

declare class Divider extends Vue {
  $props: DividerProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Divider;

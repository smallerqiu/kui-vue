import Vue, { VueConstructor } from "vue";

/** thumb component props */
export interface thumbProps {
  vertical?: boolean;
  disabled?: boolean;
  range?: boolean;
  reverse?: boolean;
  max?: number;
  min?: number;
  size?: string;
  step?: number;
  value?: number | any[];
  tipFormatter?: ((...args: any[]) => any) | Record<string, any>;
  type?: string;
  tooltipVisible?: boolean;
}

/** thumb component instance */
export interface thumb extends Vue {
  $props: thumbProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** thumb Vue component type */
declare const thumb: VueConstructor<thumb>;

export default thumb;

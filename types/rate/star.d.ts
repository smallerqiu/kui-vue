import Vue, { VueConstructor } from "vue";

/** star component props */
export interface starProps {
  value?: number;
  character?: string | ((...args: any[]) => any);
  tooltips?: string;
  percent?: number;
  full?: boolean;
  half?: boolean;
  allowHalf?: boolean;
  disabled?: boolean;
  icon?: string | ((...args: any[]) => any) | any[];
  size?: number;
}

/** star component instance */
export interface star extends Vue {
  $props: starProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** star Vue component type */
declare const star: VueConstructor<star>;

export default star;

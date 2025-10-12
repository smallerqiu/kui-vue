import Vue from "vue";

/** Icon component props */
export interface IconProps {
  type?: string | any[];
  size?: string | number;
  color?: string;
  spin?: boolean;
  strokeWidth?: string | number;
}

declare class Icon extends Vue {
  $props: IconProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Icon;

import Vue, { VueConstructor } from "vue";

/** Icon component props */
export interface IconProps {
  type?: string | any[];
  size?: string | number;
  color?: string;
  spin?: boolean;
  strokeWidth?: string | number;
}

/** Icon component instance */
export interface Icon extends Vue {
  $props: IconProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Icon Vue component type */
declare const Icon: VueConstructor<Icon>;

export default Icon;

import Vue, { VueConstructor } from "vue";

/** Badge component props */
export interface BadgeProps {
  count?: string | number;
  dot?: boolean;
  color?: string;
  /** default: default */
  status?: string;
  text?: string;
  /** default: 99 */
  maxCount?: number;
}

/** Badge component instance */
export interface Badge extends Vue {
  $props: BadgeProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Badge Vue component type */
declare const Badge: VueConstructor<Badge>;

export default Badge;

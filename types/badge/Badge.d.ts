import Vue from "vue";

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

declare class Badge extends Vue {
  $props: BadgeProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Badge;

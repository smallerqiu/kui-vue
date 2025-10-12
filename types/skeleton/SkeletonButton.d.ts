import Vue from "vue";

/** SkeletonButton component props */
export interface SkeletonButtonProps {
  animated?: boolean;
  block?: boolean;
  loading?: boolean;
  /** default: 500 */
  delay?: number;
  shape?: string;
  size?: string;
  width?: number;
}

declare class SkeletonButton extends Vue {
  $props: SkeletonButtonProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default SkeletonButton;

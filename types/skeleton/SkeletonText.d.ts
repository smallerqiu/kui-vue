import Vue from "vue";

/** SkeletonText component props */
export interface SkeletonTextProps {
  animated?: boolean;
  loading?: boolean;
  /** default: 500 */
  delay?: number;
  size?: string;
  width?: number;
}

declare class SkeletonText extends Vue {
  $props: SkeletonTextProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default SkeletonText;

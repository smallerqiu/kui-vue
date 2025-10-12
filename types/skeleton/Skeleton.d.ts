import Vue from "vue";

/** Skeleton component props */
export interface SkeletonProps {
  animated?: boolean;
  avatar?: boolean | Record<string, any>;
  loading?: boolean;
  /** default: 35 */
  title?: number;
  /** default: 500 */
  delay?: number;
  /** default: 3 */
  rows?: number;
}

declare class Skeleton extends Vue {
  $props: SkeletonProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Skeleton;

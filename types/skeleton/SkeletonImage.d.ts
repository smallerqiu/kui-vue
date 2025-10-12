import Vue from "vue";

/** SkeletonImage component props */
export interface SkeletonImageProps {
  animated?: boolean;
  loading?: boolean;
  /** default: 500 */
  delay?: number;
  radius?: number;
  size?: number | any[];
}

declare class SkeletonImage extends Vue {
  $props: SkeletonImageProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default SkeletonImage;

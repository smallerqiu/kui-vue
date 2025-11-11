import Vue, { VueConstructor } from "vue";

/** SkeletonImage component props */
export interface SkeletonImageProps {
  animated?: boolean;
  loading?: boolean;
  /** default: 500 */
  delay?: number;
  radius?: number;
  size?: number | any[];
}

/** SkeletonImage component instance */
export interface SkeletonImage extends Vue {
  $props: SkeletonImageProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** SkeletonImage Vue component type */
declare const SkeletonImage: VueConstructor<SkeletonImage>;

export default SkeletonImage;

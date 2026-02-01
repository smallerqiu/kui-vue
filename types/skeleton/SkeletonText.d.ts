import Vue, { VueConstructor } from "vue";

/** SkeletonText component props */
export interface SkeletonTextProps {
  animated?: boolean;
  loading?: boolean;
  /** default: 500 */
  delay?: number;
  size?: string;
  width?: number;
}

/** SkeletonText component instance */
export interface SkeletonText extends Vue {
  $props: SkeletonTextProps;
  $emit(event: string, ...args: any[]): this;
}

/** SkeletonText Vue component type */
declare const SkeletonText: VueConstructor<SkeletonText>;

export default SkeletonText;

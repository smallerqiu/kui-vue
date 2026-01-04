import Vue, { VueConstructor } from "vue";

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

/** Skeleton component instance */
export interface Skeleton extends Vue {
  $props: SkeletonProps;
  $emit(event: string, ...args: any[]): this;
}

/** Skeleton Vue component type */
declare const Skeleton: VueConstructor<Skeleton>;

export default Skeleton;

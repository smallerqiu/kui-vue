import Vue, { VueConstructor } from "vue";

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

/** SkeletonButton component instance */
export interface SkeletonButton extends Vue {
  $props: SkeletonButtonProps;
  $emit(event: string, ...args: any[]): void;
}

/** SkeletonButton Vue component type */
declare const SkeletonButton: VueConstructor<SkeletonButton>;

export default SkeletonButton;

import Vue, { VueConstructor } from "vue";

/** SkeletonAvatar component props */
export interface SkeletonAvatarProps {
  animated?: boolean;
  radius?: number;
  loading?: boolean;
  /** default: 500 */
  delay?: number;
  shape?: string;
  size?: number | string;
}

/** SkeletonAvatar component instance */
export interface SkeletonAvatar extends Vue {
  $props: SkeletonAvatarProps;
  $emit(event: string, ...args: any[]): this;
}

/** SkeletonAvatar Vue component type */
declare const SkeletonAvatar: VueConstructor<SkeletonAvatar>;

export default SkeletonAvatar;

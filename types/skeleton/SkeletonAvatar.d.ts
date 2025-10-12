import Vue from "vue";

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

declare class SkeletonAvatar extends Vue {
  $props: SkeletonAvatarProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default SkeletonAvatar;

import Vue from "vue";

/** AvatarGroup component props */
export interface AvatarGroupProps {
  maxCount?: number;
  shape?: string;
  size?: string | number;
}

declare class AvatarGroup extends Vue {
  $props: AvatarGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default AvatarGroup;

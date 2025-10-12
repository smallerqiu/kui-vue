import Vue from "vue";

/** Avatar component props */
export interface AvatarProps {
  icon?: string | any[];
  shape?: string;
  /** default: default */
  size?: number | string;
  src?: string;
}

declare class Avatar extends Vue {
  $props: AvatarProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Avatar;

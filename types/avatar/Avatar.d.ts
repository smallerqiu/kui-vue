import Vue, { VueConstructor } from "vue";

/** Avatar component props */
export interface AvatarProps {
  icon?: string | any[];
  shape?: string;
  /** default: default */
  size?: number | string;
  src?: string;
}

/** Avatar component instance */
export interface Avatar extends Vue {
  $props: AvatarProps;
  $emit(event: string, ...args: any[]): void;
}

/** Avatar Vue component type */
declare const Avatar: VueConstructor<Avatar>;

export default Avatar;

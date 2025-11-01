import Vue, { VueConstructor } from "vue";

/** AvatarGroup component props */
export interface AvatarGroupProps {
  maxCount?: number;
  shape?: string;
  size?: string | number;
}

/** AvatarGroup component instance */
export interface AvatarGroup extends Vue {
  $props: AvatarGroupProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** AvatarGroup Vue component type */
declare const AvatarGroup: VueConstructor<AvatarGroup>;

export default AvatarGroup;

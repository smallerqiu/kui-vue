import Vue, { VueConstructor } from "vue";

/** Tag component props */
export interface TagProps {
  closeable?: boolean;
  color?: string;
  shape?: string;
  icon?: string | any[];
  /** default: small */
  size?: any;
  theme?: string;
}

/** Tag component instance */
export interface Tag extends Vue {
  $props: TagProps;
  $emit(event: string, ...args: any[]): this;
}

/** Tag Vue component type */
declare const Tag: VueConstructor<Tag>;

export default Tag;

import Vue from "vue";

/** Tag component props */
export interface TagProps {
  closeable?: boolean;
  color?: string;
  shape?: string;
  icon?: string | any[];
  /** default: small */
  size?: any;
}

declare class Tag extends Vue {
  $props: TagProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Tag;

import Vue from "vue";

/** link component props */
export interface linkProps {
  href?: string;
  target?: string;
  title?: string;
}

declare class link extends Vue {
  $props: linkProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default link;

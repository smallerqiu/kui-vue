import Vue, { VueConstructor } from "vue";

/** link component props */
export interface linkProps {
  href?: string;
  target?: string;
  title?: string;
}

/** link component instance */
export interface link extends Vue {
  $props: linkProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** link Vue component type */
declare const link: VueConstructor<link>;

export default link;

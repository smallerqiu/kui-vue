import Vue, { VueConstructor } from "vue";

/** anchor component props */
export interface anchorProps {
  offsetTop?: number;
  affix?: boolean;
  /** default: undefined */
  getContainer?: (...args: any[]) => any;
}

/** anchor component instance */
export interface anchor extends Vue {
  $props: anchorProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** anchor Vue component type */
declare const anchor: VueConstructor<anchor>;

export default anchor;

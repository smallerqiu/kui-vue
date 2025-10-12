import Vue from "vue";

/** anchor component props */
export interface anchorProps {
  offsetTop?: number;
  affix?: boolean;
  /** default: undefined */
  getContainer?: (...args: any[]) => any;
}

declare class anchor extends Vue {
  $props: anchorProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default anchor;

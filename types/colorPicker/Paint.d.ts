import Vue from "vue";

/** paint component props */
export interface paintProps {
  hue?: number;
  value?: string | Record<string, any>;
}

declare class paint extends Vue {
  $props: paintProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default paint;

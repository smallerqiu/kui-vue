import Vue from "vue";

/** layout component props */
export interface layoutProps {
  suffixCls?: string;
}

declare class layout extends Vue {
  $props: layoutProps;
  $emit(event: string, ...args: any[]): this;
}

export default layout;

import Vue from "vue";

/** Col component props */
export interface ColProps {
  span?: number;
  offset?: number;
  flex?: string | number;
}

declare class Col extends Vue {
  $props: ColProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Col;

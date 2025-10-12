import Vue from "vue";

/** alpha component props */
export interface alphaProps {
  value?: string | Record<string, any>;
}

declare class alpha extends Vue {
  $props: alphaProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default alpha;

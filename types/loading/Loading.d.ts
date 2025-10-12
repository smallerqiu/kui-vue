import Vue from "vue";

/** Loading component props */
export interface LoadingProps {}

declare class Loading extends Vue {
  $props: LoadingProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Loading;

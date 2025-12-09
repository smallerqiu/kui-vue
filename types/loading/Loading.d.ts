import Vue, { VueConstructor } from "vue";

/** Loading component props */
export interface LoadingProps {}

/** Loading component instance */
export interface Loading extends Vue {
  $props: LoadingProps;
  $emit(event: string, ...args: any[]): void;
}

/** Loading Vue component type */
declare const Loading: VueConstructor<Loading>;

export default Loading;

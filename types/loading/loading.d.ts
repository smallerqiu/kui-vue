import Vue, { VueConstructor } from "vue";

/** loading component props */
export interface loadingProps {}

/** loading component instance */
export interface loading extends Vue {
  $props: loadingProps;
  $emit(event: string, ...args: any[]): this;
}

/** loading Vue component type */
declare const loading: VueConstructor<loading>;

export default loading;

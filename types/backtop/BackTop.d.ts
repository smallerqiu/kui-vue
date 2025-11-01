import Vue, { VueConstructor } from "vue";

/** BackTop component props */
export interface BackTopProps {
  /** default: 100 */
  height?: string | number;
  right?: string | number;
  bottom?: string | number;
}

/** BackTop component instance */
export interface BackTop extends Vue {
  $props: BackTopProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** BackTop Vue component type */
declare const BackTop: VueConstructor<BackTop>;

export default BackTop;

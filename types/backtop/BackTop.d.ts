import Vue, { VueConstructor } from "vue";

/** BackTop component props */
export interface BackTopProps {
  /** default: 100 */
  height?: number;
  right?: number;
  bottom?: number;
  /** default: undefined */
  target?: (...args: any[]) => any;
}

/** BackTop component instance */
export interface BackTop extends Vue {
  $props: BackTopProps;
  $emit(event: string, ...args: any[]): this;
}

/** BackTop Vue component type */
declare const BackTop: VueConstructor<BackTop>;

export default BackTop;

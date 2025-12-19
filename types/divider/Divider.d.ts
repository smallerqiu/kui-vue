import Vue, { VueConstructor } from "vue";

/** Divider component props */
export interface DividerProps {
  /** default: horizontal */
  type?: string;
  text?: string;
  dashed?: boolean;
  /** default: center */
  orientation?: string;
}

/** Divider component instance */
export interface Divider extends Vue {
  $props: DividerProps;
  $emit(event: string, ...args: any[]): void;
}

/** Divider Vue component type */
declare const Divider: VueConstructor<Divider>;

export default Divider;

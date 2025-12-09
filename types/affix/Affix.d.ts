import Vue, { VueConstructor } from "vue";

/** Affix component props */
export interface AffixProps {
  /** default: 0 */
  offsetTop?: number;
  offsetBottom?: number;
  /** default: undefined */
  target?: (...args: any[]) => any;
}

/** Affix component instance */
export interface Affix extends Vue {
  $props: AffixProps;
  $emit(event: string, ...args: any[]): void;
}

/** Affix Vue component type */
declare const Affix: VueConstructor<Affix>;

export default Affix;

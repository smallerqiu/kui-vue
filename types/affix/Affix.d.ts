import Vue from "vue";

/** Affix component props */
export interface AffixProps {
  /** default: 0 */
  offsetTop?: number;
  offsetBottom?: number;
  /** default: undefined */
  target?: (...args: any[]) => any;
}

declare class Affix extends Vue {
  $props: AffixProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Affix;

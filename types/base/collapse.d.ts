import Vue, { VueConstructor } from "vue";

/** collapse component props */
export interface collapseProps {
  name?: string;
  /** default: true */
  collapse?: boolean;
}

/** collapse component instance */
export interface collapse extends Vue {
  $props: collapseProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** collapse Vue component type */
declare const collapse: VueConstructor<collapse>;

export default collapse;

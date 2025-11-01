import Vue, { VueConstructor } from "vue";

/** Row component props */
export interface RowProps {
  gutter?: number | any[];
  /** default: flex */
  type?: string;
  justify?: string;
  align?: string;
}

/** Row component instance */
export interface Row extends Vue {
  $props: RowProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Row Vue component type */
declare const Row: VueConstructor<Row>;

export default Row;

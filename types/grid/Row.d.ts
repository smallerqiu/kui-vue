import Vue from "vue";

/** Row component props */
export interface RowProps {
  gutter?: number | any[];
  /** default: flex */
  type?: string;
  justify?: string;
  align?: string;
}

declare class Row extends Vue {
  $props: RowProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Row;

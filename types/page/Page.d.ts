import Vue from "vue";

/** Page component props */
export interface PageProps {
  showSizer?: boolean;
  /** default: true */
  showTotal?: boolean;
  showElevator?: boolean;
  /** default: undefined */
  sizeData?: any[];
  /** default: default */
  size?: any;
  /** default: 0 */
  total?: number;
  /** default: 10 */
  pageSize?: number;
  /** default: 1 */
  current?: number;
}

declare class Page extends Vue {
  $props: PageProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Page;

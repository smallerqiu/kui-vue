import Vue, { VueConstructor } from "vue";

/** Page component props */
export interface PageProps {
  disabled?: boolean;
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

/** Page component instance */
export interface Page extends Vue {
  $props: PageProps;
  $emit(event: string, ...args: any[]): void;
}

/** Page Vue component type */
declare const Page: VueConstructor<Page>;

export default Page;

import Vue, { VueConstructor } from "vue";

/** Tree component props */
export interface TreeProps {
  data?: any[];
  selectedKeys?: any[];
  expandedKeys?: any[];
  checkedKeys?: any[];
  directory?: boolean;
  expandAll?: boolean;
  checkable?: boolean;
  draggable?: boolean;
  showLine?: boolean;
  /** default: true */
  showIcon?: boolean;
  /** default: false */
  showExtra?: boolean;
  /** default: false */
  multiple?: boolean;
  checkStrictly?: boolean;
  selectAsCheck?: boolean;
  queryKey?: string;
}

/** Tree component instance */
export interface Tree extends Vue {
  $props: TreeProps;
  $emit(event: string, ...args: any[]): this;
}

/** Tree Vue component type */
declare const Tree: VueConstructor<Tree>;

export default Tree;

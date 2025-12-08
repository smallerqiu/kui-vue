import Vue, { VueConstructor } from "vue";

/** Tree component props */
export interface TreeProps {
  data?: any[];
  selectedKeys?: any[];
  expandedKeys?: any[];
  expandedAll?: boolean;
  checkedKeys?: any[];
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
  directory?: boolean;
}

/** Tree component instance */
export interface Tree extends Vue {
  $props: TreeProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** Tree Vue component type */
declare const Tree: VueConstructor<Tree>;

export default Tree;

import Vue from "vue";

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

declare class Tree extends Vue {
  $props: TreeProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default Tree;

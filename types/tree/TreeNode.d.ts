import Vue from "vue";

/** TreeNode component props */
export interface TreeNodeProps {
  data?: Record<string, any>;
  isLeaf?: Record<string, any>;
  disabled?: boolean;
  icon?: string | any[];
  title?: string;
}

declare class TreeNode extends Vue {
  $props: TreeNodeProps;
  $emit: (event: string, ...args: any[]) => this;
}

export default TreeNode;

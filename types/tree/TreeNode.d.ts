import Vue, { VueConstructor } from "vue";

/** TreeNode component props */
export interface TreeNodeProps {
  data?: Record<string, any>;
  isLeaf?: Record<string, any>;
  disabled?: boolean;
  icon?: string | any[];
  title?: string;
}

/** TreeNode component instance */
export interface TreeNode extends Vue {
  $props: TreeNodeProps;
  $emit: (event: string, ...args: any[]) => this;
}

/** TreeNode Vue component type */
declare const TreeNode: VueConstructor<TreeNode>;

export default TreeNode;

import type { TreeNode } from "./utils";

export interface TreeFieldNames {
  key?: string;
  title?: string;
  children?: string;
  disabled?: string;
  isLeaf?: string;
}

export interface TreeExpandEvent {
  key: string;
  expanded: boolean;
  node: TreeNode;
}

export type TreeDropPosition = "before" | "inside" | "after";

export interface TreeDropEvent {
  dragNode: TreeNode;
  dropNode: TreeNode;
  dropPosition: TreeDropPosition;
}

export interface TreeExpose {
  getNode: (key: string) => TreeNode | undefined;
  getCheckedNodes: () => TreeNode[];
  getSelectedNodes: () => TreeNode[];
  scrollTo: (key: string) => void;
  expandAll: () => void;
  collapseAll: () => void;
}

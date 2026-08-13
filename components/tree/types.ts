import type { TreeNode } from "./utils";

export interface TreeExpandEvent {
  key: string;
  expanded: boolean;
  node: TreeNode;
}

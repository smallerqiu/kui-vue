import type { IconType } from "../icon";

export interface TreeNode {
  key: string;
  title?: string;
  parentKey?: string | null;
  children?: TreeNode[];
  isLeaf?: boolean;
  expanded?: boolean;
  selected?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: IconType[];
  visiblePrefixes?: boolean[];
  dropping?: boolean;
  level?: number;
  isLastChild?: boolean;
  [key: string]: any;
}

export interface BuildTreeOptions {
  data: TreeNode[];
  expandedKeys?: string[];
  selectedKeys?: string[];
  checkedKeys?: string[];
  parentKey?: string | null;
  hasLoad?: boolean;
  checkStrictly?: boolean;
  checkable?: boolean;
}

export const updateParentIndeterminate = (nodes: TreeNode[], parentKey: string) => {
  let parent: TreeNode | undefined;
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].key === parentKey) {
      parent = nodes[i];
      break;
    }
  }
  if (!parent) return;

  const siblings = nodes.filter((node: TreeNode) => node.parentKey === parentKey);
  const enabledSiblings = siblings.filter((node: TreeNode) => !node.disabled);

  if (enabledSiblings.length === 0) return;

  const checkedCount = enabledSiblings.filter((node: TreeNode) => node.checked).length;
  const indeterminateCount = enabledSiblings.filter((node: TreeNode) => node.indeterminate).length;

  if (checkedCount > 0 && checkedCount < enabledSiblings.length) {
    parent.indeterminate = true;
    parent.checked = false;
  } else if (checkedCount === enabledSiblings.length) {
    parent.checked = true;
    parent.indeterminate = false;
  } else if (checkedCount === 0 && indeterminateCount === 0) {
    parent.checked = false;
    parent.indeterminate = false;
  } else if (indeterminateCount > 0) {
    parent.indeterminate = true;
    parent.checked = false;
  }

  if (parent.parentKey) {
    updateParentIndeterminate(nodes, parent.parentKey);
  }
};

const calculateIndeterminateStates = (nodes: TreeNode[]) => {
  nodes.forEach((node: TreeNode) => {
    node.indeterminate = false;
  });

  const leafNodes = nodes.filter((node: TreeNode) => node.isLeaf);

  leafNodes.forEach((leaf: TreeNode) => {
    if (leaf.checked && leaf.parentKey) {
      updateParentIndeterminate(nodes, leaf.parentKey);
    }
  });
};

export const buildTree = ({
  data,
  expandedKeys = [],
  selectedKeys = [],
  checkedKeys = [],
  parentKey = null,
  hasLoad,
  checkStrictly,
  checkable,
}: BuildTreeOptions): TreeNode[] => {
  const result: TreeNode[] = [];
  const stack: [TreeNode, number, string | null, boolean[], boolean][] = [];

  for (let i = data.length - 1; i >= 0; i--) {
    const node = data[i];
    const isLast = i === data.length - 1;
    stack.push([node, 0, parentKey, [], isLast]);
  }

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) break;

    const [node, level, pNodeKey, visiblePrefixes, isLastChild] = current;
    const key = node.key;
    const hasChildren = !!(node.children && node.children.length > 0);
    let isLeaf = false;

    if (node.isLeaf === true) {
      isLeaf = true;
    } else if (hasChildren) {
      isLeaf = false;
    } else if (hasLoad) {
      isLeaf = false;
    } else {
      isLeaf = true;
    }

    result.push({
      ...node,
      level,
      parentKey: pNodeKey,
      loading: false,
      isLeaf,
      expanded: expandedKeys.indexOf(key) > -1,
      selected: selectedKeys.indexOf(key) > -1,
      checked: checkedKeys.indexOf(key) > -1,
      dropping: false,
      isLastChild,
      visiblePrefixes,
    });

    if (hasChildren && node.children) {
      const childPrefixes = visiblePrefixes.concat(!isLastChild);
      for (let i = node.children.length - 1; i >= 0; i--) {
        const childIsLast = i === node.children.length - 1;
        stack.push([node.children[i], level + 1, key, childPrefixes, childIsLast]);
      }
    }
  }

  if (checkable) {
    if (!checkStrictly) {
      calculateIndeterminateStates(result);
    } else {
      result.forEach((node: TreeNode) => {
        node.indeterminate = false;
      });
    }
  }

  return result;
};

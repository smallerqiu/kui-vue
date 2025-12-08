// 递归更新父节点的半选状态
const updateParentIndeterminate = (nodes, parentKey) => {
  const parent = nodes.find((node) => node.key === parentKey);
  if (!parent) return;

  const siblings = nodes.filter((node) => node.parentKey === parentKey);
  const enabledSiblings = siblings.filter((node) => !node.disabled);

  if (enabledSiblings.length === 0) return;

  const checkedCount = enabledSiblings.filter((node) => node.checked).length;
  const indeterminateCount = enabledSiblings.filter(
    (node) => node.indeterminate
  ).length;

  // 如果不是全选也不是全不选，则设置为半选
  if (checkedCount > 0 && checkedCount < enabledSiblings.length) {
    parent.indeterminate = true;
    parent.checked = false;
  } else if (checkedCount === enabledSiblings.length) {
    // 全选的情况下，父节点也应该是选中状态
    parent.checked = true;
    parent.indeterminate = false;
  } else if (checkedCount === 0 && indeterminateCount === 0) {
    // 全不选
    parent.checked = false;
    parent.indeterminate = false;
  } else if (indeterminateCount > 0) {
    // 子节点中有半选状态
    parent.indeterminate = true;
    parent.checked = false;
  }

  // 继续向祖父节点更新
  if (parent.parentKey) {
    updateParentIndeterminate(nodes, parent.parentKey);
  }
};
// 计算半选状态
const calculateIndeterminateStates = (nodes) => {
  // 先重置所有节点的 indeterminate 状态
  nodes.forEach((node) => {
    node.indeterminate = false;
  });

  // 从叶子节点开始向上计算
  const leafNodes = nodes.filter((node) => node.isLeaf);

  leafNodes.forEach((leaf) => {
    if (leaf.checked && leaf.parentKey) {
      updateParentIndeterminate(nodes, leaf.parentKey);
    }
  });
};
const buildTree = ({
  data,
  expandedKeys = [],
  selectedKeys = [],
  checkedKeys = [],
  parentKey = null,
  hasLoad,
  checkStrictly,
  checkable,
}) => {
  const result = [];
  // 栈中存储 [节点, 层级, 是否展开] 的数组
  const stack = data
    .map((node, i) => {
      const isLast = i === data.length - 1;
      return [node, 0, parentKey, [], isLast];
    })
    .reverse();

  while (stack.length > 0) {
    const [node, level, pNodeKey, visiblePrefixes, isLastChild] = stack.pop();
    const key = node.key;
    const hasChildren = node.children && node.children.length > 0;
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
    // 将当前节点和层级信息加入结果
    result.push({
      ...node,
      level: level,
      parentKey: pNodeKey,
      loading: false,
      isLeaf: isLeaf,
      expanded: expandedKeys.includes(key),
      selected: selectedKeys.includes(key),
      checked: checkedKeys.includes(key),
      dropping: false,
      isLastChild: isLastChild,
      visiblePrefixes: visiblePrefixes,
    });

    // 如果节点是展开的且有子节点，则将子节点入栈
    if (hasChildren) {
      const childPrefixes = [...visiblePrefixes, !isLastChild];
      // 注意：需要反向入栈以保持原来的遍历顺序
      for (let i = node.children.length - 1; i >= 0; i--) {
        const childIsLast = i === node.children.length - 1;
        stack.push([
          node.children[i],
          level + 1,
          key,
          childPrefixes,
          childIsLast,
        ]);
      }
    }
  }
  // 只在非严格模式下计算 indeterminate 状态
  if (checkable) {
    if (!checkStrictly) {
      calculateIndeterminateStates(result, checkedKeys);
    } else {
      // 严格模式下清除所有 indeterminate 状态
      result.forEach((node) => {
        node.indeterminate = false;
      });
    }
  }

  return result;
};

export { updateParentIndeterminate, buildTree };

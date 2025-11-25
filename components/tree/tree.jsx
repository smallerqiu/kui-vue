import { withInstall } from "../utils/vue";
import { getTransitionProp } from "../base/transition";

import { ref, reactive, watch, onMounted, onBeforeUnmount } from "vue";
import {
  Sync,
  RemoveCircleOutline,
  AddCircleOutline,
  ChevronForward,
} from "kui-icons";
const Tree = {
  name: "Tree",
  props: {
    data: Array,
    selectedKeys: Array,
    expandedKeys: Array,
    checkedKeys: Array,
    directory: Boolean,
    expandAll: Boolean,
    checkable: Boolean,
    draggable: Boolean,
    showLine: Boolean,
    showIcon: { type: Boolean, default: true },
    showExtra: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    checkStrictly: Boolean,
  },

  setup(ps, { emit, slots, listeners }) {
    const defaultData = ref();
    const defaultSelectedKeys = ref(ps.selectedKeys || []);
    const defaultExpandedKeys = ref(ps.expandedKeys || []);
    const defaultCheckedKeys = ref(ps.checkedKeys || []);
    const dragNode = reactive({});

    const hasLoad = "loadData" in listeners;

    // 计算半选状态
    const calculateIndeterminateStates = (nodes, checkedKeys) => {
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
    // 递归更新父节点的半选状态
    const updateParentIndeterminate = (nodes, parentKey) => {
      const parent = nodes.find((node) => node.key === parentKey);
      if (!parent) return;

      const siblings = nodes.filter((node) => node.parentKey === parentKey);
      const enabledSiblings = siblings.filter((node) => !node.disabled);

      if (enabledSiblings.length === 0) return;

      const checkedCount = enabledSiblings.filter(
        (node) => node.checked
      ).length;
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
    const buildTree = (
      tree,
      expandedKeys = [],
      selectedKeys = [],
      checkedKeys = [],
      parentKey = null
    ) => {
      const result = [];
      // 栈中存储 [节点, 层级, 是否展开] 的数组
      const stack = tree.map((node) => [node, 0, parentKey]).reverse();

      while (stack.length > 0) {
        const [node, level, pNodeKey] = stack.pop();
        const key = node.key;
        const hasChildren = node.children && node.children.length > 0;

        // 将当前节点和层级信息加入结果
        result.push({
          ...node,
          level: level,
          parentKey: pNodeKey,
          loading: false,
          isLeaf: !hasChildren,
          expanded: expandedKeys.includes(key), // 添加展开状态
          selected: selectedKeys.includes(key),
          checked: checkedKeys.includes(key),
          dropping: false,
        });

        // 如果节点是展开的且有子节点，则将子节点入栈
        if (hasChildren) {
          // 注意：需要反向入栈以保持原来的遍历顺序
          for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push([node.children[i], level + 1, key]);
          }
        }
      }
      // 只在非严格模式下计算 indeterminate 状态
      if (!ps.checkStrictly) {
        calculateIndeterminateStates(result, checkedKeys);
      } else {
        // 严格模式下清除所有 indeterminate 状态
        result.forEach((node) => {
          node.indeterminate = false;
        });
      }

      return result;
    };

    defaultData.value = buildTree(
      ps.data,
      defaultExpandedKeys.value,
      defaultSelectedKeys.value,
      defaultCheckedKeys.value
    );

    const handleExpand = (node) => {
      // 切换展开状态
      const { key } = node;
      node.expanded = !node.expanded;

      // 更新展开的keys数组
      const expandedKeys = defaultExpandedKeys.value;
      const index = expandedKeys.indexOf(key);

      if (node.expanded) {
        // 展开节点
        if (index === -1) {
          expandedKeys.push(key);
        }
      } else {
        // 收起节点
        if (index > -1) {
          expandedKeys.splice(index, 1);
        }
      }

      // 更新响应式数据
      defaultExpandedKeys.value = [...expandedKeys];

      // 触发事件
      emit("update:expandedKeys", defaultExpandedKeys.value);
      emit("expand", { key, expanded: node.expanded, node });
    };

    const updateCheckState = {
      // 切换单个节点的选中状态
      toggleNode: (key, checked) => {
        const node = defaultData.value.find((item) => item.key === key);
        if (!node || node.disabled) return;

        node.checked = checked;

        if (!ps.checkStrictly) {
          // 更新子节点
          updateCheckState.updateChildren(key, checked);
          // 更新父节点
          updateCheckState.updateParents(key);
        }
        // 重置并重新计算所有节点的 indeterminate 状态
        updateCheckState.recalculateIndeterminate();
      },

      // 更新子节点状态
      updateChildren: (parentKey, checked) => {
        // 在严格模式下不更新子节点
        if (ps.checkStrictly) return;
        const updateChild = (node) => {
          if (node.disabled) return;

          node.checked = checked;

          if (node.children && node.children.length > 0) {
            const childNodes = defaultData.value.filter((item) =>
              node.children.some((child) => child.key === item.key)
            );

            childNodes.forEach((childNode) => {
              if (!childNode.disabled) {
                childNode.checked = checked;
                updateChild(childNode);
              }
            });
          }
        };

        const parentNode = defaultData.value.find(
          (item) => item.key === parentKey
        );
        if (parentNode) {
          updateChild(parentNode);
        }
      },
      // 更新父节点状态
      updateParents: (childKey) => {
        // 在严格模式下不更新父节点
        if (ps.checkStrictly) return;

        const updateParent = (nodeKey) => {
          const node = defaultData.value.find((item) => item.key === nodeKey);
          if (!node || !node.parentKey) return;

          const parent = defaultData.value.find(
            (item) => item.key === node.parentKey
          );
          if (!parent) return;

          // 获取所有未禁用的子节点
          const allChildren = defaultData.value.filter(
            (item) =>
              parent.children &&
              parent.children.some((child) => child.key === item.key)
          );

          const enabledChildren = allChildren.filter((item) => !item.disabled);

          if (enabledChildren.length === 0) {
            parent.indeterminate = false;
            parent.checked = false;
            return;
          }

          // 计算各种状态的子节点数量
          const checkedCount = enabledChildren.filter(
            (item) => item.checked
          ).length;
          const indeterminateCount = enabledChildren.filter(
            (item) => item.indeterminate
          ).length;

          // 全选状态
          if (checkedCount === enabledChildren.length) {
            parent.checked = true;
            parent.indeterminate = false;
          }
          // 部分选中状态
          else if (checkedCount > 0 || indeterminateCount > 0) {
            parent.checked = false;
            parent.indeterminate = true;
          }
          // 未选中状态
          else {
            parent.checked = false;
            parent.indeterminate = false;
          }

          // 递归更新祖父节点
          updateParent(parent.key);
        };

        updateParent(childKey);
      },
      // 重新计算所有节点的 indeterminate 状态
      recalculateIndeterminate: () => {
        // 重置所有 indeterminate 状态
        // 在严格模式下不计算 indeterminate 状态
        if (ps.checkStrictly) {
          defaultData.value.forEach((node) => {
            node.indeterminate = false;
          });
          return;
        }
        // 重置所有 indeterminate 状态
        defaultData.value.forEach((node) => {
          node.indeterminate = false;
        });

        // 从叶子节点向上计算
        const nodes = [...defaultData.value]; // 创建副本

        // 先处理被选中的叶子节点
        const checkedLeafNodes = nodes.filter(
          (node) => node.isLeaf && node.checked
        );
        checkedLeafNodes.forEach((leaf) => {
          if (leaf.parentKey) {
            updateParentIndeterminate(nodes, leaf.parentKey);
          }
        });

        // 再同步回原数据
        nodes.forEach((node) => {
          const originalNode = defaultData.value.find(
            (n) => n.key === node.key
          );
          if (originalNode) {
            originalNode.indeterminate = node.indeterminate;
          }
        });
      },
      // 移动节点的核心逻辑
      moveNode: (dragKey, dropKey) => {
        if (dragKey === dropKey) return;

        // 1. 找到被拖拽节点和目标放置节点 (在扁平化列表中)
        const dragNodeIndex = defaultData.value.findIndex(
          (item) => item.key === dragKey
        );
        const dropNodeIndex = defaultData.value.findIndex(
          (item) => item.key === dropKey
        );

        if (dragNodeIndex === -1 || dropNodeIndex === -1) return;

        const dragNode = defaultData.value[dragNodeIndex];
        const dropNode = defaultData.value[dropNodeIndex];

        // 我们需要找到 dragNode 在原始树结构 (ps.data) 中的引用，以便操作它的 children 列表。
        // 由于 dragNode 是 buildTree 结果的一部分，这里直接操作它的 children 数组。

        // 2. 从原父节点的 children 列表中移除 dragNode 的原始数据
        // **关键：我们操作的是原始数据（ps.data 的引用）**
        let nodeToMove = null; // 存储将被移动的原始节点对象

        // 2.1 处理旧父节点
        if (dragNode.parentKey) {
          const oldParent = defaultData.value.find(
            (item) => item.key === dragNode.parentKey
          );
          if (oldParent && oldParent.children) {
            // 找到要移动的节点，并从旧父节点的 children 数组中移除
            const dragIndex = oldParent.children.findIndex(
              (child) => child.key === dragKey
            );

            if (dragIndex > -1) {
              // 移除并获取被移除的原始节点对象
              nodeToMove = oldParent.children.splice(dragIndex, 1)[0];

              // 如果旧父节点 children 列表为空，将其标记为叶子节点
              if (oldParent.children.length === 0) {
                oldParent.isLeaf = true;
              }
            } else {
              // 异常情况，理论上不应该发生
              console.warn("Drag node not found in old parent's children.");
              return;
            }
          }
        } else {
          // 2.2 处理拖拽根节点的情况（从根列表移除）
          const dragIndex = ps.data.findIndex((item) => item.key === dragKey);
          if (dragIndex > -1) {
            nodeToMove = ps.data.splice(dragIndex, 1)[0];
          } else {
            return;
          }
        }

        // 3. 将节点添加到新父节点的 children 列表中
        if (!nodeToMove) return;

        // 确保新父节点不是叶子节点
        dropNode.isLeaf = false;

        if (!dropNode.children) {
          dropNode.children = [];
        }

        // 将获取到的原始节点对象加入新父节点
        dropNode.children.push(nodeToMove);

        // 4. 重新构建整个树以更新扁平化数据和所有状态
        // 这一步会根据更新后的 ps.data 重新计算所有节点的 level, parentKey, checked/indeterminate 状态。
        defaultData.value = buildTree(
          ps.data,
          defaultExpandedKeys.value,
          defaultSelectedKeys.value,
          defaultCheckedKeys.value
        );

        // 5. （可选）如果需要，在新的 defaultData 中找到移动后的节点并确保它的 expanded 状态与 dropNode 一致
        const newDragNode = defaultData.value.find(
          (item) => item.key === dragKey
        );
        if (newDragNode) {
          // 通常会希望新父节点自动展开
          dropNode.expanded = true;
          defaultExpandedKeys.value = [
            ...new Set([...defaultExpandedKeys.value, dropNode.key]),
          ];
        }
      },
    };
    const toggleCheck = (e, item) => {
      // console.log(e.target.checked, item.key);
      const checked = e.target.checked;
      const { key } = item;
      // 更新节点状态
      updateCheckState.toggleNode(key, checked);

      // 同步到响应式数据
      const checkedNodes = defaultData.value
        .filter((item) => item.checked)
        .map((item) => item.key);

      defaultCheckedKeys.value = checkedNodes;
    };
    const updateNodeStatus = (key, property, value) => {
      const nodeIndex = defaultData.value.findIndex((item) => item.key === key);
      if (nodeIndex > -1) {
        defaultData.value[nodeIndex][property] = value;
      }
    };
    const onSelect = (item) => {
      if (item.disabled) return;
      let selectedKeys = defaultSelectedKeys.value;
      const { key, selected } = item;
      if (!ps.multiple) {
        // 单选支持取消
        defaultData.value.forEach((item) => {
          if (item.selected) {
            item.selected = false;
          }
        });

        selectedKeys = !selected ? [key] : [];
      } else {
        selected
          ? selectedKeys.splice(selectedKeys.indexOf(key), 1)
          : selectedKeys.push(key);
      }
      updateNodeStatus(key, "selected", !selected);

      // console.log(selectedKeys);
      defaultSelectedKeys.value = selectedKeys;
      emit("update:selectedKeys", selectedKeys);

      emit("select", item);
    };
    // 拖拽相关处理函数
    const handleDragStart = (e, node) => {
      if (!ps.draggable || node.disabled) return;
      if (!node.isLeaf && node.expanded) {
        handleExpand(node);
      }
      // 设置拖拽数据
      dragNode.key = node.key;
      dragNode.data = node;

      e.dataTransfer.effectAllowed = "move";
    };

    const handleDragOver = (e) => {
      if (!ps.draggable) return;

      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    };

    const handleDragEnter = (e, node) => {
      if (!ps.draggable || node.disabled || node.key === dragNode.key) return;

      // 可以在这里添加视觉反馈，表示可以放置
      e.preventDefault();
      node.dropping = true;
    };

    const handleDragLeave = (e, node) => {
      if (!ps.draggable) return;
      // 清除视觉反馈
      node.dropping = false;
    };

    const handleDrop = (e, dropNode) => {
      if (
        !ps.draggable ||
        !dragNode.key ||
        dropNode.disabled ||
        dropNode.key === dragNode.key
      )
        return;

      e.preventDefault();
      dropNode.dropping = false;

      // 检查是否试图将父节点拖到自己的子节点中（防止循环）
      const isDescendant = (parentKey, childKey) => {
        if (parentKey === childKey) return true;

        const childNode = defaultData.value.find(
          (item) => item.key === childKey
        );
        if (!childNode || !childNode.parentKey) return false;

        if (childNode.parentKey === parentKey) return true;

        return isDescendant(parentKey, childNode.parentKey);
      };

      if (isDescendant(dragNode.key, dropNode.key)) {
        console.warn("Cannot move a parent node into its own child");
        return;
      }

      // 执行节点移动
      updateCheckState.moveNode(dragNode.key, dropNode.key);

      // 清空拖拽状态
      dragNode.key = null;
      dragNode.data = null;

      // 触发拖拽完成事件
      emit("drop", {
        dragNode: dragNode.data,
        dropNode: dropNode,
      });
      console.log("drop");
    };

    const handleDragEnd = (e) => {
      if (!ps.draggable) return;

      // 清空拖拽状态
      dragNode.key = null;
      dragNode.data = null;
    };
    const renderTreeNode = (item, i) => {
      let key = item.key;
      if (key == null || key === "") {
        key = `n_${i}`;
        item.key = key;
      }
      let arrowCommentNode = [];
      for (let i = 0; i < item.level; i++) {
        arrowCommentNode.push(<span class="k-tree-comment-line"></span>);
      }
      if (!item.isLeaf) {
        let arrowCls = ["k-tree-arrow", { "k-tree-arrow-open": item.expanded }];
        let arrowNode = (
          <span
            class={arrowCls}
            onClick={() => !ps.directory && handleExpand(item)}
          >
            <Button
              size="small"
              type="text"
              loading={item.loading}
              icon={
                item.loading
                  ? Sync
                  : ps.showLine
                    ? item.expanded
                      ? RemoveCircleOutline
                      : AddCircleOutline
                    : ChevronForward
              }
              spin={item.loading}
            />
          </span>
        );
        arrowCommentNode.push(arrowNode);
      } else {
        arrowCommentNode.push(<span class="k-tree-comment"></span>);
      }
      // check
      const checkNode = ps.checkable ? (
        <Checkbox
          onChange={(e) => toggleCheck(e, item)}
          checked={item.checked}
          disabled={item.disabled}
          indeterminate={item.indeterminate}
        />
      ) : null;
      //icon
      const iconNode = <Icon type={item.icon} class="k-tree-icon" />;
      //title
      let titleProps = {
        class: ["k-tree-title", { "k-tree-title-selected": item.selected }],
        on: {
          // click: () => onSelect(item),
        },
        attrs: {
          draggable: ps.draggable && !item.disabled,
        },
      };
      // 添加拖拽事件
      if (ps.draggable) {
        titleProps.on.dragstart = (e) => handleDragStart(e, item);
        titleProps.on.dragover = handleDragOver;
        titleProps.on.dragenter = (e) => handleDragEnter(e, item);
        titleProps.on.dragleave = (e) => handleDragLeave(e, item);
        titleProps.on.drop = (e) => handleDrop(e, item);
        titleProps.on.dragend = handleDragEnd;
      }
      if (!ps.directory) {
        titleProps.on.click = () => onSelect(item);
      }

      const titleNode = (
        <span {...titleProps}>
          {item.icon && ps.showIcon && iconNode}
          {item.title}
        </span>
      );
      const itemProps = {
        key: item.key,
        class: [
          "k-tree-item",
          {
            "k-tree-item-disabled": item.disabled,
            "k-tree-item-drop": item.dropping && !item.disabled,
            // "k-tree-item-extra-hidden": !ps.showExtra,
            "k-tree-item-selected": ps.directory && item.selected,
          },
        ],
        on: {},
      };
      if (ps.directory) {
        itemProps.on.click = () => {
          onSelect(item);
          handleExpand(item);
        };
      }
      return (
        <div {...itemProps}>
          {arrowCommentNode}
          {checkNode}
          {titleNode}
        </div>
      );
    };
    const renderChild = () => {
      // return defaultData.value.map((item, i) => {});

      // 过滤出应该显示的节点
      const visibleNodes = defaultData.value.filter((node) => {
        // 根节点总是显示
        if (node.level === 0) return true;

        // 检查所有祖先节点是否都展开
        let current = node;
        while (current.parentKey) {
          const parent = defaultData.value.find(
            (item) => item.key === current.parentKey
          );
          if (!parent || !parent.expanded) {
            return false;
          }
          current = parent;
        }
        return true;
      });
    };
    const setCheckHalf = () => {};
    onMounted(() => {
      setCheckHalf();
    });
    onBeforeUnmount(() => {});

    watch(
      () => ps.data,
      (nv, ov) => {
        defaultData.value = nv || [];
      }
    );
    watch(
      () => ps.checkedKeys,
      (nv, ov) => {
        defaultCheckedKeys.value = nv || [];
      }
    );
    watch(
      () => ps.selectedKeys,
      (nv, ov) => {
        defaultSelectedKeys.value = nv || [];
      }
    );
    watch(
      () => ps.expandedKeys,
      (nv, ov) => {
        defaultExpandedKeys.value = nv || [];
      }
    );

    return () => {
      let { showLine, directory } = ps;
      // 过滤出应该显示的节点
      const visibleNodes = defaultData.value.filter((node) => {
        // 根节点总是显示
        if (node.level === 0) return true;

        // 检查所有祖先节点是否都展开
        let current = node;
        while (current.parentKey) {
          const parent = defaultData.value.find(
            (item) => item.key === current.parentKey
          );
          if (!parent || !parent.expanded) {
            return false;
          }
          current = parent;
        }
        return true;
      });
      let onProps = getTransitionProp("k-tree-slide");

      return (
        <div
          class={[
            "k-tree",
            {
              "k-tree-show-line": showLine,
              "k-tree-directory": directory,
            },
          ]}
        >
          <transition-group {...onProps} tag="div" class="k-tree-node-list">
            {visibleNodes.map((item, index) => {
              // 为每个节点添加唯一的 key 用于动画
              return renderTreeNode(item, index);
            })}
          </transition-group>
        </div>
      );
    };
  },
};

export default withInstall(Tree);

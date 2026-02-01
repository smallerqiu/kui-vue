import { withInstall } from "../utils/vue";
import { getTransitionProp } from "../base/transition";

import { ref, reactive, watch, defineComponent, nextTick } from "vue";
import { Sync, RemoveCircleOutline, AddCircleOutline, ChevronForward } from "kui-icons/dist/icons";
import { buildTree, updateParentIndeterminate } from "./utils";
const Tree = defineComponent({
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
    selectAsCheck: Boolean,
    queryKey: String,
  },

  setup(ps, { emit, slots, listeners }) {
    const defaultData = ref([]);
    const defaultSelectedKeys = ref(ps.selectedKeys || []);
    const defaultExpandedKeys = ref(ps.expandedKeys || []);
    const defaultCheckedKeys = ref(ps.checkedKeys || []);
    const dragNode = reactive({});
    const hasLoad = "loadData" in listeners;

    const handleExpand = (node) => {
      if (node.isLeaf || node.loading) return;
      // 切换展开状态
      const { key } = node;

      const isAsyncNode = hasLoad && (!node.children || node.children.length === 0) && !node.isLeaf;

      if (isAsyncNode && !node.expanded) {
        node.loading = true;
        const promise = listeners.loadData(node);
        if (promise && promise.then) {
          promise
            .then(() => {
              // 加载成功
              nextTick(() => {
                const newNode = defaultData.value.find((n) => n.key === key);
                const targetNode = newNode || node;
                targetNode.loading = false;
                targetNode.expanded = true;

                // 注意：这里通常不需要手动把数据 push 进 children。
                // 因为外部数据变更会触发 watch(() => ps.data)，
                // 从而触发 buildTree 重新渲染整个树。
                // 只需要确保 expandedKeys 里有这个 key 即可。

                const expandedKeys = defaultExpandedKeys.value;
                if (!expandedKeys.includes(key)) {
                  expandedKeys.push(key);
                  defaultExpandedKeys.value = [...expandedKeys];
                  emit("update:expandedKeys", defaultExpandedKeys.value);
                }

                // 触发展开事件
                emit("expand", { key, expanded: true, targetNode });
              });
            })
            .catch((e) => {
              // 加载失败，取消 loading
              node.loading = false;
            });
        }
        return;
      }

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

        const parentNode = defaultData.value.find((item) => item.key === parentKey);
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

          const parent = defaultData.value.find((item) => item.key === node.parentKey);
          if (!parent) return;

          // 获取所有未禁用的子节点
          const allChildren = defaultData.value.filter(
            (item) => parent.children && parent.children.some((child) => child.key === item.key)
          );

          const enabledChildren = allChildren.filter((item) => !item.disabled);

          if (enabledChildren.length === 0) {
            parent.indeterminate = false;
            parent.checked = false;
            return;
          }

          // 计算各种状态的子节点数量
          const checkedCount = enabledChildren.filter((item) => item.checked).length;
          const indeterminateCount = enabledChildren.filter((item) => item.indeterminate).length;

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
        const checkedLeafNodes = nodes.filter((node) => node.isLeaf && node.checked);
        checkedLeafNodes.forEach((leaf) => {
          if (leaf.parentKey) {
            updateParentIndeterminate(nodes, leaf.parentKey);
          }
        });

        // 再同步回原数据
        nodes.forEach((node) => {
          const originalNode = defaultData.value.find((n) => n.key === node.key);
          if (originalNode) {
            originalNode.indeterminate = node.indeterminate;
          }
        });
      },
      // 移动节点的核心逻辑
      moveNode: (dragKey, dropKey) => {
        if (dragKey === dropKey) return;

        // 辅助函数：递归查找原始数据中的节点
        const findRawNode = (nodes, key) => {
          for (let node of nodes) {
            if (node.key === key) return node;
            if (node.children && node.children.length > 0) {
              const found = findRawNode(node.children, key);
              if (found) return found;
            }
          }
          return null;
        };

        const rawDragNode = findRawNode(ps.data, dragKey);
        const rawDropNode = findRawNode(ps.data, dropKey);

        if (!rawDragNode || !rawDropNode) return;

        const flatDragNode = defaultData.value.find((item) => item.key === dragKey);
        let nodeToMove = null;

        if (flatDragNode && flatDragNode.parentKey) {
          // 找到原始父节点
          const rawOldParent = findRawNode(ps.data, flatDragNode.parentKey);
          if (rawOldParent && rawOldParent.children) {
            const index = rawOldParent.children.findIndex((c) => c.key === dragKey);
            if (index > -1) {
              nodeToMove = rawOldParent.children.splice(index, 1)[0];
              // 如果移空了，清理一下，防止某些逻辑误判
              if (rawOldParent.children.length === 0) {
                // 可选：delete rawOldParent.children;
              }
            }
          }
        } else {
          // 根节点移除
          const index = ps.data.findIndex((c) => c.key === dragKey);
          if (index > -1) {
            nodeToMove = ps.data.splice(index, 1)[0];
          }
        }

        if (!nodeToMove) return;

        [
          "level",
          "parentKey",
          "loading",
          "isLeaf",
          "expanded",
          "selected",
          "checked",
          "dropping",
          "indeterminate",
        ].forEach((prop) => delete nodeToMove[prop]);

        if (!rawDropNode.children) {
          // Vue 3 的 reactive 对象会自动响应这个添加操作
          rawDropNode.children = [];
        }
        rawDropNode.children.push(nodeToMove);

        if (!defaultExpandedKeys.value.includes(dropKey)) {
          defaultExpandedKeys.value.push(dropKey);
        }

        defaultData.value = buildTree({
          data: ps.data,
          expandedKeys: defaultExpandedKeys.value,
          selectedKeys: defaultSelectedKeys.value,
          checkedKeys: defaultCheckedKeys.value,
          hasLoad,
          checkable: ps.checkable,
          checkStrictly: ps.checkStrictly,
        });

        const newDropNode = defaultData.value.find((n) => n.key === dropKey);
        if (newDropNode) {
          newDropNode.expanded = true;
          emit("update:expandedKeys", defaultExpandedKeys.value);
        }
      },
    };
    const toggleCheck = ({ checked }, item) => {
      const { key } = item;
      // 更新节点状态
      updateCheckState.toggleNode(key, checked);

      // 同步到响应式数据
      const checkedNodes = defaultData.value.filter((item) => item.checked).map((item) => item.key);

      defaultCheckedKeys.value = checkedNodes;
      emit("check", item, checked, checkedNodes);
    };
    const updateNodeStatus = (key, property, value) => {
      const nodeIndex = defaultData.value.findIndex((item) => item.key === key);
      if (nodeIndex > -1) {
        defaultData.value[nodeIndex][property] = value;
      }
    };
    const onSelect = (item) => {
      if (item.disabled) return;
      if (ps.selectAsCheck) {
        toggleCheck({ checked: !item.selected }, item);
        return;
      }
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
        selected ? selectedKeys.splice(selectedKeys.indexOf(key), 1) : selectedKeys.push(key);
      }
      updateNodeStatus(key, "selected", !selected);

      // console.log(selectedKeys);
      defaultSelectedKeys.value = selectedKeys;
      emit("update:selectedKeys", selectedKeys);

      emit("select", item);
    };
    const handleDragStart = (e, node) => {
      if (!ps.draggable || node.disabled) return;
      if (!node.isLeaf && node.expanded) {
        handleExpand(node);
      }
      dragNode.key = node.key;
      dragNode.data = node;

      e.dataTransfer.effectAllowed = "move";
      emit("dragstart", node);
    };

    const handleDragOver = (e) => {
      if (!ps.draggable) return;

      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    };

    const handleDragEnter = (e, node) => {
      if (!ps.draggable || node.disabled || node.key === dragNode.key) return;

      e.preventDefault();
      node.dropping = true;
      emit("dragenter", node);
    };

    const handleDragLeave = (e, node) => {
      if (!ps.draggable) return;
      // 清除视觉反馈
      node.dropping = false;
      emit("dragleave", node);
    };

    const handleDrop = (e, dropNode) => {
      if (!ps.draggable || !dragNode.key || dropNode.disabled || dropNode.key === dragNode.key)
        return;

      e.preventDefault();
      dropNode.dropping = false;

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
    };

    const handleDragEnd = (node) => {
      if (!ps.draggable) return;

      // 清空拖拽状态
      dragNode.key = null;
      dragNode.data = null;
      emit("dragend", node);
    };
    const renderTreeNode = (item, i) => {
      let key = item.key;
      if (key == null || key === "") {
        key = `n_${i}`;
        item.key = key;
      }
      let arrowCommentNode = [];
      // 渲染前面的缩进线 (Indentation lines)
      if (item.visiblePrefixes && item.visiblePrefixes.length > 0) {
        item.visiblePrefixes.forEach((showLine) => {
          arrowCommentNode.push(
            <span class={showLine ? "k-tree-indent-line" : "k-tree-indent-empty"}></span>
          );
        });
      }

      if (!item.isLeaf) {
        let arrowCls = ["k-tree-arrow", { "k-tree-arrow-open": item.expanded }];
        let arrowNode = (
          <span
            class={arrowCls}
            onClick={(e) => {
              e.stopPropagation();
              handleExpand(item);
            }}
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
        arrowCommentNode.push(<span class="k-tree-arrow-placeholder"></span>);
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
          disabled: item.disabled,
        },
      };
      // 添加拖拽事件
      if (ps.draggable) {
        titleProps.on.dragstart = (e) => handleDragStart(e, item);
        titleProps.on.dragover = (e) => handleDragOver(e, item);
        titleProps.on.dragenter = (e) => handleDragEnter(e, item);
        titleProps.on.dragleave = (e) => handleDragLeave(e, item);
        titleProps.on.drop = (e) => handleDrop(e, item);
        titleProps.on.dragend = (e) => handleDragEnd(e, item);
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
            "k-tree-item-extra-hidden": !ps.showExtra,
            "k-tree-item-selected": ps.directory && item.selected,
          },
        ],
        on: {},
      };
      if (ps.directory) {
        itemProps.on.click = (e) => {
          e.stopPropagation();
          onSelect(item);
          handleExpand(item);
        };
      }
      const extraNode = slots.extra && <span class="k-tree-item-extra">{slots.extra(item)}</span>;
      return (
        <div {...itemProps}>
          {arrowCommentNode}
          {checkNode}
          {titleNode}
          {extraNode}
        </div>
      );
    };

    const updateDefaultData = () => {
      if (ps.data) {
        defaultData.value = buildTree({
          data: ps.data,
          expandedKeys: defaultExpandedKeys.value,
          selectedKeys: defaultSelectedKeys.value,
          checkedKeys: defaultCheckedKeys.value,
          hasLoad,
          checkable: ps.checkable,
          checkStrictly: ps.checkStrictly,
        });
      }
    };
    updateDefaultData();

    watch(
      () => ps.data,
      () => {
        updateDefaultData();
      },
      {
        deep: true,
      }
    );
    watch(
      () => ps.checkedKeys,
      (nv) => {
        defaultCheckedKeys.value = nv || [];
        updateDefaultData();
      }
    );
    watch(
      () => ps.selectedKeys,
      (nv) => {
        defaultSelectedKeys.value = nv || [];
        updateDefaultData();
      }
    );
    watch(
      () => ps.expandedKeys,
      (nv) => {
        defaultExpandedKeys.value = nv || [];
        updateDefaultData();
      }
    );

    return () => {
      let { showLine, directory, queryKey } = ps;
      // 过滤出应该显示的节点
      const visibleNodes = defaultData.value.filter((node) => {
        // 根节点总是显示
        if (node.level === 0) return true;
        if (queryKey && queryKey.trim().length && !node.title.includes(queryKey)) {
          return false;
        }

        // 检查所有祖先节点是否都展开
        let current = node;
        while (current.parentKey) {
          const parent = defaultData.value.find((item) => item.key === current.parentKey);
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
});

export default withInstall(Tree);

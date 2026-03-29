import { getTransitionProp } from "../base/transition";

import { AddCircleOutline, ChevronForward, RemoveCircleOutline, Sync } from "kui-icons";
import {
  defineComponent,
  nextTick,
  reactive,
  ref,
  TransitionGroup,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { Button } from "../button";
import Checkbox from "../checkbox"; // Assuming Checkbox is available
import Icon from "../icon";
import { buildTree, updateParentIndeterminate } from "./utils";
export interface TreeNode {
  key: string;
  title: string;
  parentKey?: string;
  children?: TreeNode[];
  isLeaf?: boolean;
  expanded?: boolean;
  selected?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: any;
  visiblePrefixes?: boolean[];
  dropping?: boolean;
}

export const treeProps = {
  data: Array as PropType<TreeNode[]>,
  selectedKeys: Array as PropType<string[]>,
  expandedKeys: Array as PropType<string[]>,
  checkedKeys: Array as PropType<string[]>,
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
};

export type TreeProps = ExtractPropTypes<typeof treeProps>;

export default defineComponent({
  name: "Tree",
  props: treeProps,
  emits: [
    "update:expandedKeys",
    "expand",
    "check",
    "update:selectedKeys",
    "select",
    "dragstart",
    "dragenter",
    "dragleave",
    "drop",
    "dragend",
  ],
  setup(props, { emit, slots, attrs }) {
    const defaultData = ref<TreeNode[]>([]);
    const defaultSelectedKeys = ref<string[]>(props.selectedKeys || []);
    const defaultExpandedKeys = ref<string[]>(props.expandedKeys || []);
    const defaultCheckedKeys = ref<string[]>(props.checkedKeys || []);
    const dragNode = reactive<{ key: string | null; data: TreeNode | null }>({
      key: null,
      data: null,
    });
    const hasLoad = attrs.onLoadData;

    const handleExpand = (node: TreeNode) => {
      if (node.isLeaf || node.loading) return;
      // 切换展开状态
      const { key } = node;

      const isAsyncNode = hasLoad && (!node.children || node.children.length === 0) && !node.isLeaf;

      if (isAsyncNode && !node.expanded) {
        node.loading = true;
        const promise: Promise<void> | undefined = attrs?.onLoadData?.(node);
        if (promise && promise.then) {
          promise
            .then(() => {
              // 加载成功
              nextTick(() => {
                // Find the actual reactive node in defaultData to update its properties
                const reactiveNode = defaultData.value.find((n) => n.key === key);
                if (reactiveNode) {
                  reactiveNode.loading = false;
                  reactiveNode.expanded = true;
                }

                // 这里通常不需要手动把数据 push 进 children。
                // 因为外部数据变更会触发 watch(() => ps.data)，
                // 从而触发 buildTree 重新渲染整个树。
                // 只需要确保 expandedKeys 里有这个 key 即可。

                const expandedKeys = [...defaultExpandedKeys.value]; // Create a new array for reactivity
                if (!expandedKeys.includes(key)) {
                  expandedKeys.push(key);
                  defaultExpandedKeys.value = expandedKeys;
                  emit("update:expandedKeys", expandedKeys);
                }

                // 触发展开事件
                emit("expand", { key, expanded: true, node: reactiveNode || node });
              });
            })
            .catch((e) => {
              // 加载失败，取消 loading
              node.loading = false;
              console.error("Failed to load tree node data:", e);
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
      toggleNode: (key: string, checked: boolean) => {
        const node = defaultData.value.find((item) => item.key === key);
        if (!node || node.disabled) return;

        node.checked = checked;

        if (!props.checkStrictly) {
          // 更新子节点
          updateCheckState.updateChildren(key, checked);
          // 更新父节点
          updateCheckState.updateParents(key);
        }
        // 重置并重新计算所有节点的 indeterminate 状态
        updateCheckState.recalculateIndeterminate();
      },

      // 更新子节点状态
      updateChildren: (parentKey: string, checked: boolean) => {
        if (props.checkStrictly) return;
        const updateChild = (node: TreeNode) => {
          if (node.disabled) return;

          node.checked = checked;

          if (node.children && node.children.length > 0) {
            const childNodes = defaultData.value.filter((item) =>
              node.children?.some((child) => child.key === item.key)
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
      updateParents: (childKey: string) => {
        if (props.checkStrictly) return;

        const updateParent = (nodeKey: string) => {
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
        if (props.checkStrictly) {
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
      moveNode: (dragKey: string, dropKey: string) => {
        if (dragKey === dropKey) return;

        // 辅助函数：递归查找原始数据中的节点
        const findRawNode = (nodes?: TreeNode[], key?: string): TreeNode | null => {
          if (!nodes) return null;
          for (let node of nodes) {
            if (node.key === key) return node;
            if (node.children && node.children.length > 0) {
              const found = findRawNode(node.children, key);
              if (found) return found;
            }
          }
          return null;
        };

        const rawDragNode = findRawNode(props.data, dragKey);
        const rawDropNode = findRawNode(props.data, dropKey);

        if (!rawDragNode || !rawDropNode) return;

        const flatDragNode = defaultData.value.find((item) => item.key === dragKey);
        let nodeToMove: TreeNode | null | undefined = null;

        if (flatDragNode && flatDragNode.parentKey) {
          // 找到原始父节点
          const rawOldParent = findRawNode(props.data, flatDragNode.parentKey);
          if (rawOldParent && rawOldParent.children) {
            const index = rawOldParent.children.findIndex((c: TreeNode) => c.key === dragKey);
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
          const index = props.data?.findIndex((c) => c.key === dragKey);
          if (index && index > -1) {
            nodeToMove = props.data?.splice(index, 1)[0];
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
        ].forEach((prop: string) => delete nodeToMove[prop]);

        if (!rawDropNode.children) {
          // Vue 3 的 reactive 对象会自动响应这个添加操作
          rawDropNode.children = [];
        }
        rawDropNode.children.push(nodeToMove);

        if (!defaultExpandedKeys.value.includes(dropKey)) {
          defaultExpandedKeys.value.push(dropKey);
        }

        defaultData.value = buildTree({
          data: props.data,
          expandedKeys: defaultExpandedKeys.value,
          selectedKeys: defaultSelectedKeys.value,
          checkedKeys: defaultCheckedKeys.value,
          hasLoad: !!hasLoad,
          checkable: props.checkable,
          checkStrictly: props.checkStrictly,
        });

        const newDropNode = defaultData.value.find((n) => n.key === dropKey);
        if (newDropNode) {
          newDropNode.expanded = true;
          emit("update:expandedKeys", defaultExpandedKeys.value);
        }
      },
    };
    const toggleCheck = ({ checked }: { checked: boolean }, item: TreeNode) => {
      const { key } = item;
      // 更新节点状态
      updateCheckState.toggleNode(key, checked);

      // 同步到响应式数据
      const newCheckedKeys = defaultData.value
        .filter((node) => node.checked)
        .map((node) => node.key);

      defaultCheckedKeys.value = newCheckedKeys;
      emit("check", item, checked, newCheckedKeys);
    };
    const updateNodeStatus = (key: string, property: keyof TreeNode, value: any) => {
      const nodeIndex = defaultData.value.findIndex((item) => item.key === key);
      if (nodeIndex > -1 && defaultData.value[nodeIndex]) {
        defaultData.value[nodeIndex][property] = value;
      }
    };
    const onSelect = (item: TreeNode) => {
      if (item.disabled) return;
      if (props.selectAsCheck) {
        toggleCheck({ checked: !item.selected }, item);
        return;
      }
      let selectedKeys = defaultSelectedKeys.value;
      const { key, selected } = item;
      if (!props.multiple) {
        // 单选支持取消
        defaultData.value.forEach((item) => {
          if (item.selected) {
            item.selected = false;
          }
        });

        selectedKeys = !selected ? [key] : [];
      } else {
        // Multiple selection
        const index = selectedKeys.indexOf(key);
        index > -1 ? selectedKeys.splice(index, 1) : selectedKeys.push(key);
      }

      updateNodeStatus(key, "selected", !selected);
      // console.log(selectedKeys);
      defaultSelectedKeys.value = selectedKeys;
      emit("update:selectedKeys", selectedKeys);

      emit("select", item);
    };
    const handleDragStart = (e: DragEvent, node: TreeNode) => {
      if (!props.draggable || node.disabled) return;
      if (!node.isLeaf && node.expanded) {
        // If dragging an expanded non-leaf node, collapse it
        handleExpand(node);
      }
      dragNode.key = node.key;
      dragNode.data = node;

      e.dataTransfer.effectAllowed = "move";
      emit("dragstart", node);
    };

    const handleDragOver = (e: DragEvent) => {
      if (!props.draggable) return;

      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    };

    const handleDragEnter = (e: DragEvent, node: TreeNode) => {
      if (!props.draggable || node.disabled || node.key === dragNode.key) return;
      e.preventDefault(); // Allow drop
      e.preventDefault();
      node.dropping = true;
      emit("dragenter", node);
    };

    const handleDragLeave = (_: DragEvent, node: TreeNode) => {
      if (!props.draggable) return;
      node.dropping = false;
      emit("dragleave", node);
    };

    const handleDrop = (e: DragEvent, dropNode: TreeNode) => {
      if (!props.draggable || !dragNode.key || dropNode.disabled || dropNode.key === dragNode.key)
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

    const handleDragEnd = (node: TreeNode) => {
      if (!props.draggable) return;

      // 清空拖拽状态
      dragNode.key = null;
      dragNode.data = null;
      emit("dragend", node);
    };
    const renderTreeNode = (item: TreeNode, i: number) => {
      // Ensure item.key is a string for Vue's key prop
      const nodeKey = item.key || `node-${i}`;
      if (!item.key) item.key = nodeKey; // Assign a key if missing

      // Render indentation lines
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
        // Render expand/collapse arrow
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
                item.loading // Use Sync icon for loading state
                  ? Sync
                  : props.showLine // Use different icons based on showLine prop
                    ? item.expanded
                      ? RemoveCircleOutline
                      : AddCircleOutline
                    : ChevronForward
              }
            />
          </span>
        );
        arrowCommentNode.push(arrowNode);
      } else {
        arrowCommentNode.push(<span class="k-tree-arrow-placeholder"></span>);
      } // Placeholder for leaf nodes

      // Render checkbox
      const checkNode = props.checkable ? (
        <Checkbox
          key={`checkbox-${nodeKey}`}
          onChange={(e: { checked: boolean }) => toggleCheck(e, item)}
          checked={item.checked}
          disabled={item.disabled}
          indeterminate={item.indeterminate}
        />
      ) : null;

      // Render icon
      const iconNode =
        item.icon && props.showIcon ? <Icon type={item.icon} class="k-tree-icon" /> : null;

      // Render title
      const titleProps: Record<string, any> = {
        class: ["k-tree-title", { "k-tree-title-selected": item.selected }],
        draggable: props.draggable && !item.disabled,
        disabled: item.disabled,
      };
      if (props.draggable) {
        titleProps.onDragstart = (e: DragEvent) => handleDragStart(e, item);
        titleProps.onDragover = (e: DragEvent) => handleDragOver(e);
        titleProps.onDragenter = (e: DragEvent) => handleDragEnter(e, item);
        titleProps.onDragleave = (e: DragEvent) => handleDragLeave(e, item);
        titleProps.onDrop = (e: DragEvent) => handleDrop(e, item);
        titleProps.onDragend = () => handleDragEnd(item);
      } // Add drag events

      if (!props.directory) {
        titleProps.onClick = () => onSelect(item);
      }

      const titleNode = // Combine icon and title
        (
          <span {...titleProps}>
            {iconNode}
            {item.title}
          </span>
        );
      const itemProps: Record<string, any> = {
        key: nodeKey,
        class: [
          "k-tree-item",
          {
            "k-tree-item-disabled": item.disabled,
            "k-tree-item-drop": item.dropping && !item.disabled,
            "k-tree-item-extra-hidden": !props.showExtra,
            "k-tree-item-selected": props.directory && item.selected,
          },
        ],
      };
      if (props.directory) {
        itemProps.onClick = (e: MouseEvent) => {
          e.stopPropagation();
          onSelect(item);
          handleExpand(item);
        };
      }
      const extraNode = slots.extra && <span class="k-tree-item-extra">{slots.extra(item)}</span>; // Render extra slot

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
      if (props.data) {
        defaultData.value = buildTree({
          data: props.data,
          expandedKeys: defaultExpandedKeys.value,
          selectedKeys: defaultSelectedKeys.value,
          checkedKeys: defaultCheckedKeys.value,
          hasLoad: !!hasLoad,
          checkable: props.checkable,
          checkStrictly: props.checkStrictly,
        });
      }
    };
    updateDefaultData();

    watch(
      () => props.data,
      () => {
        updateDefaultData();
      },
      {
        deep: true,
      }
    );
    watch(
      () => props.checkedKeys,
      (nv: string[] | undefined) => {
        defaultCheckedKeys.value = nv || [];
        updateDefaultData();
      }
    );
    watch(
      () => props.selectedKeys,
      (nv: string[] | undefined) => {
        defaultSelectedKeys.value = nv || [];
        updateDefaultData();
      }
    );
    watch(
      () => props.expandedKeys,
      (nv: string[] | undefined) => {
        defaultExpandedKeys.value = nv || [];
        updateDefaultData();
      }
    );

    return () => {
      const { showLine, directory, queryKey } = props;
      // 过滤出应该显示的节点
      const visibleNodes = defaultData.value.filter((node) => {
        // 根节点总是显示
        if (node.parentKey === undefined || node.parentKey === null) return true; // Root nodes
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
            "k-tree", // Base class
            {
              "k-tree-show-line": showLine,
              "k-tree-directory": directory,
            },
          ]}
        >
          <TransitionGroup {...onProps} tag="div">
            {visibleNodes.map((item, index) => {
              // 为每个节点添加唯一的 key 用于动画
              return renderTreeNode(item, index); // Render each visible node
            })}
          </TransitionGroup>
        </div>
      );
    };
  },
});

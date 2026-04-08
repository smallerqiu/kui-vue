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
  type VNodeChild
} from "vue";
import { getTransitionProp } from "../base/transition";
import { Button } from "../button";
import Checkbox, { type ChangeEvent } from "../checkbox";
import type { TypeBoolean } from "../const/var";
import Icon from "../icon";
import { buildTree, updateParentIndeterminate, type TreeKey, type TreeNode } from "./utils";

export const treeProps = {
  data: Array as PropType<TreeNode[]>,
  selectedKeys: Array as PropType<TreeKey[]>,
  expandedKeys: Array as PropType<TreeKey[]>,
  checkedKeys: Array as PropType<TreeKey[]>,
  directory: Boolean as TypeBoolean,
  expandAll: Boolean as TypeBoolean,
  checkable: Boolean as TypeBoolean,
  draggable: Boolean as TypeBoolean,
  showLine: Boolean as TypeBoolean,
  showIcon: { type: Boolean as TypeBoolean, default: true },
  showExtra: { type: Boolean as TypeBoolean, default: false },
  multiple: { type: Boolean as TypeBoolean, default: false },
  checkStrictly: Boolean as TypeBoolean,
  selectAsCheck: Boolean as TypeBoolean,
  queryKey: String,
};

export type TreeProps = ExtractPropTypes<typeof treeProps>;

type LoadData = (node: TreeNode) => Promise<unknown> | void;

interface DragState {
  key: TreeKey | null;
  data: TreeNode | null;
}

export type { BuildTreeOptions, TreeKey, TreeNode } from "./utils";

const Tree = defineComponent({
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
    const defaultSelectedKeys = ref<TreeKey[]>(props.selectedKeys || []);
    const defaultExpandedKeys = ref<TreeKey[]>(props.expandedKeys || []);
    const defaultCheckedKeys = ref<TreeKey[]>(props.checkedKeys || []);
    const dragNode = reactive<DragState>({
      key: null,
      data: null,
    });

    const onLoadData = attrs.onLoadData as LoadData | undefined;
    const hasLoad = !!onLoadData;

    const rebuildTree = () => {
      if (!props.data) {
        defaultData.value = [];
        return;
      }

      defaultData.value = buildTree({
        data: props.data,
        expandedKeys: defaultExpandedKeys.value,
        selectedKeys: defaultSelectedKeys.value,
        checkedKeys: defaultCheckedKeys.value,
        hasLoad,
        checkable: props.checkable,
        checkStrictly: props.checkStrictly,
      }) //as TreeNode[];
    };

    const findNode = (key: TreeKey): TreeNode | undefined => {
      return defaultData.value.find((item: TreeNode) => item.key === key);
    };

    const handleExpand = (node: TreeNode) => {
      if (node.isLeaf || node.loading) return;

      const key = node.key;
      const isAsyncNode = hasLoad && (!node.children || node.children.length === 0) && !node.isLeaf;

      if (isAsyncNode && !node.expanded) {
        node.loading = true;
        const promise = onLoadData ? onLoadData(node) : undefined;

        if (promise && typeof (promise as Promise<unknown>).then === "function") {
          (promise as Promise<unknown>)
            .then(() => {
              nextTick(() => {
                const newNode = findNode(key);
                const targetNode = newNode || node;
                targetNode.loading = false;
                targetNode.expanded = true;

                const expandedKeys = defaultExpandedKeys.value.slice();
                if (expandedKeys.indexOf(key) === -1) {
                  expandedKeys.push(key);
                  defaultExpandedKeys.value = expandedKeys;
                  emit("update:expandedKeys", defaultExpandedKeys.value);
                }

                emit("expand", { key, expanded: true, targetNode });
              });
            })
            .catch(() => {
              node.loading = false;
            });
        }

        return;
      }

      node.expanded = !node.expanded;

      const expandedKeys = defaultExpandedKeys.value.slice();
      const index = expandedKeys.indexOf(key);

      if (node.expanded) {
        if (index === -1) {
          expandedKeys.push(key);
        }
      } else if (index > -1) {
        expandedKeys.splice(index, 1);
      }

      defaultExpandedKeys.value = expandedKeys;

      emit("update:expandedKeys", defaultExpandedKeys.value);
      emit("expand", { key, expanded: node.expanded, node });
    };

    const updateCheckState = {
      toggleNode: (key: TreeKey, checked: boolean) => {
        const node = findNode(key);
        if (!node || node.disabled) return;

        node.checked = checked;

        if (!props.checkStrictly) {
          updateCheckState.updateChildren(key, checked);
          updateCheckState.updateParents(key);
        }

        updateCheckState.recalculateIndeterminate();
      },

      updateChildren: (parentKey: TreeKey, checked: boolean) => {
        if (props.checkStrictly) return;

        const updateChild = (node: TreeNode) => {
          if (node.disabled) return;

          node.checked = checked;

          if (node.children && node.children.length > 0) {
            const childNodes = defaultData.value.filter((item: TreeNode) => {
              return (
                !!node.children && node.children.some((child: TreeNode) => child.key === item.key)
              );
            });

            childNodes.forEach((childNode: TreeNode) => {
              if (!childNode.disabled) {
                childNode.checked = checked;
                updateChild(childNode);
              }
            });
          }
        };

        const parentNode = findNode(parentKey);
        if (parentNode) {
          updateChild(parentNode);
        }
      },

      updateParents: (childKey: TreeKey) => {
        if (props.checkStrictly) return;

        const updateParent = (nodeKey: TreeKey) => {
          const node = findNode(nodeKey);
          if (!node || !node.parentKey) return;

          const parent = findNode(node.parentKey);
          if (!parent) return;

          const allChildren = defaultData.value.filter((item: TreeNode) => {
            return (
              !!parent.children && parent.children.some((child: TreeNode) => child.key === item.key)
            );
          });

          const enabledChildren = allChildren.filter((item: TreeNode) => !item.disabled);

          if (enabledChildren.length === 0) {
            parent.indeterminate = false;
            parent.checked = false;
            return;
          }

          const checkedCount = enabledChildren.filter((item: TreeNode) => item.checked).length;
          const indeterminateCount = enabledChildren.filter(
            (item: TreeNode) => item.indeterminate
          ).length;

          if (checkedCount === enabledChildren.length) {
            parent.checked = true;
            parent.indeterminate = false;
          } else if (checkedCount > 0 || indeterminateCount > 0) {
            parent.checked = false;
            parent.indeterminate = true;
          } else {
            parent.checked = false;
            parent.indeterminate = false;
          }

          updateParent(parent.key);
        };

        updateParent(childKey);
      },

      recalculateIndeterminate: () => {
        if (props.checkStrictly) {
          defaultData.value.forEach((node: TreeNode) => {
            node.indeterminate = false;
          });
          return;
        }

        defaultData.value.forEach((node: TreeNode) => {
          node.indeterminate = false;
        });

        const nodes = defaultData.value.slice();
        const checkedLeafNodes = nodes.filter((node: TreeNode) => node.isLeaf && node.checked);

        checkedLeafNodes.forEach((leaf: TreeNode) => {
          if (leaf.parentKey) {
            updateParentIndeterminate(nodes, leaf.parentKey);
          }
        });

        nodes.forEach((node: TreeNode) => {
          const originalNode = findNode(node.key);
          if (originalNode) {
            originalNode.indeterminate = node.indeterminate;
          }
        });
      },

      moveNode: (dragKey: TreeKey, dropKey: TreeKey) => {
        if (dragKey === dropKey || !props.data) return;

        const findRawNode = (nodes: TreeNode[] | undefined, key: TreeKey): TreeNode | null => {
          if (!nodes) return null;

          for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
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

        const flatDragNode = findNode(dragKey);
        let nodeToMove: TreeNode | null = null;

        if (flatDragNode && flatDragNode.parentKey) {
          const rawOldParent = findRawNode(props.data, flatDragNode.parentKey);
          if (rawOldParent && rawOldParent.children) {
            let index = -1;
            for (let i = 0; i < rawOldParent.children.length; i++) {
              if (rawOldParent.children[i].key === dragKey) {
                index = i;
                break;
              }
            }
            if (index > -1) {
              nodeToMove = rawOldParent.children.splice(index, 1)[0];
            }
          }
        } else {
          let index = -1;
          for (let i = 0; i < props.data.length; i++) {
            if (props.data[i].key === dragKey) {
              index = i;
              break;
            }
          }
          if (index > -1) {
            nodeToMove = props.data.splice(index, 1)[0];
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
          "isLastChild",
          "visiblePrefixes",
        ].forEach((prop: string) => {
          delete nodeToMove![prop];
        });

        if (!rawDropNode.children) {
          rawDropNode.children = [];
        }
        rawDropNode.children.push(nodeToMove);

        if (defaultExpandedKeys.value.indexOf(dropKey) === -1) {
          defaultExpandedKeys.value.push(dropKey);
        }

        rebuildTree();

        const newDropNode = findNode(dropKey);
        if (newDropNode) {
          newDropNode.expanded = true;
          emit("update:expandedKeys", defaultExpandedKeys.value);
        }
      },
    };

    const toggleCheck = (event: ChangeEvent, item: TreeNode) => {
      const key = item.key;
      updateCheckState.toggleNode(key, event.checked);

      const checkedNodes = defaultData.value
        .filter((node: TreeNode) => node.checked)
        .map((node: TreeNode) => node.key);

      defaultCheckedKeys.value = checkedNodes;
      emit("check", item, event.checked, checkedNodes);
    };

    const updateNodeStatus = (key: TreeKey, property: keyof TreeNode, value: unknown) => {
      for (let i = 0; i < defaultData.value.length; i++) {
        const item = defaultData.value[i];
        if (item.key === key) {
          item[property] = value;
          break;
        }
      }
    };

    const onSelect = (item: TreeNode) => {
      if (item.disabled) return;

      if (props.selectAsCheck) {
        toggleCheck({ checked: !item.selected }, item);
        return;
      }

      let selectedKeys = defaultSelectedKeys.value.slice();
      const key = item.key;
      const selected = !!item.selected;

      if (!props.multiple) {
        defaultData.value.forEach((node: TreeNode) => {
          if (node.selected) {
            node.selected = false;
          }
        });

        selectedKeys = !selected ? [key] : [];
      } else {
        const index = selectedKeys.indexOf(key);
        if (selected) {
          if (index > -1) {
            selectedKeys.splice(index, 1);
          }
        } else {
          selectedKeys.push(key);
        }
      }

      updateNodeStatus(key, "selected", !selected);

      defaultSelectedKeys.value = selectedKeys;
      emit("update:selectedKeys", selectedKeys);
      emit("select", item);
    };

    const handleDragStart = (e: DragEvent, node: TreeNode) => {
      if (!props.draggable || node.disabled) return;

      if (!node.isLeaf && node.expanded) {
        handleExpand(node);
      }

      dragNode.key = node.key;
      dragNode.data = node;

      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = "move";
      }

      emit("dragstart", node);
    };

    const handleDragOver = (e: DragEvent) => {
      if (!props.draggable) return;

      e.preventDefault();
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
      }
    };

    const handleDragEnter = (e: DragEvent, node: TreeNode) => {
      if (!props.draggable || node.disabled || node.key === dragNode.key) return;

      e.preventDefault();
      node.dropping = true;
      emit("dragenter", node);
    };

    const handleDragLeave = (_e: DragEvent, node: TreeNode) => {
      if (!props.draggable) return;

      node.dropping = false;
      emit("dragleave", node);
    };

    const handleDrop = (e: DragEvent, dropNode: TreeNode) => {
      if (!props.draggable || !dragNode.key || dropNode.disabled || dropNode.key === dragNode.key) {
        return;
      }

      e.preventDefault();
      dropNode.dropping = false;

      const currentDragNode = dragNode.data;
      updateCheckState.moveNode(dragNode.key, dropNode.key);

      dragNode.key = null;
      dragNode.data = null;

      emit("drop", {
        dragNode: currentDragNode,
        dropNode,
      });
    };

    const handleDragEnd = (node: TreeNode) => {
      if (!props.draggable) return;

      dragNode.key = null;
      dragNode.data = null;
      emit("dragend", node);
    };

    const renderTreeNode = (item: TreeNode, i: number) => {
      let key = item.key;
      if (key == null || key === "") {
        key = "n_" + i;
        item.key = key;
      }

      const arrowCommentNode: VNodeChild[] = [];

      if (item.visiblePrefixes && item.visiblePrefixes.length > 0) {
        item.visiblePrefixes.forEach((showLine: boolean) => {
          arrowCommentNode.push(
            <span class={showLine ? "k-tree-indent-line" : "k-tree-indent-empty"}></span>
          );
        });
      }

      if (!item.isLeaf) {
        const arrowCls = ["k-tree-arrow", { "k-tree-arrow-open": item.expanded }];
        const arrowNode = (
          <span
            class={arrowCls}
            onClick={(e: MouseEvent) => {
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
                  : props.showLine
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
      }

      const checkNode = props.checkable ? (
        <Checkbox
          onChange={(e: ChangeEvent) => toggleCheck(e, item)}
          checked={item.checked}
          disabled={item.disabled}
          indeterminate={item.indeterminate}
        />
      ) : null;

      const iconNode = <Icon type={item.icon} class="k-tree-icon" />;

      const titleProps: Record<string, unknown> = {
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
      }

      if (!props.directory) {
        titleProps.onClick = () => onSelect(item);
      }

      const titleNode = (
        <span {...titleProps}>
          {item.icon && props.showIcon && iconNode}
          {item.title}
        </span>
      );

      const itemProps: Record<string, unknown> = {
        key: item.key,
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

    rebuildTree();

    watch(
      () => props.data,
      () => {
        rebuildTree();
      },
      {
        deep: true,
      }
    );

    watch(
      () => props.checkedKeys,
      (nv: TreeKey[] | undefined) => {
        defaultCheckedKeys.value = nv || [];
        rebuildTree();
      }
    );

    watch(
      () => props.selectedKeys,
      (nv: TreeKey[] | undefined) => {
        defaultSelectedKeys.value = nv || [];
        rebuildTree();
      }
    );

    watch(
      () => props.expandedKeys,
      (nv: TreeKey[] | undefined) => {
        defaultExpandedKeys.value = nv || [];
        rebuildTree();
      }
    );

    return () => {
      const showLine = props.showLine;
      const directory = props.directory;
      const queryKey = props.queryKey;

      const visibleNodes = defaultData.value.filter((node: TreeNode) => {
        if (node.level === 0) return true;
        if (queryKey && queryKey.trim().length && String(node.title).indexOf(queryKey) === -1) {
          return false;
        }

        let current = node;
        while (current.parentKey) {
          const parent = defaultData.value.find((item: TreeNode) => item.key === current.parentKey);
          if (!parent || !parent.expanded) {
            return false;
          }
          current = parent;
        }

        return true;
      });

      const onProps = getTransitionProp("k-tree-slide");

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
          <div class="k-tree-node-list">
            <TransitionGroup {...onProps} tag="div">
              {visibleNodes.map((item: TreeNode, index: number) => renderTreeNode(item, index))}
            </TransitionGroup>
          </div>
        </div>
      );
    };
  },
}) //as DefineComponent<TreeProps>;

export default Tree;

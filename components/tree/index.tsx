import { ChevronRight, CircleMinus, CirclePlus, Loading } from "kui-icons";
import {
  defineComponent,
  inject,
  nextTick,
  onMounted,
  reactive,
  ref,
  TransitionGroup,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import { getTransitionProp } from "../base/transition";
import { Button } from "../button";
import Checkbox, { type ChangeEvent } from "../checkbox";
import type { BooleanType } from "../const/types";
import Icon from "../icon";
import Spin from "../spin";
import VirtualList from "../virtual-list";
import { treeSelectContextKey } from "./context";
import type {
  TreeDropEvent,
  TreeDropPosition,
  TreeExpandEvent,
  TreeExpose,
  TreeFieldNames,
} from "./types";
import { buildTree, updateParentIndeterminate, type TreeNode, type TreeNodeData } from "./utils";
const treeProps = {
  data: Array as PropType<TreeNodeData[]>,
  selectedKeys: Array as PropType<string[]>,
  expandedKeys: Array as PropType<string[]>,
  checkedKeys: Array as PropType<string[]>,
  directory: Boolean as BooleanType,
  checkable: Boolean as BooleanType,
  draggable: Boolean as BooleanType,
  showLine: Boolean as BooleanType,
  showIcon: { type: Boolean as BooleanType, default: true },
  showExtra: { type: Boolean as BooleanType, default: false },
  multiple: { type: Boolean as BooleanType, default: false },
  checkStrictly: Boolean as BooleanType,
  virtual: Boolean as BooleanType,
  height: { type: [Number, String] as PropType<number | string>, default: 300 },
  itemHeight: { type: Number, default: 28 },
  overscan: { type: Number, default: 5 },
  loadData: {
    type: Function as PropType<(node: TreeNode) => Promise<unknown>>,
  },
  loading: Boolean as BooleanType,
  fieldNames: Object as PropType<TreeFieldNames>,
};

export type TreeProps = ExtractPropTypes<typeof treeProps>;

interface DragState {
  key: string | null;
  data: TreeNode | null;
}

export type { BuildTreeOptions, TreeNode } from "./utils";

const Tree = defineComponent({
  name: "Tree",
  props: treeProps,
  emits: {
    "update:expandedKeys": (keys: string[]) => Array.isArray(keys),
    "update:checkedKeys": (keys: string[]) => Array.isArray(keys),
    "update:selectedKeys": (keys: string[]) => Array.isArray(keys),
    expand: (result: TreeExpandEvent) => typeof result === "object" && result !== null,
    check: (node: TreeNode, checked: boolean, keys: string[]) =>
      typeof node === "object" &&
      node !== null &&
      typeof checked === "boolean" &&
      Array.isArray(keys),
    select: (node: TreeNode) => typeof node === "object" && node !== null,
    dragstart: (node: TreeNode, event: DragEvent) =>
      typeof node === "object" && node !== null && typeof event?.type === "string",
    dragenter: (node: TreeNode, event: DragEvent) =>
      typeof node === "object" && node !== null && typeof event?.type === "string",
    dragleave: (node: TreeNode, event: DragEvent) =>
      typeof node === "object" && node !== null && typeof event?.type === "string",
    drop: (nodes: TreeDropEvent, event: DragEvent) =>
      typeof nodes === "object" && nodes !== null && typeof event?.type === "string",
    loadError: (_error: unknown, node: TreeNode) => typeof node === "object" && node !== null,
    dragend: (node: TreeNode, event: DragEvent) =>
      typeof node === "object" && node !== null && typeof event?.type === "string",
  },
  setup(props, { emit, slots, expose }) {
    const treeSelect = inject(treeSelectContextKey, null);
    const treeRef = ref<HTMLElement>();
    const virtualListRef = ref<{
      scrollToIndex: (index: number, align?: "auto" | "start" | "center" | "end") => void;
    }>();
    let visibleNodesCache: TreeNode[] = [];
    const focusedKey = ref<string>();
    const loadedKeys = new Set<string>();
    const loadingKeys = new Set<string>();
    const defaultData = ref<TreeNode[]>([]);
    const defaultSelectedKeys = ref<string[]>([...(props.selectedKeys || [])]);
    const defaultExpandedKeys = ref<string[]>([...(props.expandedKeys || [])]);
    const defaultCheckedKeys = ref<string[]>([...(props.checkedKeys || [])]);
    const dragNode = reactive<DragState>({
      key: null,
      data: null,
    });
    const dropPosition = ref<TreeDropPosition>("inside");

    const fields = () => ({
      key: props.fieldNames?.key ?? "key",
      title: props.fieldNames?.title ?? "title",
      children: props.fieldNames?.children ?? "children",
      disabled: props.fieldNames?.disabled ?? "disabled",
      isLeaf: props.fieldNames?.isLeaf ?? "isLeaf",
    });

    const normalizeData = (nodes: TreeNodeData[]): TreeNode[] => {
      const names = fields();
      return nodes.map((raw) => {
        const children = raw[names.children];
        return {
          ...raw,
          key: String(raw[names.key] ?? ""),
          title: raw[names.title] as TreeNode["title"],
          disabled: Boolean(raw[names.disabled]),
          isLeaf: raw[names.isLeaf] === undefined ? undefined : Boolean(raw[names.isLeaf]),
          children: Array.isArray(children) ? normalizeData(children as TreeNodeData[]) : undefined,
        };
      });
    };

    const rebuildTree = () => {
      if (!props.data) {
        defaultData.value = [];
        return;
      }

      defaultData.value = buildTree({
        data: normalizeData(props.data),
        expandedKeys: defaultExpandedKeys.value,
        selectedKeys: defaultSelectedKeys.value,
        checkedKeys: defaultCheckedKeys.value,
        hasLoad: !!props.loadData,
        checkable: props.checkable,
        checkStrictly: props.checkStrictly,
      }); //as TreeNode[];
      defaultData.value.forEach((node) => {
        node.loading = loadingKeys.has(node.key);
      });
    };

    const findNode = (key: string): TreeNode | undefined => {
      return defaultData.value.find((item: TreeNode) => item.key === key);
    };

    const handleExpand = (node: TreeNode) => {
      if (node.isLeaf || node.loading) return;

      const key = node.key;
      const isAsyncNode =
        !!props.loadData &&
        !loadedKeys.has(key) &&
        (!node.children || node.children.length === 0) &&
        !node.isLeaf;

      if (isAsyncNode && !node.expanded) {
        loadingKeys.add(key);
        node.loading = true;
        props.loadData!(node)
          .then(() => {
            nextTick(() => {
              loadedKeys.add(key);
              loadingKeys.delete(key);
              rebuildTree();
              const newNode = findNode(key);
              const targetNode = newNode || node;
              targetNode.loading = false;
              if (!targetNode.children?.length) targetNode.isLeaf = true;
              targetNode.expanded = true;

              const expandedKeys = defaultExpandedKeys.value.slice();
              if (expandedKeys.indexOf(key) === -1) {
                expandedKeys.push(key);
                defaultExpandedKeys.value = expandedKeys;
                emit("update:expandedKeys", defaultExpandedKeys.value);
              }

              emit("expand", { key, expanded: true, node: targetNode });
            });
          })
          .catch((error: unknown) => {
            emit("loadError", error, node);
          })
          .finally(() => {
            loadingKeys.delete(key);
            node.loading = false;
            const current = findNode(key);
            if (current) current.loading = false;
          });

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
      toggleNode: (key: string, checked: boolean) => {
        const node = findNode(key);
        if (!node || node.disabled) return;

        node.checked = checked;

        if (!props.checkStrictly) {
          updateCheckState.updateChildren(key, checked);
          updateCheckState.updateParents(key);
        }

        updateCheckState.recalculateIndeterminate();
      },

      updateChildren: (parentKey: string, checked: boolean) => {
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

      updateParents: (childKey: string) => {
        if (props.checkStrictly) return;

        const updateParent = (nodeKey: string) => {
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
            (item: TreeNode) => item.indeterminate,
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

      moveNode: (dragKey: string, dropKey: string, position: TreeDropPosition): boolean => {
        if (dragKey === dropKey || !props.data) return false;
        const names = fields();
        type RawLocation = { node: TreeNodeData; list: TreeNodeData[]; index: number };
        const locate = (nodes: TreeNodeData[], key: string): RawLocation | undefined => {
          for (let index = 0; index < nodes.length; index++) {
            const node = nodes[index];
            if (String(node[names.key] ?? "") === key) return { node, list: nodes, index };
            const children = node[names.children];
            if (Array.isArray(children)) {
              const found = locate(children as TreeNodeData[], key);
              if (found) return found;
            }
          }
        };
        const dragLocation = locate(props.data, dragKey);
        const dropLocation = locate(props.data, dropKey);
        if (!dragLocation || !dropLocation) return false;
        const dragChildren = dragLocation.node[names.children];
        if (Array.isArray(dragChildren) && locate(dragChildren as TreeNodeData[], dropKey))
          return false;

        // Keep the existing mutable-data behavior for compatibility while also
        // reporting an exact destination to consumers through dropPosition.
        const [nodeToMove] = dragLocation.list.splice(dragLocation.index, 1);
        if (!nodeToMove) return false;

        if (position === "inside") {
          let children = dropLocation.node[names.children];
          if (!Array.isArray(children)) {
            children = [];
            dropLocation.node[names.children] = children;
          }
          (children as TreeNodeData[]).push(nodeToMove);
        } else {
          const refreshedDrop = locate(props.data, dropKey);
          if (!refreshedDrop) return false;
          refreshedDrop.list.splice(
            refreshedDrop.index + (position === "after" ? 1 : 0),
            0,
            nodeToMove,
          );
        }

        if (position === "inside" && defaultExpandedKeys.value.indexOf(dropKey) === -1) {
          defaultExpandedKeys.value.push(dropKey);
        }

        rebuildTree();

        const newDropNode = findNode(dropKey);
        if (newDropNode) {
          if (position === "inside") {
            newDropNode.expanded = true;
            emit("update:expandedKeys", defaultExpandedKeys.value);
          }
        }
        return true;
      },
    };

    const toggleCheck = (event: ChangeEvent, item: TreeNode) => {
      const key = item.key;
      updateCheckState.toggleNode(key, event.checked);

      const checkedNodes = defaultData.value
        .filter((node: TreeNode) => node.checked)
        .map((node: TreeNode) => node.key);

      defaultCheckedKeys.value = checkedNodes;
      emit("update:checkedKeys", checkedNodes);
      emit("check", item, event.checked, checkedNodes);
    };

    const updateNodeStatus = (key: string, property: keyof TreeNode, value: unknown) => {
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

      if (treeSelect?.checkOnClick.value && props.checkable) {
        toggleCheck({ checked: !item.checked }, item);
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

      emit("dragstart", node, e);
    };

    const updateDropPosition = (e: DragEvent, node: TreeNode) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const offset = e.clientY - rect.top;
      dropPosition.value =
        offset < rect.height / 3 ? "before" : offset > (rect.height * 2) / 3 ? "after" : "inside";
      defaultData.value.forEach((item) => {
        item.dropping = item.key === node.key;
      });
    };

    const handleDragOver = (e: DragEvent, node: TreeNode) => {
      if (!props.draggable || node.disabled || node.key === dragNode.key) return;

      e.preventDefault();
      updateDropPosition(e, node);
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "move";
      }
    };

    const handleDragEnter = (e: DragEvent, node: TreeNode) => {
      if (!props.draggable || node.disabled || node.key === dragNode.key) return;

      e.preventDefault();
      updateDropPosition(e, node);
      emit("dragenter", node, e);
    };

    const handleDragLeave = (e: DragEvent, node: TreeNode) => {
      if (!props.draggable) return;
      const currentTarget = e.currentTarget as HTMLElement;
      if (e.relatedTarget instanceof Node && currentTarget.contains(e.relatedTarget)) return;

      node.dropping = false;
      emit("dragleave", node, e);
    };

    const handleDrop = (e: DragEvent, dropNode: TreeNode) => {
      if (!props.draggable || !dragNode.key || dropNode.disabled || dropNode.key === dragNode.key) {
        return;
      }

      e.preventDefault();
      dropNode.dropping = false;

      const currentDragNode = dragNode.data;
      const position = dropPosition.value;
      const moved = updateCheckState.moveNode(dragNode.key, dropNode.key, position);

      dragNode.key = null;
      dragNode.data = null;

      if (moved && currentDragNode) {
        emit(
          "drop",
          {
            dragNode: currentDragNode,
            dropNode,
            dropPosition: position,
          },
          e,
        );
      }
    };

    const handleDragEnd = (e: DragEvent, node: TreeNode) => {
      if (!props.draggable) return;

      dragNode.key = null;
      dragNode.data = null;
      emit("dragend", node, e);
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
            <span class={showLine ? "k-tree-indent-line" : "k-tree-indent-empty"}></span>,
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
                  ? Loading
                  : props.showLine
                    ? item.expanded
                      ? CircleMinus
                      : CirclePlus
                    : ChevronRight
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
        titleProps.onDragover = (e: DragEvent) => handleDragOver(e, item);
        titleProps.onDragenter = (e: DragEvent) => handleDragEnter(e, item);
        titleProps.onDragleave = (e: DragEvent) => handleDragLeave(e, item);
        titleProps.onDrop = (e: DragEvent) => handleDrop(e, item);
        titleProps.onDragend = (e: DragEvent) => handleDragEnd(e, item);
      }

      if (!props.directory) {
        titleProps.onClick = () => onSelect(item);
      }

      const titleNode = (
        <span {...titleProps}>
          {item.icon && props.showIcon && iconNode}
          {slots.title ? slots.title(item) : item.title}
        </span>
      );

      const itemProps: Record<string, unknown> = {
        key: item.key,
        class: [
          "k-tree-item",
          {
            "k-tree-item-disabled": item.disabled,
            "k-tree-item-drop": item.dropping && !item.disabled,
            [`k-tree-item-drop-${dropPosition.value}`]: item.dropping && !item.disabled,
            "k-tree-item-extra-hidden": !props.showExtra,
            "k-tree-item-selected": props.directory && item.selected,
          },
        ],
        role: "treeitem",
        tabindex: focusedKey.value === item.key ? 0 : -1,
        "data-tree-key": item.key,
        "aria-level": (item.level ?? 0) + 1,
        "aria-selected": item.selected || undefined,
        "aria-checked": props.checkable
          ? item.indeterminate
            ? "mixed"
            : Boolean(item.checked)
          : undefined,
        "aria-expanded": item.isLeaf ? undefined : Boolean(item.expanded),
        "aria-disabled": item.disabled || undefined,
        onFocus: () => {
          focusedKey.value = item.key;
        },
      };

      if (props.directory) {
        itemProps.onClick = (e: MouseEvent) => {
          e.stopPropagation();
          onSelect(item);
          handleExpand(item);
        };
      }
      const previousClick = itemProps.onClick as ((event: MouseEvent) => void) | undefined;
      itemProps.onClick = (event: MouseEvent) => {
        focusedKey.value = item.key;
        previousClick?.(event);
      };

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
      },
    );

    watch(() => props.loadData, rebuildTree);

    watch(
      () => props.checkedKeys,
      (nv: string[] | undefined) => {
        defaultCheckedKeys.value = [...(nv || [])];
        rebuildTree();
      },
    );

    watch(
      () => props.selectedKeys,
      (nv: string[] | undefined) => {
        defaultSelectedKeys.value = [...(nv || [])];
        rebuildTree();
      },
    );

    watch(
      () => props.expandedKeys,
      (nv: string[] | undefined) => {
        defaultExpandedKeys.value = [...(nv || [])];
        rebuildTree();
      },
    );

    const focusNode = (key: string) => {
      focusedKey.value = key;
      const index = visibleNodesCache.findIndex((node) => node.key === key);
      if (props.virtual && index >= 0) virtualListRef.value?.scrollToIndex(index);
      nextTick(() => {
        const element = Array.from(
          treeRef.value?.querySelectorAll<HTMLElement>("[data-tree-key]") ?? [],
        ).find((item) => item.dataset.treeKey === key);
        element?.focus({ preventScroll: props.virtual });
        if (!props.virtual && typeof element?.scrollIntoView === "function") {
          element.scrollIntoView({ block: "nearest" });
        }
      });
    };

    const updateExpandedKeys = (keys: string[]) => {
      defaultExpandedKeys.value = keys;
      rebuildTree();
      emit("update:expandedKeys", keys);
    };

    const expandAll = () =>
      updateExpandedKeys(defaultData.value.filter((node) => !node.isLeaf).map((node) => node.key));
    const collapseAll = () => updateExpandedKeys([]);
    const scrollTo = (key: string) => {
      const index = visibleNodesCache.findIndex((node) => node.key === key);
      if (index < 0) return;
      if (props.virtual) virtualListRef.value?.scrollToIndex(index, "center");
      else focusNode(key);
    };

    const exposed: TreeExpose = {
      getNode: findNode,
      getCheckedNodes: () => defaultData.value.filter((node) => node.checked),
      getSelectedNodes: () => defaultData.value.filter((node) => node.selected),
      scrollTo,
      expandAll,
      collapseAll,
    };
    expose(exposed);

    const handleKeydown = (event: KeyboardEvent) => {
      const nodes = visibleNodesCache.filter((node) => !node.disabled);
      if (!nodes.length) return;
      let index = nodes.findIndex((node) => node.key === focusedKey.value);
      if (index < 0) index = 0;
      const node = nodes[index];
      let target: TreeNode | undefined;

      if (event.key === "ArrowDown") target = nodes[Math.min(index + 1, nodes.length - 1)];
      else if (event.key === "ArrowUp") target = nodes[Math.max(index - 1, 0)];
      else if (event.key === "Home") target = nodes[0];
      else if (event.key === "End") target = nodes[nodes.length - 1];
      else if (event.key === "ArrowRight") {
        if (!node.isLeaf && !node.expanded) handleExpand(node);
        else target = nodes.find((item) => item.parentKey === node.key);
      } else if (event.key === "ArrowLeft") {
        if (!node.isLeaf && node.expanded) handleExpand(node);
        else target = node.parentKey ? findNode(node.parentKey) : undefined;
      } else if (event.key === "Enter") onSelect(node);
      else if (event.key === " ") {
        if (props.checkable) toggleCheck({ checked: !node.checked }, node);
        else onSelect(node);
      } else return;

      event.preventDefault();
      if (target) focusNode(target.key);
    };

    onMounted(() => {
      if (!focusedKey.value)
        focusedKey.value = visibleNodesCache.find((node) => !node.disabled)?.key;
    });

    return () => {
      const showLine = props.showLine;
      const directory = props.directory;
      const query = treeSelect?.query.value.trim().toLocaleLowerCase() || "";
      const nodeMap = new Map(defaultData.value.map((node) => [node.key, node]));
      let visibleNodes: TreeNode[];

      if (query) {
        const matchedKeys = new Set<string>();
        defaultData.value.forEach((node) => {
          if (
            !String(node.title ?? "")
              .toLocaleLowerCase()
              .includes(query)
          )
            return;

          let current: TreeNode | undefined = node;
          while (current) {
            matchedKeys.add(current.key);
            current = current.parentKey ? nodeMap.get(current.parentKey) : undefined;
          }
        });
        visibleNodes = defaultData.value.filter((node) => matchedKeys.has(node.key));
      } else {
        visibleNodes = defaultData.value.filter((node) => {
          let current = node;
          while (current.parentKey) {
            const parent = nodeMap.get(current.parentKey);
            if (!parent?.expanded) return false;
            current = parent;
          }
          return true;
        });
      }
      visibleNodesCache = visibleNodes;

      const onProps = getTransitionProp("k-tree-slide");

      const content = (
        <div
          ref={treeRef}
          class={[
            "k-tree",
            {
              "k-tree-show-line": showLine,
              "k-tree-directory": directory,
            },
          ]}
          role="tree"
          aria-multiselectable={props.multiple || undefined}
          aria-busy={props.loading || loadingKeys.size > 0 || undefined}
          onKeydown={handleKeydown}
        >
          {props.virtual ? (
            <VirtualList
              ref={virtualListRef}
              class="k-tree-node-list k-tree-virtual-list"
              data={visibleNodes}
              height={props.height}
              itemHeight={props.itemHeight}
              overscan={props.overscan}
              itemKey="key"
              v-slots={{
                default: ({ item, index }: { item: unknown; index: number }) =>
                  renderTreeNode(item as TreeNode, index),
              }}
            />
          ) : (
            <div class="k-tree-node-list">
              <TransitionGroup {...onProps} tag="div">
                {visibleNodes.map((item: TreeNode, index: number) => renderTreeNode(item, index))}
              </TransitionGroup>
            </div>
          )}
        </div>
      );
      return props.loading ? <Spin modelValue>{content}</Spin> : content;
    };
  },
});

export default Tree;

export type {
  TreeDropEvent,
  TreeDropPosition,
  TreeExpandEvent,
  TreeExpose,
  TreeFieldNames,
} from "./types";

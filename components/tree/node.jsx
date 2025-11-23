import Icon from "../icon";
import { Checkbox } from "../checkbox";
import { Button } from "../button";
import Node from "./node.jsx";
import { getTransitionProp } from "../base/transition";
import { getChildren } from "../utils/element";
import {
  Sync,
  RemoveCircleOutline,
  AddCircleOutline,
  ChevronForward,
} from "kui-icons";
import { withInstall, cloneVNode } from "../utils/vue";
import {
  ref,
  reactive,
  onMounted,
  inject,
  provide,
  watch,
  getCurrentInstance,
} from "vue";

const TreeNode = {
  name: "TreeNode",
  props: {
    data: Object,
    isLeaf: Object,
    disabled: Boolean,
    icon: [String, Array],
    title: String,
    directory: Boolean,
    expandedAll: Boolean,
    checkable: Boolean,
    draggable: Boolean,
    showLine: Boolean,
    showIcon: { type: Boolean, default: true },
    showExtra: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    checkStrictly: Boolean,
  },
  setup(props, { slots, emits }) {
    const ParentNode = inject("tree-node-data", {}); //=>VNode
    const defaultData = reactive(props.data || {});
    const loading = ref(false);
    const dragged = ref(false);
    const dropped = ref(false);
    const level = ref(ParentNode?.level?.value + 1 || 0);

    const Tree = inject("Tree", {});
    const instance = getCurrentInstance();

    provide("tree-node-data", {
      data: defaultData,
      level: level,
    });

    onMounted(() => {
      let { defaultCheckedKeys, checkStrictly } = Tree;
      // const key = instance.vnode.key;
      const key = instance.proxy.$vnode.key;
      let checked = defaultCheckedKeys.value.indexOf(key) > -1;
      if (checked && !checkStrictly) {
        updateChildCheck(defaultData, checked);
        updateParentCheck(ParentNode);
      }
    });
    watch(
      () => props.data,
      (nv, ov) => {
        defaultData.value = nv || {};
      }
    );

    const updateChildCheck = (data, checked) => {
      const { children = [], disabled } = data;
      !disabled &&
        children.forEach((item) => {
          if (!item.disabled) {
            const checkedKeys = Tree.defaultCheckedKeys.value;
            const key = item.key;
            if (key !== undefined) {
              let index = checkedKeys.indexOf(key);
              checked
                ? index < 0 && checkedKeys.push(key)
                : index > -1 && checkedKeys.splice(index, 1);
              Tree.defaultCheckedKeys.value = checkedKeys;
              updateChildCheck(item, checked);
            }
          }
        });
    };
    const updateParentCheck = (node) => {
      if (!node || !node.data || node.data.disabled) return;

      let { children = [], key } = node.data;
      const checkedKeys = Tree.defaultCheckedKeys.value;
      const halfCheckedKeys = Tree.halfCheckedKeys.value;
      const normal = children.filter(({ disabled }) => !disabled);
      let checkedLength = normal.filter(
        ({ key }) => checkedKeys.indexOf(key) > -1
      ).length;
      let halfCheckedLength = normal.filter(
        ({ key }) => halfCheckedKeys.indexOf(key) > -1
      ).length;

      let isCheckAll = checkedLength == normal.length;
      let halfIndex = halfCheckedKeys.indexOf(key);
      let checkIndex = checkedKeys.indexOf(key);

      isCheckAll
        ? checkedKeys.push(key)
        : checkIndex > -1 && checkedKeys.splice(checkIndex, 1);
      if ((halfCheckedLength > 0 || checkedLength > 0) && !isCheckAll)
        halfIndex < 0 && halfCheckedKeys.push(key);
      else halfIndex > -1 && halfCheckedKeys.splice(halfIndex, 1);
      Tree.defaultCheckedKeys.value = checkedKeys;
      Tree.halfCheckedKeys.value = halfCheckedKeys;
      updateParentCheck(node.ParentNode);
    };
    const handleCheck = (e) => {
      if (!defaultData.disabled) {
        const checked = e.target.checked;
        let key = instance.proxy.$vnode.key;
        // let key = instance.vnode.key;

        // let { defaultCheckedKeys, halfCheckedKeys } = Tree;
        const checkedKeys = Tree.defaultCheckedKeys.value;
        const halfCheckedKeys = Tree.halfCheckedKeys.value;

        let index = checkedKeys.indexOf(key);
        checked && index < 0
          ? checkedKeys.push(key)
          : checkedKeys.splice(index, 1);
        Tree.defaultCheckedKeys.value = checkedKeys;

        let halfIndex = halfCheckedKeys.indexOf(key);

        if (checked && halfIndex > -1) {
          halfCheckedKeys.splice(halfIndex, 1);
        }
        Tree.halfCheckedKeys.value = halfCheckedKeys;

        if (!props.checkStrictly) {
          // update child
          updateChildCheck(defaultData, checked);

          // update parent
          updateParentCheck(ParentNode);
        }
        Tree.onCheck?.(checked, key, defaultData, instance.proxy);
      }
    };
    const handleSelect = (e) => {
      const key = instance.proxy.$vnode.key;
      let { disabled /*key*/ } = defaultData;
      if (!disabled) {
        if (props.directory) {
          handleExpand(e);
        }
        Tree.onSelect?.(key, defaultData, instance.proxy);
      }
    };
    const handleExpand = (e) => {
      e.stopPropagation();
      // const key = instance.vnode.key;
      const key = instance.proxy.$vnode.key;
      if ((ParentNode && slots.default) || slots.default) {
        // console.log(instance);
        let data = {
          ...props,
          children: instance.proxy.$children,
          key,
        };
        Tree.onExpand?.(key, data, instance.proxy, loading);
      } else {
        Tree.onExpand?.(key, defaultData, instance.proxy, loading);
      }
    };
    const onDragStart = (e) => {
      dragged.value = true;
      Tree.onDragStart?.(
        e,
        instance.proxy.$vnode.key,
        defaultData,
        ParentNode.data
      );
    };
    const onDragEnd = (e) => {
      dragged.value = false;
      Tree.onDragend?.(e, { node: defaultData, parent: getParent() });
      // instance.proxy.$forceUpdate();
    };
    const onDragEnter = (e) => {
      dropped.value = true;
      Tree.onDragenter?.(e, { node: defaultData, parent: getParent() });
    };
    const onDragLeave = (e) => {
      dropped.value = false;
      Tree.onDragleave?.(e, { node: defaultData, parent: getParent() });
    };
    const onDrop = (e) => {
      dropped.value = false;
      if (!defaultData.disabled) {
        Tree.onDrop?.(e, { node: defaultData });
      }
    };
    const onDragOver = (e) => {
      e.preventDefault();
    };
    const getParent = () => {
      return ParentNode.data || { children: Tree.defaultData.value };
    };

    return () => {
      let p = { ...props };
      delete p.data;
      let data = Object.assign(p, defaultData);
      let { isLeaf, disabled, icon, title, children = [] } = data;

      let slotChildren = getChildren(slots.default?.());

      let itemNode = [];
      // const key = instance.vnode.key;
      const key = instance.proxy.$vnode.key;
      let {
        defaultSelectedKeys,
        defaultExpandedKeys,
        defaultCheckedKeys,
        halfCheckedKeys,
        hasLoad,
      } = Tree;
      const expandedKeys = defaultExpandedKeys.value;
      const expand = props.expandedAll || expandedKeys.indexOf(key) > -1,
        selected = defaultSelectedKeys.value.indexOf(key) > -1,
        checkedValue = defaultCheckedKeys.value.indexOf(key) > -1,
        indeterminate = halfCheckedKeys.value.indexOf(key) > -1;

      let hasChildren = slotChildren.length > 0 || children.length > 0;
      if ((hasChildren || hasLoad) && isLeaf !== true) {
        let arrowCls = ["k-tree-arrow", { "k-tree-arrow-open": expand }];
        let arrowNode = (
          <span class={arrowCls} onClick={handleExpand}>
            <Button
              size="small"
              type="text"
              loading={loading.value}
              icon={
                loading.value
                  ? Sync
                  : props.showLine
                    ? expand
                      ? RemoveCircleOutline
                      : AddCircleOutline
                    : ChevronForward
              }
              spin={loading.value}
            />
          </span>
        );
        itemNode.push(arrowNode);
      } else {
        itemNode.push(<span class="k-tree-comment"></span>);
      }

      if (props.checkable) {
        let checkboxProps = {
          props: {
            checked: checkedValue,
            disabled: disabled,
            indeterminate: indeterminate,
          },
        };
        itemNode.push(<Checkbox {...checkboxProps} onChange={handleCheck} />);
      }

      let iconNode = null;
      console.log(icon);
      if (icon && props.showIcon) {
        iconNode = <Icon type={icon} class="k-tree-icon" />;
      }

      let titleCls = ["k-tree-title", { "k-tree-title-selected": selected }];

      if (Tree && Tree.$scopedSlots && Tree.$scopedSlots.title) {
        title = Tree.$scopedSlots.title({
          node: defaultData,
          parent: getParent(),
        });
      }
      let innerNode = [iconNode, title];

      const titleProps = {
        class: titleCls,
        attrs: {
          tabindex: "-1",
          draggable: props.draggable && !disabled,
        },
        on: {},
      };

      // 事件处理
      if (!props.directory) {
        titleProps.on.click = handleSelect;
      }
      if (props.draggable) {
        titleProps.on.dragstart = onDragStart;
        titleProps.on.dragend = onDragEnd;
        titleProps.on.drop = onDrop;
        titleProps.on.dragenter = onDragEnter;
        titleProps.on.dragleave = onDragLeave;
        titleProps.on.dragover = onDragOver;
      }

      itemNode.push(<span {...titleProps}>{innerNode}</span>);

      let childrenVNode = null;
      let ps = {
        props: {
          showLine     : props.showLine,
          showIcon     : props.showIcon,
          showExtra    : props.showExtra,
          multiple     : props.multiple,
          checkStrictly: props.checkStrictly,
          directory    : props.directory,
          draggable    : props.draggable,
          expandedAll  : props.expandedAll,
          checkable    : props.checkable,
        },
      };
      if (expand && hasChildren) {
        if (slotChildren.length) {
          childrenVNode = slotChildren.map((vnode, i) => {
            vnode.key = vnode.key || `${key}_${i}`;
            let ele = cloneVNode(vnode, ps);
            return ele;
          });
        } else {
          childrenVNode = children.map((item, i) => {
            const k = item.key || `${key}_${i}`;
            item.key = k;
            return <Node data={item} key={k} {...ps} />;
          });
        }
      }

      let onProps = getTransitionProp("k-tree-slide");
      const itemProps = {
        class: [
          "k-tree-item",
          {
            "k-tree-item-disabled": disabled,
            "k-tree-item-drag": dragged.value,
            "k-tree-item-drop": dropped.value && !disabled,
            "k-tree-item-extra-hidden": !props.showExtra,
            "k-tree-item-selected": props.directory && selected,
          },
        ],
        style: {
          paddingLeft: `${(level.value || 0) * 24}px`,
        },
        on: {},
      };

      // 目录模式下的点击事件
      if (props.directory) {
        itemProps.on.click = handleSelect;
      }

      let extraNode;
      if (Tree.$scopedSlots && Tree.$scopedSlots.extra) {
        let extra = Tree.$scopedSlots.extra({
          node: defaultData,
          parent: getParent(),
        });
        extraNode = <span class="k-tree-item-extra">{extra}</span>;
      }
      console.log(childrenVNode, 111, props.showLine);
      childrenVNode &&
        props.showLine &&
        childrenVNode.unshift(
          <span
            class="k-tree-line"
            style={{ left: `${(level.value || 0) * 24 + 12}px` }}
            key="line"
          ></span>
        );

      return (
        <div class="k-tree-children">
          <div {...itemProps}>
            {itemNode}
            {extraNode}
          </div>
          {
            <transition-group
              class="k-tree-item-children"
              tag="div"
              {...onProps}
            >
              {childrenVNode}
            </transition-group>
          }
        </div>
      );
    };
  },
};

export default withInstall(TreeNode);

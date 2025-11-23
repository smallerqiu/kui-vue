import TreeNode from "./node.jsx";
import { getChildren } from "../utils/vnode";
import { withInstall, cloneVNode } from "../utils/vue";
import { ref, provide, reactive, watch, onMounted, onBeforeUnmount } from "vue";
const Tree = {
  name: "Tree",
  props: {
    data: Array,
    selectedKeys: Array,
    expandedKeys: Array,
    checkedKeys: Array,
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

  setup(ps, { emit, slots, listeners }) {
    const defaultData = ref(ps.data || []);
    const defaultSelectedKeys = ref(ps.selectedKeys || []);
    const defaultExpandedKeys = ref(ps.expandedKeys || []);
    const defaultCheckedKeys = ref(ps.checkedKeys || []);
    const ctrlKeyEntered = ref(false);
    const halfCheckedKeys = ref([]);
    const dragNode = reactive({});
    const dragParentNode = reactive({});

    const hasLoad = "loadData" in listeners || "load-data" in listeners;

    const setParentHalf = (data = [], key) => {
      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let { children = [] } = item;
        let keys = children
          .filter((child) => !child.disabled)
          .map((child) => child.key);

        if (
          keys.indexOf(key) >= 0 &&
          defaultCheckedKeys?.value.indexOf(item.key) < 0
        ) {
          //符合要求
          halfCheckedKeys.value.push(item.key);
          setParentHalf(defaultData.value, item.key);
          break;
        } else {
          setParentHalf(children, key);
        }
      }
    };
    const setCheckHalf = () => {
      ps.checkable &&
        !ps.checkStrictly &&
        (defaultCheckedKeys.value || []).forEach((key) => {
          setParentHalf(defaultData.value, key);
        });
    };

    const handleKeyDown = (event) => {
      // console.log(event)
      if (event.ctrlKe || event.metaKey) {
        ctrlKeyEntered.value = true;
      }
      window.addEventListener("keyup", handleKeyUp);
    };
    const handleKeyUp = (event) => {
      if (!event.ctrlKey && event.metaKey) {
        ctrlKeyEntered.value = false;
      }
    };

    const onCheck = (checked, key, node) => {
      emit("check", {
        checkedKeys: defaultCheckedKeys.value,
        checked,
        node,
      });
    };
    const onSelect = (key, data, node) => {
      let selectedKeys = defaultSelectedKeys.value;
      let index = selectedKeys.indexOf(key);
      if (ps.multiple) {
        if (ctrlKeyEntered.value) {
          index > -1 ? selectedKeys.splice(index, 1) : selectedKeys.push(key);
        } else {
          index > -1 ? selectedKeys.splice(index, 1) : selectedKeys.push(key);
        }
      } else {
        selectedKeys = index > -1 ? [] : [key];
      }
      defaultSelectedKeys.value = selectedKeys;
      emit("select", {
        selectedKeys: selectedKeys,
        selected: index < 0,
        node,
      });
    };
    const onExpand = (key, item, vnode, loading) => {
      // console.log("onExpand", key, item, vnode);
      const expandedKeys = defaultExpandedKeys.value;
      if (item.children && item.children.length) {
        let index = expandedKeys.indexOf(key);
        index > -1 ? expandedKeys.splice(index, 1) : expandedKeys.push(key);
        defaultExpandedKeys.value = expandedKeys;
        emit("expand", {
          expandedKeys: expandedKeys,
          expanded: index < 0,
          node: item,
          vnode,
        });
      } else if (hasLoad && !item.isLeaf && !loading.value) {
        loading.value = true;
        emit("load-data", item, (child) => {
          loading.value = false;
          item.children = child;
          expandedKeys.push(vnode.$vnode.key);
          defaultExpandedKeys.value = expandedKeys;

          emit("expand", {
            expandedKeys: expandedKeys,
            expanded: true,
            node: item,
            vnode,
          });
        });
      }
    };
    const onDragStart = (event, key, data, parentData) => {
      // console.log(vnode);
      dragNode.value = data;
      dragParentNode.value = parentData;
      let index = defaultExpandedKeys.value.indexOf(key);
      if (index > -1) {
        defaultExpandedKeys.value.splice(index, 1);
      }

      emit("dragstart", { event, node: defaultData });
    };
    const onDragEnd = (event, { node }) => {
      emit("dragend", { event, node });
    };
    const onDragEnter = (event, { node }) => {
      emit("dragenter", {
        event,
        node,
        expandedKeys: defaultExpandedKeys.value,
      });
    };
    const onDragLeave = (event, { node }) => {
      emit("dragleave", { event, node });
    };

    const onDrop = (event, { node }) => {
      let parentNode = dragParentNode.data;
      if (
        dragNode.key !== undefined &&
        node.key != dragNode.key &&
        node.key != parentNode.key
      ) {
        //remove self

        let index = parentNode.children.indexOf(dragNode);
        parentNode.children.splice(index, 1);

        // parentNode.reload = false;
        // if not children ,remove expand key
        if (!parentNode.children.length) {
          let index = defaultExpandedKeys.value.indexOf(parentNode.key);
          index > -1 && defaultExpandedKeys.value.splice(index, 1);
        }
        // parentNode.reload = true;

        // append self
        if (!node.children || !node.children.length) {
          node.children = [];
          defaultExpandedKeys.value.indexOf(node.key) < 0 &&
            defaultExpandedKeys.value.push(node.key);
        }
        let keys = node.children.map((i) => i.key);
        if (keys.indexOf(node.key) < 0) {
          node.children.push(dragNode);
        }
      }

      emit("drop", { event, node, dragNode });

      dragNode.value = {};
      dragParentNode.value = {};
    };
    provide("Tree", {
      defaultData: defaultData,
      defaultSelectedKeys: defaultSelectedKeys,
      defaultExpandedKeys: defaultExpandedKeys,
      defaultCheckedKeys: defaultCheckedKeys,
      halfCheckedKeys: halfCheckedKeys,

      hasLoad,
      onCheck,
      onSelect,
      onExpand,
      onDragStart,
      onDragEnd,
      onDragEnter,
      onDragLeave,
      onDrop,
    });

    const renderChild = () => {
      let children = getChildren(slots.default?.());
      let props = {
        props: {
          showLine: ps.showLine,
          showIcon: ps.showIcon,
          showExtra: ps.showExtra,
          multiple: ps.multiple,
          checkStrictly: ps.checkStrictly,
          directory: ps.directory,
          draggable: ps.draggable,
          expandedAll: ps.expandedAll,
          checkable: ps.checkable,
        },
      };
      if (children.length) {
        return children.map((vnode, i) => {
          // console.log(vnode)
          if (vnode.data.key == null || vnode.data.key === "") {
            vnode.data.key = `n_${i}`;
            vnode.key = `n_${i}`;
          }
          return cloneVNode(vnode, props);
        });
      }
      return defaultData.value.map((item, i) => {
        let key = item.key;
        if (key == null || key === "") {
          key = `n_${i}`;
          item.key = key;
        }
        return <TreeNode data={item} key={key} {...props} />;
      });
    };

    onMounted(() => {
      setCheckHalf();
      window.addEventListener("keydown", handleKeyDown);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    });

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
          {renderChild()}
        </div>
      );
    };
  },
};

export default withInstall(Tree);

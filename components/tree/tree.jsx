import TreeNode from './node.jsx'
import { getChild } from '../_tool/utils.js'
import cloneVNode from '../_tool/clone.js'
export default {
  name: 'Tree',
  props: {
    data: Array,
    selectedKeys: Array,
    expandedKeys: Array,
    checkedKeys: Array,
    checkable: Boolean,
    draggable: Boolean,
    showLine: Boolean,
    showIcon: { type: Boolean, default: true },
    showExtra: { type: Boolean, default: false },
    directory: Boolean,
  },
  provide() {
    return {
      Tree: this,
    }
  },
  data() {
    return {
      defaultData: this.data || [],
      defaultSelectedKeys: this.selectedKeys || [],
      defaultExpandedKeys: this.expandedKeys || [],
      defaultCheckedKeys: this.checkedKeys || [],
      ctrlKeyEntered: false,
      halfCheckedKeys: [],
      dragNode: null,
      dragParentNode: null,
    }
  },
  watch: {
    data(val, Oval) {
      this.defaultData = val || []
    },
    selectedKeys(val, Oval) {
      this.defaultSelectedKeys = val || []
    },
    expandedKeys(val, Oval) {
      this.defaultExpandedKeys = val || []
    },
    checkedKeys(val, Oval) {
      this.defaultCheckedKeys = val || []
    },
  },
  created() {
    //Init key
    (this.defaultData || []).forEach(item => {
      this.setKeys(item);
    });
    //Init half check
    this.setCheckHalf()
  },

  methods: {
    setCheckHalf() {
      this.checkable && (this.defaultCheckedKeys || []).forEach(key => {
        this.setParentHalf(this.defaultData, key)
      })
    },
    setKeys({ children = [] }, key = 'n') {
      let index = 1
      for (let i = 0; i < children.length; i++) {
        let item = children[i]
        item.key = item.key || `${key}_${index++}`
        this.setKeys(item, item.key)
      }
    },
    setParentHalf(data = [], key) {
      for (let i = 0; i < data.length; i++) {
        let item = data[i]
        let { children = [], disabled } = item
        let keys = children.filter(child => !child.disabled).map(child => child.key)

        if (keys.indexOf(key) >= 0 && this.defaultCheckedKeys.indexOf(item.key) < 0) { //符合要求
          this.halfCheckedKeys.push(item.key)
          this.setParentHalf(this.defaultData, item.key)
          break;
        } else {
          this.setParentHalf(children, key)
        }
      }
    },
    onCheck(checked, key, node) {
      this.$emit('check', {
        checkedKeys: this.defaultCheckedKeys,
        checked,
        node
      })
    },
    onSelect(key, node) {
      let { defaultSelectedKeys, ctrlKeyEntered } = this
      let index = defaultSelectedKeys.indexOf(key)
      if (ctrlKeyEntered) {
        index > -1 ? defaultSelectedKeys.splice(index, 1) : defaultSelectedKeys.push(key)
      } else {
        defaultSelectedKeys = index > -1 ? [] : [key]
      }
      this.defaultSelectedKeys = defaultSelectedKeys
      this.$emit('select', {
        selectedKeys: defaultSelectedKeys,
        selected: index < 0,
        node
      })
    },
    onExpand(key, item, vnode) {
      if (item.children && item.children.length) {
        let { defaultExpandedKeys } = this
        let index = defaultExpandedKeys.indexOf(key)
        index > -1 ? defaultExpandedKeys.splice(index, 1) : defaultExpandedKeys.push(key)
        this.defaultExpandedKeys = defaultExpandedKeys

        this.$emit('expand', {
          expandedKeys: defaultExpandedKeys,
          expanded: index < 0,
          node: item,
          vnode
        })
      } else if ('load-data' in this.$listeners && !item.isLeaf && !vnode.loading) {
        vnode.loading = true

        this.$emit('load-data', item, child => {
          vnode.loading = false
          item.children = child
          this.defaultExpandedKeys.push(vnode.$vnode.key)

          this.$emit('expand', {
            expandedKeys: this.defaultExpandedKeys,
            expanded: true,
            node: item,
            vnode
          })
        })
      }
    },
    // onDragStart(e, { node, parent }) {
    onDragStart(event, { defaultData, VNode }) {
      this.dragNode = defaultData
      this.dragParentNode = VNode

      let index = this.defaultExpandedKeys.indexOf(defaultData.key)
      if (index > -1) {
        this.defaultExpandedKeys.splice(index, 1)
      }

      this.$emit('dragstart', { event, node: defaultData })
    },
    onDragEnd(event, { node, parent }) {
      this.$emit('dragend', { event, node })
    },
    onDragEnter(event, { node, parent }) {
      this.$emit('dragenter', { event, node, expandedKeys: this.defaultExpandedKeys })
    },
    onDragLeave(event, { node, parent }) {
      this.$emit('dragleave', { event, node })
    },

    onDrop(event, { node }) {
      let dragParentNode = this.dragParentNode.defaultData
      let { dragNode } = this
      if (dragNode && node.key != dragNode.key && node.key != dragParentNode.key) {

        //remove self

        let index = dragParentNode.children.indexOf(dragNode)
        dragParentNode.children.splice(index, 1)

        this.dragParentNode.reload = false
        // if not children ,remove expand key
        if (!dragParentNode.children.length) {
          let index = this.defaultExpandedKeys.indexOf(dragParentNode.key)
          index > -1 && this.defaultExpandedKeys.splice(index, 1)
        }
        this.dragParentNode.reload = true


        // append self
        if (!node.children || !node.children.length) {
          node.children = [];
          this.defaultExpandedKeys.indexOf(node.key) < 0 && this.defaultExpandedKeys.push(node.key)
        }
        let keys = node.children.map(i => i.key)
        if (keys.indexOf(node.key) < 0) {
          node.children.push(dragNode)
        }

        this.dragNode = null
        this.dragParentNode = null

      }

      this.$emit('drop', { event, node, dragNode })
    },
    renderChild() {
      let { defaultData, $slots } = this
      let childs = getChild($slots.default)
      let index = 0
      if (childs.length) {
        return childs.map((vnode, i) => {
          let ele = cloneVNode(vnode)
          let data = ele.data.props.data
          if (data) {
            const key = data.key || `n_${index++}`
            data.key = key
            return <TreeNode data={data} key={key} />
          }
        })
      }
      return defaultData.map((item, i) => {
        const key = item.key || `n_${index++}`
        item.key = key
        return <TreeNode data={item} key={key} />
      })
    }
  },
  render() {
    let { showLine, directory } = this
    return (<div class={["k-tree", {
      'k-tree-show-line': showLine,
      'k-tree-directory': directory
    }]}>
      {this.renderChild()}
    </div>)
  }
}
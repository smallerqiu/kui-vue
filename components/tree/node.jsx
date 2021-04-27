import Icon from '../icon'
import { Checkbox } from '../checkbox'
import TreeNode from './node.jsx'
import { getTranstionProp } from '../base/transition'
import { getChild } from '../_tool/utils'
export default {
  name: 'TreeNode',
  props: {
    data: Object,
    checkable: Boolean
  },
  provide() {
    return {
      parent: this,
    }
  },
  inject: {
    Tree: { default: null },
    parent: { default: null },
  },
  methods: {
    setChildCheck(data) {
      if (data.children && data.children.length) {
        data.children.forEach(child => {
          // if (!child.disabled) {
          let indeterminate = false
          let hasChilds = child.children && child.children.length

          if (data.checked && hasChilds) {
            let disabledCount = child.children.filter(x => x.disabled).length
            indeterminate = disabledCount > 0 && disabledCount != child.children.length;
          }

          this.$set(child, 'indeterminate', indeterminate)
          this.$set(child, 'checked', this.data.checked && !child.disabled)
          this.setChildCheck(child)
        })
      }
    },
    handleCheck(c) {
      this.$set(this.data, 'checked', c.target.checked)
      this.data.indeterminate = false

      this.setChildCheck(this.data)

      if (this.Tree && !this.data.disabled) {
        this.Tree.checked(this.data)
      }
    },
    handleSelect() {
      if (this.Tree && !this.data.disabled) {
        this.Tree.selected(this.data)
      }
    },
    handleExpand() {
      let { loading, children } = this.data
      let hasChilds = children && children.length > 0
      if (loading !== undefined && !hasChilds) {
        this.data.loading = true
        this.Tree && this.Tree.load(this.data)
      } else if (hasChilds) {
        this.$set(this.data, 'expand', !this.data.expand)
        // this.data.expand = !this.data.expand
      }
      this.Tree && this.Tree.expand(this.data)
    }
  },
  render(h) {
    let { expand = false, loading, checked = false, disabled, indeterminate, icon, selected, title, children } = this.data
    let itemNode = [], { Tree, checkable } = this;
    let hasChilds = children && children.length > 0

    if (hasChilds || loading !== undefined) {
      let arrowCls = ['k-tree-arrow', { 'k-tree-arrow-open': expand }]
      let arrowNode = <span class={arrowCls} onClick={this.handleExpand}><Icon type={loading ? 'sync' : 'chevron-forward'} spin={loading} /></span>
      itemNode.push(arrowNode)
    } else {
      itemNode.push(<span class="k-tree-commes"></span>)
    }
    if (checkable) {
      let props = {
        props: { checked, disabled, indeterminate },
        on: { change: this.handleCheck,/*  input: e => { this.$set(this.data, 'checked', e) } */ }
      }
      itemNode.push(<Checkbox {...props} />)
    }
    let iconNode = null
    if (icon) {
      iconNode = <Icon type={icon} class="k-tree-icon" />;
    }

    let titleCls = ['k-tree-title', { 'k-tree-title-selected': selected }]
    let innerNode = null
    if (Tree && Tree.renderContent) {
      innerNode = Tree.renderContent(h, { root: Tree, node: this, data: this.data })
    } else if (Tree.$scopedSlots.default) {
      innerNode = Tree.$scopedSlots.default(Tree, this, this.data)
    } else {
      innerNode = [iconNode, title]
    }
    itemNode.push(<span class={titleCls} tabIndex="-1" onClick={this.handleSelect}>{innerNode}</span>)

    let childs = null
    if (expand && hasChilds) {
      childs = children.map((t, i) => <TreeNode key={i} data={t} checkable={checkable} />)
    }
    let onProps = getTranstionProp('k-tree-slide')

    return (
      <div class={["k-tree-children", { 'k-tree-children-has-child': hasChilds }]}>
        <div class={['k-tree-item', { 'k-tree-item-disabled': disabled }]}>{itemNode}</div>
        <transition-group {...onProps}>{childs}</transition-group>
      </div>)
  }
}
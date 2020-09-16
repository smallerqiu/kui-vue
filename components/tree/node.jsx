import Icon from '../icon'
import { Checkbox } from '../checkbox'
import TreeNode from './node.jsx'
import { getTranstionProp } from '../_tool/transition'

export default {
  name: 'TreeNode',
  props: {
    data: Object,
    checkable: Boolean
  },
  inject: {
    Tree: { default: null }
  },
  methods: {
    setChildCheck(data) {
      data.indeterminate = false
      if (data.children && data.children.length) {
        data.children.forEach(child => {
          if (!child.disabled) {
            child.indeterminate = false
            this.$set(child, 'checked', this.data.checked)
            this.setChildCheck(child)
          }
        })
      }
    },
    handleCheck() {
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
        this.data.expand = !this.data.expand
      }
      this.Tree && this.Tree.expand(this.data)
    }
  },
  render() {
    let { expand = false, loading, checked = false, disabled, indeterminate, icon, selected, title, children } = this.data
    let itemNode = []
    let hasChilds = children && children.length > 0
    if (hasChilds || loading !== undefined) {
      let arrowCls = ['k-tree-arrow', { 'k-tree-arrow-open': expand }]
      let arrowNode = <span class={arrowCls} onClick={this.handleExpand}><Icon type={loading ? 'ios-sync' : 'ios-arrow-forward'} spin={loading} /></span>
      itemNode.push(arrowNode)
    } else {
      itemNode.push(<span class="k-tree-commes"></span>)
    }
    let { checkable } = this
    if (checkable) {
      let props = {
        props: { checked, disabled, indeterminate },
        on: { change: this.handleCheck, input: e => { this.$set(this.data, 'checked', e) } }
      }
      itemNode.push(<Checkbox {...props} />)
    }

    if (icon) {
      itemNode.push(<span class="k-tree-icon"><Icon type={icon} /></span>)
    }

    let titleCls = ['k-tree-title', { 'k-tree-title-selected': selected }]
    itemNode.push(<span class={titleCls} tabIndex="-1" onClick={this.handleSelect}>{title}</span>)

    let childs = null
    if (expand && hasChilds) {
      childs = children.map((t, i) => <TreeNode key={i} data={t} checkable={checkable} />)
    }
    let onProps = getTranstionProp('k-tree-slide')
    return (
      <div class="k-tree-children">
        <div class={['k-tree-item', { 'k-tree-item-disabled': disabled }]}>{itemNode}</div>
        <transition-group {...onProps}>{childs}</transition-group>
      </div>)
  }
}
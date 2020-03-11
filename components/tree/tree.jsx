import TreeNode from './node.jsx'

export default {
  name: 'Tree',
  props: {
    data: Array,
    checkable: Boolean,
    dragable: Boolean
  },
  provide() {
    return {
      Tree: this,
    }
  },
  methods: {
    load(data) {
      this.$emit('load-data', data, child => {
        this.$set(data, 'loading', false)
        if (child && child.length) {
          data.children = child
          this.$set(data, 'expand', !data.expand)
        }
      })
    },
    expand(data) {
      this.$emit('expand', data)
    },
    parentChecked(parents, item) {
      parents.forEach(childs => {
        let { children, disabled } = childs
        if (!disabled) {
          if (children && children.indexOf(item) >= 0) {
            let checkLen = children.filter(child => child.checked).length
            let halfLen = children.filter(child => child.indeterminate).length
            let isCheckAll = children.length == checkLen
            this.$set(childs, 'checked', isCheckAll)
            this.$set(childs, 'indeterminate', (checkLen > 0 || halfLen > 0) && !isCheckAll)
            this.parentChecked(this.data, childs)
          } else {
            if (children && children.length > 0) {
              this.parentChecked(children, item)
            }
          }
        }
      })
    },
    checked(data) {
      //set parent check 
      this.parentChecked(this.data, data)
      this.$emit('check', data)
    },

    selected(data) {
      let setSelected = (datas) => {
        datas.forEach(item => {
          let selected = item == data ? !item.selected : false
          this.$set(item, 'selected', selected)
          if (item.children && item.children.length > 0) {
            setSelected(item.children)
          }
        })
      }
      setSelected(this.data)
      this.$emit('select', data.selected ? [data] : [])
    }
  },
  render() {
    return (<div class="k-tree">
      {this.data.map((t, i) => <TreeNode data={t} key={i} checkable={this.checkable} />)}
    </div>)
  }
}
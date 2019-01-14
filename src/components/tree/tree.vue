<template>
  <div class="k-tree">
    <TreeNode v-for="(item,i) in data" :data="item" :key="i" :checkbox="checkbox">
    </TreeNode>
    <span v-if="!data||!data.length" class="tree-nodata">暂无数据...</span>
  </div>
</template>
<script>
import emitter from '@/mixins/emitter'
import TreeNode from './node'
export default {
  name: 'Tree',
  components: { TreeNode },
  mixins: [emitter],
  props: {
    data: Array,
    checkbox: Boolean,
  },
  mounted() {
    this.$on('tree-selected', this.selected)
    this.$on('tree-check', this.check)
    this.$on('tree-expand', this.expand)
    this.$on('tree-load', this.load)
  },
  methods: {
    load(obj) {
      this.$emit('load-data', obj, children => {
        this.$set(obj, 'loading', false)
        if (children && children.length) {
          obj.children = children
          this.$set(obj, 'expand', !obj.expand)
        }
      })
    },
    expand(obj) {
      this.$emit('expand', obj)
    },
    check(obj) {
      let checked = []
      //递归子集，同步选中选中状态
      let checkChild = (data) => {
        this.$set(data, 'indeterminate', false)
        if (data.children && data.children.length) {
          data.children.forEach(child => {
            this.$set(child, 'checked', data.checked)
            this.$set(child, 'indeterminate', false)
            child.checked && checked.push(child)
            checkChild(child)
          })
        }
      }
      checkChild(obj)
      //
      let checkAll = true //子集是否全选
      let checkOne = false //子集是否有一个被选中
      let getChildChecked = (parent) => {
        if (parent.children && parent.children.length) {
          parent.children.forEach(child => {
            child.checked ? checkOne = true : checkAll = false
            getChildChecked(child)
          })
        }
      }
      // 递归父级，判断子集选中状态，
      let checkParent = (parent, child) => {
        parent.forEach(p => {
          if (child._pid == p._uid) {
            getChildChecked(p)
            this.$set(p, 'indeterminate', checkAll || !checkOne ? false : true)
            this.$set(p, 'checked', checkAll ? true : false)
            checkParent(this.data, p)
          }
          if (p.children && p.children.length) {
            checkParent(p.children, child)
          }
        })
      }
      checkParent(this.data, obj)

      let data = this.getChecked(this.data)
      this.$emit('check', data)
    },
    getChecked(data) {
      let checked = []
      let check = (data) => {
        data.forEach(child => {
          child.checked && checked.push(child)
          if (child.children && child.children.length) {
            check(child.children)
          }
        })
      }
      check(data)
      return checked;
    },
    selected(obj) {
      let select = (data) => {
        data.forEach(item => {
          this.$set(item, 'selected', obj === item)
          if (item.children && item.children.length) {
            select(item.children)
          }
        });
      }
      obj.selected && select(this.data)
      this.$emit('select', obj.selected ? [obj] : [])
    }
  }
}
</script>


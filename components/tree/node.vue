<template>
  <Collapse>
    <ul ref="children" class="k-tree-children">
      <li>
        <span :class="arrowClass" @click="handelExpand">
          <i :class="!data.loading?'k-ion-ios-arrow-forward':'k-ion-ios-sync k-load-loop'"></i>
        </span>
        <Checkbox v-if="checkbox" :disabled="data.disabled" v-model="data.checked" @change="handelCheck" :indeterminate="data.indeterminate" />
        <span>
          <Icon :type="data.icon" v-if="data.icon"></Icon>
        </span>
        <span :class="titleClass" @click="handelSelect">{{data.title}}</span>
        <template v-if="data.expand">
          <TreeNode v-for="(item ,i) in data.children" :key="i" :data="item" :checkbox="checkbox"></TreeNode>
        </template>
      </li>
    </ul>
  </Collapse>
</template>
<script>
import emitter from '@/mixins/emitter'
import Collapse from '../_tool/collapse.js'
export default {
  name: 'TreeNode',
  mixins: [emitter],
  components: { Collapse },
  props: {
    data: Object,
    checkbox: Boolean,
  },
  computed: {
    arrowClass() {
      return [
        'k-tree-arrow', {
          ['k-tree-arrow-open']: this.data.expand,
        }
      ]
    },
    titleClass() {
      return [
        'k-tree-title', {
          ['k-tree-title-selected']: this.data.selected
        }
      ]
    }
  },
  mounted() {
    // this.$set(this.data, 'indeterminate', false)
    this.$set(this.data, '_pid', this.$parent._uid)
    this.$set(this.data, '_uid', this._uid)
  },
  methods: {
    handelCheck(state) {
      if (this.data.disabled) return
      // this.$set(this.data, 'checked', !this.data.checked)
      this.dispatch('Tree', 'tree-check', this.data)
    },
    handelSelect() {
      if (this.data.disabled) return
      this.$set(this.data, 'selected', !this.data.selected)
      this.dispatch('Tree', 'tree-selected', this.data)
    },
    handelExpand() {
      if (this.data.disabled) return;
      // let root = this.getParent('Tree')
      // let loadData = root.$listeners.loadData
      //async load
      if (this.data.loading !== undefined && (!this.data.children || !this.data.children.length)) {
        this.$set(this.data, 'loading', true)
        this.dispatch('Tree', 'tree-load', this.data)

        // this.$emit('loadData', this.data, children => {
        //     this.$set(this.data, 'loading', false)
        //     if (children && children.length) {
        //         this.data.children = children
        //         this.$set(this.data, 'expand', !this.data.expand)
        //     }
        // })
        // loadData()
      } else if (this.data.children && this.data.children.length) {
        this.$set(this.data, 'expand', !this.data.expand)
      }
      this.dispatch('Tree', 'tree-expand', this.data)
    }
  }
}
</script>


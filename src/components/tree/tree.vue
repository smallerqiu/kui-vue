<template>
    <div class="k-tree">
        <TreeNode v-for="(item,i) in data" :data="item" :key="i" :checkbox="checkbox">
        </TreeNode>
        <span v-if="!data||!data.length">暂无数据...</span>
    </div>
</template>
<script>
import emitter from '../../mixins/emitter'
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
    },
    methods: {
        expand(obj) {
            this.$emit('expand', obj)
        },
        check(obj) {
            let checked = (data) => {
                data.forEach(item => {
                    this.$set(item, 'checked', obj.checked)
                    if (item.children && item.children.length) {
                        checked(item.children)
                    }
                });
            }
            if (obj.children && obj.children.length) checked(obj.children)
            this.$emit('check', obj.checked ? [obj] : [])
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


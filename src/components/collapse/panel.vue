<template>
    <div :class="classes">
        <div class="k-collapse-header" @click="handelClick">
            <Icon type="ios-arrow-right" />{{title}}</div>
        <Collapse>
            <div class="k-collapse-content" v-show="active">
                <div class="k-collapse-content-box">
                    <slot></slot>
                </div>
            </div>
        </Collapse>
    </div>
</template>
<script>
import emitter from '../../mixins/emitter'
import Collapse from './collapse.js'
export default {
    name: 'Panel',
    mixins: [emitter],
    components: { Collapse },
    props: {
        title: { type: String, required: true },
        name: String
    },
    data() {
        return {
            active: false
        }
    },
    computed: {
        classes() {
            return ['k-collapse-item', {
                ['k-collapse-item-active']: this.active
            }]
        }
    },
    methods: {
        handelClick() {
            this.active = !this.active
            this.dispatch('Collapse', 'collapse-accrodion', this)
        }
    },
    mounted() {
        this.dispatch('Collapse', 'collapse-add', this)
    },
    beforeDestroy() {
        this.dispatch('Collapse', 'collapse-remove', this)
    }

}
</script>


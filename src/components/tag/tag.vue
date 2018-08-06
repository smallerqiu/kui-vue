<template>
    <transition name="fade">
        <div :class="classes" v-if="visible" :style="styles" @click="handle">
            <span class="k-tag-text">
                <slot></slot>
            </span>
            <i class="k-ion-md-close" v-if="closeable" @click="close" />
        </div>
    </transition>
</template>
<script>
export default {
    name: 'Tag',
    props: {
        closeable: { type: Boolean, default: false },
        color: String
    },
    data() {
        return {
            visible: true,
            isDefaultColor: ['blue', 'red', 'orange', 'gray', 'green'].indexOf(this.color) >= 0
        }
    },
    computed: {
        classes() {
            return ['k-tag', {
                [`k-tag-${this.color}`]: this.isDefaultColor,
                ['k-tag-has-color']: this.color
            }]
        },
        styles() {
            return this.isDefaultColor ? {} : { backgroundColor: this.color }
        }
    },
    methods: {
        handle(e) {
            this.$emit('click', e)
        },
        close(e) {
            this.$emit('close', e)
            this.visible = false
        }
    }
}
</script>

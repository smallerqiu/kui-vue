<template>
    <div v-winScroll="scroll">
        <div :style="styles" :class="classes" ref="affix">
            <slot></slot>
        </div>
        <div :style="blobStyle" v-if="showBlob" ref="blob"></div>
    </div>
</template>

<script>
import winScroll from '../../directives/winScroll'
import emitter from '../../mixins/emitter'
export default {
    name: 'Affix',
    directives: {
        winScroll
    },
    mixins: [emitter],
    props: {
        offsetTop: { type: [String, Number], default: 0 },
        offsetBottom: [String, Number]
    },
    data() {
        return {
            showBlob: false,
            width: 0,
            height: 0,
        }
    },
    computed: {
        classes() {
            return [{ ['k-affix']: this.showBlob }]
        },
        blobStyle() {
            return {
                width: `${this.width}px`,
                height: `${this.height}px`
            }
        },
        styles() {
            let style = {}
            if (this.offsetBottom) {
                style.bottom = `${this.offsetBottom}px`
            } else {
                style.top = `${this.offsetTop}px`
            }
            return style
        }
    },
    methods: {
        scroll() {
            if (this.showBlob) {
                let pos = this.$refs.blob.getBoundingClientRect()
                //unfixedBottom
                if (this.offsetBottom !== undefined && this.offsetBottom >= 0) {
                    let bodyPos = document.body.getBoundingClientRect()
                    if (pos.top + pos.height <= bodyPos.height) {
                        this.showBlob = false
                        this.$emit('change', false)
                    }
                    return;
                }
                //unfixedTop
                if (pos.top >= this.offsetTop) {
                    this.showBlob = false
                    this.$emit('change', false)
                }
            } else {
                let pos = this.$refs.affix.getBoundingClientRect()
                //fixedBottom
                if (this.offsetBottom >= 0) {
                    // console.log(pos)
                    let bodyPos = document.body.getBoundingClientRect()
                    if (pos.top + pos.height >= bodyPos.height) {
                        this.showBlob = true
                        this.$emit('change', true)
                        this.width = pos.width
                        this.height = pos.height
                    }
                    return; //只能存在一种状态 bottom优先
                }
                //fixedTop
                if (pos.top <= this.offsetTop) {
                    this.$emit('change', true)
                    this.showBlob = true
                    this.width = pos.width
                    this.height = pos.height
                }

            }
        }
    }
}
</script>
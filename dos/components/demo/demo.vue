<template>
    <div :class="classes" :style="styles" v-resize="setHeight" ref="dom">
        <div class="k-demo-main" ref="demo">
            <div class="k-content">
                <slot name="content"></slot>
            </div>
            <div class="k-desc">
                <a class="k-desc-title">{{title}}</a>
                <div class="k-desc-content">
                    <slot name="desc"></slot>
                </div>
                <a class="k-code-expan" @click="toggle">
                    <Icon :type="icons" />
                </a>
            </div>
        </div>
        <div class="k-demo-line"></div>
        <Code :style="codeStyles" ref="code" :lang="lang">
            <slot name="code"></slot>
        </Code>
    </div>
</template>
<script>
import resize from '../../../src/directives/winScroll'
export default {
    directives: { resize },
    name: 'Demo',
    props: {
        layout: { type: String, default: 'left-right' },
        title: String,
        lang: String,
    },
    data() {
        return {
            domHeight: 0,
            demoHeight: 0,
            codeHeight: '0',
            expand: false,
        }
    },
    computed: {
        icons() {
            return this.expand ? 'code-working' : 'code'
        },
        classes() {
            return ['k-demo', {
                [`k-demo-${this.layout}`]: this.layout
            }]
        },
        styles() {
            return this.layout == 'left-right' ? { height: this.expand ? `${this.domHeight}px` : `${this.demoHeight}px` } : {}
        },
        codeStyles() {
            return this.layout == 'left-right' ? {} : { height: `${this.codeHeight}` }
        }
    },
    methods: {
        setHeight() {
            if (this.layout == 'left-right') {
                this.domHeight = this.$refs.dom.scrollHeight
                this.demoHeight = this.$refs.demo.scrollHeight
            }
        },
        toggle() {
            let expand = this.expand
            this.expand = !expand
            if(this.layout=='up-down'){
                this.codeHeight = !this.expand ? 0 : 'auto';
            }
            // console.log(this.$refs.code.$el.scrollHeight)
        }
    },
    mounted() {
        this.setHeight()
    }
}
</script>

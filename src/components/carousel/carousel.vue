<template>
    <div :class="classes" v-resize="resize" ref="dom">
        <div class="k-carousel-list" :style="styles">
            <slot></slot>
        </div>
        <span class="k-carousel-arrow-left" @click="setCurrent('left')" v-if="!vertical">
            <Icon type="chevron-left" />
        </span>
        <span class="k-carousel-arrow-right" @click="setCurrent('right')" v-if="!vertical">
            <Icon type="chevron-right" />
        </span>
        <ul :class="dotsClass">
            <li v-for="(dot,index) in children" :key="index" :class="[{'k-carousel-dots-active':currentIndex==index}]" @click="check(index)"></li>
        </ul>
    </div>
</template>
<script>
import Icon from "../icon";
import resize from '../../directives/winScroll'
export default {
    name: 'Carousel',
    components: { Icon },
    directives: { resize },
    props: {
        value: { type: [Number, String], default: 0 },
        loop: { type: Boolean, default: true },
        autoplay: Boolean,
        speed: { type: [String, Number], default: 2000 },
        vertical: Boolean,
        dotsType: { type: String, default: 'rect' },
        dots: { type: Boolean, default: true }
    },
    data() {
        return {
            currentIndex: this.value,
            children: [],
            itemWidth: 0,
            itemHeight: 0,
            listWidth: 0,
            listHeight: 0,
            autotimer: null,
            autoFn: null
        }
    },
    watch: {
        value(v){
            this.currentIndex = v
        },
        itemWidth(w) {
            this.listWidth = w * this.children.length
            this.children.forEach(child => {
                child.width = w
            })
        }
    },
    computed: {
        classes() {
            return ['k-carousel', {
                [`k-carousel-vertical`]: this.vertical
            }]
        },
        dotsClass() {
            return ['k-carousel-dots', {
                [`k-carousel-dots-radius`]: this.dotsType == 'radius'
            }]
        },
        styles() {
            let posX = 0
            let posY = 0
            let style = {}
            if (this.vertical) {
                style.height = `${this.listHeight}px`
                posY = this.currentIndex * this.itemHeight * -1
            } else {
                posX = this.currentIndex * this.itemWidth * -1
                style.width = `${this.listWidth}px`
            }
            style.transform = `translateX(${posX}px) translateY(${posY}px)`
            return style
        }
    },
    created() {
        this.$on('carousel-add', this.add)
        this.$on('carousel-remove', this.remove)
    },
    mounted() {
        if (!this.vertical) {
            this.itemWidth = this.$refs.dom.offsetWidth
            this.listWidth = this.itemWidth * this.children.length
        } else {
            this.listHeight = this.$refs.dom.offsetHeight
            this.itemHeight = this.listHeight / this.children.length
            this.$refs.dom.style.height = this.itemHeight + 'px'
        }
        // this.children.forEach(child => {
        //     child.width = this.itemWidth
        // })
        if (this.autoplay) {
            this.autoFn = () => { this.setCurrent('right') }
            this.autotimer = setInterval(this.autoFn, this.speed);
        }
    },
    methods: {
        setCurrent(type) {
            if (type == 'left') {
                if (!this.loop && this.currentIndex == 0) {
                    return;
                }
                if (this.currentIndex == 0) {
                    this.currentIndex = this.children.length - 1
                } else {
                    this.currentIndex--
                }
            }
            if (type == 'right') {
                if (this.autoplay) {
                    clearInterval(this.autotimer)
                }
                if (!this.loop && this.currentIndex == this.children.length - 1) {
                    return;
                }
                if (this.currentIndex == this.children.length - 1) {
                    this.currentIndex = 0
                } else {
                    this.currentIndex++
                }
                if (this.autoplay) {
                    this.autotimer = setInterval(this.autoFn, this.speed);
                }
            }
        },
        check(index) {
            this.currentIndex = index
        },
        resize() {
            if (!this.vertical)
                this.itemWidth = this.$refs.dom.offsetWidth
        },
        add(obj) {
            this.children.push(obj)
        },
        remove(obj) {
            this.children.splice(this.children.indexOf(obj), 1)
        }
    }
}
</script>


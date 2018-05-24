<template>
    <div class="k-scroll" tabindex="0" @mousewheel="mouseWheel" ref="wrap" @keydown="keyDown" @keyup="keyUp" @mouseover="mouseOver" @resize="resize">
        <div class="k-scroll-view" :style="styles" ref="inner" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <slot></slot>
        </div>
        <div class="k-scroll-vertical-bar" :style="barStyles" v-show="showVerticalBar" @mousedown="barMouseDown" @mouseup="barMouseUp" @mousemove="barMouseMove"></div>
        <div class="k-scroll-horizontal-bar" v-show="showHorizontalBar"></div>
    </div>
</template>
<script>
export default {
    name: 'Scroll',
    props: {
        scrollX: { type: [Number, String], default: 0 },
        scrollY: { type: [Number, String], default: 0 },
        router: Boolean,
    },
    data() {
        return {
            showHorizontalBar: false,
            showVerticalBar: false,
            viewY: this.scrollY,
            barHeight: 0,
            wrapHeight: 0,
            innerHeight: 0,
            barY: 0,
            viewX: scrollX,
            isReload: false,
            isBarMouseDown: false,
            moveY: 0,
            animaded: false
        }
    },
    watch: {
        $route(a, b) {
            if (this.router) {
                this.viewY = 0
                this.barY = 0
            }
        }
    },
    computed: {
        barStyles() {
            return { height: `${this.barHeight}%`, top: `${this.barY}%`, transition: !this.animaded ? 'none' : '' }
        },
        styles() {
            return { top: `${this.viewY}px`, transition: !this.animaded ? 'none' : '' }
        }
    },
    mounted() {
        this.initBar()
        window.addEventListener('mousemove', this.barMouseMove)
        window.addEventListener('mouseup', this.barMouseUp)
        window.addEventListener('resize', this.resize)
    },
    beforeDestroy() {
        window.removeEventListener('mousemove', this.barMouseMove)
        window.removeEventListener('mouseup', this.barMouseUp)
        window.removeEventListener('resize', this.resize)
    },
    methods: {
        resize() {
            this.animaded = false
            this.initBar()
            // this.setBar(0)
            let wrapHeight = this.wrapHeight
            let innerHeight = this.innerHeight
            if (wrapHeight - this.viewY > innerHeight) {
                this.viewY = (innerHeight - wrapHeight) * -1
                this.barY = (this.viewY * wrapHeight / innerHeight) / wrapHeight * 100 * -1
                return
            }
            if (this.viewY > 0) {
                this.viewY = 0
                this.barY = 0
                return;
            }
        },
        initBar() {
            this.wrapHeight = this.$refs.wrap.offsetHeight
            this.innerHeight = this.$refs.inner.scrollHeight
            this.barHeight = (this.wrapHeight / this.innerHeight) * 100
            this.showVerticalBar = this.wrapHeight < this.innerHeight
        },
        setBar(moveY, moveX) {
            //todo 横向滚动 还没时间写，
            let wrapHeight = this.wrapHeight
            let innerHeight = this.innerHeight
            if (wrapHeight >= innerHeight) return;
            if (moveY > 0) { //向上滚动
                if (wrapHeight - this.viewY > innerHeight || wrapHeight - this.viewY + moveY > innerHeight) {
                    this.viewY = (innerHeight - wrapHeight) * -1
                    this.barY = (this.viewY * wrapHeight / innerHeight) / wrapHeight * 100 * -1
                    return
                }
            } else { //向下滚动
                if (this.viewY > 0 || this.viewY - moveY > 0) {
                    this.viewY = 0
                    this.barY = 0
                    return;
                }
            }
            this.viewY -= moveY
            this.barY = (this.viewY * wrapHeight / innerHeight) / wrapHeight * 100 * -1 //移动的距离占总距离的百分比计算
        },
        mouseOver() {
            this.$refs.wrap.focus()
            this.initBar()
        },
        mouseWheel(e) {
            this.animaded = false
            this.$emit('mousewheel', e)
            let y = e.deltaY
            this.setBar(y)
        },
        keyDown(e) {
            this.animaded = true
            let code = e.keyCode
            if (code == 38) { //up
                this.setBar(-50)
                return
            }
            if (code == 40) {  //down
                this.setBar(50)
                return
            }
            if (code == 32) {  //space
                this.setBar(200)
                return
            }
        },
        keyUp() {
            this.animaded = false
        },
        barMouseDown(e) {
            this.isBarMouseDown = true
            this.moveY = e.y
        },
        barMouseUp(e) {
            this.isBarMouseDown = false
        },
        barMouseMove(e) {
            if (this.isBarMouseDown) {
                let wrapHeight = this.wrapHeight
                let innerHeight = this.innerHeight
                let m = e.y - this.moveY
                let move = innerHeight * m / (wrapHeight - this.barHeight) // 更具移动的距离比 总移动距离 等比计算，得出实际将要移动的距离
                this.setBar(move)
                this.moveY = e.y
            }
        },
        touchStart(e) {
            this.$refs.wrap.focus()
            this.initBar()
            this.isBarMouseDown = true
            this.moveY = e.touches[0].clientY
        },
        touchMove(e) {
            e.preventDefault();
            if (this.isBarMouseDown) {
                let wrapHeight = this.wrapHeight
                let innerHeight = this.innerHeight
                let m = e.touches[0].clientY - this.moveY
                // let move = innerHeight * m / (wrapHeight - this.barHeight) // 更具移动的距离比 总移动距离 等比计算，得出实际将要移动的距离
                this.setBar(m * -1)
                this.moveY = e.touches[0].clientY
            }
        },
        touchEnd(e) {
            this.isBarMouseDown = false
        },
    }
}
</script>


<template>
    <div class="k-scroll" tabindex="0" @mousewheel="mouseWheel" ref="wrap" @keydown="keyDown" @keyup="keyUp" @mouseover="mouseOver" @resize="resize">
        <div class="k-scroll-view" :style="viewStyles" ref="inner" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
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
        target: String,
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
            animaded: false,
            Events: null,
        }
    },
    watch: {
        $route(a, b) {
            if(a.path!==b.path && this.target=='window') this.reset()
        }
    },
    computed: {
        barStyles() {
            return { height: `${this.barHeight}%`, top: `${this.barY}%`, transition: !this.animaded ? 'none' : '' }
        },
        viewStyles() {
            return { top: `${this.viewY}px`, transition: !this.animaded ? 'none' : '' }
        }
    },
    mounted() {
        this.initBar()
        window.addEventListener('mousemove', this.barMouseMove)
        window.addEventListener('mouseup', this.barMouseUp)
        window.addEventListener('resize', this.resize)
        window.setWindowScroll = this.setBar
    },
    beforeDestroy() {
        window.removeEventListener('mousemove', this.barMouseMove)
        window.removeEventListener('mouseup', this.barMouseUp)
        window.removeEventListener('resize', this.resize)
        // window.setWindowScroll = null
    },
    methods: {
        reset() {
            this.viewY = 0
            this.barY = 0
        },
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
        setWindowScroll(x, y) {
            if (this.target == 'window') {
                window.scrollX = x || 0
                window.scrollY = y
            }
        },
        setBar(moveY, moveX) {
            // console.log(moveY,moveX)
            //todo 横向滚动 还没时间写，
            let wrapHeight = this.wrapHeight
            let innerHeight = this.innerHeight
            if (wrapHeight >= innerHeight) return;
            let scrollY = 0
            if (moveY > 0) { //向上滚动
                if (wrapHeight - this.viewY > innerHeight || wrapHeight - this.viewY + moveY > innerHeight) {
                    this.viewY = (innerHeight - wrapHeight) * -1
                    scrollY = (this.viewY * wrapHeight / innerHeight) * -1
                    this.setWindowScroll(0, scrollY)
                    this.barY = scrollY / wrapHeight * 100
                    return
                }
            } else { //向下滚动
                if (this.viewY > 0 || this.viewY - moveY > 0) {
                    this.viewY = 0
                    this.barY = 0
                    this.setWindowScroll(0, 0)
                    return;
                }
            }
            this.viewY -= moveY
            scrollY = (this.viewY * wrapHeight / innerHeight) * -1
            this.setWindowScroll(0, scrollY)
            this.barY = scrollY / wrapHeight * 100  //移动的距离占总距离的百分比计算
        },
        mouseOver() {
            // this.$refs.wrap.focus()
            this.initBar()
        },
        mouseWheel(e) {
            this.animaded = false
            this.$emit('mousewheel', e)
            let y = e.deltaY
            this.setBar(y)
        },
        keyDown(e) {
            // this.animaded = true  //事实上滚动的时候 是有一个动画的， 但是动画有延迟回影响自定义事件的触发，也一并延时了。所以这里干掉了动画
            let code = e.keyCode
            let move = 0
            if (code == 38) { //up
                move = -50
            }
            if (code == 40) {  //down
                move = 50
            }
            if (code == 32) {  //space
                move = 500
            }
            this.setBar(move)
            this.emitEvent(e)
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
                this.emitEvent(e)
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
                this.emitEvent(e)
                // let wrapHeight = this.wrapHeight
                // let innerHeight = this.innerHeight
                let m = e.touches[0].clientY - this.moveY
                // let move = innerHeight * m / (wrapHeight - this.barHeight) // 更具移动的距离比 总移动距离 等比计算，得出实际将要移动的距离
                this.setBar(m * -1)
                this.moveY = e.touches[0].clientY
            }
        },
        touchEnd(e) {
            this.isBarMouseDown = false
        },
        //创建一个滚动条事件，当view 滚动的时候，手动触发滚动条事件
        emitEvent(e) {
            this.$emit('mousewheel', e, this.viewY, this.barY)
            if (!this.Events) {
                this.Events = document.createEvent('Events')
                this.Events.initEvent('scroll', false, false);
            }
            this.$nextTick(() => {
                document.dispatchEvent(this.Events)
                window.dispatchEvent(this.Events)
            })
        }
    }
}
</script>


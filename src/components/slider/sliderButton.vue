<template>
    <Tooltip :content="value">
        <div class="k-slider-button" style="styles" @mousedown="mouseDown"></div>
    </Tooltip>
</template>
<script>
import emitter from '../../mixins/emitter'
export default {
    name: 'sliderButton',
    mixins: [emitter],
    props: {

    },
    data() {
        return {
            disabled: false,
            mousedown: false,
            slider: null,
            value: 0,
            left: 0,
            start: { x: 0, y: 0 },
            end: { x: 0, y: 0 }
        }
    },
    computed: {
        styles() {
            return { left: `${this.left}%` }
        }
    }, 
    created(){

        this.slider = this.getParent('Slider')
    },
    mounted() {
        window.addEventListener('mousemove', this.mouseMove)
        window.addEventListener('mouseup', this.mouseUp)
    },
    methods: {
        mouseDown(e) {
            if (this.disabled) {
                return
            }
            console.log(this.slider)
            // console.log(e)
            this.start.x = e.clientX
            this.start.y = e.clientY
            this.mousedown = true
        },
        mouseUp() {
            this.mousedown = false
        },
        mouseMove(e) {
            if (!this.mousedown || this.disabled) {
                return
            }
            let moveX = e.clientX - this.start.x
            let moveY = e.clientY - this.start.Y
            let width = this.slider.offsetWidth
            console.log(moveX, this.slider.step)
            if (moveX > 0) {
                if (this.left >= 100) {
                    this.left = 100
                    return;
                }
                if (moveX >= this.slider.step) {
                    console.log(moveX / width)
                    this.left += moveX / width
                }

            }
            // this.start.x = e.clientX
            // this.start.y = e.clientY
        }
    }
};
</script>

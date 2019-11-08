<template>
    <div class="k-carousel-item" :style="styles">
        <slot></slot>
    </div>
</template>
<script>
import emitter from '@/mixins/emitter'
export default {
    name: 'CarouselItem',
    mixins: [emitter],
    data() {
        return {
            width: 0
        }
    },
    computed: {
        styles() {
            return this.width ? { width: `${this.width}px` } : {}
        }
    },
    mounted() {
        this.dispatch('Carousel', 'carousel-add', this)
    },
    beforeDestroy() {
        this.dispatch('Carousel', 'carousel-remove', this)
    }
}
</script>


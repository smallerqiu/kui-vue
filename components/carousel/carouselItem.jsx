export default {
	name: 'CarouselItem',
	inject: {
		Carousel: { default: null }
	},
	render() {
		let width, height, carousel = this.Carousel
		if (carousel) {
			width = carousel.width
			height = carousel.height
		}
		let styles = { width: `${width}px`, height: `${height}px` }
		return (
			<div class="k-carousel-item" style={styles}>
				{this.$slots.default}
			</div>
		)
	}
} 

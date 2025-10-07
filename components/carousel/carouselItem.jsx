import { withInstall } from '../utils/vue'
const CarouselItem = {
	name: "CarouselItem",
	inject: { "Carousel": {} },
	render() {
		let { width = 0, height = 0 } = this.Carousel;
		const styles = {
			width: width + "px",
			height: height + "px",
		};
		return (
			<div class="k-carousel-item" style={styles}>
				{this.$slots.default}
			</div>
		);
	},
};
export default withInstall(CarouselItem);
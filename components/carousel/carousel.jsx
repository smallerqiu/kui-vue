import Icon from "../icon";
import resize from '../_tool/resize'
import { getChild } from '../_tool/utils'
export default {
	name: 'Carousel',
	directives: { resize },
	props: {
		value: { type: Number, default: 0 },
		loop: Boolean,
		autoplay: Boolean,
		delay: { type: Number, default: 3000 },
		vertical: Boolean,
		dots: { type: Boolean, default: true }
	},
	data() {
		return {
			currentIndex: this.value,
			autotimer: null,
			width: 0,
			height: 0,
			animate: this.value > 0 ? false : true,
			resizing: false,
			playing: false,
		}
	},
	provide() {
		return {
			Carousel: this
		}
	},
	watch: {
		value(v) {
			this.currentIndex = v
		},
	},
	beforeDestroy() {
		clearInterval(this.autotimer)
	},
	methods: {
		next() {
			this.change('right')
		},
		prev() {
			this.change('left')
		},
		autoToPlay() {
			clearInterval(this.autotimer)
			this.autotimer = setInterval(() => {
				this.change('right')
			}, parseInt(this.delay));
		},
		change(type) {
			if (this.playing) return;
			this.animate = true
			let index = this.currentIndex
			if (type == 'left') {
				index -= 1
				index = Math.max(0, index)
			} else if (type == 'right') {
				let length = getChild(this.$slots.default).length
				if (!this.loop) {
					if (index == length - 1) {
						index = 0
					} else
						index += 1
					index = Math.min(length - 1, index)
				}
			} else {
				index = type
			}
			this.currentIndex = index
			this.playing = true
			setTimeout(() => {
				this.playing = false
			}, 600);
		},
		resize() {
			this.animate = false
			let carousel = this.$refs.carousel
			this.width = carousel.offsetWidth
			this.height = carousel.offsetHeight
		}
	},

	mounted() {
		this.$nextTick(e => {
			this.resize()
			this.autoplay && this.autoToPlay()
		})
	},
	render() {
		let { currentIndex, change, vertical } = this
		let childs = getChild(this.$slots.default)
		currentIndex = Math.min(childs.length - 1, currentIndex)
		currentIndex = Math.max(0, currentIndex)
		const classes = ['k-carousel', {
			'k-carousel-vertical': vertical
		}]

		const dotsNode = (
			<ul class="k-carousel-dots">
				{childs.map((e, i) => <li class={{ 'k-carousel-dots-active': currentIndex == i }} onClick={e => change(i)}></li>)}
			</ul>
		)

		let offsetX = 0, offsetY = 0;
		if (!vertical) {
			offsetX = currentIndex * this.width
		} else {
			offsetY = currentIndex * this.height
		}
		const warpperCls = {
			class: 'k-carousel-warpper',
			style: {
				transform: `translateX(-${offsetX}px) translateY(-${offsetY}px)`,
				width: !vertical ? childs.length * this.width + 'px' : '',
				height: vertical ? childs.length * this.height + 'px' : '',
				transitionDuration: !this.animate ? '0s' : ''
			}
		}
		const arrowLeft = <span class="k-carousel-arrow-left" onClick={e => change('left')}>
			<Icon type="chevron-back" />
		</span>
		const arrowRight = <span class="k-carousel-arrow-right" onClick={e => change('right')}>
			<Icon type="chevron-forward" />
		</span>
		const props = {
			class: classes,
			ref: 'carousel',
			on: {
				mouseenter: e => clearInterval(this.autotimer),
				mouseleave: e => { this.autoplay && this.autoToPlay() }
			}
		}
		return (
			<div v-resize={this.resize} {...props}>
				<div {...warpperCls}>
					{childs}
				</div>
				{!vertical ? [arrowLeft, arrowRight] : null}
				{this.dots ? dotsNode : null}
			</div >
		)
	}
}

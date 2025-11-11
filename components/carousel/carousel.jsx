import Icon from "../icon";
import resize from "../directives/resize";
import { ChevronUp } from "kui-icons";
import { withInstall } from '../utils/vue'

const Carousel = {
	name: "Carousel",
	directives: { resize },
	props: {
		value: { type: Number, default: 0 },
		loop: { type: Boolean, default: true },
		autoplay: Boolean,
		delay: { type: Number, default: 3000 },
		vertical: Boolean,
		dots: { type: Boolean, default: true },
	},
	provide() {
		return {
			Carousel: this,
		};
	},
	data() {
		return {
			currentIndex: this.value,
			posIndex: this.loop ? this.value + 1 : this.value,
			autoTimer: null,
			width: 0,
			height: 0,
			animate: this.value > 0 ? false : true,
			playing: false,
		};
	},
	watch: {
		value(nv) {
			this.currentIndex = nv;
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.resize();
			this.autoToPlay();
		});
	},
	beforeDestroy() {
		clearInterval(this.autoTimer);
	},
	methods: {
		next() {
			this.toSwitch("right");
		},
		prev() {
			this.toSwitch("left");
		},
		goTo(index) {
			clearInterval(this.autoTimer);
			this.animate = true;
			this.currentIndex = index;
			this.posIndex = this.loop ? index + 1 : index;
			this.$emit("input", index);
			this.autoToPlay();
		},
		autoToPlay() {
			if (!this.autoplay) return;
			clearInterval(this.autoTimer);
			this.autoTimer = setInterval(() => {
				this.change("right");
			}, parseInt(this.delay));
		},
		toSwitch(type) {
			clearInterval(this.autoTimer);
			if (this.playing) return;
			this.playing = true;
			this.change(type);
		},
		change(type) {
			this.animate = true;

			const children = this.$slots.default || [];
			const total = this.loop ? children.length + 2 : children.length;
			let index = this.posIndex;
			let nextCurrent = this.currentIndex;

			if (type === "right") {
				index = (index + 1) % total;
				if (this.loop) nextCurrent = (nextCurrent + 1) % children.length;
				else nextCurrent = index;
			} else if (type === "left") {
				index = (index - 1 + total) % total;
				if (this.loop) nextCurrent = (nextCurrent - 1 + children.length) % children.length;
				else nextCurrent = index;
			}

			this.posIndex = index;
			this.currentIndex = nextCurrent;
			this.$emit("input", this.currentIndex);

			setTimeout(() => {
				this.playing = false;
				if (this.loop) {
					const count = children.length + 2;
					if (this.posIndex === count - 1) {
						this.animate = false;
						this.posIndex = 1;
					}
					if (this.posIndex === 0) {
						this.animate = false;
						this.posIndex = count - 2;
					}
				}
			}, 501);
			this.autoToPlay();
		},
		resize() {
			this.animate = false;
			const el = this.$el;
			this.width = el.offsetWidth;
			this.height = el.offsetHeight;
		},
	},
	render() {
		const children = this.$slots.default || [];
		const { vertical } = this;
		const first = children[0];
		const last = children[children.length - 1];
		const newChildren = this.loop ? [last, ...children, first] : children;
		let index = Math.min(children.length - 1, this.currentIndex);
		index = Math.max(0, index);

		const classes = [
			"k-carousel",
			{
				"k-carousel-vertical": vertical,
			},
		];

		const dotsNode = this.dots ? (
			<ul class="k-carousel-dots">
				{children.map((x, i) => (
					<li
						class={{ "k-carousel-dots-active": index == i }}
						onClick={() => this.goTo(i)}
					></li>
				))}
			</ul>
		) : null;

		let offsetX = 0,
			offsetY = 0;
		if (!vertical) {
			offsetX = this.posIndex * this.width;
		} else {
			offsetY = this.posIndex * this.height;
		}

		const wrapperCls = {
			class: "k-carousel-wrapper",
			style: {
				transform: `translate3d(-${offsetX}px,-${offsetY}px,0)`,
				width: !vertical ? newChildren.length * this.width + "px" : "",
				height: vertical ? newChildren.length * this.height + "px" : "",
				transitionDuration: !this.animate ? "0s" : "",
			},
		};

		const arrowLeft = (
			<span class="k-carousel-arrow-left" onClick={() => this.toSwitch("left")}>
				<Icon type={ChevronUp} />
			</span>
		);
		const arrowRight = (
			<span class="k-carousel-arrow-right" onClick={() => this.toSwitch("right")}>
				<Icon type={ChevronUp} />
			</span>
		);

		const props = {
			class: classes,
			onMouseenter: () => clearInterval(this.autoTimer),
			onMouseleave: () => {
				this.autoplay && this.autoToPlay();
			},
		};

		return (
			<div v-resize={this.resize} {...props}>
				<div {...wrapperCls}>{newChildren}</div>
				{!vertical ? [arrowLeft, arrowRight] : null}
				{dotsNode}
			</div>
		);
	},
};
export default withInstall(Carousel);
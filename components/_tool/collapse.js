//利用vue 的状态管理 结合 vue transition 和 css3 的 transition 实现 Jqeury toggle
//给需要的 元素加上 css  transition: height .2s ease-in-out;
//by chuchur

const on = {
	beforeEnter(el) {
		el.style.overflow = 'hidden';
		el.style.height = 0
		el.style.opacity = 0.1
	},
	enter(el) {
		if (el.scrollHeight !== 0) {
			el.style.height = el.scrollHeight + 'px'
			el.style.opacity = 1
		} else {
			el.style.height = ''
			el.style.opacity = ''
		}
	},
	afterEnter(el) {
		el.style.height = ''
		el.style.opacity = ''
	},
	beforeLeave(el) {
		el.style.height = el.scrollHeight + 'px'
		el.style.opacity = 1
	},
	leave(el) {
		if (el.scrollHeight !== 0) {
			el.style.height = 0;
			el.style.paddingTop = 0;
			el.style.paddingBottom = 0;
			el.style.marginTop = 0;
			el.style.marginBottom = 0;
			el.style.opacity = 0
		}
	},
	afterLeave(el) {
		el.style.height = '';
		el.style.paddingTop = '';
		el.style.paddingBottom = '';
		el.style.marginTop = '';
		el.style.marginBottom = '';
		el.style.opacity = ''
		el.style.overflow = ''
	},
}

// https://cn.vuejs.org/v2/guide/render-function.html#函数式组件

export default {
	name: 'Collapse',
	// functional: true, //为true 表示 无状态 data 无 无实例 没有this

	render() {
		const props = { on }
		return (<transition {...props}>{this.$slots.default}</transition>)
	}
}
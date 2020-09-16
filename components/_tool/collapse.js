//利用vue 的状态管理 结合 vue transition 和 css3 的 transition 实现 Jqeury toggle
//给需要的 元素加上 css  transition: height .2s ease-in-out;
//by chuchur

// https://cn.vuejs.org/v2/guide/render-function.html#函数式组件
import { getTranstionProp } from './transition'
export default {
	name: 'Collapse',
	props: {
		name: String,
	},
	// functional: true, //为true 表示 无状态 data 无 无实例 没有this
	render() {
		if (this.name != 'k-collaplse-slide') {
			return (<transition name={this.name}>{this.$slots.default}</transition>)
		}
		const props = getTranstionProp(name)
		return (<transition {...props}>{this.$slots.default}</transition>)
	}
}
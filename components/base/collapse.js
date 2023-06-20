//利用vue 的状态管理 结合 vue transition 和 css3 的 transition 实现 Jqeury toggle
//给需要的 元素加上 css  transition: height .2s ease-in-out;
//by chuchur

// https://cn.vuejs.org/v2/guide/render-function.html#函数式组件
import { getTranstionProp } from './transition'
export default {
	name: 'Collapse',
	props: {
		name: String,
		collapse: { type: Boolean, default: true }
	},
	// functional: true, //为true 表示 无状态 data 无 无实例 没有this
	render() {
		let { name, $slots, collapse } = this
		let child = $slots.default || $slots.content;
		const props = collapse ? getTranstionProp(name) : { name }
		return (<transition {...props} name={name}>{child}</transition>)
	}
}
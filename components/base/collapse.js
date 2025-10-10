import { getTransitionProp } from './transition'
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
		const props = collapse ? getTransitionProp(name) : { name }
		return (<transition {...props} name={name}>{child}</transition>)
	}
}
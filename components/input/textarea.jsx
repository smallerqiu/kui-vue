import BaseInput from '../base/input'
export default {
	name: 'TextArea',
	props: {
		value: [String, Number],
	},
	render() {
		const props = {
			props: { ...this.$props, inputType: 'textarea' },
			attrs: { ...this.$attrs },
			on: {
				...this.$listeners
			}
		}
		return <BaseInput {...props} />
	}
}
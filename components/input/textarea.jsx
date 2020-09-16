import BaseInput from '../base/input'
export default {
	name: 'TextArea',
	props: {
		value: [String, Number],
		placeholder: String,
		disabled: Boolean,
		readonly: Boolean,
		autofocus: Boolean,
		rows: { type: Number, default: 2 },
		name: String,
		maxlength: Number
	},
	render() {
		const props = {
			props: { ...this.$props, type: 'textarea' },
			attrs: { ...this.$attrs },
			on: {
				...this.$listeners
			}
		}
		return <BaseInput {...props} />
	}
}
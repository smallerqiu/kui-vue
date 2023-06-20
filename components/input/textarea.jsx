import BaseInput from '../base/input'
export default {
	name: 'TextArea',
	props: {
		value: [String, Number],
		theme: String
	},
	provide() {
    return {
      TextArea: this
    }
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
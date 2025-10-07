import BaseInput from '../base/input'
import { withInstall } from '../utils/vue'
const TextArea = {
	name: 'TextArea',
	props: {
		value: [String, Number],
		theme: String,
		disabled: Boolean,
		size: {
			default: 'default',
			validator(value) {
				return ["small", "large", "default"].indexOf(value) >= 0;
			}
		},
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
export default withInstall(TextArea)
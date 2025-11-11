import { withInstall } from '../utils/vue'
const TextArea = {
	name: 'TextArea',
	props: {
		value: [String, Number],
		theme: String,
		// disabled: Boolean,
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
		const { theme } = this;
		const props = {
			domProps: {
				value: this.value,
			},
			class: ["k-textarea", { [`k-textarea-${theme}`]: theme }],
			props: { ...this.$props },
			attrs: { ...this.$attrs },
			on: {
				...this.$listeners,
				input: (e) => {
					this.$emit('input', e.target.value)
				}
			}
		}
		return <textarea {...props} />
	}
}
export default withInstall(TextArea)
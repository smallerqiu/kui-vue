export default {
  clearable: Boolean,
  mini: { type: Boolean, default: false },
  large: { type: Boolean, default: false },
  value: [String, Number],
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  type: {
    validator(value) {
      return (["text", "textarea", "password", "url", "email", "date"].indexOf(value) >= 0);
    },
    default: 'text'
  },
  icon: String,
  autofocus: Boolean,
  iconAlign: String,
  rows: { type: [Number, String], default: 2 },
  name: { type: String },
  number: { type: Boolean, default: false },
  width: { type: [Number, String] }
}
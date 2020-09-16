import PopBase from '../base/pop'
export default {
  name: 'Popconfirm',
  props: {
    dark: Boolean,
    transfer: { type: Boolean, default: true },
    title: String,
    width: [Number, String],
    okText: { type: String, default: '确定' },
    cancelText: { type: String, default: '取消' },
    placement: {
      validator(value) {
        return (
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].indexOf(value) >= 0
        );
      },
      default: "top"
    },
  },
  render() {
    let props = {
      props: { preCls: 'popconfirm', ...this.$props, confirm: true },
      on: {
        'ok': e => this.$emit('ok'),
        'cancel': e => this.$emit('cancel')
      }
    }
    return (
      <PopBase {...props}>
        {this.$slots.default}
        <template slot="title">{this.$slots.title}</template>
      </PopBase>
    )
  }
};
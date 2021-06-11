import Notice from "./inner";
import { getTranstionProp } from '../base/transition'

let count = 0
const timestamp = Date.now()
function getUuid() {
  return `k-message_${timestamp}_${count++}`
}

export default {
  props: { type: String },
  data() {
    return {
      group: []
    };
  },
  methods: {
    show(options) {
      let { duration, close, closable, noticeType } = options
      let key = getUuid()
      options.name = key
      options.duration = isNaN(Number(duration)) ? 3.5 : duration;
      let timer;
      let callback = () => {
        (typeof close) === 'function' && close()
        this.group = this.group.filter(item => item.name !== key)
        clearTimeout(timer);
        timer = null;
      };
      options.duration > 0 && (timer = setTimeout(callback, options.duration * 1000));
      if ((closable === true && noticeType == "message") || noticeType == "notice")
        options.onClose = callback
      this.group.push(options);
    },
    destroy() {
      this.group = []
    }
  },
  render() {
    const { type } = this
    let transition = getTranstionProp()
    delete transition.on.enter
    delete transition.on.beforeEnter
    transition.on.beforeLeave = (el) => {
      el.style.height = window.getComputedStyle(el).height
      el.style.opacity = 1
    }
    let childs = this.group.map((item, i) => {
      let props = { props: { ...item } }
      let key = item.name || getUuid()
      return <Notice {...props} key={key} />
    })
    return (
      <transition-group tag="div" class={`k-${type}`} name={`k-${type}-slide`} {...transition}>
        {childs}
      </transition-group>
    )
  }
}
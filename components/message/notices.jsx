import Vue from 'vue';
import Notice from "./notice.jsx";
import { getTranstionProp } from '../_tool/transition'

let count = 0
const timestamp = Date.now()
function getUuid() {
  return `k-message_${timestamp}_${count++}`
}

const Notices = {
  props: { type: String },
  data() {
    return {
      notices: []
    };
  },
  methods: {
    add(options) {
      let { duration, close, closable, noticeType } = options
      let key = getUuid()
      options.name = key
      options.duration = isNaN(Number(duration)) ? 3.5 : duration;
      let timer;
      let callback = () => {
        (typeof close) === 'function' && close()
        let index = this.notices.map(v => v.name).indexOf(key)
        this.notices.splice(index, 1)
        clearTimeout(timer);
        timer = null;
      };
      options.duration > 0 && (timer = setTimeout(callback, options.duration * 1000));
      if ((closable === true && noticeType == "message") || noticeType == "notice")
        options.onClose = callback
      this.notices.push(options);
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
    let kid = this.notices.map((item, i) => {
      let props = { props: { ...item } }
      let key = (item.name = item.name) || getUuid()
      return <Notice {...props} key={key} />
    })
    return (
      <div class={`k-${type}`}>
        <transition-group name={`k-${type}-slide`} {...transition}>
          {kid}
        </transition-group>
      </div >
    )
  }
}

Notices.newInstance = function (props = {}) {
  const Notice = new Vue({
    render(h) {
      return h(Notices, {
        props: props
      });
    }
  });

  const component = Notice.$mount();
  document.body.appendChild(component.$el);
  const notice = Notice.$children[0];
  return notice
}

export default Notices
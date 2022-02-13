import Vue from 'vue';
const SSR = Vue.prototype.$isServer
export default {
  bind(el, { value }) {
    if (typeof value == 'function' && !SSR) {
      window.addEventListener('resize', value)
    }
  },
  unbind(el, { value }) {
    if (typeof value == 'function' && !SSR)
      window.removeEventListener('resize', value)
  }
}
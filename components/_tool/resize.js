import Vue from 'vue';
const SSR = Vue.prototype.$isServer
export default {
  bind(el, { value }) {
    if (SSR) return;
    if (typeof value == 'function') {
      window.addEventListener('resize', value)
    }
  },
  unbind(el, { value }) {
    if (typeof value == 'function')
      window.removeEventListener('resize', value)
  }
}
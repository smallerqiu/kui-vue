import Vue from 'vue';
const SSR = Vue.prototype.$isServer
export default {
  bind(el, { value }) {
    if (!SSR && typeof value == 'function') {
      document.addEventListener('click', value)
    }
  },
  unbind(el, { value }) {
    if (typeof value == 'function')
      document.removeEventListener('click', value)
  }
}
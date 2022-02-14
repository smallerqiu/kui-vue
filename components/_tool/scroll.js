import Vue from 'vue';
export default {
  bind(el, { value }) {
    const SSR = Vue && Vue.prototype.$isServer
    if (typeof value == 'function' && !SSR) {
      window.addEventListener('scroll', value)
    }
  },
  unbind(el, { value }) {
    if (typeof value == 'function' && !SSR)
      window.removeEventListener('scroll', value)
  }
}
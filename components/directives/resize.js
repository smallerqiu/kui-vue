import Vue from 'vue';
export default {
  bind(el, { value }) {
    const SSR = Vue && Vue.prototype.$isServer
    if (typeof value == 'function' && !SSR) {
      window.addEventListener('resize', value)
    }
  },
  unbind(el, { value }) {
    const SSR = Vue && Vue.prototype.$isServer
    if (typeof value == 'function' && !SSR)
      window.removeEventListener('resize', value)
  }
}
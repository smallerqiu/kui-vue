import Vue from 'vue';
export default {
  bind(el, { value }) {
    const SSR = Vue && Vue.prototype.$isServer
    if (!SSR && typeof value == 'function') {
      document.addEventListener('click', value)
    }
  },
  unbind(el, { value }) {
    if (typeof value == 'function')
      document.removeEventListener('click', value)
  }
}
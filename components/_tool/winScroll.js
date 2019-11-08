import Vue from 'vue';
const SSR = Vue.prototype.$isServer
export default {
  bind(el, binding) {
    if (SSR) return;
    let scroll = (e) => {
      if (binding.expression) {
        binding.value(e);
      }
    }
    el.__scroll = scroll
    window.addEventListener('resize', scroll)
    document.addEventListener('scroll', scroll)
    document.addEventListener('mousewheel', scroll)
  },
  unbind(el, bind) {
    window.removeEventListener('resize', el.__scroll)
    document.removeEventListener('scroll', el.__scroll)
    document.removeEventListener('mousewheel', el.__scroll)
    delete el.__scroll
  }
}
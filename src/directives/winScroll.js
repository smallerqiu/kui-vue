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
    el._scroll = scroll
    el._resize = scroll
    // el._mousewhell = scroll
    window.addEventListener('resize', scroll)
    document.addEventListener('scroll', scroll)
    document.addEventListener('mousewheel', scroll)
  },
  unbind(el, bind) {
    window.removeEventListener('resize', el._scroll)
    document.removeEventListener('scroll', el._resize)
    document.removeEventListener('mousewheel', el._mousewhell)
    delete el._scroll
    delete el._resize
    // delete el._mousewhell
  }
}
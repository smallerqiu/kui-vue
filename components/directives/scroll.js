export default {
  mounted(el, { value }) {
    if (typeof value == 'function') {
      window.addEventListener('scroll', value)
    }
  },
  unmounted(el, { value }) {
    if (typeof value == 'function')
      window.removeEventListener('scroll', value)
  }
}
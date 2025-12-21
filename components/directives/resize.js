export default {
  mounted(el, { value }) {
    if (typeof value == 'function') {
      window.addEventListener('resize', value)
    }
  },
  unmounted(el, { value }) {
    if (typeof value == 'function')
      window.removeEventListener('resize', value)
  }
}
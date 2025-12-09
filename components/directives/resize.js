export default {
  bind(el, { value }) {
    if (typeof value == 'function') {
      window.addEventListener('resize', value)
    }
  },
  unbind(el, { value }) {
    if (typeof value == 'function')
      window.removeEventListener('resize', value)
  }
}
export default {
  mounted(el, { value }) {
    const SSR = typeof window === 'undefined';
    if (typeof value == 'function' && !SSR) {
      window.addEventListener('scroll', value)
    }
  },
  unmounted(el, { value }) {
    if (typeof value == 'function')
      window.removeEventListener('scroll', value)
  }
}

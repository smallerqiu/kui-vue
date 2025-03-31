export default {
  mounted(el, { value }) {
    const SSR = typeof window === "undefined";
    if (!SSR && typeof value == 'function') {
      document.addEventListener('click', value)
    }
  },
  unmounted(el, { value }) {
    if (typeof value == 'function')
      document.removeEventListener('click', value)
  }
}
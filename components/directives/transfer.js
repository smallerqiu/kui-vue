export default {
  mounted(el, { value }, vnode) {
    if (value) {
      const parentNode = el.parentNode;
      if (!parentNode) return false;
      const target = value.$el
        ? value.$el
        : (value === true ? document.body : value) || document.body;
      target.appendChild(el);
      el.__data = { parentNode };
    }
  },
  unmounted(el, { value }) {
    if (value) {
      el.__data.parentNode.appendChild(el);
      el.__data = null;
    }
  },
};

export default {
  inserted(el, { value }, vnode) {
    if (value) {
      const parentNode = el.parentNode;
      if (!parentNode) return false;

      const target = (value === true ? document.body : value) || document.body;
      target.appendChild(el);
      el.__data = { parentNode };
    }
  },
  unbind(el, { value }) {
    if (value) {
      el.__data.parentNode.appendChild(el);
      el.__data = null;
    }
  },
};

export default {
  bind(el, { value }) {
    if (typeof value == "function") {
      window.addEventListener("scroll", value);
    }
  },
  unbind(el, { value }) {
    if (typeof value == "function") window.removeEventListener("scroll", value);
  },
};

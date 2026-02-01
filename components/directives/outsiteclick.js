export default {
  bind(el, { value }) {
    if (typeof value == "function") {
      document.addEventListener("click", value);
    }
  },
  unbind(el, { value }) {
    if (typeof value == "function") document.removeEventListener("click", value);
  },
};

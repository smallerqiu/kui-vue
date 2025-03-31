export default {
  mounted(el, { value }) {
    const SSR = typeof window === "undefined";
    if (typeof value == "function" && !SSR) {
      window.addEventListener("resize", value);
    }
  },
  unmounted(el, { value }) {
    if (typeof value == "function") {
      window.removeEventListener("resize", value);
    }
  },
};

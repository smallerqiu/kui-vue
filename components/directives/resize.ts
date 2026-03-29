import type { ObjectDirective } from "vue";
const resize: ObjectDirective = {
  mounted(_, { value }: { value: () => void }) {
    window.addEventListener("resize", value);
  },
  unmounted(_, { value }: { value: () => void }) {
    window.removeEventListener("resize", value);
  },
};
export default resize;

import type { ObjectDirective } from "vue";
export const scroll: ObjectDirective = {
  mounted(_, { value }: { value: () => void }) {
    window.addEventListener("scroll", value);
  },
  unmounted(_, { value }: { value: () => void }) {
    window.removeEventListener("scroll", value);
  },
};

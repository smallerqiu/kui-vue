import type { ObjectDirective } from "vue";
export const clickOutside: ObjectDirective = {
  mounted(_: HTMLElement, { value }: { value: (e: MouseEvent) => void }) {
    document.addEventListener("click", value);
  },
  unmounted(_, { value }: { value: (e: MouseEvent) => void }) {
    document.removeEventListener("click", value);
  },
};

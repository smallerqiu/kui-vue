import { computed, inject, type ComputedRef } from "vue";
import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Custom from "./custom.md";
import WithForm from "./withForm.md";
import Target from "./target.md";
import CN from "../index.md";
import EN from "../index.en_US.md";

interface LocaleContext {
  value: {
    name: string;
  };
}

export default {
  setup() {
    const locale = inject<LocaleContext>("locale");

    const API: ComputedRef<any> = computed(() => {
      return (locale as any)?.value?.name === "zh-cn" ? CN : EN;
    });

    const Info: ComputedRef<any> = computed(() => {
      return (locale as any)?.value?.name === "zh-cn" ? InfoCn : InfoEn;
    });

    return { API, Info };
  },
  render() {
    return (
      <div class="demo-drawer">
        <this.Info />
        <Basic />
        <Custom />
        <WithForm />
        <Target />
        <this.API />
      </div>
    );
  },
};

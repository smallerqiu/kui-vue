import { computed, inject, type ComputedRef } from "vue";
import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import RightMenu from "./rightMenu.md";
import DropdownButton from "./dropdownButton.md";
import Divider from "./divider.md";
import Placement from "./placement.md";
import Cascading from "./cascading.md";
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
      <div>
        <this.Info />
        <Basic />
        <RightMenu />
        <DropdownButton />
        <Divider />
        <Placement />
        <Cascading />
        <this.API />
      </div>
    );
  },
};

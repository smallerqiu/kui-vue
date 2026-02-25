import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Mode from "./mode.md";
import LocalCn from "./local.md";
import LocalEn from "./local.en_US.md";
import LocalEg from "./local-eg.md";
import { computed, inject } from "vue";
export default {
  setup() {
    const locale = inject("locale");
    const Info = computed(() => {
      return locale.value.name === "zh-cn" ? InfoCn : InfoEn;
    });
    const More = computed(() => {
      return locale.value.name === "zh-cn" ? MoreCn : MoreEn;
    });
    const Local = computed(() => {
      return locale.value.name === "zh-cn" ? LocalCn : LocalEn;
    });
    return { Info, More, Local };
  },
  render() {
    return (
      <div>
        <this.Info />
        <Mode />
        <this.Local />
        <LocalEg />
      </div>
    );
  },
};

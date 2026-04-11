import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Demo from "./demo.md";
import MoreCn from "./more.md";
import MoreEn from "./more.en_US.md";
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
    return { Info, More };
  },
  render() {
    return (
      <div>
        <this.Info />
        <Demo />
        <this.More />
      </div>
    );
  },
};

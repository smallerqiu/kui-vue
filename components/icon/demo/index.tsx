import Basic from "./basic.md";
import Stroke from "./stroke.md";
import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import UseCn from "./use.md";
import UseEn from "./use.en_US.md";
import Search from "./search.vue";
import CN from "../index.md";
import EN from "../index.en_US.md";
import { computed, inject } from "vue";
export default {
  setup() {
    const locale = inject("locale");
    const API = computed(() => {
      return locale.value.name === "zh-cn" ? CN : EN;
    });
    const Info = computed(() => {
      return locale.value.name === "zh-cn" ? InfoCn : InfoEn;
    });
    const Use = computed(() => {
      return locale.value.name === "zh-cn" ? UseCn : UseEn;
    });
    return { API, Info, Use };
  },
  render() {
    return (
      <div>
        <this.Info />
        <Search />
        <this.Use />
        <Basic />
        <Stroke />
        <this.API />
      </div>
    );
  },
};

import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import ValueType from "./valueType.md";
import Range from "./range.md";
import Theme from "./theme.md";
import Presets from "./presets.md";
import Disabled from "./disabled.md";
import DisabledDate from "./disabledDate.md";
import Size from "./size.md";
import Lang from "./lang.md";
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
    return { API, Info };
  },
  render() {
    return (
      <div>
        <this.Info />
        <Basic />
        <ValueType />
        <Range />
        <DisabledDate />
        <Disabled />
        <Presets />
        <Theme />
        <Size />
        <Lang />
        <this.API />
      </div>
    );
  },
};

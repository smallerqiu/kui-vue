import Basic from "./basic.md";
import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Disabled from "./disabled.md";
import Group from "./group.md";
import GroupLayout from "./groupLayout.md";
import CheckAll from "./checkAll.md";
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
      <div class="demo-checkbox">
        <this.Info />
        <Basic />
        <Group />
        <GroupLayout />
        <Disabled />
        <CheckAll />
        <this.API />
      </div>
    );
  },
};

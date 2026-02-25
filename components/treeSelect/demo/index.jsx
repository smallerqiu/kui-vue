import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Multiple from "./multiple.md";
import Checkable from "./checkable.md";
import Disabled from "./disabled.md";
import Async from "./sync.md";
import Size from "./size.md";
import Theme from "./theme.md";

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
        <Multiple />
        <Checkable />
        <Disabled />
        <Async />
        <Size />
        <Theme />
        <this.API />
      </div>
    );
  },
};

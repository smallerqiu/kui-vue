import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Disabled from "./disabled.md";
import Size from "./size.md";
import Outline from "./outline.md";
import Light from "./light.md";
import WithIcon from "./withIcon.md";
import Loading from "./loading.md";
import Block from "./block.md";
import Color from "./color.md";
import Group from "./group.md";
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
        <Outline />
        <Color />
        <Light />
        <WithIcon />
        <Size />
        <Disabled />
        <Loading />
        <Block />
        <Group />
        <this.API />
      </div>
    );
  },
};

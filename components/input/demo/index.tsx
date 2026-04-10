import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Theme from "./theme.md";
import Icon from "./icon.md";
import Suffix from "./suffix.md";
import Group from "./group.md";
import Size from "./size.md";
import Event from "./event.md";
import TextArea from "./textarea.md";
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
        <Theme />
        <Icon />
        <Suffix />
        <Group />
        <Size />
        <Event />
        <TextArea />
        <this.API />
      </div>
    );
  },
};

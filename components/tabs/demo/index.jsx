import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Disabled from "./disabled.md";
import Centered from "./centered.md";
import Icon from "./icon.md";
import Extra from "./extra.md";
import Card from "./card.md";
import Closable from "./closable.md";
import Sample from "./sample.md";

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
        <Disabled />
        <Centered />
        <Icon />
        <Extra />
        <Card />
        <Closable />
        <Sample />
        <this.API />
      </div>
    );
  },
};

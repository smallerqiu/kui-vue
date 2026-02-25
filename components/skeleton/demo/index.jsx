import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Group from "./group.md";
import Animated from "./animated.md";
import Child from "./child.md";
import List from "./list.md";
import Items from "./items.md";
import Custom from "./custom.md";

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
      <div class="demo-progress">
        <this.Info />
        <Basic />
        <Group />
        <Animated />
        <Child />
        <List />
        <Items />
        <Custom />
        <this.API />
      </div>
    );
  },
};

import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import FileList from "./fileList.md";
import Accept from "./accept.md";
import Transform from "./transform.md";
import Exceed from "./exceed.md";
import Custom from "./custom.md";
import Directory from "./directory.md";
import Pictures from "./pictures.md";
import Avatar from "./avatar.md";
import Draggable from "./draggable.md";
import Forms from "./forms.md";

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
      <div class="demo-upload">
        <this.Info />
        <Basic />
        <FileList />
        <Directory />
        <Accept />
        <Transform />
        <Exceed />
        <Custom />
        <Pictures />
        <Avatar />
        <Draggable />
        <Forms />
        <this.API />
      </div>
    );
  },
};

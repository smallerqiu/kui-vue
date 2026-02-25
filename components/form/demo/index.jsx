import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import Basic from "./basic.md";
import Align from "./align.md";
import Length from "./length.md";
import WithModal from "./withmodal.md";
import Valid from "./valid.md";
import CustomValid from "./customvalid.md";
import DynamicValid from "./dynamicvalid.md";
import CN from "../index.md";
import EN from "../index.en_US.md";
import { computed, inject } from "vue";

export default {
  render() {
    return (
      <div class="demo-menu">
        <this.Info />
        <Basic />
        <Align />
        <Valid />
        <Length />
        <WithModal />
        <CustomValid />
        <DynamicValid />
        <this.API />
      </div>
    );
  },
};

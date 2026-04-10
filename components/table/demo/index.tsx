import Basic from "./basic.md";
import BaseRender from "./baseRender.md";
import CustomHeader from "./customHeader.md";
import InfoCn from "./info.md";
import InfoEn from "./info.en_US.md";
import TableSorter from "./tableSorter.md";
import Bordered from "./bordered.md";
import ColRowSpan from "./colRowSpan.md";
import TableEdit from "./tableEdit.md";
import FixedColHead from "./fixedColHeader.md";
import HeadSpan from "./headerSpan.md";
import TableCheck from "./tableCheck.md";
import Size from "./size.md";
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
      <div class="demo-table">
        <this.Info />
        <Basic />
        <BaseRender />
        <CustomHeader />
        <Bordered />
        <TableSorter />
        <ColRowSpan />
        <TableEdit />
        <FixedColHead />
        <HeadSpan />
        <TableCheck />
        <Size />
        <this.API />
      </div>
    );
  },
};

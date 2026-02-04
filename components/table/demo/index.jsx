import Basic from "./basic.md";
import BaseRender from "./base-render.md";
import CustomHeader from "./custom-header.md";
import Info from "./info.md";
import TableSorter from "./table-sorter.md";
import Bordered from "./bordered.md";
import ColRowSpan from "./col-row-span.md";
import TableEdit from "./table-edit.md";
import FixedColHead from "./fixed-col-head.md";
import HeadSpan from "./head-span.md";
import TableCheck from "./table-check.md";
import Size from "./size.md";
import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-table">
        <Info />
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
        <CN />
      </div>
    );
  },
};

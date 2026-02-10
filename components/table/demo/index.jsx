import Basic from "./basic.md";
import BaseRender from "./baseRender.md";
import CustomHeader from "./customHeader.md";
import Info from "./info.md";
import TableSorter from "./tableSorter.md";
import Bordered from "./bordered.md";
import ColRowSpan from "./colRowSpan.md";
import TableEdit from "./tableEdit.md";
import FixedColHead from "./fixedColHeader.md";
import HeadSpan from "./headerSpan.md";
import TableCheck from "./tableCheck.md";
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

import Info from "./info.md";
import Basic from "./basic.md";
import Accordion from "./accordion.md";
import Nesting from "./nesting.md";
import Sample from "./sample.md";
import Extra from "./extra.md";
import CN from "../index.md";
export default {
  render() {
    return (
      <div>
        <Info />
        <Basic />
        <Accordion />
        <Nesting />
        <Extra />
        <Sample />
        <CN />
      </div>
    );
  },
};

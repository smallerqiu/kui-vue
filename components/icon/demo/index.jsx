import Basic from "./basic.md";
import Stroke from "./stroke.md";
import Info from "./info.md";
import Use from "./use.md";
import Search from "./search.vue";
import CN from "../index.md";
export default {
  render() {
    return (
      <div>
        <Info />
        <Search />
        <Use />
        <Basic />
        <Stroke />
        <CN />
      </div>
    );
  },
};

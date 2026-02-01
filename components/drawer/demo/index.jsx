import Info from "./info.md";
import Basic from "./basic.md";
import Custom from "./custom.md";
import WithForm from "./withForm.md";
import Target from "./target.md";
import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-drawer">
        <Info />
        <Basic />
        <Custom />
        <WithForm />
        <Target />
        <CN />
      </div>
    );
  },
};

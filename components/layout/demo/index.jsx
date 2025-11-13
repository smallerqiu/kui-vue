import Info from "./info.md";
import Base from './basic.md';
import Layout1 from "./layout1.md";
import Layout2 from "./layout2.md";
import Layout3 from "./layout3.md";
import Layout4 from "./layout4.md";
import Layout5 from "./layout5.md";
export default {
  setup() {
    return () => (
      <div class="demo-layout">
        <Info />
        <Base />
        <Layout1 />
        <Layout2 />
        <Layout3 />
        <Layout4 />
        <Layout5 />
      </div>
    );
  },
};
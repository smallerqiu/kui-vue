<script>
import Info from "./info.md";
import Base from "./base.md";
import Layout1 from "./layout1.md";
import Layout2 from "./layout2.md";
import Layout3 from "./layout3.md";
import Layout4 from "./layout4.md";
import Layout5 from "./layout5.md";
export default {
  render() {
    return (
      <div class="demo-layout">
        <Info class="typo" />
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
</script>
<style lang="less">
.demo-layout {
  .k-demo-layout {
    overflow: auto hidden;
  }
}
</style>
<script>
import Info from "./info";
import Base from "./base";
import Theme from "./theme";
import Icon from "./icon";
import Suffix from "./suffix";
import Clearable from "./clearable";
import Size from "./size";
import Event from "./event";
import TextArea from "./textarea";
import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-input">
        <Info class="typo" />
        <Base />
        <Theme />
        <Icon />
        <Suffix />
        <Clearable />
        <Size />
        <Event />
        <TextArea />
        <CN class="typo" />
      </div>
    );
  }
};
</script> 
<style lang="less">
.demo-input {
  .k-input,
  .k-textarea {
    margin-bottom: 10px;
  }
  .k-input-wrapper {
    margin-bottom: 10px;
    .k-input {
      margin: 0;
    }
  }
}
</style>
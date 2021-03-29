<script>
import Base from "./base";
import Info from "./info";
import Icon from "./icon";
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
        <Icon />
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
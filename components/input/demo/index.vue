<script>
import Base from "./base.md";
import Info from "./info.md";
import Icon from "./icon.md";
import Clearable from "./clearable.md";
import Size from "./size.md";
import TextArea from "./textarea.md";
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
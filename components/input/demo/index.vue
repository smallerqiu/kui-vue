<script>
import Info from "./info.md";
import Base from "./base.md";
import Theme from "./theme.md";
import Icon from "./icon.md";
import Suffix from "./suffix.md";
import Clearable from "./clearable.md";
import Size from "./size.md";
import Event from "./event.md";
import TextArea from "./textarea.md";
import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-input">
        <Info />
        <Base />
        <Theme />
        <Icon />
        <Suffix />
        <Clearable />
        <Size />
        <Event />
        <TextArea />
        <CN />
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
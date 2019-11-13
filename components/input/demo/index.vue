<script>
import Base from './base.md' 
import Icon from './icon.md' 
import Clearable from './clearable.md' 
import Size from './size.md' 
import TextArea from './textarea.md' 
import CN from '../index.md'
export default {
  mounted() {

  },
  render() {
    return (
      <div class="demo-input">
        <Base />
        <Icon />
        <Clearable />
        <Size />
        <TextArea />
        <api><CN /></api>
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-input .k-input{
  margin-bottom: 10px;
}
</style>
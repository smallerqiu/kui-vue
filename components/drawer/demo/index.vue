<script>
import Info from './info.md' 
import Base from './base.md' 
import Custom from './custom.md' 
import Form from './form.md' 
import Target from './target.md' 
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-drawer">
        <Info class="typo" />
        <Base />
        <Custom />
        <Form />
        <Target />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-drawer {
  .k-btn{
    margin-right: 10px;
    margin-bottom: 10px;
    min-width: 70px;
  }
}
</style>
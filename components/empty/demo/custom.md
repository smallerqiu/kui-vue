
<cn>
#### 自定义
自定义图片、描述、附属内容。
</cn>

```vue
<template>
  <div>
    <Empty 
      image="https://cdn.chuchur.com/img/thumb.png" 
      description="暂时没有图片"
      :imageStyle="{height:'60px'}">
      <Button type="primary" circle :icon="Add" size="small">上传图片</Button>
    </Empty>
    <br/>
    Use slot
    <br/>
    <Empty>
      <template slot="description">暂时没有<a>图片</a></template>
      <img slot="image" src="https://cdn.chuchur.com/img/thumb.png" style="height:60px" />
      <Button type="primary" circle :icon="Add" size="small">上传图片</Button>
    </Empty>
  </div>
</template>
<script>
import { Add } from 'kui-icons'
export default{
  data() {
    return {
      Add
    }
  }
}
</script>
```
<cn>
#### 基本用法 
相邻组件水平间距。
</cn>

```vue
<template>
  <Space>
    <Button>Button</Button>
    <Button :icon="Search">Button</Button>
    <Tooltip placement="top">
      <Button>Space</Button>
      <template slot="title">
        <p style="margin:0">I am space</p>
      </template>
    </Tooltip>
  </Space>
</template>
<script>
import { Search } from 'kui-icons'
export default{
  data() {
    return {
      Search
    }
  }
}
</script>
```
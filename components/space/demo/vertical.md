<cn>
#### 垂直间距
相邻组件垂直间距。
</cn>

```vue
<template>
  <Space vertical>
    <Card title="Card" :icon="Heart" style="width:256px">
      <p>card content</p>
      <p>card content</p>
    </Card>
    <Card title="Card" :icon="Heart" style="width:256px">
      <p>card content</p>
      <p>card content</p>
    </Card>
  </Space>
</template>
<script>
import { Heart } from 'kui-icons'
export default{
  data() {
    return {
      Heart
    }
  }
}
</script>
```
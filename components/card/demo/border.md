<cn>
#### 边框
`bordered` 可以设置是否显示边框
</cn>

```vue
<template>
  <div class="demo-card">
    <Card title="卡片标题" :icon="Heart" :bordered="false">
      <template #extra >
        <a href="#">更多</a>
      </template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </Card>
  </div>
</template>
<script setup>
import { Heart } from 'kui-icons'
</script>
<style scoped>
.demo-card{
  padding:20px;
  background-color:#7f7f7f26;
}
</style>
```
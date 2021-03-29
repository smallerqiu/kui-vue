<cn>
#### 边框
`bordered` 可以设置是否显示边框
</cn>

```vue
<template>
  <div class="demo-card">
    <Card title="卡片标题" icon="heart" :bordered="false">
      <a slot="extra" @click="$Message.info('click')">More</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </Card>
  </div>
</template>
<style scoped>
.demo-card{
  background:#efefef;
  padding:20px;
}
</style>
```
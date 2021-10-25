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
  padding:20px;
  background-color:rgba(0,0,0,.1);
}
</style>
```
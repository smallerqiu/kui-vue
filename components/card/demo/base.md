<cn>
#### 边框
`bordered` 可以设置是否显示边框
</cn>

```tpl
<template>
  <div class="demo-card">
    <Card title="卡片标题" icon="ios-heart">
      <span slot="extra" @click="$Message.info('刚刚摇了下')">摇一摇</span>
      <p>内容随便写， 欢迎使用</p>
      <p>内容随便写， 欢迎使用</p>
      <p>内容随便写， 欢迎使用</p>
      <p>内容随便写， 欢迎使用</p>
      <p>内容随便写， 欢迎使用</p>
      <p>内容随便写， 欢迎使用</p>
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
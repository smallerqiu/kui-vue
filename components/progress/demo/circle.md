<cn>
#### 进度圈
圆形的进度条。
</cn>

```vue
<template>
  <Progress type="circle" :percent="50" />
  <Progress type="circle" :percent="70" status="exception" />
  <Progress type="circle" :percent="100" />
   <Progress type="circle" :percent="50">
    <div slot="format" class="demo-progress">
      <h2 style="margin:0">13389</h2>
      <span>今日步数</span>
    </div>
  </Progress>
</template>
<style>
.demo-progress>h2{
  font-size:23px
}
.demo-progress>span{
  font-size:14px;
  color:#999;
}
</style>
```
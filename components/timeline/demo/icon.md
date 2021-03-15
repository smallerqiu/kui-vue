<cn>
#### 图标
给 `TimeLineItem` 设置 `icon` 和 `color` 可以改变图标展示
</cn>

```vue
<template>
  <div>
    <TimeLine>
      <TimeLineItem color="green">优化成吨的改善和体验</TimeLineItem>
      <TimeLineItem color="orange">新增一些很友好的功能</TimeLineItem>
      <TimeLineItem icon="ribbon">发布2.0版本</TimeLineItem>
      <TimeLineItem icon="bug" color="red">修复bug</TimeLineItem>
      <TimeLineItem>发布1.0版本</TimeLineItem>
    </TimeLine>
  </div>
</template>
```
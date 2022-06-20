<cn>
#### 图标
给 `TimeLineItem` 设置 `icon` 和 `color` 可以改变图标展示
</cn>

```vue
<template>
  <div>
    <TimeLine>
      <TimeLineItem color="green" time="2020-11-03">优化成吨的改善和体验</TimeLineItem>
      <TimeLineItem color="orange" time="2020-11-02">
        <p>新增一些很友好的功能</p>
        <p>新增一些很友好的功能</p>
        <p>新增一些很友好的功能</p>
      </TimeLineItem>
      <TimeLineItem :icon="Ribbon" color="#3593ff" time="2020-11-01">发布2.0版本</TimeLineItem>
      <TimeLineItem :icon="Build" color="red" time="2020-10-03">修复bug</TimeLineItem>
      <TimeLineItem time="2020-10-01">发布1.0版本</TimeLineItem>
    </TimeLine>
  </div>
</template>
<script>
import { Ribbon, Build } from 'kui-icons'
export default{
  data() {
    return {
      Ribbon, Build
    }
  }
}
</script>
```
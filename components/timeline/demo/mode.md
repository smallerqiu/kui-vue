<cn>
### 呈现方向
指定 `mode` 可以改变呈现方向
</cn>

```vue
<template>
  <RadioGroup v-model="mode">
    <Radio label="left" value="left" />
    <Radio label="center" value="center" />
    <Radio label="alternate" value="alternate" />
    <Radio label="right" value="right" />
  </RadioGroup>
  <br />
  <br />
  <TimeLine :mode="mode">
    <TimeLineItem color="green" time="2020-11-03" extra="更多的辅助细节">
      优化成吨的改善和体验
    </TimeLineItem>
    <TimeLineItem color="orange" time="2020-11-02">
      <div>新增一些很友好的功能</div>
      <div>新增一些很友好的功能</div>
      <template #extra>更多的辅助细节</template>
    </TimeLineItem> 
    <TimeLineItem
      :icon="Build"
      color="red"
      time="2020-10-03"
      extra="更多的辅助细节"
    >
      修复bug
    </TimeLineItem>
    <TimeLineItem time="2020-10-01" extra="更多的辅助细节">
      发布1.0版本
    </TimeLineItem>
  </TimeLine>
</template>
<script setup>
import { Ribbon, Build } from "kui-icons";
import { ref } from "vue";
const mode = ref("left");
</script>
```

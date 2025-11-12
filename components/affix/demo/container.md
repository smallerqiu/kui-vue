<cn>
#### 滚动容器
用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。
</cn>

```vue
<template>
  <div class="demo-affix-scroll" ref="containerRef">
    <div class="demo-affix-inner">
      <div style="padding:50px 0;" />
      <Affix :target="() => containerRef" :offsetTop="50">
        <Button type="primary">Affix at the top of container</Button>
      </Affix>
      <div style="padding:200px 0;" />
      <Affix :target="() => containerRef" :offsetBottom="50">
        <Button type="primary">Affix at the bottom of container</Button>
      </Affix>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const containerRef = ref();
</script>

<style scoped>
.demo-affix-scroll {
  height: 300px;
  overflow-y: scroll;
  background-image: linear-gradient(-45deg, #cdcdcd 25%, #eeeeee50 0),
    linear-gradient(45deg, #cdcdcd 25%, #eeeeee50 0), linear-gradient(
      -45deg,
      #eeeeee50 75%,
      #cdcdcd 0
    ), linear-gradient(45deg, #eeeeee50 75%, #cdcdcd 0);
  background-size: 40px 40px;
  background-position: 0 0, 0 -20px, -20px 20px, 20px 0;
}
.demo-affix-inner {
  height: 800px;
}
</style>
```

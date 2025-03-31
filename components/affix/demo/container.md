<cn>
#### 滚动容器
用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。
</cn>

```vue
<template>
  <div class="demo-affix-scroll" :ref="container">
     <div class="demo-affix-inner" >
        <div style="padding:50px 0;" />
        <Affix :target="target" :offsetTop="50">
          <Button type="primary" id="tesss">Affix at the top of container</Button>
        </Affix>
        <div style="padding:200px 0;" />
        <Affix :target="target" :offsetBottom="50">
          <Button type="primary" id="tesss">Affix at the bottom of container</Button>
        </Affix>
     </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const container = ref(null);

const target = () => container.value;
</script>

<style scoped>
.demo-affix-scroll{
  height:400px;
  overflow-y:scroll;
  background-image: linear-gradient(-45deg, #cdcdcd 25%, transparent 0), linear-gradient(45deg, #cdcdcd 25%, transparent 0), linear-gradient(-45deg, transparent 75%, #cdcdcd 0), linear-gradient(45deg, transparent 75%, #cdcdcd 0);
  background-size: 20px 20px;
  background-position: 0 0, 0 -10px, -10px 10px, 10px 0;
}
.demo-affix-inner{
  height:800px;
}
</style>
```

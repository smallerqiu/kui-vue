<cn>
### 从浮层内关闭
使用 `v-model` 属性控制浮层显示。
</cn>
<en>
### Close from Inside the Floating Layer
Use the `v-model` attribute to control the floating layer's visibility.
</en>

```vue
<template>
  <Poptip title="标题" trigger="click" v-model:show="show">
    <template #content>
      <Button @click="test" size="small">Close</Button>
    </template>
    <Button type="primary">Click me</Button>
  </Poptip>
</template>
<script setup lang="ts">
import { ref } from "vue";
const show = ref(false);
const test = () => {
  show.value = false;
};
</script>
```

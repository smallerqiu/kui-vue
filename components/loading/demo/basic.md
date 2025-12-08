<cn>
### 基本用法 
最简单的用法。
</cn>

```vue
<template>
  <Space wrap>  
    <Button @click="start()">start</Button>
    <Button @click="finish">finish</Button>
    <Button @click="error">error</Button>
    <Button @click="update(30)">update 30%</Button>
    <Button @click="update(80)">update 80%</Button>
    <Button @click="destroy()">destroy</Button>
  </Space>
</template>
<script setup>
import { loading } from "kui-vue";
const update = (percent) => {
  loading.update(percent);
};
const start = () => {
  loading.start();
};
const finish = () => {
  loading.finish();
};
const error = () => {
  loading.error();
};
const destroy = () => {
  loading.destroy();
};
</script>
```

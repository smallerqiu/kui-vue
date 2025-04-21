
<cn>
#### 基础用法
`Notice` 的基本用法
</cn>

```vue
<template>
  <div>
    <Button @click="info" type="primary">普通提示</Button>
  </div>
</template>
<script setup>
import { notice } from "kui-vue";
const info = ()=> {
  notice.open({
    title: "通知的标题",
    content: "通知的描述",
    duration: 5
  });
}
</script>
```
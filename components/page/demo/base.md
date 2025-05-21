<cn>
#### 基本用法
基础分页。
</cn>

```vue
<template>
  <div class="demo-page">
    <Page v-model:current="current" v-model:pageSize="size" :total="50"  show-sizer show-total	show-elevator @change="onChange"/>
    <Page v-model:current="current" v-model:pageSize="size" :total="50"  show-sizer show-total	show-elevator @change="onChange" disabled/>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { message } from 'kui-vue'
const current = ref(1);
const size = ref(15);
const onChange = (page, pageSize) => {
  console.log(page, pageSize);
  message.info(`当前页: ${page}, 每页: ${pageSize}`)
}
</script>
```
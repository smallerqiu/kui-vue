<cn>
#### 普通提示
信息提醒反馈。
</cn>

```vue
<template>
  <div>
    <Button @click="info" type="primary">Show base info </Button>
  </div>
</template>
<script setup>
import { message } from "kui-vue";
import  a from "kui-vue";
//  a.message.info('333')
let count = 0
const info = ()=> {
  count++
  message.info("this is a base message number : "+count);
}
</script>
```
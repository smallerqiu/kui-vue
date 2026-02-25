<cn>
### 固定状态改变的回调 
可以获得是否固定的状态。
</cn>
<en>
### Fixed State Change Callback 
You can get whether it is fixed.
</en>

```vue
<template>
  <Affix @change="change" :offsetTop="200">
    <Button type="primary">200px to affix top</Button>
  </Affix>
</template>
<script setup>
import { message } from "kui-vue";
const change = (value) => {
  message.info(value ? "fixed" : "reset");
};
</script>
```

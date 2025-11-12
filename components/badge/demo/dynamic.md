<cn>
#### 可控
动态控制
</cn>

```vue
<template>
  <div class="demo-dot">
    <Badge :dot="show">
      <div class="box"></div>
    </Badge>
    <Badge :dot="show">
      <Icon :type="NotificationsOutline" />
    </Badge>
    <Badge :dot="show">
      <a href="#">我是一个连接</a>
    </Badge>
    <k-switch @change="show = !show" />
    <br />
    <br />
    <Badge :count="count" :max-count="20">
      <div class="box"></div>
    </Badge>
    <ButtonGroup circle>
      <Button @click="minus">-</Button>
      <Button @click="add">+</Button>
    </ButtonGroup>
  </div>
</template>
<script setup>
import { NotificationsOutline } from "kui-icons";
import { ref } from "vue";
const show = ref(true);
const count = ref(5);
const add = () => count.value++;
const minus = () => count.value--;
</script>
```

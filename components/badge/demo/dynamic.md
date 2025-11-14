<cn>
#### 可控
动态控制
</cn>

```vue
<template>
  <Space>
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
  </Space>
  <Divider />
  <Space :size="20">
    <Badge :count="count" :max-count="20">
      <div class="box"></div>
    </Badge>
    <ButtonGroup circle>
      <Button @click="minus">-</Button>
      <Button @click="add">+</Button>
    </ButtonGroup>
  </Space>
</template>
<script setup>
import { NotificationsOutline } from "kui-icons";
import { ref } from "vue";
const show = ref(true);
const count = ref(5);
const add = () => count.value++;
const minus = () => count.value>=1 && count.value--;
</script>
```

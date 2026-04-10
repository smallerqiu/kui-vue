<cn>
### 自定义时长
可以自定义配置，其中 `duration` 来控制自动关闭时长,默认 `3s`
</cn>
<en>
### Custom Duration
Can be custom configured. Use `duration` to control the auto-close duration (default `3s`).
</en>

```vue
<template>
  <Space vertical>
    <Button @click="config">Closing in 10s</Button>
    <Button @click="config3" type="primary">Manually close</Button>
    <Button @click="destroy" type="primary">Destroy</Button>
  </Space>
</template>
<script setup lang="ts">
import { notice, message } from "kui-vue";

const config = () => {
  notice.open({
    type: "success",
    duration: 10,
    title: "Title",
    content: "Closing in 10s",
  });
};
const config3 = () => {
  notice.open({
    type: "info",
    duration: 0,
    title: "Alert",
    content: "Manually close",
    onClose: () => {
      message.success("I am a callback.");
    },
  });
};
const destroy = () => {
  notice.destroy();
};
</script>
```

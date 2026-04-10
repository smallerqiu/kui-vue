<cn>
### 自定义时长
可以自定义配置，其中 `duration` 来控制自动关闭时长,默认 `3s` , `closable` 显示关闭按钮
</cn>
<en>
### Custom Duration
Can be custom configured. Use `duration` to control the auto-close duration (default `3s`). Use `closable` to show a close button.
</en>

```vue
<template>
  <Space vertical>
    <Button @click="config">Closing in 10s</Button>
    <Button @click="config3" type="primary">Manually close</Button>
    <Button @click="destroy" type="primary">destroy</Button>
  </Space>
</template>
<script setup lang="ts">
import { message } from "kui-vue";

const config = () => {
  message.success("Closing in 10s", 10);
};

const config3 = () => {
  message.show({
    type: "info",
    duration: 0,
    closable: true,
    content: "Manually close",
    onClose: () => {
      message.success("I am callback");
    },
  });
};
const destroy = () => {
  message.destroy();
};
</script>
```

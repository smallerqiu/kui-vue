<cn>
#### 切换主题
简单的切换例子, 开箱即用
</cn>

```vue
<template>
  <Button theme="light" @click="switchMode">切换主题</Button>
</template>

<script setup>
import { theme, message } from "kui-vue";
const switchMode = (event) => {
  message.info(`Current theme mode`);
  theme.setThemeMode(event, (isDark) => {
    message.info(`Current theme mode is ${isDark ? "dark" : "light"}`);
  });
};
</script>
```

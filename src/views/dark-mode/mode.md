<cn>
#### 暗黑模式
简单的切换例子
</cn>

```vue
<template>
  <Button theme="light" @click="switchMode">切换</Button>
</template>

<script setup>
import { theme, message } from "kui-vue";
const api = theme.useTheme();
const switchMode = (event) => {
  api.setThemeMode(event, (isDark) =>
    message.info(isDark ? "暗色模式已开启" : "暗色模式已关闭")
  );
};
</script>
```

<cn>
### 自定义触发器
自定义颜色面板的触发器。
</cn>
<en>
### Custom Trigger
Customize the trigger for the color panel.
</en>

```vue
<template>
  <Space class="demo-color-picker" vertical>
    <Space>
      <ColorPicker v-model="color1">
        <Button type="primary">Open</Button>
      </ColorPicker>
      {{ color1 }}
    </Space>
    <Space>
      <ColorPicker v-model="color2" trigger="hover">
        <Button type="primary">Hover</Button>
      </ColorPicker>
      {{ color2 }}
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const color1 = ref("#3a95ff");
const color2 = ref("red");
</script>
```

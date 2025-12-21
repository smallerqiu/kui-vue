<cn>
### 间距大小
使用 size 设置元素之间的间距，预设了 small、middle、large 三种尺寸，也可以自定义间距。
</cn>

```vue
<template>
  <Flex vertical size="middle">
    <RadioGroup v-model="flexSize">
      <Radio value="small" label="small" />
      <Radio value="middle" label="middle" />
      <Radio value="large" label="large" />
    </RadioGroup>
    <Checkbox v-model="customize" label="customize" />
    <Slider v-model="flexSize" :step="1" :max="50" v-if="customize" />
    <Flex :size="flexSize">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </Flex>
  </Flex>
</template>
<script setup>
import { ref } from "vue";
const flexSize = ref("small");
const gap = ref(8);
const customize = ref(false);
</script>
```

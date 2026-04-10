<cn>
### 间距大小
使用 size 设置元素之间的间距，预设了 small、middle、large 三种尺寸，也可以自定义间距。
</cn>
<en>
### Spacing Size
Use `size` to set the spacing between elements. Presets include `small`, `middle`, and `large`, or you can define a custom spacing.
</en>

```vue
<template>
  <Flex vertical size="middle">
    <RadioGroup v-model="flexSize" @change="changeSize">
      <Radio value="small" label="small" />
      <Radio value="middle" label="middle" />
      <Radio value="large" label="large" />
    </RadioGroup>
    <Checkbox v-model="isCustomize" label="customize" />
    <Slider v-model="customize" :step="1" :max="50" v-if="isCustomize" @change="changeSize" />
    <Flex :size="flexSize">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import { ref } from "vue";
const flexSize = ref("small");
const customize = ref(8);
const isCustomize = ref(false);
const changeSize = (value) => {
  flexSize.value = value;
};
</script>
```

<cn>
### 自定义
通过 `title` 来设置标题， `width` 控制宽度， 还有 `placement` 控制方向
</cn>

```vue
<template>
  <div>
    <Space wrap>
      <RadioGroup v-model="placement">
        <Radio label="left" value="left" />
        <Radio label="top" value="top" />
        <Radio label="right" value="right" />
        <Radio label="bottom" value="bottom" />
      </RadioGroup>
      <Button @click="show = true">Open</Button>
    </Space>
    <Drawer
      v-model="show"
      height="300"
      :placement="placement"
      title="What's your name? "
      cancelText="Cancel"
      okText="Ok"
      @ok="show = false"
    >
      My name is Qiu.
    </Drawer>
  </div>
</template>
<script setup>
import { ref } from "vue";
const show = ref(false);
const placement = ref("left");
</script>
```

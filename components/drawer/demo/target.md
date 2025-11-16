<cn>
#### 植入目标元素
可以在目标元素内展开
</cn>

```vue
<template>
  <Space>
    <RadioGroup v-model:value="placement" type="button">
      <RadioButton label="left" value="left" />
      <RadioButton label="top" value="top" />
      <RadioButton label="right" value="right" />
      <RadioButton label="bottom" value="bottom" />
    </RadioGroup>
    <Button @click="show = !show">Open</Button>
  </Space>
  <br />
  <br />
  <Flex ref="refTarget" :style="boxStyle" align="center" justify="center">
    <p style="color:#999">Drawer 在内部展示.</p>
  </Flex>
  <Drawer
    v-model:show="show"
    width="200"
    :footer="null"
    :placement="placement"
    :target="() => refTarget"
  >
    <p>something ...</p>
    <p>something ...</p>
    <p>something ...</p>
  </Drawer>
</template>
<script setup>
import { ref, computed } from "vue";
const show = ref(false);
const placement = ref("left");
const refTarget = ref();
const boxStyle = {
  height: "300px",
  position: "relative",
  overflow: "hidden",
  borderRadius: "8px",
  background: "rgba(130, 130, 130, 0.18)",
};
</script>
```

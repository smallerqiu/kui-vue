
<cn>
#### 植入目标元素
可以在目标元素内展开
</cn>

```vue
<template>
  <div ref="refTarget" style="height:300px;position:relative;overflow:hidden;background:rgba(130, 130, 130, 0.28);">
    <Space>
      <RadioGroup v-model:value="placement">
        <Radio label="left" value="left"/>
        <Radio label="top" value="top"/>
        <Radio label="right" value="right"/>
        <Radio label="bottom" value="bottom"/>
      </RadioGroup>
      <Button @click="show=!show">Open</Button>
    </Space>
    <Drawer v-model:show="show" width="200" 
      :footer="null" 
      :placement="placement"
      :target="()=>refTarget">
      <p>something ...</p>
      <p>something ...</p>
      <p>something ...</p>
    </Drawer>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const placement = ref('left')
const refTarget = ref()
</script>
```
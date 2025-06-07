<cn>
#### 自定义
可通过 icon 定义图标和 shape='circle' 呈现外型
</cn>

```vue
<template>
  <div class="demo-color-picker">
   <Form>
    <FormItem label="没有下拉箭头">
      <ColorPicker showMode v-model:value="color1" :showArrow="false"/>
      {{color1}}
    </FormItem>
    <FormItem label="自定义下拉箭头">
      <ColorPicker showMode v-model:value="color2" mode="rgba" :icon="CaretDown"/>
    </FormItem> 
   </Form>
  </div>
</template>
<script setup>
import { CaretDown } from "kui-icons";
const color1 = '#3a95ff'
const color2 = '#3a95ff' 
</script> 
```
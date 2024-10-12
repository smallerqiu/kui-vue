<cn>
#### 自定义
可通过 icon 定义图标和 shape='circle' 呈现外型
</cn>

```vue
<template>
  <div class="demo-color-picker">
   <Form>
    <FormItem label="没有下拉箭头">
      {{color1}}
      <ColorPicker showMode v-model="color1" :showArrow="false"/>
    </FormItem>
    <FormItem label="自定义下拉箭头">
      <ColorPicker showMode v-model="color2" mode="rgba" :icon="CaretDown"/>
    </FormItem>
    <FormItem label="圆形">
      <ColorPicker showMode v-model="color3"  mode="hsla" shape="circle" :showArrow="false"/>
    </FormItem>
   </Form>
  </div>
</template>
<script>
import { CaretDown } from "kui-icons";
export default {
  data() {
    return {
      CaretDown,
      color1: '#f44336',
      color2: '#9c27b0',
      color3: '#03a9f4',
    };
  }
}
</script> 
```
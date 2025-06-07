<cn>
#### 颜色模式
可以切换颜色模式,使用 `show-mode` 来展示 颜色模式
</cn>

```vue
<template>
  <div class="demo-color-picker">
   <Form>
    <FormItem label="Default">
      <ColorPicker showMode v-model:value="color1"/>
    </FormItem>
    <FormItem label="Rgba">
      <ColorPicker showMode v-model:value="color2" mode="rgba"/>
    </FormItem>
    <FormItem label="Hsla">
      <ColorPicker showMode v-model:value="color3"  mode="hsla"/>
    </FormItem>
   </Form>
  </div>
</template>
<script setup>
const color1 = '#3a95ff'
const color2 = '#3a95ff'
const color3 = '#3a95ff'
</script> 
```
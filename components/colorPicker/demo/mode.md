<cn>
#### 颜色模式
可以切换颜色模式,使用 `show-mode` 来展示 颜色模式
</cn>

```vue
<template>
  <div class="demo-color-picker">
   <Form>
    <FormItem label="Default">
      <ColorPicker showMode v-model="color1"/>
    </FormItem>
    <FormItem label="Rgba">
      <ColorPicker showMode v-model="color2" mode="rgba"/>
    </FormItem>
    <FormItem label="Hsla">
      <ColorPicker showMode v-model="color3"  mode="hsla"/>
    </FormItem>
   </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color1: '#f44336',
      color2: '#9c27b0',
      color3: '#03a9f4',
    };
  }
}
</script> 
```
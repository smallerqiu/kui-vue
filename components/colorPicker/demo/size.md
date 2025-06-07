<cn>
#### 尺寸大小
`small` 为小尺寸， `large` 为大尺寸
</cn>

```vue
<template>
  <div class="demo-color-picker">
     <Form>
      <FormItem label="large">
        <ColorPicker showMode v-model:value="color1" size="large"/>
      </FormItem>
      <FormItem label="Default">
        <ColorPicker showMode v-model:value="color2" mode="rgba"/>
      </FormItem>
      <FormItem label="small">
        <ColorPicker showMode v-model:value="color3"  mode="hsla" size="small" />
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
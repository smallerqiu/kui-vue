<cn>
#### 尺寸大小
`small` 为小尺寸， `large` 为大尺寸
</cn>

```vue
<template>
  <div class="demo-color-picker">
     <Form>
      <Form.Item label="large">
        <ColorPicker showMode v-model="color1" size="large"/>
      </Form.Item>
      <Form.Item label="Default">
        <ColorPicker showMode v-model="color2" mode="rgba"/>
      </Form.Item>
      <Form.Item label="small">
        <ColorPicker showMode v-model="color3"  mode="hsla" size="small" />
      </Form.Item>
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
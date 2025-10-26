<cn>
#### 禁用透明度
禁用颜色透明度。
</cn>

```vue
<template>
  <Space class="demo-color-picker" vertical>
    <Space>
      <ColorPicker v-model="color1">
        <Button type="primary">Open</Button>
      </ColorPicker>
      {{color1}}
    </Space>
    <Space>
      <ColorPicker v-model="color2" trigger="hover">
        <Button type="primary">Hover</Button>
      </ColorPicker>
      {{color2}}
    </Space>
  </Space>
</template>
<script>
export default {
  data() {
    return {
      color1: '#3a95ff',
      color2: 'red',
    };
  }
}
</script> 
```
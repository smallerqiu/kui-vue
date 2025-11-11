<cn>
#### 自定义颜色盘
可以定义默认的颜色盘
</cn>

```vue
<template>
  <div class="demo-color-picker">
    <ColorPicker v-model:value="color" :presets="colors" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: '#3a95ff',
      colors: ['#9c27b0','red','blue'],
    };
  }
}
</script> 
```
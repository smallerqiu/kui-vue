<cn>
#### 基本用法
默认可以同时展开一个或者多个面板
</cn>

```vue
<template>
  <div class="demo-color-picker">
    <ColorPicker v-model="color"/>
    <br/>
    <ColorPicker v-model="color" disabled/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: 'red',
    };
  }
}
</script> 
```
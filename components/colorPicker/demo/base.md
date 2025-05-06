<cn>
#### 基本用法
默认可以同时展开一个或者多个面板
</cn>

```vue
<template>
  <div class="demo-color-picker">
    <ColorPicker v-model:value="color"/>
    <br/>
    <ColorPicker v-model:value="color" disabled/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: 'rgba(182,2,247,1)',
    };
  }
}
</script> 
```
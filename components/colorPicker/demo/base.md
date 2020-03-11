<cn>
#### 基本用法
默认可以同时展开一个或者多个面板
</cn>

```tpl
<template>
  <div class="demo-collapse">
    <ColorPicker v-model="color"/>
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
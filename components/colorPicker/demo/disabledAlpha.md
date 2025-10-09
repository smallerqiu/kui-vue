<cn>
#### 禁用透明度
禁用颜色透明度。
</cn>


```vue
<template>
  <ColorPicker v-model="color" disabledAlpha/>
</template>
<script>
export default {
  data() {
    return {
      color: '#3a95ff',
    };
  }
}
</script> 
```
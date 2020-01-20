<cn>
#### 尺寸大小
`mini` 为小尺寸， `large` 为大尺寸
</cn>

```tpl
<template>
  <div class="demo-collapse">
    <ColorPicker showMode v-model="color1" large/>
    <ColorPicker showMode v-model="color2" mode="rgba"/>
    <ColorPicker showMode v-model="color3"  mode="hsla" mini/>
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
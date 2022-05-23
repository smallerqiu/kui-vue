<cn>
#### 基本用法 
基本用法 
</cn>

```vue
<template>
  <div style="width:520px;">
     <Slider v-model="v1" :step="10" :disabled="disabled" :min="20"/>
     <Slider v-model="v2" range :disabled="disabled" :min="10" :max="80"/>
     
     <Slider :marks="{ 0: '0°C',25: '25°C', 36: '36°C',100: '100°C', }"
      :step="null"
      :disabled="disabled"
      :value="30"></Slider>
     <br />
     <br />
     Disabled: <Switch v-model="disabled" />
  </div>
</template>
<script>
export default{
  data(){
    return{
     disabled: false ,
     v1: 30,
     v2: [30, 50]
    }
  }
}
</script>
```
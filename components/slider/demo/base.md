<cn>
#### 基本用法 
基本用法 
</cn>

```vue
<template>
  <div style="width:520px;">
     <Slider v-model="v1" :step="10" :disabled="disabled"/>
     <Slider v-model="v2" range :disabled="disabled"/>
     <br/>
     <br/>
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
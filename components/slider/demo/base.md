<cn>
#### 基本用法 
基本用法 
</cn>

```vue
<template>
  <div>
     <Slider value="30"/>
     <Slider value="30" disabled/>
     <br/>
     <br/>
     <Space>
        <Slider min="1" v-model="v" max="10"/>
        <Input v-model="v" size="small" style="width:60px">
     </Space>
     <br/>
     <br/>
     <Space>
        <Slider min="1" v-model="v2" max="10" :step="0.1"/>
        <Input v-model="v2" size="small" style="width:60px">
     </Space>
  </div>
</template>
<script>
export default{
  data(){
    return{
      v:3,
      v2:3.5
    }
  }
}
</script>
```
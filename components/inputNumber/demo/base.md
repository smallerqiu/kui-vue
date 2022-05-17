<cn>
#### 基本用法 
基本用法 
</cn>

```vue
<template>
  <div style="width:200px;font-size:12px;">
     简单数字输入框<br/>
     <InputNumber v-model="value"/>
     <br/>
     <br/>
     步长为2<br/>
     <InputNumber :step="2" :value="2"/>
     <br/>
     <br/>
     设置了上下界 min=1,max=10<br/>
     <InputNumber :min="1" :max="10"/>
     <br/>
     <br/>
     禁用<br/>
     <InputNumber disabled />
  </div>
</template>
<script>
export default{
  data() {
    return {
      value: ''
    }
  }
}
</script>
```
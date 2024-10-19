<cn>
#### 基本用法 
基本用法 
</cn>

```vue
<template>
  <Space style="width:200px;font-size:12px;" vertical>
     简单数字输入框
     <InputNumber v-model="value"/>
     步长为2
     <InputNumber :step="2" :value="2"/>
     设置了上下界 min=1,max=10
     <InputNumber :min="1" :max="10"/>
     禁用
     <InputNumber disabled />
  </Space>
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
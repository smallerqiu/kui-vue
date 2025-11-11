<cn>
#### 基本用法 
基本用法 
</cn>

```vue
<template>
  <Space style="font-size:12px;" vertical>
     简单数字输入框: {{value1}}
     <Space block>
      <InputNumber v-model:value="value1" :keyboard="keyboard" :controls="showControls" style="width: 150px;"/>
      <Checkbox v-model:checked="keyboard">Toggle keyboard</Checkbox>
      <Checkbox v-model:checked="showControls">Toggle controls</Checkbox>
     </Space>
     步长为2: {{value2}}
     <InputNumber :step="2" v-model:value="value2"/>
     设置了上下界 min=1,max=10: {{value3}}
     <InputNumber :min="1" :max="10" v-model:value="value3"/>
     禁用
     <InputNumber disabled />
  </Space>
</template>
<script>
export default{
  data() {
    return {
      value1: '1',
      value2: '',
      value3: '',
      keyboard: true,
      showControls: true
    }
  }
}
</script>
```
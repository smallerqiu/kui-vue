<cn>
#### 基本用法 
基本用法 ,使用 keyboard 属性可以控制键盘行为。
</cn>

```vue
<template>
  <Space style="width:200px;font-size:12px;" vertical>
     简单数字输入框: {{value1}}
     <Space>
     <InputNumber v-model:value="value1" :keyboard="keyboard" :controls="showControls"/>
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
<script setup>
import {ref} from 'vue'
const value1 = ref('1')
const value2 = ref('')
const value3 = ref('')
const keyboard = ref(true)
const showControls = ref(true)
</script>
```
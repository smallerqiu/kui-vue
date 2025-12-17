<cn>
### 高精度小数/格式化展示 
通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。 
</cn>

```vue
<template>
  <Space vertical block>
    <code> 0.1+0.2 = 0.3 (yes) ,输出：{{ n }}</code>
    <InputNumber :step="0.2" v-model="n" />
    <code>步长为 0.00000000000001 ,输出：{{ n1 }}</code>
    <InputNumber
      v-model="n1"
      :min="0"
      :max="10"
      :step="0.00000000000001"
    />
    <code>保留2位小数, 输出：{{ n3 }}</code>
    <InputNumber :precision="2" v-model="n3" />
    <code> 货币，千分位,输出： {{ n4 }}</code>
    <InputNumber
      v-model="n4"
      :min="0"
      :formatter="
        (value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      "
      :parser="(value) => value.replace(/\￥\s?|(,*)/g, '')"
    />
    <code>百分比% ,输出： {{ n5 }}</code>
    <InputNumber
      v-model="n5"
      :min="0"
      :max="100"
      :formatter="(value) => `${value}%`"
      :parser="(value) => value.replace('%', '')"
    />
    <code>只能输入数字,输出： {{ n6 }}</code>
    <InputNumber
      v-model="n6"
      :formatter="(value) => value.replace(/\D/g, '')"
    />
    <code>自定义 ,输出：{{ n7 }}</code>
    <InputNumber
      v-model="n7"
      :formatter="(value) => String(value).split('').join('-')"
      :parser="(value) => value.replace(/\-/g, '')"
    />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const n = ref(0.1);
const n1 = ref(0.1);
const n3 = ref(3.14159);
const n4 = ref(1000);
const n5 = ref(98);
const n6 = ref("");
const n7 = ref(111111);
</script>
```

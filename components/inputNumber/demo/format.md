<cn>
#### 高精度小数/格式化展示 
通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。 
</cn>

```vue
<template>
  <Space style="max-width:520px;font-size:12px" vertical block>
    0.1+0.2 = 0.3 (yes) ,输出：{{ n }}
    <InputNumber :step="0.2" v-model="n" />
    步长为 0.00000000000001 ,输出：{{ n1 }}
    <InputNumber v-model="n1" :min="0" :max="10" :step="0.00000000000001" />
    保留2位小数, 输出：{{ n3 }}
    <InputNumber :precision="2" v-model="n3" />
    货币，千分位,输出： {{ n4 }}
    <InputNumber
      @change="log"
      v-model="n4"
      :min="0"
      :formatter="
        (value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      "
      :parser="(value) => value.replace(/\￥\s?|(,*)/g, '')"
    />
    百分比% ,输出： {{ n5 }}
    <InputNumber
      v-model="n5"
      :min="0"
      :max="100"
      :formatter="(value) => `${value}%`"
      :parser="(value) => value.replace('%', '')"
    />
    只能输入数字,输出： {{ n6 }}
    <InputNumber
      v-model="n6"
      :formatter="(value) => value.replace(/\D/g, '')"
    />
    自定义 ,输出：{{ n7 }}
    <InputNumber
      v-model="n7"
      :formatter="(value) => String(value).split('').join('-')"
      :parser="(value) => value.replace(/\-/g, '')"
    />
  </Space>
</template>
<script>
export default {
  data() {
    return {
      n: 0.1,
      n1: 1,
      n3: 3.14159,
      n4: 1000,
      n5: 100,
      n6: "",
      n7: 111111,
    };
  },
  methods: {
    log(value) {
      console.log(value);
    },
  },
};
</script>
```

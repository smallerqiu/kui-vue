<template>
  <Space vertical block>
    <code> 0.1+0.2 = 0.3 (yes) ,output：{{ n }}</code>
    <InputNumber :step="0.2" v-model="n" />
    <code>step is 0.00000000000001 ,output：{{ n1 }}</code>
    <InputNumber v-model="n1" :min="0" :max="10" :step="0.00000000000001" />
    <code>Keep 2 decimal places, output：{{ n3 }}</code>
    <InputNumber :precision="2" v-model="n3" />
    <code> Currency, thousandths,output： {{ n4 }}</code>
    <InputNumber
      v-model="n4"
      :min="0"
      :formatter="(value) => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="(value) => value.replace(/\￥\s?|(,*)/g, '')"
    />
    <code>percent % ,output： {{ n5 }}</code>
    <InputNumber
      v-model="n5"
      :min="0"
      :max="100"
      :formatter="(value) => `${value}%`"
      :parser="(value) => value.replace('%', '')"
    />
    <code>custom ,output：{{ n7 }}</code>
    <InputNumber
      v-model="n7"
      :formatter="(value) => String(value).split('').join('-')"
      :parser="(value) => value.replace(/\-/g, '')"
    />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const n = ref(0.1);
const n1 = ref(0.1);
const n3 = ref(3.14159);
const n4 = ref(1000);
const n5 = ref(98);
const n6 = ref("");
const n7 = ref(111111);
</script>
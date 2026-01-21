<cn>
### 卡片展示
用于 Dashboard 场景
</cn>

```vue
<template>
  <Space vertical block>
    <Checkbox v-model="bordered">Show border</Checkbox>
    <Space block style="max-width: 900px;">
      <StatCard title="今日订单" :items="items" :bordered="bordered" />
      <StatCard
        statNumberType="rollup"
        title="今日进账"
        :items="items1"
        :bordered="bordered"
      />
      <StatCard
        statNumberType="rollup"
        title="媒体数据"
        :items="items2"
        :bordered="bordered"
      >
      </StatCard>
    </Space>
  </Space>
</template>
<script setup>
import { ref, h } from "vue";
import { Star, Heart } from "kui-icons";
const bordered = ref(false);
const items = [
  { value: 5872, desc: "订单数" },
  { value: 9873672, desc: "订单总金额", prefix: "￥" },
];

const items1 = [
  { value: 5872, desc: "支付宝收入", prefix: "$", precision: 2 },
  { value: 9873672, desc: "微信收入", prefix: "￥", precision: 2 },
];
const items2 = [
  {
    value: 5872,
    desc: "点赞人数",
    prefix: h("Icon", { props: { type: Heart } }),
  },
  {
    value: 9873672,
    desc: "收藏人数",
    prefix: h("Icon", { props: { type: Star } }),
  },
];
</script>
```

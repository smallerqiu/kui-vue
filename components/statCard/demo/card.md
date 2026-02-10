<cn>
### 卡片展示
用于 Dashboard 场景 , 结合 `Grid` 可以很好的适配多种设备. 
</cn>

```vue
<template>
  <Space vertical block>
    <Space>
      <Checkbox v-model="showTitle">Show Title</Checkbox>
      <Checkbox v-model="bordered">Show border</Checkbox>
      <Checkbox v-model="reverse">Reverse</Checkbox>
    </Space>
    <Grid :cols="{ xs: 1, sm: 2, md: 3 }" :xGap="16" :yGap="16">
      <GridItem>
        <StatCard
          :title="showTitle ? '今日订单' : null"
          :reverse="reverse"
          :items="items"
          :bordered="bordered"
        />
      </GridItem>
      <GridItem>
        <StatCard
          statNumberType="rollup"
          :title="showTitle ? '今日进账' : null"
          :items="items1"
          :bordered="bordered"
          :reverse="reverse"
        />
      </GridItem>
      <GridItem :span="{ xs: 1, sm: 2, md: 1 }">
        <StatCard
          :reverse="reverse"
          statNumberType="rollup"
          :title="showTitle ? '媒体数据' : null"
          :items="items2"
          :bordered="bordered"
        />
      </GridItem>
    </Grid>
  </Space>
</template>
<script setup>
import { ref, h } from "vue";
import { Icon } from "kui-vue";
import { Star, Heart } from "kui-icons";
const showTitle = ref(true);
const reverse = ref(false);
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
    prefix: h(Icon, { type: Heart }),
  },
  {
    value: 9873672,
    desc: "收藏人数",
    prefix: h(Icon, { type: Star }),
  },
];
</script>
<style scoped>
.k-stat-card {
  /* min-width: 330px; */
}
</style>
```

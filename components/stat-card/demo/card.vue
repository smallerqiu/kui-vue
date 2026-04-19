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
          :title="showTitle ? `Today's Orders` : null"
          :reverse="reverse"
          :items="items"
          :bordered="bordered"
        />
      </GridItem>
      <GridItem>
        <StatCard
          statNumberType="rollup"
          :title="showTitle ? `Today's income` : null"
          :items="items1"
          :bordered="bordered"
          :reverse="reverse"
        />
      </GridItem>
      <GridItem :span="{ xs: 1, sm: 2, md: 1 }">
        <StatCard
          :reverse="reverse"
          statNumberType="rollup"
          :title="showTitle ? 'Media data' : null"
          :items="items2"
          :bordered="bordered"
        />
      </GridItem>
    </Grid>
  </Space>
</template>
<script setup lang="ts">
import { Heart, Star } from "kui-icons";
import { Icon } from "kui-vue";
import { h, ref } from "vue";
const showTitle = ref(true);
const reverse = ref(false);
const bordered = ref(false);
const items = [
  { value: 5872, desc: "Number of orders" },
  { value: 9873672, desc: "Total Order Amount", prefix: "￥" },
];

const items1 = [
  { value: 5872, desc: "Alipay Revenue", prefix: "$", precision: 2 },
  { value: 9873672, desc: "WeChat Revenue", prefix: "￥", precision: 2 },
];
const items2 = [
  {
    value: 5872,
    desc: "Number of likes",
    prefix: h(Icon, { type: Heart }),
  },
  {
    value: 9873672,
    desc: "Number of Favorites",
    prefix: h(Icon, { type: Star }),
  },
];
</script>
<style scoped>
.k-stat-card {
  /* min-width: 330px; */
}
</style>

<template>
  <Space vertical block>
    <Space>
      <Checkbox v-model="showTitle">Show Title</Checkbox>
      <Checkbox v-model="bordered">Show border</Checkbox>
      <Checkbox v-model="reverse">Reverse</Checkbox>
      <RadioGroup v-model="size" type="button" theme="card" :options="sizes" />
    </Space>
    <Grid :cols="{ xs: 1, sm: 2, md: 3 }" :xGap="16" :yGap="16">
      <GridItem>
        <StatCard
          :title="showTitle ? `Today's Orders` : undefined"
          :reverse="reverse"
          :items="items"
          :bordered="bordered"
          :size="size"
        />
      </GridItem>
      <GridItem>
        <StatCard
          statNumberType="rollup"
          :title="showTitle ? `Today's income` : undefined"
          :items="items1"
          :bordered="bordered"
          :reverse="reverse"
          :size="size"
        />
      </GridItem>
      <GridItem :span="{ xs: 1, sm: 2, md: 1 }">
        <StatCard
          :reverse="reverse"
          statNumberType="rollup"
          :title="showTitle ? 'Media data' : undefined"
          :items="items2"
          :bordered="bordered"
          :size="size"
        />
      </GridItem>
    </Grid>
  </Space>
</template>
<script setup lang="ts">
import { Heart, Star } from "kui-icons";
import { Icon, type SizeType, type StatNumberItem } from "kui-vue";
import { h, ref } from "vue";
const showTitle = ref(true);
const reverse = ref(false);
const bordered = ref(false);
const size = ref<SizeType>("medium");
const sizes: SizeType[] = ["small", "medium", "large"];
const items = [
  { value: 5872, desc: "Number of orders" },
  { value: 9873672, desc: "Total Order Amount", prefix: "￥" },
];

const items1 = [
  { value: 5872, desc: "Alipay Revenue", prefix: "$", precision: 2 },
  { value: 9873672, desc: "WeChat Revenue", prefix: "￥", precision: 2 },
];
const items2: StatNumberItem[] = [
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

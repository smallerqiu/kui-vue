<template>
  <Grid :cols="{ xs: 1, sm: 2, md: 4 }" :xGap="16" :yGap="16">
    <GridItem v-for="item in cards" :key="item.title">
      <StatCard :title="item.title" :items="[item.data]" reverse bordered />
    </GridItem>
  </Grid>
</template>

<script setup lang="ts">
import type { StatNumberItem } from "kui-vue";

const cards: Array<{ title: string; data: StatNumberItem }> = [
  {
    title: "请求数",
    data: {
      value: 12840,
      separator: ",",
      desc: "本月累计",
      trend: "+18.2% 较上月",
      trendStatus: "success",
    },
  },
  {
    title: "转化率",
    data: {
      value: 8.6,
      precision: 1,
      suffix: "%",
      desc: "本周平均",
      trend: "接近目标值",
      trendStatus: "warning",
    },
  },
  {
    title: "退款率",
    data: {
      value: 2.4,
      precision: 1,
      suffix: "%",
      desc: "近 30 天",
      trend: "+0.6% 需要关注",
      trendStatus: "danger",
    },
  },
  {
    title: "在线用户",
    data: {
      value: 3268,
      separator: ",",
      desc: "当前数据",
    },
  },
];
</script>

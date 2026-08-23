<template>
  <Grid :cols="{ xs: 2, md: 4 }" :x-gap="12" :y-gap="12">
    <GridItem v-for="item in entries" :key="item.title">
      <FeatureCard
        :icon="item.icon"
        :title="item.title"
        :color="item.color"
        size="small"
        direction="vertical"
        theme="outline"
        clickable
        @click="message.info(item.title)"
      />
    </GridItem>
  </Grid>
</template>
<script setup lang="ts">
import { FolderKanban, ShoppingCart, Users, Wallet } from "kui-icons";
import { message } from "kui-vue";
const entries = [
  { title: "项目管理", icon: FolderKanban, color: "#3a95ff" },
  { title: "订单管理", icon: ShoppingCart, color: "#7b61ff" },
  { title: "客户管理", icon: Users, color: "#22a06b" },
  { title: "财务报表", icon: Wallet, color: "#f59e0b" },
];
</script>

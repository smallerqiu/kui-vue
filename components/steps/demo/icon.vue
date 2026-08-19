<template>
  <Steps :current="1" :items="items" />
</template>
<script setup lang="ts">
import { CircleCheck, CreditCard, User } from "kui-icons";
import { Icon } from "kui-vue";
import { h } from "vue";
const items = [
  { title: "账号信息", icon: h(Icon, { type: User }) },
  { title: "支付方式", icon: h(Icon, { type: CreditCard }) },
  { title: "完成", icon: h(Icon, { type: CircleCheck }) },
];
</script>

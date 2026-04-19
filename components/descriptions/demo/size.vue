<template>
  <RadioGroup :options="types" v-model="size" type="button" />
  <br />
  <br />
  <Descriptions title="Order Information" bordered :size="size">
    <template #extra>
      <Button size="small" type="primary">Update Information</Button>
    </template>
    <DescriptionsItem label="Order Numbers">20202203302200</DescriptionsItem>
    <DescriptionsItem label="Name">Qiu</DescriptionsItem>
    <DescriptionsItem label="Phone">13888888888</DescriptionsItem>
    <DescriptionsItem label="Price">￥ 199.99</DescriptionsItem>
    <DescriptionsItem label="Discount Amount">￥ 0.99</DescriptionsItem>
    <DescriptionsItem label="Paid Amount">￥ 199.00</DescriptionsItem>
    <DescriptionsItem label="Remark" :span="5">
      Please deliver the goods to: <br />
      No. 188, Guanggu, Hongshan District, Wuhan City, Hubei Province <br />
      Kindly ask the courier to handle with care.<br />
      Thank you!
    </DescriptionsItem>
  </Descriptions>
  <br />
  <br />
  <Descriptions title="Order Information" :size="size">
    <template #extra>
      <Button size="small" type="primary">Update Information</Button>
    </template>
    <DescriptionsItem label="Order Numbers">20202203302200</DescriptionsItem>
    <DescriptionsItem label="Price">￥ 199.99</DescriptionsItem>
    <DescriptionsItem label="Name">Qiu</DescriptionsItem>
    <DescriptionsItem label="Phone">13888888888</DescriptionsItem>
    <DescriptionsItem label="Shipping Address">
      No. 188, Guanggu, Hongshan District, Wuhan City, Hubei Province
    </DescriptionsItem>
  </Descriptions>
</template>
<script setup lang="ts">
import type { SizeType } from "kui-vue";
import { ref } from "vue";
const size = ref<SizeType>("default");
const types = ref([
  { label: "Default", value: "default" },
  { label: "Middle", value: "middle" },
  { label: "Small", value: "small" },
]);
</script>

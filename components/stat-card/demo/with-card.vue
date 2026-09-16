<template>
  <Space vertical class="demo-view-fill">
    <Card>
      <StatNumber v-model="value" prefix="$" suffix="%" style="font-size: 2em" />
    </Card>
    <Card title="Today's Trends">
      <StatNumber v-model="value" suffix="%" style="font-size: 2em; color: green">
        <template #prefix><Icon :type="ArrowUp" /></template>
      </StatNumber>
    </Card>
    <Card title="Yesterday's Trend">
      <StatNumber v-model="value" suffix="%" style="font-size: 2em; color: red" type="rollup">
        <template #prefix><Icon :type="ArrowDown" /></template>
      </StatNumber>
    </Card>

    <Button @click="change">change</Button>
  </Space>
</template>
<script setup lang="ts">
import { ArrowDown, ArrowUp } from "kui-icons";
import { ref } from "vue";
const value = ref(Math.random() * 100000);
const change = () => {
  value.value = Math.random() * 100000;
};
</script>

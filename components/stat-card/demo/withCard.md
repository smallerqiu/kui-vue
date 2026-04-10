<cn>
### 奇奇怪怪的卡片
</cn>
<en>
### Strange Cards
</en>

```vue
<template>
  <Space vertical class="demo-view-fill">
    <Card :bordered="false">
      <StatNumber v-model="value" prefix="$" suffix="%" style="font-size: 2em;" />
    </Card>
    <Card :bordered="false" title="Today's Trends">
      <StatNumber v-model="value" suffix="%" style="font-size: 2em;color:green">
        <template #prefix><Icon :type="ArrowUp" /></template>
      </StatNumber>
    </Card>
    <Card :bordered="false" title="Yesterday's Trend">
      <StatNumber v-model="value" suffix="%" style="font-size: 2em;color: red;" type="rollup">
        <template #prefix><Icon :type="ArrowDown" /></template>
      </StatNumber>
    </Card>

    <Button @click="change">change</Button>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { ArrowUp, ArrowDown } from "kui-icons";
const value = ref(Math.random() * 100000);
const change = () => {
  value.value = Math.random() * 100000;
};
</script>
```

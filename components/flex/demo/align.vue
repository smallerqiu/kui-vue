<template>
  <Flex vertical size="small" align="start">
    <span>Justify</span>
    <RadioGroup v-model="justify" theme="card" type="button">
      <RadioButton v-for="(item, index) in justifyOps" :key="index" :value="item">
        {{ item }}
      </RadioButton>
    </RadioGroup>
    <span>Align</span>
    <RadioGroup v-model="align" theme="card" type="button">
      <RadioButton v-for="(item, index) in alignOps" :key="index" :value="item">
        {{ item }}
      </RadioButton>
    </RadioGroup>
    <Flex
      :align="align"
      :justify="justify"
      :style="{
        width: '100%',
        height: '120px',
        border: '1px solid var(--kui-color-bg-2)',
        'border-radius': '5px',
      }"
    >
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import type { FlexAlignType, FlexJustifyType } from "kui-vue";
import { ref } from "vue";
const justify = ref<FlexJustifyType>("flex-start");
const align = ref<FlexAlignType>("flex-start");
const justifyOps = ref([
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
]);
const alignOps = ref(["flex-start", "center", "flex-end"]);
</script>

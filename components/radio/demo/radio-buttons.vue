<template>
  <Space vertical>
    <Space>
      <code>Shape : </code>
      <RadioGroup v-model="shape" size="small" type="button">
        <RadioButton value="round" label="Round" />
        <RadioButton value="circle" label="Circle" />
        <RadioButton value="square" label="Square" />
      </RadioGroup>
    </Space>
    <Space>
      <code>Theme :</code>
      <RadioGroup v-model="theme" size="small" type="button">
        <RadioButton value="default">Default</RadioButton>
        <RadioButton value="fill" label="Fill" />
        <RadioButton value="card" label="Card" />
        <RadioButton value="outline" label="Outline" />
      </RadioGroup>
    </Space>
    <Space>
      <code>Size :</code>
      <RadioGroup v-model="size" type="button" size="small" :options="sizes"> </RadioGroup>
    </Space>
    <Space>
      <code>Direction :</code>
      <RadioGroup v-model="direction" type="button" size="small" :options="directions">
      </RadioGroup>
    </Space>
    <Space>
      <code>Type :</code>
      <RadioGroup v-model="type" type="button" size="small" :options="types"> </RadioGroup>
    </Space>
    <br />
    <RadioGroup
      v-model="value"
      :size="size"
      :theme="theme"
      :shape="shape"
      :options="dates"
      :direction="direction"
      :type="type"
    >
    </RadioGroup>
  </Space>
</template>
<script setup lang="ts">
import { LogoApple } from "kui-icons";
import type { DirectionType, RadioType, ShapeType, SizeType, ThemeType } from "kui-vue";
import { ref } from "vue";
const size = ref<SizeType>("medium");
const shape = ref<ShapeType>("round");
const theme = ref<ThemeType>("default");
const direction = ref<DirectionType>("horizontal");
const type = ref<RadioType>("button");
const value = ref(0);
const dates = [
  { label: "1 week", value: 0 },
  { label: "1 month", value: 1 },
  { label: "Q1", value: 2 },
  { label: "1 year", value: 3 },
  { label: "5 years", value: 4, disabled: true },
];
const directions = [
  { label: "Horizontal", value: "horizontal" },
  { label: "Vertical", value: "vertical" },
];
const types = [
  { label: "Radio", value: "radio" },
  { label: "Button", value: "button" },
];
const sizes = [
  { label: "Large", value: "large", icon: LogoApple },
  { label: "Medium", value: "medium" },
  { label: "Small", value: "small" },
];
</script>

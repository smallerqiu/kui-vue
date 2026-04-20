<template>
  <Space :size="15">
    <Checkbox v-model="animated" label="Animated" />
    <Checkbox v-model="block" label="Button block" />
    Size: <RadioGroup :options="sizes" v-model="size" type="button" />
  </Space>
  <br />
  <br />
  <Space :size="15">
    Button Shape:
    <RadioGroup :options="btnShapes" v-model="btnShape" type="button" />
    Avatar Shape:
    <RadioGroup :options="avatarShapes" v-model="avatarShape" type="button" />
  </Space>
  <br />
  <br />
  <Space :size="15"> Image radius: <Slider v-model="radius" style="width: 300px" /> </Space>
  <br />
  <Space :size="15">
    Image Size:
    <Slider v-model="imgSize" range :min="96" :max="320" style="width: 300px" />
  </Space>
  <br />
  <br />
  <Space>
    <SkeletonButton :animated="animated" :size="size" :shape="btnShape" />
    <SkeletonAvatar :animated="animated" :size="size" :shape="avatarShape" />
    <SkeletonText :animated="animated" :size="size" style="width: 200px" />
  </Space>
  <br />
  <br />
  <SkeletonButton :animated="animated" :size="size" :shape="btnShape" :block="block" />
  <br />
  <br />
  <SkeletonImage :animated="animated" :radius="radius" :size="imgSize" />
</template>
<script setup lang="ts">
import type { ShapeType } from "kui-vue";
import { ref } from "vue";

const sizes = [
  { label: "Small", value: "small" },
  { label: "Default", value: "default" },
  { label: "Large", value: "large" },
];
const btnShapes = [
  { label: "Round", value: "round" },
  { label: "Default", value: "default" },
  { label: "Circle", value: "circle" },
];
const avatarShapes = [
  { label: "Square", value: "square" },
  { label: "Circle", value: "circle" },
];
const imgSize = ref([196, 96]);
const animated = ref(false);
const size = ref<any>("default");
const block = ref(false);
const radius = ref(10);
const avatarShape = ref<ShapeType>("square");
const btnShape = ref<ShapeType>("default");
</script>

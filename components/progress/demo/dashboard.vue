<template>
  gapDegree：{{ gap }}
  <Slider v-model="gap" :min="50" :max="160" />
  <br />
  <br />
  <RadioGroup :options="caps" v-model="strokeLinecap" type="button" theme="light" />
  <br />
  <br />
  <Progress type="dashboard" :percent="50" :gapDegree="gap" :strokeLinecap="strokeLinecap" />
  <Progress type="dashboard" :percent="100" :gapDegree="gap" :strokeLinecap="strokeLinecap" />
</template>
<script setup lang="ts">
import { ref } from "vue";
const gap = ref(140);
const strokeLinecap = ref("round");
const caps = [
  { label: "Butt", value: "butt" },
  { label: "Round", value: "round" },
  { label: "Square", value: "square" },
];
</script>
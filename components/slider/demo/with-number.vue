<template>
  <div>
    <Row :gutter="8">
      <Col :span="12">
        <Slider v-model="n1" :min="1" :max="20" />
      </Col>
      <Col :span="4">
        <InputNumber v-model="n1" :min="1" :max="20" />
      </Col>
    </Row>
    <Row :gutter="8">
      <Col :span="12">
        <Slider v-model="n2" :min="0" :max="1" :step="0.01" />
      </Col>
      <Col :span="4">
        <InputNumber v-model="n2" :min="0" :max="1" :step="0.01" />
      </Col>
    </Row>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const n1 = ref(1);
const n2 = ref(0);
</script>
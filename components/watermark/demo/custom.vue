<template>
  <Row>
    <Col :span="18">
      <div class="salary-card" style="width: 100%; height: 500px">
        <Watermark
          :content="content"
          :font="{ color: color, fontSize: fontSize }"
          :rotate="rotate"
          :gap="gap"
          :offset="offset"
          :layout="layout"
        >
        </Watermark>
      </div>
    </Col>
    <Col :span="6">
      <Space vertical>
        Content:
        <Input v-model="content" :maxlength="15"></Input>
        Color:
        <ColorPicker v-model="color"></ColorPicker>
        Font Size:
        <Slider v-model="fontSize" :min="12" :max="48"></Slider>
        Rotate:
        <Slider v-model="rotate" :min="0" :max="360"></Slider>
        Gap:
        <Slider v-model="gap" range></Slider>
        Offset:
        <Slider v-model="offset" range></Slider>
        Layout:
        <RadioGroup v-model="layout">
          <Radio value="stagger">Stagger</Radio>
          <Radio value="grid">grid</Radio>
        </RadioGroup>
      </Space>
    </Col>
  </Row>
</template>
<script setup lang="ts">
import type { WatermarkLayoutType } from "kui-vue";
import { ref } from "vue";

const content = ref("Kui Vue");
const color = ref("rgba(100, 100, 100, 0.3)");
const fontSize = ref(16);
const rotate = ref(45);
const gap = ref([16, 16]);
const offset = ref([8, 8]);
const layout = ref<WatermarkLayoutType>("stagger");
</script>

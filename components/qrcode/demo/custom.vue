<template>
  <Space vertical block>
    <QRCode
      :value="url"
      :size="size"
      :colorDark="color"
      :errorLevel="errorLevel"
      :bordered="bordered"
      :margin="margin"
    />
    <Space> Color: <ColorPicker v-model="color" /></Space>
    <Space>Size: <Slider v-model="size" :min="100" :max="150" style="width: 200px" /></Space>
    <Space>Margin: <Slider v-model="margin" :max="10" style="width: 200px" /></Space>
    <Space>
      ErrorLevel:
      <RadioGroup v-model="errorLevel" theme="card" type="button">
        <Radio value="L">L</Radio>
        <Radio value="M">M</Radio>
        <Radio value="Q">Q</Radio>
        <Radio value="H">H</Radio>
      </RadioGroup>
    </Space>
    <Space>Border: <KSwitch v-model="bordered" /></Space>
  </Space>
</template>

<script setup lang="ts">
import type { QRCodeErrorLevel } from "kui-vue";
import { ref } from "vue";
import { KSwitch } from "../../components";
const url = "https://k-ui.cn";
const color = ref("#4CAF50");
const size = ref(100);
const margin = ref(0);
const errorLevel = ref<QRCodeErrorLevel>("L");
const bordered = ref(true);
</script>

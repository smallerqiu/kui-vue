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
    <Space>
      Color:
      <ColorPicker v-model="color" />
    </Space>
    <Space>
      Size:
      <Slider v-model="size" :min="100" :max="150" style="width: 200px" />
    </Space>
    <Space>
      Margin:
      <Slider v-model="margin" :max="10" style="width: 200px" />
    </Space>
    <Space>
      ErrorLevel:
      <Segmented v-model="errorLevel" :options="errorLevels" />
    </Space>
    <Space>
      Border:
      <Switch v-model="bordered" />
    </Space>
  </Space>
</template>

<script setup lang="ts">
import type { QRCodeErrorLevel } from "kui-vue";
import { Switch } from "kui-vue";
import { ref } from "vue";
const url = "https://k-ui.cn";
const color = ref("#4CAF50");
const size = ref(100);
const margin = ref(0);
const errorLevel = ref<QRCodeErrorLevel>("L");
const errorLevels = ["L", "M", "Q", "H"].map((value) => ({ label: value, value }));
const bordered = ref(true);
</script>

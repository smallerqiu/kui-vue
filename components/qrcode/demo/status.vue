<template>
  <Space wrap>
    <QRCode :value="url" :size="100" />
    <QRCode :value="url" status="loading" :size="100" />
    <QRCode :value="url" :status="qrStatus" :size="100" @refresh="handleRefreshQR" />
    <QRCode :value="url" status="scanned" :size="100" />
  </Space>
</template>

<script setup lang="ts">
import type { QRCodeStatus } from "kui-vue";
import { ref } from "vue";

const url = ref("https:k-ui.cn");
const qrStatus = ref<QRCodeStatus>("expired");
const handleRefreshQR = () => {
  qrStatus.value = "loading";
  setTimeout(() => {
    url.value = "https://xxx.com/pay/order_new_1122";
    qrStatus.value = "active";
  }, 1000);
};
</script>

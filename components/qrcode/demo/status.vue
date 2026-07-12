<template>
  <Space wrap>
    <QRCode :value="url" :size="100" />
    <QRCode :value="url" status="loading" :size="100" />
    <QRCode :value="url" status="expired" :size="100" />
    <QRCode :value="url" status="scanned" :size="100" />
  </Space>
</template>

<script setup>
const url = "https:k-ui.cn";
const handleRefreshQR = () => {
  qrStatus.value = "loading";
  setTimeout(() => {
    url.value = "https://xxx.com/pay/order_new_1122";
    qrStatus.value = "active"; // 刷新完毕，重新绘制
  }, 1000);
};
</script>

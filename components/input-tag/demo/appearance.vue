<template>
  <Space vertical>
    <InputTag size="small" theme="plain" :default-value="['small']" />
    <InputTag shape="square" theme="outline" :default-value="['square']" />
    <InputTag size="large" shape="circle" :default-value="['large']" />
    <InputTag disabled :default-value="['disabled']" />
  </Space>
</template>
<script setup lang="ts">
import { InputTag, Space } from "kui-vue";
</script>

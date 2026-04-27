<template>
  <Space vertical>
    <Breadcrumb separator=">">
      <BreadcrumbItem href="/" :icon="House"></BreadcrumbItem>
      <BreadcrumbItem href="/navigation/breadcrumb" :icon="Cloud">Breadcrumb</BreadcrumbItem>
      <BreadcrumbItem :icon="Heart">Other</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb>
      <template #separator><span style="color: red">></span></template>
      <BreadcrumbItem href="/" :icon="House"></BreadcrumbItem>
      <BreadcrumbItem href="/navigation/breadcrumb" :icon="Cloud">Breadcrumb</BreadcrumbItem>
      <BreadcrumbItem :icon="Heart">Other</BreadcrumbItem>
    </Breadcrumb>
  </Space>
</template>
<script setup lang="ts">
import { Cloud, Heart, House } from "kui-icons";
</script>

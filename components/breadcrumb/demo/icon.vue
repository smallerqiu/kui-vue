<template>
  <Breadcrumb>
    <BreadcrumbItem href="/" :icon="House">Home</BreadcrumbItem>
    <BreadcrumbItem href="/navigation/breadcrumb" :icon="Cloud"> App </BreadcrumbItem>
    <BreadcrumbItem :icon="Heart">Other</BreadcrumbItem>
  </Breadcrumb>
</template>
<script setup lang="ts">
import { Cloud, Heart, House } from "kui-icons";
</script>

<template>
  <Breadcrumb>
    <BreadcrumbItem href="/" :icon="Home">Home</BreadcrumbItem>
    <BreadcrumbItem href="/navigation/breadcrumb" :icon="Cloud"> App </BreadcrumbItem>
    <BreadcrumbItem :icon="Heart">Other</BreadcrumbItem>
  </Breadcrumb>
</template>
<script setup lang="ts">
import { Heart, Home, Cloud } from "kui-icons";
</script>
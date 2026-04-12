<template>
  <Space>
    <Icon :type="Home" />
    <Icon :type="Heart" />
    <Icon :type="LogoKui" />
    <Icon :type="LogoKui" color="#00be83" />
    <Icon :type="Loading" spin />
  </Space>
</template>
<script setup lang="ts">
import { Heart, LogoKui, Home, Loading } from "kui-icons";
</script>
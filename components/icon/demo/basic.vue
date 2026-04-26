<template>
  <Space :vertical="true">
    <code>Logo and Spin</code>
    <Space :size="15">
      <Icon :stroke-width="1" :size="25" :type="LogoApple" />
      <Icon :stroke-width="1" :size="25" :type="LogoKui" />
      <Icon :stroke-width="1" :size="25" :type="LogoKui" color="#00be83" />
      <Icon :stroke-width="1" :size="25" :type="Loading" spin />
    </Space>
    <code>Stroke Width</code>
    <Space :size="15">
      <Icon :stroke-width="1" :size="25" :type="House" />
      <Icon :stroke-width="1" :size="25" :type="Heart" />
      <Icon :stroke-width="1" :size="25" :type="Apple" />
      <Icon :stroke-width="2" :size="25" :type="House" />
      <Icon :stroke-width="2" :size="25" :type="Heart" />
      <Icon :stroke-width="2" :size="25" :type="Apple" />
    </Space>
    <code>Fill and Color</code>
    <Space :size="15">
      <Icon :size="25" :type="House" :reverse-fill="true" />
      <Icon :size="25" :type="Heart" :reverse-fill="true" color="red" />
      <Icon :size="25" :type="Apple" :reverse-fill="true" color="orange" />
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { Apple, Heart, House, Loading, LogoApple, LogoKui } from "kui-icons";
</script>

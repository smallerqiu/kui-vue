<template>
  <Space wrap>
    <Tag :icon="LogoX" color="#55acee">Twitter</Tag>
    <Tag :icon="LogoYoutube" color="#cd201f">Youtube</Tag>
    <Tag :icon="LogoQq" color="red">QQ</Tag>
    <Tag :icon="LogoWechat" closeable color="green">Wechat</Tag>
  </Space>
</template>
<script setup lang="ts">
import { LogoX, LogoYoutube, LogoQq, LogoWechat } from "kui-icons";
</script>
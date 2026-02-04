<template>
  <Space compact vertical>
    <Button :icon="MailOutline"></Button>
    <Button :icon="ShirtOutline"></Button>
    <Dropdown placement="bottom-left">
      <Button :icon="Ellipsis"></Button>
      <template #overlay>
        <A>22</A>
      </template>
    </Dropdown>
  </Space>
</template>
<script setup>
import {
  Copy,
  CloudDownloadOutline,
  Ellipsis,
  GameControllerOutline,
  HeartOutline,
  MailOutline,
  ShirtOutline,
} from "kui-icons";
</script>

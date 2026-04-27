<template>
  <Space vertical>
    <Badge dot>
      <div class="badge-box"></div>
    </Badge>
    <Badge dot>
      <Icon :type="Bell" />
    </Badge>
    <Badge dot>
      <a href="#">Link</a>
    </Badge>
  </Space>
</template>
<script setup lang="ts">
import { Bell } from "kui-icons";
</script>

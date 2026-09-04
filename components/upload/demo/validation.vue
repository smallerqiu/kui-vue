<template>
  <Upload
    action="/api/upload"
    accept="image/png,image/jpeg"
    :max-size="1024"
    :auto-trigger="false"
    @type-error="message.error('Only PNG and JPEG files are accepted')"
    @size-error="message.error('The image must not exceed 1 MB')"
  >
    <Button>Select image</Button>
  </Upload>
</template>

<script setup lang="ts">
import { message } from "kui-vue";
</script>

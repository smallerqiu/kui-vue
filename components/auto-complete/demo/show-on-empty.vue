<template>
  <AutoComplete show-on-empty :options="options" placeholder="空输入聚焦时也展示建议" />
</template>
<script setup lang="ts">
import { AutoComplete } from "kui-vue";
const options = ["Vue", "React", "Angular"];
</script>

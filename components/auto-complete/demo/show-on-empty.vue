<template>
  <AutoComplete show-on-empty :options="options" placeholder="Please input" />
</template>
<script setup lang="ts">
import { AutoComplete } from "kui-vue";
const options = ["Vue", "React", "Angular"];
</script>

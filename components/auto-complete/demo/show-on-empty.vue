<template>
  <AutoComplete show-on-empty :options="options" placeholder="Please input" />
</template>
<script setup lang="ts">
const options = ["Vue", "React", "Angular"];
</script>

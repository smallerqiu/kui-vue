<template>
  <div>
    <Icon :type="ChevronDoubleForward" :strokeWidth="20" />
    <Icon :type="ChevronDoubleForward" />
    <Icon :type="ChevronDoubleForward" :strokeWidth="80" />
    <br />
    <Icon :type="ChevronForward" :strokeWidth="20" />
    <Icon :type="ChevronForward" />
    <Icon :type="ChevronForward" :strokeWidth="80" />
  </div>
</template>
<script setup lang="ts">
import { ChevronForward, ChevronDoubleForward } from "kui-icons";
</script>
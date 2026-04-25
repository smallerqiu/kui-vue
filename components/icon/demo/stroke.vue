<template>
  <div>
    <Icon :type="ChevronsRight" :strokeWidth="1" />
    <Icon :type="ChevronsRight" />
    <Icon :type="ChevronsRight" :strokeWidth="4" />
    <br />
    <Icon :type="ChevronRight" :strokeWidth="1" />
    <Icon :type="ChevronRight" />
    <Icon :type="ChevronRight" :strokeWidth="4" />
  </div>
</template>
<script setup lang="ts">
import { ChevronRight, ChevronsRight } from "kui-icons";
</script>

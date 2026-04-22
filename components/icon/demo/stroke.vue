<template>
  <div>
    <Icon :type="ChevronsRight" :strokeWidth="2" />
    <Icon :type="ChevronsRight" />
    <Icon :type="ChevronsRight" :strokeWidth="3" />
    <br />
    <Icon :type="ChevronRight" :strokeWidth="3" />
    <Icon :type="ChevronRight" />
    <Icon :type="ChevronRight" :strokeWidth="3" />
  </div>
</template>
<script setup lang="ts">
import { ChevronRight, ChevronsRight } from "kui-icons";
</script>

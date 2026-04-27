<template>
  <RadioGroup v-model="mode">
    <Radio label="left" value="left" />
    <Radio label="center" value="center" />
    <Radio label="alternate" value="alternate" />
    <Radio label="right" value="right" />
  </RadioGroup>
  <br />
  <br />
  <TimeLine :mode="mode">
    <TimeLineItem color="green" time="2020-11-03" extra="More auxiliary details">
      Optimized tons of improvements and experiences
    </TimeLineItem>
    <TimeLineItem color="orange" time="2020-11-02">
      <div>Added some very user-friendly features</div>
      <div>Added some very user-friendly features</div>
      <template #extra>More auxiliary details</template>
    </TimeLineItem>
    <TimeLineItem :icon="Hammer" color="red" time="2020-10-03" extra="More auxiliary details">
      Fix bug
    </TimeLineItem>
    <TimeLineItem time="2020-10-01" extra="More auxiliary details">
      Release version 1.0
    </TimeLineItem>
  </TimeLine>
</template>
<script setup lang="ts">
import { Hammer } from "kui-icons";
import type { TimelineMode } from "kui-vue";
import { ref } from "vue";
const mode = ref<TimelineMode>("left");
</script>

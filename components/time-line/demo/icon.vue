<template>
  <TimeLine>
    <TimeLineItem color="green" time="2020-11-03"> Optimized tons of improvements and experiences </TimeLineItem>
    <TimeLineItem color="orange" time="2020-11-02">
      <p>Added some very user-friendly features</p>
      <p>Added some very user-friendly features</p>
      <p>Added some very user-friendly features</p>
    </TimeLineItem>
    <TimeLineItem :icon="Ribbon" color="#3593ff" time="2020-11-01"> Release version 2.0 </TimeLineItem>
    <TimeLineItem :icon="Build" color="red" time="2020-10-03"> Fix bugs </TimeLineItem>
    <TimeLineItem time="2020-10-01">Release version 1.0</TimeLineItem>
  </TimeLine>
</template>
<script setup lang="ts">
import { Ribbon, Build } from "kui-icons";
</script>
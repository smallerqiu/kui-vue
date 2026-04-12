<template>
  <div class="demo-collapse">
    <Collapse :openKeys="openKeys" accordion>
      <CollapsePanel title="Panel title" key="1">
        <div>{{ text }}</div>
      </CollapsePanel>
      <CollapsePanel title="Panel title" key="2">
        <div>{{ text }}</div>
      </CollapsePanel>
      <CollapsePanel title="Panel title" key="3">
        <div>{{ text }}</div>
      </CollapsePanel>
    </Collapse>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const openKeys = ref(["1"]);
const text = `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `;
</script>
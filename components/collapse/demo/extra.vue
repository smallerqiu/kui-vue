<template>
  <div class="demo-collapse">
    <Collapse :openKeys="openKeys">
      <CollapsePanel title="Panel title" key="1">
        <template #extra>
          <Icon :type="Settings" />
        </template>
        <div>{{ text }}</div>
      </CollapsePanel>
      <CollapsePanel title="Panel title" key="2">
        <template #extra>
          <Icon :type="Settings" />
        </template>
        <div>{{ text }}</div>
      </CollapsePanel>
      <CollapsePanel title="Panel title" key="3">
        <template #extra>
          <Icon :type="Settings" />
        </template>
        <div>{{ text }}</div>
      </CollapsePanel>
    </Collapse>
  </div>
</template>
<script setup lang="ts">
import { Settings } from "kui-icons";
import { ref } from "vue";
const openKeys = ref(["1", "2"]);
const text = `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `;
</script>

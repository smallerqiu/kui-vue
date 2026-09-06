<template>
  <Tabs v-model="activeKey" variant="browser" @remove="remove">
    <TabPanel
      v-for="panel in panels"
      :key="panel.key"
      :title="panel.title"
      :closable="panel.closable"
    >
      {{ panel.content }}
    </TabPanel>
    <template #extra>
      <Button :icon="Plus" @click="add" />
    </template>
  </Tabs>
</template>

<script setup lang="ts">
import { Plus } from "kui-icons";
import { ref } from "vue";

const panels = ref([
  { key: "1", title: "Welcome", content: "Welcome page", closable: false },
  { key: "2", title: "Components", content: "Components page", closable: true },
  { key: "3", title: "Settings", content: "Settings page", closable: true },
]);
const activeKey = ref("1");
let index = 3;

const add = () => {
  const key = String(++index);
  panels.value = [
    ...panels.value,
    { key, title: `New Tab ${key}`, content: `Content of new Tab ${key}`, closable: true },
  ];
  activeKey.value = key;
};

const remove = (key: string) => {
  const targetIndex = panels.value.findIndex((panel) => panel.key === key);
  const nextPanels = panels.value.filter((panel) => panel.key !== key);
  panels.value = nextPanels;
  if (activeKey.value === key) {
    activeKey.value = nextPanels[Math.max(0, targetIndex - 1)]?.key ?? "";
  }
};
</script>

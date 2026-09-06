<template>
  <Tabs v-model="activeKey" card @remove="remove">
    <TabPanel
      :title="panel.title"
      v-for="panel in panesData"
      :key="panel.key"
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
const panesData = ref([
  { title: "Tab 1", content: "Content of Tab 1", key: "1" },
  { title: "Tab 2", content: "Content of Tab 2", key: "2", closable: true },
  { title: "Tab 3", content: "Content of Tab 3", key: "3", closable: true },
]);
const activeKey = ref("1");
const newTabIndex = ref(0);
const remove = (key: string) => {
  const index = panesData.value.findIndex((panel) => panel.key === key);
  const panes = panesData.value.filter((panel) => panel.key !== key);
  panesData.value = panes;
  if (activeKey.value === key) activeKey.value = panes[Math.max(0, index - 1)]?.key ?? "";
};
const add = () => {
  const index = ++newTabIndex.value;
  const key = `A${index}`;
  panesData.value = [
    ...panesData.value,
    {
      title: `New Tab ${index}`,
      content: `Content of new Tab ${index}`,
      key,
      closable: true,
    },
  ];
  activeKey.value = key;
};
</script>

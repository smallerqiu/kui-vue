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
      <Button :icon="Plus" size="small" @click="add" />
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
  let panes = panesData.value;
  console.log(key);
  const index = panesData.value.map((p) => p.key).indexOf(key);
  panesData.value = panes.filter((panel) => panel.key !== key);
  activeKey.value = panesData.value[index - 1].key;
};
const add = () => {
  const panes = panesData.value;
  const key = `A${newTabIndex.value++}`;
  panes.push({
    title: `New Tab${newTabIndex.value}`,
    content: `Content of new Tab ${newTabIndex.value}`,
    key: key,
    closable: true,
  });
  panesData.value = panes;
  activeKey.value = key;
};
</script>

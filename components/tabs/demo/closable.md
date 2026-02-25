<cn>
### 新增和关闭页签 
只有卡片样式的页签支持新增和关闭选项。
使用 `closable={false}` 禁止关闭。
</cn>
<en>
### Add and Close Tabs 
Only card-style tabs support adding and closing options.
Use `closable={false}` to disable closing.
</en>

```vue
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
      <Button :icon="Add" size="small" @click="add" />
    </template>
  </Tabs>
</template>
<script setup>
import { ref } from "vue";
import { Add } from "kui-icons";
const panesData = ref([
  { title: "Tab 1", content: "Content of Tab 1", key: "1" },
  { title: "Tab 2", content: "Content of Tab 2", key: "2", closable: true },
  { title: "Tab 3", content: "Content of Tab 3", key: "3", closable: true },
]);
const activeKey = ref("1");
const newTabIndex = ref(0);
const remove = (key) => {
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
```

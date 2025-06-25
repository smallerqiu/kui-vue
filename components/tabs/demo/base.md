<cn>
#### 基本用法
默认选中第一项。
</cn>

```vue
<template>
  <Tabs v-model:activeKey="current">
    <TabPanel key="1" title="Tab 1">
      Content of Tab Pane 1
    </TabPanel>
    <TabPanel key="2" title="Tab 2">
      Content of Tab Pane 2
    </TabPanel>
    <TabPanel key="3" title="Tab 3">
      Content of Tab Pane 3
    </TabPanel>
  </Tabs>
</template>
<script setup>
import { ref } from "vue";
const current = ref('1');
</script>
```

<cn>
### 基本用法
默认选中第一项。
</cn>
<en>
### Basic Usage
The first item is selected by default.
</en>

```vue
<template>
  Animated: <KSwitch v-model="animated" />
  <Tabs v-model="current" :animated="animated">
    <TabPanel key="1" title="Tab 1"> Content of Tab Pane 1 </TabPanel>
    <TabPanel key="2" title="Tab 2"> Content of Tab Pane 2 </TabPanel>
    <TabPanel key="3" title="Tab 3"> Content of Tab Pane 3 </TabPanel>
  </Tabs>
</template>
<script setup>
import { ref } from "vue";
const current = ref("1");
const animated = ref(false);
</script>
```

<cn>
#### 图标
有图标的标签。
</cn>

```vue
<template>
  <Tabs v-model:activeKey="current">
    <TabPane key="1" title="Tab 1" :icon="LogoApple">
      Content of Tab Pane 1
    </TabPane>
    <TabPane key="2" title="Tab 2" :icon="LogoMicrosoft">
      Content of Tab Pane 2
    </TabPane>
  </Tabs>
</template>
<script setup>
import { ref } from "vue";
import { LogoApple, LogoMicrosoft } from "kui-icons";
const current = ref("1");
</script>
```

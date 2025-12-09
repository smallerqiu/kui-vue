<cn>
### 额外节点
可以同时展开多个面板。
</cn>

```vue
<template>
  <div class="demo-collapse">
    <Collapse :activeKey.sync="activeKey">
      <CollapsePanel title="Panel title" key="1">
        <template #extra>
          <Icon :type="SettingsOutline" />
        </template>
        <div>{{ text }}</div>
      </CollapsePanel>
      <CollapsePanel title="Panel title" key="2">
        <template #extra>
          <Icon :type="SettingsOutline" />
        </template>
        <div>{{ text }}</div>
      </CollapsePanel>
      <CollapsePanel title="Panel title" key="3">
        <template #extra>
          <Icon :type="SettingsOutline" />
        </template>
        <div>{{ text }}</div>
      </CollapsePanel>
    </Collapse>
  </div>
</template>
<script setup>
import { ref } from "vue";
const activeKey = ref(["1","2"]);
import { SettingsOutline } from "kui-icons";
const text = `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `;
</script>
```

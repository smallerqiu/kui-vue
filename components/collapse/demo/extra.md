<cn>
#### 额外节点
可以同时展开多个面板。
</cn>

```vue
<template>
  <div class="demo-collapse">
    <Collapse :value="['1','2']">
      <Panel title="Panel title" key="1">
        <Icon slot="extra" :type="SettingsOutline" />
        <div>{{text}}</div>
      </Panel>
      <Panel title="Panel title" key="2">
        <Icon slot="extra" :type="SettingsOutline" />
        <div>{{text}}</div>
      </Panel>
      <Panel title="Panel title" key="3">
        <Icon slot="extra" :type="SettingsOutline" />
        <div>{{text}}</div>
      </Panel>
    </Collapse>
  </div>
</template>
<script>
import { SettingsOutline } from 'kui-icons'
export default {
  data() {
    return {
      SettingsOutline,
      text : `A long time ago, In a beautiful kingdom, 
  there lived a young king and queen, 
  the people loved them so much; `
    }
  }
}
</script>
```
<cn>
#### 图标
有图标的标签。
</cn>

```vue
<template>
  <Tabs v-model="current">
    <TabPane key="1" title="Tab 1" :icon="LogoApple">
      Content of Tab Pane 1
    </TabPane>
    <TabPane key="2" title="Tab 2" :icon="LogoMicrosoft">
      Content of Tab Pane 2
    </TabPane>
  </Tabs>
</template>
<script>
import { LogoApple, LogoMicrosoft } from "kui-icons";
export default{
  data() {
    return {
      LogoApple, LogoMicrosoft,
      current:'1'
    }
  },
}
</script>
```

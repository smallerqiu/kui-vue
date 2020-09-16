<cn>
#### 禁用
禁用某一项。
</cn>

```tpl
<template>
  <Tabs v-model="current">
    <TabPane key="1" title="Tab 1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane key="2" title="Tab 2" disabled>
      Content of Tab Pane 2
    </TabPane>
    <TabPane key="3" title="Tab 3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
</template>
<script>
export default{
  data(){
    return{
      current:'1'
    }
  },
}
</script>
```

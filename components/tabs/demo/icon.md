<cn>
#### 图标
有图标的标签。
</cn>

```vue
<template>
  <Tabs v-model="current">
    <TabPane key="1" title="Tab 1" icon="logo-apple">
      Content of Tab Pane 1
    </TabPane>
    <TabPane key="2" title="Tab 2" icon="logo-windows">
      Content of Tab Pane 2
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

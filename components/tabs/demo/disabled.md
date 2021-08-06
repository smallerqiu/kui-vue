<cn>
#### 禁用
禁用某一项。
</cn>

```vue
<template>
  <div>
    <Button @click="disabled=!disabled" size="small">{{disabled?'Undisable':'Disabled'}}</Button>
    <br />
    <br />
    <Tabs v-model="current">
      <TabPane key="1" title="Tab 1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane key="2" title="Tab 2" :disabled="disabled">
        Content of Tab Pane 2
      </TabPane>
      <TabPane key="3" title="Tab 3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
export default{
  data(){
    return{
      current:'1',
      disabled:true
    }
  },
}
</script>
```

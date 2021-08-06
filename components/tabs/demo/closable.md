<cn>
#### 新增和关闭页签 
只有卡片样式的页签支持新增和关闭选项。
使用 `closable={false}` 禁止关闭。
</cn>

```vue
<template>
  <Tabs v-model="activeKey" card @remove="remove">
    <TabPane :title="pane.title" v-for="pane in panes" :key="pane.key" :closable="pane.closable">
      {{pane.content}}
    </TabPane>
    <Button slot="extra" icon="add" size="small" @click="add"/>
  </Tabs>
</template>
<script>
export default{
  data(){
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2', closable:true },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable:true },
    ];
    return {
      panes,
      activeKey: panes[0].key,
      newTabIndex: 0
    }
  },
  methods:{
    remove(key){
      let panes = this.panes
      
      const index = panes.map(p=>p.key).indexOf(key)

      if (this.activeKey == key) {
        if(index == panes.length-1) {
          this.activeKey = panes[index-1].key
        } else {
          this.activeKey = panes[index+1].key
        }

      }
      panes.splice(index,1)

    },
    add() {
      const panes = this.panes;
      const activeKey = `A${this.newTabIndex++}`;
      panes.push({ title: `New Tab${this.newTabIndex}`, content: `Content of new Tab ${activeKey}`, key: activeKey, closable:true });
      this.panes = panes;
      this.activeKey = activeKey;
    },
  }
}
</script>
```

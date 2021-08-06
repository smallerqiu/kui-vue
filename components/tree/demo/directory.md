<cn>
#### 群控
展示目录、连接线、拖动、复选框、图标、扩展
</cn>

```vue
<template>
  <div >
    <Checkbox v-model="directory" label="Directory"/> 
    <Checkbox v-model="showLine" label="showLine"/> 
    <Checkbox v-model="draggable" label="Draggable"/> 
    <Checkbox v-model="checkable" label="Checkable"/> 
    <Checkbox v-model="showIcon" label="ShowIcon"/> 
    <Checkbox v-model="showExtra" label="ShowExtra"/> 
    <br/>
    <br/>
    <Tree :data="data" 
    style="width:512px"
    @expand="expand" 
    :directory="directory"
    :draggable="draggable"
    :checkable="checkable"
    :show-line="showLine"
    :show-icon="showIcon"
    :show-extra="showExtra"
    :selectedKeys="selectedKeys"
    :expandedKeys="expandedKeys" >
    <template v-slot:extra="{ node , parent}">
        <Icon type="add-outline" @click="e=>append(e,node)"/>
        <Icon type="trash-outline" @click="e=>remove(e,node,parent)" v-if="node.key!='0-0'"/>
        <Icon type="pencil-outline" @click="e=>edit(e,node)"/>
      </template>
    </Tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      directory:true,
      showLine:true,
      showIcon:true,
      draggable:true,
      checkable:true,
      showExtra:true,
      expandedKeys: ['0-0', '1-0', '1-1', '1-2'],
      selectedKeys: ['0-0'],
      data: [
        {
          title: 'src',
          key: '0-0',
          icon: 'folder-open-outline',
          children: [
            {
              title: 'assets',
              key: '1-0',
              icon: 'folder-open-outline',
              children: [
                { title: 'main.js', icon: 'logo-javascript', disabled: true },
                { title: 'test.py', icon: 'logo-python' }
              ]
            },
            {
              title: 'pages',
              key: '1-1',
              icon: 'folder-open-outline',
              children: [
                { title: 'index.html', icon: 'logo-html5' },
                { title: 'index.md', icon: 'logo-markdown' }
              ]
            },
            {
              title: 'app',
              key: '1-2',
              icon: 'folder-open-outline',
              children: [
                { title: 'zen.apk', icon: 'logo-windows' },
                { title: 'zen.ipa', icon: 'logo-apple' }
              ]
            }
          ]
        }
      ],
    }
  },
  methods: {
    edit(e,node){
      e.stopPropagation()
      let pop = prompt('修改节点名称',node.title)
      if(pop!=null && pop.trim()!=''){
        node.title = pop
      }
    },
    append(e,node) {
      e.stopPropagation()
      const newChild = { title: 'Append Node', children: [] };
      if (!node.children) {
        node.children = []
      }
      //展开节点
      if (this.expandedKeys.indexOf(node.key) < 0) {
        this.expandedKeys.push(node.key)
      }
      //添加子节点
      node.children.push(newChild);
    },
    remove(e,node, parent) {
      let { data } = this
      const loop = (data, key, callback) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].key === key) {
            return callback(data[i], i, data);
          }
          if (data[i].children) {
            loop(data[i].children, key, callback);
          }
        }
      };
      loop(data, node.key, (item, index, arr) => {
        arr.splice(index, 1);
      })
    },
    expand({ expanded, node ,expandedKeys}) {
      node.icon = expanded ? 'folder-open-outline' : 'folder-outline'
      console.log(node)
    }
  }
}
</script>
```
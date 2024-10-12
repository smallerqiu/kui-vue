<cn>
#### 群控
展示目录、连接线、拖动、复选框、图标、扩展
</cn>

```vue
<template>
  <div>
    <Space>
      <Checkbox v-model="directory" label="Directory" />
      <Checkbox v-model="showLine" label="showLine" />
      <Checkbox v-model="draggable" label="Draggable" />
      <Checkbox v-model="checkable" label="Checkable" />
      <Checkbox v-model="showIcon" label="ShowIcon" />
      <Checkbox v-model="showExtra" label="ShowExtra" />
    </Space>
    <br />
    <br />
    <Tree :data="data" style="width:512px" @expand="expand" :directory="directory" :draggable="draggable"
      :checkable="checkable" :show-line="showLine" :show-icon="showIcon" :show-extra="showExtra"
      :selectedKeys="selectedKeys" :expandedKeys="expandedKeys">
      <template v-slot:extra="{ node, parent }">
        <Icon :type="Add" @click="e => append(e, node)" />
        <Icon :type="Trash" @click="e => remove(e, node, parent)" v-if="node.key != '0-0'" />
        <Icon :type="IconEdit" @click="e => edit(e, node)" />
      </template>
    </Tree>
  </div>
</template>
<script>
import { Add, Trash, IconEdit, FolderOpenOutline, FolderOutline, LogoFeishu, LogoTwitter, LogoQq, LogoWechat, LogoAndroid, LogoApple } from "kui-icons";
export default {
  data() {
    return {
      Add, Trash, IconEdit,
      directory: true,
      showLine: true,
      showIcon: true,
      draggable: true,
      checkable: true,
      showExtra: true,
      expandedKeys: ['0-0', '1-0', '1-1', '1-2'],
      selectedKeys: ['0-0'],
      data: [
        {
          title: 'src',
          key: '0-0',
          icon: FolderOpenOutline,
          children: [
            {
              title: 'assets',
              key: '1-0',
              icon: FolderOpenOutline,
              children: [
                { title: 'main.js', icon: LogoTwitter, disabled: true },
                { title: 'test.py', icon: LogoQq }
              ]
            },
            {
              title: 'pages',
              key: '1-1',
              icon: FolderOpenOutline,
              children: [
                { title: 'index.html', icon: LogoFeishu },
                { title: 'index.md', icon: LogoWechat }
              ]
            },
            {
              title: 'app',
              key: '1-2',
              icon: FolderOpenOutline,
              children: [
                { title: 'zen.apk', icon: LogoAndroid },
                { title: 'zen.ipa', icon: LogoApple }
              ]
            }
          ]
        }
      ],
    }
  },
  methods: {
    edit(e, node) {
      e.stopPropagation()
      let pop = prompt('修改节点名称', node.title)
      if (pop != null && pop.trim() != '') {
        node.title = pop
      }
    },
    append(e, node) {
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
    remove(e, node, parent) {
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
    expand({ expanded, node, expandedKeys }) {
      node.icon = expanded ? FolderOpenOutline : FolderOutline
      console.log(node)
    }
  }
}
</script>
```
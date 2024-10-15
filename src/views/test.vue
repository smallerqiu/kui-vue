<template>
  <div>
    <Space>
      <Checkbox v-model="directory" label="Directory" />
      <Checkbox v-model="showLine" label="showLine" />
      <Checkbox v-model="draggable" label="Draggable" />
      <Checkbox v-model="checkable" label="Checkable" />
      <Checkbox v-model="showIcon" label="ShowIcon" />
      <Checkbox v-model="showExtra" label="ShowExtra" />
      <Checkbox v-model="checkStrictly" label="checkStrictly" />
      <Checkbox v-model="multiple" label="multiple" />
    </Space>
    <br />
    <br />
    selectedKeys: {{ selectedKeys }}
    <br />
    expandedKeys:{{ expandedKeys }}
    <br />
    checkedKeys:{{ checkedKeys }}
    <Tree :data="data" style="width:512px" @expand="expand" :directory="directory" :draggable="draggable"
      :checkable="checkable" :show-line="showLine" :show-icon="showIcon" :show-extra="showExtra" :multiple="multiple"
      :checkedKeys="checkedKeys" @check="checkedKeys = $event.checkedKeys" @select="selectedKeys = $event.selectedKeys"
      :selectedKeys="selectedKeys" :expandedKeys="expandedKeys" :checkStrictly="checkStrictly">
      <template v-slot:extra="{ node, parent }">
        <Space>
          <Button size="small" theme="normal" :icon="Add" @click="e => append(e, node)" />
          <Button size="small" theme="normal" :icon="Trash" @click="e => remove(e, node, parent)"
            v-if="node.key != '0-0'" />
          <Button size="small" theme="normal" :icon="IconEdit" @click="e => edit(e, node)" />
        </Space>
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
      checkStrictly: true,
      multiple: false,
      expandedKeys: ['0-0', '1-0', '1-1', '1-2'],
      selectedKeys: ['0-0', '1-0_1'],
      checkedKeys: ['1-0'],
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
                { title: 'main.js', icon: LogoTwitter, key: 'main', disabled: true },
                { title: 'test.py', icon: LogoQq, key: 'test' }
              ]
            },
            {
              title: 'pages',
              key: '1-1',
              icon: FolderOpenOutline,
              children: [
                { title: 'index.html', icon: LogoFeishu, key: '1-1-0', },
                { title: 'index.md', icon: LogoWechat, key: '1-1-1', }
              ]
            },
            {
              title: 'app',
              key: '1-2',
              icon: FolderOpenOutline,
              children: [
                { title: 'zen.apk', icon: LogoAndroid, key: '1-2-0', },
                { title: 'zen.ipa', icon: LogoApple, key: '1-2-1', }
              ]
            }
          ]
        },
        {
          title: 'src11',
          key: '0-1',
          icon: FolderOpenOutline,
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
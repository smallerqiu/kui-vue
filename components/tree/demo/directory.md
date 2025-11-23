<cn>
### 群控
展示目录、连接线、拖动、复选框、图标、扩展
</cn>

```vue
<template>
  <div>
    <Space wrap>
      <Checkbox :checked.sync="directory" label="Directory" />
      <Checkbox :checked.sync="showLine" label="showLine" />
      <Checkbox :checked.sync="draggable" label="Draggable" />
      <Checkbox :checked.sync="checkable" label="Checkable" />
      <Checkbox :checked.sync="showIcon" label="ShowIcon" />
      <Checkbox :checked.sync="showExtra" label="ShowExtra" />
      <Checkbox :checked.sync="multiple" label="Multiple" />
      <Checkbox :checked.sync="checkStrictly" label="checkStrictly" />
    </Space>
    <br />
    <br />
    <Tree
      :data="data"
      @expand="expand"
      :directory="directory"
      :draggable="draggable"
      :checkable="checkable"
      :multiple="multiple"
      :showLine="showLine"
      :showIcon="showIcon"
      :showExtra="showExtra"
      :selectedKeys="selectedKeys"
      :expandedKeys="expandedKeys"
      :checkStrictly="checkStrictly"
    >
      <template #extra="{ node, parent }">
        <Space>
          <Button
            size="small"
            type="text"
            :icon="Add"
            @click="(e) => append(e, node)"
          />
          <Button
            size="small"
            type="text"
            :icon="Trash"
            @click="(e) => remove(e, node, parent)"
            v-if="node.key != '0-0'"
          />
          <Button
            size="small"
            type="text"
            :icon="IconEdit"
            @click="(e) => edit(e, node)"
          />
        </Space>
      </template>
    </Tree>
  </div>
</template>
<script setup>
import {
  Add,
  Trash,
  IconEdit,
  FolderOpenOutline,
  FolderOutline,
  LogoFeishu,
  LogoTwitter,
  LogoQq,
  LogoWechat,
  LogoAndroid,
  LogoApple,
} from "kui-icons";
import { ref } from "vue";
const directory = ref(true);
const showLine = ref(true);
const showIcon = ref(true);
const draggable = ref(true);
const checkable = ref(true);
const showExtra = ref(true);
const expandedKeys = ref(["0-0", "1-0", "1-1", "1-2"]);
const checkStrictly = ref(false);
const multiple = ref(false);

const selectedKeys = ["0-0"];
const data = [
  {
    title: "src",
    key: "0-0",
    icon: FolderOpenOutline,
    children: [
      {
        title: "assets",
        key: "1-0",
        icon: FolderOpenOutline,
        children: [
          { title: "main.js", icon: LogoTwitter, disabled: true, key: "1-0-0" },
          { title: "test.py", icon: LogoQq, key: "1-0-1" },
        ],
      },
      {
        title: "pages",
        key: "1-1",
        icon: FolderOpenOutline,
        children: [
          { title: "index.html", icon: LogoFeishu, key: "1-1-1" },
          { title: "index.md", icon: LogoWechat, key: "1-1-2" },
        ],
      },
      {
        title: "app",
        key: "1-2",
        icon: FolderOpenOutline,
        children: [
          { title: "zen.apk", icon: LogoAndroid, key: "1-2-1" },
          { title: "zen.ipa", icon: LogoApple, key: "1-2-2" },
        ],
      },
    ],
  },
  {
    title: "src11",
    key: "0-1",
    icon: FolderOpenOutline,
  },
];
const edit = (e, node) => {
  e.stopPropagation();
  let pop = prompt("修改节点名称", node.title);
  if (pop != null && pop.trim() != "") {
    node.title = pop;
  }
};
const append = (e, node) => {
  e.stopPropagation();
  const newChild = { title: "Append Node", children: [] };
  if (!node.children) {
    node.children = [];
  }
  //展开节点
  if (this.expandedKeys.indexOf(node.key) < 0) {
    this.expandedKeys.push(node.key);
  }
  //添加子节点
  node.children.push(newChild);
};
const remove = (e, node, parent) => {
  let { data } = this;
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
  });
};
const expand = ({ expanded, node, expandedKeys }) => {
  node.icon = expanded ? FolderOpenOutline : FolderOutline;
  console.log(node);
};
</script>
```

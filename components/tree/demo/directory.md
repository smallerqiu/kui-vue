<cn>
### 群控
展示目录、连接线、拖动、复选框、图标、扩展
 </cn>
<en>
### Group Control
Show directory, connectors, drag, checkboxes, icons, and expansion.
</en>

```vue
<template>
  <div>
    <Space wrap>
      <Checkbox v-model="directory" label="Directory" />
      <Checkbox v-model="showLine" label="showLine" />
      <Checkbox v-model="draggable" label="Draggable" />
      <Checkbox v-model="checkable" label="Checkable" />
      <Checkbox v-model="showIcon" label="ShowIcon" />
      <Checkbox v-model="showExtra" label="ShowExtra" />
      <Checkbox v-model="multiple" label="Multiple" />
      <Checkbox v-model="checkStrictly" label="checkStrictly" />
    </Space>
    <br />
    <br />
    <Tree
      :data="data"
      @expand="expand"
      @check="onCheck"
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
      <template #extra="node">
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
            @click="(e) => deleteNode(e, node)"
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
import { ref, getCurrentInstance } from "vue";
const directory = ref(true);
const showLine = ref(true);
const showIcon = ref(true);
const draggable = ref(true);
const checkable = ref(true);
const showExtra = ref(true);
const expandedKeys = ref(["0-0", "1-0", "1-1", "1-2"]);
const checkStrictly = ref(false);
const multiple = ref(false);
const { proxy } = getCurrentInstance();
const selectedKeys = ["0-0"];
const data = ref([
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
]);
const edit = (e, node) => {
  e.stopPropagation();
  let pop = prompt("修改节点名称", node.title);
  if (pop != null && pop.trim() != "") {
    node.title = pop;
  }
};
const insertChildren = (nodes, targetKey, childrenData) => {
  for (const node of nodes) {
    if (node.key === targetKey) {
      // 找到目标节点，插入数据
      // node.children = childrenData; // for vue 3

      // for vue 2
      if (!("children" in node)) {
        node.icon = FolderOpenOutline;
        node.children = [];
      }
      // 如果 'children' 属性已存在，直接赋值是安全的
      node.children.push(childrenData);
      return true; // 插入成功
    }

    // 递归查找子节点
    if (node.children && node.children.length > 0) {
      if (insertChildren(node.children, targetKey, childrenData)) {
        return true; // 子树中找到并插入成功
      }
    }
  }
  return false; // 未找到
};
const addIndex = ref(0);
const append = (e, node) => {
  e.stopPropagation();
  addIndex.value += 1;
  const newChild = {
    title: "Append Node",
    key: `${node.key}-1-${addIndex.value}`,
  };

  insertChildren(data.value, node.key, newChild);

  //展开节点
  let keys = expandedKeys.value;
  if (keys.indexOf(node.key) < 0) {
    keys.push(node.key);
    expandedKeys.value = keys;
  }
};
const deleteNode = (e, node) => {
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
  loop(data.value, node.key, (item, index, arr) => {
    arr.splice(index, 1);
  });
};
const expand = ({ expanded, node, expandedKeys }) => {
  node.icon = expanded ? FolderOpenOutline : FolderOutline;
  console.log(node);
};
const onCheck = (node, checked) => {
  console.log(node, checked);
};
</script>
```

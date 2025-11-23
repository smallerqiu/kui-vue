<cn>
### 自定义节点内容
节点的内容支持自定义，可以在节点区添加按钮或图标等内容。
</cn>

```vue
<template>
  <Row :gutter="30">
    <Col :span="8">
      <Divider>默认</Divider>
      <!-- 默认 -->
      <Tree
        :data="data"
        @expand="expand"
        :expandedKeys="expandedKeys"
        showExtra
      >
        <template v-slot:extra="{ node, parent }">
          <Button
            :icon="Add"
            size="small"
            @click="append(node)"
            style="margin-right:5px"
          ></Button>
          <Button
            :icon="Remove"
            size="small"
            @click="remove(node, parent)"
            v-if="node.key != '0-0'"
          ></Button>
        </template>
      </Tree>
    </Col>
    <Col
      :span="8"
      style="border-left:1px solid #ddd;border-right:1px solid #ddd;"
    >
      <Divider>使用 `v-slot`</Divider>
      <!-- 使用 v-slot -->
      <Tree
        :data="data"
        @expand="expand"
        :expandedKeys="expandedKeys"
        showExtra
      >
        <template v-slot:title="{ node, parent }">
          {{ node.title + " 😄" }}
        </template>
        <template v-slot:extra="{ node, parent }">
          <Button
            :icon="Add"
            size="small"
            @click="append(node)"
            style="margin-right:5px"
          />
          <Button
            :icon="Remove"
            size="small"
            @click="remove(node, parent)"
            v-if="node.key != '0-0'"
          />
        </template>
      </Tree>
    </Col>
  </Row>
</template>
<script setup>
import { ref } from "vue";
import { Add, Remove } from "kui-icons";
const expandedKeys = ref(["0-0"]);
const data = [
  {
    title: "tree 1",
    key: "0-0",
    children: [
      {
        title: "tree 1-1",
        key: "0-0-1",
        children: [
          { title: "leaf 1-1-1", key: "0-0-1-1" },
          {
            title: "leaf 1-1-2",
            key: "0-0-1-2",
            children: [
              { title: "leaf 1-1-2-1", key: "1-1-2-1" },
              { title: "leaf 1-1-2-2", key: "1-1-2-2" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "tree 2-1",
    key: "0-1-1",
    children: [
      { title: "leaf 2-1-1", key: "2-1-1" },
      { title: "leaf 2-1-2", key: "2-1-2" },
    ],
  },
];

const append = (node) => {
  if (!node.children) {
    node.children = [];
  }
  //展开节点
  let keys = expandedKeys.value;
  if (keys.indexOf(node.key) < 0) {
    keys.push(node.key);
    expandedKeys.value = keys;
  }
  //添加子节点
  const newChild = { title: "Append Node", children: [] };
  node.children.push(newChild);
};
const remove = (node, parent) => {
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
const expand = (data) => {
  console.log(data);
};
</script>
```

<cn>
### 扩展节点
节点的扩展节点
 </cn>
<en>
### Node Extensions
Extensions for nodes
</en>

```vue
<template>
  <Tree :data="data" @expand="expand" :expandedKeys="expandedKeys" showExtra>
    <template v-slot:extra="node">
      <Button size="small" @click="test(node)" style="margin-right:5px"> test </Button>
    </template>
  </Tree>
</template>
<script setup>
import { ref } from "vue";
import { message } from "kui-vue";
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
];
const test = (node) => {
  message.info(node.title);
};
const expand = (data) => {
  console.log(data);
};
</script>
```

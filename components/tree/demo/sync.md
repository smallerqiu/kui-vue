<cn>
### 异步加载
点击展开节点，动态加载数据 , `isLeaf` 表示是存在子集
</cn>

```vue
<template>
  <Tree :data="data" @loadData="loadData" @expand="expand" />
</template>
<script setup>
const data = [
  { title: "Expand to load", key: "0-0" },
  { title: "Expand to load", key: "0-1" },
  { title: "Tree Node", isLeaf: true, key: "0-2" },
];
const expand = (data) => {
  console.log(data);
};
let loadCount = 0;
const loadData = (node, callback) => {
  loadCount += 1;
  //模拟异步请求
  setTimeout(() => {
    let data = [
      { title: "Child Node", isLeaf: loadCount >= 2, key: node.key + "-0" },
      { title: "Child Node", isLeaf: loadCount >= 3, key: node.key + "-1" },
    ];
    callback(data);
  }, 1000);
};
</script>
```

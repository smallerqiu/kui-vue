<cn>
### 异步加载
点击展开节点，动态加载数据。
</cn>

```vue
<template>
  <TreeSelect
    :tree-data="data"
    @tree-load-data="loadData"
    @expand="expand"
    style="width:100%"
  />
</template>
<script setup>
const data = [
  { title: "Expand to load" },
  { title: "Expand to load" },
  { title: "Tree Node", isLeaf: true },
];
const expand = (data) => {
  console.log(data);
};
const loadData = (node, callback) => {
  //模拟异步请求
  setTimeout(() => {
    let data = [{ title: "Child Node" }, { title: "Child Node" }];
    callback(data);
  }, 1000);
};
</script>
```

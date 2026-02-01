<cn>
### 排序
`sorter=true` 现有的数据排序 , 为‘function’时,可自定义排序规则
</cn>

```vue
<template>
  <Table :data="data" :columns="columns" :loading="loading" @sort="sort"> </Table>
</template>
<script setup>
import { ref, onMounted } from "vue";
const data = ref([]);
const loading = ref(false);
const columns = [
  { title: "Name", key: "name", sorter: true },
  {
    title: "Age",
    key: "age",
    sorter: true,
  },
  { title: "Email", key: "mail", sorter: (order) => fetch("mail", order) },
];

onMounted(() => {
  fetch();
});

const sort = ({ key, order }) => {
  console.log(key, order);
};

const fetch = (key, order) => {
  loading.value = true;
  // 模拟异步加载数据排序
  setTimeout(() => {
    loading.value = false;
    let fetchData = [
      { key: "0", name: "Qiu", age: 32, mail: "chuchur@qq.com" },
      { key: "3", name: "Wang Kang", age: 26, mail: "wangkang@gmail.com" },
      { key: "2", name: "Liu Hao", age: 27, mail: "liuhao@162.com" },
      { key: "1", name: "Li Lei", age: 33, mail: "hanlin@hotmail.com" },
      { key: "4", name: "Hu Cong", age: 25, mail: "hucong@163.com" },
    ];

    data.value = fetchData;
  }, 2000);
};
</script>
```

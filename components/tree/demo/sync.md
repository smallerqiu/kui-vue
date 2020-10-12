<cn>
#### 异步加载
点击展开节点，动态加载数据。
</cn>

```vue
<template>
  <Tree :data="data" @load-data="loadData" />
</template>
<script>
export default{
  data(){
    return{
      data: [{
        title: 'Tree',
        loading: false,
        children: []
      }],
    }
  },
  methods:{
    loadData(item, callback) {
      //模拟异步请求
      setTimeout(() => {
        let data = [
          {
            title: 'children',
            loading: false,
            children: []
          },
          {
            title: 'children',
            loading: false,
            children: []
          }
        ];
        callback(data);
      }, 1000)
    }
  }
}
</script>
```
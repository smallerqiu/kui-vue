<cn>
#### 排序和过滤
设置 `filters` 和 `sorter` 来排序和过滤数据
</cn>

```tpl
<template>
  <Table :data="data" :columns="columns" :loading="loading" @change="change">
  </Table>
</template>
<script>
export default{
  data(){
    return{
      data:[],
      loading: false,
      columns: [
        { title:'Name', key:'name' ,sorter:true },
        { title:'Age', key:'age',filters:[{ text:'', value:''}, { text:'' ,vlaue:'' }] },
        { title:'Email', key:'mail' },
      ]
    }
  },
  mounted(){
    this.fetch()
  },
  methods:{
    change(filters,{ key,order }){
      // console.log(filters,key,order)
      this.fetch(order)
    },
    fetch(order){
      this.loading = true
      // 模拟异步加载数据
      setTimeout( e=> {
        this.loading = false
        let data = [
            { key:'0', name:'Chuchur' , age:28 , mail:'chuchur@qq.com' },
            { key:'1', name:'Han Lin' , age:32 , mail:'hanlin@hotmail.com'},
            { key:'2', name:'Liu Hao' , age:28 , mail:'liuhao@162.com' },
            { key:'3', name:'Wang Kang', age:28 , mail:'wangkang@gmail.com' },
            { key:'4', name:'Hu Cong' , age:28 , mail:'hucong@163.com' },
        ]
        if(order){
          // 模拟名字按首字母排序
          data.sort((a,b)=>
            order=='asc'?
              a.name.slice(0,1).charCodeAt(0) - b.name.slice(0,1).charCodeAt(0):
              b.name.slice(0,1).charCodeAt(0) - a.name.slice(0,1).charCodeAt(0)
         )

         //sort((a,b)=>a.name.localeCompare(b.name))
        }
        this.data = data
      },2000)
    }
  }
}
</script>
```

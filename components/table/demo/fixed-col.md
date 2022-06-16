<cn>
#### 固定列
对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要设置表格的宽度 `width` 和 `column ` 的宽度(不指定默认150)。
> 如果布局被破坏，请把宽度 `width` 值改大。
</cn>

```vue
<template>
  <Table :data="data" :columns="columns" :width="1800">
      <a slot="action">action</a>
  </Table>
</template>
<script>
export default{
  data(){
     const data = [],columns = [];
     for(let i = 0; i < 10; i++){
       columns.push({ title:'Col'+i, key:'address' })
     }
    return{
      data:[
        { key:0, name:'Li Lei', age:28, address:'Hubei Wuhan Guanggu SoftBase No.128' },
        { key:1, name:'Liu Hao', age:28, address:'Hubei'},
        { key:2, name:'Wang Kang', age:28, address:'Hubei Wuhan Guanggu Nanhu No.128'},
        { key:3, name:'Hu Cong', age:28, address:'Hubei Wuhan Guanggu Hongshan No.128'}
      ],
      columns:[
        {title:'Name', key:'name', fixed:'left' },
        {title:'Age', key:'age' ,  fixed:'left' },
        ...columns,
        {title:'Action', key:'action', fixed:'right' },
      ]
    }
  }
}
</script>
```

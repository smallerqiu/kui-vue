<cn>
#### 嵌套子表格
展示每行数据更详细的信息。
</cn>

```vue
<template>
  <Table :data="data" :columns="columns">
    <Table
      slot="expandedRowRender"
      slot-scope="record"
      :data="expData"
      :columns="expColumns"
      >

    </Table>
  </Table>
</template>
<script>
export default{
  data() {
    return {
      expData:[
        {key:'0', name:'Jone', age:3 , childs:5},
        {key:'1', name:'Stack', age:5, childs:35 },
        {key:'2', name:'White', age:4, childs:25 },
      ],
      expColumns:[
        { title:'Name' , key:'name'},
        { title:'Age' , key:'age'},
        { title:'Childs' , key:'childs'},
      ],
      data:[
        { key:'0', name:'Li Lei' ,gender: 0 , age:32 , address:'Wu Han Guanggu No. 328', tags:['Python','Java'] },
        { key:'1', name:'Liu Hao' ,gender: 1 , age:28 , address:'Wu Han Hongshan No. 128', tags:['Python','Java'] },
        { key:'2', name:'Hu Cong' ,gender: 0 , age:28 , address:'Wu Han Nanhu No. 198', tags:['JS','CSS'] },
        { key:'3', name:'Chuchur' ,gender: 1 , age:28 , address:'Wu Han Nanhu No. 188', tags:['Go','Python'] },
      ],
      columns:[
        { title:'Name', key:'name' },
        { title:'Age', key:'age', },
        { title:'Gender', key:'gender', },
        { title:'Address', key:'address' },
        { title:'Tags', key:'tags' },
        { title:'Action', key:'action' },
      ]
    }
  }
}
</script>
```

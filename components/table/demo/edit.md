<cn>
#### 可编辑单元格
带单元格编辑功能的表格。
</cn>

```tpl
<template>
  <Button @click="add">Add</Button>
  <Table :data="data" :columns="columns" bordered>
    <a slot="name" slot-scope="text">{{text}}</a>
    <template slot="action" slot-scope="text,row,col">
      <Popconfirm
        title="您确认删除这条内容吗?"
        @ok="e=> removeRow(row.key)"
      >
        <a href="javascript:;">Delete</a>
      </Popconfirm>
    </template>
  </Table>
</template>
<script>
export default{
  data(){
    return{
      data:[
        { key:'0', name:'Han Lin' ,age:28 , address:'Wu Han Guanggu No. 328' },
        { key:'1', name:'Liu Hao' ,age:30 , address:'Wu Han Hongshan No. 128' },
        { key:'2', name:'Hu Cong' ,age:28 , address:'Wu Han Nanhu No. 198' },
        { key:'3', name:'Chuchur' ,age:32 , address:'Wu Han Nanhu No. 188' },
      ],
      columns:[

        { title:'Name', key:'name' },
        { title:'House price', key:'age'},
        { title:'Address', key:'address' },
        { title:'Action', key:'action' },
      ],
      count: 4
    }
  },
  methods:{
    removeRow(key){
      let data = [...this.data]
      this.data = data.filter(item=> item.key != key)
    },
    add(){
      let { count } = this
      count+=1
      let row = {
        key: count ,
        name: `Name ${count}` ,
        age: 30,
        address: `China Wuhan no.${count}`
      }
      this.data.push(row)
      this.count = count
    }
  }
}
</script>
```

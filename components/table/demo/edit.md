<cn>
#### 可编辑单元格
带单元格编辑功能的表格。
</cn>

```vue
<template>
  <Button @click="add">Add</Button>
  <Table :data="data" :columns="columns" bordered :sticky="52">
    <a slot="name" slot-scope="text,row">
      <Input v-model="row.name" size="small" v-if="row.isEdit"/>
      <template v-else>{{text}}</template>
    </a>
    <a slot="age" slot-scope="text,row">
      <Input v-model="row.age" size="small" v-if="row.isEdit"/>
      <template v-else>{{text}}</template>
    </a>
    <a slot="address" slot-scope="text,row">
      <Input v-model="row.address" size="small" v-if="row.isEdit"/>
      <template v-else>{{text}}</template>  
    </a>
    <template slot="action" slot-scope="text,row,col">
      <Space>
        <Button theme="normal" size="small" type="primary" v-if="!row.isEdit" @click="row.isEdit=true">Edit</Button>
        <Button theme="normal" size="small" type="primary" v-if="row.isEdit" @click="save(row)">Save</Button>
        <Button theme="normal" size="small" type="primary" v-if="row.isEdit" @click="row.isEdit=false">Cancel</Button>
        <Popconfirm
          title="您确认删除这条内容吗?"
          @ok="e=> removeRow(row.key)"
        >
          <Button theme="normal" size="small" type="danger">Delete</Button>
        </Popconfirm>
      </Space>
    </template>
  </Table>
</template>
<script>
export default{
  data() {
    return {
      data:[
        { key:'0', name:'Li Lei' ,age:28 , address:'Wu Han Guanggu No. 328',isEdit:false },
        { key:'1', name:'Liu Hao' ,age:30 , address:'Wu Han Hongshan No. 128',isEdit:false },
        { key:'2', name:'Hu Cong' ,age:28 , address:'Wu Han Nanhu No. 198',isEdit:false },
        { key:'3', name:'Chuchur' ,age:32 , address:'Wu Han Nanhu No. 188',isEdit:false },
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
    save(row){
      console.log(row)
      row.isEdit = false
      this.$Message.success('Save successfuly!')
    },
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
        address: `China Wuhan no.${count}`,
        isEdit:false
      }
      this.data.push(row)
      this.count = count
    }
  }
}
</script>
```

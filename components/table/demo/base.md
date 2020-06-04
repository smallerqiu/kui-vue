<cn>
#### 基本用法
一个普通的表格
</cn>

```tpl
<template>
  <Table :data="data" :columns="columns">
    <template slot="tags" slot-scope="tags">
      <Tag v-for="tag in tags" :key="tag" :color="tag=='Python'?'red':'orange'">{{tag}}</Tag>
    </template>
    <Icon :type="text==1?'ios-male':'ios-female'" slot="gender" slot-scope="text" :color="text==1?'blue':'#f50cff'" size="15"/>
    <template slot="action">
      <a href="javascript:;">Edit</a>
      <a href="javascript:;">Delete</a>
    </template>
  </Table>
</template>
<script>
export default{
  data(){
    return{
      data:[
        { key:'0', name:'Han Lin' ,gender: 0 , age:32 , address:'Wu Han Guanggu No. 328', tags:['Python','Java'] },
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

<cn>
#### 可展开
当表格内容较多不能一次性完全展示时。
</cn>

```vue
<template>
  <Table :data="data" :columns="columns">
    <template slot="expandedRowRender" slot-scope="record">
        My name is {{record.name}}, I am {{record.age}} years old, living in {{record.address}}.
    </template>
    <template slot="tags" slot-scope="tags">
      <Tag v-for="tag in tags" :key="tag" :color="tag=='Python'?'red':'orange'">{{tag}}</Tag>
    </template>
    <Icon :type="text==1 ? Moon : Sunny" slot="gender" slot-scope="text" :color="text==1?'blue':'#f50cff'" size="15"/>
    <template slot="action">
      <a href="javascript:;">Edit</a>
      <a href="javascript:;">Delete</a>
    </template>
  </Table>
</template>
<script>
import { Moon, Sunny } from "kui-icons";
export default{
  data() {
    return {
      Moon, Sunny,
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

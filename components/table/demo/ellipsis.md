<cn>
#### 单元格自动省略
设置 columns.ellipsis 可以让单元格内容根据宽度自动省略。
</cn>

```vue
<template>
  <Table :data="data" :columns="columns">
    <a slot="name" slot-scope="text">{{text}}</a>
  </Table>
</template>
<script>
export default{
  data(){
    return{
      data:[
        {key:'0', name:'Li Lei' ,age:32 , address:'China Hubei Wu Han Guanggu No. 328',  },
        {key:'1', name:'Liu Hao' ,age:28 , address:'China Hubei Wu Han Hongshan No. 128',  },
        {key:'2', name:'Hu Cong' ,age:28 , address:'China Hubei Wu Han Nanhu No. 198',  },
        {key:'3', name:'Chuchur' ,age:28 , address:'China Hubei Wu Han Nanhu No. 188',  },
      ],
      columns:[
        { title:'Name', key:'name' },
        { title:'Age', key:'age' ,width:80 },
        { title:'Address', key:'address', ellipsis:true },
        { title:'Long Long Long Long Long Long Value', key:'address', ellipsis:true },
        { title:'Long Value', key:'address', ellipsis:true },
        { title:'Long Value', key:'address', ellipsis:true },
      ]
    }
  }
}
</script>
```

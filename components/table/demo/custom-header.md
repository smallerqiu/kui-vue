<cn>
#### 自定义表头
一个可以自定义表头的表格
</cn>

```vue
<template>
  <Table :data="data" :columns="columns">
    <!-- 通过template 定义表头 ，slot 以 `header-` 开头-->
   <template slot="header-age" slot-scope="text">
      {{text}} <Tooltip title="How old are you?">
          <Icon type="alert-circle-outline" size="20" color="#3e97ff" />
        </Tooltip>
   </template> 
    <template slot="action" slot-scope="text,record,index">
      <Button size="small" @click="e=>show(record)">more</Button>
    </template>
  </Table>
</template>
<script>
export default{
  data(){
    return{
      data:[
        { key:'0', name:'Li Lei' , age:32 , address:'Wu Han Guanggu No. 328' },
        { key:'1', name:'Liu Hao', age:28 , address:'Wu Han Hongshan No. 128' },
        { key:'2', name:'Hu Cong', age:28 , address:'Wu Han Nanhu No. 198' },
        { key:'3', name:'Chuchur', age:28 , address:'Wu Han Nanhu No. 188'},
      ],
      columns:[
        { title:'Name', key:'name' },
        { title:'Age', key:'age', },
        { 
          title:'Address', key:'address',
          renderHeader:(h,title)=>{ // 通过render 定义表头
          return h('span',{},[
              title,
              h('Tooltip',{
                props:{
                  title:'Where do you live?'
                }
              },[
                h('Icon',{props:{ type:'alert-circle-outline',color:'#3e97ff',size:'20'}})
              ])
            ]) 
          }
        },
        { 
          title:'Action', key:'action',
          width:200,
          renderHeader:(h,text)=>{ // 通过render 定义表头
            return h('Input',{
              style:{
                width:'150px'
              },
              props:{
                size:'small',
                placeholder:'请输入关键字搜索',
              },
              on:{
                search:e=>{
                  this.$Message.info(e||'')
                }
              }

            })
          }
        },
      ]
    }
  },
  methods:{
    show(record){
      this.$Modal.info({
        title:'More',
        content: `Name:${record.name} <br/>Aage:${record.age} <br/>Address:${record.address}`,
      })
    }
  }
}
</script>
```

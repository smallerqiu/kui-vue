<cn>
#### 自定义表头
一个可以自定义表头的表格  , 可以通过 `v-slot:header-` 或者 `renderHeader` 函数定义表头
</cn>

```vue
<template>
  <Table :data="data" :columns="columns" :sticky="52">
    <!-- 通过template 定义表头 ，slot 以 `header-` 开头-->
   <template v-slot:header-age="value">
      {{value}} <Tooltip title="How old are you?">
          <Icon :type="AlertCircle" size="18" color="#ccc" />
        </Tooltip>
   </template> 
    <template v-slot:action="value,record,col">
      <Button size="small" @click="e=>show(record)">more</Button>
    </template>

    <template v-slot:address="value">
      <div style="text-align:right">{{value}}~ align-right</div>
    </template>
  </Table>
</template>
<script>
import { AlertCircle } from "kui-icons";
export default{
  data() {
    return {
      AlertCircle,
      data:[
        { key:'0', name:'Li Lei' , age:32 , address:'Wu Han Guanggu No. 328' },
        { key:'1', name:'Liu Hao', age:28 , address:'Wu Han Hongshan No. 128' },
        { key:'2', name:'Hu Cong', age:28 , address:'Wu Han Nanhu No. 198' },
        { key:'3', name:'Chuchur', age:28 , address:'Wu Han Nanhu No. 188'},
      ],
      columns:[
        { title:'Name', key:'name' },
        { title:'年龄', key:'age', },
        { 
          title:'地址', key:'address',
          renderHeader:(h,title)=>{ // 通过render 定义表头
          return [
              title,
              h('Tooltip',{
                props:{
                  title:'Where do you live?'
                }
              },[
                h('Icon',{ props:{ type:AlertCircle, color:'#ccc',size:18}})
              ])
            ]
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
                  this.$Message.info(e||'click')
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

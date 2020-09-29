<cn>
#### 基本用法
使用自定义`render`来初始化表格
</cn>

```tpl
<template>
  <Table :data="data" :columns="columns" />

  <Modal title="More" v-model="showMore">
    <p>Name: {{item.name}}</p>
    <p>Age: {{item.age}}</p>
    <p>Gender: {{item.gender==0?'男':'女'}}</p>
    <p>Address: {{item.address}}</p>
  </Modal> 
</template>
<script>
export default{
  data(){
    return{
      item:{},
      showMore: false,
      data:[
        { key:'0', name:'Han Lin' ,gender: 0 , age:32 , address:'Wu Han Guanggu No. 328', tags:['Python','Java'] },
        { key:'1', name:'Liu Hao' ,gender: 1 , age:28 , address:'Wu Han Hongshan No. 128', tags:['Python','Java'] },
        { key:'2', name:'Hu Cong' ,gender: 0 , age:28 , address:'Wu Han Nanhu No. 198', tags:['JS','CSS'] },
        { key:'3', name:'Chuchur' ,gender: 1 , age:28 , address:'Wu Han Nanhu No. 188', tags:['Go','Python'] },
      ],
      columns:[
        { title:'Name', key:'name' },
        { title:'Age', key:'age', },
        { 
          title:'Gender', key:'gender',
          render:(h,{gender},i)=>{
            return h('Icon',{
              props:{
                type :  gender==1?'ios-male':'ios-female',
                color: gender==1?'blue':'#f50cff',
                size: 15
              }
            })
          }
        },
        { title:'Address', key:'address' },
        {
           title:'Tags', key:'tags',render:(h,{tags},i)=>{
             return tags.map(function(tag){ 
               return h('Tag',{
                props:{
                  color:tag=='Python'?'red':'orange'
                }
             },tag)})
          }
        },
        { 
          title:'Action', key:'action',
          render:(h,row,i)=>{
            return h('Button',{
              props:{
                mini:true,
              },
              on:{
                'click': e=>{
                  console.log(this.item)
                  this.showMore = true
                  this.item = row
                }
              },
            },'more')
          }
        },
      ]
    }
  }
}
</script>
```

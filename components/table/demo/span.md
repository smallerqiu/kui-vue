<cn>
#### 表格行/列合并
表头只支持列合并，使用 column 里的 colSpan 进行设置。
表格支持行/列合并，使用 render 里的单元格属性 colSpan 或者 rowSpan 设值为 0 时，设置的表格不会渲染。
</cn>

```tpl
<template>
  <Table :data="data" :columns="columns" bordered>
    <a slot="name" slot-scope="text">{{text}}</a>
  </Table>
</template>
<script>
export default{
  data(){
    const render = (value,row,index)=>{
      return {
        children: value,
        attrs: {
          colSpan: index==4 ? 0 : null
        }
      }
    }
    return{
      data:[
        {key:'0',  name:'Han Lin' ,age:32 , night:'1 orange',  morning:'3 apple' },
        {key:'1',  name:'Liu Hao' ,age:28 , night:'2 orange',  morning:'2 apple' },
        {key:'2',  name:'Hu Cong' ,age:28 , night:'3 orange',  morning:'2 apple' },
        {key:'3',  name:'Chuchur' ,age:28 , night:'2 orange',  morning:'3 apple' },
        {key:'4',  name:'WangKang' ,age:28 , night:'2 orange',  morning:'3 apple' },
      ],
      columns:[
        {
          title:'Name',
          key:'name',
          rowSpan:3 ,
          render: (value,row,index)=>{
            return {
              children:<a href="javascript:;">{value}</a>,
              attrs: {
                colSpan: index==4 ? 4 : null
              }
            }
          }
        },
        {
          title:'Age',
          key:'age' ,
          render: (value,row,index)=>{

            let props = {
              children:value,
              attrs:{}
            }
            if(index == 0){
              props.attrs.rowSpan = 3
            }
            if(index == 1||index == 2 ){
              props.attrs.rowSpan = 0
            }
            if(index == 4 ){
              props.attrs.colSpan = 0
            }
            return props
          }
        },
        { title:'Food',colSpan: 2 },
        { title:'Morning', key:'morning', colSpan: 0 , render },
        { title:'Night', key:'night' , colSpan: 0 , render},
      ]
    }
  }
}
</script>
```

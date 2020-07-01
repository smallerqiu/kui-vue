<cn>
#### 带边框
添加表格边框线，页头和页脚。
</cn>

```tpl
<template>
  <Table :data="data" :columns="columns" bordered>
    <a slot="name" slot-scope="text">{{text}}</a>

    <template slot="price" slot-scope="text"><span :class="{'test-table-price':text>20000}">￥{{text}}/㎡</span></template>

    <template slot="header">
     Header
    </template>
    <template slot="footer">
     Footer
    </template>
  </Table>
</template>
<script>
export default{
  data(){
    return{
      data:[
        { key:'0', name:'Han Lin' ,price:18990 , address:'Wu Han Guanggu No. 328' },
        { key:'1', name:'Liu Hao' ,price:23900 , address:'Wu Han Hongshan No. 128' },
        { key:'2', name:'Hu Cong' ,price:12000 , address:'Wu Han Nanhu No. 198' },
        { key:'3', name:'Chuchur' ,price:28000 , address:'Wu Han Nanhu No. 188' },
      ],
      columns:[
        {title:'Name', key:'name' },
        {title:'House price', key:'price',className:'test-table-cell' },
        {title:'Address', key:'address' },
      ]
    }
  }
}
</script>
<style>
  .test-table-cell{
    text-align:right;
  }
  .test-table-price{
    color:red;
    background:yellow;
    font-weight:bold;
  }
</sytle>
```

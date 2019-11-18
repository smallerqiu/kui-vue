<cn>
#### 过滤 和 远程搜索
通过设置 `filterable` 值来呈现多选模式
</cn>

```tpl
<template>
  <div>
    <Select :width="300" v-model="data" placeholder="单选过滤" filterable>
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana"/>
      <Option value="4" label="Pear" />
      <Option value="5" label="Peach" />
      <Option value="6" label="Grape" />
    </Select>
    <Select :width="300" multiple v-model="data2" placeholder="多选过滤">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana"/>
      <Option value="4" label="Pear" />
      <Option value="5" label="Peach" />
      <Option value="6" label="Grape" />
    </Select>
    <Select :width="300" multiple v-model="data3" placeholder="远程搜索">
      <Option value="1" label="苹果" />
      <Option value="2" label="香蕉" />
      <Option value="3" label="梨子" />
      <Option value="4" label="火龙果" />
      <Option value="5" label="桃子" />
      <Option value="6" label="葡萄" />
    </Select>
  </div>
</template>
<script>
export default{
  data(){
   return{
     data:'',
     data2:[],
     data3:[],
   } 
  }
}
</script> 
```
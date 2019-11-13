<cn>
#### 基础用法
单独使用 `checked` 表示是否为选中状态 ,使用 `v-model` 可以双向绑定数据。
</cn>

```tpl
<template>
  <div>
    <p>{{checked}}</p>
    <Checkbox v-model="checked" mini>单选框 </Checkbox>
    <Button @click="checked=!checked" mini>Click me</Button>
    <br/>
    <br/>
    <Checkbox label="无状态"/>
  </div>
</template>
<script>
export default{
  data(){
    return{
      checked:true
    }
  }
}
</script>
```
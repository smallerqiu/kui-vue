<cn>
#### 基本用法
单独使用可使用 `v-model` 双向绑定数据
</cn>

```tpl
<template>
  <div>
    <p>{{checked}}</p>
    <Radio v-model="checked">测试</Radio>
    <Button @click="checked=!checked" mini>Click me</Button>
    <br/>
    <br/>
    <Radio label="无状态"/>
  </div>
</template>
<script>
export default{
  data(){
    return{
      checked:false
    }
  }
}
</script>
```
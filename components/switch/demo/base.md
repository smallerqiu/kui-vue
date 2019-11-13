<cn>
#### 基本用法
可使用 `v-model` 进行数据双向绑定
</cn>

```tpl
<template>
  <div>
    <p>{{checked}}</p>
    <Switch v-model="checked" />
    <Button @click="checked=!checked" mini>click me</Button>
    <br/>
    <br/>
    <Switch checked />

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
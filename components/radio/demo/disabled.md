<cn>
#### 可不用 / 可控
通过 `disabled` 设置不可用
</cn>

```tpl
<template>
  <div>
    <Radio disabled>disabled</Radio>
    <Radio disabled :value="true">disabled</Radio>
    <br/>
    <br/>
    <Radio :disabled="disabled" v-model="checked">{{checked?'Checked':'Uncheck'}}</Radio>
    <Button @click="checked=!checked" mini>Check</Button>
    <Button @click="disabled=!disabled" mini>Disable</Button>
  </div>
</template>
<script>
export default{
  data(){
    return{
      disabled:false,
      checked:false
    }
  }
}
</script>
```
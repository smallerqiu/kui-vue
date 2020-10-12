<cn>
#### 可不用 / 可控
通过 `disabled` 设置不可用
</cn>

```vue
<template>
  <div>
    <Radio disabled>disabled</Radio>
    <Radio disabled :value="true">disabled</Radio>
    <br/>
    <br/>
    <Radio :disabled="disabled" v-model="checked">Radio</Radio>
    <Button @click="checked=!checked" mini>{{checked?'Checked':'Uncheck'}}</Button>
    <Button @click="disabled=!disabled" mini>{{disabled?'Enable':'Disabled'}}</Button>
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
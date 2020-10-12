<cn>
#### 可不用 / 可控
通过 `disabled` 设置不可用
</cn>

```vue
<template>
  <div>
    <Checkbox disabled>disabled</Checkbox>
    <Checkbox disabled :checked="true">disabled</Checkbox>
    <Checkbox indeterminate disabled>indeterminate</Checkbox>
    <br/>
    <br/>
    <Checkbox :disabled="disabled" v-model="checked">Checkbox</Checkbox>
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
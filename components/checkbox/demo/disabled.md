<cn>
#### 可不用 / 可控
通过 `disabled` 设置不可用
</cn>

```tpl
<template>
  <div>
    <Checkbox disabled>disabled</Checkbox>
    <Checkbox disabled :value="true">disabled</Checkbox>
    <Checkbox :value="true" indeterminate disabled>indeterminate</Checkbox>
    <br/>
    <br/>
    <Checkbox :disabled="disabled" v-model="checked">{{checked?'Checked':'Uncheck'}}</Checkbox>
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
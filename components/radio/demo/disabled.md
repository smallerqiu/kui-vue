<cn>
#### 可不用 / 可控
通过 `disabled` 设置不可用
</cn>

```vue
<template>
  <Space>
    <Radio disabled>disabled</Radio>
    <Radio disabled :value="true">disabled</Radio>
    <Radio :disabled="disabled" v-model="checked">Radio</Radio>
    <Button @click="checked=!checked" size="small">{{checked?'Checked':'Uncheck'}}</Button>
    <Button @click="disabled=!disabled" size="small">{{disabled?'Enable':'Disabled'}}</Button>
  </Space>
</template>
<script>
export default{
  data() {
    return {
      disabled:false,
      checked:false
    }
  }
}
</script>
```
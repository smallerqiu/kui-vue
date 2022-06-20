<cn>
#### 禁用 / 可控
通过 `disabled` 属性设置组件是否被禁用
</cn>

```vue
<template>
  <div>
    <Switch disabled />
    <br />
    <Switch :disabled="disabled" v-model="checked" />
    <Button size="small" @click="checked=!checked">{{checked?'Uncheck':'Check'}}</Button>
    <Button size="small" @click="disabled=!disabled">{{disabled?'Enable':'Disabled'}}</Button>
    <br />
    <Switch disabled true-text="Yes" false-text="No" />
    <br />
    <Switch disabled true-text="Yes" false-text="No" checked />
    <br />
    <Switch disabled true-text="Yes" false-text="No" checked size="small"/>
  </div>
</template>
<script>
export default{
  data() {
    return {
      checked:false,
      disabled:false
    }
  }
}
</script>
```
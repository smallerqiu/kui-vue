<cn>
#### 禁用 / 可控
通过 `disabled` 属性设置组件是否被禁用
</cn>

```vue
<template>
  <Space vertical align="start">
    <KSwitch disabled />
    <Space>
      <KSwitch :disabled="disabled" v-model="checked" />
      <Button size="small" @click="checked=!checked">{{checked?'Uncheck':'Check'}}</Button>
      <Button size="small" @click="disabled=!disabled">{{disabled?'Enable':'Disabled'}}</Button>
    </Space>
    <KSwitch disabled true-text="Yes" false-text="No" />
    <KSwitch disabled true-text="Yes" false-text="No" checked />
    <KSwitch disabled true-text="Yes" false-text="No" checked size="small"/>
  </Space>
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
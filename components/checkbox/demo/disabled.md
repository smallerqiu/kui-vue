<cn>
#### 可不用 / 可控
通过 `disabled` 设置不可用
</cn>

```vue
<template>
  <Space>
    <Checkbox disabled>disabled</Checkbox>
    <Checkbox disabled
      :checked="true">disabled</Checkbox>
    <Checkbox indeterminate
      disabled>indeterminate</Checkbox>
    <br />
    <br />
    <Checkbox :disabled="disabled"
      v-model="checked">Checkbox</Checkbox>
    <Button @click="checked=!checked"
      size="small">{{checked?"Checked":"Uncheck"}}</Button>
    <Button @click="disabled=!disabled"
      size="small">{{disabled?"Enable":"Disabled"}}</Button>
  </Space>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
      checked: false
    }
  }
}
</script>
```
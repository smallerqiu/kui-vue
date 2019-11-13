<cn>
#### 禁用 / 可控
通过 `disabled` 属性设置组件是否被禁用
</cn>

```tpl
<template>
  <div>
    <Switch disabled />
    <br />
    <Switch :disabled="disabled" v-model="checked" />
    <Button mini @click="checked=!checked">click me</Button>
    <Button mini @click="disabled=!disabled">Disabled</Button>
    <br />
    <Switch disabled true-text="是" false-text="否" />
    <br />
    <Switch disabled true-text="是" false-text="否" checked />
    <br />
    <Switch disabled true-text="是" false-text="否" checked mini/>
  </div>
</template>
<script>
export default{
  data(){
    return{
      checked:false,
      disabled:false
    }
  }
}
</script>
```
<cn>
#### 组合使用Options
组合使用可以直接使用 `CheckboxGroup` 的 `options` 来赋值,
或者结合子组件 `Checkbox` 来组合使用,通过 `disabled` 可以设置组件是否被禁用
</cn>

```vue
<template>
  <RadioGroup :options="types" v-model="direction" type="button"/>
  <br />
  <br />
  <CheckboxGroup 
    :options="options" 
    v-model="cities" 
    @change="change"
    :direction="direction"
  />
</template>
<script setup>
const direction = 'horizontal'
const types = [
        { label: '垂直', value:'vertical'},
        { label: '水平' ,value:'horizontal'}
      ]
const cities = ['wuhan']

const change = ({value,label,checked}) => {
      this.$Message.info(`Value: ${value} , Label:${label} , Checked:${checked}`)
}
</script>
```

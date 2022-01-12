<cn>
#### 组合使用Options
- 组合使用可以直接使用 `RadioGroup` 的 `options` 来赋值,
- 或者结合子组件 `Radio` 来组合使用,通过 `disabled` 可以设置组件是否被禁用
</cn>

```vue
<template>
  <div>
    <RadioGroup :options="types" v-model="direction" type="button" theme="solid"/>
    <br />
    <br />
    <RadioGroup 
    :options="options" 
    v-model="cities" 
    @change="change"
    :direction="direction"
  />
  </div>
</template>
<script>
export default {
  data() {
    return {
      direction:'horizontal',
      types:[
        { label: '垂直', value:'vertical'},
        { label: '水平' ,value:'horizontal'}
      ],
      options: [
        { label: 'Beijing', value: 'beijing' },
        { label: 'Shenzhen', value: 'shenzhen' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Guangzhou', value: 'guangzhou' },
        { label: 'Wuhan', value: 'wuhan' },
        { label: 'Other', value: 'other',disabled:true },
      ],
      cities:'wuhan'
    };
  }
}
</script>
```
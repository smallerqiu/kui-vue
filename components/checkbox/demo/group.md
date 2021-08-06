<cn>
#### 组合使用
组合使用可以直接使用 `CheckboxGroup` 的 `options` 来赋值,或者结合 `Checkbox` 来组合使用,通过 `disabled` 可以设置组件是否被禁用
**`CheckboxGroup` 可以直接使用 `options` 来组合，3.0版本增加**
</cn>

```vue
<template>
  <div>
    <p>{{data}}</p>
    <CheckboxGroup v-model="data">
      <Checkbox label="Apple" value="apple" />
      <Checkbox label="Orange" value="orange" />
      <Checkbox label="Banana" value="banana" />
      <Checkbox label="Grape" value="grape" disabled/>
      <Checkbox label="Pear" value="pear" disabled/>
    </CheckboxGroup>
    <Button @click="data=[]" size="small">Clear</Button>
    <Button @click="data=['apple']" size="small">Select apple</Button>
    <br/>
    <br/>
    <p>{{cities}}</p>
    <CheckboxGroup :options="options" v-model="cities"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      data: ['apple','grape'],
      options: [
        { label: 'Beijing', value: 'beijing' },
        { label: 'Shenzhen', value: 'shenzhen' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Guangzhou', value: 'guangzhou' },
        { label: 'Wuhan', value: 'wuhan' },
        { label: 'Other', value: 'other',disabled:true },
      ],
      cities:['wuhan']
    };
  }
}
</script>
```

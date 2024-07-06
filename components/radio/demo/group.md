<cn>
#### 组合使用
组合使用可以直接使用 `RadioGroup` 的 `options` 来赋值,或者结合 `Radio` 来组合使用,通过 `disabled` 可以设置组件是否被禁用
> `RadioGroup` 可以直接使用 `options` 来组合，3.0版本增加
</cn>

```vue
<template>
  <Space vertical align="start">
    <Space>
      <Button @click="data=''" size="small">Clear</Button>
      <Button @click="data='apple'" size="small">Select apple</Button>
      Selected: {{data}}
    </Space>
    <RadioGroup v-model="data">
      <Radio label="Apple" value="apple" />
      <Radio label="Orange" value="orange" />
      <Radio label="Banana" value="banana" />
      <Radio label="Grape" value="grape" disabled/>
      <Radio label="Pear" value="pear" disabled/>
    </RadioGroup>
    
    {{cities}}
    <RadioGroup :options="options" v-model="cities"/>
  </Space>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      data: 'apple',
      options: [
        { label: 'Beijing', value: 'beijing' },
        { label: 'Shenzhen', value: 'shenzhen' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Guangzhou', value: 'guangzhou' },
        { label: 'Wuhan', value: 'wuhan' },
      ],
      cities:'wuhan'
    };
  }
}
</script>
```
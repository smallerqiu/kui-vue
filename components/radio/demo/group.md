<cn>
#### 组合使用
组合使用可以直接使用 `RadioGroup` 的 `options` 来赋值,或者结合 `Radio` 来组合使用,通过 `disabled` 可以设置组件是否被禁用
**`RadioGroup` 可以直接使用 `options` 来组合，3.0版本增加**
</cn>

```tpl
<template>
  <div>
    <p>{{data}}</p>
    <RadioGroup v-model="data">
      <Radio label="苹果🍎" value="apple" />
      <Radio label="橘子🍊" value="orange" />
      <Radio label="香蕉🍌" value="banana" />
      <Radio label="葡萄🍇" value="grape" disabled/>
      <Radio label="梨子🍐" value="pear" disabled/>
    </RadioGroup>
    <Button @click="data=''" mini>清除</Button>
    <Button @click="data='apple'" mini>选中苹果</Button>
    <br/>
    <br/>
    <p>{{cities}}</p>
    <RadioGroup :options="options" v-model="cities"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      data: 'apple',
      options: [
        { label: '北京', value: 'beijing' },
        { label: '深圳', value: 'shenzhen' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' },
        { label: '武汉', value: 'wuhan' },
      ],
      cities:'wuhan'
    };
  }
}
</script>
```
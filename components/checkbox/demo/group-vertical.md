<cn>
#### 组合垂直布局
组合垂直布局
</cn>

```vue
<template>
  <div>
    <p>{{data}}</p> 
    <br/>
    <Button @click="data=[]" size="small">Clear</Button>
    <Button @click="data=['apple']" size="small">Select apple</Button>
    <br/>
    <br/>
    <CheckboxGroup v-model="data" direction="vertical">
      <Checkbox label="Apple" value="apple" />
      <Checkbox label="Orange" value="orange" />
      <Checkbox label="Banana" value="banana" />
      <Checkbox label="Grape" value="grape" disabled/>
      <Checkbox label="Pear" value="pear" disabled/>
    </CheckboxGroup>
    <br/>
    <p>{{cities}}</p>
    <br/>
    <CheckboxGroup :options="options" v-model="cities" direction="vertical"/>
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

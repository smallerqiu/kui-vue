<cn>
#### 全选
全选组合
</cn>

```vue
<template>
  <div>
    <Checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handelCheckAll">Check all</Checkbox>
    <br/>
    <CheckboxGroup :options="options" v-model="cities" @change="change"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkAll: false,
      indeterminate: false,
      options: [
        { label: 'Beijing', value: 'beijing' },
        { label: 'Shenzhen', value: 'shenzhen' },
        { label: 'Shanghai', value: 'shanghai' },
        { label: 'Guangzhou', value: 'guangzhou' },
        { label: 'Wuhan', value: 'wuhan' },
      ],
      cities:[]
    };
  },
  methods: {
    handelCheckAll(e) {
      let checked = e.target.checked
      this.cities = checked ? ["beijing", "shenzhen", "shanghai", "guangzhou",'wuhan'] : [];
      
      let length = this.cities.length
      this.indeterminate = length > 0 && length< this.options.length
    },
    change(data) {
      this.checkAll = data.length == this.options.length
      this.indeterminate = data.length>0&& data.length < this.options.length
    }
  }
};
</script>
```
<cn>
#### 全选
全选组合
</cn>

```tpl
<template>
  <div>
    <Checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handelCheckAll">全选</Checkbox>
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
        { label: '北京', value: 'beijing' },
        { label: '深圳', value: 'shenzhen' },
        { label: '上海', value: 'shanghai' },
        { label: '广州', value: 'guangzhou' },
        { label: '武汉', value: 'wuhan' },
      ],
      cities:[]
    };
  },
  methods: {
    handelCheckAll(e) {
      let checked = e.target.checked
      if (checked) { 
        this.cities = ["beijing", "shenzhen", "shanghai", "guangzhou",'wuhan'];
      } else {
        this.cities = [];
      } 
      let length = this.cities.length
      this.indeterminate = length>0 && length< this.options.length
    },
    change(data) {
      this.checkAll = data.length == this.options.length
      this.indeterminate = data.length>0&& data.length < this.options.length
    }
  }
};
</script>
```
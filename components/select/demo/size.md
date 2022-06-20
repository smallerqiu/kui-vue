<cn>
#### 尺寸
通过 `width` 和 `size` 可控制组件尺寸大小
</cn>

```vue
<template>
  <div>
    <RadioGroup :value="size" @change="setSize" :icon="Search">
      <RadioButton value="large" label="large"/>
      <RadioButton value="default" label="default"/>
      <RadioButton value="small" label="small"/>
    </RadioGroup>
    <br />
    <br />
    <Select :width="256" :size="size" clearable filterable  :icon="Search">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana"/>
      <Option value="4" label="Pear" />
    </Select>
    <br />
    <Select :width="256" :size="size" multiple v-model="value" filterable  :icon="Search">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana" />
      <Option value="4" label="Pear" />
    </Select>
  </div>
</template>
<script>
import { Search } from "kui-icons";
export default{
  data() {
    return {
      Search,
      size:'default',
      value:['1','3']
    }
  },
  methods:{
    setSize({value}){
      this.size = value
    }
  }
}
</script>
```
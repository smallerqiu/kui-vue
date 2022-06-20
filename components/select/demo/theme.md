<cn>
#### 主题
通过 `theme` 设置主题 , shape='circle' ,呈现圆角, multiple 多选模式下, shape 无效
</cn>

```vue
<template>
  <div>
    <Checkbox v-model="checked" label="Shape" />
    <br/>
    <br/>
    <Select :width="256" :icon="Search" theme="light" :shape="checked?'circle':''"/>
    <br/>
    <Select :width="256" clearable filterable theme="light" :shape="checked?'circle':''">
      <Option value="1" label="Apple" />
      <Option value="2" label="Orange" />
      <Option value="3" label="Banana"/>
      <Option value="4" label="Pear" />
    </Select>
    <br/>
    <Select :width="256" :icon="Search" :shape="checked?'circle':''"/>
    <br />
    <Select :width="256" multiple v-model="value" filterable theme="light">
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
      checked:true,
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
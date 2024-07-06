<cn>
#### 主题
通过 `theme` 设置主题 , shape='circle' ,呈现圆角, multiple 多选模式下, shape 无效
</cn>

```vue
<template>
  <Space vertical align="start">
    <Checkbox v-model="checked" label="Circle" />
    <Select :width="256" clearable :icon="Search" theme="light" :shape="checked?'circle':''" :options="options" />
    <Select :width="256" clearable filterable theme="light" :shape="checked?'circle':''" :options="options"> 
    </Select>
    <Select :width="256" clearable :icon="Search" :shape="checked?'circle':''" :options="options" />
    <Select :width="256" multiple v-model="value" filterable theme="light" :options="options"> 
    </Select>
  </Space>
</template>
<script>
import { Search } from "kui-icons";
export default{
  data() {
    return {
      Search,
      checked:true,
      value:['1','3'],
      options:[
        {label:'Apple' ,value: "1"},
        {label:'Orange' ,value: "2"},
        {label:'Banana' ,value: "3"},
        {label:'Pear' ,value: "4"},
      ]
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
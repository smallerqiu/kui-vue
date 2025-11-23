<cn>
### 主题和自定义
theme=light 呈现浅色主题, shape=circle 呈现圆角, dateIcon 可自定义图标
</cn>

```vue
<template>
  <Space vertical>
    <Checkbox v-model="shape" label="Circle" />
    <DatePicker theme="light" :shape="shape?'circle':''"/>
    <DatePicker theme="light" :shape="shape?'circle':''" :dateIcon="ArrowDown"/>
    <DatePicker theme="light" :shape="shape?'circle':''" :dateIcon="CaretDown"/>
    <DatePicker theme="light" :shape="shape?'circle':''" :dateIcon="null" placeholder="没有icon"/>
    <DatePicker mode="month" placeholder="请选择月份" theme="light" :shape="shape?'circle':''"/>
    <DatePicker mode="dateRange" theme="light" :shape="shape?'circle':''"/>
  </Space>
</template>
<script>
import { ArrowDown, CaretDown } from "kui-icons";
export default{
  data() {
    return {
      ArrowDown, CaretDown,
      shape : false
    }
  }
}
</script>
```
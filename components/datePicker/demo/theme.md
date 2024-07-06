<cn>
#### 主题和自定义
theme=light 呈现浅色主题, shape=circle 呈现圆角, dateIcon 可自定义图标
</cn>

```vue
<template>
  <div>
    <Checkbox v-model="shape" label="Circle" />
    <br/>
    <br/>
    <DatePicker theme="light" :shape="shape?'circle':''"/>
    <br/>
    <DatePicker theme="light" :shape="shape?'circle':''" :dateIcon="ArrowDown"/>
    <br/>
    <DatePicker theme="light" :shape="shape?'circle':''" :dateIcon="CaretDown"/>
    <br/>
    <DatePicker theme="light" :shape="shape?'circle':''" :dateIcon="null" placeholder="没有icon"/>
    <br/>
    <DatePicker mode="month" placeholder="请选择月份" theme="light" :shape="shape?'circle':''"/>
    <br/>
    <DatePicker mode="dateRange" theme="light" :shape="shape?'circle':''"/>
  </div>
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
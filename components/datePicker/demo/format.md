<cn>
#### 日期格式
使用 `format` 属性，可以自定义日期显示格式，详见  [dayjs](http://day.js.org/)。
</cn>

```vue
<template>
  <div>
    <DatePicker
      value="2019-10-12 22:12:12"
      format="YYYY年MM月DD日 HH:mm:ss"
      type="dateTime"
      style="width:210px"
    />
    <br />
    <DatePicker value="2019-10-12" format="YYYY/MM/DD" />
    <br />
    <DatePicker value="2019-10-12" format="YYYY.MM.DD" />
    <br />
    <DatePicker
      v-model:value="date"
      format="YYYY.MM.DD"
      type="dateRange"
      @change="change"
    />{{ date }}
  </div>
</template>
<script setup>
import { ref } from "vue";
const date = ref(["2019-10-12", "2020-10-19"]);
const change = (date) => {
  console.log(date);
};
</script>
```

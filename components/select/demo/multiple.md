<cn>
#### 多选
通过设置 `multiple` 值来呈现多选模式
</cn>

```vue
<template>
  <div>
    <Space>
      <Select :width="300" multiple v-model:value="data" size="large" >
        <Option value="1" label="Apple" />
        <Option value="2" label="Orange" />
        <Option value="3" label="Banana"/>
        <Option value="4" label="Pear" />
        <Option value="5" label="Peach" />
        <Option value="6" label="Grape" />
      </Select>
      <Button size="small" @click="Clear">Clear</Button>
      <Button size="small" @click="onSelect">Select Banana & Apple</Button>
    </Space>
    <br/>
    <Space vertical style="margin-top:10px">
      <Select :width="300" multiple v-model:value="data2" clearable>
        <Option value="1" label="Apple" />
        <Option value="2" label="Orange" />
        <Option value="3" label="Banana"/>
        <Option value="4" label="Pear" />
        <Option value="5" label="Peach" />
        <Option value="6" label="Grape" />
      </Select>
      <Select :width="300" size="small" multiple >
        <Option value="1" label="苹果" />
        <Option value="2" label="香蕉" />
        <Option value="3" label="梨子" />
        <Option value="4" label="火龙果" />
        <Option value="5" label="桃子" />
        <Option value="6" label="葡萄" />
      </Select>
      <Select :width="300" multiple v-model:value="data2" disabled>
        <Option value="1" label="Apple" />
        <Option value="2" label="Orange" />
        <Option value="3" label="Banana"/>
        <Option value="4" label="Pear" />
        <Option value="5" label="Peach" />
        <Option value="6" label="Grape" />
      </Select>
    </Space>
  </div>
</template>
<script setup>
import { ref } from "vue";
const data = ref([]);
const data2 = ref(['2','4']);
const Clear = () => {
  data.value = []
}
const onSelect = () => {
  data2.value = ['3','1']
}
</script> 
```
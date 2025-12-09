<cn>
### 尺寸
`small` 为小尺寸， `large` 为大尺寸
</cn>

```vue
<template>
  <Space vertical align="start">
    <RadioGroup v-model:value="size">
      <RadioButton value="large" label="Large" @click="()=>{}"/>
      <RadioButton value="default" label="Default" />
      <RadioButton value="small" label="Small" />
    </RadioGroup>
    <Space wrap>
      <Button type="primary" :size="size">Primary</Button>
      <Button :size="size">Default</Button>
      <Button type="text" :size="size">Text</Button>
      <Button type="link" :size="size">Link</Button>
      <Button type="primary" :size="size" :icon="CloudDownload"></Button>
      <Button
        type="primary"
        shape="circle"
        :size="size"
        :icon="CloudDownload"
      ></Button>
      <Button type="primary" shape="circle" :size="size" :icon="CloudDownload">
        Download
      </Button>
      <Button type="primary" :size="size" :icon="CloudDownload">
        Download
      </Button>
    </Space>
  </Space>
</template>
<script setup>
import { CloudDownload } from "kui-icons";
import { ref } from "vue";
const size = ref("default");
</script>
```

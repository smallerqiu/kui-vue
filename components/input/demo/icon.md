<cn>
### 带图标
通过设置 `icon` 属性，可设置输入框图标，只对 `input` 有效。可以快速的实现 ，密码显示隐藏，搜索
</cn>

```vue
<template>
  <Space vertical block>
    <Input placeholder="User Name..." :icon="Person" />
    <Input type="password" placeholder="Password..." :icon="LockClosed" />
    <Input
      type="password"
      placeholder="Password no toggle"
      :icon="LockClosed"
      :visiblePasswordIcon="false"
    />
    <Space compact block>
      <Input
        type="password"
        placeholder="Password default text"
        :icon="LockClosed"
        :visiblePasswordIcon="visiblePasswordIcon"
      />
      <Button
        @click="visiblePasswordIcon = !visiblePasswordIcon"
        theme="outline"
      >
        Toggle
      </Button>
    </Space>

    <Input
      placeholder="请输入关进行搜索键字..."
      :clearable="false"
      @search="search"
    />
  </Space>
</template>
<script setup>
import { ref } from "vue";
import { Person, LockClosed } from "kui-icons";
import { message } from "kui-vue";
const visiblePasswordIcon = ref(true);
const search = (value) => {
  message.info("This is search event");
  console.log(value);
};
</script>
```

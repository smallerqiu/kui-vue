<cn>
### 带图标
通过设置 `icon` 属性，可设置输入框图标，只对 `input` 有效。可以快速的实现 ，密码显示隐藏，搜索
</cn>
<en>
### With Icon
By setting the `icon` attribute, you can add an icon to the input field, which is only effective for `input`. This allows for quick implementation of features like password visibility toggle or search.
</en>

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
      <Button @click="visiblePasswordIcon = !visiblePasswordIcon"> Toggle </Button>
    </Space>

    <Input placeholder="Please input" :clearable="false" @search="search" />
  </Space>
</template>
<script setup lang="ts">
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

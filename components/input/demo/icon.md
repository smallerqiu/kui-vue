<cn>
#### 带图标
通过设置 `icon` 属性，可设置输入框图标，只对 `input` 有效。可以快速的实现 ，密码显示隐藏，搜索
</cn>

```vue
<template>
  <div style="width:512px;">
    <Input placeholder="User Name..." :icon="Person" />
    <Input type="password" placeholder="Password..." :icon="LockClosed" />
    <Input placeholder="请输入关进行搜索键字..." @search="search"/>
  </div>
</template>
<script>
import { Person, LockClosed } from "kui-icons";
export default {
  data() {
    return {
       Person, LockClosed
    }
  },
  methods: {
    search() {
      this.$Message.info("This is search event");
    },
  }
};
</script>
```
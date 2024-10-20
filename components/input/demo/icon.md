<cn>
#### 带图标
通过设置 `icon` 属性，可设置输入框图标，只对 `input` 有效。可以快速的实现 ，密码显示隐藏，搜索
</cn>

```vue
<template>
  <Space vertical style="width:512px;">
    <Input placeholder="User Name..." :icon="Person" />
    <Input type="password" placeholder="Password..." :icon="LockClosed" />
    <Space compact>
      <Input type="password" placeholder="Password defalt text" :icon="LockClosed" :visiblePassword="visiblePassword" />
      <Button @click="visiblePassword=!visiblePassword">Toggle</Button>
    </Space>
    <Input type="password" placeholder="Password no toggle" :icon="LockClosed" :visiblePasswordIcon="false" />
    <Input placeholder="请输入关进行搜索键字..." @search="search"/>
  </Space>
</template>
<script>
import { Person, LockClosed } from "kui-icons";
export default {
  data() {
    return {
      visiblePassword:true,
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
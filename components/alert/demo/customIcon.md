<cn>
### 自定义图标
`showIcon` 来设置是否显示图标
</cn>
<en>
### Custom Icon
Use `showIcon` to control whether the icon is displayed.
</en>

```vue
<template>
  <Space vertical block>
    <Alert type="success" showIcon :icon="LogoAlipay">Success Text</Alert>
    <Alert type="info" showIcon :icon="LogoWechat">Info Text</Alert>
    <Alert type="warning" showIcon :icon="LogoApple">Warning Text</Alert>
    <Alert type="error" showIcon :icon="LogoGoogle">Error Text</Alert>

    <Alert
      type="success"
      showIcon
      message="Success Tip"
      :icon="LogoAlipay"
      description="Congratulations, the operation is successful."
    />
    <Alert
      type="info"
      showIcon
      :icon="LogoWechat"
      message="Informational Notes"
      description="Congratulations, the operation is successful."
    />
    <Alert
      type="warning"
      showIcon
      :icon="LogoApple"
      message="Warning"
      description="Nuclear bomb launching base, please do not approach!"
    />
    <Alert
      type="error"
      showIcon
      :icon="LogoGoogle"
      message="Error"
      description="Encountered an error, please press any key to continue."
    />
  </Space>
</template>
<script setup lang="ts">
import { LogoAlipay, LogoWechat, LogoApple, LogoGoogle } from "kui-icons";
</script>
```

<cn>
#### 无边框无背景
无边框无背景
</cn>

```vue
<template>
  <Space>
    <Button type="primary" theme="normal">主要</Button>
    <Button type="danger" theme="normal">危险</Button>
    <Button type="warning" theme="normal">警告</Button>
    <Button theme="normal">默认</Button>
  </Space>
  <br/>
  <br/>
  <Space>
    <Button type="primary" theme="normal":icon="Notifications" />
    <Button type="danger" theme="normal":icon="Mail" />
    <Button type="warning" theme="normal":icon="Notifications" />
    <Button theme="normal":icon="Notifications" />
  </Space>
  <br/>
  <br/>
  <Space>
    <Button type="primary" theme="normal":icon="Notifications" shape="circle" />
    <Button type="danger" theme="normal":icon="Mail" shape="circle" />
    <Button type="warning" theme="normal":icon="Notifications" shape="circle" />
    <Button theme="normal":icon="Notifications" shape="circle" />
  </Space>
</template>
<script>
import { Notifications, Mail } from "kui-icons"
export default{
  data() {
    return {
      Notifications, Mail
    }
  }
}
</script>
```
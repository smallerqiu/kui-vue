<cn>
#### 可控
动态控制
</cn>

```vue
<template>
  <Space size="large">
    <Badge :dot="show">
      <div class="box"></div>
    </Badge>
    <Badge :dot="show">
      <Icon :type="NotificationsOutline" />
    </Badge>
    <Badge :dot="show">
      <a href="#">我是一个连接</a>
    </Badge>
    <KSwitch @change="show=!show" />
    <br/>
    <br/>
    <Badge :count="count" :max-count="20">
      <div class="box"></div>
    </Badge>
    <ButtonGroup circle>
      <Button @click="count--">-</Button>
      <Button @click="count++">+</Button>
    </ButtonGroup>
  </Space>
</template>
<script>
import { NotificationsOutline } from 'kui-icons'
export default{
  data() {
    return {
      NotificationsOutline,
      show:true,
      count:15
    }
  }
} 
</script>
```
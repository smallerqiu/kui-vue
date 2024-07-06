<cn>
#### 文字 / 图标
通过 `true-text` 和 `false-text` 设置选中和非选中呈现文字, 通过设置 `slot` 为 `(checked|unchecked)` 控制内容
</cn>

```vue
<template>
  <Space vertical align="start">
    <Switch true-text="Yes" false-text="No" />
    <Switch true-text="｜" false-text="〇" />
    <Switch true-text="｜" false-text="〇" checked/>
    <Switch true-text="On" false-text="Off" />
    <Switch>
      <Icon :type="Checkmark" slot="checked"/>
      <Icon :type="Close" slot="unchecked"/>
    </Switch>
    <Switch>
      <Icon :type="LogoApple" slot="checked"/>
      <Icon :type="LogoMicrosoft" slot="unchecked"/>
    </Switch>
     <Switch>
      <Icon :type="Airplane" slot="unchecked"/>
      <Icon :type="Wifi" slot="checked"/>
    </Switch>
  </Space>
</template>
<script>
import { Checkmark, Close, LogoApple, LogoMicrosoft, Airplane, Wifi } from "kui-icons";
export default{
  data() {
    return {
      Checkmark, Close, LogoApple, LogoMicrosoft, Airplane, Wifi,
      checked:false
    }
  }
}
</script>
```
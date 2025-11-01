<cn>
#### 文字 / 图标
通过 `true-text` 和 `false-text` 设置选中和非选中呈现文字, 通过设置 `slot` 为 `(checked|unchecked)` 控制内容
</cn>

```vue
<template>
  <Space  align="start">
    <KSwitch true-text="Yes" false-text="No" />
    <KSwitch true-text="｜" false-text="〇" />
    <KSwitch true-text="｜" false-text="〇" checked/>
    <KSwitch true-text="On" false-text="Off" />
    <KSwitch>
      <Icon :type="Checkmark" slot="checked"/>
      <Icon :type="Close" slot="unchecked"/>
    </KSwitch>
    <KSwitch>
      <Icon :type="LogoApple" slot="checked"/>
      <Icon :type="LogoMicrosoft" slot="unchecked"/>
    </KSwitch>
     <KSwitch>
      <Icon :type="Airplane" slot="unchecked"/>
      <Icon :type="Wifi" slot="checked"/>
    </KSwitch>
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
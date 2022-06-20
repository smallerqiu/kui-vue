<cn>
#### 文字 / 图标
通过 `true-text` 和 `false-text` 设置选中和非选中呈现文字, 通过设置 `slot` 为 `(checked|unchecked)` 控制内容
</cn>

```vue
<template>
  <div>
    <Switch true-text="Yes" false-text="No" />
    <br />
    <Switch true-text="｜" false-text="〇" />
    <br />
    <Switch true-text="｜" false-text="〇" checked/>
    <br />
    <Switch true-text="On" false-text="Off" />
    <br />
    <br />
    <Switch>
      <Icon :type="Checkmark" slot="checked"/>
      <Icon :type="Close" slot="unchecked"/>
    </Switch>
    <Switch>
      <Icon :type="LogoApple" slot="checked"/>
      <Icon :type="LogoMicrosoft" slot="unchecked"/>
    </Switch>
    <br />
     <Switch>
      <Icon :type="Airplane" slot="unchecked"/>
      <Icon :type="Wifi" slot="checked"/>
    </Switch>
  </div>
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
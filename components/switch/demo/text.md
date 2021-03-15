<cn>
#### 文字 / 图标
通过 `true-text` 和 `false-text` 设置选中和非选中呈现文字, 通过设置 `slot` 为 `(checked|unchecked)` 控制内容
</cn>

```vue
<template>
  <div>
    <Switch true-text="Yes" false-text="No" />
    <br />
    <Switch true-text="1" false-text="0" />
    <br />
    <Switch true-text="On" false-text="Off" />
    <br />
    <br />
    <Switch>
      <Icon type="checkmark" slot="checked"/>
      <Icon type="close" slot="unchecked"/>
    </Switch>
    <Switch>
      <Icon type="logo-apple" slot="checked"/>
      <Icon type="logo-windows" slot="unchecked"/>
    </Switch>
    <br />
     <Switch>
      <Icon type="airplane" slot="unchecked"/>
      <Icon type="wifi" slot="checked"/>
    </Switch>
  </div>
</template>
<script>
export default{
  data(){
    return{
      checked:false
    }
  }
}
</script>
```
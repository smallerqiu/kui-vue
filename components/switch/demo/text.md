<cn>
#### 文字 / 图标
通过 `true-text` 和 `false-text` 设置选中和非选中呈现文字, 通过设置 `slot` 为 `(true|false)` 控制内容
</cn>

```tpl
<template>
  <div>
    <Switch true-text="是" false-text="否" />
    <br />
    <Switch true-text="1" false-text="0" />
    <br />
    <Switch true-text="正确" false-text="错误" />
    <br />
    <br />
    <Switch>
      <Icon type="ios-checkmark" slot="checked"/>
      <Icon type="ios-close" slot="unchecked"/>
    </Switch>
    <Switch>
      <Icon type="logo-apple" slot="checked"/>
      <Icon type="logo-android" slot="unchecked"/>
    </Switch>
    <br />
     <Switch>
      <Icon type="ios-airplane" slot="unchecked"/>
      <Icon type="ios-wifi" slot="checked"/>
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
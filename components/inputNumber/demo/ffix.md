<cn>
#### 扩展, 前缀和后缀
suffix，prefix 扩展
</cn>

```vue
<template>
  <div style="width:256px;">
    <InputNumber placeholder="请填写您的薪资" icon="cafe" >
      <template slot="suffix">
          <Tooltip title="此处如果不知道怎么填，请咨询管理员">
            <Icon type="heart" color="red"/>
          </Tooltip>  
      </template>
    </InputNumber>
    <br/>
    <br/>
    <InputNumber placeholder="请输入金额" suffix="元" prefix="$"/>
    <br/>
    <br/>
    <InputNumber placeholder="请输入充值金额" :step="50" suffix="元" prefix="充值"/>
    <br/>
    <br/>
    <InputNumber placeholder="请输入金额" suffix=".00"/>
  </div>
</template>
```
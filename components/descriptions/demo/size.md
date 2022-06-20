<cn>
#### 自定义尺寸
自定义尺寸，适应在各种容器中展示。
</cn>

```vue
<template>
  <RadioGroup :options="types" v-model="size" type="button" />
  <br/>
  <br/>
  <Descriptions title="订单信息" bordered :size="size">
    <Button slot="extra" size="small" type="primary">更新信息</Button>
    <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>
    <DescriptionsItem label="姓名">王大锤</DescriptionsItem>
    <DescriptionsItem label="电话">13888888888</DescriptionsItem>
    <DescriptionsItem label="价格">￥ 199.99</DescriptionsItem>
    <DescriptionsItem label="优惠金额">￥ 0.99</DescriptionsItem>
    <DescriptionsItem label="实付金额">￥ 199.00</DescriptionsItem>
    <DescriptionsItem label="备注信息" :span="5">
      请把货物发至: <br/>
      湖北省武汉市洪山区 光谷 188号 <br/>
      让快递小哥轻拿轻放<br/>
      谢谢！
    </DescriptionsItem>
  </Descriptions>
  <br/>
  <br/>
  <Descriptions title="订单信息" :size="size">
    <Button slot="extra" size="small" type="primary">更新信息</Button>
    <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>
    <DescriptionsItem label="价格">￥ 199.99</DescriptionsItem>
    <DescriptionsItem label="姓名">王大锤</DescriptionsItem>
    <DescriptionsItem label="电话">13888888888</DescriptionsItem>
    <DescriptionsItem label="收货地址">
      湖北省武汉市洪山区 光谷 188号
    </DescriptionsItem>
  </Descriptions>
</template>
<script>
export default{
  data() {
    return {
      types:[
        { label:'Default' ,value:'default'},
        { label:'Middle' ,value:'middle'},
        { label:'Small' ,value:'small'},
      ],
      size:'default'
    }
  }
}
</script>
```
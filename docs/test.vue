<template>
  <Descriptions title="订单信息" bordered layout="vertical">
    <DescriptionsItem label="订单编号">20202203302200</DescriptionsItem>
    <DescriptionsItem label="姓名">王大锤</DescriptionsItem>
    <DescriptionsItem label="电话">13888888888</DescriptionsItem>
    <DescriptionsItem label="下单时间">2022-05-03 12:12:33</DescriptionsItem>
    <DescriptionsItem label="付款时间" :span="3">2022-05-03 12:15:33</DescriptionsItem>
    <DescriptionsItem label="状态" :span="5"><Badge status="success" text="已发货" /></DescriptionsItem>
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
</template>
<template>
  <Descriptions title="Order Information" bordered>
    <DescriptionsItem label="Order Numbers">20202203302200</DescriptionsItem>
    <DescriptionsItem label="Name">Qiu</DescriptionsItem>
    <DescriptionsItem label="Phone">13888888888</DescriptionsItem>
    <DescriptionsItem label="Ordered Time">2022-05-03 12:12:33</DescriptionsItem>
    <DescriptionsItem label="Paid time" :span="3">2022-05-03 12:15:33</DescriptionsItem>
    <DescriptionsItem label="Status" :span="5"
      ><Badge status="success" text="Shipped"
    /></DescriptionsItem>
    <DescriptionsItem label="Price">￥ 199.99</DescriptionsItem>
    <DescriptionsItem label="Discount Amount">￥ 0.99</DescriptionsItem>
    <DescriptionsItem label="Paid Amount">￥ 199.00</DescriptionsItem>
    <DescriptionsItem label="Remark">
      Please deliver the goods to: <br />
      No. 188, Guanggu, Hongshan District, Wuhan City, Hubei Province <br />
      Kindly ask the courier to handle with care.<br />
      Thank you!
    </DescriptionsItem>
  </Descriptions>
</template>
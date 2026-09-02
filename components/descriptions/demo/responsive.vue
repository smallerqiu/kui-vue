<template>
  <Descriptions title="Responsive Information" bordered :column="{ xs: 1, sm: 2, lg: 3 }">
    <DescriptionsItem label="Order Numbers">20202203302200</DescriptionsItem>
    <DescriptionsItem label="Name">Qiu</DescriptionsItem>
    <DescriptionsItem label="Phone">13888888888</DescriptionsItem>
    <DescriptionsItem label="Status">
      <Badge status="success" text="Shipped" />
    </DescriptionsItem>
    <DescriptionsItem label="Shipping Address" :span="2">
      No. 188, Guanggu, Hongshan District, Wuhan City, Hubei Province
    </DescriptionsItem>
  </Descriptions>
</template>

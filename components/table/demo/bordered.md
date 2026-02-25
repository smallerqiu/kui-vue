<cn>
### 自定义页头和页脚
添加表格边框线，页头和页脚。
</cn>
<en>
### Custom Header and Footer
Add table border lines, header, and footer.
</en>

```vue
<template>
  <Table :data="data" :columns="columns" bordered>
    <template #fullname="{ value }">
      <a>{{ value }}</a>
    </template>
    <template #price="{ value }">
      <span :class="{ 'test-table-price': value > 20000 }"> ￥{{ value }}/㎡ </span>
    </template>
    <template #header> Header </template>
    <template #footer> Footer </template>
  </Table>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          key: "0",
          fullname: "Li Lei",
          price: 18990,
          address: "Wu Han Guanggu No. 328",
        },
        {
          key: "1",
          fullname: "Liu Hao",
          price: 23900,
          address: "Wu Han Hongshan No. 128",
        },
        {
          key: "2",
          fullname: "Hu Cong",
          price: 12000,
          address: "Wu Han Nanhu No. 198",
        },
        {
          key: "3",
          fullname: "Qiu",
          price: 28000,
          address: "Wu Han Nanhu No. 188",
        },
      ],
      columns: [
        { title: "Name", key: "fullname" },
        { title: "Housing price", key: "price" },
        { title: "Address", key: "address" },
      ],
    };
  },
};
</script>
```

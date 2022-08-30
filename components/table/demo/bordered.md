<cn>
#### 自定义页头和页脚
添加表格边框线，页头和页脚。
</cn>

```vue
<template>
  <Table :data="data" :columns="columns" bordered :sticky="52">
    <template v-slot:fullname="value">
      <a>{{value}}</a>
    </template>
    <template v-slot:price="value">
      <span :class="{'test-table-price':value>20000}">￥{{value}}/㎡</span>
    </template>
    <template v-slot:header>
      Header
    </template>
    <template v-slot:footer>
      Footer
    </template>
  </Table>
</template>
<script>
export default {
  data() {
    return {
      data: [
        { key: '0', fullname: 'Li Lei', price: 18990, address: 'Wu Han Guanggu No. 328' },
        { key: '1', fullname: 'Liu Hao', price: 23900, address: 'Wu Han Hongshan No. 128' },
        { key: '2', fullname: 'Hu Cong', price: 12000, address: 'Wu Han Nanhu No. 198' },
        { key: '3', fullname: 'Chuchur', price: 28000, address: 'Wu Han Nanhu No. 188' },
      ],
      columns: [
        { title: 'Name', key: 'fullname' },
        { title: 'Housing price', key: 'price', className: 'test-table-cell' },
        { title: 'Address', key: 'address' },
      ]
    }
  }
}
</script>
<style scoped>
.test-table-cell {
  text-align: right;
}
.test-table-price {
  color: red;
  background: yellow;
  font-weight: bold;
}
</style>
```

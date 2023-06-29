<template>
  <Table :data="data" :columns="columns" :width="1800">
    <a slot="action">action</a>
  </Table>
</template>
<script>
export default {
  data() {
    const data = [], columns = [];
    for (let i = 0; i < 10; i++) {
      columns.push({ title: 'Col' + i, key: 'address' })
    }
    return {
      data: [
        { key: 0, name: 'Li Lei', age: 28, address: 'Hubei Wuhan Guanggu SoftBase No.128', ellipsis: true },
        { key: 1, name: 'Liu Hao', age: 28, address: 'Hubei' },
        { key: 2, name: 'Wang Kang', age: 28, address: 'Hubei Wuhan Guanggu Nanhu No.128' },
        { key: 3, name: 'Hu Cong', age: 28, address: 'Hubei Wuhan Guanggu Hongshan No.128' }
      ],
      columns: [
        { title: 'Name', key: 'name', fixed: 'left' },
        { title: 'Age', key: 'age', fixed: 'left' },
        ...columns,
        { title: 'Action', key: 'action', fixed: 'right' },
      ]
    }
  }
}
</script>

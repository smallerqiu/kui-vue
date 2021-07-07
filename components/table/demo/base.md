<cn>
#### 基本用法
一个普通的表格
</cn>

```vue
<template>
  <Table :data="data" :columns="columns">
    <template v-slot:tags="value">
      <Tag v-for="tag in value" :key="tag" :color="tag=='Python'?'red':'orange'">{{tag}}</Tag>
    </template>
    <template v-slot:gender="value">
      <Icon :type="value==1?'male':'female'" :color="value==1?'blue':'#f50cff'" size="15" />
    </template>
    <template v-slot:action="value,record,col">
      <Button size="small" @click="e=>show(record)">more</Button>
    </template>
  </Table>
</template>
<script>
export default {
  data() {
    return {
      data: [
        { key: '0', name: 'Li Lei', gender: 0, age: 32, address: 'Wu Han Guanggu No. 328', tags: ['Python', 'Java'] },
        { key: '1', name: 'Liu Hao', gender: 1, age: 28, address: 'Wu Han Hongshan No. 128', tags: ['Python', 'Java'] },
        { key: '2', name: 'Hu Cong', gender: 0, age: 28, address: 'Wu Han Nanhu No. 198', tags: ['JS', 'CSS'] },
        { key: '3', name: 'Chuchur', gender: 1, age: 28, address: 'Wu Han Nanhu No. 188', tags: ['Go', 'Python'] },
      ],
      columns: [
        { title: 'Name', key: 'name' },
        { title: 'Age', key: 'age', },
        { title: 'Gender', key: 'gender', },
        { title: 'Address', key: 'address' },
        { title: 'Tags', key: 'tags' },
        { title: 'Action', key: 'action' },
      ]
    }
  },
  methods: {
    show(record) {
      this.$Modal.info({
        title: 'More',
        content: `Name:${record.name} <br/>Aage:${record.age} <br/>Gender:${record.gender == 0 ? 'boy' : 'gril'} <br/>Address:${record.address}`,
      })
    }
  }
}
</script>
```

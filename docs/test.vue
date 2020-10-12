<template>
  <div>
    <Table :data="datas" :columns="columns" @on-select="onSelect" @on-change="onChange" ref="selection">
      <template slot="tags" slot-scope="tags">
        <Tag v-for="tag in tags" :key="tag" :color="tag=='Python'?'red':'orange'">{{tag}}</Tag>
      </template>
      <Icon :type="text==1?'ios-male':'ios-female'" slot="gender" slot-scope="text" :color="text==1?'blue':'#f50cff'" size="15" />
      <template slot="action">
        <a href="javascript:;">Edit</a>
        <a href="javascript:;">Delete</a>
      </template>
    </Table>
    <Button @click="selectAll(true)">Check All</Button>
    <Button @click="changeChecked">Change Checked</Button>
    <Button @click="changeDisabled">Change Disabled</Button>
    <Button @click="selectAll(false)">UnCheck All</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datas: [
        { key: '0', name: 'Li Lei', gender: 0, age: 32, address: 'Wu Han Guanggu No. 328', tags: ['Python', 'Java'] },
        { key: '1', name: 'Liu Hao', gender: 1, age: 28, address: 'Wu Han Hongshan No. 128', tags: ['Python', 'Java'] },
        { key: '2', name: 'Hu Cong', gender: 0, age: 28, address: 'Wu Han Nanhu No. 198', tags: ['JS', 'CSS'] },
        { key: '3', name: 'Chuchur', gender: 1, age: 28, address: 'Wu Han Nanhu No. 188', tags: ['Go', 'Python'], _checked: true },
      ],
      columns: [
        { type: 'selection', fixed: 'left' },
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
    changeChecked() {
      this.$set(this.datas[2], '_checked', !this.datas[2]._checked)
    },
    changeDisabled() {
      this.$set(this.datas[3], '_disabled', !this.datas[3]._disabled)
    },
    selectAll(status) {
      this.$refs.selection.selectAll(status)
    },
    onChange(keys, selected, selectedRows) {
      console.log(keys, selected, selectedRows)
    },
    onSelect(key, selectedRows) {
      console.log(key, selectedRows)
    }
  }
}
</script>

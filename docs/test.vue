<template>
  <Table :data="data"
    :columns="columns" />
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
        {
          title: 'Gender', key: 'gender',
          render: (h, { gender }, i) => {
            return h('Icon', {
              props: {
                type: gender == 1 ? 'sunny' : 'moon',
                color: gender == 1 ? 'blue' : '#f50cff',
                size: 15
              }
            })
          }
        },
        { title: 'Address', key: 'address' },
        {
          title: 'Tags', key: 'tags',
          render: (h, { tags }, i) => {
            return tags.map(function (tag) {
              return h('Tag', {
                props: {
                  color: tag == 'Python' ? 'red' : 'orange'
                }
              }, tag)
            })
          }
        },
        {
          title: 'Action', key: 'action',
          render: (h, record, i) => {
            return h('Button', {
              props: {
                size: 'small',
              },
              on: {
                'click': e => {
                  this.$Modal.info({
                    title: 'More',
                    content: `Name:${record.name} <br/>Aage:${record.age} <br/>Gender:${record.gender == 0 ? 'boy' : 'gril'} <br/>Address:${record.address}`,
                  })
                }
              },
            }, 'more')
          }
        },
      ]
    }
  }
}
</script>
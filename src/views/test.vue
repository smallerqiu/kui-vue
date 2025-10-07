<template>
  <div>
    <Button type="primary" @click="visible = true">Add</Button>
    <Modal title="1111" v-model="visible">
      <Form ref="form" :labelCol="{ span: 5 }" :model="form">
        <FormItem label="Name" prop="name">
          <Input style="width:260px" placeholder="告警服务名" />
        </FormItem>
        <FormItem label="Call User" prop="call_users">
          <Select style="width:260px" multiple placeholder="通知告警的人" filterable>
            <Option v-for="x, i in callUsers" :key="i" :value="x.id" :label="x.full_name" />
          </Select>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      visible: false,
      data2: ['2', '4'],
      callUsers: [],
      form: {
        id: '',
        name: '',
        call_users: []
      },
    }
  },
  mounted() {
    this.callUsers = [
      {
        id: '1',
        full_name: '张三'
      },
      {
        id: '2',
        full_name: '李四'
      },
      {
        id: '3',
        full_name: '王五'
      },
      {
        id: '4',
        full_name: '赵六'
      },
    ]
  },
}
</script>

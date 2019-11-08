let code = {}

code.base = `<Tag>标签1</Tag>
<Tag>标签2</Tag>
<Tag>标签3</Tag>
<Tag closeable>标签4</Tag>`

code.color = `<Tag color="blue">标签1</Tag>
<Tag color="gray">标签2</Tag>
<Tag color="green">标签3</Tag>
<Tag color="red">标签4</Tag>
<Tag color="orange">标签5</Tag>
<Tag color="#2db7f5" closeable>自定义</Tag>`


code.custom=`<Tag color="blue" closeable v-for="m in count" :key="m">标签{{m}}</Tag>
<Tag @click="count++">增加</Tag>
<script>
export default {
  data() {
    return {
      count: 3
    }
  }
}
</script>
`
export default code
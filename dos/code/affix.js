let code = {}

code.base = `<Affix>
  <Button>Affix top</Button>
</Affix>
<Affix offsetBottom="0">
  <Button>Affix Bottom</Button>
</Affix>`

code.offset = `<Affix offsetTop="200">
  <Button>200px to Affix top</Button>
</Affix>
<Affix offsetBottom="100">
  <Button>100px to Affix bottom</Button>
</Affix>`

code.callback = `<Affix offsetTop="150" @change="handle">
  <Button>150px to Affix top</Button>
</Affix>
<Affix offsetBottom="100" @change="handle">
  <Button>100px to Affix bottom</Button>
</Affix>
<script>
export default {
  methods: {
    handle(v) {
      if (v) {
        this.$Message.success('当前状态：' + v)
      } else {
        this.$Message.error('当前状态：' + v)
      }
    }
  }
}
</script>
`

export default code
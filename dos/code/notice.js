let code = {}

code.base = `<Button @click="info" type="primary">普通提示 </Button>
<script>
  info() {
      this.$Notice.open({
        title: "通知的标题",
        content: "通知的描述",
        duration: 5
      });
    }
<\/script>`

code.withIcon = `<Button @click="notice('info')" type="primary">消息提示 </Button>
<Button @click="notice('warning')" type="warning">警告提示 </Button>
<Button @click="notice('success')" type="success">成功提示 </Button>
<Button @click="notice('error')" type="danger">错误提示 </Button>
<script>
  notice(type) {
      this.$Notice[type]({
        title: "通知的标题",
        content: "通知的描述",
        duration: 5
      });
    }
<\/script>`

code.static = `this.$Notice.info(options)
this.$Notice.success(options)
this.$Notice.warning(options)
this.$Notice.error(options)`

code.destory = `this.$Notice.open(options)
this.$Notice.destroy()`

export default code
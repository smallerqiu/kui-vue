let code = {}

code.base = `<Button @click="info" type="primary">普通提示 </Button>
<script>
info() {
  this.$Message.info("普通提示");
}
<\/script>`

code.type = `<Button @click="warning" type="warning">警告提示 </Button>
<Button @click="success" type="success">成功提示 </Button>
<Button @click="error" type="danger">错误提示 </Button>
<script>
warning() {
  this.$Message.warning("警告提示");
  },
success() {
  this.$Message.success("成功提示");
},
error() {
  this.$Message.error("错误提示");
}
<\/script>`

code.time = `<Button @click="config" type="success">10秒后关闭</Button>
<Button @click="config2" type="primary">5秒后关闭</Button>
<Button @click="config3" type="primary">手动关闭</Button>
<script>
config() {
  this.$Message.success("10秒后关闭的", 10);
},
config2() {
  this.$Message.config({
    type: "info",
    duration: 5,
    content: "5秒后关闭的"
  });
},
config3() {
  this.$Message.config({
    type: "info",
    duration: 5,
    closable: true,
    content: "手动关闭"
  });
}
<\/script>`
code.static = `this.$Message.info(content, [duration], onClose)
this.$Message.success(content, [duration], onClose)
this.$Message.warning(content, [duration], onClose)
this.$Message.error(content, [duration], onClose)`

code.destory = `this.$Message.config(options)
this.$Message.destroy()`

export default code
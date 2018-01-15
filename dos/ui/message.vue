<template>
  <div>
    <h2>Message 全局提示</h2>
    <h3>基础</h3>
    <Button @click="info" type="primary">普通提示 </Button>
    <Code lang="xml html">{{demo1}}</Code>
    <h3>提示类型</h3>
    <div>
      <Button @click="warning" type="warning">警告提示 </Button>&nbsp;
      <Button @click="success" type="success">成功提示 </Button>&nbsp;
      <Button @click="error" type="danger">错误提示 </Button>&nbsp;
    </div>
    <Code lang="xml html">{{demo2}}</Code>
    <h3>自定义时长</h3>
    <Button @click="config" type="success">10秒后关闭</Button>&nbsp;
    <Button @click="config2" type="primary">5秒后关闭</Button>&nbsp;
    <Button @click="config3" type="primary">手动关闭</Button>&nbsp;
    <Code lang="xml html">{{demo3}}</Code>
    <h3>API</h3>
    <Alert>组件提供了一些静态方法，使用方式如下</Alert>
    <Code lang="xml html">{{demo4}}</Code>
    <Alert>另外提供了全局配置和全局销毁的方法：</Alert>
    <Code lang="xml html">{{demo5}}</Code> 
    <p>参数 options 为对象，具体说明如下：</p>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>type</td>
          <td>提示类型，提供 info、success、error、warning四种可选类型</td>
          <td>String</td>
          <td>info</td>
        </tr>
        <tr>
          <td>content</td>
          <td>提示内容</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>自动关闭的延时，单位秒</td>
          <td>Number</td>
          <td>3</td>
        </tr>
         <tr>
          <td>closable</td>
          <td>是否可手动关闭</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>关闭时的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      demo1: `<Button @click="info" type="primary">普通提示 </Button>
<script>
info() {
    this.$Message.info("普通提示");
}
<\/script>`,
      demo2: `<Button @click="warning" type="warning">警告提示 </Button>
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
<\/script>`,
      demo3: `<Button @click="config" type="success">10秒后关闭</Button>
<Button @click="config2" type="primary">5秒后关闭</Button>
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
<\/script>`,
      demo4: `this.$Message.info(content, [duration], onClose)
this.$Message.success(content, [duration], onClose)
this.$Message.warning(content, [duration], onClose)
this.$Message.error(content, [duration], onClose)`,
      demo5: `this.$Message.config(options)
this.$Message.destroy()`
    };
  },
  methods: {
    info() {
      this.$Message.info("普通提示");
      // this.$Message.info("普通提示5",5);
      // this.$Message.info("普通提示8",8);
      // this.$Message.info("普通提示9",9);
      // this.$Message.info("普通提示6",6);
      // this.$Message.info("普通提示1",1);
      // this.$Message.info("普通提示3",3);
    },
    warning() {
      this.$Message.warning("警告提示");
    },
    success() {
      this.$Message.success("成功提示");
    },
    error() {
      this.$Message.error("错误提示");
    },
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
  }
};
</script>

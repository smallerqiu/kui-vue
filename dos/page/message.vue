<template>
  <div>
    <h2>Message 全局提示</h2>
    <h3>代码示例</h3>
    <Demo title="基础用法">
      <div slot="content">
        <Button @click="info" type="primary">普通提示 </Button>
      </div>
      <div slot="desc">
        <code>Message</code>的基本用法</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="提示类型">
      <div slot="content">
        <Button @click="warning" type="warning">警告提示 </Button>
        <Button @click="success" type="success">成功提示 </Button>
        <Button @click="error" type="danger">错误提示 </Button>
      </div>
      <div slot="desc">通过
        <code>type</code>来设置提示类型</div>
      <div slot="code">{{code.type}}</div>
    </Demo>
    <Demo title="自定义时长">
      <div slot="content">
        <Button @click="config" type="success">10秒后关闭</Button>
        <Button @click="config2" type="primary">5秒后关闭</Button>
        <Button @click="config3" type="primary">手动关闭</Button>
      </div>
      <div slot="desc">可以自定义配置，其中
        <code>duration</code>来控制自动关闭时长</div>
      <div slot="code">{{code.time}}</div>
    </Demo>
    <h3>API</h3>
    <Alert>组件提供了一些静态方法，使用方式如下</Alert>
    <Code lang="js">{{code.static}}</Code>
    <Alert>另外提供了全局配置和全局销毁的方法：</Alert>
    <Code lang="js">{{code.destory}}</Code>
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
import code from '../code/message'
export default {
  data() {
    return {
      code: code
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
        duration: 0,
        closable: true,
        content: "手动关闭",
        onClose: () => { alert('callback') }
      });
    }
  }
};
</script>

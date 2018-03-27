<template>
  <div>
    <h2>Notice 通知提醒</h2>
    <h3>基础</h3>
    <Button @click="info" type="primary">普通提示 </Button>
    <Code>{{demo1}}</Code>
    <h3>带图标的提醒</h3>
    <Button @click="notice('info')" type="primary">消息提示 </Button>&nbsp;
    <Button @click="notice('warning')" type="warning">警告提示 </Button>&nbsp;
    <Button @click="notice('success')" type="success">成功提示 </Button>&nbsp;
    <Button @click="notice('error')" type="danger">错误提示 </Button>&nbsp;
    <Code>{{demo2}}</Code>
    <h3>API</h3>
    <Alert>组件提供了一些静态方法，使用方式如下</Alert>
    <Code lang="xml html">{{demo3}}</Code>
    <Alert>另外提供了全局配置和全局销毁的方法：</Alert>
    <Code lang="xml html">{{demo4}}</Code>
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
          <td>title</td>
          <td>通知提醒的标题	</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>content</td>
          <td>提示内容</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>duration</td>
          <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
          <td>Number</td>
          <td>3</td>
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
      this.$Notice.open({
        title: "通知的标题",
        content: "通知的描述",
        duration: 5
      });
    }
<\/script>`,
      demo2: `<Button @click="notice('info')" type="primary">消息提示 </Button>
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
<\/script>`,
      demo3: `this.$Notice.info(options)
this.$Notice.success(options)
this.$Notice.warning(options)
this.$Notice.error(options)`,
      demo4: `this.$Notice.open(options)
this.$Notice.destroy()`
    };
  },
  methods: {
    info() {
      this.$Notice.open({
        title: "通知的标题",
        content: "通知的描述",
        duration: 5
      });
    },
    notice(type) {
      this.$Notice[type]({
        title: "通知的标题",
        content: "通知的描述",
        duration: 5
      });
    }
  }
};
</script>

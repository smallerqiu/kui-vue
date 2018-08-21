<template>
  <div>
    <h2>Notice 通知提醒</h2>
    <h3>代码示例</h3>
    <Demo title="基础用法">
      <div slot="content">
        <Button @click="info" type="primary">普通提示 </Button>
      </div>
      <div slot="desc">
        <code>Notice</code>的基本用法</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="带图标的提醒">
      <div slot="content">
        <Button @click="notice('info')" type="primary">消息提示 </Button>
        <Button @click="notice('warning')" type="warning">警告提示 </Button>
        <Button @click="notice('success')" type="success">成功提示 </Button>
        <Button @click="notice('error')" type="danger">错误提示 </Button>
      </div>
      <div slot="desc">通过调用不同的方法，可展示不同的类型</div>
      <div slot="code">{{code.withIcon}}</div>
    </Demo>
    <h3>API</h3>
    <Alert>组件提供了一些静态方法，使用方式如下</Alert>
    <Code lang="javascript">{{code.static}}</Code>
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
          <td>title</td>
          <td>通知提醒的标题 </td>
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
          <td>close</td>
          <td>关闭时的回调</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/notice'
import Code from '../components/code'
import Demo from '../components/demo'
export default {
  components: { Demo ,Code},
  data() {
    return {
      code: code
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

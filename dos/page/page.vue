<template>
  <div>
    <h2>Page 分页</h2>
    <h3>代码示例</h3>
    <Demo title="基础" layout="up-down">
      <div slot="content">
        <Page :total="1000" :current="1" :pagesize="10"></Page>
      </div>
      <div slot="desc">基本分页，<code>total</code>为总页数，<code>current</code>为当前页码，<code>pagesize</code>为页码分组</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="尺寸" layout="up-down">
      <div slot="content">
        <Page :total="60" :current="1" :pagesize="10" mini @change="test"></Page>
      </div>
      <div slot="desc">设置<code>mini</code>可设置组件小尺寸展示，<code>change</code>为页码改变触发事件</div>
      <div slot="code">{{code.size}}</div>
    </Demo>
    <h3>API</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>current</td>
          <td>当前页码</td>
          <td>Number,String</td>
          <td>1</td>
        </tr>
        <tr>
          <td>total</td>
          <td>数据总数</td>
          <td>Number,String</td>
          <td>0</td>
        </tr>
        <tr>
          <td>pagesize</td>
          <td>每页条数</td>
          <td>Number,String </td>
          <td>10</td>
        </tr>
        <tr>
          <td>mini</td>
          <td>是否为迷你版</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>change</td>
          <td>页码改变的回调，返回改变后的页码</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import code from '../code/page'
export default {
  data() {
    return {
      code: code
    };
  },
  methods: {
    test(v) {
      console.log(v);
    }
  }
};
</script>

<template>
  <div>
    <h2>Page 分页</h2>
    <h3>代码示例</h3>
    <Demo title="基础" layout="vertical">
      <div slot="content">
        <Page :total="1000" :current="1" :pagesize="10"></Page>
      </div>
      <div slot="desc">基本分页，
        <code>total</code>为总页数，
        <code>current</code>为当前页码，
        <code>pagesize</code>为页码分组</div>
      <div slot="code">{{code.base}}</div>
    </Demo>
    <Demo title="尺寸" layout="vertical">
      <div slot="content">
        <Page :total="60" :current="1" :pagesize="10" mini @change="test"></Page>
      </div>
      <div slot="desc">设置
        <code>mini</code>可设置组件小尺寸展示，
        <code>change</code>为页码改变触发事件</div>
      <div slot="code">{{code.size}}</div>
    </Demo>
    <Demo title="辅助分页" layout="vertical">
      <div slot="content">
        <Page :total="60" :current="1" show-sizer show-total show-elevator :pagesize="10" mini @change="test"></Page>
      </div>
      <div slot="desc">可以切换每页显示的数量。</div>
      <div slot="code">{{code.sizer}}</div>
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
          <td>show-sizer</td>
          <td>是否显示页码组</td>
          <td>Boolean </td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-total</td>
          <td>是否显示总数</td>
          <td>Boolean </td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-elevator</td>
          <td>是否显示页码阶梯</td>
          <td>Boolean </td>
          <td>false</td>
        </tr>
         <tr>
          <td>size-data</td>
          <td>自定义页码组数据</td>
          <td>Array </td>
          <td>[10,15,20,30,40]</td>
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
        <tr>
          <td>page-size-change</td>
          <td>切换页码组改变的回调，返回改变后的page-size</td>
          <td>Function</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import Demo from '../components/demo'
import code from '../code/page'
export default {
  components: { Demo },
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

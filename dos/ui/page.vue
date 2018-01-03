<template>
  <div>
    <h2>Page 分页</h2>
    <h3>基础</h3>
    <Page :total="1000" :curent="1" :pagesize="10"></Page>
    <Code lang="xml html">{{pages}}</Code>
    <h3>尺寸</h3>    
    <Page :total="60" :curent="1" :pagesize="10" mini @change="test"></Page>
    <Code lang="xml html">{{pages1}}</Code>
    <h3>Page props</h3>
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
      </table>
    </div>
    <h3>Page events</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        <tr>
          <td>change</td>
          <td>页码改变的回调，返回改变后的页码</td>
          <td>页码改变的回调，返回改变后的页码 页码</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: `<Page :total="100" :curent="1" :pagesize="10"></Page>`,
      pages1:`<Page :total="60" :curent="1" :pagesize="10" mini></Page>`
    };
  },
  methods: {
    test(v) {
      console.log(v);
    }
  }
};
</script>

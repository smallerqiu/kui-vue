<template>
  <div class="demo-grid">
    <h2>Layout 布局</h2>
    <p>采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题</p>
    <p>两个概念，行row和列col，具体使用方法如下：</p>
    <p>：使用row在水平方向创建一行</p>
    <p>：将一组col插入在row中</p>
    <p>：在每个col中，键入自己的内容</p>
    <p>：通过设置col的span参数，指定跨越的范围，其范围是1到24</p>
    <p>：每个row中的col总和应该为24</p>
    <br>
    <p>注意：非 template/render 模式下，需使用 k-col。</p>
    <h3>基础</h3>
    <Row>
      <Col span="12">12</Col>
      <Col span="12">12</Col>
    </Row>
    <Row>
      <Col span="8">8</Col>
      <Col span="8">8</Col>
      <Col span="8">8</Col>
    </Row>
    <Row>
      <Col span="6">6</Col>
      <Col span="6">6</Col>
      <Col span="6">6</Col>
      <Col span="6">6</Col>
    </Row>
    <Code lang="xml">{{col}}</Code>
    <h3>分栏间隔</h3>
    <Row gutter="10" class="pd">
      <Col span="6">
      <div>6</div>
      </Col>
      <Col span="6">
      <div>6</div>
      </Col>
      <Col span="6">
      <div>6</div>
      </Col>
      <Col span="6">
      <div>6</div>
      </Col>
    </Row>
    <Code lang="xml">{{pcol}}</Code>
    <h3>Row props</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>gutter</td>
          <td>栅格间距，单位 px，左右平分</td>
          <td>String,Number</td>
          <td>0</td>
        </tr>
      </table>
    </div>
    <h3>Col props</h3>
    <div class="table-border">
      <table>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
        <tr>
          <td>span</td>
          <td>栅格的占位格数，可选值为0~24的整数</td>
          <td>String,Number</td>
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
      col: `<Row>
  <Col span="12">12</Col>
  <Col span="12">12</Col>
</Row>
<Row>
  <Col span="8">8</Col>
  <Col span="8">8</Col>
  <Col span="8">8</Col>
</Row>
<Row>
  <Col span="6">6</Col>
  <Col span="6">6</Col>
  <Col span="6">6</Col>
  <Col span="6">6</Col>
</Row>`,
      pcol: `<Row gutter="10">
  <Col span="6"><div>6</div></Col>
  <Col span="6"><div>6</div></Col>
  <Col span="6"><div>6</div></Col>
  <Col span="6"><div>6</div></Col>
</Row>`
    };
  }
};
</script>


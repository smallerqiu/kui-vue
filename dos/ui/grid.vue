<template>
  <div class="demo-grid">
    <h2>Grid 栅格</h2>
    <p>采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题</p>
    <p>两个概念，行row和列col，具体使用方法如下：</p>
    <p>：使用row在水平方向创建一行</p>
    <p>：将一组col插入在row中</p>
    <p>：在每个col中，键入自己的内容</p>
    <p>：通过设置col的span参数，指定跨越的范围，其范围是1到24</p>
    <p>：每个row中的col总和应该为24</p>
    <br>
    <p>注意：非 template/render 模式下，需使用 i-col。</p>
    <h3>代码示例</h3>
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
    <div v-high>
      <pre>
        <code class="xml">{{col}}</code>
      </pre>
    </div>
    <h3>区块间隔</h3>
    <Row padding="10" class="pd">
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
    <div v-high>
      <pre>
        <code class="xml">{{pcol}}</code>
      </pre>
    </div>
    <h3>Row props</h3>
    <div class="table-border">
      <table>
        <tr>
          <td>属性</td>
          <td>说明</td>
          <td>类型</td>
          <td>默认值</td>
        </tr>
        <tr>
          <td>padding</td>
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
          <td>属性</td>
          <td>说明</td>
          <td>类型</td>
          <td>默认值</td>
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
      pcol: `<Row padding="10">
  <Col span="6"><div>6</div></Col>
  <Col span="6"><div>6</div></Col>
  <Col span="6"><div>6</div></Col>
  <Col span="6"><div>6</div></Col>
</Row>`
    };
  }
};
</script>


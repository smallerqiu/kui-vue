<cn>
#### 分栏间隔
使用 `gutter` 熟悉来设置分栏的间隔,如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距]
</cn>

```vue
<template>
  <div class="demo-grid">
    gutter = 10
    <Row :gutter="10" class="row-gutter">
      <Col :span="12"><div>col-12</div></Col>
      <Col :span="12"><div>col-12</div></Col>
    </Row>
    <br />
    <br />
    Horizontal Gutter (px):
    <div style="width:55%;padding:10px;">
      <Slider v-model="h"
        :min="8"
        :marks="{8:'8',16:'16',24:'24',32:'32',40:'40'}"
        :max="40"
        :step="null" />
    </div>
    Vertical Gutter (px):
    <div style="width:55%;padding:10px;">
      <Slider v-model="v"
        :min="8"
        :max="40"
        :marks="{8:'8',16:'16',24:'24',32:'32',40:'40'}"
        :step="null" />
    </div>
    Column Count:
    <div style="width:55%;padding:10px;">
      <Slider v-model="cols"
        :min="2"
        :marks="{2:'2',3:'3',4:'4',6:'6',8:'8',12:'12'}"
        :max="12"
        :step="null" />
    </div>
    <Row :gutter="[v,h]"
      class="row-gutter">
      <Col :span="24/cols"
        v-for="c in cols"
        :key="c">
      <div>col-{{cols}}</div>
      </Col>
      <Col :span="24/cols"
        v-for="x in cols"
        :key="'_'+x">
      <div>col-{{cols}}</div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      h: 8,
      v: 8,
      cols: 4
    }
  }
}
</script>
```
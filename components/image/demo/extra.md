
<cn>
#### 扩展
可以扩展自定工具和面板。
</cn>

```vue
<template>
  单张图：
  <Image 
    :width="120" 
    src="https://www.chuchur.com/upload/demo/test_300.jpg"
    @close="close"
    >
    <template slot="tool">
      <Icon :type="Heart" color="#3a95ff" @click="showPanel"/>
    </template>
    <div slot="panel" class="img-panel">
      <h2>详情</h2>
      <Row type="flex">
        <Col><Icon :type="IconImage"/></Col>
        <Col flex="1">
          <p class="title">IMG_202005050505.jpg</p>
          <p class="sub">3120x4160 , 2.8MB</p>
        </Col>
      </Row>
      <Row type="flex">
        <Col><Icon :type="Calendar" /></Col>
        <Col>
          <p class="title">时间：2020年5月5日</p>
          <p class="sub">星期五，下午05:05</p>
        </Col>
      </Row>
      <Row type="flex">
        <Col><Icon :type="Location" /></Col>
        <Col  flex="1">
          <p class="title">武汉.江滩</p>
          <p class="sub">湖北省武汉市汉口江滩</p>
        </Col>
      </Row>
      <Row type="flex">
        <Col><Icon :type="Camera" /></Col>
        <Col  flex="1">
          <p class="title">相机：Iphone 12 Pro</p>
          <p class="sub">2048/1000000s ISO-9999</p>
        </Col>
      </Row>
      <Row type="flex">
        <Col><Icon :type="Ribbon" /></Col>
        <Col  flex="1">
          <p class="title">镜头：索尼</p>
          <p class="sub">f/10 10.5mm</p>
        </Col>
      </Row>
    </div>
  </Image>
  <br/>
  图片组：
  <ImageGroup>
    <Image 
      :width="120" 
      v-for="(img,i) in imgs"
      :key="i"
      :src="img.src"
      @switch="onSwitch"
      @close="close"
      :showPanel="true"
      >
      <template slot="tool">
        <Icon :type="Heart" color="#3a95ff" @click="showPanel"/>
      </template>
      <div slot="panel" class="img-panel">
        <h2>详情</h2>
        <Row type="flex">
          <Col><Icon :type="IconImage"/></Col>
          <Col flex="1">
            <p class="title">{{img.title}}</p>
            <p class="sub">{{img.desc}}</p>
          </Col>
        </Row>
        <Row type="flex">
          <Col><Icon :type="Calendar" /></Col>
          <Col>
            <p class="title">时间：{{img.date}}</p>
            <p class="sub">{{img.dateSub}}</p>
          </Col>
        </Row>
        <Row type="flex">
          <Col><Icon :type="Location" /></Col>
          <Col  flex="1">
            <p class="title">{{img.address}}</p>
            <p class="sub">{{img.addressSub}}</p>
          </Col>
        </Row>
        <Row type="flex">
          <Col><Icon :type="Camera" /></Col>
          <Col  flex="1">
            <p class="title">相机：{{img.camera}}</p>
            <p class="sub">{{img.cameraSub}}</p>
          </Col>
        </Row>
        <Row type="flex">
          <Col><Icon :type="Ribbon" /></Col>
          <Col  flex="1">
            <p class="title">镜头：{{img.disc}}</p>
            <p class="sub">{{img.discSub}}</p>
          </Col>
        </Row>
      </div>
    </Image>
  <ImageGroup>
</template>
<script>
import { Ribbon ,Heart, IconImage, Calendar, Location, Camera } from 'kui-icons'
export default{
  data() {
    return {
      Ribbon ,Heart, IconImage, Calendar, Location, Camera,
      imgs:[
        {
          src:'https://www.chuchur.com/upload/demo/kui-for-vue.jpg',
          title:'kui for vue.js.jpg',
          desc: '一套基于Vuejs的桌面UI组件库',
          date: '2017年8月7日',
          dateSub: '星期五，下午05:05',
          address:'广东.深圳',
          addressSub:'广东省深圳市国际软件园',
          camera:'javascript',
          cameraSub:'vuejs',
          disc:'VUE',
          discSub:'VUEJS 2.x',
        },
        {
          src:'https://www.chuchur.com/upload/demo/kui-react.jpg',
          title:'kui for react.jpg',
          desc: '一套基于Reactjs的桌面UI组件库',
          date: '2018年10月7日',
          dateSub: '星期五，下午05:05',
          address:'湖北.武汉',
          addressSub:'湖北省武汉市软件产业园',
          camera:'javascript',
          cameraSub:'reactjs',
          disc:'REACT',
          discSub:'REACTJS 16.x'
        }
      ]
    }
  },
  methods:{
    onSwitch(index){
      console.log(index)
    },
    close(){
      this.$Message.success('close')
    },
    showPanel(){
      this.$Image.togglePanel()
    }
  }
}
</script>
```
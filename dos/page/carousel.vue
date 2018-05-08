<template>
    <div>
        <h2>Carousel 走马灯</h2>
        <p>就是传说中的大图轮播</p>
        <h3>代码示例</h3>
        <Row gutter="8">
            <Col span="12">
            <Demo layout="vertical" title="基本">
                <div slot="content">
                    <Carousel>
                        <CarouselItem class="k-carousel-item-demo">1</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">2</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">3</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">4</CarouselItem>
                    </Carousel>
                </div>
                <div slot="desc">最基本的用法。</div>
                <div slot="code">{{code.base}}</div>
            </Demo>
            </Col>
            <Col span="12">
            <Demo layout="vertical" title="垂直">
                <div slot="content">
                    <Carousel vertical>
                        <CarouselItem class="k-carousel-item-demo">1</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">2</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">3</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">4</CarouselItem>
                    </Carousel>
                </div>
                <div slot="desc">垂直显示,此时不显示左右箭头</div>
                <div slot="code">{{code.vertical}}</div>
            </Demo>
            </Col>
        </Row>
        <Row gutter="8">
            <Col span="12">
            <Demo layout="vertical" title="自动播放">
                <div slot="content">
                    <Carousel autoplay>
                        <CarouselItem class="k-carousel-item-demo">1</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">2</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">3</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">4</CarouselItem>
                    </Carousel>
                </div>
                <div slot="desc">定时切换下一张。</div>
                <div slot="code">{{code.autoplay}}</div>
            </Demo>
            </Col>
            <Col span="12">
            <Demo layout="vertical" title="圆形指示器">
                <div slot="content">
                    <Carousel dotsType="radius">
                        <CarouselItem class="k-carousel-item-demo">1</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">2</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">3</CarouselItem>
                        <CarouselItem class="k-carousel-item-demo">4</CarouselItem>
                    </Carousel>
                </div>
                <div slot="desc">圆形指示器</div>
                <div slot="code">{{code.radius}}</div>
            </Demo>
            </Col>
        </Row>
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
                    <td>value</td>
                    <td>幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据</td>
                    <td>String,Number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>loop</td>
                    <td>是否开启循环</td>
                    <td>Boolean</td>
                    <td>true</td>
                </tr>
                <tr>
                    <td>autoplay</td>
                    <td>是否自动切换</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>speed</td>
                    <td>自动切换的时间间隔，单位为毫秒</td>
                    <td>Number</td>
                    <td>2000</td>
                </tr>
                <tr>
                    <td>dots-type</td>
                    <td>指示器的类型，<code>rect</code> 为方块，<code>radius</code>为圆点</td>
                    <td>Number</td>
                    <td>2000</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<style>
.k-carousel-item-demo {
  height: 160px;
  line-height: 160px;
  background: #6c98d6;
  text-align: center;
  font-size: 20px;
  color: #fff;
}
</style>

<script>
import Demo from '../components/demo'
import code from '../code/carousel'
export default {
    components: { Demo },
    data() {
        return {
            code: code
        }
    }
}
</script>

<template>
    <div>
        <h2>Affix 图钉</h2>
        <p>将页面元素钉在可视范围。</p>
        <h3>代码示例</h3>
        <Row gutter="8">
            <Col span="12">
            <Demo title="基本" layout="vertical">
                <div slot="content">
                    <Affix>
                        <Button>Affix top</Button>
                    </Affix>
                    <Affix offsetBottom="0">
                        <Button>Affix Bottom</Button>
                    </Affix>
                </div>
                <div slot="desc">通过
                    <code>offsetTop</code>和
                    <code>offsetBottom</code>来设定固定位置</div>
                <div slot="code">{{code.base}}</div>
            </Demo>
            </Col>
            <Col span="12">
            <Demo title="偏移" layout="vertical">
                <div slot="content">
                    <Affix offsetTop="200">
                        <Button>200px to Affix top</Button>
                    </Affix>
                    <Affix offsetBottom="100">
                        <Button>100px to Affix bottom</Button>
                    </Affix>
                </div>
                <div slot="desc">默认
                    <code>offsetTop</code>值为0</div>
                <div slot="code">{{code.offset}}</div>
            </Demo>
            </Col>
        </Row>

        <Demo title="事件回调">
            <div slot="content">
                <Affix offsetTop="150" @change="handle">
                    <Button>150px to Affix top</Button>
                </Affix>
                <Affix offsetBottom="100" @change="handle">
                    <Button>100px to Affix bottom</Button>
                </Affix>
            </div>
            <div slot="desc">当固定状态发生改变时触发回调</div>
            <div slot="code">{{code.callback}}</div>
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
                    <td>offsetTop</td>
                    <td>距离窗口顶部达到指定偏移量后触发 </td>
                    <td>String,Number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>offsetBottom</td>
                    <td>距离窗口底部达到指定偏移量后触发 </td>
                    <td>String,Number </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>在固定状态发生改变时触发,返回当前固定状态 false | true</td>
                    <td>Function </td>
                    <td>-</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import code from '../code/affix'
import Demo from '../components/demo'

export default {
    components: { Demo },
    data() {
        return {
            code: code
        }
    },
    methods: {
        handle(v) {
            if (v) {
                this.$Message.success('当前状态：' + v)
            } else {
                this.$Message.error('当前状态：' + v)
            }
        }
    }
}
</script>

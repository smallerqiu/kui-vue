<template>
    <div>
        <h2>Card 卡片</h2>
        <p>一个有标题的大盒子</p>
        <h3>代码示例</h3>
        <Row gutter="8">
            <Col span="12">
            <Demo title="基础"  layout="vertical">
                <div slot="content" style="background:#eee;padding:15px;">
                    <Card title="卡片标题" icon="android-favorite-outline">
                        <span slot="extra" @click="$Message.info('刚刚摇了下')">摇一摇</span>
                        <p>内容随便写， 欢迎使用</p>
                        <p>内容随便写， 欢迎使用</p>
                        <p>内容随便写， 欢迎使用</p>
                        <p>内容随便写， 欢迎使用</p>
                        <p>内容随便写， 欢迎使用</p>
                        <p>内容随便写， 欢迎使用</p>
                    </Card>
                </div>
                <div slot="desc">通过
                    <code>title</code>和
                    <code>icon</code>可设置标题和图标</div>
                <div slot="code">{{code.base}}</div>
            </Demo>
            </Col>
            <Col span="12">
            <Demo title="边框" layout="vertical">
                <div slot="content">
                    <Card title="卡片标题" icon="android-favorite-outline" border>
                        <span slot="extra">摇一摇</span>
                        <p>内容随便写， 欢迎使用</p>
                        <p>内容随便写， 欢迎使用</p>
                        <p>内容随便写， 欢迎使用</p>
                        <p>内容随便写， 欢迎使用</p>
                        <p>内容随便写， 欢迎使用</p>
                        <p>内容随便写， 欢迎使用</p>
                    </Card>
                </div>
                <div slot="desc">
                    <code>border</code>可以设置是否显示边框</div>
                <div slot="code">{{code.border}}</div>
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
                    <td>title</td>
                    <td>卡片的标题</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>卡片标题的图标</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>border</td>
                    <td>卡片是否显示边框</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>extra</td>
                    <td>卡片标题扩展</td>
                    <td>slot</td>
                    <td>-</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import code from '../code/card'
import Demo from '../components/demo'
export default {
    components: { Demo },
    data() {
        return {
            code: code
        }
    }
}
</script>


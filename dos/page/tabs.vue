<template>
    <div>
        <h2>Tabs 标签页</h2>
        <p>选项卡切换组件。</p>
        <h3>代码示例</h3>
        <Demo title="基础">
            <div slot="content">
                <Tabs>
                    <TabPane label="Tab1">我是内容1....</TabPane>
                    <TabPane label="Tab2">我是内容2....</TabPane>
                    <TabPane label="Tab3">我是内容3....</TabPane>
                </Tabs>
            </div>
            <div slot="desc">默认选中第一项。</div>
            <div slot="code"></div>
        </Demo>
        <Demo title="禁用">
            <div slot="content">
                <Tabs>
                    <TabPane label="Tab1">我是内容1....</TabPane>
                    <TabPane label="Tab2" disabled>我是内容2....</TabPane>
                    <TabPane label="Tab3">我是内容3....</TabPane>
                </Tabs>
            </div>
            <div slot="desc">禁用某一项。</div>
            <div slot="code"></div>
        </Demo>
        <Demo title="图标">
            <div slot="content">
                <Tabs>
                    <TabPane label="Tab1" icon="social-windows">我是内容1....</TabPane>
                    <TabPane label="Tab2" icon="social-apple">我是内容2....</TabPane>
                    <TabPane label="Tab3" icon="social-android">我是内容3....</TabPane>
                </Tabs>
            </div>
            <div slot="desc">有图标的标签。</div>
            <div slot="code"></div>
        </Demo>
        <Demo title="卡片式页签">
            <div slot="content">
                <Tabs card>
                    <TabPane label="Tab1" icon="social-windows">我是内容1....</TabPane>
                    <TabPane label="Tab2" icon="social-apple">我是内容2....</TabPane>
                    <TabPane label="Tab3" icon="social-android">我是内容3....</TabPane>
                </Tabs>
            </div>
            <div slot="desc">设置 slot extra 可以在页签右边添加附加操作。</div>
            <div slot="code"></div>
        </Demo>
        <Demo title="新增和关闭页签">
            <div slot="content">
                <Tabs card closable>
                    <TabPane :label="'Tab '+n" v-for="n in m" :key="n">我是内容{{n}}....</TabPane>
                    <Button slot="extra" mini @click="m++">+</Button>
                </Tabs>
            </div>
            <div slot="desc">设置 slot extra 可以在页签右边添加附加操作。</div>
            <div slot="code"></div>
        </Demo>
    </div>
</template>
<script>
import code from '../code/tabs'
import Demo from '../components/demo'
export default {
    components: { Demo },
    data() {
        return {
            code: code,
            m:3,
        }
    }
}
</script>

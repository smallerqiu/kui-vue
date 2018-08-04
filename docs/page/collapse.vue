<template>
    <div>
        <h2>Collapse 折叠面板</h2>
        <p>可以折叠/展开的内容区域。</p>
        <h3>代码示例</h3>
        <Row gutter="8">
            <Col span="12">
            <Demo layout="vertical" title="基础">
                <div slot="content">
                    <Collapse v-model="acitve">
                        <Panel title="我是标题" name="1">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                        <Panel title="我是标题" name="2">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                        <Panel title="我是标题" name="3">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">默认可以同时展开一个或者多个面板</div>
                <div slot="code">{{code.base}}</div>
            </Demo>
            <Demo layout="vertical" title="手风琴">
                <div slot="content">
                    <Collapse v-model="acitve1" accrodion>
                        <Panel title="我是标题" name="1">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                        <Panel title="我是标题" name="2">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                        <Panel title="我是标题" name="3">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">只允许同时展开一个面板</div>
                <div slot="code">{{code.accrodion}}</div>
            </Demo>
            </Col>
            <Col span="12">
            <Demo layout="vertical" title="嵌套面板">
                <div slot="content">
                    <Collapse v-model="acitve2">
                        <Panel title="我是标题" name="1">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <Collapse v-model="acitve3">
                                <Panel title="我是标题" name="1">
                                    <p>我是内容，要写很多文字</p>
                                    <p>我是内容，要写很多文字</p>
                                    <p>我是内容，要写很多文字</p>
                                </Panel>
                                <Panel title="我是标题" name="2">
                                    <p>我是内容，要写很多文字</p>
                                    <p>我是内容，要写很多文字</p>
                                    <p>我是内容，要写很多文字</p>
                                </Panel>
                            </Collapse>
                        </Panel>
                        <Panel title="我是标题" name="2">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                        <Panel title="我是标题" name="3">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">嵌套折叠面板。</div>
                <div slot="code">{{code.collapse}}</div>
            </Demo>
            <Demo layout="vertical" title="简洁模式">
                <div slot="content">
                    <Collapse v-model="acitve1" sample>
                        <Panel title="我是标题" name="1">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                        <Panel title="我是标题" name="2">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                        <Panel title="我是标题" name="3">
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                            <p>我是内容，要写很多文字</p>
                        </Panel>
                    </Collapse>
                </div>
                <div slot="desc">一套没有边框的简洁样式。</div>
                <div slot="code">{{code.sample}}</div>
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
                    <td>当前激活的面板的 name，可以使用 v-model 双向绑定</td>
                    <td>Array | String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>accordion</td>
                    <td>是否开启手风琴模式，开启后每次至多展开一个面板 </td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>sample</td>
                    <td>是否开启简洁模式</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>切换面板时触发回调，返回当前选项卡的展开折叠状态</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import Demo from '../components/demo'
import code from '../code/collapse'
export default {
    components: { Demo },
    data() {
        return {
            code: code,
            acitve: '1',
            acitve1: '1',
            acitve2: '1',
            acitve3: '1'
        }
    }
}
</script>

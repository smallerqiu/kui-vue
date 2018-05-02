<template>
    <div>
        <h2>Tree 树形控件</h2>
        <p>文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</p>
        <h3>代码示例</h3>
        <Demo title="基本用法">
            <div slot="content">
                <Tree :data="data"></Tree>
            </div>
            <div slot="desc">最简单的用法，展示可选中，默认展开功能。</div>
            <div slot="code">{{code.base}}</div>
        </Demo>
        <Demo title="可勾选">
            <div slot="content">
                <Tree :data="data1" checkbox @check="select"></Tree>
            </div>
            <div slot="desc">设置属性
                <code>checkbox</code> 可以对节点进行勾选。</div>
            <div slot="code">{{code.checked}}</div>
        </Demo>
        <Demo title="异步加载">
            <div slot="content">
                <Tree :data="data2" @loadData="loadData"></Tree>
            </div>
            <div slot="desc">点击展开节点，动态加载数据。。</div>
            <div slot="code">{{code.async}}</div>
        </Demo>
        <Demo title="自定义图标">
            <div slot="content">
                <Tree :data="data3"></Tree>
            </div>
            <div slot="desc">可以针对不同的节点定制图标。</div>
            <div slot="code">{{code.icon}}</div>
        </Demo>
        <h3>TreeNode API</h3>
        <div class="table-border">
            <table>
                <tr>
                    <th>属性</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
                <tr>
                    <td>data</td>
                    <td>可嵌套的节点属性的数组，生成 tree 的数据</td>
                    <td>Array</td>
                    <td>[]</td>
                </tr>
                <tr>
                    <td>checkbox</td>
                    <td>是否显示多选框</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>loadData</td>
                    <td>异步加载数据的方法</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>select</td>
                    <td>点击树节点时触发,当前已选中的节点数组</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>check</td>
                    <td>点击复选框时触发,当前已勾选节点的数组</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>expand</td>
                    <td>展开和收起子列表时触发,当前已勾选节点的数组</td>
                    <td>Function</td>
                    <td>-</td>
                </tr>
            </table>
        </div>
        <h3>Tree API</h3>
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
                    <td>节点标题</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>expand</td>
                    <td>是否展开节点</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用节点</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>selected</td>
                    <td>是否选中节点</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>checked</td>
                    <td>是否选中节点</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>children</td>
                    <td>子节点</td>
                    <td>Array</td>
                    <td>-</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import Demo from '../components/demo'
import code from '../code/tree'
export default {
    components: { Demo },
    data() {
        return {
            code: code,
            data: [
                {
                    title: 'tree 1',
                    expand: true,
                    children: [
                        {
                            title: 'tree 1-1',
                            expand: true,
                            children: [
                                { title: 'leaf 1-1-1' },
                                { title: 'leaf 1-1-2' }
                            ]
                        },
                        {
                            title: 'tree 1-2',
                            expand: true,
                            children: [
                                { title: 'leaf 1-2-1' },
                                { title: 'leaf 1-2-2' }
                            ]
                        }
                    ]
                }
            ],
            data1: [
                {
                    title: 'tree 1',
                    expand: true,
                    children: [
                        {
                            title: 'tree 1-1',
                            expand: true,
                            children: [
                                { title: 'leaf 1-1-1', disabled: true },
                                { title: 'leaf 1-1-2' }
                            ]
                        },
                        {
                            title: 'tree 1-2',
                            expand: true,
                            children: [
                                { title: 'leaf 1-2-1' },
                                { title: 'leaf 1-2-2' }
                            ]
                        }
                    ]
                }
            ],
            data2: [{
                title: 'children',
                loading: false,
                children: []
            }],
            data3: [
                {
                    title: 'tree 1',
                    expand: true,
                    icon: 'fireball',
                    children: [
                        {
                            title: 'tree 1-1',
                            expand: true,
                            icon: 'flag',
                            children: [
                                { title: 'leaf 1-1-1', icon: 'flame' },
                                { title: 'leaf 1-1-2', icon: 'folder' }
                            ]
                        },
                        {
                            title: 'tree 1-2',
                            expand: true,
                            icon: 'flag',
                            children: [
                                { title: 'leaf 1-2-1', icon: 'folder' },
                                { title: 'leaf 1-2-2', icon: 'folder' }
                            ]
                        }
                    ]
                }
            ],
        }
    },
    methods: {
        select(v) {
            console.log(v)
        },
        loadData(item, callback) {
            //模拟异步请求
            setTimeout(() => {
                let data = [
                    {
                        title: 'children',
                        loading: false,
                        children: []
                    },
                    {
                        title: 'children',
                        loading: false,
                        children: []
                    }
                ];
                callback(data);
            }, 1000)
        }
    }
}
</script>


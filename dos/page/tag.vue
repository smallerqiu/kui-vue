<template>
    <div>
        <h2>Tag 标签</h2>
        <p>进行标记和分类的小标签。</p>
        <h3>代码示例</h3>
        <Demo title="基础">
            <div slot="content">
                <Tag>标签1</Tag>
                <Tag>标签2</Tag>
                <Tag>标签3</Tag>
                <Tag closeable>标签4</Tag>
            </div>
            <div slot="desc">通过
                <code>closeable</code>显示关闭按钮，点击隐藏标签，触发
                <code>close</code>回调</div>
            <div slot="code">{{code.base}}</div>
        </Demo>
        <Demo title="颜色">
            <div slot="content">
                <Tag color="blue">标签1</Tag>
                <Tag color="gray">标签2</Tag>
                <Tag color="green">标签3</Tag>
                <Tag color="red">标签4</Tag>
                <Tag color="orange">标签5</Tag>
                <Tag color="#2db7f5" closeable>自定义</Tag>
            </div>
            <div slot="desc">通过
                <code>color</code>定义标签颜色，默认提供5组颜色
                <code>blue</code>
                <code>gray</code>
                <code>green</code>
                <code>red</code>
                <code>orange</code>
                当然也可以自定义其他颜色
            </div>
            <div slot="code">{{code.color}}</div>
        </Demo>
        <Demo title="动态添加和删除">
            <div slot="content">
                <Tag color="blue" closeable v-for="m in count" :key="m">标签{{m}}</Tag>
                <Tag @click="count++">增加</Tag>
            </div>
            <div slot="desc">通过
                <code>color</code>定义标签颜色，默认提供5组颜色
                <code>blue</code>
                <code>gray</code>
                <code>green</code>
                <code>red</code>
                <code>orange</code>
                当然也可以自定义其他颜色
            </div>
            <div slot="code">{{code.custom}}</div>
        </Demo>
        <h3>Tag API</h3>
        <div class="table-border">
            <table>
                <tr>
                    <th>属性</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
                <tr>
                    <td>closeable</td>
                    <td>是否显示关闭按钮</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>标签的颜色，默认提供5组颜色</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>close</td>
                    <td>关闭标签的回调事件</td>
                    <td>Function </td>
                    <td>-</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import code from '../code/tag'
export default {
    data() {
        return {
            code: code,
            count: 3
        }
    }
}
</script>


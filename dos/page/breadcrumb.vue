<template>
    <div>
        <h2>Breadcrumb 面包屑</h2>
        <p>显示当前页面在系统层级结构中的位置，并能向上返回。</p>
        <h3>代码示例</h3>
        <Demo title="基础用法">
            <div slot="content">
                <Breadcrumb>
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/breadcrumb">breadcrumb</BreadcrumbItem>
                    <BreadcrumbItem>other</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div slot="desc">
                通过
                <code>to</code>添加跳转链接
            </div>
            <div slot="code">{{code.base}}</div>
        </Demo>
        <Demo title="设置图标">
            <div slot="content">
                <Breadcrumb>
                    <BreadcrumbItem to="/" icon="home">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/breadcrumb" icon="social-buffer">breadcrumb</BreadcrumbItem>
                    <BreadcrumbItem icon="heart">other</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div slot="desc">
                通过
                <code>icon</code>设置图标
            </div>
            <div slot="code">{{code.icon}}</div>
        </Demo>
        <Demo title="分隔符">
            <div slot="content">
                <Breadcrumb>
                    <BreadcrumbItem to="/" icon="home" separator="~">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/breadcrumb" icon="social-buffer" separator="~">breadcrumb</BreadcrumbItem>
                    <BreadcrumbItem icon="heart" separator="~">other</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div slot="desc">
                通过
                <code>separator</code>设置分隔符
            </div>
            <div slot="code">{{code.separator}}</div>
        </Demo>
        <h3>BreadcrumbItem API</h3>
        <div class="table-border">
            <table>
                <tr>
                    <th>属性</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
                <tr>
                    <td>separator</td>
                    <td>自定义分隔符</td>
                    <td>String</td>
                    <td>/</td>
                </tr>
                <tr>
                    <td>to</td>
                    <td>自定义链接函数,和
                        <code>vue-router</code>配合使用 </td>
                    <td>String </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>replace</td>
                    <td>路由跳转时，开启 replace 将不会向 history 添加新记录</td>
                    <td>Boolean </td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>hollow</td>
                    <td>按钮是否颜色镂空</td>
                    <td>Boolean </td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>按钮的图标</td>
                    <td>String </td>
                    <td>-</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import code from '../code/breadcrumb'
export default {
    data() {
        return {
            code: code
        }
    }
}
</script>

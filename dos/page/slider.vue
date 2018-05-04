<template>
    <div>
        <h2>Slider 滑块</h2>
        <p>滑动型输入器，展示当前值和可选范围。</p>
        <h3>代码示例</h3>
        <Demo title="基础">
            <div slot="content">
                <Slider></Slider>
            </div>
            <div slot="desc"></div>
            <div slot="code"></div>
        </Demo>

    </div>
</template>
<script>
import code from '../code/slider'
import Demo from '../components/demo'
export default {
    components: { Demo },
    data() {
        return {
            code: code
        }
    }
};
</script>

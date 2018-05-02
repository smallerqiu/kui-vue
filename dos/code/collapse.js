let code = {}

code.base = `<Collapse v-model="acitve">
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
<script>
export default {
    data() {
        return {
            acitve: '1',
        }
    }
}
</script>`

code.accrodion = `<Collapse v-model="acitve" accrodion>
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
<script>
export default {
    data() {
        return {
            acitve: '1',
        }
    }
}
</script>`

code.collapse=`<Collapse v-model="acitve">
    <Panel title="我是标题" name="1">
        <p>我是内容，要写很多文字</p>
        <p>我是内容，要写很多文字</p>
        <p>我是内容，要写很多文字</p>
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
<script>
export default {
    data() {
        return {
            acitve: '1',
        }
    }
}
</script>`

code.sample =`<Collapse v-model="acitve" sample>
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
<script>
export default {
    data() {
        return {
            acitve: '1',
        }
    }
}
</script>`

export default code
let code = {}

code.base = `<p>{{checked}}</p>
<Switch v-model="checked"></Switch>
<Button @click="checked=!checked">test</Button>`
code.theme = `<Switch :value="true"></Switch>
<Switch :value="true" type="success"></Switch>
<Switch :value="true" type="danger"></Switch>
<Switch :value="true" type="warning"></Switch>`
code.text = `<Switch :value="false" true-text="是" false-text="否"></Switch>`
code.disabled = `<Switch :value="false" disabled></Switch>
<Switch :value="true" disabled></Switch>
<Switch :value="true" disabled true-text="是" false-text="否"></Switch>`
export default code
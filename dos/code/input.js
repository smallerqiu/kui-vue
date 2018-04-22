let code = {}

code.base = `<Input type="text" width="200" placeholder="请输入内容..."></Input>`

code.clearable = `<Input type="text" width="200" placeholder="请输入内容..." clearable></Input>`

code.withIcon = `<Input type="text" width="200" placeholder="请输入内容..." icon="ios-person" @iconClick="iconClick"></Input>
<Input type="text" width="200" placeholder="请输入内容..." icon="ios-search" @iconClick="iconClick"></Input>`

code.size = `<Input type="text" width="200" placeholder="请输入内容..."></Input>
<Input type="text" width="200" mini placeholder="请输入内容..."></Input>
<Input type="text" width="200" mini placeholder="请输入内容1..." icon="ios-person" @iconClick="iconClick"></Input>`


code.textArea = `<Input width="300" type="textarea" :rows="4" placeholder="请输入内容..."></Input>`
code.disabled = `<Input width="300" type="textarea" :rows="4" placeholder="请输入银行卡密码" disabled style="float:left;"></Input>
<Input type="text" width="200" placeholder="请输入内容..." disabled style="margin-left:15px;float:left;"></Input>
`


export default code
<cn>
#### 输入框组合
使用 compact 让组件之间紧凑连接且合并边框。默认 true
</cn>

```vue
<template>
  <Space vertical size="middle">
    <InputGroup>
      <Input style="width:20%" value="027" />
      <Input style="width:30%" value="28398987" />
    </InputGroup>
    <InputGroup  size="small">
      <Input :style="{ width: 'calc(100% - 200px)' }" value="https://k-ui.cn" />
      <Button type="primary">Submit</Button>
    </InputGroup>
    <InputGroup>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="https://k-ui.cn" />
      <Button type="primary">Submit</Button>
    </InputGroup>
    <InputGroup>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="git@gitee.com:chuchur/kui-vue.git" />
      <Tooltip title="copy git url">
        <Button :icon="Copy"></Button>
      </Tooltip>
    </InputGroup>
    <InputGroup>
      <Select value="Shenzheng" clearable>
        <Option value="Wuhan">Wuhan001</Option>
        <Option value="Shenzheng">Shenzheng</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="Nanshan District, Shenzheng" />
    </InputGroup>
    <InputGroup>
      <Select clearable multiple :value="['Wuhan001']" :style="{ width: '50%' }">
        <Option value="Wuhan001">Wuhan001</Option>
        <Option value="Shenzheng">Shenzheng</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="Nanshan District, Shenzheng" />
    </InputGroup>
    <InputGroup>
      <Input :style="{ width: '30%' }" value="0755" />
      <Input clearable :style="{ width: '50%' }" value="28398987" />
      <Input :style="{ width: '20%' }" value="+1" />
    </InputGroup>
    <InputGroup>
      <Select value="Option1">
        <Option value="Option1">Option1</Option>
        <Option value="Option2">Option2</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="input content" />
      <InputNumber :value="12" />
    </InputGroup>
    <InputGroup>
      <Input :style="{ width: '50%' }" value="input content" />
      <DatePicker  />
    </InputGroup>
    <InputGroup>
      <DatePicker  mode="dateRange"/>
      <Input :style="{ width: '30%' }" value="input content" />
      <Button type="primary">查询</Button>
    </InputGroup>
    <InputGroup>
      <Input :style="{ width: '30%' }" value="input content" />
      <DatePicker mdoe="dateRange"/>
    </InputGroup>
    <InputGroup>
      <Select value="Option1-1">
        <Option value="Option1-1">Option1-1</Option>
        <Option value="Option1-2">Option1-2</Option>
      </Select>
      <Select value="Option2-2">
        <Option value="Option2-1">Option2-1</Option>
        <Option value="Option2-2">Option2-2</Option>
      </Select>
    </InputGroup>
    <InputGroup>
      <Select value="1">
        <Option value="1">Between</Option>
        <Option value="2">Except</Option>
      </Select>
      <Input :style="{ width: '100px', textAlig: 'center' }" placeholder="Minimum" />
      <Input :style="{
          width: '30px',
          borderLef: 0,
          borderRight: 0,
          pointerEvents: 'none',
        }" placeholder="~" disabled />
      <Input :style="{
          width: '100px',
          textAlig: 'center',
        }" placeholder="Maximum" />
    </InputGroup>
  </Space>
</template>
<script>
import { Copy } from 'kui-icons'
export default{
  data(){
    return{
      Copy
    }
  }
}
</script>
```
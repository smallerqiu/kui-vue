<cn>
#### 紧凑布局组合
使用 compact 让表单组件之间紧凑连接且合并边框。
</cn>

```vue
<template>
  <Space vertical size="middle">
    <space compact>
      <Input style="width:20%" value="027" />
      <Input style="width:30%" value="28398987" />
    </space>
    <Space compact  size="small">
      <Input :style="{ width: 'calc(100% - 200px)' }" value="https://k-ui.cn" />
      <Button type="primary">Submit</Button>
    </Space>
    <Space compact>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="https://k-ui.cn" />
      <Button type="primary">Submit</Button>
    </Space>
    <Space compact>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="git@gitee.com:chuchur/kui-vue.git" />
      <Tooltip title="copy git url">
        <Button :icon="Copy"></Button>
      </Tooltip>
    </Space>
    <Space compact>
      <Select value="Shenzheng" clearable>
        <Option value="Wuhan">Wuhan001</Option>
        <Option value="Shenzheng">Shenzheng</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="Nanshan District, Shenzheng" />
    </Space>
    <Space compact>
      <Select clearable multiple :value="['Wuhan001']" :style="{ width: '50%' }">
        <Option value="Wuhan001">Wuhan001</Option>
        <Option value="Shenzheng">Shenzheng</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="Nanshan District, Shenzheng" />
    </Space>
    <Space compact>
      <Input :style="{ width: '30%' }" value="0755" />
      <Input clearable :style="{ width: '50%' }" value="28398987" />
      <Input :style="{ width: '20%' }" value="+1" />
    </Space>
    <Space compact>
      <Select value="Option1">
        <Option value="Option1">Option1</Option>
        <Option value="Option2">Option2</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="input content" />
      <InputNumber :value="12" />
    </Space>
    <Space compact>
      <Input :style="{ width: '50%' }" value="input content" />
      <DatePicker  />
    </Space>
    <Space compact>
      <DatePicker  mode="dateRange"/>
      <Input :style="{ width: '30%' }" value="input content" />
      <Button type="primary">查询</Button>
    </Space>
    <Space compact>
      <Input :style="{ width: '30%' }" value="input content" />
      <DatePicker mdoe="dateRange"/>
    </Space>
    <Space compact>
      <Select value="Option1-1">
        <Option value="Option1-1">Option1-1</Option>
        <Option value="Option1-2">Option1-2</Option>
      </Select>
      <Select value="Option2-2">
        <Option value="Option2-1">Option2-1</Option>
        <Option value="Option2-2">Option2-2</Option>
      </Select>
    </Space>
    <Space compact>
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
    </Space>
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
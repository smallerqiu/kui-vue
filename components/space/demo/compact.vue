<template>
  <Space vertical size="middle" block style="max-width: 520px">
    <Space compact :style="{ width: '50%' }">
      <Input :style="{ width: '50%' }" value="027" />
      <Input :style="{ width: '50%' }" value="28398987" />
    </Space>
    <Space compact size="small" block>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="https://k-ui.cn" />
      <Button type="primary">Submit</Button>
    </Space>
    <Space compact block>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="https://k-ui.cn" />
      <Button type="primary">Submit</Button>
    </Space>
    <Space compact block>
      <Input :style="{ width: 'calc(100% - 200px)' }" value="git@gitee.com:chuchur/kui-vue.git" />
      <Tooltip title="copy git url">
        <Button :icon="Copy"></Button>
      </Tooltip>
    </Space>
    <Space compact block>
      <Select value="Shenzheng" clearable>
        <Option value="Wuhan">Wuhan001</Option>
        <Option value="Shenzheng">Shenzheng</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="Nanshan District, Shenzheng" />
    </Space>
    <Space compact block>
      <Select clearable multiple :value="['Wuhan001']" :style="{ width: '50%' }">
        <Option value="Wuhan001">Wuhan001</Option>
        <Option value="Shenzheng">Shenzheng</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="Nanshan District, Shenzheng" />
    </Space>
    <Space compact block>
      <Input :style="{ width: '30%' }" value="0755" />
      <Input clearable :style="{ width: '50%' }" value="28398987" />
      <Input :style="{ width: '20%' }" value="+1" />
    </Space>
    <Space compact block>
      <Select value="Option1">
        <Option value="Option1">Option1</Option>
        <Option value="Option2">Option2</Option>
      </Select>
      <Input :style="{ width: '50%' }" value="input content" />
      <InputNumber :value="12" />
    </Space>
    <Space compact block>
      <Input :style="{ width: '50%' }" value="input content" />
      <DatePicker />
    </Space>
    <Space compact block>
      <DatePicker mode="dateRange" />
      <Input :style="{ width: '30%' }" value="input content" />
      <Button type="primary">Query</Button>
    </Space>
    <Space compact block>
      <Input :style="{ width: '30%' }" value="input content" />
      <DatePicker mode="dateRange" />
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
      <Input :style="{ width: '100px', textAlign: 'center' }" placeholder="Minimum" />
      <Input
        :style="{
          width: '30px',
          borderLeft: 0,
          borderRight: 0,
          pointerEvents: 'none',
        }"
        placeholder="~"
        disabled
      />
      <Input
        :style="{
          width: '100px',
          textAlign: 'center',
        }"
        placeholder="Maximum"
      />
    </Space>
    <Space compact>
      <Select value="Option1-1">
        <Option value="Option1-1">Option1-1</Option>
        <Option value="Option1-2">Option1-2</Option>
      </Select>
      <TreeSelect :tree-data="treeData" clearable style="width: 200px"></TreeSelect>
    </Space>
  </Space>
</template>
<script setup lang="ts">
import { Copy } from "kui-icons";
const treeData = [
  {
    title: "fruit",
    key: "1",
    children: [
      { title: "apple", key: "11" },
      { title: "orange", key: "12" },
    ],
  },
];
</script>

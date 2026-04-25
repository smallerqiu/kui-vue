<template>
  <Space vertical size="middle" block style="width: 600px; max-width: 100%">
    <InputGroup>
      <Input style="width: 20%" value="027" />
      <Input style="width: 30%" value="28398987" />
    </InputGroup>
    <InputGroup size="small">
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
      <Select clearable multiple :value="['Wuhan001']" :style="{ width: '50%' }" :maxTagCount="1">
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
      <Input :style="{ width: '50%' }" value="input content" :icon="Copy" />
      <DatePicker />
    </InputGroup>
    <InputGroup>
      <DatePicker mode="dateRange" />
      <Input :style="{ width: '30%' }" value="input content" />
      <Button type="primary">Query</Button>
    </InputGroup>
    <InputGroup>
      <Input :style="{ width: '30%' }" value="input content" />
      <DatePicker mode="dateRange" />
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
    </InputGroup>
    <InputGroup>
      <Select value="Option1-1">
        <Option value="Option1-1">Option1-1</Option>
        <Option value="Option1-2">Option1-2</Option>
      </Select>
      <TreeSelect :tree-data="treeData" clearable style="width: 200px"></TreeSelect>
    </InputGroup>
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

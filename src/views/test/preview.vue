<template>
  <div style="padding: 20px" class="preview">
    <Flex :size="10">
      <Space vertical :size="20">
        <Space :size="20">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="danger">Danger Button</Button>
          <Select modelValue="0">
            <Option label="Option A" value="0">Option A</Option>
            <Option label="Option B" value="1">Option B</Option>
          </Select>
          <DatePicker modelValue="2026-05-05 12:00:00" mode="dateTime" />
        </Space>
        <Space :size="20">
          <RadioGroup :options="options" modelValue="3" />
          <RadioGroup :options="optionsDisabled" disabled modelValue="5" />
          <KSwitch checked />
          <KSwitch />
          <KSwitch checked disabled />
          <KSwitch disabled />
        </Space>
        <Space :size="20">
          <CheckboxGroup :options="options" :modelValue="['3']" />
          <CheckboxGroup :options="optionsDisabled" disabled :modelValue="['5']" />
          <KSwitch checked>
            <template #checked><Icon :type="Check" /></template>
            <template #unchecked><Icon :type="X" /></template>
          </KSwitch>
          <KSwitch>
            <template #checked><Icon :type="Check" /></template>
            <template #unchecked><Icon :type="X" /></template>
          </KSwitch>
          <KSwitch checked disabled
            ><template #checked><Icon :type="Check" /></template>
            <template #unchecked><Icon :type="X" /></template
          ></KSwitch>
          <KSwitch disabled>
            <template #checked><Icon :type="Check" /></template>
            <template #unchecked><Icon :type="X" /></template>
          </KSwitch>
        </Space>
      </Space>
      <Space>
        <Modal title="Basic Modal" :modelValue="true" :transfer="false" :mask="false">
          I am a Modal. I can do many things.
        </Modal>
      </Space>
    </Flex>
    <Space style="padding: 20px 0">
      <Rate :modelValue="3" />
      <Rate :modelValue="3" :icon="Heart" color="red" />
      <Tag :icon="LogoWechat" closeable color="green">Wechat</Tag>
      <Tag color="red">Tag red</Tag>
      <Tag color="#39f">#39f</Tag>
      <Tag color="#e3f">#e3f</Tag>
      <Tag color="#6c0" closeable>#6c0</Tag>
      <Alert type="info" style="width: 300px">Alert info</Alert>
      <Alert type="warning" style="width: 300px" bordered closable>Alert info</Alert>
    </Space>
    <Space style="width: 600px" vertical>
      <Progress :percent="50" status="active" />
      <Progress :percent="70" status="exception" />
      <Progress :percent="100" />
      <Space :size="10">
        <Progress type="circle" :percent="50" :width="100" />
        <Progress type="circle" :percent="70" status="exception" :width="100" />
        <Progress type="circle" :percent="100" :width="100" />
        <StatCard title="Today's Orders" :items="items1" />
      </Space>
      <Page :page="1" :total="150" />
      <Tabs model-value="1">
        <TabPanel key="1" title="Tab 1"></TabPanel>
        <TabPanel key="2" title="Tab 2"></TabPanel>
        <TabPanel key="3" title="Tab 3"></TabPanel>
      </Tabs>
      <Tabs model-value="1">
        <TabPanel key="1" title="Tab 1" :icon="LogoAndroid"></TabPanel>
        <TabPanel key="2" title="Tab 2" :icon="LogoApple"></TabPanel>
        <TabPanel key="3" title="Tab 3" :icon="LogoMicrosoft"></TabPanel>
      </Tabs>

      <Space :size="20">
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="default" />
        <Badge status="warning" />
        <Badge status="success" text="Success" />
        <Badge status="error" text="Error" />
        <Badge status="default" text="Default" />
        <Badge status="warning" text="warning" />
      </Space>
      <Space style="margin-top: 20px">
        <TimeLine>
          <TimeLineItem time="2020-11-03">Release version 3.0</TimeLineItem>
          <TimeLineItem time="2019-10-25">Release version 2.0</TimeLineItem>
          <TimeLineItem time="2018-10-08">Release version 1.0</TimeLineItem>
        </TimeLine>
        <div class="pop-demo">
          <Tooltip title="How to behave?" :show="true" placement="top-left">
            <span class="pop pop1"></span>
          </Tooltip>
          <Poptip title="Title" :show="true" content="I am poptip" placement="bottom-left">
            <span class="pop pop2"></span>
          </Poptip>
          <Popconfirm title="Are you sure delete this task?" show placement="top-right">
            <span class="pop pop3"></span>
          </Popconfirm>
        </div>
      </Space>
    </Space>
    <Space style="width: 600px; margin-left: 20px" vertical>
      <Slider :modelValue="20" :step="10" />
      <Slider :modelValue="[30, 80]" range :min="10" :max="100" />
      <Slider :modelValue="60" disabled />

      <Space :size="20">
        <Avatar shape="circle" :icon="User" />
        <Avatar shape="circle">U</Avatar>
        <Avatar shape="circle" src="https://cdn.chuchur.com/img/chick.jpeg" />
        <Avatar shape="square" :icon="User" />
        <Avatar shape="square">U</Avatar>
        <Avatar shape="square" src="https://cdn.chuchur.com/img/chick.jpeg" />
        <Badge :count="1">
          <Avatar shape="square" :icon="User" />
        </Badge>
        <Badge dot>
          <Avatar shape="square" :icon="User" />
        </Badge>
        <Input placeholder="Please input" />
      </Space>
      <Menu mode="horizontal" :items="items" style="margin: 20px 0" />
      <Space align="start" :size="180">
        <DatePicker :presets="p1" mode="dateRange" opened />
        <Menu :items="items" :open-keys="['3']" mode="inline" />
      </Space>
    </Space>
  </div>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import {
  Check,
  Heart,
  LogoAndroid,
  LogoApple,
  LogoMicrosoft,
  LogoWechat,
  Mail,
  Settings,
  User,
  X,
} from "kui-icons";
import type { MenuOptionsProps } from "kui-vue";
import { h } from "vue";
import "./index.less";

const options = [
  {
    label: "Option A",
    value: "1",
  },
  {
    label: "Option B",
    value: "2",
  },
  {
    label: "Option C",
    value: "3",
  },
];
const optionsDisabled = [
  {
    label: "Option D",
    value: "4",
  },
  {
    label: "Option E",
    value: "5",
  },
];
const p1 = [
  { label: "Yesterday", value: () => dayjs().add(-1, "d") },
  { label: "7 days ago", value: () => dayjs().add(-7, "d") },
  { label: "Last month", value: () => dayjs().add(-1, "month") },
];
const items: MenuOptionsProps[] = [
  { title: "Navigation One", key: "1", icon: Mail },
  { title: "Navigation Two", key: "2", icon: Heart, disabled: true },
  {
    title: "Navigation - Submenu",
    key: "3",
    icon: Settings,
    children: [
      { title: "Option 1", key: "3-1" },
      { title: "Option 2", key: "3-2" },
      { title: "Option 1", key: "3-3" },
      { title: "Option 2", key: "3-4" },
      {
        title: "Submenu",
        key: "3-5",
        children: [
          { title: "Option 1", key: "3-5-1" },
          { title: "Option 2", key: "3-5-2" },
          { title: "Option 1", key: "3-5-3" },
          { title: "Option 2", key: "3-5-4" },
        ],
      },
    ],
  },
  {
    title: h(
      "a",
      { href: "https://k-ui.cn", target: "_blank" },
      { default: () => "Navigation -Link" }
    ),
    key: "4",
  },
];
const items1 = [
  { value: 58721, desc: "Orders" },
  { value: 9873672, desc: "Total Order Amount", prefix: "￥" },
];
</script>

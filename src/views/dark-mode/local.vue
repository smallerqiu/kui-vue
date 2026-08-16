<template>
  <div
    class="local-theme-page"
    v-bind="{
      'theme-mode': dark ? 'dark' : 'light',
      'shape-mode': shapeMode,
    }"
  >
    <div class="local-theme-toolbar">
      <Space vertical>
        <strong>Component overview</strong>
        <span>Light and dark component states</span>
      </Space>
      <Space>
        <Button type="primary" theme="outline" @click="dark = !dark">
          {{ dark ? "Light mode" : "Dark mode" }}
        </Button>
        <RadioGroup v-model="shapeMode" type="button">
          <Radio value="round" label="Round" />
          <Radio value="square" label="Square" />
        </RadioGroup>
      </Space>
    </div>

    <Grid class="showcase-grid" :cols="{ xs: 1, md: 12 }" :xGap="12" :yGap="12" flow="row dense">
      <GridItem class="showcase-column" :span="{ xs: 1, md: 7 }">
        <Grid :cols="1" :yGap="12">
          <GridItem class="showcase-cell controls-cell">
            <Grid :cols="6" :xGap="10" :yGap="12" align="center">
              <GridItem :span="2"><Button type="primary" block>Primary</Button></GridItem>
              <GridItem :span="2"><Button block>Default</Button></GridItem>
              <GridItem :span="2"><Button type="danger" block>Danger</Button></GridItem>

              <GridItem :span="2">
                <Select modelValue="1" block>
                  <Option label="Option A" value="1" />
                  <Option label="Option B" value="2" />
                </Select>
              </GridItem>
              <GridItem :span="{ sm: 1, md: 3 }">
                <Space>
                  <DatePicker modelValue="2026-08-16" />
                  <DatePicker modelValue="2026-08-16" mode="dateTime" />
                </Space>
              </GridItem>

              <GridItem :span="6">
                <Space size="large" block>
                  <RadioGroup :options="options" modelValue="3" />
                  <RadioGroup :options="disabledOptions" disabled modelValue="5" />
                </Space>
              </GridItem>
              <GridItem :span="6">
                <Space size="large" block>
                  <CheckboxGroup :options="options" :modelValue="['3']" />
                  <CheckboxGroup :options="disabledOptions" disabled :modelValue="['5']" />
                </Space>
              </GridItem>

              <GridItem :span="6">
                <Space>
                  <Switch checked />
                  <Switch />
                  <Switch checked disabled />
                  <Switch disabled />
                  <Switch checked true-text="✓" false-text="×" />
                  <Switch true-text="✓" false-text="×" />
                  <ColorPicker modelValue="#5798ff" />
                  <InputNumber />
                </Space>
              </GridItem>
              <GridItem :span="3"><Input placeholder="Please input" /></GridItem>
              <GridItem :span="3">
                <InputOTP modelValue="2608" separator="·" :length="4" size="small" />
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem class="showcase-cell feedback-cell">
            <Grid :cols="6" :xGap="12" :yGap="12" align="center">
              <GridItem :span="3">
                <Space>
                  <Rate :modelValue="3" />
                  <Rate :modelValue="2" :icon="Heart" color="red" :count="3" />
                </Space>
              </GridItem>
              <GridItem :span="3">
                <Space wrap>
                  <Tag color="green" :icon="LogoWechat" closeable>Wechat</Tag>
                  <Tag color="red">Red</Tag>
                  <Tag color="#39f">#39f</Tag>
                  <Tag color="#e3f">#e3f</Tag>
                </Space>
              </GridItem>
              <GridItem :span="3">
                <Space vertical block>
                  <Alert type="info">Information message</Alert>
                  <Alert type="warning" bordered closable>Warning message</Alert>
                </Space>
              </GridItem>
              <GridItem :span="3">
                <Alert
                  type="success"
                  showIcon
                  message="Success Tip"
                  description="Congratulations, the operation is successful."
                />
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem class="showcase-cell progress-cell">
            <Grid :cols="7" :xGap="14" :yGap="12" align="center">
              <GridItem :span="7"><Progress :percent="50" status="active" /></GridItem>
              <GridItem :span="7"><Progress :percent="70" status="exception" /></GridItem>
              <GridItem :span="7"><Progress :percent="100" /></GridItem>
              <GridItem :span="4">
                <Space>
                  <Progress type="circle" :percent="50" :width="92" />
                  <Progress type="circle" :percent="70" status="exception" :width="92" />
                  <Progress type="circle" :percent="100" :width="92" />
                </Space>
              </GridItem>
              <GridItem :span="3">
                <Space wrap>
                  <Avatar shape="circle" :icon="User" />
                  <Avatar shape="circle">U</Avatar>
                  <Avatar shape="circle" src="https://cdn.chuchur.com/img/chick.jpeg" />
                  <Avatar shape="square" :icon="User" />
                  <Avatar shape="square">U</Avatar>
                  <Avatar shape="square" src="https://cdn.chuchur.com/img/chick.jpeg" />
                  <Badge :count="1"><Avatar shape="square" :icon="User" /></Badge>
                  <Badge dot><Avatar shape="square" :icon="User" /></Badge>
                </Space>
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem class="showcase-cell data-cell">
            <Grid :cols="7" :xGap="14" :yGap="14" align="start">
              <GridItem :span="7">
                <Space block>
                  <StatCard
                    v-for="item in stats"
                    :key="item.title"
                    :title="item.title"
                    :items="[item.data]"
                    reverse
                    bordered
                  />
                </Space>
              </GridItem>

              <GridItem :span="7"><Page :page="1" :total="150" /></GridItem>
              <GridItem :span="7">
                <Tabs model-value="1">
                  <TabPanel key="1" title="Tab 1" />
                  <TabPanel key="2" title="Tab 2" />
                  <TabPanel key="3" title="Tab 3" />
                </Tabs>
              </GridItem>
              <GridItem :span="7">
                <Space wrap>
                  <Badge status="success" />
                  <Badge status="error" />
                  <Badge status="default" />
                  <Badge status="warning" />
                  <Badge status="success" text="Success" />
                  <Badge status="error" text="Error" />
                  <Badge status="default" text="Default" />
                  <Badge status="warning" text="Warning" />
                  <Badge active status="success" text="Success" />
                  <Badge active status="error" text="Error" />
                  <Badge active status="warning" text="Warning" />
                </Space>
              </GridItem>
              <GridItem :span="7">
                <Space block>
                  <FeatureCard
                    bordered
                    :icon="Settings"
                    title="Flexible setup"
                    desc="Composable options."
                  />
                  <FeatureCard
                    :icon="Palette"
                    title="Theme tokens"
                    desc="Colors, shapes and states."
                  />
                </Space>
              </GridItem>
              <GridItem :span="7">
                <FeedbackPanel
                  kind="positive"
                  heading="Ready"
                  description="All component states loaded."
                  compact
                />
              </GridItem>
            </Grid>
          </GridItem>

          <GridItem class="showcase-cell navigation-cell">
            <Menu mode="horizontal" :items="menuItems" />
            <Divider />
            <Grid :cols="7" :xGap="16" align="start">
              <GridItem :span="4">
                <Menu :items="menuItems" :open-keys="['3']" mode="inline" />
              </GridItem>
              <GridItem :span="3">
                <TimeLine>
                  <TimeLineItem time="2026-08-16">Release version 5.5</TimeLineItem>
                  <TimeLineItem time="2025-10-25">Theme system update</TimeLineItem>
                  <TimeLineItem time="2024-10-08">Component refresh</TimeLineItem>
                </TimeLine>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </GridItem>

      <GridItem class="showcase-column" :span="{ xs: 1, md: 5 }">
        <Grid :cols="1" :yGap="12">
          <GridItem class="modal-cell">
            <ModalPanel title="Basic Modal" width="100%">
              I am a Modal. I can do many things.
            </ModalPanel>
          </GridItem>

          <GridItem class="showcase-cell sliders-cell">
            <Space vertical block>
              <Slider :modelValue="20" :step="10" />
              <Slider :modelValue="[25, 78]" range />
              <Slider :modelValue="60" disabled />
              <Input placeholder="Search components" :icon="Search"> </Input>
            </Space>
          </GridItem>

          <GridItem class="showcase-cell picker-cell">
            <Grid :cols="5" :xGap="12" :yGap="16" align="center" justify="center">
              <GridItem :span="5"><DatePickerPanel modelValue="2026-08-16" /></GridItem>
              <GridItem :span="5"><ColorPickerPanel modelValue="#5798ff" /></GridItem>
            </Grid>
          </GridItem>

          <GridItem class="showcase-cell popup-cell">
            <Grid :cols="2" :xGap="14" :yGap="18" align="start" flow="row dense">
              <GridItem :span="1"><TooltipPanel title="How to behave?" /></GridItem>
              <GridItem :span="2">
                <PopconfirmPanel title="Are you sure delete this task?" />
              </GridItem>
              <GridItem :span="1">
                <PoptipPanel title="Title" content="I am poptip" placement="bottom-left" />
              </GridItem>
              <GridItem :span="2"><MessagePanel type="success" content="Theme saved" /></GridItem>
              <GridItem :span="2">
                <NoticePanel type="info" title="Build completed" content="Ready to preview." />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  </div>
</template>

<script setup lang="ts">
import { Heart, LogoWechat, Mail, Palette, Search, Settings, User } from "kui-icons";
import type { MenuOptionsProps, StatNumberItem } from "kui-vue";
import { ref } from "vue";

const dark = ref(true);
const shapeMode = ref<"round" | "square">("round");
const options = [
  { label: "Option A", value: "1" },
  { label: "Option B", value: "2" },
  { label: "Option C", value: "3" },
];
const disabledOptions = [
  { label: "Option D", value: "4" },
  { label: "Option E", value: "5" },
];
const stats: Array<{ title: string; data: StatNumberItem }> = [
  {
    title: "请求数",
    data: {
      value: 12840,
      separator: ",",
      desc: "本月累计",
      trend: "+18.2% 较上月",
      trendStatus: "success",
    },
  },
  {
    title: "转化率",
    data: {
      value: 8.6,
      precision: 1,
      suffix: "%",
      desc: "本周平均",
      trend: "接近目标值",
      trendStatus: "warning",
    },
  },
  // {
  //   title: "退款率",
  //   data: {
  //     value: 2.4,
  //     precision: 1,
  //     suffix: "%",
  //     desc: "近 30 天",
  //     trend: "+0.6% 需要关注",
  //     trendStatus: "danger",
  //   },
  // },
  // {
  //   title: "在线用户",
  //   data: {
  //     value: 3268,
  //     separator: ",",
  //     desc: "当前数据",
  //     trend: "更新于刚刚",
  //   },
  // },
];
const menuItems: MenuOptionsProps[] = [
  { title: "Navigation One", key: "1", icon: Mail },
  { title: "Navigation Two", key: "2", icon: Heart, disabled: true },
  {
    title: "Navigation - Submenu",
    key: "3",
    icon: Settings,
    children: [
      { title: "Option 1", key: "3-1" },
      { title: "Option 2", key: "3-2" },
    ],
  },
];
</script>

<style scoped lang="less">
.local-theme-page {
  padding: 14px;
  color: var(--kui-color-text);
  background: var(--kui-color-bg);
  border: 1px solid var(--kui-color-border);
  border-radius: var(--kui-border-radius-card);
  transition:
    color 0.2s,
    background-color 0.2s;
}

.local-theme-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  padding: 2px;

  // > div {
  //   display: grid;
  //   gap: 2px;
  // }

  span {
    color: var(--kui-color-text-description);
    font-size: 12px;
  }
}

.showcase-grid {
  align-items: start;
}

.showcase-cell {
  min-width: 0;
  padding: 14px;
  border: 1px solid var(--kui-color-border);
  border-radius: var(--kui-border-radius-card);
}

.modal-cell {
  min-width: 0;
}

.controls-cell :deep(.k-datepicker),
.controls-cell :deep(.k-input),
.data-cell :deep(.k-stat-card),
.feedback-cell :deep(.k-alert),
.navigation-cell :deep(.k-menu-horizontal) {
  width: 100%;
}

.picker-cell :deep(.k-datepicker-panel),
.picker-cell :deep(.k-color-picker-panel) {
  justify-self: stretch;
}

.popup-cell :deep(.k-tooltip-panel) {
  min-height: 42px;
}

@media (max-width: 767px) {
  .local-theme-page {
    padding: 10px;
  }

  .local-theme-toolbar {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>

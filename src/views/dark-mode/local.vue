<template>
  <div>
    <Button theme="light" @click="change">Local darkening</Button>
    <div class="k-demo-layout">
      <Layout class="layout-back">
        <Sider class="demo-sider" :style="{ width: collapsed ? '60px' : '200px' }">
          <div class="logo-box">
            <Icon :type="LogoKui" size="30" class="logo" />
            <transition>
              <span v-show="!collapsed">Dashboard</span>
            </transition>
          </div>
          <Menu
            mode="inline"
            v-model="leftMenuActiveKeys"
            :inline-collapsed="collapsed"
            style="border: none"
          >
            <MenuItem key="1-1" :icon="Home"><span>Home</span></MenuItem>
            <MenuItem key="1-2" :icon="Heart"><span>Data statistics</span></MenuItem>
            <MenuItem key="1-3" :icon="Settings">
              <span>Settings</span>
            </MenuItem>
          </Menu>
          <Button
            theme="light"
            :icon="!collapsed ? ChevronBack : ChevronForward"
            @click="toggle"
            class="btn-expand"
          />
        </Sider>
        <Content class="k-demo-main">
          <Breadcrumb class="nav">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
          </Breadcrumb>
          <div
            class="demo-dark"
            v-bind="{ 'theme-mode': dark ? 'dark' : 'light' }"
            style="background: var(--kui-color-bg)"
          >
            <Space vertical block>
              <Menu mode="horizontal" v-model="current">
                <MenuItem key="1" :icon="Mail">Navigation One</MenuItem>
                <MenuItem key="2" :icon="Heart" disabled> Navigation Two </MenuItem>
                <MenuItem key="4">
                  <a href="https://k-ui.cn" target="_blank">Navigation -Link</a>
                </MenuItem>
              </Menu>
              <Page :total="50" />
              <Space>
                <Tag :size="size" :theme="theme" :shape="shape">Tag1</Tag>
                <Tag :size="size" :theme="theme" :shape="shape">Tag2</Tag>
                <Tag :size="size" :theme="theme" :shape="shape">Tag3</Tag>
                <Tag :size="size" :theme="theme" :shape="shape" closeable>Tag4</Tag>
              </Space>
            </Space>

            <div style="width: 512px">
              <Form
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
                :size="size"
                :theme="theme"
                :shape="shape"
              >
                <FormItem label="Shape">
                  <RadioGroup v-model="shape">
                    <Radio value="default" label="Default" />
                    <Radio value="circle" label="Circle" />
                    <Radio value="square" label="Square" />
                  </RadioGroup>
                </FormItem>
                <FormItem label="Theme">
                  <RadioGroup v-model="theme">
                    <Radio value="light" label="Light" />
                    <Radio value="outline" label="Outline" />
                  </RadioGroup>
                </FormItem>
                <FormItem label="Size">
                  <RadioGroup v-model="size" type="button">
                    <RadioButton value="large" label="Large" />
                    <RadioButton value="default" label="Default" />
                    <RadioButton value="small" label="Small" />
                  </RadioGroup>
                </FormItem>
                <FormItem label="Input">
                  <Input placeholder="input..." />
                </FormItem>
                <FormItem label="InputNumber">
                  <InputNumber placeholder="input..." />
                </FormItem>
                <FormItem label="Select">
                  <Select>
                    <Option value="0" label="Apple" />
                    <Option value="1" label="Banana" />
                    <Option value="2" label="Orange" />
                  </Select>
                </FormItem>
                <FormItem label="DatePicker">
                  <DatePicker />
                </FormItem>
                <FormItem label="Radio">
                  <RadioGroup>
                    <Radio value="0" label="Apple" />
                    <Radio value="1" label="Banana" />
                    <Radio value="2" label="Orange" />
                  </RadioGroup>
                </FormItem>
                <FormItem label="Checkbox">
                  <CheckboxGroup>
                    <Checkbox value="0" label="Apple" />
                    <Checkbox value="1" label="Banana" />
                    <Checkbox value="2" label="Orange" />
                  </CheckboxGroup>
                </FormItem>
                <FormItem label="Switch">
                  <k-switch true-text="Yes" false-text="No" />
                </FormItem>
                <FormItem label="Text">
                  <TextArea placeholder="Please input..." />
                </FormItem>
                <FormItem :wrapperCol="{ offset: 5 }">
                  <Button type="primary">Submit</Button>
                  <Button style="margin-left: 10px">Cancel</Button>
                </FormItem>
              </Form>
            </div>
          </div>
          <Footer>KUI ©2018 Created by Qiu</Footer>
        </Content>
      </Layout>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ChevronBack, ChevronForward, Heart, Home, LogoKui, Mail, Settings } from "kui-icons";
import type { ShapeType, SizeType, ThemeType } from "kui-vue";
import { ref } from "vue";

const current = ref(["1"]);
const leftMenuActiveKeys = ref(["1-1"]);
const collapsed = ref(false);
const dark = ref(false);
const size = ref<SizeType>("default");
const theme = ref<ThemeType>("default");
const shape = ref<ShapeType>("default");
const change = () => {
  dark.value = !dark.value;
};
const toggle = () => {
  collapsed.value = !collapsed.value;
};
</script>

<style scoped lang="less">
.demo-dark {
  padding: 20px 0;
  color: #ddd;
  margin: 20px;
  background: var(--kui-color-back);
}
.k-demo-layout {
  .logo-box {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 16px 0 17px 16px;
    white-space: nowrap;
    overflow: hidden;
    .logo {
      margin-right: 8px;
    }
  }
  .header-nav {
    border-bottom: 1px solid var(--kui-color-border);
    padding-bottom: 10px;
  }
}
.btn-expand {
  position: absolute;
  bottom: 10px;
  left: 12px;
}
.k-demo-layout .demo-sider {
  left: 0;
  position: relative;
  border-right: 1px solid var(--kui-color-border);
  transition: all 0.3s ease 0s;
}
.k-demo-layout .k-demo-main .nav {
  padding: 16px 0 0 16px;
}
.k-demo-layout .k-demo-main {
  overflow: auto;
}
.k-demo-layout .k-layout-footer {
  text-align: center;
  color: #999;
}
</style>

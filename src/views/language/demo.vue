<template>
  <Space vertical block>
    <Space>
      <code>Language :</code>
      <RadioGroup v-model="lang" type="button" @change="changeLocale">
        <RadioButton value="en">English</RadioButton>
        <RadioButton value="zh">中文</RadioButton>
        <RadioButton value="de">De</RadioButton>
      </RadioGroup>
    </Space>
    <ConfigProvider :locale="locale">
      <Space vertical block>
        <Space wrap>
          <DatePicker mode="year" />
          <DatePicker mode="month" />
          <DatePicker mode="date" />
          <DatePicker mode="time" />
          <DatePicker mode="dateTime" />
          <DatePicker mode="dateRange" />
        </Space>
        <Space>
          <Select style="width: 120px" />
          <Select
            :value="[]"
            multiple
            style="width: 120px"
            @search="selectSearch"
            :loading="loading"
          />
        </Space>
        <Space vertical>
          <Page :total="50" show-total showSizer showElevator />
        </Space>
        <Space>
          <Button @click="showModal">Modal</Button>
          <Button @click="showInfo">Info</Button>
          <Button @click="showConfirm">Confirm</Button>
          <Popconfirm title="Are you sure?">
            <Button>Pop Confirm</Button>
          </Popconfirm>
          <Button @click="openDrawer">Open Drawer</Button>
        </Space>
        <Space>
          <Table :columns="columns" />
        </Space>
        <Space> TreeSelect : <TreeSelect :treeData="[]" style="width: 180px" /> </Space>
        <Space>
          Image :
          <KImage :width="120" :height="120" src="https://cdn.chuchur.com/upload/cat/cat1.jpg" />
        </Space>
        <Space>
          <Upload
            action="https://www.chuchur.com/api/upload/image"
            name="file"
            directory
            :fileList="fileList"
          >
            <Button>Click to upload</Button>
          </Upload>
        </Space>
        <Space block style="max-width: 500px">
          <Form :model="form" :rules="rules" :labelCol="labelCol" :wrapperCol="wrapperCol">
            <FormItem label="Name" prop="name">
              <Input placeholder="Please input" />
            </FormItem>
            <FormItem label="Email" prop="email">
              <Input placeholder="Please input" />
            </FormItem>
            <FormItem label="Age" prop="age">
              <InputNumber placeholder="Please input" />
            </FormItem>
            <FormItem :wrapperCol="{ offset: 6 }">
              <Button type="primary" htmlType="submit">Submit</Button>
              <Button style="margin: 0 10px" htmlType="reset">Reset</Button>
            </FormItem>
          </Form>
        </Space>
        <Modal v-model="visible" title="Basic Modal" />
        <Drawer v-model="visible1" title="Basic Drawer" />
      </Space>
    </ConfigProvider>
  </Space>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { message, modal, type FormRule, type UploadFile } from "kui-vue";
import de from "kui-vue/locale/de";
import en from "kui-vue/locale/en";
import zh from "kui-vue/locale/zh-CN";
import { reactive, ref } from "vue";

import dayjsDe from "dayjs/esm/locale/de";
import dayjsZh from "dayjs/esm/locale/zh-cn";

const lang = ref("en");
const locale = ref(en);

dayjs.locale("en");

const columns = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
];
const fileList = ref<UploadFile[]>([
  {
    url: "https://cdn.chuchur.com/upload/demo/test_300.jpg",
    status: "uploading",
    filename: "test.jpg",
    size: "222kb",
    percent: 50,
  },
  {
    url: "https://cdn.chuchur.com/upload/demo/test_300.jpg",
    status: "error",
    filename: "test.jpg",
    size: "222kb",
  },
]);
const loading = ref(false);
const visible = ref(false);
const visible1 = ref(false);
const labelCol = { span: 6 };
const wrapperCol = { span: 16 };
const form = reactive({
  name: "",
  email: "",
  age: "",
});
const rules: FormRule = {
  name: [{ required: true }],
  email: [{ required: true }, { type: "mail" }],
  age: [{ required: true }, { type: "number", min: 10, max: 50 }],
};
const langs: Record<string, any> = {
  en,
  zh,
  de,
};
const changeLocale = (value: string | number) => {
  locale.value = langs[value];
  if (value === "en") {
    dayjs.locale("en");
  } else if (value == "de") {
    dayjs.locale(dayjsDe);
  } else {
    dayjs.locale(dayjsZh);
  }
};
const showModal = () => {
  visible.value = true;
};
const openDrawer = () => {
  visible1.value = true;
};
const showInfo = () => {
  modal.info({
    title: "Hello",
    content: "modal info.",
    onOk: () => {
      message.info("info");
    },
  });
};
const showConfirm = () => {
  modal.confirm({
    title: "您确认要这么做吗",
    content: "此操作不可逆转，谨慎！！！",
    onOk: () => {
      message.success("你点了确认");
    },
    onCancel: () => {
      message.info("你点了取消");
    },
  });
};
const selectSearch = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>

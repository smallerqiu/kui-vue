<cn>
### 多语言切换示例
通过修改 ConfigProvider 的 locale 属性，切换语言。
</cn>

```vue
<template>
  <Space vertical block>
    <Space>
      <code>Language :</code>
      <RadioGroup v-model="lang" type="button" @change="changeLocale">
        <RadioButton value="en">English</RadioButton>
        <RadioButton value="zh">中文</RadioButton>
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
        <Space>
          TreeSelect : <TreeSelect :treeData="[]" style="width:180px" />
        </Space>
        <Space>
          Image :
          <KImage
            :width="120"
            :height="120"
            src="https://cdn.chuchur.com/upload/cat/cat1.jpg"
          />
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
        <Space block style="max-width:500px;">
          <Form
            :model="form"
            :rules="rules"
            :labelCol="labelCol"
            :wrapperCol="wrapperCol"
          >
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
              <Button style="margin:0 10px" htmlType="reset">Reset</Button>
            </FormItem>
          </Form>
        </Space>
        <Modal v-model:visible="visible" title="Basic Modal" />
        <Drawer v-model:visible="visible1" title="Basic Drawer" />
      </Space>
    </ConfigProvider>
  </Space>
</template>

<script setup>
import { ref, reactive, provide } from "vue";
import en from "kui-vue/locale/en";
import zh from "kui-vue/locale/zh-CN";
import dayjs from "dayjs";
import { modal, message } from "kui-vue";
const lang = ref("en");
const locale = ref(en);
dayjs.locale("en");
const data = [];
const columns = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
];

const fileList = ref([
  {
    url: "https://cdn.chuchur.com/upload/demo/test_300.jpg",
    status: "uploading",
    filename: "test.jpg",
    size: "222kb",
    percent: 50,
    status: "uploading",
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
const rules = {
  name: [{ required: true }],
  email: [{ required: true }, { type: "mail" }],
  age: [{ required: true }, { type: "number", min: 10, max: 50 }],
};

const changeLocale = (value) => {
  locale.value = value === "en" ? en : zh;
  if (value === "en") {
    dayjs.locale("en");
  } else {
    dayjs.locale("zh-cn");
  }
};

const showModal = () => {
  visible.value = true;
};
const openDrawer = () => {
  visible1.value = true;
};

// modal 等 全局方法, 需要使用 modal.useModal() 获取 context
provide("locale", locale); // 当前演示demo,需要注入locale , 实际全局不需注入

const modalApi = modal.useModal();
const showInfo = () => {
  modalApi.info({
    title: "Hello",
    content: "modal info.",
    onOk: () => {
      message.info("info");
    },
  });
};
const showConfirm = () => {
  modalApi.confirm({
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
```

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
        </Space>
        <Space vertical>
          <Select />
          <Select :value="[]" multiple />
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
        </Space>
        <Space>
          <Table :columns="columns" />
        </Space>
        <Modal v-model:visible="visible" title="Basic Modal" />
      </Space>
    </ConfigProvider>
  </Space>
</template>

<script setup>
import { ref, reactive } from "vue";
import en from "kui-vue/locale/lang/en";
import zh from "kui-vue/locale/lang/zh-CN";
import dayjs from "dayjs";
import { modal, message } from "kui-vue";
const lang = ref("en");
const locale = ref(en);
const data = [];
const columns = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
];

const visible = ref(false);

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
const showInfo = () => {
  modal.info({
    title: "",
    content: "你打开了一个窗口！",
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
</script>
```

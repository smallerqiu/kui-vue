<cn>
### 全局模式
使用 全局模式
</cn>

```vue
<template>
  <Space>
    <Button @click="success">Success</Button>
    <Button @click="error" type="danger">Error</Button>
    <Button @click="warning">Warning</Button>
    <Button @click="info" type="primary">Info</Button>
    <Button @click="show" :icon="Moon">Custom icon</Button>
  </Space>
  <p>
    <Button @click="useModalShow">useModal</Button>
  </p>
</template>
<script setup>
import { Moon } from "kui-icons";
import { modal, message } from "kui-vue";

// 使用 useModal
const useModal = modal.useModal();
const useModalShow = () => {
  useModal.success({
    title: "操作成功",
    content: "恭喜你操作成功！",
    onOk: () => {
      message.info("success");
    },
  });
};

//
const success = () => {
  modal.success({
    title: "操作成功",
    content: "恭喜你操作成功！",
    onOk: () => {
      message.info("success");
    },
  });
};

const error = () => {
  modal.error({
    title: "操作失败",
    content: "很遗憾，您可能没有权限！",
    onOk: () => {
      message.info("error");
    },
  });
};

const warning = () => {
  modal.warning({
    title: "温馨提示",
    content: "此操作不可逆转，请谨慎！",
    onOk: () => {
      message.info("warning");
    },
  });
};

const info = () => {
  modal.info({
    title: "操作提示",
    content: "你打开了一个窗口！",
    onOk: () => {
      message.info("info");
    },
  });
};

const show = () => {
  modal.show({
    title: "《静夜思》",
    content: "床前明月光，疑是地上霜，举头望明月，低头思故乡！",
    icon: Moon,
    color: "#eccb23",
    onOk: () => {
      message.info("show");
    },
  });
};
</script>
```

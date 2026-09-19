<script setup lang="ts">
import { reactive, ref } from "vue";
import { Button, Form, FormItem, Input, Modal, Space, type FormSubmitEvent } from "kui-vue";

const saved = ref({ name: "示例用户" });
const model = reactive({ name: "" });
const visible = ref(false);
const saving = ref(false);
const error = ref("");
const session = ref(0);
const rules = { name: [{ required: true, message: "请输入姓名" }] };
function open(create: boolean) {
  model.name = create ? "" : saved.value.name;
  error.value = "";
  session.value++;
  visible.value = true;
}
async function save({ valid }: FormSubmitEvent) {
  if (!valid || saving.value) return;
  saving.value = true;
  error.value = "";
  try {
    const payload = { ...model };
    // Replace this local mock with a create/update API request.
    await new Promise((resolve) => setTimeout(resolve, 200));
    saved.value = payload;
    visible.value = false;
  } catch {
    error.value = "保存失败，请重试";
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <Space>
    <Button @click="open(true)">新增</Button>
    <Button @click="open(false)">编辑</Button>
    <span>{{ saved.name }}</span>
  </Space>
  <Modal v-model="visible" title="用户编辑" :footer="false" :loading="saving">
    <Form
      :key="session"
      :model="model"
      :rules="rules"
      :disabled="saving"
      layout="vertical"
      @submit="save"
    >
      <FormItem label="姓名" prop="name"><Input /></FormItem>
      <p v-if="error" role="alert">{{ error }}</p>
      <Space>
        <Button type="primary" html-type="submit" :loading="saving" :disabled="saving">保存</Button>
        <Button :disabled="saving" @click="visible = false">取消</Button>
      </Space>
    </Form>
  </Modal>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { Button, Form, FormItem, Input, Space, type FormRule, type FormSubmitEvent } from "kui-vue";

const model = reactive({ name: "", email: "" });
const saving = ref(false);
const result = ref("");
const rules: Record<string, FormRule[]> = {
  name: [{ required: true, message: "请输入姓名" }],
  email: [
    { required: true, message: "请输入邮箱" },
    { type: "mail", message: "邮箱格式不正确" },
  ],
};
async function onSubmit({ valid }: FormSubmitEvent) {
  if (!valid || saving.value) return;
  saving.value = true;
  result.value = "";
  try {
    // Replace this local mock with your API request. Keep the snapshot stable during saving.
    const payload = { ...model };
    await new Promise((resolve) => setTimeout(resolve, 200));
    result.value = `已保存：${payload.name}`;
  } catch {
    result.value = "保存失败，请重试";
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <Form
    :model="model"
    :rules="rules"
    :disabled="saving"
    layout="vertical"
    @submit="onSubmit"
    @reset="result = ''"
  >
    <FormItem label="姓名" prop="name"><Input /></FormItem>
    <FormItem label="邮箱" prop="email"><Input /></FormItem>
    <Space>
      <Button type="primary" html-type="submit" :loading="saving" :disabled="saving">保存</Button>
      <Button html-type="reset" :disabled="saving">重置</Button>
    </Space>
    <p role="status">{{ result }}</p>
  </Form>
</template>

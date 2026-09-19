<script setup lang="ts">
import { reactive, ref } from "vue";
import { Button, Form, FormItem, Input, Space, Switch, type FormSubmitEvent } from "kui-vue";

const model = reactive({ name: "" });
const disabled = ref(false);
const result = ref("");
const rules = { name: [{ required: true, message: "Please enter your name" }] };
const onSubmit = ({ valid }: FormSubmitEvent) => {
  result.value = valid ? `Hello, ${model.name}` : "Please check the form";
};
</script>

<template>
  <Space vertical>
    <Space>
      <span>Disable form</span>
      <Switch v-model="disabled" />
    </Space>
    <Form :model="model" :rules="rules" :disabled="disabled" layout="vertical" @submit="onSubmit">
      <FormItem label="Name" prop="name"><Input placeholder="Your name" /></FormItem>
      <Button html-type="submit" type="primary" :disabled="disabled">Submit</Button>
    </Form>
    <output>{{ result }}</output>
  </Space>
</template>

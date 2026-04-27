<template>
  <Row>
    <Col :span="16">
      <Form :model="form" ref="formRef" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <FormItem
          label="Name"
          prop="cname"
          :rules="[{ required: true, message: 'Please input your name' }]"
        >
          <Input clearable />
        </FormItem>
        <FormItem
          label="Gender"
          prop="info.gender"
          :rules="[{ required: true, message: 'Please select your gender' }]"
        >
          <Select clearable style="width: 100%">
            <Option value="1" label="男" />
            <Option value="0" label="女" />
          </Select>
        </FormItem>
        <FormItem
          label="Age"
          prop="info.age"
          :rules="[{ required: true, message: 'Please input your age' }]"
        >
          <Input clearable />
        </FormItem>
        <FormItem
          :label="'Web Site' + item.key"
          :prop="'webs.' + i + '.value'"
          v-for="(item, i) in form.webs"
          :key="item.key"
          :rules="{ required: true, message: 'Web site is required' }"
        >
          <Input style="width: 230px" />
          <Icon
            :type="CircleMinus"
            @click="() => remove(i)"
            v-if="i > 0"
            style="font-size: 25px; margin: 0 10px"
          />
        </FormItem>
        <FormItem :wrapperCol="{ offset: 5 }">
          <Button type="primary" @click="submit">Submit</Button>
          <Button @click="add" style="margin: 0 10px">Add</Button>
          <Button @click="reset">Reset</Button>
        </FormItem>
      </Form>
    </Col>
    <Col :span="8">
      <pre style="height: 100%; overflow: scroll; line-height: 1.4">
        {{ JSON.stringify(form, null, 2) }}
      </pre>
    </Col>
  </Row>
</template>
<script setup lang="ts">
import { CircleMinus } from "kui-icons";
import { message, type FormContext } from "kui-vue";
import { ref } from "vue";
const labelCol = { span: 5 };
const wrapperCol = { span: 16 };
const formRef = ref<FormContext>();
const count = ref(2);
const form = ref({
  cname: "",
  info: {
    gender: "",
    age: "",
  },
  webs: [
    { value: "", key: "0" },
    { value: "", key: "1" },
  ],
});
const add = () => {
  count.value = count.value + 1;
  let item = { value: "", key: `${count.value}` };
  form.value.webs.push(item);
};
const remove = (index: number) => {
  form.value.webs.splice(index, 1);
};
const submit = () => {
  formRef.value?.validate(({ valid }) => {
    message[valid ? "success" : "error"](valid ? "success" : "failed");
  });
};
const reset = () => {
  formRef.value?.reset();
};
</script>

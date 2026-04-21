<template>
  <div style="max-width: 600px">
    <Form
      name="rules"
      :rules="rules"
      :model="form"
      @submit="submit"
      :wrapperCol="wrapperCol"
      :labelCol="labelCol"
    >
      <FormItem label="Number" prop="number">
        <Input clearable placeholder="Verify numbers" />
      </FormItem>
      <FormItem label="Text" prop="text">
        <Input clearable placeholder="Validate character length" />
      </FormItem>
      <FormItem label="E-mail" prop="email">
        <Input clearable placeholder="Verify e-mail" />
      </FormItem>
      <FormItem label="Phone Number" prop="phone">
        <Input placeholder="Verify phone number" />
      </FormItem>
      <FormItem label="Password" prop="password">
        <Input type="password" placeholder="Verify password" />
      </FormItem>
      <FormItem label="Confirm Password" prop="confirm_password">
        <Input type="password" placeholder="Verify confirm password" />
      </FormItem>
      <FormItem label="Country">
        <FormItem prop="country">
          <Select clearable style="width: 100%">
            <Option value="0" label="China" />
            <Option value="1" label="Russia" />
          </Select>
        </FormItem>
        <FormItem prop="city">
          <Select clearable style="width: 100%">
            <Option value="0" label="Shanghai" />
            <Option value="1" label="Wuhan" />
            <Option value="2" label="Hangzhou" />
          </Select>
        </FormItem>
      </FormItem>
      <FormItem label="Hobby" prop="hobbies">
        <CheckboxGroup>
          <Checkbox value="0" label="Football" />
          <Checkbox value="1" label="Music" />
          <Checkbox value="2" label="Photograph" />
          <Checkbox value="3" label="Tennis" />
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Other" prop="other">
        <TextArea placeholder="Verify the information you entered" />
      </FormItem>
      <FormItem :wrapperCol="{ offset: 6 }">
        <Button type="primary" htmlType="submit">Submit</Button>
        <Button style="margin: 0 10px" htmlType="reset">Reset</Button>
        <Button theme="dashed" @click="setValue">Set Value</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { message, type FormRule } from "kui-vue";
import { ref } from "vue";
const validatePass = (_: FormRule, value: any, callback: (error?: Error) => void) => {
  if (value !== form.value.password) {
    return callback(new Error("The two passwords do not match!"));
  }
  callback();
};
const labelCol = { span: 6 };
const wrapperCol = { span: 16 };
const form = ref({
  number: "",
  text: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
  country: "",
  city: "",
  hobbies: [],
  other: "",
});
const rules: Record<string, FormRule[]> = {
  number: [
    { required: true, message: "The number is required" },
    { type: "number", message: "Only numbers can be entered" },
  ],
  text: [
    { required: true, message: "The text is required" },
    { max: 5, message: "Maximum of 5 characters" },
  ],
  email: [
    { type: "mail", message: "Please enter the correct email" },
    { required: true, message: "The email is required" },
  ],
  password: [
    {
      min: 8,
      max: 20,
      message: "Please keep the password length between 8-20 digits.",
      trigger: "blur",
    },
    { required: true, message: "Please enter the password" },
  ],
  confirm_password: [
    {
      min: 8,
      max: 20,
      message: "Please keep the password length between 8-20 digits.",
      trigger: "blur",
    },
    { validator: validatePass },
    { required: true, message: "Please enter the password again" },
  ],
  phone: [
    { type: "mobile", message: "Please enter the correct phone number" },
    { required: true, message: "Please enter the phone number" },
  ],
  country: [{ required: true, message: "Please select the country" }],
  city: [{ required: true, message: "Please select the city" }],
  hobbies: [
    { required: true, message: "Please select at least one hobby" },
    { max: 3, message: "Maximum of 3 hobbies" },
    { min: 2, message: "Minimum of 2 hobbies" },
  ],
  other: [
    { required: true, message: "Please input others" },
    { max: 5, message: "Maximum of 5 characters" },
  ],
};
const setValue = () => {
  form.value = {
    number: 123,
    text: "bacd",
    email: "master@k-ui.cn",
    password: "abc@123@123",
    confirm_password: "abc@123@123",
    phone: "13888888888",
    country: "1",
    city: "1",
    hobbies: ["0", "1"],
    other: "abcd",
  };
};

const submit = ({ valid }) => {
  message[valid ? "success" : "error"](valid ? "success" : "failed");
};
</script>

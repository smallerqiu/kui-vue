<template>
  <div style="max-width: 600px">
    <Form
      :model="form"
      :size="size"
      :rules="rules"
      ref="formRef"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
    >
      <FormItem label="Size">
        <RadioGroup v-model="size" type="button">
          <RadioButton value="large" label="Large" />
          <RadioButton value="default" label="Default" />
          <RadioButton value="small" label="Small" />
        </RadioGroup>
      </FormItem>
      <FormItem label="E-mail" prop="email">
        <Input clearable placeholder="Please enter your email" />
      </FormItem>
      <FormItem label="Number" prop="number">
        <InputNumber placeholder="Please enter your number" />
      </FormItem>
      <FormItem label="Password" prop="password">
        <Input type="password" placeholder="Please enter password" />
      </FormItem>
      <FormItem label="Confirm Password" prop="confirm_password">
        <Input type="password" placeholder="Please enter password" />
      </FormItem>
      <FormItem label="Phone Number" prop="phone">
        <Input placeholder="Please enter phone number" />
      </FormItem>
      <FormItem label="Captcha" prop="captcha">
        <Input placeholder="Please enter captcha">
          <Button slot="suffix" :size="size" :disabled="time != 60" @click="sendCode">
            {{ time == 60 ? "Get verification code" : time + "(s)" }}
          </Button>
        </Input>
      </FormItem>
      <FormItem label="Country">
        <FormItem prop="country">
          <Select clearable style="width: 100%">
            <Option value="0" label="China" />
            <Option value="1" label="Russia" />
          </Select>
        </FormItem>
        <FormItem prop="city" label="city">
          <Select clearable style="width: 100%">
            <Option value="0" label="Shanghai" />
            <Option value="1" label="Wuhan" />
            <Option value="2" label="Hangzhou" />
          </Select>
        </FormItem>
      </FormItem>
      <FormItem label="TreeSelect" prop="tree">
        <TreeSelect style="width: 100%" :tree-data="treeData"> </TreeSelect>
      </FormItem>
      <FormItem label="Slider" prop="slider">
        <Slider />
      </FormItem>
      <FormItem label="Rate" prop="rate">
        <Rate />
      </FormItem>
      <FormItem label="Gender" prop="gender">
        <RadioGroup>
          <Radio value="0" label="Girl" />
          <Radio value="1" label="Boy" />
        </RadioGroup>
      </FormItem>
      <FormItem label="One" prop="one">
        <Radio label="Only One?" />
      </FormItem>
      <FormItem label="System" prop="system">
        <RadioGroup type="button">
          <RadioButton value="0" label="Mac OS" />
          <RadioButton value="1" label="Windows" />
          <RadioButton value="2" label="Linux" />
        </RadioGroup>
      </FormItem>
      <FormItem label="Birthday" prop="birthday">
        <DatePicker clearable />
      </FormItem>
      <FormItem label="Hobby" prop="hobbies">
        <CheckboxGroup>
          <Checkbox value="0" label="Football" />
          <Checkbox value="1" label="Music" />
          <Checkbox value="2" label="Photograph" />
          <Checkbox value="3" label="Tennis" />
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Hardcore" prop="hardcore">
        <KSwitch true-text="Yes" false-text="No" />
      </FormItem>
      <FormItem label="Other" prop="other">
        <TextArea placeholder="Maximum 10 characters" v-model="form.other" />
      </FormItem>
      <FormItem prop="readme" :wrapperCol="{ offset: 6 }">
        <Checkbox>我已阅读 <a>服务条款</a> </Checkbox>
      </FormItem>
      <FormItem :wrapperCol="{ offset: 6 }">
        <Button type="primary" @click="submit">Submit</Button>
        <Button style="margin: 0 10px" @click="reset">Reset</Button>
        <Button theme="dashed" @click="setValue">Set Value</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { message } from "kui-vue";
import { reactive, ref } from "vue";
const validatePass = (rule, value, callback) => {
  if (value !== form.value.password) {
    return callback(new Error("Please confirm the password"));
  }
  callback();
};
const validateReadme = (rule, value, callback) => {
  if (value !== true) {
    return callback(new Error("请阅读服务条款"));
  }
  callback();
};
const labelCol = { span: 6 };
const wrapperCol = { span: 16 };
const time = ref(60);
const timer = ref(null);
const size = ref("default");
const formRef = ref(null);
const treeData = [
  {
    title: "food",
    key: "0",
    children: [
      { title: "apple", key: "0-1" },
      { title: "orange", key: "0-2" },
    ],
  },
];
const form = reactive({
  email: "",
  number: "",
  password: "",
  confirm_password: "",
  phone: "",
  captcha: "",
  slider: 3,
  rate: 0,
  tree: "",
  gender: "",
  one: false,
  system: "",
  birthday: "",
  country: "",
  city: "",
  hobbies: [],
  hardcore: "",
  other: "",
  readme: false,
});
const rules = {
  email: [
    { type: "mail", message: "Please input a valid email" },
    { required: true, message: "The email is required" },
  ],
  number: [
    { type: "number", message: "Please input a valid number" },
    { required: true, message: "The number is required" },
  ],
  password: [
    {
      min: 8,
      max: 20,
      message: "Please keep the password length between 8-20 digits.",
      trigger: "blur",
    },
    { required: true, message: "The password is required" },
  ],
  confirm_password: [
    {
      min: 8,
      max: 20,
      message: "Please keep the password length between 8-20 digits.",
      trigger: "blur",
    },
    { validator: validatePass },
    { required: true, message: "Please confirm the password" },
  ],
  phone: [
    { type: "mobile", message: "Please input the correct phone number" },
    { required: true, message: "Please input your phone number" },
  ],
  birthday: [{ required: true, message: "Please select your birthday" }],
  country: [{ required: true, message: "Please select your country" }],
  tree: [{ required: true, message: "Please select your food" }],
  city: [{ required: true, message: "Please select your city" }],
  captcha: [
    { type: "number", message: "The captcha must be a number" },
    { required: true, message: "Please input the captcha" },
  ],
  slider: [
    { min: 5, message: "Minimum value is 5" },
    { max: 50, message: "Maximum value is 50" },
  ],
  gender: [{ required: true, message: "Please select your gender" }],
  rate: [
    { required: true, message: "Please select your rate" },
    { min: 1, message: "The minimum value is 1" },
  ],
  one: [{ required: true, message: "霸王选项" }],
  system: [{ required: true, message: "Please select your system" }],
  hardcore: [{ required: true, message: "霸王选项" }],
  readme: [{ validator: validateReadme }],
  hobbies: [
    { required: true, message: "Please select your hobbies" },
    { max: 3, message: "Maximum value is 3" },
    { min: 2, message: "Minimum value is 2" },
  ],
  other: [
    { required: true, message: "Please fill in other information" },
    { max: 10, message: "Maximum characters is 10" },
  ],
};
const setValue = () => {
  Object.assign(form, {
    email: "master@k-ui.cn",
    password: "abc@123@123",
    confirm_password: "abc@123@123",
    phone: "13888888888",
    captcha: "8888",
    gender: "1",
    slider: 5,
    rate: 5,
    number: 5,
    tree: "0",
    system: "0",
    one: true,
    birthday: "1995-05-05",
    country: "1",
    city: "1",
    hobbies: ["0", "1"],
    hardcore: true,
    other: "Test data",
    readme: true,
  });
};
const sendCode = () => {
  time.value = 59;
  message.success("The verification code has been sent.");
  clearInterval(timer.value);
  timer.value = setInterval((e) => {
    if (time.value < 1) {
      clearInterval(timer.value);
      time.value = 60;
    } else {
      time.value -= 1;
    }
  }, 1000);
};
const submit = () => {
  formRef.value.validate(({ valid }) => {
    message[valid ? "success" : "error"](valid ? "success" : "failed");
  });
};
const reset = () => {
  formRef.value.reset();
};
</script>

<template>
  <div>
    <Form
      :model="form"
      :rules="rules"
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      @reset="handleReset"
      @submit="handleSubmit"
    >
      <Row>
        <Col v-bind="halfCol">
          <FormItem
            label="E-mail"
            prop="email"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <Input clearable placeholder="Please enter your email" />
          </FormItem>
        </Col>
        <Col v-bind="halfCol">
          <FormItem
            label="Number"
            prop="number"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <InputNumber placeholder="Please enter your number" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col v-bind="halfCol">
          <FormItem
            label="Password"
            prop="password"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <Input type="password" placeholder="Please enter password" />
          </FormItem>
        </Col>
        <Col v-bind="halfCol">
          <FormItem
            label="Confirm Password"
            prop="confirm_password"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <Input type="password" placeholder="Please enter password" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col v-bind="halfCol">
          <FormItem
            label="Phone Number"
            prop="phone"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <Input placeholder="Please enter phone number" />
          </FormItem>
        </Col>
        <Col v-bind="halfCol">
          <FormItem
            label="Captcha"
            prop="captcha"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <Input placeholder="Please enter captcha">
              <template #addonAfter>
                <Button :disabled="time !== 60" html-type="button" @click="sendCode">
                  {{ time === 60 ? "Get Captcha" : time + "(s)" }}
                </Button>
              </template>
            </Input>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col v-bind="halfCol">
          <FormItem
            label="Country"
            prop="country"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <Select clearable style="width: 100%">
              <Option value="0" label="China" />
              <Option value="1" label="Russia" />
            </Select>
          </FormItem>
        </Col>
        <Col v-bind="halfCol">
          <FormItem
            prop="city"
            label="City"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <Select clearable style="width: 100%">
              <Option value="0" label="Shanghai" />
              <Option value="1" label="Wuhan" />
              <Option value="2" label="Hangzhou" />
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col v-bind="halfCol">
          <FormItem
            label="TreeSelect"
            prop="tree"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <TreeSelect style="width: 100%" :tree-data="treeData"></TreeSelect>
          </FormItem>
        </Col>
        <Col v-bind="halfCol">
          <FormItem
            label="Birthday"
            prop="birthday"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <DatePicker clearable />
          </FormItem>
        </Col>
      </Row>

      <Row>
        <Col v-bind="halfCol">
          <FormItem
            label="Slider"
            prop="slider"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <Slider />
          </FormItem>
        </Col>
        <Col v-bind="halfCol">
          <FormItem
            label="Rate"
            prop="rate"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <Rate />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col v-bind="halfCol">
          <FormItem
            label="Gender"
            prop="gender"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <RadioGroup>
              <Radio :value="0" label="Girl" />
              <Radio :value="1" label="Boy" />
            </RadioGroup>
          </FormItem>
        </Col>
        <Col v-bind="halfCol">
          <FormItem label="One" prop="one" :label-col="halfLabelCol" :wrapper-col="halfWrapperCol">
            <Radio label="Only One?" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col v-bind="halfCol">
          <FormItem
            label="System"
            prop="system"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <RadioGroup type="button">
              <RadioButton :value="0" label="Mac OS" />
              <RadioButton :value="1" label="Windows" />
              <RadioButton :value="2" label="Linux" />
            </RadioGroup>
          </FormItem>
        </Col>
        <Col v-bind="halfCol">
          <FormItem
            label="Hardcore"
            prop="hardcore"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <Switch true-text="Yes" false-text="No" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col v-bind="halfCol">
          <FormItem
            label="Hobby"
            prop="hobbies"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <CheckboxGroup>
              <Checkbox value="0" label="Football" />
              <Checkbox value="1" label="Music" />
              <Checkbox value="2" label="Photograph" />
              <Checkbox value="3" label="Tennis" />
            </CheckboxGroup>
          </FormItem>
        </Col>
        <Col v-bind="halfCol">
          <FormItem
            label="Other"
            prop="other"
            :label-col="halfLabelCol"
            :wrapper-col="halfWrapperCol"
          >
            <TextArea v-model="form.other" placeholder="Maximum 10 characters" />
          </FormItem>
        </Col>
      </Row>
      <FormItem prop="readme" :wrapperCol="{ offset: 6 }">
        <Checkbox>
          I have read the
          <a>Terms of Service</a>
        </Checkbox>
      </FormItem>
      <FormItem :wrapperCol="{ offset: 6 }">
        <Button type="primary" html-type="submit">Submit</Button>
        <Button style="margin: 0 10px" html-type="reset">Reset</Button>
        <Button theme="dashed" html-type="button" @click="setValue">Set Value</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script setup lang="ts">
import { message, type FormRule, type FormSubmitEvent } from "kui-vue";
import { onBeforeUnmount, reactive, ref } from "vue";
const validatePass = (_: FormRule, value: unknown, callback: (error?: Error) => void) => {
  if (value !== form.password) {
    return callback(new Error("Please confirm the password"));
  }
  callback();
};
const validateReadme = (_: FormRule, value: unknown, callback: (error?: Error) => void) => {
  if (value !== true) {
    return callback(new Error("Please accept the Terms of Service"));
  }
  callback();
};
const labelCol = { span: 6 };
const wrapperCol = { span: 16 };

const halfCol = { xs: 24, md: 12 };
const halfLabelCol = { span: 8 };
const halfWrapperCol = { span: 16 };

const time = ref(60);
const timer = ref<ReturnType<typeof setInterval>>();
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
interface FormModel {
  email: string | null;
  number?: number | null;
  password: string | null;
  confirm_password: string | null;
  phone: string | null;
  captcha: string | null;
  slider: number | null;
  rate: number | null;
  tree?: string | null;
  gender?: number | null;
  one: boolean | null;
  system?: number | null;
  birthday?: Date | null;
  country?: string | null;
  city?: string | null;
  hobbies: string[] | null;
  hardcore: boolean | null;
  other: string | null;
  readme: boolean | null;
}

const form = reactive<FormModel>({
  email: "",
  number: undefined,
  password: "",
  confirm_password: "",
  phone: "",
  captcha: "",
  slider: 3,
  rate: 0,
  one: false,
  hobbies: [],
  hardcore: false,
  other: "",
  readme: false,
});
const rules: Record<string, FormRule[]> = {
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
    },
    { required: true, message: "The password is required" },
  ],
  confirm_password: [
    {
      min: 8,
      max: 20,
      message: "Please keep the password length between 8-20 digits.",
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
    { required: true, message: "Please select a value" },
    { min: 5, message: "Minimum value is 5" },
    { max: 50, message: "Maximum value is 50" },
  ],
  gender: [{ required: true, message: "Please select your gender" }],
  rate: [
    { required: true, message: "Please select your rate" },
    { min: 1, message: "The minimum value is 1" },
  ],
  one: [{ required: true, message: "Please select this option" }],
  system: [{ required: true, message: "Please select your system" }],
  hardcore: [{ required: true, message: "Please enable this option" }],
  readme: [{ validator: validateReadme, required: true }],
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
    gender: 1,
    slider: 5,
    rate: 5,
    number: 5,
    tree: "0",
    system: 0,
    one: true,
    birthday: new Date(1995, 4, 5),
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
  timer.value = setInterval(() => {
    if (time.value < 1) {
      clearInterval(timer.value);
      time.value = 60;
    } else {
      time.value -= 1;
    }
  }, 1000);
};
const handleSubmit = ({ valid }: FormSubmitEvent) => {
  message[valid ? "success" : "error"](valid ? "success" : "failed");
};
const handleReset = () => {
  clearInterval(timer.value);
  time.value = 60;
};

onBeforeUnmount(handleReset);
</script>

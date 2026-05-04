# Form

A form with data collection, validation, and submission functions, including checkboxes, radio buttons, input fields, dropdown selectors, and other elements.

## When to Use

- Used to create an entity or collect information.
- When input data types need to be validated.

## Examples

In `Modal` or `Drawer`, if you need to reset the form when opening the Modal or Drawer, please use asynchronous methods:

```javascript
// The component is not fully rendered before opening, reading the dom object is undefined at this time,
// The child component is not fully rendered, this.$refs.form is undefined, so it cannot be reset.
// Use asynchronous method.
// Of course, you can also reset the form when Modal or Drawer @close.
export default {
  methods: {
    open() {
      this.visible = true; // Open the modal first
      this.reset();
    },
    close() {
      this.reset();
      this.visible = false; // Close the modal after
    },
    reset() {
      this.$nextTick(() => {
        this.$refs.form.reset();
      });
      // or
      setTimeout(() => {
        this.$refs.form.reset();
      }, 0);
    },
  },
};
```

[Typical Form](./demo/basic.vue?show=vertical)

- Includes various form items, such as input fields, selectors, switches, radio buttons, checkboxes, etc.

[Alignment](./demo/align.vue?show=vertical)

- Choose the best label alignment based on specific goals and constraints.

[Form Validation](./demo/valid.vue?show=vertical)

- Help users discover and correct errors as early as possible, while preventing mistakes.

[Auxiliary Validation](./demo/length.vue?show=vertical)

- Validate certain data types.

[Multi-form Linkage](./demo/withmodal.vue?show=vertical)

- Outside the Form, submit the form via `submit` from the outside. Conversely, it's recommended to use `<Button htmlType="submit" />` to call the native submission logic.

[Custom Validation Rules](./demo/customvalid.vue?show=vertical)

- Use custom validation rules to complete form validation.

[Dynamic Validation Rules](./demo/dynamicvalid.vue?show=vertical)

- Execute different validation rules based on different conditions.

## Form API

| Property   | Description                                                                                           | Type                           | Default    |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| model      | Form data object                                                                                      | Object                         | -          |
| rules      | Form validation rules                                                                                 | bool                           | false      |
| name       | Form name, will be used as the id prefix for form fields                                              | string                         | -          |
| labelCol   | Label layout, same as the `<Col>` component, set span offset values, such as {span: 3, offset: 12}    | {span:number,offset:number}    | -          |
| wrapperCol | Control layout, same as the `<Col>` component, set span offset values, such as {span: 15, offset: 12} | {span:number,offset:number}    | -          |
| theme      | The component renders the theme                                                                       | string                         | -          |
| size       | Sub component size                                                                                    | string                         | -          |
| layout     | Form layout                                                                                           | [horizontal ,vertical ,inline] | horizontal |
| shape      | Sub component shape                                                                                   | [circle,square]                | horizontal |
| disabled   | Whether the form is enabled                                                                           | bool                           | true       |
| onReset    | Reset the entire form, reset all field values to empty and remove validation results                  | ()=> void                      | -          |
| onSubmit   | Trigger event when submitting the form                                                                | (e: FormSubmitEvent) => void   | -          |

## Form Expose API

| Property | Description                                                                      | Type                                                     | Default |
| -------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- | ------- |
| test     | Method for validating a single field in a form                                   | (key:string)=>void                                       | -       |
| reset    | Reset the entire form, clearing all field values and removing validation results | ()=>void                                                 | -       |
| submit   | Submit the form and validate                                                     | ()=>void                                                 | -       |
| validate | Validate the form                                                                | (callback?: (result: { valid: boolean }) => void) =>void | -       |

## FormItem API

| Property | Description                                                                     | Type       | Default |
| -------- | ------------------------------------------------------------------------------- | ---------- | ------- |
| prop     | Corresponds to the field in the form domain model. Required for form validation | string     | -       |
| label    | Label text                                                                      | string     | -       |
| rules    | Form validation rules                                                           | FormRule[] | -       |

## rules API

| Property  | Description                                                                                                                                                                                    | Type                                                                    | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------- |
| required  | Whether it is a required field                                                                                                                                                                 | bool                                                                    | false   |
| message   | Prompt message when validation fails                                                                                                                                                           | string                                                                  | -       |
| validator | Custom validation method, see example                                                                                                                                                          | (rule: FormRule, value: any, callback: (error?: Error) => void) => void | -       |
| type      | Data type validation. Provides three validation methods: `mobile` (phone), `mail` (email), `number` (numeric type judgment)                                                                    | string                                                                  | -       |
| pattern   | Custom regular expression validation. For example, password strength containing numbers, letters, and special symbols can be written as `/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,20}/` | string                                                                  | -       |
| min       | Minimum field length validation                                                                                                                                                                | number                                                                  | -       |
| max       | Maximum field length validation                                                                                                                                                                | number                                                                  | -       |

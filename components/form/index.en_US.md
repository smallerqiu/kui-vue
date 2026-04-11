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

<code src="./demo/basic.vue">Typical Form</code>
<code src="./demo/customvalid.vue"></code>
<code src="./demo/dynamicvalid.vue"></code>
<code src="./demo/length.vue"></code>
<code src="./demo/valid.vue"></code>
<code src="./demo/withmodal.vue"></code>

## Form API

| Property           | Description                                                                                                                                          | Type                     | Default |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------- |
| model              | Form data object                                                                                                                                     | Object                   | -       |
| rules              | Form validation rules                                                                                                                                | Boolean                  | false   |
| name               | Form name, will be used as the id prefix for form fields                                                                                             | String                   | -       |
| <s>label-width</s> | <s>The width of the form field label. All FormItems will inherit the label-width value of the Form component</s> `Not supported after version 3.1.5` | Number, String           | -       |
| labelCol           | Label layout, same as the `<Col>` component, set span offset values, such as {span: 3, offset: 12}                                                   | Object                   | -       |
| wrapperCol         | Control layout, same as the `<Col>` component, set span offset values, such as {span: 15, offset: 12}                                                | Object                   | -       |
| label-align        | The position of the form field label. Optional values are left, right, top                                                                           | String                   | right   |
| submit             | Submit the form and validate. Triggered when manually submitting the form                                                                            | Function({valid, model}) | -       |
| change             | Triggered when form data changes                                                                                                                     | Function(model)          | -       |
| test               | Method to validate a single field of the form                                                                                                        | Function                 | -       |
| reset              | Reset the entire form, reset all field values to empty and remove validation results                                                                 | Function                 | -       |
| theme              | The component renders the theme, defaulting to 'light'.                                                                                              | String                   | light   |

## FormItem API

| Property | Description                                                                     | Type   | Default |
| -------- | ------------------------------------------------------------------------------- | ------ | ------- |
| prop     | Corresponds to the field in the form domain model. Required for form validation | String | -       |
| label    | Label text                                                                      | String | -       |
| rules    | Form validation rules                                                           | Array  | -       |

## rules API

| Property  | Description                                                                                                                                                                                    | Type     | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| required  | Whether it is a required field                                                                                                                                                                 | Boolean  | false   |
| trigger   | Validation trigger method. Provides two trigger methods: `blur` (lose focus), `change` (value changed)                                                                                         | String   | blur    |
| message   | Prompt message when validation fails                                                                                                                                                           | String   | -       |
| validator | Custom validation method, see example                                                                                                                                                          | Function | -       |
| type      | Data type validation. Provides three validation methods: `mobile` (phone), `mail` (email), `number` (numeric type judgment)                                                                    | String   | -       |
| pattern   | Custom regular expression validation. For example, password strength containing numbers, letters, and special symbols can be written as `/(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,20}/` | String   | -       |
| min       | Minimum field length validation                                                                                                                                                                | Number   | -       |
| max       | Maximum field length validation                                                                                                                                                                | Number   | -       |

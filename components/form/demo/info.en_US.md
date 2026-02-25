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

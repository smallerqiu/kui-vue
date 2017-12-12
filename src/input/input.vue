<template>
   <div class="k-input">
      <template v-if="type !== 'textarea'">
         <input :id="elementId" :autocomplete="autocomplete" :spellcheck="spellcheck" ref="input" :type="type" :class="inputClasses" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength" :readonly="readonly" :name="name" :value="currentValue" :number="number" :autofocus="autofocus" @keyup.enter="handleEnter" @keyup="handleKeyup" @keypress="handleKeypress" @keydown="handleKeydown" @focus="handleFocus" @blur="handleBlur" @input="handleInput" @change="handleChange">
      </template>
      <textarea v-else :id="elementId" :autocomplete="autocomplete" :spellcheck="spellcheck" ref="textarea" :class="textareaClasses" :style="textareaStyles" :placeholder="placeholder" :disabled="disabled" :rows="rows" :maxlength="maxlength" :readonly="readonly" :name="name" :value="currentValue" :autofocus="autofocus" @keyup.enter="handleEnter" @keyup="handleKeyup" @keypress="handleKeypress" @keydown="handleKeydown" @focus="handleFocus" @blur="handleBlur" @input="handleInput">
      </textarea>
   </div>

</template>

<script>
export default {
  name: "Input",
  props: {
    mini: {
      type: Boolean,
      default: false
    },
    type: {
      validator(value) {
        return (
          ["text", "textarea", "password", "url", "email", "date"].indexOf(
            value
          ) >= 0
        );
      }
    },
    value: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    maxlength: { type: Number },
    disabled: { type: Boolean, default: false },
    rows: { type: Number, default: 2 },
    readonly: { type: Boolean, default: false },
    name: { type: String },
    number: { type: Boolean, default: false },
    autocomplete: {
      validator(value) {
        return ["on", "off"].indexOf(value) >= 0;
      },
      default: "off"
    },
    Id: {
      type: String
    }
  },
  computed: {
    inputClasses() {
      return [
        "input",
        {
          ["input-mini"]: !!this.mini,
          ['input-disabled']: this.disabled
        }
      ];
    },
    textareaClasses() {
      return [
        "input",
        {
          ["input-mini"]: !!this.mini,
          ['input-disabled']: this.disabled
        }
      ];
    }
  },
  methods: {
    handleEnter(event) {
      this.$emit("on-enter", event);
    },
    handleKeydown(event) {
      this.$emit("on-keydown", event);
    },
    handleKeypress(event) {
      this.$emit("on-keypress", event);
    },
    handleKeyup(event) {
      this.$emit("on-keyup", event);
    },
    handleIconClick(event) {
      this.$emit("on-click", event);
    },
    handleFocus(event) {
      this.$emit("on-focus", event);
    },
    handleBlur(event) {
      this.$emit("on-blur", event);
    },
    handleInput(event) {
      let value = event.target.value;
      if (this.number)
        value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit("input", value);
      this.setCurrentValue(value);
      this.$emit("on-change", event);
    },
    handleChange(event) {
      this.$emit("on-input-change", event);
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      
      this.currentValue = value;
    },
    focus() {
      if (this.type === "textarea") {
        this.$refs.textarea.focus();
      } else {
        this.$refs.input.focus();
      }
    },
    blur() {
      if (this.type === "textarea") {
        this.$refs.textarea.blur();
      } else {
        this.$refs.input.blur();
      }
    }
  }
};
</script>
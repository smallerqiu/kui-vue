<template>
  <div :style="styles" :class="classes" @mousemove="handleMove" @mouseout="handleOut">
    <template v-if="type !== 'textarea'">
      <i :class="iconClasses" @click="iconClick" v-if="icon && type!=='textarea'"></i>
      <input :id="elementId" :autocomplete="autocomplete" :spellcheck="spellcheck" ref="input" :type="type" :class="inputClasses" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength" :readonly="readonly" :name="name" :value="currentValue" :number="number" :autofocus="autofocus" @keyup.enter="handleEnter" @keyup="handleKeyup" @keypress="handleKeypress" @keydown="handleKeydown" @focus="handleFocus" @blur="handleBlur" @input="handleInput" @change="handleChange">
      <span class="k-input-clearable" v-if="type!='textarea'&&clearable&&clearableShow" @click.stop="clear"></span>
    </template>
    <textarea v-else :id="elementId" :autocomplete="autocomplete" :spellcheck="spellcheck" ref="textarea" :class="textareaClasses" :placeholder="placeholder" :disabled="disabled" :rows="rows" :maxlength="maxlength" :readonly="readonly" :name="name" :value="currentValue" :autofocus="autofocus" @keyup.enter="handleEnter" @keyup="handleKeyup" @keypress="handleKeypress" @keydown="handleKeydown" @focus="handleFocus" @blur="handleBlur" @input="handleInput">
    </textarea>
  </div>

</template>

<script>
import emitter from '../../mixins/emitter'
export default {
  name: "Input",
  mixins: [emitter],
  props: {
    autofocus: [Boolean, String, Number],
    spellcheck: Boolean,
    elementId: String,
    clearable: Boolean,
    mini: { type: Boolean, default: false },
    type: {
      validator(value) {
        return (["text", "textarea", "password", "url", "email", "date"].indexOf(value) >= 0);
      },
      default: 'text'
    },
    icon: String,
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
    Id: { type: String },
    width: { type: [Number, String] }
  },
  data() {
    return {
      currentValue: this.value,
      clearableShow: false,
      isFocus: false,
      isMove: false
    };
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    }
  },
  mounted() {
    this.currentValue = this.value;
  },
  computed: {
    iconClasses() {
      return [`k-ion-${this.icon}`];
    },
    classes() {
      return [
        "k-input-wp",
        {
          ["k-input-mini"]: this.mini
        }
      ];
    },
    styles() {
      return this.width && this.width > 0 ? { width: `${this.width}px` } : {};
    },
    inputClasses() {
      return [
        "k-input",
        {
          ["k-input-mini"]: !!this.mini,
          ["k-input-disabled"]: this.disabled
        }
      ];
    },
    textareaClasses() {
      return [
        "k-input",
        {
          ["k-input-mini"]: !!this.mini,
          ["k-input-disabled"]: this.disabled,
          ["k-textarea"]: this.type == "textarea"
        }
      ];
    }
  },
  methods: {
    clear() {
      this.setCurrentValue("");
      this.clearableShow = false;
    },
    handleMove() {
      this.clearableShow = this.currentValue && this.currentValue.length > 0;
      this.isMove = true;
    },
    handleOut() {
      this.isMove = false;
      if (!this.isFocus) {
        this.clearableShow = false;
      }
    },
    iconClick() {
      !this.disabled && this.$emit("iconClick");
    },
    handleEnter(event) {
      this.$emit("enter", event);
    },
    handleKeydown(event) {
      this.$emit("keydown", event);
    },
    handleKeypress(event) {
      this.$emit("keypress", event);
    },
    handleKeyup(event) {
      this.$emit("keyup", event);
    },
    handleFocus(event) {
      this.clearableShow = this.currentValue && this.currentValue.length > 0;
      this.$emit("focus", event);
      this.isFocus = true;
    },
    handleBlur(event) {
      if (!this.isMove) {
        this.clearableShow = false;
      }
      this.isFocus = false
      this.$emit("blur", event);
      this.dispatch('FormItem', 'form-item-blur', this.currentValue)
    },
    handleInput(event) {
      let value = event.target.value;
      this.clearableShow = value && value.length > 0;
      if (this.number)
        value = Number.isNaN(Number(value)) ? value : Number(value);
      this.$emit("input", value);
      this.setCurrentValue(value);
    },
    handleChange(event) {
      this.$emit("change", event.target.value);
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return;
      this.currentValue = value;
      this.dispatch('FormItem', 'form-item-change', this.currentValue)
    },
    focus() {
      if (this.type === "textarea") {
        this.$refs.textarea.focus();
      } else {
        this.$refs.input.focus();
      }
      this.isFocus = true;
    },
    blur() {
      if (this.type === "textarea") {
        this.$refs.textarea.blur();
      } else {
        this.$refs.input.blur();
      }
      this.isFocus = false;
    }
  }
};
</script>
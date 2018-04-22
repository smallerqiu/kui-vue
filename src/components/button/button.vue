<template>
  <button :type="buttonType" :class="classes" :disabled="disabled" @click="click">
    <i :class="iconClasses" v-if="icon"></i>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonType: {
      default: "button",
      validator(value) {
        return ["button", "submit", "reset"].indexOf(value) >= 0;
      }
    },
    icon: String,
    mini: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    hollow: { type: Boolean, default: false },
    type: {
      validator(value) {
        return (
          [
            "danger",
            "primary",
            "warning",
            "success",
            "gray",
            "link",
            "default"
          ].indexOf(value) >= 0
        );
      }
    },
    disabled: Boolean
  },
  computed: {
    iconClasses() {
      return [`k-ion-${this.icon}`];
    },
    classes() {
      return [
        "k-button",
        {
          [`k-button-${this.type}`]: !!this.type,
          ["is-mini"]: !!this.mini,
          ["is-circle"]: !!this.circle,
          ["is-hollow"]: !!this.hollow
        }
      ];
    }
  },
  methods:{
    click(e){
      this.$emit('click',e)
    }
  }
};
</script>
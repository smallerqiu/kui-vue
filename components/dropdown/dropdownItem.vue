<template>
  <li :class="itemClasses" @click.stop="click">
    <Icon :type="icon" v-if="icon" class="k-dropdown-item-icon" />
    <div class="k-dropdown-item-text">
      <slot></slot>
    </div>
    <span class="k-dropdown-item-shortcut">
      <slot name="shortcut" class="a123"></slot>
    </span>
  </li>
</template>
<script>
import emitter from "@/mixins/emitter";
export default {
  name: "DropdownItem",
  mixins: [emitter],
  props: {
    icon: String,
    disabled: Boolean,
    selected: Boolean,
    divided: Boolean
  },
  computed: {
    itemClasses() {
      return [
        "k-dropdown-item",
        {
          ["k-dropdown-item-disabled"]: this.disabled,
          ["k-dropdown-item-selected"]: this.selected,
          ["k-dropdown-item-divided"]: this.divided
        }
      ];
    }
  },
  methods: {
    click() {
      !this.disabled && this.dispatch('Dropdown', 'on-close')
    },
  },
};
</script>
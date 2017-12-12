<template>
   <button :type="buttonType" :class="classes" :disabled="disabled" @click="handle">
      <slot></slot>
   </button>
</template>

<script>
   export default {
      name: 'Button',
      props: {
         buttonType: {
            default: 'button',
            validator(value) {
               return ['button', 'submit', 'reset'].indexOf(value) >= 0
            }
         },
         mini: {
            type: Boolean,
            default: false
         },
         circle: {
            type: Boolean,
            default: false
         },
         type: {
            validator(value) {
               return ['danger', 'primary', 'warning', 'ghost', 'success', 'gray', 'link', 'default'].indexOf(value) >= 0
            }
         },
         disabled: Boolean,
      },
      computed: {
         classes() {
            return ['btn', {
               [`btn-${this.type}`]: !!this.type,
               ['btn-mini']: !!this.mini,
               ['btn-circle']: !!this.circle,
            }]
         }
      },
      methods: {
         handle(event) {
            this.$emit('click', event);
         }
      },
   }
</script>
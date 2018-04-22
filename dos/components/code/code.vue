<template>
  <div v-high class="k-code">
    <pre :style="styles" ref="rel">
        <code :class="lang"><slot></slot></code>
     </pre>
    <!-- <p>
      <k-button type="link" @click="toggle">{{text}}</k-button>
    </p> -->
  </div>
</template>
<script>
// import Button from "../../../src/components/button";
export default {
  // componets: { "k-button": Button },
  name: "Code",
  props: {
    lang: { type: String, default: "xml html" },
    expand: Boolean,
    // initHeight: { type: [Number, String], default: 0 }
  },
  data() {
    return {
      text: "展开",
      // Expand: this.expand,
      // height: this.initHeight
    };
  },
  computed: {
    styles() {
    //  return { height: `${this.height}px` };
    }
  },
  // mounted() {
  //   if (this.Expand) {
  //     this.height = this.$refs.rel.scrollHeight;
  //     this.text = "折叠";
  //   }
  // },
  // methods: {
  //   toggle() {
  //     this.Expand = !this.Expand;
  //     this.text = !this.Expand ? "展开" : "折叠";
  //     this.height = !this.Expand ? this.initHeight : this.$refs.rel.scrollHeight;
  //   }
  // }
};
</script> 
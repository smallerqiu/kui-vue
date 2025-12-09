import { withInstall } from "../utils/vue";
import { defineComponent } from "vue";

const ImageGroup = defineComponent({
  name: "ImageGroup",
  provide() {
    return {
      ImageGroup: this,
    };
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    updateCollection(mount, src) {
      if (mount) {
        this.data.push(src);
      } else {
        let index = this.data.indexOf(src);
        this.data.splice(index, 1);
      }
    },
  },
  render() {
    return <div class="k-image-group">{this.$slots.default}</div>;
  },
});
export default withInstall(ImageGroup);

import { withInstall } from "../utils/vue";
import { ref, provide } from "vue";
const ImageGroup = {
  name: "ImageGroup",
  setup(props, { slots }) {
    const data = ref([]);
    const updateCollection = (mount, src) => {
      if (mount) {
        this.data.push(src);
      } else {
        let index = this.data.indexOf(src);
        this.data.splice(index, 1);
      }
    };
    provide("ImageGroup", { data, updateCollection });
    
    return () => {
      return <div class="k-image-group">{slots.default?.()}</div>;
    };
  },
};
export default withInstall(ImageGroup);

import { defineComponent, ref, computed, onMounted, watch, h } from 'vue';
import transfer from "../directives/transfer";
import { setPlacement } from "../utils/placement";


export default defineComponent({
  name: 'BasePop',
  directives: {
    transfer,
  },
  props: {
    preCls: String,
    trigger: { type: String, default: "hover" },
    value: { type: Boolean },
    arrow: { type: Boolean, default: true },
    width: [Number, String],
    offsetLeft: { type: Number, default: 0 },
    placement: {
      validator(value) {
        return (
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].includes(value)
        );
      },
      default: "top"
    },
  },
  setup(props, { emit, slots }) {

    return () => {
      return <div></div>
    };
  }
});
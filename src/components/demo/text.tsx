import { Flex } from "kui-vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Text",
  props: {
    text: String,
  },
  setup(props, { slots }) {
    return () => (
      <Flex align="center" justify="center">
        {props.text || slots.default?.()}
      </Flex>
    );
  },
});

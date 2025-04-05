import { ref, defineComponent, Transition } from "vue";
import { getTranstionProp } from "kui-vue/base/transition";
import { CopyOutline, CaretHor } from "kui-icons";
import { useClipboard } from "@vueuse/core";
import Icon from "kui-vue/icon";
export default defineComponent({
  name: "Demo",
  setup(props, { slots }) {
    const expand = ref(false);
    const code = ref(null);

    const transProp = getTranstionProp();

    const { copy, isSupported } = useClipboard();

    const toggleExpand = () => {
      expand.value = !expand.value;
    };

    // const { copy: copyToClipboard } = useCopyToClipboard();

    const handleCopy = () => {
      try {
        copy(code.value.innerText);
        // Message.success("Copied!");
      } catch (e) {
        console.log(e);
        // Message.error("复制代码失败，请手动复制");
      }
    };
    return () => (
      <div class="k-demo markdown-body">
        <div class="k-demo-main">
          <div class="k-content"> {slots.component?.()}</div>
          <div class="k-desc">
            <div class="k-desc-content">{slots.description?.()}</div>
          </div>
          <div class="k-code-actions">
            <Tooltip title={expand.value ? "隐藏代码" : "显示代码"}>
              <Icon type={CaretHor} onClick={toggleExpand} style={{ "border-bottom-left-radius": !expand.value ? "12px" : 0 }} />
            </Tooltip>
            <Tooltip title="复制代码">
              <Icon type={CopyOutline} onClick={handleCopy} style={{ "border-bottom-right-radius": !expand.value ? "12px" : 0 }} />
            </Tooltip>
          </div>
        </div>
        <Transition {...transProp}>
          <div v-show={expand.value} class="k-code" ref={code}>
            {slots.code?.()}
          </div>
        </Transition>
      </div>
    );
  },
});

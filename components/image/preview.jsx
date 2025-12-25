import { defineComponent, ref, reactive, onMounted, onBeforeUnmount, watch, computed, Transition, Teleport } from "vue";
import Icon from "../icon";
import { Refresh, Close, ArrowDown, IconImage, ChevronUp, Loading, AddCircleOutline, RemoveCircleOutline } from "kui-icons";

export default defineComponent({
  name: "ImagePreview",
  props: {
    visible: Boolean,
    src: String,
    data: { type: Array, default: () => [] },
    showPanel: Boolean,
    type: { type: String, default: 'image' }, // image | media
  },
  emits: ["update:visible", "close", "switch"],
  setup(props, { emit, slots, expose }) {
    const state = reactive({
      scale: 1,
      rotate: 0,
      left: 0,
      top: 0,
      isDragging: false,
      loading: false,
      error: false,
      isShowPanel: props.showPanel,
    });

    const imgRef = ref(null);
    const startPos = { x: 0, y: 0 };

    // 计算属性：当前图片索引
    const currentIndex = computed(() => props.data.indexOf(props.src));

    // 重置变换状态
    const resetTransform = () => {
      state.scale = 1;
      state.rotate = 0;
      state.left = 0;
      state.top = 0;
    };

    const handleScale = (delta) => {
      const next = delta > 0 ? state.scale + 0.5 : state.scale - 0.5;
      state.scale = Math.max(1, Math.min(5, next));
    };

    const handleRotate = (dir) => {
      state.rotate += dir === 'left' ? -90 : 90;
    };

    const onMousedown = (e) => {
      if (state.scale <= 1 || e.button !== 0) return;
      state.isDragging = true;
      const event = e.touches ? e.touches[0] : e;
      startPos.x = event.clientX - state.left;
      startPos.y = event.clientY - state.top;

      const move = (me) => {
        if (!state.isDragging) return;
        const mEvent = me.touches ? me.touches[0] : me;
        state.left = mEvent.clientX - startPos.x;
        state.top = mEvent.clientY - startPos.y;
        me.preventDefault();
      };

      const up = () => {
        state.isDragging = false;
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
      };

      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    };

    const close = () => {
      emit("update:visible", false);
      emit("close");
    };

    const onSwitch = (dir) => {
      const nextIndex = currentIndex.value + dir;
      if (nextIndex >= 0 && nextIndex < props.data.length) {
        resetTransform();
        emit("switch", nextIndex);
      }
    };

    const onKeyDown = (e) => {
      if (!props.visible) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") onSwitch(-1);
      if (e.key === "ArrowRight") onSwitch(1);
    };

    watch(() => props.visible, (val) => {
      if (val) {
        resetTransform();
        document.addEventListener("keydown", onKeyDown);
      } else {
        document.removeEventListener("keydown", onKeyDown);
      }
    });

    return () => (
      <Teleport to="body">
        <Transition name="k-image-zoom">
          {props.visible && (
            <div class="k-image-preview-root">
              <div class="k-image-preview-mask" onClick={close} />
              
              {/* 控制栏 */}
              <div class="k-image-preview-toolbar">
                <div class="k-image-preview-info">
                  {currentIndex.value + 1} / {props.data.length}
                </div>
                <ul class="k-image-preview-actions">
                  <li class="k-image-preview-action"><Icon type={AddCircleOutline} onClick={() => handleScale(1)} /></li>
                  <li class="k-image-preview-action"><Icon type={RemoveCircleOutline} onClick={() => handleScale(-1)} /></li>
                  <li class="k-image-preview-action k-image-action-rotate-left"><Icon type={Refresh} onClick={() => handleRotate('left')} /></li>
                  <li class="k-image-preview-action k-image-action-rotate-right"><Icon type={Refresh} onClick={() => handleRotate('right')} /></li>
                  <li class="k-image-preview-action-divider"></li>
                  <li class="k-image-preview-action"><Icon type={Close} onClick={close} /></li>
                </ul>
              </div>
              {/* 内容区 */}
              <div class="k-image-preview-body">
                <div 
                  class="k-image-preview-canvas"
                  style={{
                    transform: `translate3d(${state.left}px, ${state.top}px, 0)`,
                    transition: state.isDragging ? 'none' : 'transform 0.3s'
                  }}
                >
                  {props.type === 'media' ? (
                    <video src={props.src} controls class="k-image-preview-el" />
                  ) : (
                    <img 
                      ref={imgRef}
                      src={props.src} 
                      style={{ transform: `scale(${state.scale}) rotate(${state.rotate}deg)` }}
                      onMousedown={onMousedown}
                      class="k-image-preview-el"
                    />
                  )}
                </div>

                {/* 切换按钮 */}
                {props.data.length > 1 && (
                  <>
                    <div 
                      class={["k-image-switch-btn left", { disabled: currentIndex.value === 0 }]}
                      onClick={() => onSwitch(-1)}
                    >
                      <Icon type={ChevronUp} style="transform: rotate(-90deg)" />
                    </div>
                    <div 
                      class={["k-image-switch-btn right", { disabled: currentIndex.value === props.data.length - 1 }]}
                      onClick={() => onSwitch(1)}
                    >
                      <Icon type={ChevronUp} style="transform: rotate(90deg)" />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </Transition>
      </Teleport>
    );
  }
});
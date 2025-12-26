import {
  defineComponent,
  ref,
  reactive,
  computed,
  Transition,
  Teleport,
} from "vue";
import Icon from "../icon";
import { getChildren } from "../utils/vnode";
import { withInstall } from "../utils/vue";
import {
  Refresh,
  Close,
  ArrowDown,
  IconImage,
  ChevronUp,
  Loading,
  AddCircleOutline,
  RemoveCircleOutline,
} from "kui-icons";

const ImagePreview = defineComponent({
  name: "ImagePreview",
  props: {
    type: String,
    src: String,
    visible: Boolean,
    data: { type: Array, default: () => [] },
  },
  emits: ["update:visible", "close", "switch"],
  setup(props, { emit, slots }) {
    const state = reactive({
      scale: 1,
      rotate: 0,
      left: 0,
      top: 0,
      isDragging: false,
    });

    const imgRef = ref(null);
    const startPos = { x: 0, y: 0 };
    const currentIndex = computed(() => props.data.indexOf(props.src));

    const handleRotate = (dir) => {
      state.rotate += dir === "left" ? -90 : 90;
      checkBoundary();
    };
    const resetTransform = () => {
      state.scale = 1;
      state.rotate = 0;
      state.left = 0;
      state.top = 0;
    };

    const onSwitch = (dir) => {
      const nextIndex = currentIndex.value + dir;
      if (nextIndex >= 0 && nextIndex < props.data.length) {
        resetTransform();
        emit("switch", nextIndex);
      }
    };

    const handleScale = (delta) => {
      const next = delta > 0 ? state.scale + 0.5 : state.scale - 0.5;
      state.scale = Math.max(1, Math.min(5, next));
      checkBoundary();
    };

    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      state.isDragging = true;
      const event = e.touches ? e.touches[0] : e;

      startPos.x = event.clientX - state.left;
      startPos.y = event.clientY - state.top;

      const move = (me) => {
        if (!state.isDragging) return;
        const mEvent = me.touches ? me.touches[0] : me;
        state.left = mEvent.clientX - startPos.x;
        state.top = mEvent.clientY - startPos.y;
      };

      const up = () => {
        state.isDragging = false;
        checkBoundary();
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);
      };

      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", up);
    };
    const close = () => {
      emit("update:visible", false);
    };

    const checkBoundary = () => {
      if (state.error) return;
      const { innerHeight, innerWidth } = window;
      const scale = state.scale;
      const top = state.top;
      const left = state.left;
      const vertical = state.vertical;

      if (!imgRef.value) return;

      let offsetWidth = imgRef.value.offsetWidth;
      let offsetHeight = imgRef.value.offsetHeight;
      let newWidth = offsetWidth + "";
      let newHeight = offsetHeight + "";

      if (!vertical) {
        newWidth = offsetHeight + "";
        newHeight = offsetWidth + "";
      }

      if (newWidth * scale >= innerWidth) {
        let maxLeft = (newWidth * scale - innerWidth) / 2;
        if (left >= maxLeft) {
          state.left = maxLeft;
        } else if (state.left < -maxLeft) {
          state.left = -maxLeft;
        }
      } else {
        state.left = 0;
      }

      if (newHeight * scale >= innerHeight) {
        let maxTop = (newHeight * scale - innerHeight) / 2;
        if (top >= maxTop) {
          state.top = maxTop;
        } else if (top < -maxTop) {
          state.top = -maxTop;
        }
      } else {
        state.top = 0;
      }
    };

    const download = () => {
      if (!state.error) {
        const x = new XMLHttpRequest();
        x.open("GET", state.src, true);
        x.responseType = "blob";
        x.onload = function () {
          const url = window.URL.createObjectURL(x.response);
          const a = document.createElement("a");
          a.href = url;
          a.download = "";
          a.click();
        };
        x.send();
      }
    };

    return () => {
      const { scale, rotate, left, top, data, loading, panelRight, type } =
        state;
      const imgStyle = {
        transform: `scale3d(${scale}, ${scale}, 1) rotate(${rotate}deg)`,
      };
      const moveStyle = {
        transform: `translate3d(${left}px, ${top}px, 0px)`,
        transition: state.isDragging ? "0s" : null,
      };
      const imgProps = {
        class: "k-image-preview-img",
        src: props.src,
        style: imgStyle,
        ref: imgRef,
        onMouseDown,
      };

      const tools = getChildren(slots.tool?.());

      return (
        <Teleport to="body">
          <Transition name="k-image-zoom">
            {props.visible && (
              <div class="k-image-preview-root">
                <div class="k-image-preview">
                  <div class="k-image-preview-mask" onClick={close}></div>
                  <div
                    class="k-image-preview-wrap"
                    style={{ right: panelRight + "px" }}
                  >
                    <ul class="k-image-preview-control">
                      <li class="k-image-preview-action" onClick={close}>
                        <Icon type={Close} />
                      </li>
                      <li class="k-image-preview-action-divider" />
                      {tools.map((tool) => {
                        return <li class="k-image-preview-action">{tool}</li>;
                      })}
                      <li class="k-image-preview-action" onClick={download}>
                        <Icon type={ArrowDown} />
                      </li>
                      <li
                        class={[
                          "k-image-preview-action",
                          { "k-image-preview-action-disabled": scale >= 5 },
                        ]}
                        onClick={() => handleScale(1)}
                      >
                        <Icon type={AddCircleOutline} />
                      </li>
                      <li
                        class={[
                          "k-image-preview-action",
                          { "k-image-preview-action-disabled": scale <= 1 },
                        ]}
                        onClick={() => handleScale(-1)}
                      >
                        <Icon type={RemoveCircleOutline} />
                      </li>
                      <li
                        class="k-image-preview-action k-image-preview-action-rotate-right"
                        onClick={() => handleRotate('left')}
                      >
                        <Icon type={Refresh} />
                      </li>
                      <li
                        class="k-image-preview-action k-image-preview-action-rotate-left"
                        onClick={() => handleRotate('right')}
                      >
                        <Icon type={Refresh} />
                      </li>
                    </ul>
                    <div class="k-image-preview-img-wrap" style={moveStyle}>
                      {type == "media" ? (
                        <video controls {...imgProps} />
                      ) : !state.error && !state.loading ? (
                        <img {...imgProps} />
                      ) : (
                        <div class="k-image-preview-img-error">
                          <Icon type={IconImage} />
                        </div>
                      )}
                    </div>
                    {props.data.length > 1
                      ? [
                          <div
                            class={[
                              "k-image-preview-switch-left",
                              {
                                "k-image-preview-switch-disabled":
                                  currentIndex.value === 0,
                              },
                            ]}
                            onClick={() => onSwitch(1)}
                          >
                            <Icon type={ChevronUp} />
                          </div>,
                          <div
                            class={[
                              "k-image-preview-switch-right",
                              {
                                "k-image-preview-switch-disabled":
                                  currentIndex.value === data.length - 1,
                              },
                            ]}
                            onClick={() => onSwitch()}
                          >
                            <Icon type={ChevronUp} />
                          </div>,
                        ]
                      : null}
                    {loading ? (
                      <div class="k-image-preview-loading">
                        <Icon type={Loading} spin />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </Teleport>
      );
    };
  },
});

export default withInstall(ImagePreview);

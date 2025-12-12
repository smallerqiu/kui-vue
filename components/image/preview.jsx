import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onBeforeUnmount,
  watch,
  nextTick,
  toRefs,
} from "vue";
import Icon from "../icon";
import { getChildren } from "../utils/element";
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
    origin: String,
    hasControl: Boolean,
    value: Boolean,
    data: { type: Array, default: () => [] },
    showPanel: Boolean,
  },
  setup(props, { emit, slots, expose }) {
    console.log(props,slots)
    const { value, type, src, origin, showPanel } = toRefs(props);
    const state = reactive({
      scale: 1,
      rotate: 0,
      startPos: { x: 0, y: 0 },
      initPos: { x: 0, y: 0 },
      left: 0,
      top: 0,
      isMouseDown: false,
      type: type.value,
      visible: value.value,
      src: origin.value || src.value,
      loading: false,
      error: false,
      vertical: true,
      isShowPanel: showPanel.value,
      panelRight: 0,
      touch: false,
    });

    const imgRef = ref(null);
    const panelRef = ref(null);

    const updatePanelRight = () => {
      state.panelRight =
        panelRef.value && state.isShowPanel ? panelRef.value.offsetWidth : 0;
    };

    const setRotate = (left) => {
      state.rotate = left ? state.rotate - 90 : state.rotate + 90;
      state.vertical = !state.vertical;
      resetPosition();
    };

    const setScale = (zoom) => {
      state.scale = zoom ? state.scale + 1 : state.scale - 1;
      state.scale = zoom ? Math.min(state.scale, 5) : Math.max(1, state.scale);
      resetPosition();
    };

    const close = () => {
      state.visible = false;
      emit("input", false);
      emit("close");
    };

    const mousewheel = (e) => {
      if (!state.visible) return;
      const { deltaY } = e;
      setScale(deltaY && deltaY < 0);
      e.stopPropagation();
      e.preventDefault();
    };

    const mousedown = (e) => {
      if (!state.visible) return;

      if (imgRef.value && imgRef.value.contains(e.target)) {
        if (e.button && e.button != 0) return;
        let clientX, clientY;
        if (e.touches && e.touches.length == 1) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          clientX = e.clientX;
          clientY = e.clientY;
        }
        state.isMouseDown = true;
        state.startPos = { x: clientX, y: clientY };
        state.initPos = { x: clientX, y: clientY };
        mousemove(e);
        const [e1, e2] = state.touch
          ? ["touchmove", "touchend"]
          : ["mousemove", "mouseup"];
        document.addEventListener(e1, mousemove, { passive: false });
        document.addEventListener(e2, mouseup, { passive: false });
      }
    };

    const resetPosition = () => {
      if (state.error) return;
      const { innerHeight, innerWidth } = window;
      const scale = state.scale;
      const top = state.top;
      const left = state.left;
      const vertical = state.vertical;

      if (!imgRef.value) return;

      let offsetWidth = imgRef.value.offsetWidth;
      let offsetHeight = imgRef.value.offsetHeight;
      let panelWidth =
        panelRef.value && state.isShowPanel ? panelRef.value.offsetWidth : 0;
      let newWidth = offsetWidth + "";
      let newHeight = offsetHeight + "";

      if (!vertical) {
        newWidth = offsetHeight + "";
        newHeight = offsetWidth + "";
      }

      if (newWidth * scale >= innerWidth - panelWidth) {
        let maxLeft = (newWidth * scale - (innerWidth - panelWidth)) / 2;
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

    const mouseup = () => {
      if (!state.visible) return;
      state.isMouseDown = false;
      resetPosition();
      const [e1, e2] = state.touch
        ? ["touchmove", "touchend"]
        : ["mousemove", "mouseup"];
      document.removeEventListener(e1, mousemove);
      document.removeEventListener(e2, mouseup);
    };

    const mousemove = (e) => {
      if (!state.visible) return;
      if (state.isMouseDown) {
        e.preventDefault();
        let clientX, clientY;
        if (e.touches && e.touches.length == 1) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          clientX = e.clientX;
          clientY = e.clientY;
        }
        const { x, y } = state.startPos;
        state.left += clientX - x;
        state.top += clientY - y;
        state.startPos = { x: clientX, y: clientY };
      }
    };

    const switchImage = (left) => {
      state.scale = 1;
      const data = props.data || [];
      const index = data.indexOf(state.src);
      let newIndex = index + 0;
      newIndex = left ? newIndex - 1 : newIndex + 1;
      newIndex = Math.max(0, newIndex);
      newIndex = Math.min(newIndex, data.length - 1);

      if (props.global && !slots.panel) {
        state.src = data[newIndex];
      }

      if ((left && index == 0) || (!left && index == data.length - 1)) return;
      emit("switch", newIndex);
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

    const togglePanel = () => {
      state.isShowPanel = !state.isShowPanel;
      emit("togglePanel", state.isShowPanel);
      nextTick(() => resetPosition());
      updatePanelRight();
    };

    const getPanel = () => {
      const panel = getChildren(slots.panel?.());
      if (panel.length) {
        return (
          <div
            class={[
              "k-image-preview-panel",
              { "k-image-preview-panel-hidden": !state.isShowPanel },
            ]}
            ref={panelRef}
          >
            <span
              class="k-image-preview-panel-action"
              onClick={() => togglePanel()}
            >
              <Icon type={ChevronUp} />
            </span>
            {panel}
          </div>
        );
      }
      return null;
    };

    watch(
      () => props.src,
      (src) => {
        state.src = src;
      }
    );

    watch(
      () => props.value,
      (value) => {
        state.visible = value;
        if (value) {
          nextTick(() => {
            updatePanelRight();
          });
        }
      }
    );

    watch(
      () => state.src,
      (src) => {
        if (state.type == "media" || !src) return;
        let image = new Image();
        let isCompleted = false;

        const cleanup = () => {
          if (isCompleted) return;
          isCompleted = true;
          image.onload = null;
          image.onerror = null;
          image = null;
        };
        state.loading = true;
        state.error = false;
        image.onload = () => {
          state.loading = false;
          cleanup();
        };
        image.onerror = () => {
          state.loading = false;
          state.error = true;
          cleanup();
        };
        image.src = src;
      }
    );

    watch(
      () => props.showPanel,
      (value) => {
        state.isShowPanel = value;
        updatePanelRight();
      }
    );

    onMounted(() => {
      if (typeof window !== "undefined") {
        const touch = !!(
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)
        );
        state.touch = touch;
        const event = touch ? "touchstart" : "mousedown";
        document.addEventListener(event, mousedown, { passive: false });
        document.addEventListener("mousewheel", mousewheel, { passive: false });
      }
    });

    onBeforeUnmount(() => {
      document.removeEventListener("mousewheel", mousewheel);
    });
    const show = (options = {}) => {
      if (options.src) {
        state.src = options.src;
      }
      if (options.type) {
        state.type = options.type;
      }
      state.visible = true;
    };

    const hide = () => {
      state.visible = false;
    };

    expose({ show, hide, togglePanel });

    return () => {
      const {
        scale,
        rotate,
        visible,
        src,
        left,
        top,
        data,
        loading,
        panelRight,
        type,
      } = state;
      const imgStyle = {
        transform: `scale3d(${scale}, ${scale}, 1) rotate(${rotate}deg)`,
      };
      const moveStyle = {
        transform: `translate3d(${left}px, ${top}px, 0px)`,
        transition: state.isMouseDown ? "0s" : null,
      };
      const imgProps = {
        class: "k-image-preview-img",
        attrs: { src },
        style: imgStyle,
        ref: imgRef,
      };

      const tools = getChildren(slots.tool?.());

      return (
        <div class="k-image-preview-root">
          <transition name="k-image-zoom">
            <div class="k-image-preview" v-show={visible}>
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
                    onClick={() => setScale(1)}
                  >
                    <Icon type={AddCircleOutline} />
                  </li>
                  <li
                    class={[
                      "k-image-preview-action",
                      { "k-image-preview-action-disabled": scale <= 1 },
                    ]}
                    onClick={() => setScale(0)}
                  >
                    <Icon type={RemoveCircleOutline} />
                  </li>
                  <li
                    class="k-image-preview-action k-image-preview-action-rotate-right"
                    onClick={() => setRotate(0)}
                  >
                    <Icon type={Refresh} />
                  </li>
                  <li
                    class="k-image-preview-action k-image-preview-action-rotate-left"
                    onClick={() => setRotate(1)}
                  >
                    <Icon type={Refresh} />
                  </li>
                </ul>
                <div class="k-image-preview-img-wrap" style={moveStyle}>
                  {type == "media" ? (
                    <video controls {...imgProps} />
                  ) : !state.error ? (
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
                              data.indexOf(src) == 0,
                          },
                        ]}
                        onClick={() => switchImage(1)}
                      >
                        <Icon type={ChevronUp} />
                      </div>,
                      <div
                        class={[
                          "k-image-preview-switch-right",
                          {
                            "k-image-preview-switch-disabled":
                              data.indexOf(src) == data.length - 1,
                          },
                        ]}
                        onClick={() => switchImage()}
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
              {getPanel()}
            </div>
          </transition>
        </div>
      );
    };
  },
});

export default withInstall(ImagePreview);

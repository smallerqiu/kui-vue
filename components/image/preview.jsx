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
import { getChildren } from "../utils/vnode";
import { withInstall } from "../utils/vue";
import {
  Close,
  ArrowDown,
  IconImage,
  ArrowBack,
  ArrowForward,
  Add,
  Remove,
  ChevronBack,
  ChevronUp,
  ChevronForward,
  Loading,
  RotateLeft,
  RotateRight,
} from "kui-icons/dist/icons";
import Slider from "../slider";
import { Button } from "../button";
import { loadImage } from "./utils";

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
  setup(props, { emit, slots, expose, listeners }) {
    const { value, type, src, origin, showPanel, data } = toRefs(props);
    const state = reactive({
      scale: 1,
      data,
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
    const maxScale = 10;
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
      state.scale = zoom
        ? Math.min(state.scale, maxScale)
        : Math.max(1, state.scale);
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

      state.src = data[newIndex];

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
      },
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
      },
    );

    watch(
      () => state.src,
      (src) => {
        if (state.type == "media" || !src) return;
        state.loading = true;
        loadImage(
          src,
          ({ width, height }) => {
            state.loading = false;
            state.error = false;
          },
          () => {
            state.loading = false;
            state.error = true;
          },
        );
      },
    );

    watch(
      () => props.showPanel,
      (value) => {
        state.isShowPanel = value;
        updatePanelRight();
      },
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

        document.addEventListener("keydown", escToClose);
      }
    });

    onBeforeUnmount(() => {
      document.removeEventListener("mousewheel", mousewheel);
      document.removeEventListener("keydown", escToClose);
    });
    const show = (options = {}) => {
      if (options?.props?.src) {
        state.src = options.props.src;
      }
      if (options?.props?.type) {
        state.type = options.props.type;
      }
      state.visible = true;
    };

    const escToClose = (e) => {
      if (e.keyCode === 27) {
        close();
      }
    };

    expose({ show, close, togglePanel });

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
          <div class="k-image-preview" v-show={visible}>
            <transition name="k-image-fade">
              <div
                class="k-image-preview-mask"
                onClick={close}
                v-show={visible}
              ></div>
            </transition>
            <div
              class="k-image-preview-wrap"
              style={{ right: panelRight + "px" }}
            >
              <transition name="k-image-fade">
                <ul class="k-image-preview-control" v-show={visible}>
                  <li class="k-image-preview-action-nav">
                    <Button
                      icon={ChevronBack}
                      type="text"
                      disabled={!data.length || data.indexOf(src) == 0}
                      onClick={() => switchImage(1)}
                    />
                    <span>
                      {data?.indexOf(src) + 1 || 1}/{data?.length || 1}
                    </span>
                    <Button
                      icon={ChevronForward}
                      type="text"
                      disabled={
                        !data.length || data.indexOf(src) == data.length - 1
                      }
                      onClick={() => switchImage()}
                    />
                  </li>
                  <li
                    class="k-image-preview-action k-image-preview-action-rotate-left"
                    onClick={() => setRotate(1)}
                  >
                    <Icon type={RotateLeft} />
                  </li>
                  <li
                    class="k-image-preview-action k-image-preview-action-rotate-right"
                    onClick={() => setRotate(0)}
                  >
                    <Icon type={RotateRight} />
                  </li>
                  <li
                    class={[
                      "k-image-preview-action",
                      { "k-image-preview-action-disabled": scale <= 1 },
                    ]}
                    onClick={() => setScale(0)}
                  >
                    <Icon type={Remove} />
                  </li>
                  <li class="k-image-preview-action k-image-preview-action-scale">
                    <Slider
                      value={state.scale}
                      min={1}
                      max={maxScale}
                      size="small"
                      tooltipVisible={false}
                      onChange={(val) => (state.scale = val)}
                    />
                  </li>
                  <li
                    class={[
                      "k-image-preview-action",
                      { "k-image-preview-action-disabled": scale >= 5 },
                    ]}
                    onClick={() => setScale(1)}
                  >
                    <Icon type={Add} />
                  </li>
                  <li class="k-image-preview-action" onClick={download}>
                    <Icon type={ArrowDown} />
                  </li>
                  {tools.map((tool) => {
                    return <li class="k-image-preview-action">{tool}</li>;
                  })}
                  <li class="k-image-preview-action-divider" />
                  <li class="k-image-preview-action" onClick={close}>
                    <Icon type={Close} />
                  </li>
                </ul>
              </transition>
              <div class="k-image-preview-img-wrap" style={moveStyle}>
                {type == "media" ? (
                  <video controls {...imgProps} v-show={visible} />
                ) : !state.error && !state.loading ? (
                  <img {...imgProps} v-show={visible} />
                ) : !loading ? (
                  <div class="k-image-preview-img-error">
                    <Icon type={IconImage} />
                  </div>
                ) : null}
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
                      <Icon type={ArrowBack} />
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
                      <Icon type={ArrowForward} />
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
        </div>
      );
    };
  },
});

export default withInstall(ImagePreview);

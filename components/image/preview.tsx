import {
  Add,
  ArrowBack,
  ArrowDown,
  ArrowForward,
  ChevronBack,
  ChevronForward,
  ChevronUp,
  Close,
  IconImage,
  Loading,
  Remove,
  RotateLeft,
  RotateRight,
} from "kui-icons";
import {
  type CSSProperties,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  type PropType,
  reactive,
  ref,
  toRefs,
  Transition,
  watch,
} from "vue";
import { Button } from "../button";
import Icon from "../icon";
import Slider from "../slider";
import { getChildren } from "../utils/vnode";

import type { TypeBoolean } from "../const/var";
import { getPosition } from "../utils/mouse";
import { loadImage } from "./utils";

export interface ImagePreviewProps {
  type?: string;
  src?: string;
  showPanel?: boolean;
  onClose?: () => void;
  onSwitch?: (index: number) => void;
  data?: string[];
}

const ImagePreview = defineComponent({
  name: "ImagePreview",
  props: {
    type: String,
    src: String,
    origin: String,
    hasControl: Boolean as TypeBoolean,
    value: Boolean as TypeBoolean,
    data: { type: Array as PropType<string[]>, default: () => [] },
    showPanel: Boolean as TypeBoolean,
  },
  setup(props, { emit, slots, expose }) {
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
      src: origin.value || src.value || "",
      loading: false,
      error: false,
      vertical: true,
      isShowPanel: showPanel.value,
      panelRight: 0,
      touch: false,
    });

    const refImage = ref<HTMLElement>();
    const panelRef = ref<HTMLElement>();
    const maxScale = 10;
    const updatePanelRight = () => {
      state.panelRight = panelRef.value && state.isShowPanel ? panelRef.value.offsetWidth : 0;
    };

    const setRotate = (left?: boolean) => {
      state.rotate = left ? state.rotate - 90 : state.rotate + 90;
      state.vertical = !state.vertical;
      resetPosition();
    };

    const setScale = (zoomIn?: boolean) => {
      state.scale = zoomIn ? state.scale + 1 : state.scale - 1;
      state.scale = zoomIn ? Math.min(state.scale, maxScale) : Math.max(1, state.scale);
      resetPosition();
    };

    const close = () => {
      state.visible = false;
      emit("input", false);
      emit("close");
    };

    const mousewheel = (e: WheelEvent) => {
      if (!state.visible) return;
      const { deltaY } = e;
      setScale(deltaY < 0);
      e.stopPropagation();
      e.preventDefault();
    };

    const mousedown = (e: MouseEvent | TouchEvent) => {
      if (!state.visible) return;

      if (refImage.value && refImage.value.contains(e.target as HTMLElement)) {
        if ((e as MouseEvent).button && (e as MouseEvent).button != 0) return;
        let [x, y] = getPosition(e);

        state.isMouseDown = true;
        state.startPos = { x, y };
        state.initPos = { x, y };
        mousemove(e);
        if (state.touch) {
          document.addEventListener("touchmove", mousemove as EventListener, {
            passive: false,
          });
          document.addEventListener("touchend", mouseup as EventListener, {
            passive: false,
          });
        } else {
          document.addEventListener("mousemove", mousemove as EventListener, {
            passive: false,
          });
          document.addEventListener("mouseup", mouseup as EventListener, { passive: false });
        }
      }
    };

    const resetPosition = () => {
      if (state.error) return;
      const { innerHeight, innerWidth } = window;
      const scale = state.scale;
      const top = state.top;
      const left = state.left;
      const vertical = state.vertical;

      if (!refImage.value) return;

      let offsetWidth = refImage.value.offsetWidth;
      let offsetHeight = refImage.value.offsetHeight;
      let panelWidth = panelRef.value && state.isShowPanel ? panelRef.value.offsetWidth : 0;
      let newWidth = offsetWidth;
      let newHeight = offsetHeight;

      if (!vertical) {
        newWidth = offsetHeight;
        newHeight = offsetWidth;
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

      if (state.touch) {
        document.removeEventListener("touchmove", mousemove as EventListener);
        document.removeEventListener("touchend", mouseup as EventListener);
      } else {
        document.removeEventListener("mousemove", mousemove as EventListener);
        document.removeEventListener("mouseup", mouseup as EventListener);
      }
    };

    const mousemove = (e: MouseEvent | TouchEvent) => {
      if (!state.visible) return;
      if (state.isMouseDown) {
        e.preventDefault();
        let [clientX, clientY] = getPosition(e);

        const { x, y } = state.startPos;
        state.left += clientX - x;
        state.top += clientY - y;
        state.startPos = { x: clientX, y: clientY };
      }
    };

    const switchImage = (left?: boolean) => {
      state.scale = 1;
      const data = props.data || [];
      const index = data.indexOf(state.src);
      let newIndex = index;
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
            <span class="k-image-preview-panel-action" onClick={() => togglePanel()}>
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
        state.src = src || "";
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

        state.loading = true;
        loadImage(
          src,
          () => {
            state.loading = false;
            state.error = false;
          },
          () => {
            state.loading = false;
            state.error = true;
          }
        );
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
        const touch =
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.TouchEvent !== undefined;
        state.touch = touch;
        const event = touch ? "touchstart" : "mousedown";
        document.addEventListener(event, mousedown, { passive: false });
        document.addEventListener("wheel", mousewheel, { passive: false });

        document.addEventListener("keydown", escToClose);
      }
    });

    onBeforeUnmount(() => {
      document.removeEventListener("wheel", mousewheel);
      document.removeEventListener("keydown", escToClose);
    });

    const show = (props: ImagePreviewProps) => {
      if (props?.src) {
        state.src = props.src;
      }
      if (props?.type) {
        state.type = props.type;
      }
      state.visible = true;
    };

    const escToClose = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        close();
      }
    };

    expose({ show, close, togglePanel });

    return () => {
      const { scale, rotate, visible, src, left, top, data, loading, panelRight, type } = state;
      const imgStyle = {
        transform: `scale3d(${scale}, ${scale}, 1) rotate(${rotate}deg)`,
      };
      const moveStyle: CSSProperties = {
        transform: `translate3d(${left}px, ${top}px, 0px)`,
        transition: state.isMouseDown ? "0" : undefined,
      };
      const imgProps = {
        class: "k-image-preview-img",
        src,
        style: imgStyle,
        ref: refImage,
      };

      const tools = getChildren(slots.tool?.());

      return (
        <div class="k-image-preview-root">
          <div class="k-image-preview" v-show={visible}>
            <Transition name="k-image-fade">
              <div class="k-image-preview-mask" onClick={close} v-show={visible}></div>
            </Transition>
            <div class="k-image-preview-wrap" style={{ right: panelRight + "px" }}>
              <Transition name="k-image-fade">
                <ul class="k-image-preview-control" v-show={visible}>
                  <li class="k-image-preview-action-nav">
                    <Button
                      icon={ChevronBack}
                      type="text"
                      disabled={!data.length || data.indexOf(src) == 0}
                      onClick={() => switchImage(true)}
                    />
                    <span>
                      {data?.indexOf(src) + 1 || 1}/{data?.length || 1}
                    </span>
                    <Button
                      icon={ChevronForward}
                      type="text"
                      disabled={!data.length || data.indexOf(src) == data.length - 1}
                      onClick={() => switchImage()}
                    />
                  </li>
                  <li
                    class="k-image-preview-action k-image-preview-action-rotate-left"
                    onClick={() => setRotate(true)}
                  >
                    <Icon type={RotateLeft} />
                  </li>
                  <li
                    class="k-image-preview-action k-image-preview-action-rotate-right"
                    onClick={() => setRotate()}
                  >
                    <Icon type={RotateRight} />
                  </li>
                  <li
                    class={[
                      "k-image-preview-action",
                      { "k-image-preview-action-disabled": scale <= 1 },
                    ]}
                    onClick={() => setScale()}
                  >
                    <Icon type={Remove} />
                  </li>
                  <li class="k-image-preview-action k-image-preview-action-scale">
                    <Slider
                      modelValue={state.scale}
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
                    onClick={() => setScale(true)}
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
              </Transition>

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
                          "k-image-preview-switch-disabled": data.indexOf(src) == 0,
                        },
                      ]}
                      onClick={() => switchImage(true)}
                    >
                      <Icon type={ArrowBack} />
                    </div>,
                    <div
                      class={[
                        "k-image-preview-switch-right",
                        {
                          "k-image-preview-switch-disabled": data.indexOf(src) == data.length - 1,
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

export default ImagePreview;

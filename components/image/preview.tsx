import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Image,
  Loading,
  Minus,
  Plus,
  RotateCcwSquare,
  RotateCwSquare,
  X,
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

import type { BooleanType } from "../const/types";
import { getPosition } from "../utils/mouse";
import { loadImage } from "./utils";

export type ImageType = "img" | "media";

export interface ImagePreviewProps {
  type?: ImageType;
  src?: string;
  showPanel?: boolean;
  onClose?: () => void;
  onSwitch?: (index: number) => void;
  data?: string[];
}

const ImagePreview = defineComponent({
  name: "ImagePreview",
  props: {
    type: String as PropType<ImageType>,
    src: String,
    origin: String,
    hasControl: Boolean as BooleanType,
    value: Boolean as BooleanType,
    data: { type: Array as PropType<string[]>, default: () => [] },
    showPanel: Boolean as BooleanType,
  },
  emits: {
    "update:value": (visible: boolean) => typeof visible === "boolean",
    close: () => true,
    switch: (index: number) => Number.isInteger(index),
    togglePanel: (visible: boolean) => typeof visible === "boolean",
  },
  setup(props, { emit, slots, expose }) {
    const { value, type, src, origin, showPanel } = toRefs(props);
    const state = reactive({
      scale: 1,
      data: [...props.data],
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
    let cancelLoad = () => {};
    let downloadRequest: XMLHttpRequest | null = null;
    let onClose: ImagePreviewProps["onClose"];
    let onSwitch: ImagePreviewProps["onSwitch"];
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
      mouseup();
      emit("update:value", false);
      emit("close");
      onClose?.();
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
        if (e instanceof MouseEvent && e.button !== 0) return;
        state.touch = e.type.startsWith("touch");
        const [x, y] = getPosition(e);

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
          document.addEventListener("touchcancel", mouseup as EventListener, {
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

      const offsetWidth = refImage.value.offsetWidth;
      const offsetHeight = refImage.value.offsetHeight;
      const panelWidth = panelRef.value && state.isShowPanel ? panelRef.value.offsetWidth : 0;
      let newWidth = offsetWidth;
      let newHeight = offsetHeight;

      if (!vertical) {
        newWidth = offsetHeight;
        newHeight = offsetWidth;
      }

      if (newWidth * scale >= innerWidth - panelWidth) {
        const maxLeft = (newWidth * scale - (innerWidth - panelWidth)) / 2;
        if (left >= maxLeft) {
          state.left = maxLeft;
        } else if (state.left < -maxLeft) {
          state.left = -maxLeft;
        }
      } else {
        state.left = 0;
      }

      if (newHeight * scale >= innerHeight) {
        const maxTop = (newHeight * scale - innerHeight) / 2;
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
      state.isMouseDown = false;
      if (state.visible) resetPosition();
      document.removeEventListener("touchmove", mousemove as EventListener);
      document.removeEventListener("touchend", mouseup as EventListener);
      document.removeEventListener("touchcancel", mouseup as EventListener);
      document.removeEventListener("mousemove", mousemove as EventListener);
      document.removeEventListener("mouseup", mouseup as EventListener);
    };

    const mousemove = (e: MouseEvent | TouchEvent) => {
      if (!state.visible) return;
      if (state.isMouseDown) {
        e.preventDefault();
        const [clientX, clientY] = getPosition(e);

        const { x, y } = state.startPos;
        state.left += clientX - x;
        state.top += clientY - y;
        state.startPos = { x: clientX, y: clientY };
      }
    };

    const switchImage = (left?: boolean) => {
      const data = state.data;
      if (!data.length) return;
      const index = data.indexOf(state.src);
      let newIndex = index < 0 ? 0 : index;
      newIndex = left ? newIndex - 1 : newIndex + 1;
      newIndex = Math.max(0, newIndex);
      newIndex = Math.min(newIndex, data.length - 1);
      if (newIndex === index) return;
      resetTransform();
      state.src = data[newIndex] || "";
      emit("switch", newIndex);
      onSwitch?.(newIndex);
    };

    const download = () => {
      if (!state.error) {
        downloadRequest?.abort();
        const x = new XMLHttpRequest();
        downloadRequest = x;
        x.open("GET", state.src, true);
        x.responseType = "blob";
        x.onload = function () {
          if (x.status < 200 || x.status >= 300) {
            downloadRequest = null;
            return;
          }
          const url = window.URL.createObjectURL(x.response);
          const a = document.createElement("a");
          a.href = url;
          a.download = "";
          a.click();
          window.URL.revokeObjectURL(url);
          downloadRequest = null;
        };
        x.onerror = () => (downloadRequest = null);
        x.send();
      }
    };

    const togglePanel = () => {
      state.isShowPanel = !state.isShowPanel;
      emit("togglePanel", state.isShowPanel);
      nextTick(() => {
        updatePanelRight();
        resetPosition();
      });
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
        cancelLoad();
        state.error = false;
        if (state.type == "media" || !src) {
          state.loading = false;
          return;
        }

        state.loading = true;
        cancelLoad = loadImage(
          src,
          () => {
            state.loading = false;
            state.error = false;
          },
          () => {
            state.loading = false;
            state.error = true;
          },
        );
      },
      { immediate: true },
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
        document.addEventListener("touchstart", mousedown, { passive: false });
        document.addEventListener("mousedown", mousedown, { passive: false });
        document.addEventListener("wheel", mousewheel, { passive: false });

        document.addEventListener("keydown", escToClose);
      }
    });

    onBeforeUnmount(() => {
      cancelLoad();
      downloadRequest?.abort();
      mouseup();
      document.removeEventListener("touchstart", mousedown);
      document.removeEventListener("mousedown", mousedown);
      document.removeEventListener("wheel", mousewheel);
      document.removeEventListener("keydown", escToClose);
    });

    const resetTransform = () => {
      state.scale = 1;
      state.rotate = 0;
      state.vertical = true;
      state.left = 0;
      state.top = 0;
    };

    const show = (options: ImagePreviewProps) => {
      resetTransform();
      state.data = [...(options.data || [])];
      state.src = options.src || "";
      state.type = options.type;
      state.isShowPanel = Boolean(options.showPanel);
      onClose = options.onClose;
      onSwitch = options.onSwitch;
      state.visible = true;
      nextTick(updatePanelRight);
    };

    const escToClose = (e: KeyboardEvent) => {
      if (e.key === "Escape" && state.visible) {
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
          <Transition name="k-image-fade" appear>
            <div class="k-image-preview" v-show={visible}>
              <div class="k-image-preview-mask" onClick={close} v-show={visible}></div>
              <div class="k-image-preview-wrap" style={{ right: panelRight + "px" }}>
                <ul class="k-image-preview-control" v-show={visible}>
                  <li class="k-image-preview-action-nav">
                    <Button
                      icon={ChevronLeft}
                      type="text"
                      disabled={!data.length || data.indexOf(src) == 0}
                      onClick={() => switchImage(true)}
                    />
                    <span>
                      {data?.indexOf(src) + 1 || 1}/{data?.length || 1}
                    </span>
                    <Button
                      icon={ChevronRight}
                      type="text"
                      disabled={!data.length || data.indexOf(src) == data.length - 1}
                      onClick={() => switchImage()}
                    />
                  </li>
                  <li
                    class="k-image-preview-action k-image-preview-action-rotate-left"
                    onClick={() => setRotate(true)}
                  >
                    <Icon type={RotateCcwSquare} />
                  </li>
                  <li
                    class="k-image-preview-action k-image-preview-action-rotate-right"
                    onClick={() => setRotate()}
                  >
                    <Icon type={RotateCwSquare} />
                  </li>
                  <li
                    class={[
                      "k-image-preview-action",
                      { "k-image-preview-action-disabled": scale <= 1 },
                    ]}
                    onClick={() => setScale()}
                  >
                    <Icon type={Minus} />
                  </li>
                  <li class="k-image-preview-action k-image-preview-action-scale">
                    <Slider
                      modelValue={state.scale}
                      min={1}
                      max={maxScale}
                      size="small"
                      tooltipVisible={false}
                      onChange={(val) => (state.scale = val as number)}
                    />
                  </li>
                  <li
                    class={[
                      "k-image-preview-action",
                      { "k-image-preview-action-disabled": scale >= maxScale },
                    ]}
                    onClick={() => setScale(true)}
                  >
                    <Icon type={Plus} />
                  </li>
                  <li class="k-image-preview-action" onClick={download}>
                    <Icon type={ArrowDown} />
                  </li>
                  {tools.map((tool) => {
                    return <li class="k-image-preview-action">{tool}</li>;
                  })}
                  <li class="k-image-preview-action-divider" />
                  <li class="k-image-preview-action" onClick={close}>
                    <Icon type={X} />
                  </li>
                </ul>

                <div class="k-image-preview-img-wrap" style={moveStyle}>
                  {type == "media" ? (
                    <video controls {...imgProps} v-show={visible} />
                  ) : !state.error && !state.loading ? (
                    <img {...imgProps} v-show={visible} />
                  ) : !loading ? (
                    <div class="k-image-preview-img-error">
                      <Icon type={Image} />
                    </div>
                  ) : null}
                </div>
                {data.length > 1
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
                        <Icon type={ArrowLeft} />
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
                        <Icon type={ArrowRight} />
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
          </Transition>
        </div>
      );
    };
  },
});

export default ImagePreview;

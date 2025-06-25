import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { usePrefixClass } from '../context';
import { getScrollbarWidth } from '../util/dom';

export const ScrollbarVertical = defineComponent({
  setup(props, { slots }) {
    const prefixClass = usePrefixClass();

    const wrapper = ref(null);

    const thumbHeight = ref(''); // percent string like "45%"
    const thumbTop = ref('');

    const getThumbHeight = () => {
      if (!wrapper.value) return;
      const el = wrapper.value;
      const heightPercentage = (el.clientHeight * 100) / el.scrollHeight;
      thumbHeight.value = heightPercentage < 100 ? `${heightPercentage}%` : '';
    };

    onMounted(getThumbHeight);

    const scrollbarWidth = getScrollbarWidth();

    const handleScroll = (evt) => {
      const el = evt.currentTarget;
      const { scrollHeight, scrollTop } = el;
      thumbTop.value = `${(scrollTop * 100) / scrollHeight}%`;
    };

    let draggable = false;
    let prevY = 0;

    const handleDragstart = (evt) => {
      evt.stopImmediatePropagation();
      const el = evt.currentTarget;
      const { offsetTop } = el;
      draggable = true;
      prevY = evt.clientY - offsetTop;
    };

    const handleDraging = (evt) => {
      if (!draggable || !wrapper.value) return;
      const { clientY } = evt;
      const { scrollHeight, clientHeight } = wrapper.value;
      const offsetY = clientY - prevY;
      const top = (offsetY * scrollHeight) / clientHeight;
      wrapper.value.scrollTop = top;
    };

    const handleDragend = () => {
      draggable = false;
    };

    onMounted(() => {
      document.addEventListener('mousemove', handleDraging);
      document.addEventListener('mouseup', handleDragend);
    });

    onUnmounted(() => {
      document.removeEventListener('mousemove', handleDraging);
      document.removeEventListener('mouseup', handleDragend);
    });

    return () => (
      <div class={`${prefixClass}-scrollbar`} style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          ref={wrapper}
          class={`${prefixClass}-scrollbar-wrap`}
          style={{ marginRight: `-${scrollbarWidth}px` }}
          onScroll={handleScroll}
        >
          {slots.default?.()}
        </div>
        <div class={`${prefixClass}-scrollbar-track`}>
          <div
            class={`${prefixClass}-scrollbar-thumb`}
            style={{ height: thumbHeight.value, top: thumbTop.value }}
            onMousedown={handleDragstart}
          ></div>
        </div>
      </div>
    );
  },
});
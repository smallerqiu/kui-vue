
import Icon from "../icon";
import scroll from "../directives/scroll";
import { ArrowUp } from "kui-icons/dist/icons";
import { withInstall } from '../utils/vue';
import { defineComponent, ref } from "vue";
const BackTop = defineComponent({
  name: "BackTop",
  directives: { scroll },
  props: {
    height: { type: [Number], default: 100 },
    right: [Number],
    bottom: [Number],
    target: {
      type: Function,
      default: () => {
        return document.body;
      },
    },
  },

  setup(props, { emit, slots }) {
    const visible = ref(false)

    const onScroll = () => {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
      visible.value = scrollTop >= props.height;
    }
    const onClick = (e) => {
      emit("click", e);
      props.target?.().scrollIntoView({
        behavior: 'smooth', // 
        block: 'start',     // align：start / center / end / nearest
      });
    }

    let children = slots.default?.()
    if (!children || children.length == 0) {
      children = <div class="k-backtop-content"><Icon type={ArrowUp} /></div>
    }
    const styles = {
      bottom: `${props.bottom}px`,
      left: `${props.right}px`
    }
    return () => {
      return (
        <transition name="k-backtop-fade">
          <div class="k-backtop" onClick={onClick} v-show={visible.value} v-scroll={onScroll} style={styles} >
            {children}
          </div>
        </transition>
      )
    }
  }
});
export default withInstall(BackTop);

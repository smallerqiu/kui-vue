import { nextTick, ref, onMounted, defineComponent } from 'vue'
const fix = v => ('0' + v).slice(-2)

const scrollToCenter = (e, animate = true) => {
  const li = e.currentTarget;
  const ul = li.parentElement;

  const ulHeight = ul.clientHeight;
  const liHeight = li.clientHeight;
  const scrollTop = li.offsetTop - (ulHeight / 2) + (liHeight / 2);
  console.log(scrollTop, li.offsetTop)
  if (animate) {
    ul.scrollTo({ top: scrollTop, behavior: 'smooth' });
  } else {
    ul.scrollTop = scrollTop;
  }
}
function Col(props) {
  return (<div class={`k-calendar-${props.type}`} >
    {
      props.list.map((item, index) => {
        return <span key={index} class={props.getClass(item)} onClick={(e) => props.onChange?.(e, item)}>{props.fix ? fix(item) : item}</span>
      })
    }
  </div>)
}

export default defineComponent({
  props: {
    items: Array,
    type: String,
    fix: Boolean,
    disabledTime: Function,
    current: Number
  },
  setup(props, { emit }) {
    const onChange = (e, item) => {
      scrollToCenter(e, true)
      emit('select', item)
    }
    const isDisabledTime = (types, value) => {
      let missTime = props.disabledTime()
      if (missTime && types in missTime && typeof missTime[types] === 'function') {
        let [a, b] = missTime[types]() || []
        if (a && b) {
          return value >= a && value <= b
        }
        return false
      }
      return false
    }
    const getClass = (item) => {
      return [
        `k-calendar-${props.type}-item`,
        {
          // [`k-calendar-${props.type}-this`]: props.value === item,
          [`k-calendar-item-selected`]: props.current !== null && props.current === item,
          [`k-calendar-${props.type}-disabled`]: isDisabledTime(props.disabledType, item),
        }
      ]
    }
    const refContainer = ref()
    onMounted(() => {
      nextTick(() => {
        const index = props.items.indexOf(props.current)
        // console.log(index)
        // props.type == 'months' && console.log(props.items, props.current)
        index >= 0 && scrollToCenter({ currentTarget: refContainer.value.children[index] }, false)
      })
    })
    return () => <Col fix={props.fix} onChange={onChange} ref={refContainer} type={props.type} list={props.items} getClass={getClass} />

  }
})

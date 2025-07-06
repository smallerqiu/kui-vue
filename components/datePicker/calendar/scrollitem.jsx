
const fix = v => ('0' + v).slice(-2)
const Col = (props) => {
  return <div class='k-calendar-time-picker-select'>
    {
      props.list.map((item, index) => {
        return <span key={index} class={() => props.getClass(item)} onClick={() => props.onChange(item)}>{fix(item)}</span>
      })
    }
  </div>
}

export function List(props) {
  const isDisabledTime = (types, value) => {
    let fdtime = props.disabledTime()
    if (fdtime && types in fdtime && typeof fdtime[types] === 'function') {
      let [a, b] = fdtime[types]() || []
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
        [`k-calendar-${props.type}-this`]: props.value === item,
        [`k-calendar-item-selected`]: props.value !== null && props.value === item,
        [`k-calendar-${props.type}-disabled`]: isDisabledTime(props.disabledType, item),
      }
    ]
  }
  return <Col list={props.items} getClass={getClass} />
}
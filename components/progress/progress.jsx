import Icon from '../icon'
export default {
  name: 'Progress',
  props: {
    percent: { type: Number, default: 0 },
    color: String,
    format: Function,
    status: {
      type: String, default: 'normal', validator: function (s) {
        return ['active', 'exception', 'success', 'normal'].indexOf(s) >= 0
      }
    },
    type: {
      type: String, default: 'line', validator: function (s) {
        return ['line', 'circle', 'dashboard'].indexOf(s) >= 0
      }
    },
    showInfo: { type: Boolean, default: true }
  },
  watch: {
    percent(v) {
      this.currentPercent = v
    }
  },
  data() {
    return {
      currentPercent: this.percent
    }
  },
  methods: {
    renderTip() {

      if (!this.showInfo) return null;

      let { currentPercent, status, type, format } = this,
        text = `${currentPercent}%`;
      if (typeof format == 'function') {
        text = format(currentPercent)
      } else {
        if (type == 'line') {
          if (this.currentPercent == 100) {
            text = <Icon type="checkmark-circle" />
          }
          if (status == 'exception')
            text = <Icon type="close-circle" />
        }
        if (type == 'circle') {
          if (this.currentPercent == 100) {
            text = <Icon type="checkmark" />
          }
          if (status == 'exception')
            text = <Icon type="close" />
        }
      }
      return <span class="k-progress-text">{text}</span>

    },
    renderCircle(radius, percent, strokeWidth, strokeColor, gap = 0, dashboard) {
      let offsetRadius = radius - strokeWidth / 2,
        benginX = 0,
        benginY = - offsetRadius,
        endX = 0,
        endY = -2 * offsetRadius;

      let d = `M ${radius},${radius} 
               m ${benginX}, ${(dashboard ? -1 : 1) * benginY} 
               a ${offsetRadius},${offsetRadius} 0 1 1 ${endX}, ${(dashboard ? 1 : -1) * endY} 
               a ${offsetRadius},${offsetRadius} 0 1 1 ${(dashboard ? 1 : -1) * endX},${(dashboard ? -1 : 1) * endY}`,
        len = Math.PI * 2 * radius,
        len2 = Math.PI * (dashboard ? 1.5 : 2) * radius,
        style = {
          strokeDasharray: `${(percent / 100) * (len2 - gap)}px ${len}px`, //长度,间距
          transition: `stroke-dasharray .3s ease 0s,stroke-width 0.06s ease 0.3s`,
          strokeDashoffset: dashboard ? -30 : 0,
          stroke: strokeColor
        };
      let ds = null
      if (dashboard) {
        ds = {
          strokeDasharray: `${(75 / 100) * (len)}px ${len}px`, //长度,间距
          strokeDashoffset: -30,
        }
      }

      return (<svg viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
        <path d={d} fill="none" stroke-width={strokeWidth} class="k-progress-inner" style={ds} />
        <path d={d} fill="none" stroke-width={percent == 0 ? 0 : strokeWidth} stroke-linecap="round" style={style} class="k-progress-bg" />
      </svg>)
    },
    renderGress() {
      let { currentPercent, type, color } = this
      if (type == 'line') {
        return <div class="k-progress-inner">
          <div class="k-progress-bg" style={`width:${currentPercent}%;background-color:${color};`}></div>
        </div>
      } else if (type == 'circle') {
        return this.renderCircle(50, currentPercent, 6, color, 17)
      } else if (type == 'dashboard') {
        return this.renderCircle(50, currentPercent, 6, color, 0, true)
      }
    }
  },
  render() {
    let { type, status, currentPercent } = this
    if (currentPercent == 100) {
      status = 'success'
    }
    let classes = ['k-progress', `k-progress-${type}`, `k-progress-${status}`, { 'k-progress-hide-info': !this.showInfo }]
    let tipNode = this.renderTip()
    let gress = this.renderGress()
    return (
      <div class={classes}>
        {[gress, tipNode]}
      </div>
    )
  }
}
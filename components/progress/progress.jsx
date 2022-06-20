import Icon from '../icon'
import { CheckmarkCircle, CloseCircle, Close, Checkmark } from 'kui-icons'
export default {
  name: 'Progress',
  props: {
    percent: { type: Number, default: 0 },
    strokeWidth: { type: Number, default: 6 },
    color: String,
    format: Function,
    width: Number,
    strokeHeight: Number,
    gapDegree: { type: Number, default: 75 },
    strokeColor: Object,
    strokeLinecap: { type: String, default: 'round' },
    size: {
      type: String, default: 'default', validator: function (s) {
        return ['small', 'default'].indexOf(s) >= 0
      }
    },
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

      let { currentPercent, status, type, format, $slots } = this,
        text = `${currentPercent}%`;
      if (typeof format == 'function' && !$slots.format) {
        text = format(currentPercent)
      } else {
        if (type == 'line') {
          if (this.currentPercent == 100) {
            text = <Icon type={CheckmarkCircle} />
          }
          if (status == 'exception')
            text = <Icon type={CloseCircle} />
        }
        if (type == 'circle') {
          if ($slots.format) {
            text = $slots.format
          } else {
            if (this.currentPercent == 100) {
              text = <Icon type={Checkmark} />
            }
            if (status == 'exception')
              text = <Icon type={Close} />
          }
        }
      }
      return <div class="k-progress-text">{text}</div>

    },
    renderCircle(percent, strokeColor, dashboard) {
      let { strokeWidth } = this
      let radius = 50 - strokeWidth / 2,
        benginX = 0,
        benginY = radius,
        endX = 0,
        endY = 2 * radius;
      let gapDegree = this.gapDegree;
      gapDegree = Math.max(0, gapDegree)
      gapDegree = Math.min(259, gapDegree)
      let d = `M 50,50 
               m ${benginX}, ${benginY} 
               a ${radius},${radius} 0 1 1 ${endX}, ${-endY} 
               a ${radius},${radius} 0 1 1 ${-endX},${endY}`,
        len = Math.PI * 2 * radius,
        // front color
        style = {
          strokeDasharray: `${(percent / 100) * (len - (dashboard ? gapDegree : 0))}px ${len}px`, //长度,间距 ,实线和虚线的长度
          transition: `stroke-dasharray .3s ease 0s;opacity ease 0s;`,
          strokeDashoffset: dashboard ? -gapDegree / 2 : 0,
          stroke: strokeColor,
          strokeLinecap: this.strokeLinecap,
          opacity: percent == 0 ? 0 : 1
        };

      let ds = {}

      if (dashboard) {
        ds = {
          strokeDasharray: `${len - gapDegree}px ${len}px`, //长度,间距
          strokeDashoffset: -gapDegree / 2,
          strokeLinecap: this.strokeLinecap,
        }
      }

      return (<svg viewBox={`0 0 ${50 * 2} ${50 * 2}`}>
        <path d={d} fill="none" stroke-width={strokeWidth} style={ds} class="k-progress-inner" />
        <path d={d} fill="none" stroke-width={strokeWidth} style={style} class="k-progress-bg" />
      </svg>)
    },
    renderGress() {
      let { currentPercent, type, color, strokeHeight } = this
      if (type == 'line') {
        let sty = {
          width: currentPercent + '%',
          backgroundColor: color
        }
        if (strokeHeight) {
          sty.height = strokeHeight + 'px'
        }
        return <div class="k-progress-inner">
          <div class="k-progress-bg" style={sty}></div>
        </div>
      } else if (type == 'circle') {
        return this.renderCircle(currentPercent, color)
      } else if (type == 'dashboard') {
        return this.renderCircle(currentPercent, color, true)
      }
    }
  },
  render() {
    let { type, status, currentPercent, size, width } = this
    if (currentPercent == 100) {
      status = 'success'
    }
    let classes = [
      'k-progress', `k-progress-${type}`,
      `k-progress-${status}`,
      { 'k-progress-sm': type == 'line' && size == 'small' },
      { 'k-progress-hide-info': !this.showInfo }
    ]
    let tipNode = this.renderTip()
    let gress = this.renderGress(), style;

    if (type != 'line' && width > 10) {
      style = { width: width + 'px', height: width + 'px' }
    }
    return (
      <div class={classes} style={style}>
        {[gress, tipNode]}
      </div>
    )
  }
}
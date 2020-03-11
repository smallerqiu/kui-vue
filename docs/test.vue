<script>
// import Info from '../components/datePicker/demo/info.md'
// import Base from '../components/datePicker/demo/base.md'
// import CN from '../components/datePicker/index.md'
const test = function (radius, percent, strokeColor, strokeWidth, circle) {
  let offsetRadius = radius - strokeWidth / 2,
    benginX = 0,
    benginY = - offsetRadius,
    endX = 0,
    endY = -2 * offsetRadius;

  let d = `M ${radius},${radius} m ${benginX}, ${benginY} 
    a ${offsetRadius},${offsetRadius} 0 1 1 ${endX}, ${-endY} 
    a ${offsetRadius},${offsetRadius} 0 1 1 ${-endX},${endY}`,
    style = null;
  if (circle) {
    const len = Math.PI * 2 * radius;
    style = {
      strokeDasharray: `${(percent / 100) * (len)}px ${len}px`,
      transition: `stroke-dasharray .3s ease 0s`,
    }
  }
  return (<svg viewBox={`0 0 ${radius} ${radius}`}>
    <path d={d} stroke="#f0f0f0" fill-opacity="0" stroke-width={strokeWidth} />
    <path d={d} style={style} stroke={strokeColor} stroke-linecap={linecap} fill-opacity="0" stroke-width={strokeWidth} />
  </svg>)
}
export default {
  data() {
    return {
      percent: 1
    }
  },
  methods: {
    aaa() {
      this.percent += 3
    }
  },
  render() {
    // let svgNode = test(120, this.percent, 'blue', 10, true)

    return (
      <div class="demo-select" style="width:120px;height:120px;">
        aaa:{this.percent}
        
        <button onClick={this.aaa}>wocao</button>
      </div>
    )
  }
}
</script> 
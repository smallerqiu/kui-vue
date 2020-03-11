const timing = {
  linear: function (timeFraction) {
    return timeFraction
  },
  quad: function (timeFraction) {
    return Math.pow(timeFraction, 2) //值越大 起步慢,但是加速度块
  },
  circ: function (timeFraction) { //匀加速
    return 1 - Math.sin(Math.acos(timeFraction)); 
  },
  back:function(x, timeFraction) { // 回弹
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
  },
  bounce(timeFraction) { //跳跳球
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  },
  elastic:function(x, timeFraction) {  //悠悠
    return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
  }
}
export default function animate(options) {
  window.requestAnimationFrame = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 1000 / 60) }
  window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
  var start = new Date()
  options = Object.assign({
    duration: 300,
    timing: function (timeFraction) {
      return timeFraction//Math.pow(timeFraction, 5)
    }
  }, options)
  requestAnimationFrame(function animate(time) {
    var timeFraction = (new Date() - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;
    var progress = options.timing(timeFraction)
    // progress=
    options.draw(progress);
    if (timeFraction < 1 && timeFraction > 0) {
      requestAnimationFrame(animate);
    }
  });
}
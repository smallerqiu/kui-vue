// from countUp.js
// thanks Jamie Perkins!

export class CountUp {
  constructor(target, endVal, options = {}) {
    this.defaults = {
      startVal: 0,
      decimalPlaces: 0,
      duration: 2,
      useEasing: true,
      useGrouping: true,
      useIndianSeparators: false,
      smartEasingThreshold: 999,
      smartEasingAmount: 333,
      separator: ",",
      decimal: ".",
      prefix: "",
      suffix: "",
      enableScrollSpy: false,
      scrollSpyDelay: 200,
      scrollSpyOnce: false,
    };

    this.options = Object.assign({}, this.defaults, options);

    this.el =
      typeof target === "string" ? document.getElementById(target) : target;

    this.error = "";
    this.paused = true;
    this.once = false;
    this.finalEndVal = null;

    this.formattingFn =
      this.options.formattingFn || this.formatNumber.bind(this);
    this.easingFn = this.options.easingFn || this.easeOutExpo.bind(this);

    endVal = endVal == null ? this.parse(this.el?.innerHTML || "0") : endVal;

    this.startVal = this.validateValue(this.options.startVal);
    this.frameVal = this.startVal;
    this.endVal = this.validateValue(endVal);

    this.options.decimalPlaces = Math.max(0, this.options.decimalPlaces);
    this.options.separator = String(this.options.separator);

    this.useEasing = this.options.useEasing;
    if (this.options.separator === "") {
      this.options.useGrouping = false;
    }

    this.resetDuration();

    if (this.el) {
      this.printValue(this.startVal);
    } else {
      this.error = "[CountUp] target is null or undefined";
    }

    if (typeof window !== "undefined" && this.options.enableScrollSpy) {
      window.__countUpScrollFns ||= [];
      window.__countUpScrollFns.push(() => this.handleScroll());

      window.onscroll = () => {
        window.__countUpScrollFns.forEach((fn) => fn());
      };

      this.handleScroll();
    }
  }

  count = (timestamp) => {
    if (!this.startTime) this.startTime = timestamp;

    const progress = timestamp - this.startTime;
    this.remaining = this.duration - progress;

    if (this.useEasing) {
      this.frameVal = this.countDown
        ? this.startVal -
          this.easingFn(progress, 0, this.startVal - this.endVal, this.duration)
        : this.easingFn(
            progress,
            this.startVal,
            this.endVal - this.startVal,
            this.duration
          );
    } else {
      this.frameVal =
        this.startVal +
        (this.endVal - this.startVal) * (progress / this.duration);
    }

    const wentPast = this.countDown
      ? this.frameVal < this.endVal
      : this.frameVal > this.endVal;

    this.frameVal = wentPast ? this.endVal : this.frameVal;
    this.frameVal = Number(this.frameVal.toFixed(this.options.decimalPlaces));

    this.printValue(this.frameVal);

    if (progress < this.duration) {
      this.rAF = requestAnimationFrame(this.count);
    } else if (this.finalEndVal !== null) {
      this.update(this.finalEndVal);
    } else {
      this.options.onCompleteCallback?.();
    }
  };

  start(callback) {
    if (this.error) return;

    this.options.onStartCallback?.();
    if (callback) this.options.onCompleteCallback = callback;

    if (this.duration > 0) {
      this.determineDirectionAndSmartEasing();
      this.paused = false;
      this.rAF = requestAnimationFrame(this.count);
    } else {
      this.printValue(this.endVal);
    }
  }

  pauseResume() {
    if (!this.paused) {
      cancelAnimationFrame(this.rAF);
    } else {
      this.startTime = null;
      this.duration = this.remaining;
      this.startVal = this.frameVal;
      this.determineDirectionAndSmartEasing();
      this.rAF = requestAnimationFrame(this.count);
    }
    this.paused = !this.paused;
  }

  reset() {
    cancelAnimationFrame(this.rAF);
    this.paused = true;
    this.resetDuration();
    this.startVal = this.validateValue(this.options.startVal);
    this.frameVal = this.startVal;
    this.printValue(this.startVal);
  }

  update(newEndVal) {
    cancelAnimationFrame(this.rAF);
    this.startTime = null;
    this.endVal = this.validateValue(newEndVal);
    if (this.endVal === this.frameVal) return;

    this.startVal = this.frameVal;
    if (this.finalEndVal == null) this.resetDuration();

    this.finalEndVal = null;
    this.determineDirectionAndSmartEasing();
    this.rAF = requestAnimationFrame(this.count);
  }

  /* ---------------- helpers ---------------- */

  determineDirectionAndSmartEasing() {
    const end = this.finalEndVal ?? this.endVal;
    this.countDown = this.startVal > end;

    const animateAmount = end - this.startVal;
    if (
      Math.abs(animateAmount) > this.options.smartEasingThreshold &&
      this.options.useEasing
    ) {
      this.finalEndVal = end;
      const up = this.countDown ? 1 : -1;
      this.endVal = end + up * this.options.smartEasingAmount;
      this.duration /= 2;
      this.useEasing = false;
    } else {
      this.finalEndVal = null;
      this.useEasing = this.options.useEasing;
    }
  }

  formatNumber(num) {
    const neg = num < 0 ? "-" : "";
    let result = Math.abs(num).toFixed(this.options.decimalPlaces);
    let [x1, x2] = result.split(".");
    x2 = x2 ? this.options.decimal + x2 : "";

    if (this.options.useGrouping) {
      x1 = x1.replace(/\B(?=(\d{3})+(?!\d))/g, this.options.separator);
    }

    return `${neg}${this.options.prefix}${x1}${x2}${this.options.suffix}`;
  }

  easeOutExpo(t, b, c, d) {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
  }

  printValue(val) {
    if (!this.el) return;
    const result = this.formattingFn(val);

    if (this.options.plugin?.render) {
      this.options.plugin.render(this.el, result);
    } else if (this.el.tagName === "INPUT") {
      this.el.value = result;
    } else {
      this.el.textContent = result;
    }
  }

  validateValue(value) {
    const n = Number(value);
    if (Number.isNaN(n)) {
      this.error = `[CountUp] invalid value: ${value}`;
      return null;
    }
    return n;
  }

  resetDuration() {
    this.startTime = null;
    this.duration = Number(this.options.duration) * 1000;
    this.remaining = this.duration;
  }

  parse(str) {
    const sep = this.options.separator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const dec = this.options.decimal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return parseFloat(
      str.replace(new RegExp(sep, "g"), "").replace(new RegExp(dec), ".")
    );
  }

  handleScroll() {
    if (this.once || !this.el) return;

    const bottom = window.innerHeight + window.scrollY;
    const rect = this.el.getBoundingClientRect();
    const top = rect.top + window.pageYOffset;
    const elBottom = top + rect.height;

    if (elBottom < bottom && elBottom > window.scrollY && this.paused) {
      this.paused = false;
      setTimeout(() => this.start(), this.options.scrollSpyDelay);
      if (this.options.scrollSpyOnce) this.once = true;
    } else if ((window.scrollY > elBottom || top > bottom) && !this.paused) {
      this.reset();
    }
  }
}

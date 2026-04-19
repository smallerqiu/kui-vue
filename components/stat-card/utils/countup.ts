// countup.ts
// Original from countUp.js by Jamie Perkins

export interface CountUpOptions {
  startVal?: number;
  decimalPlaces?: number;
  duration?: number;
  useEasing?: boolean;
  useGrouping?: boolean;
  useIndianSeparators?: boolean;
  smartEasingThreshold?: number;
  smartEasingAmount?: number;
  separator?: string;
  decimal?: string;
  prefix?: string;
  suffix?: string;
  enableScrollSpy?: boolean;
  scrollSpyDelay?: number;
  scrollSpyOnce?: boolean;
  formattingFn?: (value: number) => string;
  easingFn?: (t: number, b: number, c: number, d: number) => number;
  onStartCallback?: () => void;
  onCompleteCallback?: () => void;
  plugin?: {
    render?: (target: HTMLElement | HTMLInputElement, formattedValue: string) => void;
  };
}

export class CountUp {
  private readonly defaults: Required<CountUpOptions> = {
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
    formattingFn: undefined,
    easingFn: undefined,
    onStartCallback: undefined,
    onCompleteCallback: undefined,
    plugin: undefined,
  };

  public options: Required<CountUpOptions>;

  private el: HTMLElement | HTMLInputElement | null = null;
  private error: string = "";
  private paused: boolean = true;
  private once: boolean = false;
  private finalEndVal: number | null = null;

  private startVal: number = 0;
  private endVal: number = 0;
  private frameVal: number = 0;
  private duration: number = 2000;
  private remaining: number = 2000;
  private startTime: number | null = null;
  private rAF: number | null = null;
  private countDown: boolean = false;
  private useEasing: boolean = true;

  private formattingFn: (value: number) => string;
  private easingFn: (t: number, b: number, c: number, d: number) => number;

  constructor(
    target: string | HTMLElement | HTMLInputElement,
    endVal: number | null = null,
    options: CountUpOptions = {}
  ) {
    this.options = { ...this.defaults, ...options } as Required<CountUpOptions>;

    this.el = typeof target === "string" ? document.getElementById(target) : target;

    this.formattingFn = this.options.formattingFn || this.formatNumber.bind(this);
    this.easingFn = this.options.easingFn || this.easeOutExpo.bind(this);

    // 如果没有传入 endVal，则尝试从元素内容解析
    const initialEndVal =
      endVal == null ? this.parse(this.el?.textContent || this.el?.value || "0") : endVal;

    this.startVal = this.validateValue(this.options.startVal);
    this.frameVal = this.startVal;
    this.endVal = this.validateValue(initialEndVal);

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

    // ScrollSpy 支持
    if (typeof window !== "undefined" && this.options.enableScrollSpy) {
      if (!window.__countUpScrollFns) {
        (window as any).__countUpScrollFns = [];
      }
      (window as any).__countUpScrollFns.push(() => this.handleScroll());

      window.onscroll = () => {
        (window as any).__countUpScrollFns.forEach((fn: () => void) => fn());
      };

      this.handleScroll();
    }
  }

  private count = (timestamp: number): void => {
    if (!this.startTime) this.startTime = timestamp;

    const progress = timestamp - this.startTime;
    this.remaining = this.duration - progress;

    if (this.useEasing) {
      this.frameVal = this.countDown
        ? this.startVal - this.easingFn(progress, 0, this.startVal - this.endVal, this.duration)
        : this.easingFn(progress, this.startVal, this.endVal - this.startVal, this.duration);
    } else {
      this.frameVal = this.startVal + (this.endVal - this.startVal) * (progress / this.duration);
    }

    const wentPast = this.countDown ? this.frameVal < this.endVal : this.frameVal > this.endVal;

    if (wentPast) {
      this.frameVal = this.endVal;
    }

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

  public start(callback?: () => void): void {
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

  public pauseResume(): void {
    if (!this.paused) {
      cancelAnimationFrame(this.rAF!);
    } else {
      this.startTime = null;
      this.duration = this.remaining;
      this.startVal = this.frameVal;
      this.determineDirectionAndSmartEasing();
      this.rAF = requestAnimationFrame(this.count);
    }
    this.paused = !this.paused;
  }

  public reset(): void {
    cancelAnimationFrame(this.rAF!);
    this.paused = true;
    this.resetDuration();
    this.startVal = this.validateValue(this.options.startVal);
    this.frameVal = this.startVal;
    this.printValue(this.startVal);
  }

  public update(newEndVal: number): void {
    cancelAnimationFrame(this.rAF!);
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

  private determineDirectionAndSmartEasing(): void {
    const end = this.finalEndVal ?? this.endVal;
    this.countDown = this.startVal > end;

    const animateAmount = Math.abs(end - this.startVal);

    if (animateAmount > this.options.smartEasingThreshold && this.options.useEasing) {
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

  private formatNumber(num: number): string {
    const neg = num < 0 ? "-" : "";
    let result = Math.abs(num).toFixed(this.options.decimalPlaces);
    let [x1, x2] = result.split(".");

    x2 = x2 ? this.options.decimal + x2 : "";

    if (this.options.useGrouping) {
      x1 = x1.replace(/\B(?=(\d{3})+(?!\d))/g, this.options.separator);
    }

    return `${neg}${this.options.prefix}${x1}${x2}${this.options.suffix}`;
  }

  private easeOutExpo(t: number, b: number, c: number, d: number): number {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
  }

  private printValue(val: number): void {
    if (!this.el) return;

    const result = this.formattingFn(val);

    if (this.options.plugin?.render) {
      this.options.plugin.render(this.el, result);
    } else if (this.el.tagName === "INPUT") {
      (this.el as HTMLInputElement).value = result;
    } else {
      this.el.textContent = result;
    }
  }

  private validateValue(value: number | string): number {
    const n = Number(value);
    if (Number.isNaN(n)) {
      this.error = `[CountUp] invalid value: ${value}`;
      return 0; // 返回 0 避免后续 NaN 传播
    }
    return n;
  }

  private resetDuration(): void {
    this.startTime = null;
    this.duration = Number(this.options.duration) * 1000;
    this.remaining = this.duration;
  }

  private parse(str: string): number {
    const sep = this.options.separator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const dec = this.options.decimal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const cleaned = str.replace(new RegExp(sep, "g"), "").replace(new RegExp(dec), ".");
    return parseFloat(cleaned);
  }

  private handleScroll(): void {
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

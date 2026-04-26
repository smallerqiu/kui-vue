//dayjs@1.11.20/es2022/locale/zh-cn.mjs
import * as __0$ from "dayjs";
var require = (n) => {
  const e = (m) => (typeof m.default < "u" ? m.default : m),
    c = (m) => Object.assign({ __esModule: true }, m);
  switch (n) {
    case "dayjs":
      return e(__0$);
    default:
      console.error('module "' + n + '" not found');
      return null;
  }
};
var r = Object.create;
var m = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var c = Object.getPrototypeOf,
  y = Object.prototype.hasOwnProperty;
var h = ((_) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
      ? new Proxy(_, { get: (t, d) => (typeof require < "u" ? require : t)[d] })
      : _)(function (_) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + _ + '" is not supported');
});
var p = (_, t) => () => (t || _((t = { exports: {} }).exports, t), t.exports);
var M = (_, t, d, l) => {
  if ((t && typeof t == "object") || typeof t == "function")
    for (let e of u(t))
      !y.call(_, e) &&
        e !== d &&
        m(_, e, { get: () => t[e], enumerable: !(l = f(t, e)) || l.enumerable });
  return _;
};
var L = (_, t, d) => (
  (d = _ != null ? r(c(_)) : {}),
  M(t || !_ || !_.__esModule ? m(d, "default", { value: _, enumerable: !0 }) : d, _)
);
var o = p((i, s) => {
  (function (_, t) {
    typeof i == "object" && typeof s < "u"
      ? (s.exports = t(h("dayjs")))
      : typeof define == "function" && define.amd
        ? define(["dayjs"], t)
        : ((_ = typeof globalThis < "u" ? globalThis : _ || self).dayjs_locale_zh_cn = t(_.dayjs));
  })(i, function (_) {
    "use strict";
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var d = t(_),
      l = {
        name: "zh-cn",
        weekdays:
          "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split(
            "_"
          ),
        weekdaysShort:
          "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split(
            "_"
          ),
        weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
        months:
          "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split(
            "_"
          ),
        monthsShort:
          "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split(
            "_"
          ),
        ordinal: function (e, Y) {
          return Y === "W" ? e + "\u5468" : e + "\u65E5";
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY\u5E74M\u6708D\u65E5",
          LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",
          LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",
          l: "YYYY/M/D",
          ll: "YYYY\u5E74M\u6708D\u65E5",
          lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
          llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm",
        },
        relativeTime: {
          future: "%s\u5185",
          past: "%s\u524D",
          s: "\u51E0\u79D2",
          m: "1 \u5206\u949F",
          mm: "%d \u5206\u949F",
          h: "1 \u5C0F\u65F6",
          hh: "%d \u5C0F\u65F6",
          d: "1 \u5929",
          dd: "%d \u5929",
          M: "1 \u4E2A\u6708",
          MM: "%d \u4E2A\u6708",
          y: "1 \u5E74",
          yy: "%d \u5E74",
        },
        meridiem: function (e, Y) {
          var n = 100 * e + Y;
          return n < 600
            ? "\u51CC\u6668"
            : n < 900
              ? "\u65E9\u4E0A"
              : n < 1100
                ? "\u4E0A\u5348"
                : n < 1300
                  ? "\u4E2D\u5348"
                  : n < 1800
                    ? "\u4E0B\u5348"
                    : "\u665A\u4E0A";
        },
      };
    return (d.default.locale(l, null, !0), l);
  });
});
var a = L(o()),
  H = a.default ?? a;
export { H as default };

/*!
 * kui-vue v4.0.0
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Homepage: https://k-ui.cn
 * Author: Qiu / https://chuchur.com
 */
import {
  defineComponent as e,
  createVNode as t,
  ref as l,
  computed as a,
  Transition as r,
  withDirectives as n,
  vShow as o,
  onBeforeUnmount as i,
  onMounted as s,
  nextTick as u,
  watch as c,
  resolveDirective as d,
  inject as v,
  onUpdated as p,
  provide as m,
  isVNode as h,
  Comment as f,
  Text as g,
  Fragment as k,
  cloneVNode as y,
  toRefs as b,
  mergeProps as w,
  createTextVNode as x,
  reactive as S,
  getCurrentInstance as M,
  onUnmounted as C,
  resolveComponent as z,
  onBeforeMount as B,
  render as A,
  TransitionGroup as T,
  h as O,
} from "vue";
import N from "dayjs";
var V = "4.0.0";
function D(e, t, l, a, r, n, o) {
  try {
    var i = e[n](o),
      s = i.value;
  } catch (e) {
    return void l(e);
  }
  i.done ? t(s) : Promise.resolve(s).then(a, r);
}
function E(e, t, l) {
  return (
    (t = (function (e) {
      var t = (function (e, t) {
        if ("object" != typeof e || !e) return e;
        var l = e[Symbol.toPrimitive];
        if (void 0 !== l) {
          var a = l.call(e, t);
          if ("object" != typeof a) return a;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" == typeof t ? t : t + "";
    })(t)) in e
      ? Object.defineProperty(e, t, { value: l, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = l),
    e
  );
}
function L(e, t) {
  var l = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    (t &&
      (a = a.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      l.push.apply(l, a));
  }
  return l;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? L(Object(l), !0).forEach(function (t) {
          E(e, t, l[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l))
        : L(Object(l)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t));
          });
  }
  return e;
}
var j = (e) => (
    (e.install = function (t) {
      t.component(e.name, e);
    }),
    e
  ),
  I = j(
    e({
      name: "Icon",
      props: {
        type: [String, Array],
        size: [String, Number],
        color: String,
        spin: Boolean,
        strokeWidth: [String, Number],
      },
      setup(e, l) {
        var { emit: a, slots: r, attrs: n, listeners: o } = l;
        return () => {
          var l,
            a = ["k-icon", { "k-load-loop": e.spin }],
            i = { color: e.color };
          e.size && (i.fontSize = "".concat(e.size, "px"));
          var s = P(P({}, n), {}, { style: i, class: a }, o);
          return t("i", s, [
            t("svg", { viewBox: "0 0 512 512", width: "1em", height: "1em" }, [
              (Array.isArray(e.type) ? e.type : []).map((l) => {
                var a,
                  r,
                  n = l.s ? l.s : "fill:currentColor";
                if (e.strokeWidth) {
                  var o =
                    ((a = n.replace(/ /g, "").split(";")),
                    (r = {}),
                    a.map((e) => {
                      var [t, l] = e.split(":");
                      t && (r[t] = l);
                    }),
                    r);
                  o["stroke-width"] &&
                    ((o["stroke-width"] = e.strokeWidth),
                    (n = ((e) => {
                      var t = "";
                      for (var l in e) t += "".concat(l, ":").concat(e[l], ";");
                      return t;
                    })(o)));
                }
                return t("path", { d: l.d, style: n }, null);
              }),
            ]),
            null === (l = r.default) || void 0 === l ? void 0 : l.call(r),
          ]);
        };
      },
    })
  );
I.install = function (e) {
  e.component(I.name, I);
};
let F = [
    {
      d: "M448 256c0-106-86-192-192-192s-192 86-192 192 86 192 192 192 192-86 192-192z",
      s: "fill:none;stroke:currentcolor;stroke-miterlimit:10;stroke-width:32;",
    },
    {
      d: "M256 176l0 160 M336 256l-160 0",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
  ],
  Y = [
    {
      d: "M256 112l0 288 M400 256l-288 0",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
  ],
  K = [
    {
      d: "M256 48c-114.69 0-208 93.31-208 208s93.31 208 208 208 208-93.31 208-208-93.31-208-208-208z m0 319.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20z m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.94v-0.05a21.74 21.74 0 1 1 43.44 0z",
      s: "fill:currentcolor;",
    },
  ],
  R = [
    {
      d: "M244 400l-144-144 144-144 M120 256l292 0",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48;",
    },
  ],
  _ = [
    {
      d: "M112 268l144 144 144-144 M256 392l0-292",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48;",
    },
  ],
  U = [
    {
      d: "M268 112l144 144-144 144 M392 256l-292 0",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48;",
    },
  ],
  H = [
    {
      d: "M112 244l144-144 144 144 M256 120l0 292",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48;",
    },
  ],
  $ = [
    {
      d: "M48 128a48 48 0 0 1 48-48h320a48 48 0 0 1 48 48v288a48 48 0 0 1-48 48h-320a48 48 0 0 1-48-48z M464 160l-416 0",
      s: "fill:none;stroke:currentcolor;stroke-width:32px;stroke-linejoin:round;",
    },
    {
      d: "M272 232a24 24 0 1 0 48 0 24 24 0 1 0-48 0z M352 232a24 24 0 1 0 48 0 24 24 0 1 0-48 0z M272 312a24 24 0 1 0 48 0 24 24 0 1 0-48 0z M352 312a24 24 0 1 0 48 0 24 24 0 1 0-48 0z M112 312a24 24 0 1 0 48 0 24 24 0 1 0-48 0z M192 312a24 24 0 1 0 48 0 24 24 0 1 0-48 0z M112 392a24 24 0 1 0 48 0 24 24 0 1 0-48 0z M192 392a24 24 0 1 0 48 0 24 24 0 1 0-48 0z M272 392a24 24 0 1 0 48 0 24 24 0 1 0-48 0z",
      s: "fill:currentcolor;",
    },
    {
      d: "M128 48l0 32 M384 48l0 32",
      s: "fill:none;stroke:currentcolor;stroke-width:32px;stroke-linecap:round;stroke-linejoin:round;",
    },
  ],
  W = [
    {
      d: "M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0l139.78-163.12c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",
      s: "fill:currentcolor;",
    },
  ],
  q = [
    {
      d: "M414 321.94l-139.78-163.12a24 24 0 0 0-36.44 0l-139.78 163.12c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z",
      s: "fill:currentcolor;",
    },
  ],
  G = [
    {
      d: "M256 48c-114.69 0-208 93.31-208 208s93.31 208 208 208 208-93.31 208-208-93.31-208-208-208z m108.25 138.29l-134.4 160a16 16 0 0 1-12 5.71h-0.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z",
      s: "fill:currentcolor;",
    },
  ],
  X = [
    {
      d: "M210.35 384a21.33 21.33 0 0 1-15.58-6.83l-103.68-110.29a21.33 21.33 0 1 1 31.15-29.23l87.89 93.66 179.42-196.27a21.33 21.33 0 1 1 31.57 28.59l-194.99 213.33a21.33 21.33 0 0 1-15.57 7.04z",
      s: "fill:currentcolor;",
    },
  ],
  Z = [
    {
      d: "M328 112l-144 144 144 144",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48;",
    },
  ],
  J = [
    {
      d: "M256 112l-144 144 144 144 M408 112l-144 144 144 144",
      s: "fill:none;stroke:currentcolor;stroke-width:48;stroke-linecap:round;stroke-linejoin:round;",
    },
  ],
  Q = [
    {
      d: "M264 400l144-144-144-144 M112 400l144-144-144-144",
      s: "fill:none;stroke:currentcolor;stroke-width:48;stroke-linecap:round;stroke-linejoin:round;",
    },
  ],
  ee = [
    {
      d: "M112 184l144 144 144-144",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48;",
    },
  ],
  te = [
    {
      d: "M184 112l144 144-144 144",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48;",
    },
  ],
  le = [
    {
      d: "M112 328l144-144 144 144",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48;",
    },
  ],
  ae = [
    {
      d: "M256 48c-114.69 0-208 93.31-208 208s93.31 208 208 208 208-93.31 208-208-93.31-208-208-208z m75.31 260.69a16 16 0 1 1-22.62 22.62l-52.69-52.68-52.69 52.68a16 16 0 0 1-22.62-22.62l52.68-52.69-52.68-52.69a16 16 0 0 1 22.62-22.62l52.69 52.68 52.69-52.68a16 16 0 0 1 22.62 22.62l-52.68 52.69z",
      s: "fill:currentcolor;",
    },
  ],
  re = [
    {
      d: "M368 368l-224-224 M368 144l-224 224",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
  ],
  ne = [
    {
      d: "M416 221.25v194.75a48 48 0 0 1-48 48h-224a48 48 0 0 1-48-48v-320a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z",
      s: "fill:none;stroke:currentcolor;stroke-linejoin:round;stroke-width:32;",
    },
    {
      d: "M256 56v120a32 32 0 0 0 32 32h120 M176 288l160 0 M176 368l160 0",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
  ],
  oe = [
    {
      d: "M208 256a48 48 0 1 0 96 0 48 48 0 1 0-96 0z M368 256a48 48 0 1 0 96 0 48 48 0 1 0-96 0z M48 256a48 48 0 1 0 96 0 48 48 0 1 0-96 0z",
      s: "fill:currentcolor;",
    },
  ],
  ie = [
    {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352a16 16 0 0 1-11.31 27.31z M255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91l0-0.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 0.14-2.94l-19.92-19.89a2 2 0 0 0-2.71-0.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-0.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65 42.65 27.63 88.55 41.63 136.31 41.63a239.13 239.13 0 0 0 75.8-12.58 2 2 0 0 0 0.77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1 204.8 204.8 0 0 1-51.16 6.47z M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53-42.57-27.52-89.57-42.07-135.91-42.07a227.34 227.34 0 0 0-74.89 12.83 2 2 0 0 0-0.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1 192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a0.13 0.13 0 0 1 0 0.16 310.72 310.72 0 0 1-64.12 72.73 2 2 0 0 0-0.15 2.95l19.9 19.89a2 2 0 0 0 2.7 0.13 343.49 343.49 0 0 0 68.64-78.48 32.2 32.2 0 0 0-0.1-34.78z M256 160a95.88 95.88 0 0 0-21.37 2.4 2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1 96 96 0 0 0-93.6-117.34z M165.78 233.66a2 2 0 0 0-3.38 1 96 96 0 0 0 115 115 2 2 0 0 0 1-3.38z",
      s: "fill:currentcolor;",
    },
  ],
  se = [
    {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-0.27 17.77c48.36 75.7 127.24 134.9 221.1 134.9 92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47c-48.56-75-129.65-135.28-221.79-135.28z",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
    {
      d: "M176 256a80 80 0 1 0 160 0 80 80 0 1 0-160 0z",
      s: "fill:none;stroke:currentcolor;stroke-miterlimit:10;stroke-width:32;",
    },
  ],
  ue = [
    {
      d: "M384 80h-256c-26 0-43 14-48 40l-32 152v112a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-112l-32-152c-5-27-23-40-48-40z",
      s: "fill:none;stroke:currentcolor;stroke-linejoin:round;stroke-width:32;",
    },
    {
      d: "M48 272l144 0 M320 272l144 0 M192 272a64 64 0 0 0 128 0",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
  ],
  ce = [
    {
      d: "M256 64c-106 0-192 86-192 192s86 192 192 192 192-86 192-192-86-192-192-192z m-6 304a20 20 0 1 1 20-20 20 20 0 0 1-20 20z m33.44-102c-16.21 10.88-18.44 20.85-18.44 30a14 14 0 0 1-28 0c0-21.91 10.08-39.33 30.82-53.26 19.28-12.94 30.18-21.14 30.18-39.17 0-12.26-7-21.57-21.49-28.46-3.41-1.62-11-3.2-20.34-3.09-11.72 0.15-20.82 2.95-27.83 8.59-13.22 10.64-14.34 22.22-14.34 22.39a14 14 0 1 1-28-1.35c0.11-2.43 1.8-24.32 24.77-42.8 11.91-9.58 27.06-14.56 45-14.78 12.7-0.15 24.63 2 32.72 5.82 24.21 11.45 37.51 30.54 37.51 53.68 0 33.83-22.61 49.02-42.56 62.43z",
      s: "fill:currentcolor;",
    },
  ],
  de = [
    {
      d: "M416 64h-320a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64v-256a64.07 64.07 0 0 0-64-64z m-80 64a48 48 0 1 1-48 48 48.05 48.05 0 0 1 48-48z m-240 288a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81-117.22 117.22z m352-32a32 32 0 0 1-32 32h-198.37l121.42-121.42a47.72 47.72 0 0 1 61.64-0.16l47.31 39.42z",
      s: "fill:currentcolor;",
    },
  ],
  ve = [
    {
      d: "M256 56c-110.28 0-200 89.72-200 200s89.72 200 200 200 200-89.72 200-200-89.72-200-200-200z m0 82a26 26 0 1 1-26 26 26 26 0 0 1 26-26z m48 226h-88a16 16 0 0 1 0-32h28v-88h-16a16 16 0 0 1 0-32h32a16 16 0 0 1 16 16v104h28a16 16 0 0 1 0 32z",
      s: "fill:currentcolor;",
    },
  ],
  pe = [
    {
      d: "M480 223.5q-5.5-76.5-60-130.75t-130.5-60.25q-8-0.5-13.74 4.75t-5.74 13.25q0 7.01 4.75 12.25t11.74 5.75q27.5 2 53.51 13 30.5 13.01 54.49 36.76t37.01 54.75q11.01 25.5 13.01 53.01 0.5 7.01 5.74 11.74t12.26 4.75q7.5 0 13.01-5.5 5.5-6 4.49-13.51z",
      s: "fill:currentcolor;",
    },
  ],
  me = [
    {
      d: "M320 146s24.36-12-64-12a160 160 0 1 0 160 160",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32;",
    },
    {
      d: "M256 58l80 80-80 80",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
  ],
  he = [
    {
      d: "M448 256c0-106-86-192-192-192s-192 86-192 192 86 192 192 192 192-86 192-192z",
      s: "fill:none;stroke:currentcolor;stroke-miterlimit:10;stroke-width:32;",
    },
    {
      d: "M336 256l-160 0",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
  ],
  fe = [
    {
      d: "M400 256l-288 0",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
  ],
  ge = [
    {
      d: "M221.09 64a157.09 157.09 0 1 0 157.09 157.09 157.1 157.1 0 0 0-157.09-157.09z",
      s: "fill:none;stroke:currentcolor;stroke-miterlimit:10;stroke-width:32;",
    },
    {
      d: "M338.29 338.29l109.71 109.71",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32;",
    },
  ],
  ke = [
    {
      d: "M454.05 176.55l-126.95-18.45-56.75-115.05c-1.55-3.15-4.1-5.7-7.25-7.25-7.9-3.9-17.5-0.65-21.45 7.25l-56.75 115.05-126.95 18.45c-3.5 0.5-6.7 2.15-9.15 4.65-6.15 6.35-6.05 16.45 0.3 22.65l91.85 89.55-21.7 126.45c-0.6 3.45-0.05 7.05 1.6 10.15 4.1 7.8 13.8 10.85 21.6 6.7l113.55-59.7 113.55 59.7c3.1 1.65 6.7 2.2 10.15 1.6 8.7-1.5 14.55-9.75 13.05-18.45l-21.7-126.45 91.85-89.55c2.5-2.45 4.15-5.65 4.65-9.15 1.35-8.75-4.75-16.85-13.5-18.15z",
      s: "fill:currentcolor;",
    },
  ],
  ye = [
    {
      d: "M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8c0 98.84 80.2 178.84 179.2 178.84a180.45 180.45 0 0 0 140-66.92 M32 256l44-44 46 44 M480 256l-44 44-46-44",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
  ],
  be = [
    {
      d: "M256 64c-106 0-192 86-192 192s86 192 192 192 192-86 192-192-86-192-192-192z",
      s: "fill:none;stroke:currentcolor;stroke-miterlimit:10;stroke-width:32;",
    },
    {
      d: "M256 128l0 144 96 0",
      s: "fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:32;",
    },
  ];
function we(e) {
  return {
    name: e,
    onBeforeEnter(e) {
      ((e.style.height = 0), (e.style.opacity = 0.1));
    },
    onEnter(e) {
      0 !== e.scrollHeight
        ? ((e.style.height = e.scrollHeight + "px"), (e.style.opacity = 1))
        : ((e.style.height = ""), (e.style.opacity = ""));
    },
    onAfterEnter(e) {
      ((e.style.height = ""), (e.style.overflow = ""), (e.style.opacity = ""));
    },
    onBeforeLeave(e) {
      ((e.style.height = e.scrollHeight + "px"), (e.style.opacity = 1));
    },
    onLeave(e) {
      0 !== e.scrollHeight &&
        ((e.style.height = 0),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        (e.style.opacity = 0));
    },
    onAfterLeave(e) {
      ((e.style.height = ""),
        (e.style.paddingTop = ""),
        (e.style.paddingBottom = ""),
        (e.style.marginTop = ""),
        (e.style.marginBottom = ""),
        (e.style.opacity = ""),
        (e.style.overflow = ""));
    },
  };
}
var xe = j(
    e({
      name: "Alert",
      props: {
        type: { type: String, default: "warning" },
        closable: Boolean,
        showIcon: { type: Boolean, default: !0 },
        icon: [String, Object, Array],
        message: String,
        description: String,
        bordered: Boolean,
      },
      setup(e, i) {
        var { emit: s, slots: u } = i,
          c = l(!1),
          d = () => {
            ((c.value = !0), s("close"));
          },
          v = a(() => [
            "k-alert",
            {
              ["k-alert-".concat(e.type)]: e.type,
              "k-alert-has-icon": e.showIcon,
              "k-alert-has-close": e.closable,
              "k-alert-bordered": e.bordered,
              "k-alert-has-description": e.description,
            },
          ]),
          p = { info: ve, error: ae, success: G, warning: K },
          m = we("k-alert-slide");
        return () => {
          var l,
            a = e.showIcon
              ? t(I, { type: e.icon ? e.icon : p[e.type], class: "k-alert-icon" }, null)
              : null,
            i = e.closable ? t(I, { class: "k-alert-close", type: re, onClick: d }, null) : null,
            s = e.description ? t("div", { class: "k-alert-description" }, [e.description]) : null,
            h = t("div", { class: "k-alert-message" }, [
              e.message || (null === (l = u.default) || void 0 === l ? void 0 : l.call(u)),
            ]);
          return t(r, m, {
            default: () => [
              n(
                t("div", { class: v.value }, [
                  a,
                  t("div", { class: "k-alert-content" }, [h, s]),
                  i,
                ]),
                [[o, !c.value]]
              ),
            ],
          });
        };
      },
    })
  ),
  Se = {
    mounted(e, t) {
      var { value: l } = t;
      "function" == typeof l && window.addEventListener("resize", l);
    },
    unmounted(e, t) {
      var { value: l } = t;
      "function" == typeof l && window.removeEventListener("resize", l);
    },
  },
  Me = j(
    e({
      name: "Affix",
      directives: { resize: Se },
      props: {
        offsetTop: { type: Number, default: 0 },
        offsetBottom: Number,
        target: { type: Function, default: () => window },
      },
      setup(e, a) {
        var { slots: r, emit: o } = a,
          v = e.target(),
          p = l(),
          m = l(!1),
          h = l({}),
          f = l({}),
          g = null,
          k = () => {
            if (p.value && v) {
              var t = p.value.getBoundingClientRect(),
                l =
                  v === window ? { top: 0, bottom: window.innerHeight } : v.getBoundingClientRect(),
                a = !1;
              if (null != e.offsetBottom)
                l.bottom - t.bottom - e.offsetBottom <= 0
                  ? ((a = !0),
                    (h.value = {
                      bottom: "".concat(window.innerHeight - l.bottom + e.offsetBottom, "px"),
                      width: "".concat(t.width, "px"),
                    }))
                  : ((a = !1), (h.value = {}));
              else
                t.top - l.top - e.offsetTop <= 0
                  ? ((a = !0),
                    (h.value = {
                      top: "".concat(l.top + e.offsetTop, "px"),
                      width: "".concat(t.width, "px"),
                    }))
                  : ((a = !1), (h.value = {}));
              ((f.value = a
                ? { height: "".concat(t.height, "px"), width: "".concat(t.width, "px") }
                : null),
                m.value !== a && ((m.value = a), o("change", a)));
            }
          };
        return (
          i(() => {
            var e;
            (null === (e = v) || void 0 === e || e.removeEventListener("scroll", k),
              null != g && g.disconnect());
          }),
          s(() => {
            u(() => {
              var t, l;
              (null ===
                (l = v =
                  (null === (t = e.target()) || void 0 === t ? void 0 : t.value) || e.target()) ||
                void 0 === l ||
                l.addEventListener("scroll", k),
                k(),
                v &&
                  v !== window &&
                  "ResizeObserver" in window &&
                  (g = new ResizeObserver(k)).observe(v));
            });
          }),
          c(
            () => [e.offsetTop, e.offsetBottom, e.target],
            () => {
              u(k);
            }
          ),
          () => {
            var e;
            return n(
              t("div", { style: f.value, ref: p }, [
                t("div", { style: h.value, class: { "k-affix": m.value } }, [
                  null === (e = r.default) || void 0 === e ? void 0 : e.call(r),
                ]),
              ]),
              [[d("resize"), k]]
            );
          }
        );
      },
    })
  ),
  Ce = e({
    name: "Avatar",
    props: {
      icon: [String, Array],
      shape: { type: String },
      size: {
        type: [Number, String],
        default: "default",
        validator: (e) => "number" == typeof e || ["large", "small", "default"].indexOf(e) >= 0,
      },
      src: String,
    },
    setup(e, r) {
      var { slots: n } = r,
        o = v("KAvatarGroup", null),
        i = l(),
        u = l(),
        c = a(() => (null == o ? void 0 : o.size.value) || e.size),
        d = a(() => (null == o ? void 0 : o.shape.value) || e.shape),
        m = () => {
          if (i.value && u.value) {
            var e = u.value.offsetWidth - 8,
              t = i.value.offsetWidth || i.value.scrollWidth;
            if (t > e) {
              var l = e / t;
              i.value.style.transform = "scale(".concat(l, ") translateX(-50%)");
            } else i.value.style.transform = "scale(1) translateX(-50%)";
          }
        };
      return (
        s(m),
        p(m),
        () => {
          var l,
            a = c.value,
            r = d.value,
            { src: o, icon: s } = e,
            v = {};
          "number" == typeof a &&
            (v = {
              width: "".concat(a, "px"),
              height: "".concat(a, "px"),
              lineHeight: "".concat(a, "px"),
              fontSize: "".concat(a / 2, "px"),
            });
          var p = null === (l = n.default) || void 0 === l ? void 0 : l.call(n),
            m =
              null == p
                ? void 0
                : p.some((e) => {
                    var t;
                    return "Icon" === (null === (t = e.type) || void 0 === t ? void 0 : t.name);
                  }),
            h = 1 === (null == p ? void 0 : p.length) && "string" == typeof p[0].children;
          return t(
            "div",
            {
              ref: u,
              class: [
                "k-avatar",
                {
                  "k-avatar-lg": "large" == a,
                  "k-avatar-sm": "small" == a,
                  "k-avatar-image": o,
                  "k-avatar-icon": s || m,
                  "k-avatar-square": "square" == r,
                },
              ],
              style: v,
            },
            [
              s
                ? t(I, { type: s }, null)
                : o
                  ? t("img", { src: o }, null)
                  : h
                    ? t("span", { class: "k-avatar-string", ref: i }, [p])
                    : p,
            ]
          );
        }
      );
    },
  }),
  ze = j(Ce),
  Be = j(
    e({
      name: "Breadcrumb",
      props: { separator: { type: [String, Object], default: "/" } },
      setup(e, l) {
        var a,
          { slots: r } = l;
        return (
          m(
            "separator",
            (null === (a = r.separator) || void 0 === a ? void 0 : a.call(r)) || e.separator
          ),
          () => {
            var e;
            return t("nav", { class: "k-breadcrumb" }, [
              t("ol", null, [null === (e = r.default) || void 0 === e ? void 0 : e.call(r)]),
            ]);
          }
        );
      },
    })
  ),
  Ae = j(
    e({
      name: "BreadcrumbItem",
      props: { href: String, icon: [String, Array, Object] },
      setup(e, l) {
        var { slots: a, emit: r } = l,
          n = v("separator", null);
        return () => {
          var l,
            o,
            i = a.icon ? a.icon() : e.icon ? t(I, { type: e.icon }, null) : null;
          return t("li", { class: "k-breadcrumb-item", onClick: (e) => r("click", e) }, [
            e.href
              ? t("a", { class: "k-breadcrumb-link", href: e.href }, [
                  i,
                  null === (l = a.default) || void 0 === l ? void 0 : l.call(a),
                ])
              : t("span", { class: "k-breadcrumb-link" }, [
                  i,
                  null === (o = a.default) || void 0 === o ? void 0 : o.call(a),
                ]),
            t("span", { class: "k-breadcrumb-separator" }, [n]),
          ]);
        };
      },
    })
  );
function Te(e, l) {
  var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : void 0;
  return 1 == e.length ? y(e[0], l, a) : y(t("span", null, [e]), l, a, r);
}
function Oe(e) {
  var t = [],
    l = (e) => {
      null == e ||
        e.forEach((e) => {
          var a;
          h(e) &&
            e.type !== f &&
            ((e.type === g &&
              "" === (null === (a = e.children) || void 0 === a ? void 0 : a.toString().trim())) ||
              (e.type === k && Array.isArray(e.children) ? l(e.children) : t.push(e)));
        });
    };
  return (l(e), t);
}
var Ne = new Map(),
  Ve = [
    "default",
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "teal",
    "blue",
    "volcano",
    "violet",
    "cyan",
    "gold",
    "lime",
    "magenta",
    "purple",
    "pink",
    "brown",
    "gray",
  ],
  De = [
    "top",
    "top-left",
    "top-right",
    "bottom",
    "bottom-left",
    "bottom-right",
    "left",
    "left-bottom",
    "left-top",
    "right",
    "right-top",
    "right-bottom",
  ],
  Ee = ["small", "default", "large", "middle"],
  Le = (e) => (Ee.includes(e) ? e : null),
  Pe = j(
    e({
      name: "Button",
      props: {
        htmlType: {
          default: "button",
          validator: (e) => ["button", "submit", "reset"].includes(e),
        },
        icon: [String, Array],
        block: Boolean,
        size: { size: String, validator: (e) => Ee.includes(e) },
        color: { validator: (e) => Ve.includes(e) },
        loading: Boolean,
        type: {
          validator: (e) => ["primary", "danger", "warning", "default", "text", "link"].includes(e),
          default: "default",
        },
        disabled: { type: Boolean, default: !1 },
        theme: {
          type: String,
          validator: (e) => ["outline", "solid", "light", "dashed", "card"].includes(e),
        },
        shape: String,
        href: String,
        target: String,
      },
      emits: ["click"],
      setup(e, l) {
        var { emit: r, slots: n, attrs: o, listeners: i } = l,
          s = v("KButtonGroup", null),
          u = v("size", null),
          c = a(() => {
            var t;
            return (
              e.size ||
              (null == s || null === (t = s.size) || void 0 === t ? void 0 : t.value) ||
              Le(u) ||
              "default"
            );
          }),
          d = a(() => {
            var t;
            return (
              e.shape || (null == s || null === (t = s.shape) || void 0 === t ? void 0 : t.value)
            );
          }),
          p = (t) => {
            e.loading || e.disabled ? t.preventDefault() : r("click", t);
          },
          m = a(() => {
            var e;
            return Oe(null === (e = n.default) || void 0 === e ? void 0 : e.call(n));
          });
        return () => {
          var l,
            a,
            r = [
              "k-btn",
              {
                ["k-btn-".concat(e.type)]: !!e.type && !e.color,
                "k-btn-outline": "outline" == e.theme,
                "k-btn-sm": "small" === c.value,
                "k-btn-block": !!e.block,
                "k-btn-loading": e.loading,
                "k-btn-icon-only":
                  ((a = m.value.filter((e) => e.type !== Comment)),
                  null != a && a.length
                    ? 1 === a.length && "Icon" === a[0].type.name
                    : e.icon || e.loading),
                ["k-btn-".concat(e.color)]: Ve.includes(e.color),
                "k-btn-lg": "large" === c.value,
                "k-btn-circle": "circle" === d.value,
                ["k-btn-".concat(e.theme)]: !!e.theme && "default" !== e.theme,
              },
            ],
            n = [],
            i = e.loading ? pe : e.icon;
          i && n.push(t(I, { type: i, spin: e.loading }, null));
          var s =
            null === (l = m.value) || void 0 === l
              ? void 0
              : l.map((e) => ("string" == typeof e.text ? t("span", null, [e.text.trim()]) : e));
          s && (n = n.concat(s));
          var u = P(
            P({}, o),
            {},
            {
              class: r,
              href: e.href,
              target: e.target,
              disabled: e.disabled,
              type: e.htmlType,
              onClick: p,
            }
          );
          return "link" === e.type && e.href && !e.disabled ? t("a", u, [n]) : t("button", u, [n]);
        };
      },
    })
  ),
  je = j(
    e({
      name: "ButtonGroup",
      props: { size: { type: String, validator: (e) => Ee.indexOf(e) >= 0 }, shape: String },
      setup(e, l) {
        var { slots: a } = l,
          { size: r, shape: n } = b(e),
          o = v("size", null);
        return (
          m("KButtonGroup", { size: e.size || Le(o), shape: n }),
          () => {
            var e,
              l = [
                "k-btn-group",
                {
                  "k-btn-group-sm": "small" == r.value,
                  "k-btn-group-lg": "large" == r.value,
                  "k-btn-group-circle": "circle" == n.value,
                },
              ];
            return t("div", { class: l }, [
              null === (e = a.default) || void 0 === e ? void 0 : e.call(a),
            ]);
          }
        );
      },
    })
  ),
  Ie = e({
    name: "Badge",
    props: {
      count: [String, Number],
      dot: Boolean,
      color: String,
      status: {
        type: String,
        default: "default",
        validator: (e) => ["default", "success", "error", "warning"].indexOf(e) > -1,
      },
      text: String,
      maxCount: { type: Number, default: 99 },
    },
    setup(e, l) {
      var { slots: a } = l;
      return () => {
        var l,
          { maxCount: r, count: n, dot: o, color: i, status: s, text: u } = e,
          c = null === (l = a.default) || void 0 === l ? void 0 : l.call(a),
          d = c && c.length > 0,
          v = null;
        "number" == typeof n && n > 0
          ? (v = n > r ? "".concat(r, "+") : n)
          : "string" == typeof n && n.length > 0 && (v = n);
        var p = [];
        if (!d && (s || i) && !o && !v) {
          var m = i && /^#/.test(i),
            h = [
              "k-badge-status-dot",
              { ["k-badge-status-".concat(s)]: !!s, ["k-badge-status-".concat(i)]: i && !m },
            ],
            f = { backgroundColor: m ? i : null };
          (p.push(t("span", { class: h, style: f }, null)),
            u && p.push(t("span", { class: "k-badge-status-text" }, [u])));
        }
        var g = null;
        if (null !== v || o) {
          var k = {
            "k-badge-count": !o && null !== v,
            "k-badge-dot": o,
            "k-badge-no-child": !d,
            ["k-badge-".concat(s)]: !!s && !i,
          };
          g = t("sup", { class: k, style: { backgroundColor: i } }, [o ? null : v]);
        }
        return t("div", { class: "k-badge" }, [c, g, p]);
      };
    },
  }),
  Fe = j(Ie),
  Ye = j(
    e({
      name: "BackTop",
      directives: {
        scroll: {
          mounted(e, t) {
            var { value: l } = t;
            "function" == typeof l && window.addEventListener("scroll", l);
          },
          unmounted(e, t) {
            var { value: l } = t;
            "function" == typeof l && window.removeEventListener("scroll", l);
          },
        },
      },
      props: {
        height: { type: [Number], default: 100 },
        right: [Number],
        bottom: [Number],
        target: { type: Function, default: () => document.body },
      },
      setup(e, a) {
        var i,
          { emit: s, slots: u } = a,
          c = l(!1),
          v = () => {
            var t = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
            c.value = t >= e.height;
          },
          p = (t) => {
            var l;
            (s("click", t),
              null === (l = e.target) ||
                void 0 === l ||
                l.call(e).scrollIntoView({ behavior: "smooth", block: "start" }));
          },
          m = null === (i = u.default) || void 0 === i ? void 0 : i.call(u);
        (m && 0 != m.length) ||
          (m = t("div", { class: "k-backtop-content" }, [t(I, { type: H }, null)]));
        var h = { bottom: "".concat(e.bottom, "px"), left: "".concat(e.right, "px") };
        return () =>
          t(
            r,
            { name: "k-backtop-fade" },
            {
              default: () => [
                n(t("div", { class: "k-backtop", onClick: p, style: h }, [m]), [
                  [o, c.value],
                  [d("scroll"), v],
                ]),
              ],
            }
          );
      },
    })
  ),
  Ke = {
    mounted(e, t, l) {
      var { value: a } = t;
      if (a) {
        var r = e.parentNode;
        if (!r) return !1;
        ((a.$el ? a.$el : (!0 === a ? document.body : a) || document.body).appendChild(e),
          (e.__data = { parentNode: r }));
      }
    },
    unmounted(e, t) {
      var { value: l } = t;
      l && (e.__data.parentNode.appendChild(e), (e.__data = null));
    },
  };
function Re(e) {
  var {
    refSelection: t,
    refPopper: l,
    currentPlacement: a,
    position: r = null,
    transOrigin: n,
    top: o,
    left: i,
    offset: s = 3,
  } = e;
  if (l.value) {
    var u = null,
      c = r && "number" == typeof r.x && "number" == typeof r.y;
    if (c) u = { width: 0, height: 0, top: r.y, bottom: r.y, left: r.x, right: r.x };
    else {
      if (!t || !t.value) return;
      u = (t.value.$el || t.value).getBoundingClientRect();
    }
    var d = l.value.offsetHeight,
      v = l.value.offsetWidth,
      { clientHeight: p, clientWidth: m, scrollTop: h, scrollLeft: f } = document.documentElement,
      g = u.left + u.width / 2 - v / 2,
      k = u.top + u.height / 2 - d / 2,
      y = u.top > d + s,
      b = p - u.bottom > d + s,
      w = u.left > v + s,
      x = m - u.right > v + s,
      S = m - u.left > v,
      M = u.right > v,
      C = p - u.top > d,
      z = u.bottom > d,
      B = g > 0 && g + v < m,
      A = k > 0 && k + d < p,
      [T, O] = a.value.split("-");
    (c &&
      !O &&
      ("top" === T || "bottom" === T
        ? (O = "left")
        : ("left" !== T && "right" !== T) || (O = "top")),
      "top" === T && !y && b
        ? (T = "bottom")
        : "bottom" === T && !b && y
          ? (T = "top")
          : "left" === T && !w && x
            ? (T = "right")
            : "right" === T && !x && w && (T = "left"),
      "top" === T || "bottom" === T
        ? "left" === O && !S && M
          ? (O = "right")
          : "right" === O && !M && S
            ? (O = "left")
            : O || B || (S ? (O = "left") : M && (O = "right"))
        : ("left" !== T && "right" !== T) ||
          ("top" === O && !C && z
            ? (O = "bottom")
            : "bottom" === O && !z && C
              ? (O = "top")
              : O || A || (C ? (O = "top") : z && (O = "bottom"))));
    var N = O ? "".concat(T, "-").concat(O) : T,
      V = 0,
      D = 0,
      E = "center",
      L = "center";
    ("top" === T
      ? ((V = u.top - d - s), (L = "bottom"))
      : "bottom" === T
        ? ((V = u.bottom + s), (L = "top"))
        : "top" === O
          ? ((V = u.top), (L = "top"))
          : "bottom" === O
            ? ((V = u.bottom - d), (L = "bottom"))
            : ((V = u.top + (u.height - d) / 2), (L = "center")),
      "left" === T
        ? ((D = u.left - v - s), (E = "right"))
        : "right" === T
          ? ((D = u.right + s), (E = "left"))
          : "left" === O
            ? ((D = u.left), (E = "left"))
            : "right" === O
              ? ((D = u.right - v), (E = "right"))
              : ((D = u.left + (u.width - v) / 2), (E = "center")),
      (o.value = V + h),
      (i.value = D + f),
      (n.value = "".concat(E, " ").concat(L)),
      a.value !== N && (a.value = N));
  }
}
var _e = 1e6,
  Ue = 1e6,
  He = "[big.js] ",
  $e = He + "Invalid ",
  We = $e + "decimal places",
  qe = $e + "rounding mode",
  Ge = He + "Division by zero",
  Xe = {},
  Ze = void 0,
  Je = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function Qe(e, t, l, a) {
  var r = e.c;
  if ((l === Ze && (l = e.constructor.RM), 0 !== l && 1 !== l && 2 !== l && 3 !== l))
    throw Error(qe);
  if (t < 1)
    ((a =
      (3 === l && (a || !!r[0])) ||
      (0 === t &&
        ((1 === l && r[0] >= 5) || (2 === l && (r[0] > 5 || (5 === r[0] && (a || r[1] !== Ze))))))),
      (r.length = 1),
      a ? ((e.e = e.e - t + 1), (r[0] = 1)) : (r[0] = e.e = 0));
  else if (t < r.length) {
    if (
      ((a =
        (1 === l && r[t] >= 5) ||
        (2 === l && (r[t] > 5 || (5 === r[t] && (a || r[t + 1] !== Ze || 1 & r[t - 1])))) ||
        (3 === l && (a || !!r[0]))),
      (r.length = t),
      a)
    )
      for (; ++r[--t] > 9; )
        if (((r[t] = 0), 0 === t)) {
          (++e.e, r.unshift(1));
          break;
        }
    for (t = r.length; !r[--t]; ) r.pop();
  }
  return e;
}
function et(e, t, l) {
  var a = e.e,
    r = e.c.join(""),
    n = r.length;
  if (t) r = r.charAt(0) + (n > 1 ? "." + r.slice(1) : "") + (a < 0 ? "e" : "e+") + a;
  else if (a < 0) {
    for (; ++a; ) r = "0" + r;
    r = "0." + r;
  } else if (a > 0)
    if (++a > n) for (a -= n; a--; ) r += "0";
    else a < n && (r = r.slice(0, a) + "." + r.slice(a));
  else n > 1 && (r = r.charAt(0) + "." + r.slice(1));
  return e.s < 0 && l ? "-" + r : r;
}
((Xe.abs = function () {
  var e = new this.constructor(this);
  return ((e.s = 1), e);
}),
  (Xe.cmp = function (e) {
    var t,
      l = this,
      a = l.c,
      r = (e = new l.constructor(e)).c,
      n = l.s,
      o = e.s,
      i = l.e,
      s = e.e;
    if (!a[0] || !r[0]) return a[0] ? n : r[0] ? -o : 0;
    if (n != o) return n;
    if (((t = n < 0), i != s)) return (i > s) ^ t ? 1 : -1;
    for (o = (i = a.length) < (s = r.length) ? i : s, n = -1; ++n < o; )
      if (a[n] != r[n]) return (a[n] > r[n]) ^ t ? 1 : -1;
    return i == s ? 0 : (i > s) ^ t ? 1 : -1;
  }),
  (Xe.div = function (e) {
    var t = this,
      l = t.constructor,
      a = t.c,
      r = (e = new l(e)).c,
      n = t.s == e.s ? 1 : -1,
      o = l.DP;
    if (o !== ~~o || o < 0 || o > _e) throw Error(We);
    if (!r[0]) throw Error(Ge);
    if (!a[0]) return ((e.s = n), (e.c = [(e.e = 0)]), e);
    var i,
      s,
      u,
      c,
      d,
      v = r.slice(),
      p = (i = r.length),
      m = a.length,
      h = a.slice(0, i),
      f = h.length,
      g = e,
      k = (g.c = []),
      y = 0,
      b = o + (g.e = t.e - e.e) + 1;
    for (g.s = n, n = b < 0 ? 0 : b, v.unshift(0); f++ < i; ) h.push(0);
    do {
      for (u = 0; u < 10; u++) {
        if (i != (f = h.length)) c = i > f ? 1 : -1;
        else
          for (d = -1, c = 0; ++d < i; )
            if (r[d] != h[d]) {
              c = r[d] > h[d] ? 1 : -1;
              break;
            }
        if (!(c < 0)) break;
        for (s = f == i ? r : v; f; ) {
          if (h[--f] < s[f]) {
            for (d = f; d && !h[--d]; ) h[d] = 9;
            (--h[d], (h[f] += 10));
          }
          h[f] -= s[f];
        }
        for (; !h[0]; ) h.shift();
      }
      ((k[y++] = c ? u : ++u), h[0] && c ? (h[f] = a[p] || 0) : (h = [a[p]]));
    } while ((p++ < m || h[0] !== Ze) && n--);
    return (k[0] || 1 == y || (k.shift(), g.e--, b--), y > b && Qe(g, b, l.RM, h[0] !== Ze), g);
  }),
  (Xe.eq = function (e) {
    return 0 === this.cmp(e);
  }),
  (Xe.gt = function (e) {
    return this.cmp(e) > 0;
  }),
  (Xe.gte = function (e) {
    return this.cmp(e) > -1;
  }),
  (Xe.lt = function (e) {
    return this.cmp(e) < 0;
  }),
  (Xe.lte = function (e) {
    return this.cmp(e) < 1;
  }),
  (Xe.minus = Xe.sub =
    function (e) {
      var t,
        l,
        a,
        r,
        n = this,
        o = n.constructor,
        i = n.s,
        s = (e = new o(e)).s;
      if (i != s) return ((e.s = -s), n.plus(e));
      var u = n.c.slice(),
        c = n.e,
        d = e.c,
        v = e.e;
      if (!u[0] || !d[0]) return (d[0] ? (e.s = -s) : u[0] ? (e = new o(n)) : (e.s = 1), e);
      if ((i = c - v)) {
        for ((r = i < 0) ? ((i = -i), (a = u)) : ((v = c), (a = d)), a.reverse(), s = i; s--; )
          a.push(0);
        a.reverse();
      } else
        for (l = ((r = u.length < d.length) ? u : d).length, i = s = 0; s < l; s++)
          if (u[s] != d[s]) {
            r = u[s] < d[s];
            break;
          }
      if (
        (r && ((a = u), (u = d), (d = a), (e.s = -e.s)), (s = (l = d.length) - (t = u.length)) > 0)
      )
        for (; s--; ) u[t++] = 0;
      for (s = t; l > i; ) {
        if (u[--l] < d[l]) {
          for (t = l; t && !u[--t]; ) u[t] = 9;
          (--u[t], (u[l] += 10));
        }
        u[l] -= d[l];
      }
      for (; 0 === u[--s]; ) u.pop();
      for (; 0 === u[0]; ) (u.shift(), --v);
      return (u[0] || ((e.s = 1), (u = [(v = 0)])), (e.c = u), (e.e = v), e);
    }),
  (Xe.mod = function (e) {
    var t,
      l = this,
      a = l.constructor,
      r = l.s,
      n = (e = new a(e)).s;
    if (!e.c[0]) throw Error(Ge);
    return (
      (l.s = e.s = 1),
      (t = 1 == e.cmp(l)),
      (l.s = r),
      (e.s = n),
      t
        ? new a(l)
        : ((r = a.DP),
          (n = a.RM),
          (a.DP = a.RM = 0),
          (l = l.div(e)),
          (a.DP = r),
          (a.RM = n),
          this.minus(l.times(e)))
    );
  }),
  (Xe.neg = function () {
    var e = new this.constructor(this);
    return ((e.s = -e.s), e);
  }),
  (Xe.plus = Xe.add =
    function (e) {
      var t,
        l,
        a,
        r = this,
        n = r.constructor;
      if (((e = new n(e)), r.s != e.s)) return ((e.s = -e.s), r.minus(e));
      var o = r.e,
        i = r.c,
        s = e.e,
        u = e.c;
      if (!i[0] || !u[0]) return (u[0] || (i[0] ? (e = new n(r)) : (e.s = r.s)), e);
      if (((i = i.slice()), (t = o - s))) {
        for (t > 0 ? ((s = o), (a = u)) : ((t = -t), (a = i)), a.reverse(); t--; ) a.push(0);
        a.reverse();
      }
      for (
        i.length - u.length < 0 && ((a = u), (u = i), (i = a)), t = u.length, l = 0;
        t;
        i[t] %= 10
      )
        l = ((i[--t] = i[t] + u[t] + l) / 10) | 0;
      for (l && (i.unshift(l), ++s), t = i.length; 0 === i[--t]; ) i.pop();
      return ((e.c = i), (e.e = s), e);
    }),
  (Xe.pow = function (e) {
    var t = this,
      l = new t.constructor("1"),
      a = l,
      r = e < 0;
    if (e !== ~~e || e < -1e6 || e > Ue) throw Error($e + "exponent");
    for (r && (e = -e); 1 & e && (a = a.times(t)), (e >>= 1); ) t = t.times(t);
    return r ? l.div(a) : a;
  }),
  (Xe.prec = function (e, t) {
    if (e !== ~~e || e < 1 || e > _e) throw Error($e + "precision");
    return Qe(new this.constructor(this), e, t);
  }),
  (Xe.round = function (e, t) {
    if (e === Ze) e = 0;
    else if (e !== ~~e || e < -_e || e > _e) throw Error(We);
    return Qe(new this.constructor(this), e + this.e + 1, t);
  }),
  (Xe.sqrt = function () {
    var e,
      t,
      l,
      a = this,
      r = a.constructor,
      n = a.s,
      o = a.e,
      i = new r("0.5");
    if (!a.c[0]) return new r(a);
    if (n < 0) throw Error(He + "No square root");
    (0 === (n = Math.sqrt(+et(a, !0, !0))) || n === 1 / 0
      ? (((t = a.c.join("")).length + o) & 1 || (t += "0"),
        (o = (((o + 1) / 2) | 0) - (o < 0 || 1 & o)),
        (e = new r(
          ((n = Math.sqrt(t)) == 1 / 0
            ? "5e"
            : (n = n.toExponential()).slice(0, n.indexOf("e") + 1)) + o
        )))
      : (e = new r(n + "")),
      (o = e.e + (r.DP += 4)));
    do {
      ((l = e), (e = i.times(l.plus(a.div(l)))));
    } while (l.c.slice(0, o).join("") !== e.c.slice(0, o).join(""));
    return Qe(e, (r.DP -= 4) + e.e + 1, r.RM);
  }),
  (Xe.times = Xe.mul =
    function (e) {
      var t,
        l = this,
        a = l.constructor,
        r = l.c,
        n = (e = new a(e)).c,
        o = r.length,
        i = n.length,
        s = l.e,
        u = e.e;
      if (((e.s = l.s == e.s ? 1 : -1), !r[0] || !n[0])) return ((e.c = [(e.e = 0)]), e);
      for (
        e.e = s + u,
          o < i && ((t = r), (r = n), (n = t), (u = o), (o = i), (i = u)),
          t = new Array((u = o + i));
        u--;
      )
        t[u] = 0;
      for (s = i; s--; ) {
        for (i = 0, u = o + s; u > s; )
          ((i = t[u] + n[s] * r[u - s - 1] + i), (t[u--] = i % 10), (i = (i / 10) | 0));
        t[u] = i;
      }
      for (i ? ++e.e : t.shift(), s = t.length; !t[--s]; ) t.pop();
      return ((e.c = t), e);
    }),
  (Xe.toExponential = function (e, t) {
    var l = this,
      a = l.c[0];
    if (e !== Ze) {
      if (e !== ~~e || e < 0 || e > _e) throw Error(We);
      for (l = Qe(new l.constructor(l), ++e, t); l.c.length < e; ) l.c.push(0);
    }
    return et(l, !0, !!a);
  }),
  (Xe.toFixed = function (e, t) {
    var l = this,
      a = l.c[0];
    if (e !== Ze) {
      if (e !== ~~e || e < 0 || e > _e) throw Error(We);
      for (e = e + (l = Qe(new l.constructor(l), e + l.e + 1, t)).e + 1; l.c.length < e; )
        l.c.push(0);
    }
    return et(l, !1, !!a);
  }),
  (Xe.toJSON = Xe.toString =
    function () {
      var e = this,
        t = e.constructor;
      return et(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
    }),
  "undefined" != typeof Symbol && (Xe[Symbol.for("nodejs.util.inspect.custom")] = Xe.toJSON),
  (Xe.toNumber = function () {
    var e = +et(this, !0, !0);
    if (!0 === this.constructor.strict && !this.eq(e.toString()))
      throw Error(He + "Imprecise conversion");
    return e;
  }),
  (Xe.toPrecision = function (e, t) {
    var l = this,
      a = l.constructor,
      r = l.c[0];
    if (e !== Ze) {
      if (e !== ~~e || e < 1 || e > _e) throw Error($e + "precision");
      for (l = Qe(new a(l), e, t); l.c.length < e; ) l.c.push(0);
    }
    return et(l, e <= l.e || l.e <= a.NE || l.e >= a.PE, !!r);
  }),
  (Xe.valueOf = function () {
    var e = this,
      t = e.constructor;
    if (!0 === t.strict) throw Error(He + "valueOf disallowed");
    return et(e, e.e <= t.NE || e.e >= t.PE, !0);
  }));
var tt = (function e() {
  function t(l) {
    var a = this;
    if (!(a instanceof t)) return l === Ze && 0 === arguments.length ? e() : new t(l);
    if (l instanceof t) ((a.s = l.s), (a.e = l.e), (a.c = l.c.slice()));
    else {
      if ("string" != typeof l) {
        if (!0 === t.strict && "bigint" != typeof l) throw TypeError($e + "value");
        l = 0 === l && 1 / l < 0 ? "-0" : String(l);
      }
      !(function (e, t) {
        var l, a, r;
        if (!Je.test(t)) throw Error($e + "number");
        ((e.s = "-" == t.charAt(0) ? ((t = t.slice(1)), -1) : 1),
          (l = t.indexOf(".")) > -1 && (t = t.replace(".", "")));
        (a = t.search(/e/i)) > 0
          ? (l < 0 && (l = a), (l += +t.slice(a + 1)), (t = t.substring(0, a)))
          : l < 0 && (l = t.length);
        for (r = t.length, a = 0; a < r && "0" == t.charAt(a); ) ++a;
        if (a == r) e.c = [(e.e = 0)];
        else {
          for (; r > 0 && "0" == t.charAt(--r); );
          for (e.e = l - a - 1, e.c = [], l = 0; a <= r; ) e.c[l++] = +t.charAt(a++);
        }
      })(a, l);
    }
    a.constructor = t;
  }
  return (
    (t.prototype = Xe),
    (t.DP = 20),
    (t.RM = 1),
    (t.NE = -7),
    (t.PE = 21),
    (t.strict = false),
    (t.roundDown = 0),
    (t.roundHalfUp = 1),
    (t.roundHalfEven = 2),
    (t.roundUp = 3),
    t
  );
})();
function lt(e) {
  return (
    null == e ||
    ("string" == typeof e && "" === e.trim()) ||
    (Array.isArray(e) && 0 === e.length) ||
    ("object" == typeof e && !Array.isArray(e) && 0 === Object.keys(e).length)
  );
}
var at = (e, t) => {
    if (
      !((e) => {
        if (null === e || "" === e || Array.isArray(e)) return !1;
        try {
          return (new tt(e), !0);
        } catch (e) {
          return !1;
        }
      })(e)
    )
      return "";
    var l = new tt(e);
    return void 0 !== t ? l.toFixed(t) : l.toFixed();
  },
  rt = (e) => {
    if (null == e || "" === e) return !1;
    var t = String(e).trim();
    if ("-" === t || "." === t || "-." === t) return !1;
    try {
      return (new tt(t), !0);
    } catch (e) {
      return !1;
    }
  },
  nt = (e, t) => {
    try {
      if (null == e || "" === e) throw new Error();
      return new tt(e);
    } catch (e) {
      return new tt(0);
    }
  },
  ot = (e, t) => {
    var { min: l, max: a, step: r, marks: n } = t,
      o = nt(l),
      i = nt(a),
      s = nt(e),
      u = n ? Object.keys(n).map(Number) : [];
    if (null == r) {
      if (u.length > 0) return u.reduce((t, l) => (Math.abs(l - e) < Math.abs(t - e) ? l : t));
      var c = s.gt(i) ? i : s.lt(o) ? o : s;
      return Number(c.toFixed());
    }
    var d = nt(r || 1),
      v = s.minus(o),
      p = Math.round(Number(v.div(d))),
      m = o.plus(d.times(p));
    return (
      u.length > 0 &&
        u.forEach((t) => {
          Math.abs(t - e) < Math.abs(Number(m.minus(e))) && (m = new tt(t));
        }),
      m.gt(i) ? Number(i.toFixed()) : m.lt(o) ? Number(o.toFixed()) : Number(m.toFixed())
    );
  },
  it = j(
    e({
      name: "InputGroup",
      props: {
        block: Boolean,
        compact: { type: Boolean, default: !0 },
        theme: { type: String, default: "light" },
        size: { type: String, validator: (e) => Ee.indexOf(e) >= 0 },
      },
      setup(e, l) {
        var { slots: a } = l,
          r = v("size", null);
        return (
          m("size", e.size || Le(r)),
          () => {
            var l,
              { size: r, compact: n, block: o } = e,
              i = {
                style: {},
                class: [
                  "k-input-group",
                  {
                    "k-input-group-compact": n,
                    "k-input-group-block": o,
                    "k-input-group-light": "light" === e.theme,
                    "k-input-group-lg": "large" == r,
                    "k-input-group-sm": "small" == r,
                  },
                ],
              };
            if ((r || n || (i.style.gap = "8px"), !n))
              if (Array.isArray(r)) i.style = { gap: "".concat(r[1], "px ").concat(r[0], "px") };
              else if (/small|middle|large/.test(r)) {
                i.style.gap = { small: 8, middle: 16, large: 24 }[r] + "px";
              } else null != r && (i.style.gap = "".concat(r, "px"));
            var s = Oe(null === (l = a.default) || void 0 === l ? void 0 : l.call(a));
            return (
              n &&
                (s = s.map((e, t) =>
                  y(
                    e,
                    {
                      class: {
                        "k-input-group-first-item": 0 == t,
                        "k-input-group-item": t > 0 && t < s.length - 1,
                        "k-input-group-last-item": t == s.length - 1,
                      },
                    },
                    !0,
                    !0
                  )
                )),
              t("div", i, [s])
            );
          }
        );
      },
    })
  ),
  st = e({
    name: "InputBox",
    props: {
      multiple: Boolean,
      disabled: Boolean,
      size: String,
      type: String,
      theme: String,
      shape: String,
      inputType: String,
      value: [String, Number, Object],
      showPassword: Boolean,
      inputRef: Object,
      htmlAttrs: Object,
    },
    emits: ["update:value", "focus", "blur"],
    setup(e, l) {
      var { emit: a, slots: r, attrs: n, listeners: o } = l,
        i = (e) => {
          a("update:value", e);
        },
        s = (e) => {
          (a("focus", e), e.preventDefault(), e.stopPropagation());
        },
        u = (e) => {
          a("blur", e);
        };
      return () => {
        var { disabled: l, multiple: a, size: r, type: c, theme: d, shape: v, inputType: p } = e,
          m = P(
            P(
              P(P({ ref: e.inputRef }, n), e.htmlAttrs),
              {},
              {
                class: [
                  {
                    ["k-".concat(p)]: !a,
                    ["k-".concat(p, "-text")]: a,
                    ["k-".concat(p, "-disabled")]: l,
                    ["k-".concat(p, "-sm")]: "small" == r && !a,
                    ["k-".concat(p, "-lg")]: "large" == r && !a,
                    ["k-".concat(p, "-").concat(d)]: "solid" != d && !a && d,
                    ["k-".concat(p, "-circle")]: "circle" == v && !a,
                  },
                  e.htmlAttrs.class,
                ],
                disabled: l,
                type: c,
                value: e.value,
              },
              o
            ),
            {},
            { onFocus: s, onBlur: u, onInput: i }
          );
        return (
          !0 === e.showPassword && "password" == c && (m.type = "text"),
          "on" != e.htmlAttrs.autoComplete &&
            ((m["data-1p-ignore"] = !0),
            (m["data-lpignore"] = !0),
            (m["data-dashlane-ignore"] = "true"),
            (m.autoComplete = "nope")),
          t("input", w(m, { single: !0 }), null)
        );
      };
    },
  }),
  ut = e({
    inheritAttrs: !1,
    name: "Input",
    props: {
      clearable: { type: Boolean, default: !0 },
      visiblePasswordIcon: { type: Boolean, default: !0 },
      size: { type: String, validator: (e) => Ee.indexOf(e) >= 0 },
      modelValue: { type: [String, Number, Array, Object] },
      value: { type: [String, Number, Array, Object] },
      disabled: Boolean,
      type: {
        validator: (e) =>
          ["text", "textarea", "password", "url", "email", "date", "search", "hidden"].indexOf(e) >=
          0,
        default: "text",
      },
      icon: [String, Array],
      suffix: String,
      prefix: String,
      theme: { type: String, default: "light" },
      shape: String,
      formatter: Function,
      parser: Function,
      inputType: { type: String, default: "input" },
    },
    setup(e, a) {
      var { slots: r, emit: n, attrs: o, expose: i, listeners: s } = a,
        d = l(e.modelValue || e.value),
        p = l(!1),
        h = l(!1),
        f = l(),
        g = v("size", null);
      (m("size", e.size || Le(g)),
        c(
          () => e.modelValue,
          (e) => {
            d.value = e;
          }
        ));
      var k = () => {
        null == f || f.value.focus();
      };
      i({
        focus: k,
        blur: () => {
          null == f || f.value.blur();
        },
      });
      var y = () => {
          (n("update:modelValue", ""),
            (d.value = ""),
            u(() => {
              k();
            }));
        },
        b = () => {
          !e.disabled && n("icon-click");
        },
        x = (t) => {
          e.disabled || (h.value = !h.value);
        },
        S = (t) => {
          e.disabled || n("search", d.value);
        };
      return () => {
        var l,
          a,
          i,
          {
            icon: u,
            size: c = Le(g),
            disabled: v,
            type: m,
            clearable: k,
            suffix: M,
            theme: C,
            prefix: z,
            shape: B,
            inputType: A,
          } = e,
          T = Oe(null === (l = r.suffix) || void 0 === l ? void 0 : l.call(r)),
          O = Oe(null === (a = r.prefix) || void 0 === a ? void 0 : a.call(r)),
          N = Oe(null === (i = r.controls) || void 0 === i ? void 0 : i.call(r)),
          V =
            (u ||
              o.onSearch ||
              T.length > 0 ||
              M ||
              O.length > 0 ||
              z ||
              "password" == m ||
              k ||
              N.length > 0) &&
            "hidden" !== m,
          D = P(
            P(
              {
                htmlAttrs: P({}, o),
                disabled: v,
                multiple: V,
                size: c,
                type: m,
                theme: C,
                shape: B,
                inputRef: f,
                inputType: A,
                value: d.value,
                showPassword: h.value,
              },
              s
            ),
            {},
            {
              onInput: (e) => {
                var t = e.target.value;
                ((d.value = t), n("update:modelValue", t), e.preventDefault(), e.stopPropagation());
              },
              onFocus: (e) => {
                ((p.value = !0), n("focus", e));
              },
              onBlur: (e) => {
                ((p.value = !1), n("blur", e));
              },
            }
          ),
          E = t(st, D, null);
        if (!V) return E;
        var L = k && !lt(d.value) && "password" != m && void 0 === o.readonly,
          j = {
            class: [
              {
                ["k-".concat(A)]: !0,
                ["k-".concat(A, "-focus")]: p.value,
                ["k-".concat(A, "-disabled")]: v,
                ["k-".concat(A, "-has-clear")]: L,
                ["k-".concat(A, "-sm")]: "small" == c,
                ["k-".concat(A, "-lg")]: "large" == c,
                ["k-".concat(A, "-").concat(C)]: C && "solid" != C,
                ["k-".concat(A, "-circle")]: "circle" == B,
              },
              o.class,
            ],
            style: o.style,
          };
        if (O.length > 0 || T.length > 0) {
          var F = [];
          O.length && F.push(t("div", { class: "k-input-group-prefix" }, [O]));
          var Y = [];
          (u && Y.push(t(I, { type: u, class: "k-".concat(A, "-icon"), onClick: b }, null)),
            z && Y.push(t("div", { class: "k-".concat(A, "-prefix") }, [z])),
            Y.push(E),
            k &&
              Y.push(
                t(
                  I,
                  {
                    type: ae,
                    class: [
                      "k-".concat(A, "-clearable"),
                      { ["k-".concat(A, "-clearable-hidden")]: !L },
                    ],
                    onClick: y,
                  },
                  null
                )
              ));
          var K = [];
          return (
            T.length > 0 && K.push(t("div", { class: "k-input-group-suffix" }, [T])),
            N.length && Y.push(N),
            t(
              it,
              { size: c, theme: C },
              { default: () => [F, t("div", w(j, { multiple: !0 }), [Y]), K] }
            )
          );
        }
        var R = ((l) => {
            var { suffix: a, visiblePasswordIcon: r, type: n, inputType: i } = e;
            return "password" == n && r
              ? t(I, { class: "k-input-password-icon", type: h.value ? ie : se, onClick: x }, null)
              : null != o && o.onSearch
                ? t(I, { type: ge, class: "k-input-search-icon", onClick: S }, null)
                : l.length > 0
                  ? l
                  : a
                    ? t("div", { class: "k-input-suffix" }, [a])
                    : null;
          })(T),
          _ = [];
        return (
          u && _.push(t(I, { type: u, class: "k-".concat(A, "-icon"), onClick: b }, null)),
          z && _.push(t("div", { class: "k-".concat(A, "-prefix") }, [z])),
          _.push(E),
          k &&
            _.push(
              t(
                I,
                {
                  type: ae,
                  class: [
                    "k-".concat(A, "-clearable"),
                    { ["k-".concat(A, "-clearable-hidden")]: !L },
                  ],
                  onClick: y,
                },
                null
              )
            ),
          R && _.push(R),
          N.length && _.push(N),
          t("div", w(j, { multiple: !0 }), [..._])
        );
      };
    },
  }),
  ct = j(ut),
  dt = j(
    e({
      inheritAttrs: !1,
      name: "InputNumber",
      props: {
        modelValue: [Number, String],
        value: [Number, String],
        min: { type: Number, default: -1 / 0 },
        max: { type: Number, default: 1 / 0 },
        step: { type: Number, default: 1 },
        precision: Number,
        formatter: Function,
        parser: Function,
        disabled: Boolean,
        readonly: Boolean,
        controls: { type: Boolean, default: !0 },
        suffix: String,
        prefix: String,
        theme: { type: String, default: "light" },
        icon: [String, Array],
        size: { type: String, validator: (e) => Ee.indexOf(e) >= 0 },
        placeholder: String,
      },
      emits: ["update:modelValue", "change", "blur"],
      setup(e, r) {
        var { slots: n, attrs: o, emit: i } = r,
          s = v("size", null),
          u = l(""),
          d = l(null);
        c(
          () => e.modelValue,
          (t) => {
            var l = at(t, e.precision);
            l !== u.value && (u.value = l);
          },
          { immediate: !0 }
        );
        var p = (e) => {
            (i("update:modelValue", e), i("change", e));
          },
          m = a(() =>
            null !== d.value
              ? d.value
              : "" === u.value
                ? ""
                : e.formatter
                  ? e.formatter(u.value)
                  : u.value
          ),
          h = (t) => {
            var l = ((t) => {
              if (!rt(t)) return "" === t ? "" : u.value;
              try {
                var l = new tt(t);
                return (
                  e.max !== 1 / 0 && l.gt(e.max) && (l = new tt(e.max)),
                  e.min !== -1 / 0 && l.lt(e.min) && (l = new tt(e.min)),
                  void 0 !== e.precision ? l.toFixed(e.precision) : l.toFixed()
                );
              } catch (e) {
                return u.value;
              }
            })(e.parser ? e.parser(t) : t);
            ((u.value = l), (d.value = null));
            var a = "" === l ? void 0 : Number(l);
            p(a);
          },
          f = (t) => {
            d.value = t;
            var l = e.parser ? e.parser(t) : t;
            if ("" === t) return ((u.value = ""), void p(void 0));
            if (rt(l)) {
              var a = new tt(l).toFixed();
              if (((u.value = a), p(Number(a)), e.formatter)) {
                var r = e.formatter(a);
                r !== d.value && (d.value = r);
              }
            }
          },
          g = (e) => {
            (h(null !== d.value ? d.value : u.value), i("blur", e));
          },
          k = (t) => {
            if (!e.disabled && !e.readonly) {
              var l = rt(u.value) ? u.value : 0,
                a = "up" === t ? new tt(l).plus(e.step) : new tt(l).minus(e.step);
              h(a.toFixed());
            }
          };
        return () => {
          var l = P(
            P({}, o),
            {},
            {
              modelValue: m.value,
              disabled: e.disabled,
              readonly: e.readonly,
              clearable: !1,
              placeholder: e.placeholder,
              suffix: e.suffix,
              prefix: e.prefix,
              size: e.size || Le(s),
              icon: e.icon,
              theme: e.theme,
              inputType: "input-number",
              "onUpdate:modelValue": f,
              onBlur: g,
              onKeydown: (e) => {
                ("ArrowUp" === e.key && (e.preventDefault(), k("up")),
                  "ArrowDown" === e.key && (e.preventDefault(), k("down")));
              },
            }
          );
          return t(ct, l, {
            suffix: () => {
              var e;
              return null === (e = n.suffix) || void 0 === e ? void 0 : e.call(n);
            },
            prefix: () => {
              var e;
              return null === (e = n.prefix) || void 0 === e ? void 0 : e.call(n);
            },
            controls: () =>
              e.controls &&
              !e.readonly &&
              !e.disabled &&
              t("div", { class: "k-input-number-controls" }, [
                t("span", { class: "k-input-number-control", onClick: () => k("up") }, [
                  t(I, { type: le }, null),
                ]),
                t("span", { class: "k-input-number-control", onClick: () => k("down") }, [
                  t(I, { type: ee }, null),
                ]),
              ]),
          });
        };
      },
    })
  ),
  vt = e({
    name: "TextArea",
    props: {
      modelValue: [String, Number, Object, Array],
      value: [String, Number, Object, Array],
      theme: { type: String, default: "light" },
      size: String,
      disabled: Boolean,
    },
    setup(e, a) {
      var { attrs: r, emit: n, listeners: o } = a,
        i = l(e.modelValue || e.value);
      return (
        c(
          () => e.modelValue,
          (e) => {
            i.value = e;
          }
        ),
        () => {
          var { theme: l, disabled: a, size: s } = e,
            u = P(
              P(
                P(
                  {
                    class: [
                      "k-textarea",
                      {
                        ["k-textarea-".concat(l)]: "light" == l,
                        "k-textarea-sm": "small" == s,
                        "k-textarea-lg": "large" == s,
                      },
                    ],
                  },
                  r
                ),
                {},
                { disabled: a, value: i.value },
                o
              ),
              {},
              {
                onInput: (e) => {
                  var t = e.target.value;
                  n("update:modelValue", t);
                },
              }
            );
          return t("textarea", u, null);
        }
      );
    },
  }),
  pt = j(vt),
  mt = j(
    e({
      name: "Option",
      props: {
        value: { type: [String, Number], required: !0 },
        label: { type: [String, Number] },
        disabled: Boolean,
        checked: Boolean,
        active: Boolean,
        multiple: Boolean,
      },
      methods: {},
      setup(e, l) {
        var r,
          { slots: n, emit: o } = l,
          i = e.label || (null === (r = n.default) || void 0 === r ? void 0 : r.call(n)) || e.value,
          s = a(() => e.checked),
          u = () => {
            e.disabled || o("select", { value: e.value, label: i });
          };
        return () => {
          var { multiple: l, disabled: a } = e,
            r = [
              "k-select-item",
              {
                "k-select-item-selected": s.value,
                "k-select-item-active": e.active,
                "k-select-item-disabled": a,
              },
            ];
          return t("li", { class: r, onClick: u }, [
            t("span", null, [i, l ? t(I, { type: X }, null) : null]),
          ]);
        };
      },
    })
  ),
  ht = {
    name: "zh-cn",
    k: {
      datePicker: {
        year: "年",
        month: "月",
        selectYear: "请选择年",
        selectMonth: "请选择月",
        selectDate: "请选择日期",
        selectTime: "请选择时间",
        startDate: "开始日期",
        endDate: "结束日期",
        today: "今天",
        now: "此刻",
        ok: "确定",
        back: "返回",
      },
      form: {
        required: "请输入 {label}",
        email: "请输入有效的邮箱地址",
        phone: "请输入有效的手机号码",
        number: "请输入有效的数字",
        num_min: "数值不能小于 {min}",
        num_max: "数值不能大于 {max}",
      },
      empty: { description: "暂无数据" },
      common: { ok: "确定", cancel: "取消" },
      page: { page: "页", pageSize: "条/页", goto: "跳至", items: "条数据", total: "共" },
      select: { placeholder: "请选择", loading: "加载中...", emptyText: "暂无数据" },
      table: { emptyText: "暂无数据" },
      upload: {
        successful: "上传成功",
        failed: "上传失败",
        errorFileSize: "文件尺寸不合法",
        releaseToUpload: "松手开始上传",
      },
      image: { preview: "预览" },
    },
  },
  ft = e({
    name: "Empty",
    props: { description: String, image: String, imageStyle: Object },
    setup(e, l) {
      var { slots: r } = l,
        n = v("locale", ht),
        o = a(() => (n instanceof Object && "value" in n ? n.value : n));
      return () => {
        var l,
          { image: a, imageStyle: n, description: i } = e;
        return t("div", { class: "k-empty" }, [
          t("div", { class: "k-empty-content" }, [
            a || r.image
              ? r.image
                ? r.image()
                : t("img", { src: a, class: "k-empty-image", style: n }, null)
              : t(I, { type: ue, class: "k-empty-icon" }, null),
            null !== i
              ? t("p", { class: "k-empty-description" }, [
                  i ||
                    (null === (l = r.description) || void 0 === l ? void 0 : l.call(r)) ||
                    (null == o ? void 0 : o.value.k.empty.description),
                ])
              : null,
            r.default ? t("div", { class: "k-empty-footer" }, [r.default()]) : null,
          ]),
        ]);
      };
    },
  }),
  gt = j(ft),
  kt = e({
    name: "Select",
    directives: { transfer: Ke, resize: Se },
    props: {
      placeholder: String,
      size: { default: "default", validator: (e) => ["small", "large", "default"].indexOf(e) >= 0 },
      placement: {
        validator: (e) =>
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].includes(e),
        default: "bottom-left",
      },
      width: Number,
      maxTagCount: Number,
      modelValue: [String, Number, Array],
      value: [String, Number, Array],
      clearable: { type: Boolean, default: !0 },
      filterable: Boolean,
      block: Boolean,
      disabled: Boolean,
      multiple: Boolean,
      loading: Boolean,
      bordered: { type: Boolean, default: !0 },
      showArrow: { type: Boolean, default: !0 },
      options: Array,
      theme: { type: String, default: "light" },
      emptyText: String,
      loadingText: String,
      icon: [String, Array],
      shape: String,
      arrowIcon: [String, Array],
    },
    setup(e, p) {
      var { slots: m, emit: h, attrs: f, listeners: g } = p,
        k = a(() => {
          var e = v("locale", ht);
          return e instanceof Object && "value" in e ? e.value : e;
        }),
        y = l(!1),
        b = l(!1),
        w = l(
          e.multiple
            ? e.modelValue || e.value || []
            : lt(e.modelValue || e.value)
              ? []
              : [e.modelValue || e.value]
        ),
        S = l(!1),
        M = l(""),
        C = l(),
        z = l(""),
        B = l(!1),
        A = l(),
        T = null == f ? void 0 : f.onSearch,
        O = l(),
        N = l("bottom"),
        V = l(),
        D = l(0),
        E = l(0),
        L = l(e.placement),
        j = l(),
        F = l(-1),
        Y = l(0),
        K = l(!1);
      (c(
        () => e.placement,
        (e) => {
          ((L.value = e), y.value && H());
        }
      ),
        c(
          () => e.options,
          (e) => {
            y.value && H();
          },
          { deep: !0 }
        ),
        c(
          () => e.modelValue,
          (t) => {
            ((w.value = e.multiple ? t || [] : lt(t) ? [] : [t]), y.value && H());
          }
        ));
      var R = () => {
          var e = O.value,
            t = O.value.children[0].children[F.value],
            l = t.offsetTop,
            a = t.offsetHeight,
            r = l - e.clientHeight / 2 + a / 2;
          e.scrollTop = r;
        },
        _ = (e) => {
          var t = e.key;
          if ((y.value && 0 != le.value.size) || !K.value) {
            if (y.value) {
              if ("ArrowDown" === t) {
                var l = F.value;
                return (
                  l < Y.value - 1 ? (l += 1) : (l = 0),
                  (F.value = l),
                  R(),
                  void e.preventDefault()
                );
              }
              if ("ArrowUp" === t) {
                var a = F.value;
                return (
                  a >= 1 ? (a -= 1) : (a = Y.value - 1),
                  (F.value = a),
                  R(),
                  void e.preventDefault()
                );
              }
              if ("Enter" === t && F.value >= 0 && (K.value || B.value)) {
                var { label: r, value: n } = le.value[F.value];
                return (q({ label: r, value: n }), void e.preventDefault());
              }
              "Escape" == t && (K.value || B.value) && ((y.value = !1), W(), e.preventDefault());
            }
          } else ("ArrowDown" !== t && "ArrowUp" !== t) || te();
        };
      i(() => {
        (document.removeEventListener("keydown", _), document.removeEventListener("click", $));
      });
      var U = a(() => {
          var e = new Map();
          return (
            le.value.forEach((t) => {
              e.set(t.value, t.label);
            }),
            w.value.map((t) => {
              var l;
              return null !== (l = e.get(t)) && void 0 !== l ? l : t;
            })
          );
        }),
        H = () => {
          u(() => {
            var e;
            ((z.value = null === (e = V.value) || void 0 === e ? void 0 : e.offsetWidth),
              Re({
                refSelection: V,
                refPopper: O,
                currentPlacement: L,
                transOrigin: N,
                top: E,
                left: D,
              }));
          });
        };
      s(() => {
        (u(() => {
          var e;
          z.value = null === (e = V.value) || void 0 === e ? void 0 : e.offsetWidth;
        }),
          document.addEventListener("keydown", _));
      });
      var $ = (e) => {
          var t,
            l = (null === (t = V.value) || void 0 === t ? void 0 : t.$el) || V.value;
          O.value &&
            !O.value.contains(e.target) &&
            l &&
            !l.contains(e.target) &&
            ((y.value = !1), W());
        },
        W = () => {
          ((F.value = -1),
            (e.filterable || T) &&
              setTimeout(() => {
                ((M.value = ""),
                  A.value && ((A.value.value = ""), (A.value.style.width = "")),
                  (S.value = !1));
              }, 300));
        },
        q = (t) => {
          var l,
            { value: a, label: r } = P({}, t),
            n = !0;
          e.multiple
            ? ((null === (l = w.value) || void 0 === l ? void 0 : l.indexOf(a)) >= 0
                ? ((n = !1), (w.value = w.value.filter((e) => e !== a)))
                : w.value.push(a),
              H(),
              (T || e.filterable) && ((A.value.value = ""), (M.value = ""), Q()))
            : ((w.value = [a]), (y.value = !1), h("openChange", !1), W(), (F.value = -1));
          (Z(), h("select", { value: a, label: r, selected: n }));
        },
        G = (e) => {
          ((M.value = e.target.value),
            (F.value = -1),
            u(() => {
              ((e.target.style.width = C.value.offsetWidth + "px"), H());
            }),
            T &&
              (clearTimeout(j.value),
              (j.value = setTimeout(() => {
                (b.value
                  ? ((y.value = !0), h("openChange", !0), H())
                  : ((b.value = !0),
                    document.addEventListener("click", $),
                    u(() => {
                      ((y.value = !0), h("openChange", !0), H());
                    })),
                  h("search", e));
              }, 500))));
        },
        X = (e) => {
          S.value &&
            u((e) => {
              (A.value.focus(), (B.value = !0));
            });
        },
        Z = () => {
          var t = e.multiple ? w.value : w.value[0];
          (h("update:modelValue", t), h("change", t));
        },
        J = (e) => {
          ((w.value = []), Z(), W(), e.stopPropagation());
        },
        Q = () => {
          (e.filterable || T) &&
            ((S.value = !0),
            u(() => {
              var e;
              (null === (e = A.value) || void 0 === e || e.focus(), (B.value = !0));
            }));
        },
        te = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          e.disabled ||
            (T
              ? Q()
              : b.value
                ? ((y.value = t || !y.value), h("openChange", y.value), y.value ? (H(), Q()) : W())
                : ((b.value = !0),
                  document.addEventListener("click", $),
                  u(() => {
                    ((y.value = !0), h("openChange", !0), H(), Q());
                  })));
        },
        le = a(() => {
          var t,
            { options: l, loading: a } = e;
          if (a) return [];
          l ||
            ((l = []),
            Oe(null === (t = m.default) || void 0 === t ? void 0 : t.call(m)).forEach((e, t) => {
              var a,
                r,
                { label: n, value: o, disabled: i } = null == e ? void 0 : e.props;
              l.push({
                value: o,
                disabled: i,
                label:
                  n ||
                  (null == e ||
                  null === (a = e.children) ||
                  void 0 === a ||
                  null === (r = a.default) ||
                  void 0 === r ||
                  null === (r = r.call(a)[0]) ||
                  void 0 === r
                    ? void 0
                    : r.children) ||
                  o,
              });
            }));
          return l;
        }),
        ne = () => {
          var l,
            a = [],
            r =
              ((l = M.value),
              e.filterable && "" !== l.trim()
                ? le.value.filter((e) => e.label.toLowerCase().includes(l.toLowerCase()))
                : le.value);
          return (
            (Y.value = r.length),
            r.forEach((l, r) => {
              var { label: n, value: o, disabled: i } = P({}, l),
                s = ((t) => {
                  var l;
                  return e.multiple
                    ? (null === (l = w.value) || void 0 === l ? void 0 : l.indexOf(t)) >= 0
                    : !lt(w.value) && w.value[0] === t;
                })(o);
              a.push(
                t(
                  mt,
                  {
                    onSelect: q,
                    onMouseenter: () =>
                      ((e) => {
                        F.value = e;
                      })(r),
                    key: "".concat(o, "-").concat(n),
                    active: F.value == r,
                    value: o,
                    label: n,
                    disabled: i,
                    checked: s,
                    multiple: e.multiple,
                  },
                  null
                )
              );
            }),
            a
          );
        },
        oe = (t) => {
          var { key: l } = t;
          "Backspace" === l &&
            "" == M.value &&
            e.multiple &&
            w.value.length > 0 &&
            ((w.value = w.value.slice(0, -1)), Z(), H());
        },
        ie = a(() => e.clearable && !e.disabled && !lt(w.value) && !lt(U.value)),
        se = () => {
          var l = null;
          if (b.value) {
            var a = ne(),
              i = {
                ref: O,
                style: {
                  minWidth: "".concat(z.value, "px"),
                  left: "".concat(D.value, "px"),
                  top: "".concat(E.value, "px"),
                  transformOrigin: N.value,
                },
                class: [
                  "k-select-dropdown",
                  "k-scroll",
                  {
                    "k-select-dropdown-multiple": e.multiple,
                    "k-select-dropdown-sm": "small" == e.size,
                  },
                ],
              },
              s = t("div", { class: "k-select-loading" }, [
                t(I, { type: pe, spin: !0 }, null),
                t("span", null, [k.value.k.select.loading]),
              ]);
            l = t(
              r,
              { name: "".concat("k-select") },
              {
                default: () => [
                  n(
                    t("div", i, [
                      e.loading
                        ? s
                        : a.length
                          ? t("ul", null, [a])
                          : t(gt, { onClick: X, description: k.value.k.select.emptyText }, null),
                    ]),
                    [
                      [d("transfer"), !0],
                      [o, y.value],
                    ]
                  ),
                ],
              }
            );
          }
          return l;
        };
      return () => {
        var {
            disabled: l,
            size: a,
            multiple: r,
            placeholder: i,
            showArrow: s,
            bordered: u,
            theme: c,
            arrowIcon: v,
            icon: p,
            shape: m,
            filterable: h,
          } = e,
          f = [];
        void 0 === v && (v = ee);
        var g,
          b = n(
            t("div", { key: "search", class: "k-select-search-wrap" }, [
              t(
                "input",
                {
                  ref: A,
                  class: "k-select-search",
                  autoComplete: "off",
                  onChange: (e) => e.stopPropagation(),
                  onKeydown: oe,
                  onInput: G,
                  onBlur: () => {
                    y.value || (S.value = !1);
                  },
                },
                null
              ),
              t("span", { class: "k-select-search-mirror", ref: C }, [M.value]),
            ]),
            [[o, S.value]]
          ),
          z = i || (null == k ? void 0 : k.value.k.select.placeholder),
          O =
            z && lt(U.value) && !M.value ? t("div", { class: "k-select-placeholder" }, [z]) : null,
          N = { display: M.value.length ? "none" : "" },
          D = r
            ? t("div", { class: "k-select-labels", name: "k-select-tag" }, [
                ((g = U.value.map((l, a) =>
                  t("span", { class: "k-select-tag", key: l }, [
                    l,
                    t(
                      I,
                      {
                        type: re,
                        onClick: (t) =>
                          ((t, l) => {
                            e.disabled || (w.value.splice(l, 1), t.stopPropagation(), H(), Z());
                          })(t, a),
                      },
                      null
                    ),
                  ])
                )),
                e.maxTagCount &&
                  e.maxTagCount > 0 &&
                  g.length > e.maxTagCount &&
                  (g = g.slice(0, e.maxTagCount)).push(
                    t("span", { class: "k-select-tag" }, [
                      x("+"),
                      U.value.length - e.maxTagCount,
                      x("..."),
                    ])
                  ),
                g),
                b,
              ])
            : lt(U.value)
              ? null
              : t("div", { class: "k-select-label", style: N }, [U.value[0]]);
        (f.push(D), O && f.push(O), (!h && !T) || r || f.push(b));
        var E = { width: "".concat(e.width, "px") },
          L = !T && s ? t(I, { class: "k-select-arrow", type: v }, null) : null,
          P = [
            "k-select",
            {
              "k-select-disabled": l,
              "k-select-block": e.block,
              "k-select-opened": y.value,
              "k-select-borderless": !1 === u,
              "k-select-lg": "large" == a,
              "k-select-sm": "small" == a,
              "k-select-light": "light" == c,
              "k-select-has-icon": !!p,
              "k-select-circle": "circle" == m && !r,
              "k-select-multiple": r,
              "k-select-show-search": B.value,
              "k-select-show-tags": r && !lt(U.value),
              "k-select-has-clear": ie.value,
            },
          ],
          j = ie.value ? t(I, { class: "k-select-clearable", type: ae, onClick: J }, null) : null;
        return n(
          t(
            "div",
            {
              tabIndex: "0",
              class: P,
              style: E,
              onClick: te,
              onFocus: () => (K.value = !0),
              onBlur: () => (K.value = !1),
              ref: V,
            },
            [
              p ? t(I, { type: p, class: "k-select-icon" }, null) : null,
              t("div", { class: "k-select-selection" }, [f]),
              t("span", { class: "k-select-suffix" }, [L, j]),
              se(),
            ]
          ),
          [[d("resize"), H]]
        );
      };
    },
  }),
  yt = j(kt);
const bt = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50],
};
for (const e in bt) Object.freeze(bt[e]);
var wt = Object.freeze(bt);
const xt = Object.create(null);
for (const e in wt) Object.hasOwn(wt, e) && (xt[wt[e]] = e);
const St = { to: {}, get: {} };
function Mt(e, t, l) {
  return Math.min(Math.max(t, e), l);
}
function Ct(e) {
  const t = Math.round(e).toString(16).toUpperCase();
  return t.length < 2 ? "0" + t : t;
}
((St.get = function (e) {
  let t, l;
  switch (e.slice(0, 3).toLowerCase()) {
    case "hsl":
      ((t = St.get.hsl(e)), (l = "hsl"));
      break;
    case "hwb":
      ((t = St.get.hwb(e)), (l = "hwb"));
      break;
    default:
      ((t = St.get.rgb(e)), (l = "rgb"));
  }
  return t ? { model: l, value: t } : null;
}),
  (St.get.rgb = function (e) {
    if (!e) return null;
    let t,
      l,
      a,
      r = [0, 0, 0, 1];
    if ((t = e.match(/^#([a-f\d]{6})([a-f\d]{2})?$/i))) {
      for (a = t[2], t = t[1], l = 0; l < 3; l++) {
        const e = 2 * l;
        r[l] = Number.parseInt(t.slice(e, e + 2), 16);
      }
      a && (r[3] = Number.parseInt(a, 16) / 255);
    } else if ((t = e.match(/^#([a-f\d]{3,4})$/i))) {
      for (t = t[1], a = t[3], l = 0; l < 3; l++) r[l] = Number.parseInt(t[l] + t[l], 16);
      a && (r[3] = Number.parseInt(a + a, 16) / 255);
    } else if (
      (t = e.match(
        /^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i
      ))
    ) {
      for (l = 0; l < 3; l++) r[l] = Number.parseFloat(t[l + 1]);
      t[4] && (r[3] = t[5] ? 0.01 * Number.parseFloat(t[4]) : Number.parseFloat(t[4]));
    } else {
      if (
        !(t = e.match(
          /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i
        ))
      )
        return (t = e.toLowerCase().match(/^(\w+)$/))
          ? "transparent" === t[1]
            ? [0, 0, 0, 0]
            : Object.hasOwn(wt, t[1])
              ? ((r = wt[t[1]].slice()), (r[3] = 1), r)
              : null
          : null;
      for (l = 0; l < 3; l++) r[l] = Math.round(2.55 * Number.parseFloat(t[l + 1]));
      t[4] && (r[3] = t[5] ? 0.01 * Number.parseFloat(t[4]) : Number.parseFloat(t[4]));
    }
    for (l = 0; l < 3; l++) r[l] = Mt(r[l], 0, 255);
    return ((r[3] = Mt(r[3], 0, 1)), r);
  }),
  (St.get.hsl = function (e) {
    if (!e) return null;
    const t = e.match(
      /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i
    );
    if (t) {
      const e = Number.parseFloat(t[4]);
      return [
        ((Number.parseFloat(t[1]) % 360) + 360) % 360,
        Mt(Number.parseFloat(t[2]), 0, 100),
        Mt(Number.parseFloat(t[3]), 0, 100),
        Mt(Number.isNaN(e) ? 1 : e, 0, 1),
      ];
    }
    return null;
  }),
  (St.get.hwb = function (e) {
    if (!e) return null;
    const t = e.match(
      /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i
    );
    if (t) {
      const e = Number.parseFloat(t[4]);
      return [
        ((Number.parseFloat(t[1]) % 360) + 360) % 360,
        Mt(Number.parseFloat(t[2]), 0, 100),
        Mt(Number.parseFloat(t[3]), 0, 100),
        Mt(Number.isNaN(e) ? 1 : e, 0, 1),
      ];
    }
    return null;
  }),
  (St.to.hex = function (...e) {
    return "#" + Ct(e[0]) + Ct(e[1]) + Ct(e[2]) + (e[3] < 1 ? Ct(Math.round(255 * e[3])) : "");
  }),
  (St.to.rgb = function (...e) {
    return e.length < 4 || 1 === e[3]
      ? "rgb(" + Math.round(e[0]) + ", " + Math.round(e[1]) + ", " + Math.round(e[2]) + ")"
      : "rgba(" +
          Math.round(e[0]) +
          ", " +
          Math.round(e[1]) +
          ", " +
          Math.round(e[2]) +
          ", " +
          e[3] +
          ")";
  }),
  (St.to.rgb.percent = function (...e) {
    const t = Math.round((e[0] / 255) * 100),
      l = Math.round((e[1] / 255) * 100),
      a = Math.round((e[2] / 255) * 100);
    return e.length < 4 || 1 === e[3]
      ? "rgb(" + t + "%, " + l + "%, " + a + "%)"
      : "rgba(" + t + "%, " + l + "%, " + a + "%, " + e[3] + ")";
  }),
  (St.to.hsl = function (...e) {
    return e.length < 4 || 1 === e[3]
      ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
      : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
  }),
  (St.to.hwb = function (...e) {
    let t = "";
    return (
      e.length >= 4 && 1 !== e[3] && (t = ", " + e[3]),
      "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")"
    );
  }),
  (St.to.keyword = function (...e) {
    return xt[e.slice(0, 3)];
  }));
const zt = {};
for (const e of Object.keys(wt)) zt[wt[e]] = e;
const Bt = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    oklab: { channels: 3, labels: ["okl", "oka", "okb"] },
    lch: { channels: 3, labels: "lch" },
    oklch: { channels: 3, labels: ["okl", "okc", "okh"] },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] },
  },
  At = (6 / 29) ** 3;
function Tt(e) {
  const t = e > 0.0031308 ? 1.055 * e ** (1 / 2.4) - 0.055 : 12.92 * e;
  return Math.min(Math.max(0, t), 1);
}
function Ot(e) {
  return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
}
for (const e of Object.keys(Bt)) {
  if (!("channels" in Bt[e])) throw new Error("missing channels property: " + e);
  if (!("labels" in Bt[e])) throw new Error("missing channel labels property: " + e);
  if (Bt[e].labels.length !== Bt[e].channels)
    throw new Error("channel and label counts mismatch: " + e);
  const { channels: t, labels: l } = Bt[e];
  (delete Bt[e].channels,
    delete Bt[e].labels,
    Object.defineProperty(Bt[e], "channels", { value: t }),
    Object.defineProperty(Bt[e], "labels", { value: l }));
}
function Nt(e, t) {
  return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
}
function Vt(e) {
  const t = (function () {
      const e = {},
        t = Object.keys(Bt);
      for (let { length: l } = t, a = 0; a < l; a++) e[t[a]] = { distance: -1, parent: null };
      return e;
    })(),
    l = [e];
  for (t[e].distance = 0; l.length > 0; ) {
    const e = l.pop(),
      a = Object.keys(Bt[e]);
    for (let { length: r } = a, n = 0; n < r; n++) {
      const r = a[n],
        o = t[r];
      -1 === o.distance && ((o.distance = t[e].distance + 1), (o.parent = e), l.unshift(r));
    }
  }
  return t;
}
function Dt(e, t) {
  return function (l) {
    return t(e(l));
  };
}
function Et(e, t) {
  const l = [t[e].parent, e];
  let a = Bt[t[e].parent][e],
    r = t[e].parent;
  for (; t[r].parent; )
    (l.unshift(t[r].parent), (a = Dt(Bt[t[r].parent][r], a)), (r = t[r].parent));
  return ((a.conversion = l), a);
}
function Lt(e) {
  const t = Vt(e),
    l = {},
    a = Object.keys(t);
  for (let { length: e } = a, r = 0; r < e; r++) {
    const e = a[r];
    null !== t[e].parent && (l[e] = Et(e, t));
  }
  return l;
}
((Bt.rgb.hsl = function (e) {
  const t = e[0] / 255,
    l = e[1] / 255,
    a = e[2] / 255,
    r = Math.min(t, l, a),
    n = Math.max(t, l, a),
    o = n - r;
  let i, s;
  switch (n) {
    case r:
      i = 0;
      break;
    case t:
      i = (l - a) / o;
      break;
    case l:
      i = 2 + (a - t) / o;
      break;
    case a:
      i = 4 + (t - l) / o;
  }
  ((i = Math.min(60 * i, 360)), i < 0 && (i += 360));
  const u = (r + n) / 2;
  return ((s = n === r ? 0 : u <= 0.5 ? o / (n + r) : o / (2 - n - r)), [i, 100 * s, 100 * u]);
}),
  (Bt.rgb.hsv = function (e) {
    let t, l, a, r, n;
    const o = e[0] / 255,
      i = e[1] / 255,
      s = e[2] / 255,
      u = Math.max(o, i, s),
      c = u - Math.min(o, i, s),
      d = function (e) {
        return (u - e) / 6 / c + 0.5;
      };
    if (0 === c) ((r = 0), (n = 0));
    else {
      switch (((n = c / u), (t = d(o)), (l = d(i)), (a = d(s)), u)) {
        case o:
          r = a - l;
          break;
        case i:
          r = 1 / 3 + t - a;
          break;
        case s:
          r = 2 / 3 + l - t;
      }
      r < 0 ? (r += 1) : r > 1 && (r -= 1);
    }
    return [360 * r, 100 * n, 100 * u];
  }),
  (Bt.rgb.hwb = function (e) {
    const t = e[0],
      l = e[1];
    let a = e[2];
    const r = Bt.rgb.hsl(e)[0],
      n = (1 / 255) * Math.min(t, Math.min(l, a));
    return ((a = 1 - (1 / 255) * Math.max(t, Math.max(l, a))), [r, 100 * n, 100 * a]);
  }),
  (Bt.rgb.oklab = function (e) {
    const t = Ot(e[0] / 255),
      l = Ot(e[1] / 255),
      a = Ot(e[2] / 255),
      r = Math.cbrt(0.4122214708 * t + 0.5363325363 * l + 0.0514459929 * a),
      n = Math.cbrt(0.2119034982 * t + 0.6806995451 * l + 0.1073969566 * a),
      o = Math.cbrt(0.0883024619 * t + 0.2817188376 * l + 0.6299787005 * a);
    return [
      100 * (0.2104542553 * r + 0.793617785 * n - 0.0040720468 * o),
      100 * (1.9779984951 * r - 2.428592205 * n + 0.4505937099 * o),
      100 * (0.0259040371 * r + 0.7827717662 * n - 0.808675766 * o),
    ];
  }),
  (Bt.rgb.cmyk = function (e) {
    const t = e[0] / 255,
      l = e[1] / 255,
      a = e[2] / 255,
      r = Math.min(1 - t, 1 - l, 1 - a);
    return [
      100 * ((1 - t - r) / (1 - r) || 0),
      100 * ((1 - l - r) / (1 - r) || 0),
      100 * ((1 - a - r) / (1 - r) || 0),
      100 * r,
    ];
  }),
  (Bt.rgb.keyword = function (e) {
    const t = zt[e];
    if (t) return t;
    let l,
      a = Number.POSITIVE_INFINITY;
    for (const t of Object.keys(wt)) {
      const r = Nt(e, wt[t]);
      r < a && ((a = r), (l = t));
    }
    return l;
  }),
  (Bt.keyword.rgb = function (e) {
    return [...wt[e]];
  }),
  (Bt.rgb.xyz = function (e) {
    const t = Ot(e[0] / 255),
      l = Ot(e[1] / 255),
      a = Ot(e[2] / 255);
    return [
      100 * (0.4124564 * t + 0.3575761 * l + 0.1804375 * a),
      100 * (0.2126729 * t + 0.7151522 * l + 0.072175 * a),
      100 * (0.0193339 * t + 0.119192 * l + 0.9503041 * a),
    ];
  }),
  (Bt.rgb.lab = function (e) {
    const t = Bt.rgb.xyz(e);
    let l = t[0],
      a = t[1],
      r = t[2];
    ((l /= 95.047),
      (a /= 100),
      (r /= 108.883),
      (l = l > At ? l ** (1 / 3) : 7.787 * l + 16 / 116),
      (a = a > At ? a ** (1 / 3) : 7.787 * a + 16 / 116),
      (r = r > At ? r ** (1 / 3) : 7.787 * r + 16 / 116));
    return [116 * a - 16, 500 * (l - a), 200 * (a - r)];
  }),
  (Bt.hsl.rgb = function (e) {
    const t = e[0] / 360,
      l = e[1] / 100,
      a = e[2] / 100;
    let r, n;
    if (0 === l) return ((n = 255 * a), [n, n, n]);
    const o = a < 0.5 ? a * (1 + l) : a + l - a * l,
      i = 2 * a - o,
      s = [0, 0, 0];
    for (let e = 0; e < 3; e++)
      ((r = t + (1 / 3) * -(e - 1)),
        r < 0 && r++,
        r > 1 && r--,
        (n =
          6 * r < 1
            ? i + 6 * (o - i) * r
            : 2 * r < 1
              ? o
              : 3 * r < 2
                ? i + (o - i) * (2 / 3 - r) * 6
                : i),
        (s[e] = 255 * n));
    return s;
  }),
  (Bt.hsl.hsv = function (e) {
    const t = e[0];
    let l = e[1] / 100,
      a = e[2] / 100,
      r = l;
    const n = Math.max(a, 0.01);
    ((a *= 2), (l *= a <= 1 ? a : 2 - a), (r *= n <= 1 ? n : 2 - n));
    return [t, 100 * (0 === a ? (2 * r) / (n + r) : (2 * l) / (a + l)), 100 * ((a + l) / 2)];
  }),
  (Bt.hsv.rgb = function (e) {
    const t = e[0] / 60,
      l = e[1] / 100;
    let a = e[2] / 100;
    const r = Math.floor(t) % 6,
      n = t - Math.floor(t),
      o = 255 * a * (1 - l),
      i = 255 * a * (1 - l * n),
      s = 255 * a * (1 - l * (1 - n));
    switch (((a *= 255), r)) {
      case 0:
        return [a, s, o];
      case 1:
        return [i, a, o];
      case 2:
        return [o, a, s];
      case 3:
        return [o, i, a];
      case 4:
        return [s, o, a];
      case 5:
        return [a, o, i];
    }
  }),
  (Bt.hsv.hsl = function (e) {
    const t = e[0],
      l = e[1] / 100,
      a = e[2] / 100,
      r = Math.max(a, 0.01);
    let n, o;
    o = (2 - l) * a;
    const i = (2 - l) * r;
    return ((n = l * r), (n /= i <= 1 ? i : 2 - i), (n = n || 0), (o /= 2), [t, 100 * n, 100 * o]);
  }),
  (Bt.hwb.rgb = function (e) {
    const t = e[0] / 360;
    let l = e[1] / 100,
      a = e[2] / 100;
    const r = l + a;
    let n;
    r > 1 && ((l /= r), (a /= r));
    const o = Math.floor(6 * t),
      i = 1 - a;
    ((n = 6 * t - o), 1 & o && (n = 1 - n));
    const s = l + n * (i - l);
    let u, c, d;
    switch (o) {
      default:
      case 6:
      case 0:
        ((u = i), (c = s), (d = l));
        break;
      case 1:
        ((u = s), (c = i), (d = l));
        break;
      case 2:
        ((u = l), (c = i), (d = s));
        break;
      case 3:
        ((u = l), (c = s), (d = i));
        break;
      case 4:
        ((u = s), (c = l), (d = i));
        break;
      case 5:
        ((u = i), (c = l), (d = s));
    }
    return [255 * u, 255 * c, 255 * d];
  }),
  (Bt.cmyk.rgb = function (e) {
    const t = e[0] / 100,
      l = e[1] / 100,
      a = e[2] / 100,
      r = e[3] / 100;
    return [
      255 * (1 - Math.min(1, t * (1 - r) + r)),
      255 * (1 - Math.min(1, l * (1 - r) + r)),
      255 * (1 - Math.min(1, a * (1 - r) + r)),
    ];
  }),
  (Bt.xyz.rgb = function (e) {
    const t = e[0] / 100,
      l = e[1] / 100,
      a = e[2] / 100;
    let r, n, o;
    return (
      (r = 3.2404542 * t + -1.5371385 * l + -0.4985314 * a),
      (n = -0.969266 * t + 1.8760108 * l + 0.041556 * a),
      (o = 0.0556434 * t + -0.2040259 * l + 1.0572252 * a),
      (r = Tt(r)),
      (n = Tt(n)),
      (o = Tt(o)),
      [255 * r, 255 * n, 255 * o]
    );
  }),
  (Bt.xyz.lab = function (e) {
    let t = e[0],
      l = e[1],
      a = e[2];
    ((t /= 95.047),
      (l /= 100),
      (a /= 108.883),
      (t = t > At ? t ** (1 / 3) : 7.787 * t + 16 / 116),
      (l = l > At ? l ** (1 / 3) : 7.787 * l + 16 / 116),
      (a = a > At ? a ** (1 / 3) : 7.787 * a + 16 / 116));
    return [116 * l - 16, 500 * (t - l), 200 * (l - a)];
  }),
  (Bt.xyz.oklab = function (e) {
    const t = e[0] / 100,
      l = e[1] / 100,
      a = e[2] / 100,
      r = Math.cbrt(0.8189330101 * t + 0.3618667424 * l - 0.1288597137 * a),
      n = Math.cbrt(0.0329845436 * t + 0.9293118715 * l + 0.0361456387 * a),
      o = Math.cbrt(0.0482003018 * t + 0.2643662691 * l + 0.633851707 * a);
    return [
      100 * (0.2104542553 * r + 0.793617785 * n - 0.0040720468 * o),
      100 * (1.9779984951 * r - 2.428592205 * n + 0.4505937099 * o),
      100 * (0.0259040371 * r + 0.7827717662 * n - 0.808675766 * o),
    ];
  }),
  (Bt.oklab.oklch = function (e) {
    return Bt.lab.lch(e);
  }),
  (Bt.oklab.xyz = function (e) {
    const t = e[0] / 100,
      l = e[1] / 100,
      a = e[2] / 100,
      r = (0.999999998 * t + 0.396337792 * l + 0.215803758 * a) ** 3,
      n = (1.000000008 * t - 0.105561342 * l - 0.063854175 * a) ** 3,
      o = (1.000000055 * t - 0.089484182 * l - 1.291485538 * a) ** 3;
    return [
      100 * (1.227013851 * r - 0.55779998 * n + 0.281256149 * o),
      100 * (-0.040580178 * r + 1.11225687 * n - 0.071676679 * o),
      100 * (-0.076381285 * r - 0.421481978 * n + 1.58616322 * o),
    ];
  }),
  (Bt.oklab.rgb = function (e) {
    const t = e[0] / 100,
      l = e[1] / 100,
      a = e[2] / 100,
      r = (t + 0.3963377774 * l + 0.2158037573 * a) ** 3,
      n = (t - 0.1055613458 * l - 0.0638541728 * a) ** 3,
      o = (t - 0.0894841775 * l - 1.291485548 * a) ** 3;
    return [
      255 * Tt(4.0767416621 * r - 3.3077115913 * n + 0.2309699292 * o),
      255 * Tt(-1.2684380046 * r + 2.6097574011 * n - 0.3413193965 * o),
      255 * Tt(-0.0041960863 * r - 0.7034186147 * n + 1.707614701 * o),
    ];
  }),
  (Bt.oklch.oklab = function (e) {
    return Bt.lch.lab(e);
  }),
  (Bt.lab.xyz = function (e) {
    let t, l, a;
    ((l = (e[0] + 16) / 116), (t = e[1] / 500 + l), (a = l - e[2] / 200));
    const r = l ** 3,
      n = t ** 3,
      o = a ** 3;
    return (
      (l = r > At ? r : (l - 16 / 116) / 7.787),
      (t = n > At ? n : (t - 16 / 116) / 7.787),
      (a = o > At ? o : (a - 16 / 116) / 7.787),
      (t *= 95.047),
      (l *= 100),
      (a *= 108.883),
      [t, l, a]
    );
  }),
  (Bt.lab.lch = function (e) {
    const t = e[0],
      l = e[1],
      a = e[2];
    let r;
    ((r = (360 * Math.atan2(a, l)) / 2 / Math.PI), r < 0 && (r += 360));
    return [t, Math.sqrt(l * l + a * a), r];
  }),
  (Bt.lch.lab = function (e) {
    const t = e[0],
      l = e[1],
      a = (e[2] / 360) * 2 * Math.PI;
    return [t, l * Math.cos(a), l * Math.sin(a)];
  }),
  (Bt.rgb.ansi16 = function (e, t = null) {
    const [l, a, r] = e;
    let n = null === t ? Bt.rgb.hsv(e)[2] : t;
    if (((n = Math.round(n / 50)), 0 === n)) return 30;
    let o = 30 + ((Math.round(r / 255) << 2) | (Math.round(a / 255) << 1) | Math.round(l / 255));
    return (2 === n && (o += 60), o);
  }),
  (Bt.hsv.ansi16 = function (e) {
    return Bt.rgb.ansi16(Bt.hsv.rgb(e), e[2]);
  }),
  (Bt.rgb.ansi256 = function (e) {
    const t = e[0],
      l = e[1],
      a = e[2];
    if (t >> 4 == l >> 4 && l >> 4 == a >> 4)
      return t < 8 ? 16 : t > 248 ? 231 : Math.round(((t - 8) / 247) * 24) + 232;
    return (
      16 +
      36 * Math.round((t / 255) * 5) +
      6 * Math.round((l / 255) * 5) +
      Math.round((a / 255) * 5)
    );
  }),
  (Bt.ansi16.rgb = function (e) {
    let t = (e = e[0]) % 10;
    if (0 === t || 7 === t) return (e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t]);
    const l = 0.5 * (Math.trunc(e > 50) + 1);
    return [(1 & t) * l * 255, ((t >> 1) & 1) * l * 255, ((t >> 2) & 1) * l * 255];
  }),
  (Bt.ansi256.rgb = function (e) {
    if ((e = e[0]) >= 232) {
      const t = 10 * (e - 232) + 8;
      return [t, t, t];
    }
    let t;
    e -= 16;
    return [
      (Math.floor(e / 36) / 5) * 255,
      (Math.floor((t = e % 36) / 6) / 5) * 255,
      ((t % 6) / 5) * 255,
    ];
  }),
  (Bt.rgb.hex = function (e) {
    const t = (
      ((255 & Math.round(e[0])) << 16) +
      ((255 & Math.round(e[1])) << 8) +
      (255 & Math.round(e[2]))
    )
      .toString(16)
      .toUpperCase();
    return "000000".slice(t.length) + t;
  }),
  (Bt.hex.rgb = function (e) {
    const t = e.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
    if (!t) return [0, 0, 0];
    let l = t[0];
    3 === t[0].length && (l = [...l].map((e) => e + e).join(""));
    const a = Number.parseInt(l, 16);
    return [(a >> 16) & 255, (a >> 8) & 255, 255 & a];
  }),
  (Bt.rgb.hcg = function (e) {
    const t = e[0] / 255,
      l = e[1] / 255,
      a = e[2] / 255,
      r = Math.max(Math.max(t, l), a),
      n = Math.min(Math.min(t, l), a),
      o = r - n;
    let i;
    return (
      (i = o <= 0 ? 0 : r === t ? ((l - a) / o) % 6 : r === l ? 2 + (a - t) / o : 4 + (t - l) / o),
      (i /= 6),
      (i %= 1),
      [360 * i, 100 * o, 100 * (o < 1 ? n / (1 - o) : 0)]
    );
  }),
  (Bt.hsl.hcg = function (e) {
    const t = e[1] / 100,
      l = e[2] / 100,
      a = l < 0.5 ? 2 * t * l : 2 * t * (1 - l);
    let r = 0;
    return (a < 1 && (r = (l - 0.5 * a) / (1 - a)), [e[0], 100 * a, 100 * r]);
  }),
  (Bt.hsv.hcg = function (e) {
    const t = e[1] / 100,
      l = e[2] / 100,
      a = t * l;
    let r = 0;
    return (a < 1 && (r = (l - a) / (1 - a)), [e[0], 100 * a, 100 * r]);
  }),
  (Bt.hcg.rgb = function (e) {
    const t = e[0] / 360,
      l = e[1] / 100,
      a = e[2] / 100;
    if (0 === l) return [255 * a, 255 * a, 255 * a];
    const r = [0, 0, 0],
      n = (t % 1) * 6,
      o = n % 1,
      i = 1 - o;
    let s = 0;
    switch (Math.floor(n)) {
      case 0:
        ((r[0] = 1), (r[1] = o), (r[2] = 0));
        break;
      case 1:
        ((r[0] = i), (r[1] = 1), (r[2] = 0));
        break;
      case 2:
        ((r[0] = 0), (r[1] = 1), (r[2] = o));
        break;
      case 3:
        ((r[0] = 0), (r[1] = i), (r[2] = 1));
        break;
      case 4:
        ((r[0] = o), (r[1] = 0), (r[2] = 1));
        break;
      default:
        ((r[0] = 1), (r[1] = 0), (r[2] = i));
    }
    return ((s = (1 - l) * a), [255 * (l * r[0] + s), 255 * (l * r[1] + s), 255 * (l * r[2] + s)]);
  }),
  (Bt.hcg.hsv = function (e) {
    const t = e[1] / 100,
      l = t + (e[2] / 100) * (1 - t);
    let a = 0;
    return (l > 0 && (a = t / l), [e[0], 100 * a, 100 * l]);
  }),
  (Bt.hcg.hsl = function (e) {
    const t = e[1] / 100,
      l = (e[2] / 100) * (1 - t) + 0.5 * t;
    let a = 0;
    return (
      l > 0 && l < 0.5 ? (a = t / (2 * l)) : l >= 0.5 && l < 1 && (a = t / (2 * (1 - l))),
      [e[0], 100 * a, 100 * l]
    );
  }),
  (Bt.hcg.hwb = function (e) {
    const t = e[1] / 100,
      l = t + (e[2] / 100) * (1 - t);
    return [e[0], 100 * (l - t), 100 * (1 - l)];
  }),
  (Bt.hwb.hcg = function (e) {
    const t = e[1] / 100,
      l = 1 - e[2] / 100,
      a = l - t;
    let r = 0;
    return (a < 1 && (r = (l - a) / (1 - a)), [e[0], 100 * a, 100 * r]);
  }),
  (Bt.apple.rgb = function (e) {
    return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
  }),
  (Bt.rgb.apple = function (e) {
    return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
  }),
  (Bt.gray.rgb = function (e) {
    return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
  }),
  (Bt.gray.hsl = function (e) {
    return [0, 0, e[0]];
  }),
  (Bt.gray.hsv = Bt.gray.hsl),
  (Bt.gray.hwb = function (e) {
    return [0, 100, e[0]];
  }),
  (Bt.gray.cmyk = function (e) {
    return [0, 0, 0, e[0]];
  }),
  (Bt.gray.lab = function (e) {
    return [e[0], 0, 0];
  }),
  (Bt.gray.hex = function (e) {
    const t = 255 & Math.round((e[0] / 100) * 255),
      l = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return "000000".slice(l.length) + l;
  }),
  (Bt.rgb.gray = function (e) {
    return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
  }));
const Pt = {},
  jt = Object.keys(Bt);
function It(e) {
  const t = function (...t) {
    const l = t[0];
    return null == l ? l : (l.length > 1 && (t = l), e(t));
  };
  return ("conversion" in e && (t.conversion = e.conversion), t);
}
function Ft(e) {
  const t = function (...t) {
    const l = t[0];
    if (null == l) return l;
    l.length > 1 && (t = l);
    const a = e(t);
    if ("object" == typeof a)
      for (let { length: e } = a, t = 0; t < e; t++) a[t] = Math.round(a[t]);
    return a;
  };
  return ("conversion" in e && (t.conversion = e.conversion), t);
}
for (const e of jt) {
  ((Pt[e] = {}),
    Object.defineProperty(Pt[e], "channels", { value: Bt[e].channels }),
    Object.defineProperty(Pt[e], "labels", { value: Bt[e].labels }));
  const t = Lt(e),
    l = Object.keys(t);
  for (const a of l) {
    const l = t[a];
    ((Pt[e][a] = Ft(l)), (Pt[e][a].raw = It(l)));
  }
}
const Yt = ["keyword", "gray", "hex"],
  Kt = {};
for (const e of Object.keys(Pt)) Kt[[...Pt[e].labels].sort().join("")] = e;
const Rt = {};
function _t(e, t) {
  if (!(this instanceof _t)) return new _t(e, t);
  if ((t && t in Yt && (t = null), t && !(t in Pt))) throw new Error("Unknown model: " + t);
  let l, a;
  if (null == e) ((this.model = "rgb"), (this.color = [0, 0, 0]), (this.valpha = 1));
  else if (e instanceof _t)
    ((this.model = e.model), (this.color = [...e.color]), (this.valpha = e.valpha));
  else if ("string" == typeof e) {
    const t = St.get(e);
    if (null === t) throw new Error("Unable to parse color from string: " + e);
    ((this.model = t.model),
      (a = Pt[this.model].channels),
      (this.color = t.value.slice(0, a)),
      (this.valpha = "number" == typeof t.value[a] ? t.value[a] : 1));
  } else if (e.length > 0) {
    ((this.model = t || "rgb"), (a = Pt[this.model].channels));
    const l = Array.prototype.slice.call(e, 0, a);
    ((this.color = Wt(l, a)), (this.valpha = "number" == typeof e[a] ? e[a] : 1));
  } else if ("number" == typeof e)
    ((this.model = "rgb"),
      (this.color = [(e >> 16) & 255, (e >> 8) & 255, 255 & e]),
      (this.valpha = 1));
  else {
    this.valpha = 1;
    const t = Object.keys(e);
    "alpha" in e &&
      (t.splice(t.indexOf("alpha"), 1), (this.valpha = "number" == typeof e.alpha ? e.alpha : 0));
    const a = t.sort().join("");
    if (!(a in Kt)) throw new Error("Unable to parse color from object: " + JSON.stringify(e));
    this.model = Kt[a];
    const { labels: r } = Pt[this.model],
      n = [];
    for (l = 0; l < r.length; l++) n.push(e[r[l]]);
    this.color = Wt(n);
  }
  if (Rt[this.model])
    for (a = Pt[this.model].channels, l = 0; l < a; l++) {
      const e = Rt[this.model][l];
      e && (this.color[l] = e(this.color[l]));
    }
  ((this.valpha = Math.max(0, Math.min(1, this.valpha))), Object.freeze && Object.freeze(this));
}
_t.prototype = {
  toString() {
    return this.string();
  },
  toJSON() {
    return this[this.model]();
  },
  string(e) {
    let t = this.model in St.to ? this : this.rgb();
    t = t.round("number" == typeof e ? e : 1);
    const l = 1 === t.valpha ? t.color : [...t.color, this.valpha];
    return St.to[t.model](...l);
  },
  percentString(e) {
    const t = this.rgb().round("number" == typeof e ? e : 1),
      l = 1 === t.valpha ? t.color : [...t.color, this.valpha];
    return St.to.rgb.percent(...l);
  },
  array() {
    return 1 === this.valpha ? [...this.color] : [...this.color, this.valpha];
  },
  object() {
    const e = {},
      { channels: t } = Pt[this.model],
      { labels: l } = Pt[this.model];
    for (let a = 0; a < t; a++) e[l[a]] = this.color[a];
    return (1 !== this.valpha && (e.alpha = this.valpha), e);
  },
  unitArray() {
    const e = this.rgb().color;
    return (
      (e[0] /= 255),
      (e[1] /= 255),
      (e[2] /= 255),
      1 !== this.valpha && e.push(this.valpha),
      e
    );
  },
  unitObject() {
    const e = this.rgb().object();
    return (
      (e.r /= 255),
      (e.g /= 255),
      (e.b /= 255),
      1 !== this.valpha && (e.alpha = this.valpha),
      e
    );
  },
  round(e) {
    return ((e = Math.max(e || 0, 0)), new _t([...this.color.map(Ut(e)), this.valpha], this.model));
  },
  alpha(e) {
    return void 0 !== e
      ? new _t([...this.color, Math.max(0, Math.min(1, e))], this.model)
      : this.valpha;
  },
  red: Ht("rgb", 0, $t(255)),
  green: Ht("rgb", 1, $t(255)),
  blue: Ht("rgb", 2, $t(255)),
  hue: Ht(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (e) => ((e % 360) + 360) % 360),
  saturationl: Ht("hsl", 1, $t(100)),
  lightness: Ht("hsl", 2, $t(100)),
  saturationv: Ht("hsv", 1, $t(100)),
  value: Ht("hsv", 2, $t(100)),
  chroma: Ht("hcg", 1, $t(100)),
  gray: Ht("hcg", 2, $t(100)),
  white: Ht("hwb", 1, $t(100)),
  wblack: Ht("hwb", 2, $t(100)),
  cyan: Ht("cmyk", 0, $t(100)),
  magenta: Ht("cmyk", 1, $t(100)),
  yellow: Ht("cmyk", 2, $t(100)),
  black: Ht("cmyk", 3, $t(100)),
  x: Ht("xyz", 0, $t(95.047)),
  y: Ht("xyz", 1, $t(100)),
  z: Ht("xyz", 2, $t(108.833)),
  l: Ht("lab", 0, $t(100)),
  a: Ht("lab", 1),
  b: Ht("lab", 2),
  keyword(e) {
    return void 0 !== e ? new _t(e) : Pt[this.model].keyword(this.color);
  },
  hex(e) {
    return void 0 !== e ? new _t(e) : St.to.hex(...this.rgb().round().color);
  },
  hexa(e) {
    if (void 0 !== e) return new _t(e);
    const t = this.rgb().round().color;
    let l = Math.round(255 * this.valpha)
      .toString(16)
      .toUpperCase();
    return (1 === l.length && (l = "0" + l), St.to.hex(...t) + l);
  },
  rgbNumber() {
    const e = this.rgb().color;
    return ((255 & e[0]) << 16) | ((255 & e[1]) << 8) | (255 & e[2]);
  },
  luminosity() {
    const e = this.rgb().color,
      t = [];
    for (const [l, a] of e.entries()) {
      const e = a / 255;
      t[l] = e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
    }
    return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
  },
  contrast(e) {
    const t = this.luminosity(),
      l = e.luminosity();
    return t > l ? (t + 0.05) / (l + 0.05) : (l + 0.05) / (t + 0.05);
  },
  level(e) {
    const t = this.contrast(e);
    return t >= 7 ? "AAA" : t >= 4.5 ? "AA" : "";
  },
  isDark() {
    const e = this.rgb().color;
    return (2126 * e[0] + 7152 * e[1] + 722 * e[2]) / 1e4 < 128;
  },
  isLight() {
    return !this.isDark();
  },
  negate() {
    const e = this.rgb();
    for (let t = 0; t < 3; t++) e.color[t] = 255 - e.color[t];
    return e;
  },
  lighten(e) {
    const t = this.hsl();
    return ((t.color[2] += t.color[2] * e), t);
  },
  darken(e) {
    const t = this.hsl();
    return ((t.color[2] -= t.color[2] * e), t);
  },
  saturate(e) {
    const t = this.hsl();
    return ((t.color[1] += t.color[1] * e), t);
  },
  desaturate(e) {
    const t = this.hsl();
    return ((t.color[1] -= t.color[1] * e), t);
  },
  whiten(e) {
    const t = this.hwb();
    return ((t.color[1] += t.color[1] * e), t);
  },
  blacken(e) {
    const t = this.hwb();
    return ((t.color[2] += t.color[2] * e), t);
  },
  grayscale() {
    const e = this.rgb().color,
      t = 0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2];
    return _t.rgb(t, t, t);
  },
  fade(e) {
    return this.alpha(this.valpha - this.valpha * e);
  },
  opaquer(e) {
    return this.alpha(this.valpha + this.valpha * e);
  },
  rotate(e) {
    const t = this.hsl();
    let l = t.color[0];
    return ((l = (l + e) % 360), (l = l < 0 ? 360 + l : l), (t.color[0] = l), t);
  },
  mix(e, t) {
    if (!e || !e.rgb)
      throw new Error(
        'Argument to "mix" was not a Color instance, but rather an instance of ' + typeof e
      );
    const l = e.rgb(),
      a = this.rgb(),
      r = void 0 === t ? 0.5 : t,
      n = 2 * r - 1,
      o = l.alpha() - a.alpha(),
      i = ((n * o === -1 ? n : (n + o) / (1 + n * o)) + 1) / 2,
      s = 1 - i;
    return _t.rgb(
      i * l.red() + s * a.red(),
      i * l.green() + s * a.green(),
      i * l.blue() + s * a.blue(),
      l.alpha() * r + a.alpha() * (1 - r)
    );
  },
};
for (const e of Object.keys(Pt)) {
  if (Yt.includes(e)) continue;
  const { channels: t } = Pt[e];
  ((_t.prototype[e] = function (...t) {
    return this.model === e
      ? new _t(this)
      : t.length > 0
        ? new _t(t, e)
        : new _t(
            [...((l = Pt[this.model][e].raw(this.color)), Array.isArray(l) ? l : [l]), this.valpha],
            e
          );
    var l;
  }),
    (_t[e] = function (...l) {
      let a = l[0];
      return ("number" == typeof a && (a = Wt(l, t)), new _t(a, e));
    }));
}
function Ut(e) {
  return function (t) {
    return (function (e, t) {
      return Number(e.toFixed(t));
    })(t, e);
  };
}
function Ht(e, t, l) {
  e = Array.isArray(e) ? e : [e];
  for (const a of e) (Rt[a] ||= [])[t] = l;
  return (
    (e = e[0]),
    function (a) {
      let r;
      return void 0 !== a
        ? (l && (a = l(a)), (r = this[e]()), (r.color[t] = a), r)
        : ((r = this[e]().color[t]), l && (r = l(r)), r);
    }
  );
}
function $t(e) {
  return function (t) {
    return Math.max(0, Math.min(e, t));
  };
}
function Wt(e, t) {
  for (let l = 0; l < t; l++) "number" != typeof e[l] && (e[l] = 0);
  return e;
}
function qt(e) {
  var t = new Option().style;
  return ((t.color = e), "" !== t.color);
}
var Gt = e({
  name: "Mode",
  props: { modelValue: [String, Object], mode: String, disabledAlpha: Boolean },
  setup(e, a) {
    var { emit: r } = a,
      n = l(e.mode || "hex"),
      o = l(e.modelValue || "#000000"),
      i = [
        { label: "HEX", value: "hex" },
        { label: "RGB", value: "rgb" },
        { label: "HSL", value: "hsl" },
      ];
    (c(
      () => e.mode,
      (e) => {
        n.value = e;
      }
    ),
      c(
        () => e.modelValue,
        (e) => {
          o.value = e;
        }
      ));
    var s = (e, t) => {
        var l = parseInt(e),
          a = _t(o.value);
        switch (t) {
          case "r":
            a = a.red(l);
            break;
          case "g":
            a = a.green(l);
            break;
          case "b":
            a = a.blue(l);
            break;
          case "a":
            a = a.alpha(l / 100);
            break;
          case "h":
            a = a.hue(l);
            break;
          case "s":
            a = a.saturationl(l);
            break;
          case "l":
            a = a.lightness(l);
        }
        ((o.value = a.rgb()), r("updateColorValue", o.value));
      },
      u = (e) => {
        ((n.value = e), r("updateMode", e));
      };
    return () => {
      var l = [],
        a = _t(o.value),
        c = a.alpha();
      if ("hex" === n.value) {
        var d = a.hex().slice(1);
        l.push(
          t(
            ct,
            {
              prefix: "#",
              size: "small",
              modelValue: d,
              onChange: (e) =>
                ((e) => {
                  var t = "#".concat(e.target.value);
                  if (qt(t)) {
                    var l = _t(t).rgb();
                    r("updateColorValue", l);
                  }
                })(e),
            },
            null
          )
        );
      } else if ("rgb" === n.value) {
        var [v, p, m] = a.rgb().array();
        (l.push(
          t(
            dt,
            {
              size: "small",
              min: 0,
              max: 255,
              modelValue: Math.round(v),
              onChange: (e) => s(e, "r"),
            },
            null
          )
        ),
          l.push(
            t(
              dt,
              {
                size: "small",
                min: 0,
                max: 255,
                modelValue: Math.round(p),
                onChange: (e) => s(e, "g"),
              },
              null
            )
          ),
          l.push(
            t(
              dt,
              {
                size: "small",
                min: 0,
                max: 255,
                modelValue: Math.round(m),
                onChange: (e) => s(e, "b"),
              },
              null
            )
          ));
      } else if ("hsl" === n.value) {
        var [h, f, g] = a.hsl().array();
        (l.push(
          t(
            dt,
            {
              size: "small",
              min: 0,
              max: 359,
              modelValue: Math.round(h),
              onChange: (e) => s(e, "h"),
            },
            null
          )
        ),
          l.push(
            t(
              dt,
              {
                size: "small",
                formatter: (e) => "".concat(e, "%"),
                parser: (e) => e.replace("%", ""),
                min: 0,
                max: 100,
                modelValue: Math.round(f),
                onChange: (e) => s(e, "s"),
              },
              null
            )
          ),
          l.push(
            t(
              dt,
              {
                size: "small",
                formatter: (e) => "".concat(e, "%"),
                parser: (e) => e.replace("%", ""),
                min: 0,
                max: 100,
                modelValue: Math.round(g),
                onChange: (e) => s(e, "l"),
              },
              null
            )
          ));
      }
      return (
        e.disabledAlpha ||
          l.push(
            t(
              dt,
              {
                formatter: (e) => "".concat(e, "%"),
                parser: (e) => e.replace("%", ""),
                modelValue: Math.round(100 * c),
                size: "small",
                min: 0,
                max: 100,
                class: "k-color-picker-alpha-input",
                onChange: (e) => s(e, "a"),
              },
              null
            )
          ),
        t("div", { class: "k-color-picker-mode k-color-picker-".concat(n.value) }, [
          t(
            yt,
            {
              clearable: !1,
              bordered: !1,
              size: "small",
              modelValue: n.value,
              options: i,
              onChange: u,
            },
            null
          ),
          t("div", { class: "k-color-picker-val" }, [[...l]]),
        ])
      );
    };
  },
});
"undefined" != typeof WorkerGlobalScope && (globalThis, WorkerGlobalScope);
const Xt = (e, t, l) => Math.min(l, Math.max(t, e));
var Zt = e({
    name: "Hue",
    props: { hue: Number },
    setup(e, a) {
      var { emit: r } = a,
        n = l(0),
        o = l(),
        i = l(!1),
        u = l(e.hue || 360),
        d = l();
      (c(
        () => e.hue,
        (e) => {
          ((u.value = e), f());
        }
      ),
        s(() => {
          (h(), f());
        }));
      var v = (e) => {
          var t = o.value,
            l = t.width,
            a = Xt(e.clientX - t.getBoundingClientRect().left, 0, l);
          n.value = a - 7;
          var i = 1 * Xt((a / 100) * l, 0, 359);
          ((d.value = _t({ h: i, s: "100", l: "50" }).rgb()), r("updateHue", Math.round(i)));
        },
        p = () => {
          (setTimeout(() => {
            i.value = !1;
          }, 300),
            document.removeEventListener("mousemove", v),
            document.removeEventListener("mouseup", p));
        },
        m = (e) => {
          ((i.value = !0),
            v(e),
            document.addEventListener("mousemove", v),
            document.addEventListener("mouseup", p),
            e.preventDefault());
        },
        h = () => {
          for (
            var e = o.value,
              t = e.getContext("2d", { willReadFrequently: !0 }),
              l = 1 / 360,
              a = e.width,
              r = e.height,
              n = t.createLinearGradient(0, 0, a, r),
              i = 0;
            i <= 1;
            i += l
          )
            n.addColorStop(i, "hsl(".concat(360 * i, ",100%,50%)"));
          ((t.fillStyle = n), t.fillRect(0, 0, a, r));
        },
        f = () => {
          ((d.value = _t({ h: u.value, s: "100", l: "50" }).rgb()),
            (n.value = (u.value / 360) * 190 - 7));
        };
      return () => {
        var e = { class: "k-color-picker-hue", width: 190, height: 8, ref: o, onMousedown: m };
        return t("div", { class: "k-color-picker-slider-hue" }, [
          t(
            "span",
            {
              class: "k-color-picker-hue-dot",
              style: { left: n.value + "px", backgroundColor: d.value },
            },
            null
          ),
          t("canvas", e, null),
        ]);
      };
    },
  }),
  Jt = e({
    name: "Alpha",
    props: { modelValue: [String, Object] },
    setup(e, a) {
      var { emit: r } = a,
        n = l(0),
        o = l(),
        i = l(!1),
        u = l(e.modelValue || "#000000");
      (c(
        () => e.modelValue,
        (e) => {
          ((u.value = e), v(), d());
        }
      ),
        s(() => {
          (v(), d());
        }));
      var d = () => {
          var e = _t(u.value).alpha(),
            t = o.value.width * e;
          n.value = t - 7;
        },
        v = () => {
          var e = o.value,
            t = e.getContext("2d", { willReadFrequently: !0 }),
            { width: l, height: a } = e,
            r = t.createLinearGradient(0, 0, l - 1, 0),
            [n, i, s] = _t(u.value).rgb().array();
          (t.clearRect(0, 0, l, a),
            r.addColorStop(0, "rgba(".concat(n, ",").concat(i, ",").concat(s, ",0)")),
            r.addColorStop(1, "rgba(".concat(n, ",").concat(i, ",").concat(s, ",1)")),
            (t.fillStyle = r),
            t.fillRect(0, 0, l, a));
        },
        p = (e) => {
          var t = o.value,
            l = t.width,
            a = Xt(e.clientX - t.getBoundingClientRect().left, 0, l),
            i = +(a / l).toFixed(2);
          n.value = a - 7;
          var [s, c, d] = _t(u.value).rgb().array(),
            v = "rgba(".concat(s, ",").concat(c, ",").concat(d, ",").concat(i, ")");
          ((u.value = v), r("updateAlpha", i));
        },
        m = () => {
          (setTimeout(() => {
            i.value = !1;
          }, 300),
            document.removeEventListener("mousemove", p),
            document.removeEventListener("mouseup", m));
        },
        h = (e) => {
          ((i.value = !0),
            p(e),
            document.addEventListener("mousemove", p),
            document.addEventListener("mouseup", m),
            e.preventDefault());
        };
      return () =>
        t("div", { class: "k-color-picker-alpha-box" }, [
          t(
            "canvas",
            { class: "k-color-picker-alpha", width: 190, height: 8, ref: o, onMousedown: h },
            null
          ),
          t(
            "span",
            {
              class: "k-color-picker-alpha-dot",
              style: { left: n.value + "px", backgroundColor: "".concat(u.value) },
            },
            null
          ),
        ]);
    },
  }),
  Qt = e({
    name: "Paint",
    props: { hue: Number, modelValue: [String, Object] },
    setup(e, a) {
      var { emit: r } = a,
        n = l(),
        o = S({ x: 0, y: 0 }),
        i = l(!1),
        u = l(e.modelValue || "#000000");
      (c(
        () => e.hue,
        (t) => {
          ((u.value = e.modelValue), d(), v());
        }
      ),
        s(() => {
          (d(), v());
        }));
      var d = () => {
          var t = n.value,
            { width: l, height: a } = t,
            r = t.getContext("2d", { willReadFrequently: !0 }),
            o = r.createLinearGradient(1, 1, 1, a - 1);
          (o.addColorStop(0, "white"),
            o.addColorStop(1, "black"),
            (r.fillStyle = o),
            r.fillRect(0, 0, l, a));
          var i = r.createLinearGradient(1, 0, l - 1, 0);
          (i.addColorStop(0, "hsla(".concat(e.hue, ",100%,50%,0)")),
            i.addColorStop(1, "hsla(".concat(e.hue, ",100%,50%,1)")),
            (r.fillStyle = i),
            (r.globalCompositeOperation = "multiply"),
            r.fillRect(0, 0, l, a),
            (r.globalCompositeOperation = "source-over"));
        },
        v = () => {
          if (u.value) {
            var { width: e, height: t } = n.value,
              [l, a, r] = _t(u.value).hsv().array(),
              i = (a / 100) * e,
              s = t - (r / 100) * t;
            ((o.x = i - 7), (o.y = s - 7));
          }
        },
        p = (e) => {
          var t = n.value,
            { width: l, height: a } = t,
            i = Xt(e.clientX - t.getBoundingClientRect().left, 0, l - 1),
            s = Xt(e.clientY - t.getBoundingClientRect().top, 0, a),
            c = t.getContext("2d", { willReadFrequently: !0 }),
            [d, v, p, m] = c.getImageData(i, s, 1, 1).data,
            h = _t({ r: d, g: v, b: p, alpha: m / 255 }).rgb();
          ((o.x = i - 7), (o.y = s - 7), (u.value = h), r("updateRGB", h.object()));
        },
        m = () => {
          (setTimeout(() => {
            i.value = !1;
          }, 300),
            document.removeEventListener("mousemove", p),
            document.removeEventListener("mouseup", m));
        },
        h = (e) => {
          ((i.value = !0),
            p(e),
            document.addEventListener("mousemove", p),
            document.addEventListener("mouseup", m),
            e.preventDefault());
        };
      return () => {
        var { x: e, y: l } = o;
        return t("div", { class: "k-color-picker-paint-container" }, [
          t(
            "canvas",
            { class: "k-color-picker-paint", width: 234, height: 136, ref: n, onMousedown: h },
            null
          ),
          t(
            "span",
            { class: "k-color-picker-paint-dot", style: { left: e + "px", top: l + "px" } },
            null
          ),
        ]);
      };
    },
  }),
  el = e({
    name: "Presets",
    props: {
      color: [String, Object],
      modelValue: {
        type: Array,
        default: () => [
          "#f44336",
          "#e91e63",
          "#9c27b0",
          "#673ab7",
          "#3f51b5",
          "#2196f3",
          "#03a9f4",
          "#00bcd4",
          "#009688",
          "#4caf50",
          "#8bc34a",
          "#cddc39",
          "#ffeb3b",
          "#ffc107",
          "#ff9800",
          "#ff5722",
          "#795548",
          "#9e9e9e",
          "#607d8b",
          "#000",
        ],
      },
    },
    setup(e, a) {
      var { emit: r } = a,
        n = l(_t(e.color));
      c(
        () => e.color,
        (e) => {
          n.value = _t(e);
        }
      );
      return () => {
        if (0 == e.modelValue.length) return null;
        var l = e.modelValue.map((e) =>
          t(
            "span",
            {
              style: "background-color:" + e,
              onClick: (t) =>
                ((e) => {
                  ((n.value = _t(e)), r("updateColor", _t(e).rgb()));
                })(e),
            },
            [n.value.hexa() == _t(e).hexa() ? t(I, { type: X }, null) : null]
          )
        );
        return t("div", { class: "k-color-picker-presets" }, [l]);
      };
    },
  }),
  tl = ["rgb", "hex", "hsl"],
  ll = e({
    name: "ColorPicker",
    directives: { transfer: Ke, resize: Se },
    props: {
      modelValue: String,
      value: String,
      transfer: { type: Boolean, default: !0 },
      disabled: Boolean,
      disabledAlpha: Boolean,
      showText: Boolean,
      arrow: Boolean,
      placement: {
        validator: (e) =>
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].includes(e),
        default: "bottom-left",
      },
      trigger: {
        type: String,
        default: "click",
        validator: (e) => ["hover", "click"].indexOf(e) >= 0,
      },
      size: { default: "default", validator: (e) => ["small", "large", "default"].indexOf(e) >= 0 },
      mode: {
        type: String,
        default: "hex",
        validator: function (e) {
          return -1 !== tl.indexOf(e);
        },
      },
      show: Boolean,
      presets: { type: Array },
    },
    setup(e, a) {
      var { emit: v, slots: p } = a,
        m = l(e.mode),
        h = l(e.modelValue || e.value || "#000000ff"),
        f = l(e.show),
        g = l(),
        k = l(),
        y = l(0),
        b = l(0),
        w = l(e.placement),
        x = l("bottom"),
        S = l(!1),
        M = l(1),
        C = l(0),
        z = l();
      (c(
        () => e.modelValue,
        (e) => {
          h.value = e;
        }
      ),
        s(() => {
          e.modelValue &&
            ((M.value = _t(e.modelValue).alpha()), (C.value = _t(e.modelValue).hue()));
        }),
        i(() => {
          document.removeEventListener("click", A);
        }));
      var B = () => {
          u(() => {
            Re({
              refSelection: k,
              refPopper: g,
              currentPlacement: w,
              transOrigin: x,
              top: b,
              left: y,
            });
          });
        },
        A = (e) => {
          var t,
            l = (null === (t = k.value) || void 0 === t ? void 0 : t.$el) || k.value;
          g.value &&
            !g.value.contains(e.target) &&
            l &&
            !l.contains(e.target) &&
            (clearTimeout(z.value), (z.value = setTimeout(() => (f.value = !1), 200)));
        },
        T = (t) => {
          if (e.disabled) return !1;
          t
            ? S.value
              ? ((f.value = !0), B())
              : ((S.value = !0),
                document.addEventListener("click", A),
                u(() => {
                  ((f.value = !0), B());
                }))
            : (f.value = !1);
        },
        O = () => {
          var e = "",
            t = _t(h.value);
          return (
            "hex" == m.value
              ? (e = t.alpha() < 1 ? t.hexa() : t.hex())
              : "rgb" == m.value
                ? (e = t.rgb().string(0))
                : "hsl" == m.value && (e = t.hsl().string(0)),
            e
          );
        },
        N = (e) => {
          h.value = e;
          var t = O();
          (v("update:modelValue", t), v("change", t));
        },
        V = (e) => {
          var { r: t, g: l, b: a } = e,
            r = _t({ r: t, g: l, b: a, alpha: M.value });
          N(r.rgb());
        },
        D = (e) => {
          C.value = e;
          var t = _t(h.value).hue(e).rgb();
          N(t);
        },
        E = (e) => {
          M.value = e;
          var t = _t(h.value).alpha(e).rgb();
          N(t);
        },
        L = (e) => {
          ((m.value = e),
            N(h.value),
            v("update:mode", e),
            setTimeout(() => {
              clearTimeout(z.value);
            }, 0));
        },
        P = (e) => {
          ((M.value = e.alpha()), (h.value = e), (C.value = e.hue()), N(e));
        },
        j = (e) => {
          ((M.value = e.alpha()), (C.value = e.hue()), P(e.rgb()));
        },
        I = (t) => {
          e.disabled ||
            ("hover" == e.trigger &&
              (z.value = setTimeout(() => {
                T(!1);
              }, 300)));
        };
      return () => {
        var l,
          a = (() => {
            if (!S.value) return null;
            var l = {
              ref: g,
              "k-placement": w.value,
              class: [
                "k-color-picker-dropdown",
                { "k-color-picker-disabled-alpha": e.disabledAlpha },
              ],
              style: {
                left: "".concat(y.value, "px"),
                top: "".concat(b.value, "px"),
                transformOrigin: x.value,
              },
              onMouseenter: () => {
                clearTimeout(z.value);
              },
            };
            return t(
              r,
              { name: "k-color-picker" },
              {
                default: () => [
                  n(
                    t("div", l, [
                      t("div", { class: "k-color-picker-body" }, [
                        t(Qt, { hue: C.value, modelValue: h.value, onUpdateRGB: V }, null),
                        t("div", { class: "k-color-picker-bar" }, [
                          t("div", { class: "k-color-picker-avatar" }, [
                            t(
                              "div",
                              {
                                class: "k-color-picker-avatar-inner",
                                style: "background-color:".concat(h.value),
                              },
                              null
                            ),
                          ]),
                          t("div", { class: "k-color-picker-bar-box" }, [
                            t(Zt, { hue: C.value, onUpdateHue: D }, null),
                            e.disabledAlpha
                              ? null
                              : t(Jt, { modelValue: h.value, onUpdateAlpha: E }, null),
                          ]),
                        ]),
                        t(
                          Gt,
                          {
                            mode: m.value,
                            modelValue: h.value,
                            disabledAlpha: e.disabledAlpha,
                            onUpdateMode: L,
                            onUpdateColorValue: P,
                          },
                          null
                        ),
                        t(el, { onUpdateColor: j, modelValue: e.presets, color: h.value }, null),
                      ]),
                      t("div", { class: "k-color-picker-arrow" }, [
                        t("svg", { style: { fill: "currentcolor" }, viewBox: "0 0 24 8" }, [
                          t(
                            "path",
                            {
                              id: "ot",
                              d: "m24,0.97087l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z",
                            },
                            null
                          ),
                          t(
                            "path",
                            {
                              stroke: "currentcolor",
                              id: "in",
                              d: "m24,0l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z",
                            },
                            null
                          ),
                        ]),
                      ]),
                    ]),
                    [
                      [d("transfer"), !0],
                      [o, f.value],
                    ]
                  ),
                ],
              }
            );
          })(),
          i = [
            "k-color-picker",
            {
              "k-color-picker-opened": f.value,
              "k-color-picker-disabled": e.disabled,
              "k-color-picker-sm": "small" == e.size,
              "k-color-picker-lg": "large" == e.size,
            },
          ],
          s = "click" == e.trigger;
        return p.default
          ? t("span", null, [
              Te(
                p.default(),
                {
                  ref: k,
                  onClick: () => s && T(!f.value),
                  onMouseenter: () => !s && T(!0),
                  onMouseleave: I,
                },
                !0
              ),
              a,
            ])
          : n(
              t("div", { class: i, ref: k }, [
                t(
                  "div",
                  {
                    class: "k-color-picker-selection",
                    onMouseenter: () => !s && T(!0),
                    onMouseleave: I,
                    onClick: () => s && T(!f.value),
                  },
                  [
                    t("div", { class: "k-color-picker-color" }, [
                      t(
                        "div",
                        {
                          class: "k-color-picker-color-inner",
                          style: "background-color:".concat(h.value),
                        },
                        null
                      ),
                    ]),
                    ((l = O()),
                    e.showText ? t("div", { class: "k-color-picker-trigger-text" }, [l]) : null),
                  ]
                ),
                a,
              ]),
              [[d("resize"), B]]
            );
      };
    },
  }),
  al = j(ll),
  rl = j(
    e({
      name: "Card",
      props: { bordered: { type: Boolean, default: !1 }, title: String, icon: [String, Array] },
      setup(e, l) {
        var { slots: a } = l;
        return () => {
          var l,
            r,
            n,
            { title: o, icon: i, bordered: s } = e,
            u = ["k-card", { "k-card-bordered": s }],
            c = null === (l = a.extra) || void 0 === l ? void 0 : l.call(a),
            d = null === (r = a.title) || void 0 === r ? void 0 : r.call(a),
            v = null === (n = a.default) || void 0 === n ? void 0 : n.call(a),
            p = c ? t("div", { class: "k-card-extra" }, [c]) : null,
            m = i ? t(I, { type: i, class: "k-card-title-icon" }, null) : null,
            h = o ? t("span", { class: "k-card-title" }, [o]) : d || null;
          return t("div", { class: u }, [
            h && t("div", { class: "k-card-head" }, [m, h, p]),
            v ? t("div", { class: "k-card-body k-scroll" }, [v]) : null,
          ]);
        };
      },
    })
  ),
  nl = e({
    name: "Carousel",
    directives: { resize: Se },
    props: {
      value: { type: Number, default: 0 },
      loop: { type: Boolean, default: !0 },
      autoplay: Boolean,
      delay: { type: Number, default: 3e3 },
      vertical: Boolean,
      dots: { type: Boolean, default: !0 },
    },
    setup(e, a) {
      var r,
        { slots: o, emit: v, expose: p } = a,
        h = l(e.value),
        f = l(e.loop ? e.value + 1 : e.value),
        g = l(null),
        k = l(0),
        y = l(0),
        b = l(!(e.value > 0)),
        w = l(!1),
        x = l(null);
      (m("width", k),
        m("height", y),
        c(
          () => e.value,
          (e, t) => {
            h.value = e;
          }
        ));
      var S = (t) => {
        (clearInterval(g.value),
          (b.value = !0),
          (h.value = t),
          (f.value = e.loop ? t + 1 : t),
          v("update:value", t),
          M());
      };
      p({
        next: () => {
          z("right");
        },
        prev: () => {
          z("left");
        },
        goTo: S,
      });
      var M = () => {
          e.autoplay &&
            (clearInterval(g.value),
            (g.value = setInterval(() => {
              B("right");
            }, parseInt(e.delay))));
        },
        C = null === (r = o.default) || void 0 === r ? void 0 : r.call(o),
        z = (e) => {
          (clearInterval(g.value), w.value || ((w.value = !0), B(e)));
        },
        B = (t) => {
          b.value = !0;
          var l = e.loop ? (null == C ? void 0 : C.length) + 2 : null == C ? void 0 : C.length,
            a = f.value,
            r = h.value;
          ("right" === t
            ? ((a = (a + 1) % l), (r = e.loop ? (r + 1) % (null == C ? void 0 : C.length) : a))
            : "left" === t &&
              ((a = (a - 1 + l) % l),
              (r = e.loop
                ? (r - 1 + (null == C ? void 0 : C.length)) % (null == C ? void 0 : C.length)
                : a)),
            (f.value = a),
            (h.value = r),
            v("update:value", h.value),
            setTimeout(() => {
              if (((w.value = !1), e.loop)) {
                var t = e.loop
                  ? (null == C ? void 0 : C.length) + 2
                  : null == C
                    ? void 0
                    : C.length;
                (f.value === t - 1 && ((b.value = !1), (f.value = 1)),
                  0 === f.value && ((b.value = !1), (f.value = t - 2)));
              }
            }, 501),
            M());
        },
        A = () => {
          ((b.value = !1), (k.value = x.value.offsetWidth), (y.value = x.value.offsetHeight));
        };
      return (
        s(() => {
          u(() => {
            (A(), M());
          });
        }),
        i(() => {
          clearInterval(g.value);
        }),
        () => {
          var { vertical: l } = e,
            a = null == C ? void 0 : C[0],
            r = null == C ? void 0 : C[C.length - 1],
            o = e.loop ? [r, ...C, a] : C,
            i = Math.min((null == C ? void 0 : C.length) - 1, h.value);
          i = Math.max(0, i);
          var s = ["k-carousel", { "k-carousel-vertical": l }],
            u = t("ul", { class: "k-carousel-dots" }, [
              null == C
                ? void 0
                : C.map((e, l) =>
                    t(
                      "li",
                      { class: { "k-carousel-dots-active": i == l }, onClick: () => S(l) },
                      null
                    )
                  ),
            ]),
            c = 0,
            v = 0;
          l ? (v = f.value * y.value) : (c = f.value * k.value);
          var p = {
              class: "k-carousel-wrapper",
              style: {
                transform: "translate3d(-".concat(c, "px,-").concat(v, "px,0)"),
                width: l ? "" : (null == o ? void 0 : o.length) * k.value + "px",
                height: l ? (null == o ? void 0 : o.length) * y.value + "px" : "",
                transitionDuration: b.value ? "" : "0s",
              },
            },
            m = t("span", { class: "k-carousel-arrow-left", onClick: () => z("left") }, [
              t(I, { type: R }, null),
            ]),
            w = t("span", { class: "k-carousel-arrow-right", onClick: () => z("right") }, [
              t(I, { type: U }, null),
            ]);
          return n(
            t(
              "div",
              {
                class: s,
                ref: x,
                onMouseEnter: () => clearInterval(g.value),
                onMouseLeave: () => {
                  e.autoplay && M();
                },
              },
              [t("div", p, [o]), l ? null : [m, w], e.dots ? u : null]
            ),
            [[d("resize"), A]]
          );
        }
      );
    },
  }),
  ol = j(nl),
  il = j(
    e({
      name: "CarouselItem",
      setup(e, l) {
        var { slots: a } = l,
          r = v("width", 0),
          n = v("height", 0);
        return () => {
          var e,
            l = { width: "".concat(r.value, "px"), height: "".concat(n.value, "px") };
          return t("div", { class: "k-carousel-item", style: l }, [
            null === (e = a.default) || void 0 === e ? void 0 : e.call(a),
          ]);
        };
      },
    })
  ),
  sl = e({
    name: "Collapse",
    props: { openKeys: Array, accordion: Boolean, sample: Boolean },
    setup(e, a) {
      var { slots: r, emit: n } = a,
        o = l(e.openKeys || []);
      c(
        () => e.openKeys,
        (e, t) => {
          o.value = e;
        }
      );
      var i = (t) => {
        if (t) {
          var l = o.value,
            a = l.indexOf(t);
          (a >= 0 ? (e.accordion ? (l = []) : l.splice(a, 1)) : e.accordion ? (l = [t]) : l.push(t),
            (o.value = l),
            n("change", t),
            n("update", l));
        }
      };
      return () => {
        var l,
          a = ["k-collapse", { "k-collapse-sample": e.sample }],
          n = Oe(null === (l = r.default) || void 0 === l ? void 0 : l.call(r));
        return t("div", { class: a }, [
          null == n
            ? void 0
            : n.map((e) => {
                var t = o.value.includes(e.key);
                return y(e, { active: t, onExpand: i });
              }),
        ]);
      };
    },
  }),
  ul = j(sl),
  cl = j(
    e({
      name: "CollapsePanel",
      props: { title: String, active: Boolean },
      setup(e, a) {
        var { slots: i, emit: s } = a,
          d = M(),
          v = l(e.active),
          p = l(e.active);
        c(
          () => e.active,
          (e, t) => {
            ((p.value = !0),
              u(() => {
                v.value = e;
              }));
          }
        );
        var m = () => {
          var e = d.vnode.key;
          s("expand", e);
        };
        return () => {
          var l,
            a,
            s = ["k-collapse-item", { "k-collapse-item-active": v.value }],
            u = null === (l = i.extra) || void 0 === l ? void 0 : l.call(i),
            c = we("k-collapse-slide"),
            d = p.value
              ? t(r, w(c, { time: "350" }), {
                  default: () => [
                    n(
                      t("div", { class: "k-collapse-content" }, [
                        t("div", { class: "k-collapse-content-box" }, [
                          null === (a = i.default) || void 0 === a ? void 0 : a.call(i),
                        ]),
                      ]),
                      [[o, v.value]]
                    ),
                  ],
                })
              : null;
          return t("div", { class: s }, [
            t("div", { class: "k-collapse-header", onClick: m }, [
              t(I, { type: le, class: "k-collapse-arrow" }, null),
              t("span", { class: "k-collapse-title" }, [e.title]),
              u ? t("span", { class: "k-collapse-extra" }, [u]) : null,
            ]),
            d,
          ]);
        };
      },
    })
  ),
  dl = j(
    e({
      name: "Checkbox",
      props: {
        checked: { type: Boolean, default: !1 },
        modelValue: { type: [String, Number, Boolean] },
        value: { type: [String, Number, Boolean] },
        label: { type: [String, Number] },
        theme: { type: String, default: "light" },
        disabled: Boolean,
        indeterminate: Boolean,
        size: {
          default: "default",
          validator: (e) => ["small", "large", "default"].indexOf(e) >= 0,
        },
      },
      setup(e, a) {
        var { slots: r, emit: n } = a,
          o = l(e.modelValue || e.checked);
        (c(
          () => e.checked,
          (e) => {
            o.value = e;
          }
        ),
          c(
            () => e.modelValue,
            (e) => {
              o.value = e;
            }
          ));
        var i = (t) => {
            var l;
            ((o.value = t),
              n("change", {
                checked: t,
                value: e.value,
                label: e.label || (null === (l = r.default) || void 0 === l ? void 0 : l.call(r)),
              }),
              n("update:modelValue", t),
              n("update:checked", t));
          },
          s = (t) => {
            if (!e.disabled) {
              (t.stopPropagation(), t.preventDefault());
              var l = t.target.checked;
              i(l);
            }
          },
          u = (t) => {
            if ("Space" == t.code) {
              if ((t.preventDefault(), t.stopPropagation(), e.disabled)) return;
              i(!o.value);
            }
          };
        return () => {
          var l,
            a = [
              "k-checkbox",
              {
                "k-checkbox-light": "light" == e.theme,
                "k-checkbox-disabled": e.disabled,
                "k-checkbox-checked": o.value && !e.indeterminate,
                "k-checkbox-indeterminate": e.indeterminate && !o.value,
                "k-checkbox-sm": "small" === e.size,
                "k-checkbox-lg": "large" === e.size,
              },
            ],
            n = o.value ? t(I, { type: X, strokeWidth: 60 }, null) : null,
            i = e.label || (null === (l = r.default) || void 0 === l ? void 0 : l.call(r));
          return t("label", { class: a, onKeydown: u, tabindex: e.disabled ? null : 0 }, [
            t("span", { class: "k-checkbox-symbol" }, [
              t(
                "input",
                {
                  type: "checkbox",
                  tabindex: "-1",
                  class: "k-checkbox-input",
                  disabled: e.disabled,
                  onChange: s,
                  checked: o.value,
                },
                null
              ),
              n,
            ]),
            i ? t("span", { class: "k-checkbox-label" }, [i]) : null,
          ]);
        };
      },
    })
  ),
  vl = e({
    name: "CheckboxGroup",
    props: {
      modelValue: { type: Array, default: () => [] },
      theme: String,
      disabled: Boolean,
      options: Array,
      direction: {
        type: String,
        default: "horizontal",
        validator: (e) => ["horizontal", "vertical"].indexOf(e) >= 0,
      },
      size: { default: "default", validator: (e) => ["small", "large", "default"].indexOf(e) >= 0 },
    },
    setup(e, r) {
      var { slots: n, emit: o } = r,
        i = l(e.modelValue);
      c(
        () => e.modelValue,
        (e) => {
          i.value = e;
        }
      );
      var s = (e) => {
          var { value: t } = e,
            l = [...i.value],
            a = l.indexOf(t);
          (a > -1 ? l.splice(a, 1) : l.push(t), o("update:modelValue", l), o("change", l));
        },
        u = a(() => {
          var t,
            { options: l } = e;
          l ||
            ((l = []),
            Oe(null === (t = n.default) || void 0 === t ? void 0 : t.call(n)).forEach((e, t) => {
              var a,
                { label: r, value: n, disabled: o } = null == e ? void 0 : e.props;
              l.push({
                value: n,
                disabled: o,
                label:
                  r ||
                  (null === (a = e.children) || void 0 === a ? void 0 : a.default()[0].children) ||
                  n,
              });
            }));
          return l;
        });
      return () => {
        var l = u.value,
          a = [];
        return (
          l.forEach((l) =>
            a.push(
              t(
                dl,
                {
                  key: l.value,
                  label: l.label,
                  value: l.value,
                  checked: i.value.indexOf(l.value) > -1,
                  disabled: e.disabled || l.disabled,
                  theme: e.theme,
                  size: e.size,
                  onChange: s,
                },
                null
              )
            )
          ),
          t(
            "div",
            {
              class: [
                "k-checkbox-group",
                { "k-checkbox-group-vertical": "vertical" == e.direction },
              ],
            },
            [a]
          )
        );
      };
    },
  }),
  pl = j(vl);
function ml(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hl,
  fl = { exports: {} };
var gl,
  kl = ml(
    hl
      ? fl.exports
      : ((hl = 1),
        (fl.exports = function (e, t, l) {
          t.prototype.isBetween = function (e, t, a, r) {
            var n = l(e),
              o = l(t),
              i = "(" === (r = r || "()")[0],
              s = ")" === r[1];
            return (
              ((i ? this.isAfter(n, a) : !this.isBefore(n, a)) &&
                (s ? this.isBefore(o, a) : !this.isAfter(o, a))) ||
              ((i ? this.isBefore(n, a) : !this.isAfter(n, a)) &&
                (s ? this.isAfter(o, a) : !this.isBefore(o, a)))
            );
          };
        }))
  ),
  yl = { exports: {} };
var bl,
  wl = ml(
    gl
      ? yl.exports
      : ((gl = 1),
        (yl.exports = function (e, t, l) {
          var a = t.prototype,
            r = function (e) {
              return e && (e.indexOf ? e : e.s);
            },
            n = function (e, t, l, a, n) {
              var o = e.name ? e : e.$locale(),
                i = r(o[t]),
                s = r(o[l]),
                u =
                  i ||
                  s.map(function (e) {
                    return e.slice(0, a);
                  });
              if (!n) return u;
              var c = o.weekStart;
              return u.map(function (e, t) {
                return u[(t + (c || 0)) % 7];
              });
            },
            o = function () {
              return l.Ls[l.locale()];
            },
            i = function (e, t) {
              return (
                e.formats[t] ||
                (function (e) {
                  return e.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, l) {
                    return t || l.slice(1);
                  });
                })(e.formats[t.toUpperCase()])
              );
            },
            s = function () {
              var e = this;
              return {
                months: function (t) {
                  return t ? t.format("MMMM") : n(e, "months");
                },
                monthsShort: function (t) {
                  return t ? t.format("MMM") : n(e, "monthsShort", "months", 3);
                },
                firstDayOfWeek: function () {
                  return e.$locale().weekStart || 0;
                },
                weekdays: function (t) {
                  return t ? t.format("dddd") : n(e, "weekdays");
                },
                weekdaysMin: function (t) {
                  return t ? t.format("dd") : n(e, "weekdaysMin", "weekdays", 2);
                },
                weekdaysShort: function (t) {
                  return t ? t.format("ddd") : n(e, "weekdaysShort", "weekdays", 3);
                },
                longDateFormat: function (t) {
                  return i(e.$locale(), t);
                },
                meridiem: this.$locale().meridiem,
                ordinal: this.$locale().ordinal,
              };
            };
          ((a.localeData = function () {
            return s.bind(this)();
          }),
            (l.localeData = function () {
              var e = o();
              return {
                firstDayOfWeek: function () {
                  return e.weekStart || 0;
                },
                weekdays: function () {
                  return l.weekdays();
                },
                weekdaysShort: function () {
                  return l.weekdaysShort();
                },
                weekdaysMin: function () {
                  return l.weekdaysMin();
                },
                months: function () {
                  return l.months();
                },
                monthsShort: function () {
                  return l.monthsShort();
                },
                longDateFormat: function (t) {
                  return i(e, t);
                },
                meridiem: e.meridiem,
                ordinal: e.ordinal,
              };
            }),
            (l.months = function () {
              return n(o(), "months");
            }),
            (l.monthsShort = function () {
              return n(o(), "monthsShort", "months", 3);
            }),
            (l.weekdays = function (e) {
              return n(o(), "weekdays", null, null, e);
            }),
            (l.weekdaysShort = function (e) {
              return n(o(), "weekdaysShort", "weekdays", 3, e);
            }),
            (l.weekdaysMin = function (e) {
              return n(o(), "weekdaysMin", "weekdays", 2, e);
            }));
        }))
  ),
  xl = { exports: {} };
var Sl,
  Ml =
    (bl ||
      ((bl = 1),
      (xl.exports = (function () {
        var e = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A",
          },
          t =
            /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
          l = /\d/,
          a = /\d\d/,
          r = /\d\d?/,
          n = /\d*[^-_:/,()\s\d]+/,
          o = {},
          i = function (e) {
            return (e = +e) + (e > 68 ? 1900 : 2e3);
          },
          s = function (e) {
            return function (t) {
              this[e] = +t;
            };
          },
          u = [
            /[+-]\d\d:?(\d\d)?|Z/,
            function (e) {
              (this.zone || (this.zone = {})).offset = (function (e) {
                if (!e) return 0;
                if ("Z" === e) return 0;
                var t = e.match(/([+-]|\d\d)/g),
                  l = 60 * t[1] + (+t[2] || 0);
                return 0 === l ? 0 : "+" === t[0] ? -l : l;
              })(e);
            },
          ],
          c = function (e) {
            var t = o[e];
            return t && (t.indexOf ? t : t.s.concat(t.f));
          },
          d = function (e, t) {
            var l,
              a = o.meridiem;
            if (a) {
              for (var r = 1; r <= 24; r += 1)
                if (e.indexOf(a(r, 0, t)) > -1) {
                  l = r > 12;
                  break;
                }
            } else l = e === (t ? "pm" : "PM");
            return l;
          },
          v = {
            A: [
              n,
              function (e) {
                this.afternoon = d(e, !1);
              },
            ],
            a: [
              n,
              function (e) {
                this.afternoon = d(e, !0);
              },
            ],
            Q: [
              l,
              function (e) {
                this.month = 3 * (e - 1) + 1;
              },
            ],
            S: [
              l,
              function (e) {
                this.milliseconds = 100 * +e;
              },
            ],
            SS: [
              a,
              function (e) {
                this.milliseconds = 10 * +e;
              },
            ],
            SSS: [
              /\d{3}/,
              function (e) {
                this.milliseconds = +e;
              },
            ],
            s: [r, s("seconds")],
            ss: [r, s("seconds")],
            m: [r, s("minutes")],
            mm: [r, s("minutes")],
            H: [r, s("hours")],
            h: [r, s("hours")],
            HH: [r, s("hours")],
            hh: [r, s("hours")],
            D: [r, s("day")],
            DD: [a, s("day")],
            Do: [
              n,
              function (e) {
                var t = o.ordinal,
                  l = e.match(/\d+/);
                if (((this.day = l[0]), t))
                  for (var a = 1; a <= 31; a += 1)
                    t(a).replace(/\[|\]/g, "") === e && (this.day = a);
              },
            ],
            w: [r, s("week")],
            ww: [a, s("week")],
            M: [r, s("month")],
            MM: [a, s("month")],
            MMM: [
              n,
              function (e) {
                var t = c("months"),
                  l =
                    (
                      c("monthsShort") ||
                      t.map(function (e) {
                        return e.slice(0, 3);
                      })
                    ).indexOf(e) + 1;
                if (l < 1) throw new Error();
                this.month = l % 12 || l;
              },
            ],
            MMMM: [
              n,
              function (e) {
                var t = c("months").indexOf(e) + 1;
                if (t < 1) throw new Error();
                this.month = t % 12 || t;
              },
            ],
            Y: [/[+-]?\d+/, s("year")],
            YY: [
              a,
              function (e) {
                this.year = i(e);
              },
            ],
            YYYY: [/\d{4}/, s("year")],
            Z: u,
            ZZ: u,
          };
        function p(l) {
          var a, r;
          ((a = l), (r = o && o.formats));
          for (
            var n = (l = a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, l, a) {
                var n = a && a.toUpperCase();
                return (
                  l ||
                  r[a] ||
                  e[a] ||
                  r[n].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, l) {
                    return t || l.slice(1);
                  })
                );
              })).match(t),
              i = n.length,
              s = 0;
            s < i;
            s += 1
          ) {
            var u = n[s],
              c = v[u],
              d = c && c[0],
              p = c && c[1];
            n[s] = p ? { regex: d, parser: p } : u.replace(/^\[|\]$/g, "");
          }
          return function (e) {
            for (var t = {}, l = 0, a = 0; l < i; l += 1) {
              var r = n[l];
              if ("string" == typeof r) a += r.length;
              else {
                var o = r.regex,
                  s = r.parser,
                  u = e.slice(a),
                  c = o.exec(u)[0];
                (s.call(t, c), (e = e.replace(c, "")));
              }
            }
            return (
              (function (e) {
                var t = e.afternoon;
                if (void 0 !== t) {
                  var l = e.hours;
                  (t ? l < 12 && (e.hours += 12) : 12 === l && (e.hours = 0), delete e.afternoon);
                }
              })(t),
              t
            );
          };
        }
        return function (e, t, l) {
          ((l.p.customParseFormat = !0), e && e.parseTwoDigitYear && (i = e.parseTwoDigitYear));
          var a = t.prototype,
            r = a.parse;
          a.parse = function (e) {
            var t = e.date,
              a = e.utc,
              n = e.args;
            this.$u = a;
            var i = n[1];
            if ("string" == typeof i) {
              var s = !0 === n[2],
                u = !0 === n[3],
                c = s || u,
                d = n[2];
              (u && (d = n[2]),
                (o = this.$locale()),
                !s && d && (o = l.Ls[d]),
                (this.$d = (function (e, t, l, a) {
                  try {
                    if (["x", "X"].indexOf(t) > -1) return new Date(("X" === t ? 1e3 : 1) * e);
                    var r = p(t)(e),
                      n = r.year,
                      o = r.month,
                      i = r.day,
                      s = r.hours,
                      u = r.minutes,
                      c = r.seconds,
                      d = r.milliseconds,
                      v = r.zone,
                      m = r.week,
                      h = new Date(),
                      f = i || (n || o ? 1 : h.getDate()),
                      g = n || h.getFullYear(),
                      k = 0;
                    (n && !o) || (k = o > 0 ? o - 1 : h.getMonth());
                    var y,
                      b = s || 0,
                      w = u || 0,
                      x = c || 0,
                      S = d || 0;
                    return v
                      ? new Date(Date.UTC(g, k, f, b, w, x, S + 60 * v.offset * 1e3))
                      : l
                        ? new Date(Date.UTC(g, k, f, b, w, x, S))
                        : ((y = new Date(g, k, f, b, w, x, S)),
                          m && (y = a(y).week(m).toDate()),
                          y);
                  } catch (e) {
                    return new Date("");
                  }
                })(t, i, a, l)),
                this.init(),
                d && !0 !== d && (this.$L = this.locale(d).$L),
                c && t != this.format(i) && (this.$d = new Date("")),
                (o = {}));
            } else if (i instanceof Array)
              for (var v = i.length, m = 1; m <= v; m += 1) {
                n[1] = i[m - 1];
                var h = l.apply(this, n);
                if (h.isValid()) {
                  ((this.$d = h.$d), (this.$L = h.$L), this.init());
                  break;
                }
                m === v && (this.$d = new Date(""));
              }
            else r.call(this, e);
          };
        };
      })())),
    xl.exports),
  Cl = ml(Ml),
  zl = { exports: {} };
(Sl ||
  ((Sl = 1),
  (zl.exports = (function (e) {
    function t(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var l = t(e),
      a = {
        name: "zh-cn",
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        ordinal: function (e, t) {
          return "W" === t ? e + "周" : e + "日";
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        relativeTime: {
          future: "%s内",
          past: "%s前",
          s: "几秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年",
        },
        meridiem: function (e, t) {
          var l = 100 * e + t;
          return l < 600
            ? "凌晨"
            : l < 900
              ? "早上"
              : l < 1100
                ? "上午"
                : l < 1300
                  ? "中午"
                  : l < 1800
                    ? "下午"
                    : "晚上";
        },
      };
    return (l.default.locale(a, null, !0), a);
  })(N))),
  N.extend(kl),
  N.extend(Cl),
  N.extend(wl),
  N.locale("zh-cn"));
var Bl = e({
    name: "DatePicker",
    directives: { transfer: Ke, resize: Se },
    props: {
      modelValue: { type: [Date, Object, Array, String, Number], default: null },
      startDate: { type: [Date, Object, String, Number], default: null },
      endDate: { type: [Date, Object, String, Number], default: null },
      valueType: {
        type: String,
        default: "string",
        validator: (e) => ["date", "timestamp", "unix", "string"].includes(e),
      },
      mode: {
        type: String,
        default: "date",
        validator: (e) =>
          ["year", "month", "date", "time", "dateTime", "dateRange", "dateTimeRange"].includes(e),
      },
      presets: Array,
      disabled: { type: Boolean },
      clearable: { type: Boolean, default: !0 },
      editable: { type: Boolean, default: !0 },
      placeholder: { type: [String, Array], default: "" },
      format: { type: [String, Array], default: null },
      disabledDate: { type: Function, default: () => !1 },
      disabledTime: { type: Function, default: () => !1 },
      size: { type: String, default: "default" },
      pickerSize: { type: String, default: "default" },
      dateIcon: { type: [Array, Object] },
      theme: { type: String, default: "light" },
      shape: String,
      bordered: { type: Boolean, default: !0 },
      placement: {
        validator: (e) =>
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].includes(e),
        default: "bottom-left",
      },
    },
    setup(e, i) {
      var { emit: s, slots: p } = i,
        m = v("locale", ht),
        h = a(() => (m instanceof Object && "value" in m ? m.value : m) || ht),
        f = () => N().locale(g.value).localeData(),
        g = a(() => h.value.name || "zh-cn"),
        k = l(!1),
        y = l(!1),
        b = l(!1),
        x = l(e.placement),
        S = l(0),
        M = l(0),
        B = l("bottom"),
        A = l(null),
        T = l(null),
        O = l({}),
        V = l(N()),
        D = l(null),
        E = l(""),
        L = l(""),
        P = l(""),
        j = l(null),
        I = l("date"),
        F = l("start"),
        Y = a(() => e.mode.includes("Range"));
      c(g, () => {
        H();
      });
      var K = a(() => {
          var e = g.value.toLowerCase();
          return ["zh", "ja", "ko"].some((t) => e.includes(t));
        }),
        R = (t) => {
          if (!t) return null;
          var l = t.locale(g.value);
          switch (e.valueType) {
            case "timestamp":
              return l.valueOf();
            case "unix":
              return l.unix();
            case "string":
              return l.format(_());
            default:
              return l.toDate();
          }
        },
        _ = () => {
          if (e.format) return Array.isArray(e.format) ? e.format[0] : e.format;
          return (
            {
              date: "YYYY-MM-DD",
              dateTime: "YYYY-MM-DD HH:mm:ss",
              dateRange: "YYYY-MM-DD",
              dateTimeRange: "YYYY-MM-DD HH:mm:ss",
              month: "YYYY-MM",
              time: "HH:mm:ss",
              year: "YYYY",
            }[e.mode] || "YYYY-MM-DD"
          );
        };
      c([I, F], (t) => {
        var [l] = t;
        "time" === l &&
          u(() => {
            var t = N();
            if ("dateTimeRange" === e.mode) {
              var l = "start" === F.value ? 0 : 1;
              D.value && D.value[l] && (t = D.value[l]);
            } else D.value && !Array.isArray(D.value) && (t = D.value);
            var a = { hour: t.hour(), minute: t.minute(), second: t.second() };
            ["hour", "minute", "second"].forEach((e) => {
              var t = O.value[e];
              t && (t.scrollTop = 32 * a[e] + 16);
            });
          });
      });
      var H = () => {
          var e = _();
          if (!D.value) return ((E.value = ""), (L.value = ""), void (P.value = ""));
          var t;
          if (Array.isArray(D.value)) {
            var [l, a] = D.value;
            ((L.value = l ? l.format(e) : ""), (P.value = a ? a.format(e) : ""));
          } else E.value = (t = D.value) ? t.locale(g.value).format(e) : "";
        },
        W = (t) => {
          if (null == t || "" === t) return null;
          var l;
          if ("unix" === e.valueType) l = N.unix(Number(t));
          else {
            var a = _();
            (l = N(t, a, g.value)).isValid() || (l = N(t));
          }
          return l.isValid() ? l.locale(g.value) : null;
        };
      c(
        () => e.modelValue,
        (e) => {
          if (!e) return ((D.value = null), void H());
          if (Y.value && Array.isArray(e))
            ((D.value = e.map((e) => {
              var t = W(e);
              return null != t && t.isValid() ? t : null;
            })),
              y.value || H(),
              D.value[0] && (V.value = D.value[0]));
          else {
            var t = W(e);
            ((D.value = t), y.value || H(), null != t && t.isValid() && (V.value = t));
          }
        },
        { immediate: !0 }
      );
      var q = function () {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (!D.value) return (s("update:modelValue", null), void s("change", null, ""));
          var t = _(),
            l = (e) => e.locale(g.value).format(t);
          if (Array.isArray(D.value)) {
            var [a, r] = D.value;
            if (a && r) {
              var n = [a, r].sort((e, t) => e.valueOf() - t.valueOf()),
                o = n.map((e) => R(e));
              (s("update:modelValue", o),
                s("update:startDate", o[0]),
                s("update:endDate", o[1]),
                s(
                  "change",
                  n,
                  n.map((e) => l(e))
                ),
                (D.value = n),
                H(),
                e && (k.value = !1));
            }
          } else
            (s("update:modelValue", R(D.value)),
              s("change", D.value, l(D.value)),
              H(),
              e && (k.value = !1));
        },
        G = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            l = e.target.value,
            a = _();
          Y.value ? (0 === t ? (L.value = l) : (P.value = l)) : (E.value = l);
          var r = N(l, a, g.value, !0);
          if (r.isValid())
            if (Y.value) {
              var n = Array.isArray(D.value) ? [...D.value] : [null, null];
              ((n[t] = r), (D.value = n), (V.value = r), n[0] && n[1] && q(!1));
            } else ((D.value = r), (V.value = r), q(!1));
          else if ("" === l)
            if (Y.value) {
              var o = Array.isArray(D.value) ? [...D.value] : [null, null];
              ((o[t] = null), (D.value = o));
            } else ((D.value = null), q(!1));
        },
        X = () => {
          if (!k.value) {
            ((k.value = !0),
              (y.value = !0),
              "year" === e.mode
                ? (I.value = "year")
                : "month" === e.mode
                  ? (I.value = "month")
                  : "time" === e.mode
                    ? (I.value = "time")
                    : (I.value = "date"));
            var t = N().locale(g.value);
            D.value
              ? Array.isArray(D.value)
                ? D.value[0]
                  ? (V.value = D.value[0])
                  : (V.value = t)
                : (V.value = D.value)
              : (V.value = t);
          }
        },
        ee = () => {
          e.disabled ||
            k.value ||
            (b.value
              ? (X(), ve())
              : ((b.value = !0),
                document.addEventListener("click", le),
                u(() => {
                  (X(), ve());
                })));
        },
        le = (e) => {
          var t = T.value,
            l = A.value;
          l &&
            !l.contains(e.target) &&
            t &&
            !t.contains(e.target) &&
            (H(), (k.value = !1), (y.value = !1));
        },
        re = (e, t) => {
          (e.preventDefault(),
            F.value != t || "time" != I.value
              ? ((F.value = t), (I.value = "time"))
              : (I.value = "date"));
        },
        ne = (t) => !(!e.disabledTime || !t) && e.disabledTime(t.toDate()),
        oe = () => {
          if ("time" === e.mode) return null;
          var l = V.value.locale(g.value),
            a = l.year(),
            r = l.format("MMM"),
            n = h.value.k.datePicker.year || "",
            o = "".concat(a).concat(n),
            i = t("span", { onClick: () => (I.value = "year") }, [o]),
            s =
              "year" !== e.mode
                ? t(
                    "span",
                    { class: "k-picker-header-month-btn", onClick: () => (I.value = "month") },
                    [r]
                  )
                : null;
          return t("div", { class: "k-picker-header" }, [
            t(
              Pe,
              { icon: J, type: "text", onClick: () => (V.value = V.value.subtract(10, "year")) },
              null
            ),
            "year" !== e.mode
              ? t(
                  Pe,
                  {
                    icon: Z,
                    type: "text",
                    onClick: () => (V.value = V.value.subtract(1, "month")),
                  },
                  null
                )
              : null,
            t("span", { class: "k-picker-header-label" }, [K.value ? [i, s] : [s, i]]),
            "year" !== e.mode
              ? t(
                  Pe,
                  { icon: te, type: "text", onClick: () => (V.value = V.value.add(1, "month")) },
                  null
                )
              : null,
            t(
              Pe,
              { type: "text", icon: Q, onClick: () => (V.value = V.value.add(10, "year")) },
              null
            ),
          ]);
        },
        ie = () => {
          var l = 10 * Math.floor(V.value.year() / 10),
            a = Array.from({ length: 12 }, (e, t) => l - 1 + t);
          return t("div", { class: "k-picker-body" }, [
            t("div", { class: "k-picker-year-body" }, [
              a.map((l) =>
                t(
                  "div",
                  {
                    key: l,
                    class: [
                      "k-picker-year-item",
                      l === V.value.year() ? "k-picker-year-selected" : "",
                    ],
                    onClick: () =>
                      ((t) => {
                        ((V.value = V.value.year(t)),
                          "year" === e.mode
                            ? ((D.value = V.value), q(!0))
                            : setTimeout(() => {
                                I.value = "month";
                              }, 0));
                      })(l),
                  },
                  [l]
                )
              ),
            ]),
          ]);
        },
        se = () => {
          var l = f().monthsShort();
          return t("div", { class: "k-picker-body" }, [
            t("div", { class: "k-picker-month-body" }, [
              l.map((l, a) =>
                t(
                  "div",
                  {
                    key: a,
                    class: [
                      "k-picker-month-item",
                      a === V.value.month() ? "k-picker-month-selected" : "",
                    ],
                    onClick: () =>
                      ((t) => {
                        ((V.value = V.value.month(t)),
                          "month" === e.mode
                            ? ((D.value = V.value), q(!0))
                            : setTimeout(() => {
                                I.value = "date";
                              }, 0));
                      })(a),
                  },
                  [l]
                )
              ),
            ]),
          ]);
        },
        ue = () => {
          for (
            var l = f(),
              a = l.firstDayOfWeek(),
              r = V.value.startOf("month"),
              n = [],
              o = (r.day() - a + 7) % 7;
            o > 0;
            o--
          )
            n.push({ d: r.subtract(o, "day"), type: "prev" });
          for (var i = 0; i < r.daysInMonth(); i++) n.push({ d: r.add(i, "day"), type: "curr" });
          for (var s = 42 - n.length, u = 1; u <= s; u++)
            n.push({ d: r.endOf("month").add(u, "day"), type: "next" });
          var c = l.weekdaysMin(),
            d = [...c.slice(a), ...c.slice(0, a)];
          return t("div", { class: "k-picker-body" }, [
            t("div", { class: "k-picker-weekdays" }, [
              d.map((e) => t("span", { class: "k-picker-weekday", key: e }, [e])),
            ]),
            t("div", { class: "v-dp-table", onMouseleave: () => (j.value = null) }, [
              n.map((l, a) => {
                var r = l.d,
                  n = e.disabledDate(r.toDate()),
                  o = !1,
                  i = !1,
                  s = !1,
                  u = !1;
                if (e.mode.includes("Range") && Array.isArray(D.value)) {
                  var [c, d] = D.value;
                  if (
                    (c && r.isSame(c, "day") && ((o = !0), (s = !0)),
                    d && r.isSame(d, "day") && ((o = !0), (u = !0)),
                    c && d && r.isBetween(c, d, "day", "[]") && (i = !0),
                    c && !d && j.value)
                  ) {
                    var v = c.isBefore(j.value) ? c : j.value,
                      p = c.isBefore(j.value) ? j.value : c;
                    r.isBetween(v, p, "day", "[]") && (i = !0);
                  }
                } else D.value && !Array.isArray(D.value) && r.isSame(D.value, "day") && (o = !0);
                return t(
                  "div",
                  {
                    key: a,
                    class: [
                      "k-picker-day",
                      "curr" !== l.type ? "k-picker-day-out" : "",
                      r.isSame(N(), "day") ? "k-picker-is-today" : "",
                      o ? "k-picker-day-selected" : "",
                      i && !o ? "k-picker-day-in" : "",
                      s ? "k-picker-range-start" : "",
                      u ? "k-picker-range-end" : "",
                      n ? "k-picker-day-disabled" : "",
                    ],
                    onMouseenter: () => {
                      e.mode.includes("Range") && (j.value = r);
                    },
                    onClick: () =>
                      !n &&
                      ((t) => {
                        if (Y.value) {
                          var l = Array.isArray(D.value) ? [...D.value] : [];
                          if (2 === (l = l.filter((e) => e)).length || 0 === l.length)
                            l = [t.startOf("day")];
                          else {
                            var a,
                              r,
                              n = l[0],
                              o = t;
                            (o.isBefore(n) ? ((a = o), (r = n)) : ((a = n), (r = o)),
                              (l = [(a = a.startOf("day")), (r = r.endOf("day"))]));
                          }
                          ((D.value = l),
                            2 === l.length && ("dateTimeRange" === e.mode ? q(!1) : q(!0)));
                        } else if ("dateTime" === e.mode) {
                          var i = D.value || N();
                          ((D.value = t.hour(i.hour()).minute(i.minute()).second(i.second())),
                            q(!1));
                        } else ((D.value = t), q(!0));
                      })(r),
                  },
                  [r.date()]
                );
              }),
            ]),
          ]);
        },
        ce = () => {
          var l = N();
          if ("dateTimeRange" === e.mode) {
            var a = "start" === F.value ? 0 : 1;
            D.value && D.value[a] && (l = D.value[a]);
          } else D.value && !Array.isArray(D.value) && (l = D.value);
          var r = (a, r) => {
            var n = "hour" === a ? l.hour() : "minute" === a ? l.minute() : l.second();
            return t("ul", { class: "k-picker-time-col", ref: (e) => (O.value[a] = e) }, [
              Array.from({ length: r }).map((r, o) => {
                var i = l.set(a, o),
                  s = ne(i);
                return t(
                  "li",
                  {
                    key: o,
                    class: [
                      "k-picker-time-item",
                      o === n ? "active" : "",
                      s ? "k-picker-time-disabled" : "",
                    ],
                    onClick: (t) => {
                      (t.stopPropagation(),
                        !s &&
                          ((t, l) => {
                            var a = N(),
                              r = 0;
                            if ("dateTimeRange" === e.mode) {
                              if (((r = "start" === F.value ? 0 : 1), D.value && D.value[r]))
                                a = D.value[r];
                              else if (Array.isArray(D.value) && null === D.value[r]) return;
                            } else D.value && !Array.isArray(D.value) && (a = D.value);
                            var n = a.set(t, l);
                            if (!ne(n)) {
                              if ("dateTimeRange" === e.mode) {
                                var o = [...(D.value || [null, null])];
                                ((o[r] = n), (D.value = o), q(!1));
                              } else ((D.value = n), q(!1));
                              var i = O.value[t];
                              i && i.scrollTo({ top: 32 * l + 16, behavior: "smooth" });
                            }
                          })(a, o));
                    },
                  },
                  [String(o).padStart(2, "0")]
                );
              }),
            ]);
          };
          return t("div", { class: "k-picker-time-picker" }, [
            r("hour", 24),
            r("minute", 60),
            r("second", 60),
          ]);
        },
        de = () => {
          if (!e.mode.includes("Time")) return null;
          if ("dateTimeRange" === e.mode) {
            var l = D.value && D.value[0] ? D.value[0].format("HH:mm:ss") : "--:--:--",
              a = D.value && D.value[1] ? D.value[1].format("HH:mm:ss") : "--:--:--";
            return t("div", { class: "k-picker-footer" }, [
              t(
                "div",
                {
                  class: [
                    "k-picker-footer-time",
                    "time" === I.value && "start" === F.value ? "active" : "",
                  ],
                  onClick: (e) => re(e, "start"),
                },
                [l]
              ),
              t("span", { class: "k-picker-footer-time-split" }, [t(z("Icon"), { type: U }, null)]),
              t(
                "div",
                {
                  class: [
                    "k-picker-footer-time",
                    "time" === I.value && "end" === F.value ? "active" : "",
                  ],
                  onClick: (e) => re(e, "end"),
                },
                [a]
              ),
            ]);
          }
          var r = (D.value || N()).format("HH:mm:ss");
          return t("div", { class: "k-picker-footer" }, [
            t(
              "div",
              {
                class: ["k-picker-footer-time", "time" === I.value ? "active" : ""],
                onClick: () => (I.value = "time" === I.value ? "date" : "time"),
              },
              [r]
            ),
          ]);
        },
        ve = () => {
          u(() => {
            Re({
              refSelection: T,
              refPopper: A,
              currentPlacement: x,
              transOrigin: B,
              top: M,
              left: S,
            });
          });
        };
      return (
        C(() => document.removeEventListener("click", le)),
        () => {
          var l = {
              year: null == h ? void 0 : h.value.k.datePicker.selectYear,
              month: null == h ? void 0 : h.value.k.datePicker.selectMonth,
              date: null == h ? void 0 : h.value.k.datePicker.selectDate,
              dateTime: null == h ? void 0 : h.value.k.datePicker.selectDate,
              time: null == h ? void 0 : h.value.k.datePicker.selectTime,
              startDate: null == h ? void 0 : h.value.k.datePicker.startDate,
              endDate: null == h ? void 0 : h.value.k.datePicker.endDate,
            },
            a = [
              "k-datepicker",
              { "k-datepicker-opened": y.value },
              { "k-datepicker-borderless": !1 === e.bordered },
              { "k-datepicker-sm": "small" == e.size },
              { "k-datepicker-lg": "large" == e.size },
              { "k-datepicker-disabled": e.disabled },
              { "k-datepicker-light": "light" == e.theme },
              { "k-datepicker-circle": "circle" == e.shape },
            ],
            i = e.clearable && (E.value || (L.value && L.value)) && !e.disabled,
            u = ["k-datepicker-selection", { "k-datepicker-has-clear": i }],
            c = "time" == e.mode ? be : e.dateIcon || $,
            v = {
              class: "k-datepicker-overlay",
              ref: A,
              style: {
                left: "".concat(S.value, "px"),
                top: "".concat(M.value, "px"),
                transformOrigin: B.value,
              },
            },
            m = () => {
              if (e.presets && e.presets.length > 0)
                return t("div", { class: "k-picker-presets" }, [
                  e.presets.map((e) =>
                    t(
                      Pe,
                      {
                        size: "small",
                        onClick: () =>
                          ((e) => {
                            var { value: t } = e;
                            if ("function" == typeof t) {
                              var l = t();
                              Y.value && Array.isArray(l)
                                ? ((l = [N(l[0]), N(l[1])]), (D.value = l), q(!0))
                                : ((D.value = N(l)), q(!0));
                            }
                          })(e),
                      },
                      { default: () => [e.label] }
                    )
                  ),
                ]);
            },
            f = (e) => {
              Y.value && Array.isArray(e)
                ? ((e = [N(e[0]), N(e[1])]), (D.value = e), q(!0))
                : ((D.value = N(e)), q(!0));
            },
            g = b.value
              ? t(
                  r,
                  { name: "k-date-picker" },
                  {
                    default: () => [
                      n(
                        t("div", w({ ref: A }, v, { mode: e.mode }), [
                          m(),
                          t("div", { class: "k-picker-container" }, [
                            p.header
                              ? t("div", { class: "k-picker-extra-header" }, [
                                  p.header({ emit: f }),
                                ])
                              : null,
                            oe(),
                            "year" === I.value && ie(),
                            "month" === I.value && se(),
                            "date" === I.value && ue(),
                            "time" === I.value && ce(),
                            de(),
                            p.footer
                              ? t("div", { class: "k-picker-extra-footer" }, [
                                  p.footer({ emit: f }),
                                ])
                              : null,
                          ]),
                        ]),
                        [
                          [d("transfer"), !0],
                          [o, k.value],
                        ]
                      ),
                    ],
                  }
                )
              : null;
          return t("div", { class: a, ref: T, tabindex: e.disabled ? null : 0 }, [
            t("div", { class: u, onClick: ee }, [
              (() => {
                var a = _(),
                  r = a ? a.length : 10,
                  n = Math.max(10, r);
                if (Y.value) {
                  var o = Array.isArray(e.placeholder)
                    ? e.placeholder
                    : [e.placeholder, e.placeholder];
                  return [
                    t(
                      "input",
                      {
                        autocomplete: "off",
                        size: n,
                        tabindex: -1,
                        class: "k-datepicker-input",
                        value: L.value,
                        onInput: (e) => G(e, 0),
                        placeholder: o[0] || l.startDate,
                        disabled: e.disabled,
                        readonly: !e.editable,
                        onClick: () => {
                          F.value = "start";
                        },
                      },
                      null
                    ),
                    t("span", { class: "k-datepicker-separator" }, [
                      t(z("Icon"), { type: U }, null),
                    ]),
                    t(
                      "input",
                      {
                        size: n,
                        tabindex: -1,
                        readonly: !e.editable,
                        autocomplete: "off",
                        class: "k-datepicker-input",
                        value: P.value,
                        onInput: (e) => G(e, 1),
                        placeholder: o[1] || l.endDate,
                        disabled: e.disabled,
                        onClick: () => {
                          F.value = "end";
                        },
                      },
                      null
                    ),
                  ];
                }
                return t(
                  "input",
                  {
                    tabindex: -1,
                    autocomplete: "off",
                    readonly: !e.editable,
                    size: n,
                    class: "k-datepicker-input",
                    value: E.value,
                    onInput: (e) => G(e),
                    placeholder: e.placeholder || l[e.mode],
                    disabled: e.disabled,
                  },
                  null
                );
              })(),
              t(z("Icon"), { type: c, class: "k-icon-calendar" }, null),
              i &&
                t(
                  z("Icon"),
                  {
                    type: ae,
                    class: "k-icon-clean",
                    onClick: (e) => {
                      (e.stopPropagation(),
                        (D.value = null),
                        H(),
                        s("update:startDate", null),
                        s("update:endDate", null),
                        s("update:modelValue", null),
                        s("change", null, ""));
                    },
                  },
                  null
                ),
            ]),
            g,
          ]);
        }
      );
    },
  }),
  Al = j(Bl),
  Tl = e({
    name: "DescriptionsItem",
    props: {
      label: String,
      span: { type: Number, default: 1 },
      type: String,
      bordered: Boolean,
      layout: String,
    },
    setup(e, l) {
      var { slots: a } = l;
      return () => {
        var l,
          r = null === (l = a.default) || void 0 === l ? void 0 : l.call(a),
          { bordered: n, label: o, span: i, type: s, layout: u } = e;
        return n && "vertical" != u
          ? "label" == s
            ? t("th", { class: "k-descriptions-item-label", colSpan: i }, [o])
            : t("td", { class: "k-descriptions-item-content", colSpan: i }, [r])
          : "vertical" == u
            ? n
              ? "label" == s
                ? t("th", { class: "k-descriptions-item-label", colSpan: i }, [o])
                : t("td", { class: "k-descriptions-item-content", colSpan: i }, [r])
              : t(
                  "td",
                  { class: "k-descriptions-item", colSpan: i },
                  "label" == s
                    ? [
                        t("div", { class: "k-descriptions-item-inner" }, [
                          t("div", { class: "k-descriptions-item-label" }, [o]),
                        ]),
                      ]
                    : [
                        t("div", { class: "k-descriptions-item-inner" }, [
                          t("div", { class: "k-descriptions-item-content" }, [r]),
                        ]),
                      ]
                )
            : t("td", { class: "k-descriptions-item", colSpan: i }, [
                t("div", { class: "k-descriptions-item-inner" }, [
                  t("div", { class: "k-descriptions-item-label" }, [o]),
                  t("div", { class: "k-descriptions-item-content" }, [r]),
                ]),
              ]);
      };
    },
  }),
  Ol = j(Tl);
function Nl(e) {
  return (
    "function" == typeof e || ("[object Object]" === Object.prototype.toString.call(e) && !h(e))
  );
}
var Vl = e({
    name: "Descriptions",
    props: {
      bordered: Boolean,
      column: { type: Number, default: 3 },
      layout: { type: String, default: "horizontal" },
      title: String,
      extra: String,
      size: { type: String, default: "default" },
    },
    setup(e, l) {
      var { slots: a } = l;
      return () => {
        var l,
          r,
          n,
          { column: o, bordered: i, layout: s, size: u, title: c, extra: d } = e,
          v = Oe(null === (l = a.default) || void 0 === l ? void 0 : l.call(a)),
          p = { 0: [] },
          m = 0,
          h = [],
          f = 0,
          g = 0;
        for (var k of v) {
          g++;
          var { label: y, span: b = 1 } = k.props,
            w = null == k ? void 0 : k.children,
            x = p[m] || [],
            S = "vertical" == s,
            M = (S ? h[f] : h[m]) || 0,
            C = i && !S ? 2 * o : o;
          if (
            (g == (null == w ? void 0 : w.length) - 1 &&
              (i ? (b = C - M - (S ? 0 : 1)) : M < C && (b = C - M)),
            S)
          ) {
            var z = p[m + 1] || [];
            (M < C
              ? (x.push(t(Ol, { label: y, span: b, type: "label", layout: s, bordered: i }, null)),
                z.push(
                  t(Ol, { span: b, layout: s, bordered: i }, Nl(w) ? w : { default: () => [w] })
                ),
                (p[m] = x),
                (p[m + 1] = z),
                (h[f] = M + b))
              : M >= C &&
                ((f += 1),
                (p[(m += 2)] = []),
                (p[m + 1] = []),
                (h[f] = M + b),
                p[m].push(
                  t(Ol, { label: y, span: b, type: "label", layout: s, bordered: i }, null)
                ),
                p[m + 1].push(
                  t(Ol, { span: b, layout: s, bordered: i }, Nl(w) ? w : { default: () => [w] })
                )),
              h[f] >= C && ((m += 2), (f += 1)));
          } else
            i
              ? (M < C
                  ? (x.push(
                      t(Ol, { label: y, bordered: i, span: 1, type: "label" }, null),
                      t(Ol, { span: b, bordered: i }, Nl(w) ? w : { default: () => [w] })
                    ),
                    (p[m] = x),
                    (h[m] = M + b + 1))
                  : M >= C &&
                    ((p[(m += 1)] = []),
                    (h[m] = b + 1),
                    p[m].push(
                      t(Ol, { label: y, bordered: i, span: 1, type: "label" }, null),
                      t(Ol, { span: b, bordered: i }, Nl(w) ? w : { default: () => [w] })
                    )),
                h[m] >= C && (m += 1))
              : (M < C
                  ? (x.push(t(Ol, { label: y, span: b }, Nl(w) ? w : { default: () => [w] })),
                    (p[m] = x),
                    (h[m] = M + b))
                  : M >= C &&
                    ((p[(m += 1)] = []),
                    (h[m] = M + b),
                    p[m].push(t(Ol, { label: y, span: b }, Nl(w) ? w : { default: () => [w] }))),
                h[m] >= C && (m += 1));
        }
        var B = [];
        for (var A in p) B.push(t("tr", { class: "k-descriptions-row" }, [p[A]]));
        var T = t("table", null, [B]),
          O = {
            class: [
              "k-descriptions",
              {
                "k-descriptions-vertical": "vertical" == s,
                "k-descriptions-bordered": i,
                "k-descriptions-middle": "middle" == u,
                "k-descriptions-sm": "small" == u,
              },
            ],
          },
          N = d || (null === (r = a.extra) || void 0 === r ? void 0 : r.call(a));
        return t("div", O, [
          t("div", { class: "k-descriptions-header" }, [
            t("div", { class: "k-descriptions-title" }, [
              c || (null === (n = a.title) || void 0 === n ? void 0 : n.call(a)),
            ]),
            N ? t("div", { class: "k-descriptions-extra" }, [N]) : null,
          ]),
          t("div", { class: "k-descriptions-view" }, [T]),
        ]);
      };
    },
  }),
  Dl = j(Vl),
  El = e({
    name: "Drawer",
    directives: { transfer: Ke },
    props: {
      modelValue: Boolean,
      title: { default: "Title", type: String },
      width: { default: 520, type: [Number, String] },
      height: { default: 520, type: [Number, String] },
      okText: String,
      cancelText: String,
      placement: { type: String, default: "right" },
      closable: { type: Boolean, default: !0 },
      footer: { type: Boolean, default: !0 },
      maskClosable: { type: Boolean, default: !0 },
      target: { type: Function, default: () => document.body },
      mask: { type: Boolean, default: !0 },
      loading: { type: Boolean, default: !1 },
      escKey: { type: Boolean, default: !0 },
    },
    setup(e, p) {
      var { slots: m, emit: h } = p,
        f = v("locale", ht),
        g = a(() => (f instanceof Object && "value" in f ? f.value : f)),
        k = l(e.modelValue),
        y = l(e.modelValue),
        b = l(e.modelValue);
      (c(
        () => e.modelValue,
        (e, t) => {
          e && w(e);
        }
      ),
        s(() => {
          e.escKey && document.addEventListener("keydown", x);
        }),
        i(() => {
          (e.escKey && document.removeEventListener("keydown", x),
            ((e) => {
              if (e && e == document.body) {
                var t = Ne.get("body");
                t && t.parentNode && (t.parentNode.removeChild(t), Ne.delete("body"));
              }
            })(e.target()));
        }));
      var w = (e) => {
          !k.value && e
            ? ((k.value = !0), w(!0))
            : e
              ? u((t) => {
                  ((y.value = e), (b.value = e), h("update:modelValue", !0));
                })
              : ((y.value = !1),
                setTimeout(() => {
                  b.value = !1;
                }, 300),
                h("update:modelValue", !1));
        },
        x = (e) => {
          "Escape" === e.key && C();
        },
        S = () => {
          e.maskClosable && C();
        },
        M = () => {
          (h("cancel"), (y.value = !1), w(!1));
        },
        C = () => {
          (h("close"), w(!1));
        },
        z = () => {
          h("ok");
        };
      return () => {
        var l,
          {
            title: a,
            cancelText: i,
            okText: s,
            placement: u,
            width: c,
            height: v,
            closable: p,
            loading: h,
          } = e,
          f = e.footer || m.footer,
          w = t(
            Pe,
            { onClick: M },
            { default: () => [i || (null == g ? void 0 : g.value.k.common.cancel)] }
          ),
          x = t(
            Pe,
            { type: "primary", onClick: z, loading: h },
            { default: () => [s || (null == g ? void 0 : g.value.k.common.ok)] }
          ),
          B = f ? t("div", { class: "k-drawer-footer" }, [m.footer ? m.footer() : [w, x]]) : null,
          A = p
            ? t(
                Pe,
                { class: "k-drawer-close", size: "small", type: "text", onClick: C, icon: re },
                null
              )
            : null,
          T = "k-drawer-".concat(u),
          O = e.target(),
          N = O == document.body,
          V = [
            "k-drawer",
            "k-drawer-".concat(u),
            { "k-drawer-has-footer": f },
            { "k-drawer-to-body": N },
            { "k-drawer-no-mask": !e.mask },
          ],
          D = {};
        (("left" != u && "right" != u) || (D.width = "number" == typeof c ? "".concat(c, "px") : c),
          ("top" != u && "bottom" != u) ||
            (D.height = "number" == typeof v ? "".concat(v, "px") : v));
        var E = null;
        return (
          e.mask &&
            (E = t(
              r,
              { name: "k-drawer-fade" },
              {
                default: () => [
                  n(
                    t(
                      "div",
                      { class: ["k-drawer-mask", { "k-drawer-mask-to-body": N }], onClick: S },
                      null
                    ),
                    [[o, y.value]]
                  ),
                ],
              }
            )),
          k.value
            ? n(
                t("div", { class: V }, [
                  E,
                  n(
                    t("div", { class: "k-drawer-wrap", tabindex: "-1" }, [
                      t(
                        r,
                        { name: T },
                        {
                          default: () => [
                            n(
                              t("div", { class: "k-drawer-box", style: D }, [
                                t("div", { class: "k-drawer-content" }, [
                                  t("div", { class: "k-drawer-header" }, [
                                    A,
                                    t("div", { class: "k-drawer-header-inner" }, [a]),
                                  ]),
                                  t("div", { class: "k-drawer-body" }, [
                                    null === (l = m.default) || void 0 === l ? void 0 : l.call(m),
                                  ]),
                                  B,
                                ]),
                              ]),
                              [[o, y.value]]
                            ),
                          ],
                        }
                      ),
                    ]),
                    [[o, b.value]]
                  ),
                ]),
                [[d("transfer"), O]]
              )
            : null
        );
      };
    },
  }),
  Ll = j(El),
  Pl = e({
    name: "Dropdown",
    directives: { transfer: Ke, resize: Se },
    props: {
      dark: Boolean,
      trigger: {
        type: String,
        default: "hover",
        validator: (e) => ["hover", "click", "contextmenu"].indexOf(e) >= 0,
      },
      transfer: { type: Boolean, default: !0 },
      disabled: Boolean,
      arrow: { type: Boolean, default: !1 },
      show: Boolean,
      placement: {
        validator: (e) =>
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].indexOf(e) >= 0,
        default: "bottom-left",
      },
      target: Object,
    },
    emits: ["update:visible"],
    setup(e, a) {
      var { slots: i, emit: v, attrs: p, listeners: h } = a,
        f = l(e.show),
        g = l(null),
        k = l(e.placement),
        b = l("bottom"),
        w = l(),
        x = l(0),
        S = l(0),
        M = l(!1),
        C = l(!1);
      (m("dropdown", !0),
        s(() => {
          e.show && T(!0);
        }),
        B(() => {
          document.removeEventListener("click", z);
        }));
      (m("clearPopTimer", () => clearTimeout(C.value)),
        c(
          () => e.placement,
          (e) => {
            ((k.value = e), A());
          }
        ),
        c(
          () => e.show,
          (e) => {
            T(e);
          }
        ));
      var z = (t) => {
          var l,
            a = (null === (l = g.value) || void 0 === l ? void 0 : l.$el) || g.value;
          w.value &&
            ((!w.value.contains(t.target) && a && !a.contains(t.target)) ||
              ("contextmenu" == e.trigger && !w.value.contains(t.target))) &&
            (f.value = !1);
        },
        A = (e) => {
          var t = e ? { x: e.clientX, y: e.clientY } : null;
          u(() => {
            Re({
              refSelection: g,
              position: t,
              refPopper: w,
              currentPlacement: k,
              transOrigin: b,
              top: S,
              left: x,
            });
          });
        },
        T = (e, t) => {
          e
            ? M.value
              ? ((f.value = !0), v("update:visible", !0), A(t))
              : ((M.value = !0),
                document.addEventListener("click", z),
                u(() => {
                  ((f.value = !0), v("update:visible", !0), A(t));
                }))
            : ((f.value = !1), v("update:visible", !1));
        };
      m("dropdown-menu-selected", () => {
        f.value = !1;
      });
      var O = (t) => {
          e.disabled || ("click" == e.trigger && T(!0));
        },
        N = (t) => {
          e.disabled ||
            ("hover" == e.trigger &&
              (C.value = setTimeout(() => {
                T(!1);
              }, 300)));
        },
        V = (t) => {
          e.disabled || ("hover" == e.trigger && (clearTimeout(C.value), T(!0)));
        },
        D = (t) => {
          e.disabled || ("contextmenu" == e.trigger && (t.preventDefault(), T(!0, t)));
        };
      return (
        m("dropdown-trigger-in", V),
        m("dropdown-trigger-out", N),
        () => {
          var l,
            a,
            s = {
              ref: w,
              style: {
                left: "".concat(x.value, "px"),
                top: "".concat(S.value, "px"),
                transformOrigin: b.value,
              },
              "k-placement": k.value,
              class: ["k-dropdown", { "k-dropdown-has-arrow": e.arrow }],
              onClick: (e) => {
                T(!1);
              },
              onMouseenter: () => {
                clearTimeout(C.value);
              },
              onMouseleave: () => {
                "hover" == e.trigger &&
                  (C.value = setTimeout(() => {
                    T(!1);
                  }, 300));
              },
            },
            u =
              M.value && i.overlay
                ? t(
                    r,
                    { name: "k-dropdown" },
                    {
                      default: () => [
                        n(
                          t("div", s, [
                            t("div", { class: "k-dropdown-content" }, [
                              t("div", { class: "k-dropdown-body" }, [
                                null === (l = i.overlay) || void 0 === l ? void 0 : l.call(i),
                              ]),
                              e.arrow
                                ? t("div", { class: "k-dropdown-arrow" }, [
                                    t(
                                      "svg",
                                      { style: { fill: "currentcolor" }, viewBox: "0 0 24 8" },
                                      [
                                        t(
                                          "path",
                                          {
                                            d: "M24,0.97087 L24,1.97087 C20,1.97087 18.5,2.97087 16.5,4.97087 C14.5,6.97087 14,7.97087 12,7.97087 C10,7.97087 9.5,6.97087 7.5,4.97087 C5.5,2.97087 4,1.97087 0,1.97087 L0,0.97087 L24,0.97087 Z",
                                            id: "ot",
                                          },
                                          null
                                        ),
                                        t(
                                          "path",
                                          {
                                            d: "M24,0 L24,1 C20.032328,1 18.1576594,1.985435 16.1576594,3.985435 C14.1576594,5.985435 13.3847825,7 12,7 C10.6152175,7 9.81306952,5.985435 7.81306952,3.985435 C5.81306952,1.985435 4.0114261,1 0,1 L0,0 L24,0 Z",
                                            id: "in",
                                            stroke: "currentcolor",
                                          },
                                          null
                                        ),
                                      ]
                                    ),
                                  ])
                                : null,
                            ]),
                          ]),
                          [
                            [d("transfer"), !0],
                            [d("resize"), A],
                            [o, f.value],
                          ]
                        ),
                      ],
                    }
                  )
                : null,
            c = Oe(null === (a = i.default) || void 0 === a ? void 0 : a.call(i)),
            v = e.target ? {} : { onClick: O, onMouseenter: V, onMouseleave: N, onContextmenu: D };
          return [y(1 == c.length ? c[0] : t("span", null, [c]), P(P({ ref: g }, v), p), !0), u];
        }
      );
    },
  }),
  jl = j(Pl),
  Il = e({
    name: "TriggerButton",
    props: { icon: [String, Array, Object] },
    setup(e, l) {
      var { attrs: a, slots: r } = l,
        n = v("dropdown-trigger-in", null),
        o = v("dropdown-trigger-out", null);
      return () => {
        var l;
        return t(
          Pe,
          w({ icon: e.icon }, a, {
            onMouseenter: () => (null == n ? void 0 : n()),
            onMouseleave: () => (null == o ? void 0 : o()),
          }),
          { default: () => [null === (l = r.default) || void 0 === l ? void 0 : l.call(r)] }
        );
      };
    },
  }),
  Fl = j(
    e({
      name: "DropdownButton",
      props: {
        size: String,
        shape: String,
        disabled: Boolean,
        icon: [String, Array, Object],
        theme: String,
        dark: Boolean,
        arrow: Boolean,
        placement: { type: String, default: "bottom-right" },
      },
      emits: ["click"],
      setup(e, a) {
        var { slots: r, emit: n } = a,
          o = l();
        return () =>
          t(
            jl,
            {
              dark: e.dark,
              arrow: e.arrow,
              placement: e.placement,
              target: o,
              disabled: e.disabled,
            },
            {
              default: () => {
                var l, a;
                return t(
                  je,
                  {
                    class: "k-dropdown-button",
                    size: e.size,
                    theme: e.theme,
                    dark: e.dark,
                    shape: e.shape,
                  },
                  {
                    default: () => [
                      t(
                        Pe,
                        {
                          disabled: e.disabled,
                          onClick: (e) => {
                            n("click", e);
                          },
                        },
                        {
                          default: () => [
                            null === (l = r.default) || void 0 === l ? void 0 : l.call(r),
                          ],
                        }
                      ),
                      t(
                        Il,
                        {
                          disabled: e.disabled,
                          ref: o,
                          icon: r.icon ? null : oe,
                          class: "k-dropdown-trigger",
                        },
                        {
                          default: () => [
                            null === (a = r.icon) || void 0 === a ? void 0 : a.call(r),
                          ],
                        }
                      ),
                    ],
                  }
                );
              },
              overlay: () => {
                var e;
                return null === (e = r.overlay) || void 0 === e ? void 0 : e.call(r);
              },
            }
          );
      },
    })
  ),
  Yl = j(
    e({
      name: "Divider",
      props: {
        type: {
          type: String,
          default: "horizontal",
          validator: (e) => ["horizontal", "vertical"].includes(e),
        },
        text: String,
        dashed: Boolean,
        orientation: {
          type: String,
          default: "center",
          validator: (e) => ["left", "right", "center"].includes(e),
        },
      },
      setup(e, l) {
        var { slots: a } = l;
        return () => {
          var l,
            r = (null === (l = a.default) || void 0 === l ? void 0 : l.call(a)) || e.text,
            n = [
              "k-divider",
              {
                ["k-divider-".concat(e.type)]: e.type,
                "k-divider-dashed": e.dashed,
                ["k-divider-with-text-".concat(e.orientation)]: e.orientation && r,
              },
            ];
          return t("div", { class: n }, [
            r ? t("span", { class: "k-divider-inner-text" }, [r]) : null,
          ]);
        };
      },
    })
  ),
  Kl = e({
    name: "Form",
    props: {
      layout: {
        type: String,
        default: "horizontal",
        validator: (e) => ["horizontal", "vertical", "inline"].includes(e),
      },
      model: Object,
      name: String,
      labelCol: Object,
      wrapperCol: Object,
      rules: { type: Object, default: () => ({}) },
      size: {
        type: String,
        default: "default",
        validator: (e) => ["small", "large", "default"].includes(e),
      },
      theme: String,
      shape: String,
      disabled: Boolean,
    },
    emits: ["submit", "change"],
    setup(e, a) {
      var { emit: r, slots: n, expose: o } = a,
        i = l(null),
        s = l({}),
        { model: u, rules: d, size: v, shape: p, theme: h, disabled: f, layout: g, name: k } = b(e),
        w = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            { o: l, k: a } = M(u.value, e);
          l && ((l[a] = t), r("change", u.value));
        },
        x = () => {
          Object.keys(s.value).forEach((e) => {
            (w(e), (s.value[e].valid = !0));
          });
        },
        M = (e, t) => {
          for (
            var l = e,
              a = (t = t.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "")).split("."),
              r = 0,
              n = a.length;
            r < n - 1 && l;
            ++r
          ) {
            l = l[a[r]];
          }
          var o = a[a.length - 1];
          return { o: l, k: o, v: l ? l[o] : null };
        },
        C = (e) => (e.preventDefault(), e.stopPropagation(), z(), !1),
        z = () => {
          B((e) => {
            r("submit", e);
          });
        },
        B = (t) => {
          var l = !0;
          if (
            (Object.keys(s.value).forEach((t) => {
              var a = s.value[t],
                r = a.rules || (e.rules || {})[a.prop];
              r && (a.validate(r) || (l = !1));
            }),
            "function" == typeof t)
          ) {
            var a = JSON.parse(JSON.stringify(u.value || "{}"));
            t({ valid: l, model: a });
          }
        };
      c(u, () => {
        B();
      });
      o({
        validate: B,
        reset: x,
        test: (t) => {
          var l = s.value[t];
          if (l) {
            var a = l.rules || (e.rules || {})[l.prop];
            if (a) return l.validate(a);
          }
        },
        submit: z,
      });
      var A = S({
        model: u,
        layout: g,
        name: k,
        rules: d,
        disabled: f,
        size: v,
        shape: p,
        theme: h,
        getValueFromProp: (e) => {
          var { v: t } = M(u.value, e);
          return t;
        },
        updateMode: w,
        register: (e) => {
          s.value[e.prop] = e;
        },
        unregister: (e) => {
          delete s.value[e.prop];
        },
      });
      return (
        m("Form", A),
        () => {
          var l,
            { layout: a, size: r, labelCol: o = {}, wrapperCol: s = {}, name: u } = e,
            c = [
              "k-form",
              { ["k-form-".concat(a)]: a, "k-form-lg": "large" === r, "k-form-sm": "small" === r },
            ],
            d = Oe(null === (l = n.default) || void 0 === l ? void 0 : l.call(n));
          return t(
            "form",
            { ref: i, class: c, id: u, onSubmit: C, onReset: x, autocomplete: "off" },
            [
              d.map((e) => {
                var t,
                  l,
                  a = (null === (t = e.props) || void 0 === t ? void 0 : t.labelCol) || o,
                  r = (null === (l = e.props) || void 0 === l ? void 0 : l.wrapperCol) || s;
                return y(e, { labelCol: a, wrapperCol: r }, !0);
              }),
            ]
          );
        }
      );
    },
  }),
  Rl = j(Kl),
  _l = j(
    e({
      name: "Row",
      props: {
        gutter: [Number, Array],
        type: { type: String, default: "flex" },
        justify: {
          type: String,
          validator: (e) =>
            ["start", "end", "center", "space-around", "space-between"].indexOf(e) > -1,
        },
        align: { type: String, validator: (e) => ["top", "middle", "bottom"].indexOf(e) > -1 },
      },
      setup(e, a) {
        var { slots: r } = a,
          n = l(e.gutter);
        return (
          m("gutter", n),
          c(
            () => e.gutter,
            (t, l) => {
              n.value = e.gutter;
            }
          ),
          () => {
            var l,
              { align: a, justify: n, gutter: o } = e,
              i = {
                class: [
                  "k-row",
                  {
                    "k-row-flex": "flex" == e.type,
                    ["k-row-flex-".concat(n)]: n,
                    ["k-row-flex-".concat(a)]: a,
                  },
                ],
                style: {},
              };
            if (Array.isArray(o)) {
              var [s = 0, u = 0] = o;
              s == u && s > 0
                ? (i.style.margin = "-".concat(s / 2, "px"))
                : s > 0 && u > 0
                  ? (i.style.margin = "-".concat(u / 2, "px -").concat(s / 2, "px"))
                  : (s > 0 &&
                      ((i.style.marginLeft = "-".concat(s / 2, "px")),
                      (i.style.marginRight = "-".concat(s / 2, "px"))),
                    u > 0 &&
                      ((i.style.marginTop = "-".concat(s / 2, "px")),
                      (i.style.marginTop = "-".concat(s / 2, "px"))));
            } else
              !isNaN(Number(o)) &&
                o > 0 &&
                ((i.style.marginLeft = "-".concat(o / 2, "px")),
                (i.style.marginRight = "-".concat(o / 2, "px")));
            return t("div", i, [null === (l = r.default) || void 0 === l ? void 0 : l.call(r)]);
          }
        );
      },
    })
  ),
  Ul = j(
    e({
      name: "Col",
      props: { span: Number, offset: Number, flex: [String, Number] },
      setup(e, l) {
        var { slots: a } = l;
        return () => {
          var l,
            r,
            n = null === (l = v("gutter")) || void 0 === l ? void 0 : l.value,
            { offset: o, span: i, flex: s } = e,
            u = { class: ["k-col", { ["k-col-".concat(i)]: i }], style: {} };
          if (Array.isArray(n)) {
            var [c = 0, d = 0] = n;
            c == d && c > 0
              ? (u.style.padding = "".concat(c / 2, "px"))
              : c > 0 && d > 0
                ? (u.style.padding = "".concat(d / 2, "px ").concat(c / 2, "px"))
                : (c > 0 &&
                    ((u.style.paddingLeft = "".concat(c / 2, "px")),
                    (u.style.paddingRight = "".concat(c / 2, "px"))),
                  d > 0 &&
                    ((u.style.paddingTop = "".concat(c / 2, "px")),
                    (u.style.paddingTop = "".concat(c / 2, "px"))));
          } else
            !isNaN(Number(n)) &&
              n > 0 &&
              ((u.style.paddingLeft = "".concat(n / 2, "px")),
              (u.style.paddingRight = "".concat(n / 2, "px")));
          return (
            s &&
              (u.style.flex = ((e) =>
                "number" == typeof e
                  ? "".concat(e, " ").concat(e, " auto")
                  : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
                    ? "0 0 ".concat(e)
                    : e)(s)),
            o > 0 && o <= 24 && u.class.push("k-col-offset-".concat(o)),
            t("div", u, [null === (r = a.default) || void 0 === r ? void 0 : r.call(a)])
          );
        };
      },
    })
  ),
  Hl = e({
    name: "FormItem",
    props: {
      label: String,
      prop: String,
      labelCol: Object,
      wrapperCol: Object,
      rules: [Array, Object],
    },
    setup(e, n) {
      var { emit: o, slots: u } = n,
        c = v("locale", ht),
        d = a(() => (c instanceof Object && "value" in c ? c.value : c)),
        p = l(!0),
        m = l(""),
        f = v("Form", {}),
        g = (t) => {
          var l,
            a,
            r,
            n,
            o,
            i = p.value,
            s = null === (l = f.getValueFromProp) || void 0 === l ? void 0 : l.call(f, e.prop),
            u = t.message;
          if (t.required)
            ((i = Array.isArray(s) ? s.length > 0 : null != s && "" !== s && !1 !== s),
              (u =
                u ||
                (null === (o = d.value) || void 0 === o
                  ? void 0
                  : o.k.form.required.replace("{label}", e.label || e.prop))));
          else if (t.pattern) i = t.pattern.test(s);
          else if (t.type)
            switch (t.type) {
              case "mail":
                ((i = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(s)),
                  (u = u || (null === (a = d.value) || void 0 === a ? void 0 : a.k.form.email)));
                break;
              case "mobile":
                ((i = /^[1][3-9][0-9]{9}$/.test(s)),
                  (u = u || (null === (r = d.value) || void 0 === r ? void 0 : r.k.form.mobile)));
                break;
              case "number":
                var c;
                if ((i = /^(-?\d+)(\.\d+)?$/.test(s)))
                  if (void 0 !== t.min && s < t.min)
                    ((i = !1),
                      (u =
                        u ||
                        (null === (c = d.value) || void 0 === c
                          ? void 0
                          : c.k.form.num_min.replace("{min}", t.min))));
                  else if (void 0 !== t.max && s > t.max) {
                    var v;
                    ((i = !1),
                      (u =
                        u ||
                        (null === (v = d.value) || void 0 === v
                          ? void 0
                          : v.k.form.num_max.replace("{max}", t.max))));
                  }
                u = u || (null === (n = d.value) || void 0 === n ? void 0 : n.k.form.number);
            }
          else if ("function" == typeof t.validator)
            t.validator(t, s, (e) => {
              ((i = void 0 === e), e && (u = e.message));
            });
          else if (void 0 !== t.min || void 0 !== t.max) {
            var h = typeof s;
            (void 0 !== t.min &&
              (Array.isArray(s)
                ? (i = s.length >= t.min)
                : "string" === h
                  ? (i = s.replace(/[\u0391-\uFFE5]/g, "aa").length >= t.min)
                  : "number" === h && (i = s >= t.min)),
              void 0 !== t.max &&
                i &&
                (Array.isArray(s)
                  ? (i = s.length <= t.max)
                  : "string" === h
                    ? (i = s.replace(/[\u0391-\uFFE5]/g, "aa").length <= t.max)
                    : "number" === h && (i = s <= t.max)),
              (u = u || "Incorrect length"));
          }
          return ((m.value = u), (p.value = i), i);
        },
        k = (e) => {
          if (!e) return !0;
          if (e.constructor === Object) return g(e);
          for (var t = [...e].sort((e) => (e.required ? -1 : 0)), l = 0; l < t.length; l++) {
            if (!g(t[l])) break;
          }
          return p.value;
        },
        x = (t) => {
          if (e.prop) {
            var l = e.rules || (f.rules || {})[e.prop];
            l && k(l);
          }
        },
        { prop: M, rules: C } = b(e),
        z = S({ prop: M, rules: C, valid: p, validate: k });
      return (
        s(() => {
          var t;
          e.prop && (null === (t = f.register) || void 0 === t || t.call(f, z));
        }),
        i(() => {
          var t;
          e.prop && (null === (t = f.unregister) || void 0 === t || t.call(f, z));
        }),
        () => {
          var l,
            a,
            n,
            o,
            { label: i, prop: s } = e,
            c = e.rules || (f.rules || {})[s] || [],
            d = [
              "k-form-item",
              {
                "k-form-item-required":
                  c.constructor === Object ? c.required : c.filter((e) => e.required).length > 0,
                "k-form-item-error": !p.value,
              },
            ];
          "vertical" == f.layout &&
            (null === (o = e.wrapperCol) || void 0 === o || delete o.offset);
          "inline" != f.layout && ((a = P({}, e.labelCol)), (n = P({}, e.wrapperCol)));
          var v = Oe(null === (l = u.default) || void 0 === l ? void 0 : l.call(u)),
            g = null;
          return (
            f.name && s && (g = "".concat(f.name || "form_", "_").concat(s)),
            t(
              _l,
              { class: d, type: "flex" },
              {
                default: () => [
                  i
                    ? t(Ul, w({ class: "k-form-item-label" }, a), {
                        default: () => [t("label", { for: g }, [i])],
                      })
                    : null,
                  t(Ul, n, {
                    default: () => [
                      t("div", { class: "k-form-item-content" }, [
                        v.map((e) => {
                          if (h(e)) {
                            var t,
                              l,
                              a = null === (t = e.type) || void 0 === t ? void 0 : t.name,
                              r =
                                (s &&
                                  (null === (l = f.getValueFromProp) || void 0 === l
                                    ? void 0
                                    : l.call(f, s))) ||
                                void 0,
                              n = (null == e ? void 0 : e.props) || {},
                              o = n.size || f.size,
                              i = n.theme || f.theme,
                              u = n.shape || f.shape,
                              c = n.disabled || f.disabled,
                              d = P(
                                P({ id: g, size: o, disabled: c }, i ? { theme: i } : {}),
                                u ? { shape: u } : {}
                              ),
                              v = {};
                            return (
                              s &&
                                (/(switch|radio|checkbox)/.test(a)
                                  ? (d.checked = r || !1)
                                  : (d.modelValue = r),
                                (v["onUpdate:modelValue"] = (e) => {
                                  var t;
                                  a &&
                                    (null === (t = f.updateMode) || void 0 === t || t.call(f, s, e),
                                    x());
                                })),
                              /(input|textarea)/.test(a) &&
                                (v.onBlur = () => {
                                  x();
                                }),
                              y(e, P(P({}, d), v))
                            );
                          }
                          return e;
                        }),
                        s
                          ? t(
                              r,
                              { name: "k-form-item-fade" },
                              {
                                default: () => [
                                  p.value
                                    ? null
                                    : t("div", { class: "k-form-item-error-tip" }, [m.value]),
                                ],
                              }
                            )
                          : null,
                      ]),
                    ],
                  }),
                ],
              }
            )
          );
        }
      );
    },
  }),
  $l = j(
    e({
      name: "Flex",
      props: {
        align: {
          type: String,
          validator: (e) =>
            !e || ["start", "flex-start", "end", "flex-end", "center", "baseline"].indexOf(e) >= 0,
        },
        justify: {
          type: String,
          validator: (e) =>
            !e ||
            [
              "flex-start",
              "center",
              "flex-end",
              "space-between",
              "space-around",
              "space-evenly",
            ].indexOf(e) >= 0,
        },
        vertical: Boolean,
        wrap: Boolean,
        size: {
          type: [String, Number, Array],
          validator: (e) =>
            !("number" != typeof e && !Array.isArray(e)) ||
            ["small", "middle", "large"].indexOf(e) >= 0,
        },
      },
      setup(e, l) {
        var { slots: a } = l;
        return (
          m("size", e.size),
          () => {
            var l,
              { align: r, justify: n, vertical: o, size: i, wrap: s } = e;
            r = o || r ? r : "center";
            var u = {
              style: {},
              class: [
                "k-flex",
                {
                  "k-flex-vertical": o,
                  "k-flex-wrap": s,
                  ["k-flex-align-".concat(r)]: r,
                  ["k-flex-justify-".concat(n)]: n,
                },
              ],
            };
            if (Array.isArray(i)) u.style = { gap: "".concat(i[1], "px ").concat(i[0], "px") };
            else if (/small|middle|large/.test(i)) {
              u.style.gap = { small: 8, middle: 16, large: 24 }[i] + "px";
            } else null != i && (u.style.gap = "".concat(i, "px"));
            return t("div", u, [null === (l = a.default) || void 0 === l ? void 0 : l.call(a)]);
          }
        );
      },
    })
  ),
  Wl = j(
    e({
      name: "Tooltip",
      directives: { transfer: Ke },
      props: {
        show: Boolean,
        dark: Boolean,
        title: [String, Number, Object, Array],
        color: String,
        disabled: Boolean,
        size: String,
        width: [Number, String],
        placement: { validator: (e) => De.includes(e), default: "top" },
        show: Boolean,
      },
      setup(e, a) {
        var { slots: i, attrs: v, emit: p } = a,
          m = l(e.show),
          h = l(e.show),
          f = l(),
          g = l(),
          k = l(0),
          b = l(0),
          x = l(e.placement),
          S = l("bottom"),
          M = l(),
          C = l(),
          z = (e) => {
            ((h.value = e), p("update:show", e));
          },
          B = () => {
            u(() => {
              Re({
                refSelection: g,
                refPopper: f,
                currentPlacement: x,
                transOrigin: S,
                top: b,
                left: k,
              });
            });
          };
        (s(() => {
          e.show && B();
        }),
          c(
            () => e.show,
            (e, t) => {
              h.value = e;
            }
          ),
          c(
            () => e.title,
            () => {
              h.value && B();
            }
          ));
        var A = () => {
            e.disabled ||
              (m.value
                ? (clearTimeout(C.value), z(!0), B())
                : ((m.value = !0),
                  u(() => {
                    (z(!0), B());
                  })));
          },
          T = () => {
            M.value = setTimeout(() => {
              e.show || z(!1);
            }, 300);
          };
        return () => {
          var l,
            a,
            s = (null === (l = i.title) || void 0 === l ? void 0 : l.call(i)) || e.title,
            u = "tooltip",
            { color: c } = e,
            p = [
              "k-".concat(u),
              {
                ["k-".concat(u, "-").concat(c)]: c && !qt(c),
                ["k-".concat(u, "-has-color")]: qt(c),
                ["k-".concat(u, "-has-arrow")]: !0,
                ["k-".concat(u, "-dark")]: e.dark,
              },
            ],
            O = {
              ref: g,
              onTouchstart: A,
              onTouchend: T,
              onTouchmove: B,
              onMouseenter: A,
              onMouseleave: T,
            },
            N = Oe(null === (a = i.default) || void 0 === a ? void 0 : a.call(i)),
            V =
              null == N
                ? void 0
                : N.map((e) => {
                    var t = P({}, v);
                    return (1 == N.length && (t = P(P({}, t), O)), y(e, t, !0, !0));
                  }),
            D = V.length > 1 ? t("span", O, [...V]) : V[0],
            E = {
              left: "".concat(k.value, "px"),
              top: "".concat(b.value, "px"),
              transformOrigin: S.value,
            },
            L = [D],
            j = {
              "k-placement": x.value,
              style: E,
              ref: f,
              onMouseenter: () => {
                (clearTimeout(M.value), e.disabled || z(!0));
              },
              onMouseleave: () => {
                C.value = setTimeout(() => {
                  e.show || z(!1);
                }, 300);
              },
            };
          return (
            m.value &&
              L.push(
                t(
                  r,
                  { name: "k-".concat(u) },
                  {
                    default: () => [
                      n(
                        t("div", w({ class: p }, j), [
                          t(
                            "div",
                            {
                              class: "k-".concat(u, "-content"),
                              style: {
                                backgroundColor: qt(c)
                                  ? Ve.includes(c)
                                    ? "var(--kui-color-".concat(c, ")")
                                    : c
                                  : null,
                              },
                            },
                            [
                              t("div", { class: "k-".concat(u, "-title") }, [s]),
                              t("div", { class: "k-".concat(u, "-arrow") }, [
                                t(
                                  "svg",
                                  {
                                    style: {
                                      fill: qt(c)
                                        ? Ve.includes(c)
                                          ? "var(--kui-color-".concat(c, ")")
                                          : c
                                        : "currentcolor",
                                    },
                                    viewBox: "0 0 24 7",
                                  },
                                  [
                                    t(
                                      "path",
                                      {
                                        d: "M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z",
                                      },
                                      null
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        [
                          [d("transfer"), !0],
                          [o, h.value],
                        ]
                      ),
                    ],
                  }
                )
              ),
            L
          );
        };
      },
    })
  ),
  ql = e({
    props: {
      value: Number,
      min: Number,
      max: Number,
      vertical: Boolean,
      size: [String, Number],
      reverse: Boolean,
      disabled: Boolean,
      tooltipVisible: { type: Boolean, default: null },
      tipFormatter: Function,
      dragging: Boolean,
    },
    emits: ["dragStart", "keydownUpdate"],
    setup(e, r) {
      var { emit: n, expose: o } = r,
        i = l(!1),
        s = l(null);
      o({
        focus: () => {
          var e;
          null === (e = s.value) || void 0 === e || e.focus();
        },
      });
      var u = a(() => {
          var t = e.max - e.min;
          return 0 === t ? 0 : Math.max(0, Math.min(100, ((e.value - e.min) / t) * 100));
        }),
        c = a(() => {
          var t = u.value;
          return e.vertical
            ? e.reverse
              ? { top: "".concat(t, "%"), transform: "translate(-50%, -50%)" }
              : { bottom: "".concat(t, "%"), transform: "translate(-50%, 50%)" }
            : e.reverse
              ? { right: "".concat(t, "%"), transform: "translate(50%, -50%)" }
              : { left: "".concat(t, "%"), transform: "translate(-50%, -50%)" };
        }),
        d = (t) => {
          e.disabled || (t.preventDefault(), t.stopPropagation(), n("dragStart", t));
        };
      return () => {
        var l = e.tipFormatter ? e.tipFormatter(e.value) : String(e.value),
          a = !0 === e.tooltipVisible || e.dragging || i.value;
        return t(
          Wl,
          {
            title: l,
            disabled: e.disabled || !1 === e.tooltipVisible,
            show: a && !e.disabled,
            placement: e.vertical ? "right" : "top",
          },
          {
            default: () => [
              t(
                "div",
                {
                  class: [
                    "k-slider-thumb",
                    { "is-dragging": e.dragging, "k-slider-thumb-sm": "small" === e.size },
                  ],
                  style: c.value,
                  ref: s,
                  tabindex: e.disabled ? null : 0,
                  onMousedown: d,
                  onTouchstart: d,
                  onKeydown: (e) => n("keydownUpdate", e),
                  onMouseenter: () => (i.value = !0),
                  onMouseleave: () => (i.value = !1),
                },
                null
              ),
            ],
          }
        );
      };
    },
  }),
  Gl = e({
    name: "Slider",
    props: {
      modelValue: { type: [Array, Number], default: 0 },
      min: { type: Number, default: 0 },
      max: { type: Number, default: 100 },
      step: { type: [Number, Object], default: 1 },
      disabled: Boolean,
      vertical: Boolean,
      reverse: Boolean,
      range: Boolean,
      marks: Object,
      size: [String, Number],
      included: { type: Boolean, default: !0 },
      tipFormatter: Function,
      tooltipVisible: { type: Boolean, default: null },
    },
    emits: ["update:modelValue", "change"],
    setup(e, a) {
      var { emit: r } = a,
        n = v("size", null),
        o = l([]),
        i = l(),
        s = l(-1),
        d = l(e.range ? [e.min, e.min] : e.min),
        p = (e) => (Array.isArray(e) ? [...e].sort((e, t) => e - t) : e),
        m = (t) => {
          if (e.range) {
            var l = Array.isArray(t) ? [...t] : [e.min, e.min];
            return p(l.map((t) => ot(t, e)));
          }
          return ot(t, e);
        };
      c(
        () => e.modelValue,
        (e) => {
          -1 === s.value && (d.value = m(e));
        },
        { immediate: !0 }
      );
      var h = (t) => {
          var l = e.max - e.min;
          return 0 === l ? 0 : Math.max(0, Math.min(100, ((t - e.min) / l) * 100));
        },
        f = (t) => {
          var l,
            a = i.value.getBoundingClientRect(),
            r = t.touches ? t.touches[0].clientX : t.clientX,
            n = t.touches ? t.touches[0].clientY : t.clientY;
          e.vertical
            ? ((l = (a.bottom - n) / a.height), e.reverse && (l = 1 - l))
            : ((l = (r - a.left) / a.width), e.reverse && (l = 1 - l));
          var o = new tt(e.max - e.min).times(l).plus(e.min);
          return ot(Number(o), e);
        },
        g = (t) => {
          if (!e.disabled) {
            var l = f(t);
            if (e.range) {
              var [a, n] = d.value,
                o = Math.abs(l - a) <= Math.abs(l - n) ? 0 : 1,
                i = [...d.value];
              ((i[o] = l), (d.value = p(i)));
            } else d.value = l;
            (r("update:modelValue", d.value), r("change", d.value));
          }
        },
        k = (t) => {
          if (!e.disabled) {
            s.value = t;
            var l = (t) =>
                ((t) => {
                  if (!e.disabled && -1 !== s.value) {
                    var l = f(t),
                      a = null;
                    if (e.range) {
                      var n = [...d.value];
                      ((n[s.value] = l),
                        n[0] > n[1]
                          ? ((a = [n[1], n[0]]), (s.value = 0 === s.value ? 1 : 0))
                          : (a = n));
                    } else a = l;
                    JSON.stringify(a) !== JSON.stringify(d.value) &&
                      ((d.value = a), r("update:modelValue", a), r("change", a));
                  }
                })(t),
              a = () => {
                ((s.value = -1),
                  document.removeEventListener("mousemove", l),
                  document.removeEventListener("mouseup", a),
                  document.removeEventListener("touchmove", l),
                  document.removeEventListener("touchend", a));
              };
            (document.addEventListener("mousemove", l),
              document.addEventListener("mouseup", a),
              document.addEventListener("touchmove", l, { passive: !1 }),
              document.addEventListener("touchend", a));
          }
        };
      return () => {
        var { vertical: l, reverse: a, min: c, max: v, disabled: p, marks: f, included: y } = e,
          b = (e.range ? [0, 1] : [0]).map((i) => {
            var h = e.range ? d.value[i] : d.value;
            return t(
              ql,
              {
                key: i,
                ref: (e) =>
                  ((e, t) => {
                    e && (o.value[t] = e);
                  })(e, i),
                value: h,
                min: c,
                max: v,
                size: e.size || n,
                vertical: l,
                reverse: a,
                disabled: p,
                tooltipVisible: e.tooltipVisible,
                tipFormatter: e.tipFormatter,
                dragging: s.value === i,
                onDragStart: () => k(i),
                onKeydownUpdate: (t) =>
                  ((t, l) => {
                    if (!e.disabled) {
                      var a = ["ArrowRight", "ArrowUp"].includes(t.key),
                        n = ["ArrowLeft", "ArrowDown"].includes(t.key);
                      if (a || n) {
                        var i;
                        t.preventDefault();
                        var s = e.range ? [...d.value] : [d.value],
                          c = s[l];
                        if (null === e.step || void 0 === e.step) {
                          if (e.marks) {
                            var v = Object.keys(e.marks)
                                .map(Number)
                                .sort((e, t) => e - t),
                              p = v.indexOf(ot(c, e)),
                              h = a ? p + 1 : p - 1;
                            i = v[(h = Math.max(0, Math.min(v.length - 1, h)))];
                          }
                        } else i = Number(new tt(c).plus(a ? e.step : -e.step));
                        if (e.range) {
                          var f = 0 === l ? 1 : 0,
                            g = s[f];
                          if ((0 === l && i > g) || (1 === l && i < g)) {
                            var k = [];
                            ((k[l] = g),
                              (k[f] = ot(i, e)),
                              (d.value = k.sort((e, t) => e - t)),
                              u(() => {
                                var e = o.value[f];
                                e && e.focus();
                              }));
                          } else ((s[l] = i), (d.value = m(s)));
                        } else d.value = m(i);
                        (r("update:modelValue", d.value), r("change", d.value));
                      }
                    }
                  })(t, i),
              },
              null
            );
          });
        return t(
          "div",
          {
            class: [
              "k-slider",
              { "k-slider-disabled": p, "k-slider-vertical": l, "k-slider-reverse": a },
            ],
          },
          [
            t("div", { class: "k-slider-bar" }, [
              t("div", { class: "k-slider-rail", ref: i, onClick: g }, null),
              (() => {
                if (!y && f) return null;
                var [r, n] = e.range ? d.value : [c, d.value],
                  o = Math.min(r, n),
                  i = Math.max(r, n),
                  s = h(o),
                  u = h(i) - s,
                  v = {};
                return (
                  (v = l
                    ? a
                      ? { top: "".concat(s, "%"), height: "".concat(u, "%") }
                      : { bottom: "".concat(s, "%"), height: "".concat(u, "%") }
                    : a
                      ? { right: "".concat(s, "%"), width: "".concat(u, "%") }
                      : { left: "".concat(s, "%"), width: "".concat(u, "%") }),
                  t("div", { class: "k-slider-track", style: v }, null)
                );
              })(),
              (() => {
                if (!f) return null;
                var r = Object.keys(f).map(Number);
                return t("div", { class: "k-slider-marks" }, [
                  r.map((r) => {
                    var n = h(r),
                      o = !1;
                    o = e.range ? r >= d.value[0] && r <= d.value[1] : r <= d.value;
                    var i = {};
                    return (
                      (i = l
                        ? a
                          ? { top: "".concat(n, "%") }
                          : { bottom: "".concat(n, "%") }
                        : a
                          ? { right: "".concat(n, "%") }
                          : { left: "".concat(n, "%") }),
                      t("div", { key: r, class: "k-slider-mark-item", style: i }, [
                        t("span", { class: ["k-slider-mark-dot", { "is-active": o }] }, null),
                        t("div", { class: ["k-slider-mark-text", { "is-active": o }] }, [f[r]]),
                      ])
                    );
                  }),
                ]);
              })(),
              b,
            ]),
          ]
        );
      };
    },
  }),
  Xl = j(Gl),
  Zl = (e, t, l) => {
    if (e) {
      var a = new Image(),
        r = !1,
        n = () => {
          r || ((r = !0), (a.onload = null), (a.onerror = null), (a = null));
        };
      ((a.onload = () => {
        if (!r) {
          var { width: e, height: l } = a;
          t && t({ width: e, height: l });
        }
        n();
      }),
        (a.onerror = () => {
          (r || (l && l()), n());
        }),
        (a.src = e));
    }
  },
  Jl = e({
    name: "ImagePreview",
    props: {
      type: String,
      src: String,
      origin: String,
      hasControl: Boolean,
      value: Boolean,
      data: { type: Array, default: () => [] },
      showPanel: Boolean,
    },
    setup(e, a) {
      var { emit: d, slots: v, expose: p, listeners: m } = a,
        { value: h, type: f, src: g, origin: k, showPanel: y, data: M } = b(e),
        C = S({
          scale: 1,
          data: M,
          rotate: 0,
          startPos: { x: 0, y: 0 },
          initPos: { x: 0, y: 0 },
          left: 0,
          top: 0,
          isMouseDown: !1,
          type: f.value,
          visible: h.value,
          src: k.value || g.value,
          loading: !1,
          error: !1,
          vertical: !0,
          isShowPanel: y.value,
          panelRight: 0,
          touch: !1,
        }),
        z = l(null),
        B = l(null),
        A = () => {
          C.panelRight = B.value && C.isShowPanel ? B.value.offsetWidth : 0;
        },
        T = (e) => {
          ((C.rotate = e ? C.rotate - 90 : C.rotate + 90), (C.vertical = !C.vertical), E());
        },
        O = (e) => {
          ((C.scale = e ? C.scale + 1 : C.scale - 1),
            (C.scale = e ? Math.min(C.scale, 10) : Math.max(1, C.scale)),
            E());
        },
        N = () => {
          ((C.visible = !1), d("input", !1), d("close"));
        },
        V = (e) => {
          if (C.visible) {
            var { deltaY: t } = e;
            (O(t && t < 0), e.stopPropagation(), e.preventDefault());
          }
        },
        D = (e) => {
          if (C.visible && z.value && z.value.contains(e.target)) {
            if (e.button && 0 != e.button) return;
            var t, l;
            (e.touches && 1 == e.touches.length
              ? ((t = e.touches[0].clientX), (l = e.touches[0].clientY))
              : ((t = e.clientX), (l = e.clientY)),
              (C.isMouseDown = !0),
              (C.startPos = { x: t, y: l }),
              (C.initPos = { x: t, y: l }),
              P(e));
            var [a, r] = C.touch ? ["touchmove", "touchend"] : ["mousemove", "mouseup"];
            (document.addEventListener(a, P, { passive: !1 }),
              document.addEventListener(r, L, { passive: !1 }));
          }
        },
        E = () => {
          if (!C.error) {
            var { innerHeight: e, innerWidth: t } = window,
              l = C.scale,
              a = C.top,
              r = C.left,
              n = C.vertical;
            if (z.value) {
              var o = z.value.offsetWidth,
                i = z.value.offsetHeight,
                s = B.value && C.isShowPanel ? B.value.offsetWidth : 0,
                u = o + "",
                c = i + "";
              if ((n || ((u = i + ""), (c = o + "")), u * l >= t - s)) {
                var d = (u * l - (t - s)) / 2;
                r >= d ? (C.left = d) : C.left < -d && (C.left = -d);
              } else C.left = 0;
              if (c * l >= e) {
                var v = (c * l - e) / 2;
                a >= v ? (C.top = v) : a < -v && (C.top = -v);
              } else C.top = 0;
            }
          }
        },
        L = () => {
          if (C.visible) {
            ((C.isMouseDown = !1), E());
            var [e, t] = C.touch ? ["touchmove", "touchend"] : ["mousemove", "mouseup"];
            (document.removeEventListener(e, P), document.removeEventListener(t, L));
          }
        },
        P = (e) => {
          if (C.visible && C.isMouseDown) {
            var t, l;
            (e.preventDefault(),
              e.touches && 1 == e.touches.length
                ? ((t = e.touches[0].clientX), (l = e.touches[0].clientY))
                : ((t = e.clientX), (l = e.clientY)));
            var { x: a, y: r } = C.startPos;
            ((C.left += t - a), (C.top += l - r), (C.startPos = { x: t, y: l }));
          }
        },
        j = (t) => {
          C.scale = 1;
          var l = e.data || [],
            a = l.indexOf(C.src),
            r = a + 0;
          ((r = t ? r - 1 : r + 1),
            (r = Math.max(0, r)),
            (r = Math.min(r, l.length - 1)),
            (C.src = l[r]),
            (t && 0 == a) || (!t && a == l.length - 1) || d("switch", r));
        },
        F = () => {
          if (!C.error) {
            var e = new XMLHttpRequest();
            (e.open("GET", C.src, !0),
              (e.responseType = "blob"),
              (e.onload = function () {
                var t = window.URL.createObjectURL(e.response),
                  l = document.createElement("a");
                ((l.href = t), (l.download = ""), l.click());
              }),
              e.send());
          }
        },
        K = () => {
          ((C.isShowPanel = !C.isShowPanel), d("togglePanel", C.isShowPanel), u(() => E()), A());
        };
      (c(
        () => e.src,
        (e) => {
          C.src = e;
        }
      ),
        c(
          () => e.value,
          (e) => {
            ((C.visible = e),
              e &&
                u(() => {
                  A();
                }));
          }
        ),
        c(
          () => C.src,
          (e) => {
            "media" != C.type &&
              e &&
              ((C.loading = !0),
              Zl(
                e,
                (e) => {
                  var { width: t, height: l } = e;
                  ((C.loading = !1), (C.error = !1));
                },
                () => {
                  ((C.loading = !1), (C.error = !0));
                }
              ));
          }
        ),
        c(
          () => e.showPanel,
          (e) => {
            ((C.isShowPanel = e), A());
          }
        ),
        s(() => {
          if ("undefined" != typeof window) {
            var e = !!(
              "ontouchstart" in window ||
              (window.DocumentTouch && document instanceof window.DocumentTouch)
            );
            C.touch = e;
            var t = e ? "touchstart" : "mousedown";
            (document.addEventListener(t, D, { passive: !1 }),
              document.addEventListener("mousewheel", V, { passive: !1 }),
              document.addEventListener("keydown", H));
          }
        }),
        i(() => {
          (document.removeEventListener("mousewheel", V),
            document.removeEventListener("keydown", H));
        }));
      var H = (e) => {
        27 === e.keyCode && N();
      };
      return (
        p({
          show: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            (null != e && e.src && (C.src = e.src),
              null != e && e.type && (C.type = e.type),
              (C.visible = !0));
          },
          close: N,
          togglePanel: K,
        }),
        () => {
          var l,
            a,
            i,
            {
              scale: s,
              rotate: u,
              visible: c,
              src: d,
              left: p,
              top: m,
              data: h,
              loading: f,
              panelRight: g,
              type: k,
            } = C,
            y = {
              transform: "scale3d(".concat(s, ", ").concat(s, ", 1) rotate(").concat(u, "deg)"),
            },
            b = {
              transform: "translate3d(".concat(p, "px, ").concat(m, "px, 0px)"),
              transition: C.isMouseDown ? "0s" : null,
            },
            S = { class: "k-image-preview-img", src: d, style: y, ref: z },
            M = Oe(null === (l = v.tool) || void 0 === l ? void 0 : l.call(v));
          return t("div", { class: "k-image-preview-root" }, [
            n(
              t("div", { class: "k-image-preview" }, [
                t(
                  r,
                  { name: "k-image-fade" },
                  {
                    default: () => [
                      n(t("div", { class: "k-image-preview-mask", onClick: N }, null), [[o, c]]),
                    ],
                  }
                ),
                t("div", { class: "k-image-preview-wrap", style: { right: g + "px" } }, [
                  t(
                    r,
                    { name: "k-image-fade" },
                    {
                      default: () => [
                        n(
                          t("ul", { class: "k-image-preview-control" }, [
                            t("li", { class: "k-image-preview-action-nav" }, [
                              t(
                                Pe,
                                {
                                  icon: Z,
                                  type: "text",
                                  disabled: !h.length || 0 == h.indexOf(d),
                                  onClick: () => j(1),
                                },
                                null
                              ),
                              t("span", null, [
                                (null == h ? void 0 : h.indexOf(d)) + 1 || 1,
                                x("/"),
                                (null == h ? void 0 : h.length) || 1,
                              ]),
                              t(
                                Pe,
                                {
                                  icon: te,
                                  type: "text",
                                  disabled: !h.length || h.indexOf(d) == h.length - 1,
                                  onClick: () => j(),
                                },
                                null
                              ),
                            ]),
                            t(
                              "li",
                              {
                                class: "k-image-preview-action k-image-preview-action-rotate-left",
                                onClick: () => T(1),
                              },
                              [t(I, { type: me }, null)]
                            ),
                            t(
                              "li",
                              {
                                class: "k-image-preview-action k-image-preview-action-rotate-right",
                                onClick: () => T(0),
                              },
                              [t(I, { type: me }, null)]
                            ),
                            t(
                              "li",
                              {
                                class: [
                                  "k-image-preview-action",
                                  { "k-image-preview-action-disabled": s <= 1 },
                                ],
                                onClick: () => O(0),
                              },
                              [t(I, { type: fe }, null)]
                            ),
                            t(
                              "li",
                              { class: "k-image-preview-action k-image-preview-action-scale" },
                              [
                                t(
                                  Xl,
                                  {
                                    modelValue: C.scale,
                                    min: 1,
                                    max: 10,
                                    size: "small",
                                    tooltipVisible: !1,
                                    onChange: (e) => (C.scale = e),
                                  },
                                  null
                                ),
                              ]
                            ),
                            t(
                              "li",
                              {
                                class: [
                                  "k-image-preview-action",
                                  { "k-image-preview-action-disabled": s >= 5 },
                                ],
                                onClick: () => O(1),
                              },
                              [t(I, { type: Y }, null)]
                            ),
                            t("li", { class: "k-image-preview-action", onClick: F }, [
                              t(I, { type: _ }, null),
                            ]),
                            M.map((e) => t("li", { class: "k-image-preview-action" }, [e])),
                            t("li", { class: "k-image-preview-action-divider" }, null),
                            t("li", { class: "k-image-preview-action", onClick: N }, [
                              t(I, { type: re }, null),
                            ]),
                          ]),
                          [[o, c]]
                        ),
                      ],
                    }
                  ),
                  t("div", { class: "k-image-preview-img-wrap", style: b }, [
                    "media" == k
                      ? n(t("video", w({ controls: !0 }, S), null), [[o, c]])
                      : C.error || C.loading
                        ? f
                          ? null
                          : t("div", { class: "k-image-preview-img-error" }, [
                              t(I, { type: de }, null),
                            ])
                        : n(t("img", S, null), [[o, c]]),
                  ]),
                  e.data.length > 1
                    ? [
                        t(
                          "div",
                          {
                            class: [
                              "k-image-preview-switch-left",
                              { "k-image-preview-switch-disabled": 0 == h.indexOf(d) },
                            ],
                            onClick: () => j(1),
                          },
                          [t(I, { type: R }, null)]
                        ),
                        t(
                          "div",
                          {
                            class: [
                              "k-image-preview-switch-right",
                              { "k-image-preview-switch-disabled": h.indexOf(d) == h.length - 1 },
                            ],
                            onClick: () => j(),
                          },
                          [t(I, { type: U }, null)]
                        ),
                      ]
                    : null,
                  f
                    ? t("div", { class: "k-image-preview-loading" }, [
                        t(I, { type: pe, spin: !0 }, null),
                      ])
                    : null,
                ]),
                ((i = Oe(null === (a = v.panel) || void 0 === a ? void 0 : a.call(v))),
                i.length
                  ? t(
                      "div",
                      {
                        class: [
                          "k-image-preview-panel",
                          { "k-image-preview-panel-hidden": !C.isShowPanel },
                        ],
                        ref: B,
                      },
                      [
                        t("span", { class: "k-image-preview-panel-action", onClick: () => K() }, [
                          t(I, { type: le }, null),
                        ]),
                        i,
                      ]
                    )
                  : null),
              ]),
              [[o, c]]
            ),
          ]);
        }
      );
    },
  }),
  Ql = j(Jl),
  ea = null,
  ta = null;
function la() {
  return ea;
}
var aa = function () {
    var e,
      l,
      a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 ? arguments[2] : void 0,
      o = "k-image-preview-box",
      i = document.getElementById(o);
    i || (((i = document.createElement("div")).id = o), document.body.appendChild(i));
    var s = t(Ql, a, n);
    (A(s, i),
      (s.appContext =
        (null == r ? void 0 : r.appContext) ||
        (null === (e = la()) || void 0 === e ? void 0 : e.appContext)));
    var u = null === (l = s.component) || void 0 === l ? void 0 : l.exposed;
    return (
      (u.destroy = () => {
        (A(null, i), i.parentNode && i.parentNode.removeChild(i));
      }),
      u
    );
  },
  ra = e({
    name: "KImage",
    props: {
      alt: String,
      src: String,
      type: String,
      origin: String,
      height: [String, Number],
      width: [String, Number],
      placeholder: String,
      data: Array,
      imgStyle: Object,
      showPanel: Boolean,
    },
    setup(e, a) {
      var { emit: r, slots: n, expose: o, listeners: u } = a,
        d = l(!1),
        p = l(!1),
        m = l(null),
        h = l(0),
        f = l(0),
        g = l(),
        k = v("ImageGroup", null),
        y = (e, t) => {
          k ? k.show(e, t) : (g.value || (g.value = aa(P({}, e), null, t)), g.value.show(e));
        },
        b = () => {
          (g.value && (g.value.destroy(), (g.value = null)), k && k.destroy());
        };
      o({
        show: y,
        destroy: b,
        togglePanel: () => {
          var e = k || g.value;
          e && e.togglePanel();
        },
      });
      var w = (t) => {
          var { origin: l, src: a } = e;
          if ((a || l) && !p.value && !d.value) {
            var o = {
              onClose: () => {
                (r("close"),
                  setTimeout(() => {
                    b();
                  }, 200));
              },
              onSwitch: (e) => {
                r("switch", e);
              },
              src: l || a,
              showPanel: e.showPanel,
              type: e.type,
            };
            (y(o, n), t.preventDefault());
          }
        },
        x = () => {
          var { src: t, placeholder: l } = e;
          t
            ? ((d.value = !0),
              Zl(
                t,
                (e) => {
                  var { width: l, height: a } = e;
                  ((p.value = !1), (d.value = !1), (m.value = t), (h.value = l), (f.value = a));
                },
                () => {
                  ((d.value = !1), (p.value = !0), (m.value = l || null));
                }
              ))
            : ((p.value = !0), (m.value = l || null));
        };
      return (
        c(
          () => e.src,
          () => {
            x();
          }
        ),
        s(() => {
          (x(), null == k || k.register(e.origin || e.src));
        }),
        i(() => {
          (b(), null == k || k.unregister(e.origin || e.src));
        }),
        () => {
          var l,
            { alt: a, width: r, height: o, imgStyle: i, placeholder: s } = e,
            u = {
              style: {
                width: r ? "".concat(r, "px") : void 0,
                height: o ? "".concat(o, "px") : void 0,
              },
              class: "k-image",
              onClick: w,
            },
            c = { style: i, class: "k-image-img", alt: a, src: m.value },
            v = [];
          return (
            d.value
              ? v.push(
                  t("div", { class: "k-image-loading" }, [
                    t(I, { type: pe, spin: !0, class: "k-image-loading-icon" }, null),
                  ])
                )
              : p.value
                ? m.value
                  ? v.push(t("img", c, null))
                  : v.push(t(I, { type: de, class: "k-image-error" }, null))
                : v.push(t("img", c, null)),
            t("div", u, [v, null === (l = n.default) || void 0 === l ? void 0 : l.call(n)])
          );
        }
      );
    },
  }),
  na = j(ra),
  oa = e({
    name: "ImageGroup",
    props: { data: Array },
    setup(e, a) {
      var { slots: r } = a,
        n = l(e.data || []),
        o = l(),
        i = () => {
          o.value && (o.value.destroy(), (o.value = null));
        };
      return (
        m("ImageGroup", {
          show: (e, t) => {
            (o.value || ((e.data = n.value), (o.value = aa(P({}, e), null, t))), o.value.show(e));
          },
          destroy: i,
          register: (e) => {
            n.value.push(e);
          },
          unregister: (e) => {
            var t = n.value.indexOf(e);
            t >= 0 && n.value.splice(t, 1);
          },
          data: n,
          togglePanel: () => {
            o.value && o.value.togglePanel();
          },
        }),
        C(() => {
          i();
        }),
        () => {
          var e;
          return t("div", { class: "k-image-group" }, [
            null === (e = r.default) || void 0 === e ? void 0 : e.call(r),
          ]);
        }
      );
    },
  }),
  ia = j(oa);
function sa(l, a) {
  return (r) =>
    e({
      name: a,
      setup(e, a) {
        var { slots: n } = a,
          o = { suffixCls: l };
        return () => {
          var e;
          return t(r, o, {
            default: () => [null === (e = n.default) || void 0 === e ? void 0 : e.call(n)],
          });
        };
      },
    });
}
var ua = e({
    props: { suffixCls: String },
    setup(e, l) {
      var { slots: a } = l,
        r = { class: "k-".concat(e.suffixCls) };
      return () => {
        var e;
        return t("div", r, [null === (e = a.default) || void 0 === e ? void 0 : e.call(a)]);
      };
    },
  }),
  ca = e({
    props: { suffixCls: String },
    setup(e, r) {
      var { slots: n } = r,
        o = l(0);
      m("collectSider", (e) => {
        e ? o.value++ : o.value--;
      });
      var i = a(() => ["k-".concat(e.suffixCls), { "k-layout-has-sider": o.value > 0 }]);
      return () => {
        var e;
        return t("div", { class: i.value }, [
          null === (e = n.default) || void 0 === e ? void 0 : e.call(n),
        ]);
      };
    },
  }),
  da = e({
    props: { suffixCls: String },
    setup(e, l) {
      var { slots: a } = l,
        r = v("collectSider", () => {});
      (s(() => {
        r(!0);
      }),
        i(() => {
          r();
        }));
      var n = { class: "k-".concat(e.suffixCls) };
      return () => {
        var e;
        return t("div", n, [null === (e = a.default) || void 0 === e ? void 0 : e.call(a)]);
      };
    },
  }),
  va = sa("layout-content", "Content")(ua),
  pa = sa("layout-header", "Header")(ua),
  ma = sa("layout-footer", "Footer")(ua),
  ha = sa("layout", "Layout")(ca),
  fa = sa("layout-sider", "Sider")(da);
((ha.Sider = j(fa)), (ha.Content = j(va)), (ha.Header = j(pa)), (ha.Footer = j(ma)));
var ga = ha.Header,
  ka = ha.Footer,
  ya = ha.Sider,
  ba = ha.Content,
  wa = e({
    setup(e, a) {
      var { expose: s } = a,
        u = l(!0),
        c = l(0),
        d = l(!1),
        v = l(!1),
        p = l(),
        m = l();
      i(() => {
        (clearInterval(p.value), clearTimeout(m.value));
      });
      return (
        s({
          start: () => {
            ((c.value = 0),
              (v.value = !1),
              (u.value = !0),
              clearInterval(p.value),
              (p.value = setInterval(() => {
                ((d.value = !0),
                  (c.value += Math.floor(3 * Math.random() + 5)),
                  c.value >= 95 && ((c.value = 95), clearInterval(p.value)));
              }, 200)));
          },
          finish: () => {
            (clearInterval(p.value),
              (c.value = 100),
              (m.value = setTimeout(() => {
                u.value = !1;
              }, 500)));
          },
          error: () => {
            ((v.value = !0),
              (c.value = 100),
              (u.value = !0),
              clearInterval(p.value),
              (m.value = setTimeout(() => {
                u.value = !1;
              }, 500)));
          },
          update: (e) => {
            ((v.value = !1), (u.value = !0), (d.value = e > c.value), (c.value = e));
          },
          destroy: () => {
            clearInterval(p.value);
          },
        }),
        () => {
          var e = {
            class: ["k-loading-line", { "k-loading-line-error": v.value }],
            style: { width: "".concat(c.value, "%"), transitionDuration: d.value ? null : "0s" },
          };
          return t(
            r,
            { name: "fade" },
            {
              default: () => [
                n(t("div", { class: "k-loading-wrap" }, [t("div", e, null)]), [[o, u.value]]),
              ],
            }
          );
        }
      );
    },
  }),
  xa = null,
  Sa = function () {
    return (
      (xa =
        xa ||
        (function () {
          var e,
            l,
            a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0,
            n = "k-loading-box",
            o = document.getElementById(n);
          o || (((o = document.createElement("div")).id = n), document.body.appendChild(o));
          var i = t(wa, a, r);
          (A(i, o),
            (i.appContext =
              (null == r ? void 0 : r.appContext) ||
              (null === (e = la()) || void 0 === e ? void 0 : e.appContext)));
          var s = null === (l = i.component) || void 0 === l ? void 0 : l.exposed;
          return (
            (s.destroy = () => {
              (A(null, o), o.parentNode && o.parentNode.removeChild(o));
            }),
            s
          );
        })(
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          arguments.length > 1 ? arguments[1] : void 0
        )),
      xa
    );
  },
  Ma = {
    name: "Loading",
    start() {
      Sa().start();
    },
    finish() {
      Sa().finish();
    },
    error() {
      Sa().error();
    },
    update(e) {
      Sa().update(e);
    },
    destroy() {
      xa && (xa.destroy(), (xa = null));
    },
    install(e) {
      e.config.globalProperties.$loading = Ma;
    },
  },
  Ca = j(Ma);
function za(e) {
  return (
    "function" == typeof e || ("[object Object]" === Object.prototype.toString.call(e) && !h(e))
  );
}
var Ba = e({
    name: "Modal",
    directives: { transfer: Ke },
    props: {
      modelValue: Boolean,
      title: String,
      okText: String,
      cancelText: String,
      top: Number,
      width: Number,
      mask: { type: Boolean, default: !0 },
      maskClosable: { type: Boolean, default: !1 },
      maximized: Boolean,
      centered: Boolean,
      draggable: Boolean,
      showClose: { type: Boolean, default: !0 },
      loading: Boolean,
      footer: String,
      transfer: { type: Boolean, default: !0 },
      escKey: { type: Boolean, default: !0 },
    },
    setup(e, i) {
      var { slots: p, emit: m } = i,
        h = l(e.modelValue),
        f = l(!1),
        g = l(e.modelValue),
        k = l(0),
        y = l(e.top),
        b = l(!1),
        w = l(!1),
        x = l({ x: 0, y: 0 }),
        S = l(),
        M = l(),
        C = v("locale", ht),
        z = a(() => (C instanceof Object && "value" in C ? C.value : C)),
        A = (e) => {
          "Escape" === e.key && D();
        };
      (B(() => {
        (document.removeEventListener("mousedown", j),
          e.escKey && document.removeEventListener("keydown", A));
      }),
        s(() => {
          (document.addEventListener("mousedown", j),
            e.escKey && document.addEventListener("keydown", A),
            e.draggable && (k.value = (document.body.offsetWidth - (e.width || 480)) / 2),
            e.modelValue && T(!0));
        }),
        c(
          () => e.modelValue,
          (e, t) => {
            T(e);
          }
        ));
      var T = (e) => {
          !f.value && e
            ? ((f.value = !0), T(!0))
            : e
              ? u((t) => {
                  ((h.value = e),
                    (g.value = e),
                    m("update:modelValue", !0),
                    u(() => {
                      O();
                    }));
                })
              : ((h.value = !1),
                setTimeout(() => {
                  g.value = !1;
                }, 300),
                m("update:modelValue", !1));
        },
        O = () => {
          if (S.value) {
            var { x: e, y: t } = ta || { x: 0, y: 0 },
              { left: l, top: a } = (r = S.value)
                ? { left: r.offsetLeft, top: r.offsetTop }
                : { left: 0, top: 0 };
            S.value.style["transform-origin"] = "".concat(e - l, "px ").concat(t - a, "px");
          }
          var r;
        },
        N = () => {
          m("ok");
        },
        V = () => {
          (T(!1), m("cancel"));
        },
        D = () => {
          (T(!1), m("close"));
        },
        E = (t) => {
          e.loading || !e.maskClosable || S.value.contains(t.target) || w.value || D();
        },
        L = (t) => {
          if (b.value && e.draggable) {
            var { x: l, y: a } = x.value;
            ((k.value += t.clientX - l),
              (y.value = y.value || 100),
              (y.value += t.clientY - a),
              (x.value = { x: t.clientX, y: t.clientY }),
              O(),
              t.preventDefault());
          }
        },
        P = (e) => {
          ((b.value = !1),
            document.removeEventListener("mousemove", L),
            document.removeEventListener("mouseup", P));
        },
        j = (t) => {
          (0 == t.button &&
            !0 === e.draggable &&
            M.value &&
            M.value.contains(t.target) &&
            ((b.value = !0),
            (x.value = { x: t.clientX, y: t.clientY }),
            L(t),
            document.addEventListener("mousemove", L),
            document.addEventListener("mouseup", P)),
            (w.value = h.value && S.value && S.value.contains(t.target)));
        };
      return () => {
        var l,
          { draggable: a, width: i } = e,
          s = null;
        e.mask &&
          (s = t(
            r,
            { name: "k-modal-fade" },
            { default: () => [n(t("div", { class: "k-modal-mask" }, null), [[o, h.value]])] }
          ));
        var u = e.okText || (null == z ? void 0 : z.value.k.common.ok),
          c = e.cancelText || (null == z ? void 0 : z.value.k.common.cancel),
          v = null === (l = p.content) || void 0 === l ? void 0 : l.call(p);
        if (!v) {
          var m,
            b = [];
          if (
            (e.showClose &&
              b.push(
                t(
                  Pe,
                  { icon: re, size: "small", onClick: D, class: "k-modal-close", type: "text" },
                  null
                )
              ),
            null !== e.title &&
              b.push(
                t("div", { class: "k-modal-header", ref: M }, [
                  t("div", { class: "k-modal-header-inner" }, [e.title]),
                ])
              ),
            b.push(
              t("div", { class: "k-modal-body" }, [
                null === (m = p.default) || void 0 === m ? void 0 : m.call(p),
              ])
            ),
            null !== e.footer)
          ) {
            var w,
              x = null === (w = p.footer) || void 0 === w ? void 0 : w.call(p);
            x ||
              (x = [
                t(Pe, { onClick: V }, za(c) ? c : { default: () => [c] }),
                t(
                  Pe,
                  { onClick: N, type: "primary", loading: e.loading },
                  za(u) ? u : { default: () => [u] }
                ),
              ]);
            var C = x ? t("div", { class: "k-modal-footer" }, [x]) : null;
            b.push(C);
          }
          v = t("div", { class: "k-modal-content", tabindex: "0" }, [b]);
        }
        var B = {
            width: "".concat(i, "px"),
            top: "".concat(y.value, "px"),
            left: "".concat(k.value, "px"),
          },
          A = [
            "k-modal",
            {
              "k-modal-draggable": a,
              "k-modal-maximized": e.maximized,
              "k-modal-centered": e.centered,
              "k-modal-has-footer": null !== e.footer,
            },
          ];
        return f.value
          ? n(
              t("div", { class: A }, [
                s,
                n(
                  t("div", { class: "k-modal-wrap", tabindex: "-1", role: "dialog", onClick: E }, [
                    t(
                      r,
                      { name: "k-modal-zoom" },
                      {
                        default: () => [
                          n(
                            t("div", { class: "k-modal-inner", ref: S, style: B }, [
                              v,
                              t("div", { tabindex: "0" }, null),
                            ]),
                            [[o, h.value]]
                          ),
                        ],
                      }
                    ),
                  ]),
                  [[o, g.value]]
                ),
              ]),
              [[d("transfer"), e.transfer]]
            )
          : null;
      };
    },
  }),
  Aa = j(Ba),
  Ta = e({
    name: "Toast",
    props: {
      title: String,
      okText: String,
      cancelText: String,
      content: String,
      color: String,
      icon: [Object, Array],
      onOk: Function,
      onCancel: Function,
      type: {
        validator: (e) => ["info", "success", "error", "warning", "confirm"].includes(e),
        default: "info",
      },
    },
    setup(e, r) {
      var { expose: n, emit: o } = r,
        i = v("locale", ht),
        s = a(() => (i instanceof Object && "value" in i ? i.value : i)),
        u = l(!1),
        c = l(!1),
        d = () => {
          ((c.value = !1), o("destroy"));
        };
      n({
        show: () => {
          c.value = !0;
        },
        hide: d,
      });
      var p = () => {
          var t,
            { onOk: l } = e,
            a = l ? l() : {};
          !(t = a) ||
          ("object" != typeof t && "function" != typeof t) ||
          "function" != typeof t.then
            ? d()
            : ((u.value = !0),
              a
                .then((e) => {
                  d();
                })
                .catch((e) => {}));
        },
        m = () => {
          var { onCancel: t } = e;
          ("function" == typeof t && t(), d());
        };
      return () => {
        var { title: l, content: a, color: r, type: n, icon: o, cancelText: i, okText: d } = e,
          v = { info: ve, error: ae, success: G, warning: K, confirm: ce },
          h = t("div", { class: "k-toast-header" }, [
            n || o ? t(I, { class: "k-toast-icon", type: o || v[n], color: r }, null) : null,
            t("div", { class: "k-toast-title" }, [l]),
          ]),
          f = t("div", { class: "k-toast-content" }, [a]),
          g = [
            t(
              Pe,
              { type: "primary", loading: u.value, onClick: p },
              { default: () => [d || (null == s ? void 0 : s.value.k.common.ok)] }
            ),
          ];
        "confirm" == n &&
          g.unshift(
            t(
              Pe,
              { onClick: m },
              { default: () => [" ", i || (null == s ? void 0 : s.value.k.common.cancel)] }
            )
          );
        var k = t("div", { class: "k-toast-footer" }, [g]),
          y = ["k-modal k-toast", { ["k-toast-".concat(n)]: null != v[n] }];
        return t(
          Aa,
          {
            class: y,
            modelValue: c.value,
            "onUpdate:modelValue": (e) => (c.value = e),
            maskClosable: !1,
            transfer: !1,
          },
          { content: () => [h, f, k] }
        );
      };
    },
  }),
  Oa = [];
"undefined" != typeof window &&
  document.addEventListener("mousedown", (e) => {
    ta = { x: e.clientX, y: e.clientY };
  });
var Na = function () {
  var e,
    l,
    a,
    r,
    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  r = M();
  var o = document.createElement("div");
  document.body.appendChild(o);
  var i = t(Ta, P({}, n));
  ((i.appContext =
    (null === (e = r) || void 0 === e ? void 0 : e.appContext) ||
    (null === (l = la()) || void 0 === l ? void 0 : l.appContext)),
    A(i, o));
  var s = null === (a = i.component) || void 0 === a ? void 0 : a.exposed;
  return (
    (s.destroy = () => {
      (s.hide(),
        (Oa = Oa.filter((e) => e !== s)),
        setTimeout(() => {
          (A(null, o), o.parentNode && o.parentNode.removeChild(o));
        }, 100));
    }),
    s.show(),
    Oa.push(s),
    s
  );
};
(["info", "success", "warning", "error", "confirm"].forEach((e) => {
  Aa[e] = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return Na(Object.assign({ type: e }, t));
  };
}),
  (Aa.show = function () {
    return Na(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
  }),
  (Aa.destroyAll = () => {
    Oa.forEach((e) => {
      e.destroy();
    });
  }),
  (Aa.install = (e) => {
    e.config.globalProperties.$modal = Aa;
  }));
var Va = j(
    e({
      name: "SubMenu",
      directives: { transfer: Ke },
      props: { disabled: Boolean, title: String, isPopup: Boolean, icon: [String, Array] },
      setup(e, a) {
        var { slots: i, attrs: c } = a,
          p = l(null),
          h = l(),
          f = l(0),
          g = l(0),
          k = l(""),
          b = M().vnode.key,
          x = v("menu-mode", null),
          S = v("menu-selected-keys", l([])),
          C = v("menu-open-keys", l([])),
          z = v("openKeysChange", null),
          B = v("clearPopTimer", null),
          A = v("hidePopTimer", null),
          T = l("bottom-left"),
          O = l("bottom left"),
          N = l(),
          V = v("menu-inline-collapsed", l(!1)),
          D = v("dropdown", null),
          E = D ? "dropdown-menu-submenu" : "menu-submenu",
          L = "inline" == x.value,
          P = l(!1);
        s(() => {
          u(() => {
            var e,
              t = null === (e = p.value) || void 0 === e ? void 0 : e.offsetWidth;
            ((k.value = "".concat(t, "px")), C.value.indexOf(b) >= 0 && K());
          });
        });
        var j = () => {
            clearTimeout(N.value);
          },
          F = () => {
            N.value = setTimeout(() => {
              null == z || z(b, !1, Y);
            }, 200);
          },
          Y = v("menu-key-path", []);
        (m("menu-key-path", [...Y, b]), m("clearPopTimer", j), m("hidePopTimer", F));
        var K = () => {
            ((("horizontal" == x.value && Y.length > 0) ||
              "vertical" == x.value ||
              ("inline" == x.value && V.value)) &&
              (T.value = "right-top"),
              u(() => {
                Re({
                  refSelection: p,
                  refPopper: h,
                  currentPlacement: T,
                  transOrigin: O,
                  top: f,
                  left: g,
                  offset: 8,
                });
              }));
          },
          R = () => {
            var e,
              l = C.value.indexOf(b) >= 0,
              a = g.value;
            (("horizontal" == x.value && Y.length) || "vertical" == x.value) && (a += 3);
            var s = {
                ref: h,
                "k-placement": T.value,
                style: {
                  minWidth: "horizontal" == x.value ? k.value : null,
                  top: f.value + "px",
                  left: a + "px",
                  transformOrigin: O.value,
                },
                onMouseenter: () => {
                  (j(), null == z || z(b, !0, Y), null == B || B());
                },
                onMouseleave: () => {
                  (F(), null == A || A());
                },
              },
              u = Oe(null === (e = i.default) || void 0 === e ? void 0 : e.call(i)).map((e) =>
                y(e, { isPopup: !0 })
              );
            return P.value
              ? t(
                  r,
                  { name: "k-".concat(E, "-popup") },
                  {
                    default: () => [
                      n(
                        t("div", w({ class: "k-".concat(E, "-popup") }, s), [
                          t("div", { class: "k-".concat(E, "-sub") }, [
                            t("ul", { class: "k-menu k-menu-vertical" }, [u]),
                          ]),
                        ]),
                        [
                          [o, l],
                          [d("transfer"), !0],
                        ]
                      ),
                    ],
                  }
                )
              : null;
          };
        return () => {
          var l,
            a = S.value.indexOf(b) >= 0 && !D,
            s = C.value.indexOf(b) >= 0,
            c = { class: "k-".concat(E, "-title"), style: {} };
          ("inline" != x.value || V.value
            ? ("horizontal" == x.value || "vertical" == x.value || V.value) &&
              ((c.ref = p),
              (c.onMouseenter = () => {
                e.disabled ||
                  (j(),
                  (P.value = !0),
                  u(() => {
                    (null == z || z(b, !0, Y), K());
                  }));
              }),
              (c.onMouseleave = () => {
                e.disabled ||
                  (N.value = setTimeout(() => {
                    null == z || z(b, !1, Y);
                  }, 200));
              }))
            : (c.onClick = () => {
                e.disabled || null == z || z(b, !s, Y);
              }),
            Y.length &&
              L &&
              !e.isPopup &&
              (c.style.paddingLeft = "".concat(16 * Y.length + 16, "px")));
          var d = e.title || (null === (l = i.title) || void 0 === l ? void 0 : l.call(i)),
            v = t("div", c, [
              e.icon ? t(I, { type: e.icon, class: "k-menu-item-icon" }, null) : null,
              t("span", { class: "k-".concat(E, "-title-content") }, [d]),
              "horizontal" != x.value || Y.length
                ? t("i", { class: "k-".concat(E, "-arrow") }, null)
                : null,
            ]),
            m = [
              "k-".concat(E),
              {
                ["k-".concat(E, "-active")]: s || a,
                ["k-".concat(E, "-selected")]: a,
                ["k-".concat(E, "-opened")]: s,
                ["k-".concat(E, "-disabled")]: e.disabled,
              },
            ],
            h = (() => {
              var e = "horizontal" != x.value,
                l = C.value.indexOf(b) >= 0;
              if (e) {
                var a,
                  s = we("k-collapse-slide"),
                  u = [
                    t(r, s, {
                      default: () => [
                        n(
                          t("div", { class: "k-".concat(E, "-sub") }, [
                            t("ul", { class: "k-menu k-menu-".concat(x.value) }, [
                              null === (a = i.default) || void 0 === a ? void 0 : a.call(i),
                            ]),
                          ]),
                          [[o, l && !V.value && "vertical" != x.value]]
                        ),
                      ],
                    }),
                  ];
                return ((V.value || "vertical" == x.value) && u.push(R()), u);
              }
              return R();
            })();
          return t("li", { class: m }, [v, h]);
        };
      },
    })
  ),
  Da = j(
    e({
      name: "MenuItem",
      props: {
        icon: [String, Array],
        title: String,
        label: String,
        disabled: Boolean,
        isPopup: Boolean,
      },
      setup(e, a) {
        var { slots: r } = a,
          { icon: n, disabled: o, title: i } = e,
          u = M(),
          c = v("menu-selected-keys", l([])),
          d = v("menu-mode", null),
          p = v("dropdown", null),
          m = l(!1),
          h = u.vnode.key,
          f = v("menu-key-path", []),
          g = v("selectedKeysChange", null);
        return (
          s(() => {
            var e = c.value.indexOf(h) >= 0;
            e && (null == g || g(h, e, f));
          }),
          () => {
            var l,
              a = p ? "dropdown-menu" : "menu",
              s = c.value.indexOf(h) >= 0 && !p,
              u = {
                class: [
                  "k-".concat(a, "-item"),
                  {
                    ["k-".concat(a, "-item-active")]: m.value,
                    ["k-".concat(a, "-item-selected")]: s,
                    ["k-".concat(a, "-item-disabled")]: o,
                  },
                ],
                style: {
                  paddingLeft:
                    ("inline" != d.value && "vertical" != d.value) || !f.length || e.isPopup
                      ? null
                      : "".concat(16 * f.length + 16, "px"),
                },
                onMouseenter: () => {
                  o || (m.value = !0);
                },
                onMouseleave: () => {
                  o || (m.value = !1);
                },
                onClick: () => {
                  o || null == g || g(h, !0, f);
                },
              },
              v = t("span", { class: "k-".concat(a, "-title-content") }, [
                i || Oe(null === (l = r.default) || void 0 === l ? void 0 : l.call(r)),
              ]),
              k = r.icon
                ? t("span", { class: "k-".concat(a, "-item-icon") }, [r.icon()])
                : n
                  ? t(I, { type: n, class: "k-".concat(a, "-item-icon") }, null)
                  : null;
            return t("li", u, [k, v]);
          }
        );
      },
    })
  );
var Ea = e({
    name: "RecursiveMenu",
    props: { item: Object, isPopup: Boolean },
    setup: (e) => () => {
      var l,
        a,
        { item: r } = e;
      return r.children && r.children.length > 0
        ? t(
            Va,
            { key: r.key, isPopup: e.isPopup, title: r.title, icon: r.icon, disabled: r.disabled },
            "function" ==
              typeof (a = l = r.children.map((e) => t(Ea, { item: e, key: e.key }, null))) ||
              ("[object Object]" === Object.prototype.toString.call(a) && !h(a))
              ? l
              : { default: () => [l] }
          )
        : t(
            Da,
            { key: r.key, isPopup: e.isPopup, icon: r.icon, disabled: r.disabled },
            { default: () => [r.title] }
          );
    },
  }),
  La = j(
    e({
      name: "Menu",
      props: {
        theme: String,
        mode: { type: String, default: "vertical" },
        modelValue: { type: Array, default: () => [] },
        value: { type: Array, default: () => [] },
        accordion: Boolean,
        items: Array,
        inlineCollapsed: Boolean,
        openKeys: { type: Array, default: () => [] },
      },
      setup(e, a) {
        var { emit: r, slots: n } = a,
          o = l(e.modelValue || e.value || []),
          i = l(e.openKeys || []),
          u = l(e.mode),
          d = l(e.inlineCollapsed),
          p = l(e.openKeys || []);
        (m("menu-open-keys", i),
          m("menu-selected-keys", o),
          m("menu-mode", u),
          m("menu-inline-collapsed", d));
        var h = v("dropdown", null);
        (c(
          () => e.modelValue,
          (e) => {
            o.value = e;
          }
        ),
          c(
            () => e.mode,
            (e) => {
              ((u.value = e), f("vertical" === e));
            }
          ),
          c(
            () => e.openKeys,
            (e) => {
              i.value = e;
            }
          ),
          c(
            () => e.inlineCollapsed,
            (e) => {
              ((d.value = e), f(e));
            }
          ),
          s(() => {
            f(e.inlineCollapsed);
          }));
        var f = (e) => {
            e ? (i.value.length > 0 && (p.value = i.value), (i.value = [])) : (i.value = p.value);
          },
          g = v("dropdown-menu-selected", null);
        return (
          m("openKeysChange", (t, l, a) => {
            (e.accordion
              ? (i.value = l ? [...a, t] : a)
              : l
                ? i.value.push(t)
                : (i.value = i.value.filter((e) => e !== t)),
              r("update:openKeys", i.value),
              r("openChange", i.value));
          }),
          m("selectedKeysChange", (e, t, l) => {
            ((o.value = t ? [...l, e] : o.value.filter((t) => t !== e)),
              r("update:value", o.value),
              r("select", { key: e, keyPath: l }),
              ("horizontal" == u.value || "vertical" == u.value || d.value) &&
                (i.value.length > 0 && (p.value = i.value), (i.value = [])),
              null == g || g({ key: e, keyPath: l }));
          }),
          () => {
            var l,
              a = h ? "dropdown-menu k-scroll" : "menu",
              { items: r } = e,
              o = [
                "k-".concat(a, " k-").concat(a, "-").concat(u.value),
                { ["k-".concat(a, "-inline-collapsed")]: e.inlineCollapsed },
              ];
            return t("ul", { class: o, "theme-mode": e.theme }, [
              r && r.length
                ? r.map((e) => t(Ea, { item: e, key: e.key }, null))
                : null === (l = n.default) || void 0 === l
                  ? void 0
                  : l.call(n),
            ]);
          }
        );
      },
    })
  ),
  Pa = j(
    e({
      name: "MenuGroup",
      props: { title: { type: String, required: !0 } },
      setup(e, l) {
        var { slots: a } = l;
        return () => {
          var l,
            r,
            n = e.title || (null === (l = a.title) || void 0 === l ? void 0 : l.call(a));
          return t("li", { class: "k-menu-item-group" }, [
            t("div", { class: "k-menu-item-group-title" }, [n]),
            t("ul", { class: "k-menu-item-group-list" }, [
              null === (r = a.default) || void 0 === r ? void 0 : r.call(a),
            ]),
          ]);
        };
      },
    })
  ),
  ja = j(
    e({
      name: "MenuDivider",
      setup() {
        var e = v("dropdown", null);
        return () =>
          t("li", { class: "k-".concat(e ? "dropdown-menu" : "menu", "-item-divider") }, null);
      },
    })
  ),
  Ia = e({
    props: {
      type: { type: String, default: "info" },
      title: String,
      content: [String, Object],
      icon: [String, Array],
      color: String,
      duration: Number,
      closable: Boolean,
      noticeType: { type: String, default: "message" },
    },
    setup(e, l) {
      var { emit: a } = l,
        r = () => {
          a("close");
        };
      return () => {
        var { noticeType: l, type: a, content: n, title: o, closable: i, icon: s, color: u } = e,
          c = [
            "k-".concat(l, "-box"),
            { ["k-".concat(l, "-").concat(a)]: a, "k-notice-has-icon": "notice" == l && a },
          ],
          d = { info: ve, error: ae, success: G, warning: K },
          v = [];
        return (
          a in d &&
            v.push(t(I, { type: s || d[a], color: u, class: "k-".concat(l, "-icon") }, null)),
          "message" == l
            ? (v.push(t("span", null, [n])),
              i &&
                v.push(
                  t(
                    Pe,
                    { class: "k-message-close", size: "small", type: "text", icon: re, onClick: r },
                    null
                  )
                ))
            : (v.push(t("div", { class: "k-notice-title" }, [o])),
              v.push(t("div", { class: "k-notice-desc" }, [n])),
              v.push(
                t(
                  Pe,
                  { class: "k-notice-close", size: "small", type: "text", icon: re, onClick: r },
                  null
                )
              )),
          t("div", { class: c }, [t("div", { class: "k-".concat(l, "-content") }, [...v])])
        );
      };
    },
  }),
  Fa = 0;
var Ya,
  Ka = e({
    props: { type: String },
    setup(e, a) {
      var { expose: r } = a,
        n = l([]);
      return (
        r({
          show: (e) => {
            var t,
              l,
              { duration: a, onClose: r, closable: o, noticeType: i } = e,
              s = ((t = Date.now()), "k-message-".concat(t, "-").concat(Fa++));
            ((e.key = s), (e.duration = isNaN(Number(a)) ? 3.5 : a));
            var u = (e) => {
              ("function" == typeof r && r(),
                (n.value = n.value.filter((t) => t.key !== e)),
                clearTimeout(l),
                (l = null));
            };
            (e.duration > 0 && (l = setTimeout(u, 1e3 * e.duration, s)),
              ((!0 === o && "message" == i) || "notice" == i) && (e.onClose = () => u(s)),
              n.value.push(e));
          },
          clean: () => {
            n.value = [];
          },
        }),
        () => {
          var { type: l } = e,
            a = { name: "k-".concat(l, "-slide") };
          "notice" == l &&
            (delete (a = we("k-".concat(l, "-slide"))).onEnter,
            delete a.onBeforeEnter,
            (a.onBeforeLeave = (e) => {
              ((e.style.height = window.getComputedStyle(e).height), (e.style.opacity = 1));
            }));
          var r = n.value.map((e, l) => {
            var a = P({}, e);
            return t(Ia, a, null);
          });
          return t(T, w({ tag: "div", class: "k-".concat(l) }, a), { default: () => [...r] });
        }
      );
    },
  }),
  Ra = function () {
    var e,
      l,
      a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
      n = "k-".concat(a.type, "-box"),
      o = document.getElementById(n);
    o || (((o = document.createElement("div")).id = n), document.body.appendChild(o));
    var i = t(Ka, a);
    ((i.appContext =
      (null == r ? void 0 : r.appContext) ||
      (null === (e = la()) || void 0 === e ? void 0 : e.appContext)),
      A(i, o));
    var s = null === (l = i.component) || void 0 === l ? void 0 : l.exposed;
    return (
      (s.destroy = () => {
        (A(null, o), o.parentNode && o.parentNode.removeChild(o));
      }),
      s
    );
  },
  _a = {
    name: "message",
    show() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      ((t.noticeType = "message"),
        Ya || (Ya = Ra({ type: "message", key: "message" })),
        null === (e = Ya) || void 0 === e || e.show(t));
    },
    destroy() {
      Ya && (Ya.clean(), Ya.destroy(), (Ya = null));
    },
    install(e) {
      e.config.globalProperties.$message = _a;
    },
  };
["info", "success", "warning", "error"].forEach((e) => {
  _a[e] = (t, l, a) => _a.show({ type: e, content: t, duration: l, onClose: a });
});
var Ua,
  Ha = j(_a),
  $a = {
    name: "notice",
    open() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      ((e = Object.assign({ type: null }, e)).icon && delete e.type,
        (e.noticeType = "notice"),
        Ua || (Ua = Ra({ type: "notice", key: "notice" }, t)),
        Ua.show(e));
    },
    destroy() {
      Ua && (Ua.clean(), Ua.destroy(), (Ua = null));
    },
    install(e) {
      e.config.globalProperties.$notice = $a;
    },
  };
["info", "success", "warning", "error"].forEach((e) => {
  $a[e] = (t) => $a.open(P({ type: e }, t));
});
var Wa = j($a),
  qa = j(
    e({
      name: "Page",
      props: {
        disabled: Boolean,
        showSizer: Boolean,
        showTotal: { type: Boolean, default: !0 },
        showElevator: Boolean,
        theme: { type: String, default: "light" },
        sizeData: { type: Array, default: () => [10, 15, 20, 30, 40] },
        size: {
          default: "default",
          validator: (e) => ["small", "large", "default"].indexOf(e) >= 0,
        },
        total: { default: 0, type: Number },
        pageSize: { default: 10, type: Number },
        page: { default: 1, type: Number },
      },
      setup(e, r) {
        var { emit: n } = r,
          o = l(!1),
          i = l(!1),
          s = l(Math.ceil(e.total / e.pageSize) || 1),
          d = l(e.page),
          p = l(e.pageSize),
          m = v("locale", ht),
          h = a(() => (m instanceof Object && "value" in m ? m.value : m));
        (c(
          () => e.pageSize,
          (e) => {
            ((p.value = e), f());
          }
        ),
          c(
            () => e.total,
            (e) => {
              f();
            }
          ),
          c(
            () => e.page,
            (e) => {
              ((d.value = e), f());
            }
          ));
        var f = () => {
            ((s.value = Math.ceil(e.total / p.value) || 1),
              d.value > s.value && (d.value = s.value));
          },
          g = () => {
            e.disabled ||
              (d.value > 1 &&
                (d.value--, n("update:page", d.value), n("change", d.value, p.value)));
          },
          k = () => {
            e.disabled ||
              (d.value < s.value &&
                (d.value++, n("update:page", d.value), n("change", d.value, p.value)));
          },
          y = (t) => {
            e.disabled ||
              (t != d.value &&
                (t <= 1 && ((t = 1), (i.value = !1)),
                t >= s.value && ((o.value = !1), (t = s.value)),
                (d.value = t),
                n("update:page", t),
                n("change", d.value, p.value)));
          },
          b = (t) => {
            ((p.value = t),
              (s.value = Math.ceil(e.total / p.value) || 1),
              d.value > s.value && ((d.value = s.value), n("update:page", d.value)),
              n("change", d.value, p.value));
          };
        return () => {
          var l,
            a,
            r = [
              "k-page",
              {
                "k-page-sm": "small" == e.size,
                "k-page-light": "light" == e.theme,
                "k-page-disabled": e.disabled,
              },
            ],
            c = t(
              "li",
              {
                class: ["k-pager-item k-pager-prev", { "k-pager-item-disabled": 1 == d.value }],
                onClick: g,
              },
              [t(I, { type: le }, null)]
            ),
            v = t(
              "li",
              {
                class: [
                  "k-pager-item k-pager-next",
                  { "k-pager-item-disabled": d.value == s.value },
                ],
                onClick: k,
              },
              [t(I, { type: le }, null)]
            ),
            m = e.showTotal
              ? t("div", { class: "k-page-number" }, [
                  t("span", null, [
                    null == h ? void 0 : h.value.k.page.total,
                    x(" "),
                    e.total,
                    " ",
                    null == h ? void 0 : h.value.k.page.items,
                  ]),
                ])
              : null,
            f = (() => {
              var e = Number(d.value),
                l = Number(s.value),
                a = !1,
                r = !1;
              l > 7 && (e > 4 && (a = !0), e < l - 3 && (r = !0));
              var n = [];
              if (a && !r) for (var u = l - 5; u < l; u++) n.push(u);
              else if (!a && r) for (var c = 2; c < 7; c++) n.push(c);
              else if (a && r)
                for (var v = Math.floor(3.5) - 1, p = e - v; p <= e + v; p++) n.push(p);
              else for (var m = 2; m < l; m++) n.push(m);
              var h = n.map((l, a) =>
                t(
                  "li",
                  {
                    class: ["k-pager-item", { "k-pager-item-active": e == l }],
                    key: a,
                    onClick: () => y(l),
                  },
                  [t("span", null, [l])]
                )
              );
              if (a) {
                var f = t(
                  "li",
                  {
                    class: "k-pager-item k-pager-more",
                    onMouseenter: () => (i.value = !0),
                    onMouseleave: () => (i.value = !1),
                    onClick: () => y(d.value - 5),
                  },
                  [t(I, { strokeWidth: 30, type: i.value ? J : oe }, null)]
                );
                h.unshift(f);
              }
              if (r) {
                var g = t(
                  "li",
                  {
                    class: "k-pager-item k-pager-more",
                    onMouseenter: () => (o.value = !0),
                    onMouseleave: () => (o.value = !1),
                    onClick: () => y(d.value + 5),
                  },
                  [t(I, { strokeWidth: 30, type: o.value ? Q : oe }, null)]
                );
                h.push(g);
              }
              return h;
            })(),
            w =
              ((a = {
                value: p.value,
                size: e.size,
                clearable: !1,
                theme: e.theme,
                options: e.sizeData.map((e) => ({
                  value: e,
                  label: "".concat(e).concat(null == h ? void 0 : h.value.k.page.pageSize),
                })),
                disabled: e.disabled,
                onChange: b,
              }),
              e.showSizer ? t("div", { class: "k-page-sizer" }, [t(yt, a, null)]) : null),
            S = (() => {
              var { size: l } = e,
                a = {
                  class: "k-page-options-elevator",
                  size: l,
                  theme: e.theme,
                  disabled: e.disabled,
                  clearable: !1,
                  onChange: (e) => {
                    var t = e.target.value;
                    if (NaN != Number(t)) {
                      t = Number(t);
                      var l = s.value;
                      (t > l && (t = l),
                        t < 1 && (t = 1),
                        (t >= 1 || t <= l) &&
                          d.value != t &&
                          ((d.value = t), n("update:page", t), n("change", t, p.value)),
                        u(() => {
                          e.target.value = "";
                        }),
                        e.stopPropagation());
                    } else e.target.value = "";
                  },
                };
              return e.showElevator
                ? t("div", { class: "k-page-options" }, [
                    t("span", null, [null == h ? void 0 : h.value.k.page.goto]),
                    t(ct, a, null),
                    t("span", null, [null == h ? void 0 : h.value.k.page.page]),
                  ])
                : null;
            })(),
            M =
              s.value > 0
                ? t(
                    "li",
                    {
                      class: ["k-pager-item", { "k-pager-item-active": 1 == d.value }],
                      onClick: () => y(1),
                    },
                    [t("span", null, [x("1")])]
                  )
                : null,
            C =
              (l = s.value) > 1
                ? t(
                    "li",
                    {
                      class: ["k-pager-item", { "k-pager-item-active": d.value == l }],
                      onClick: (e) => y(l),
                    },
                    [t("span", null, [l])]
                  )
                : null;
          return t("div", { class: r }, [
            m,
            t("ul", { class: "k-pager" }, [[c, M, f, C, v]]),
            [w, S],
          ]);
        };
      },
    })
  ),
  Ga = j(
    e({
      name: "Poptip",
      directives: { transfer: Ke },
      props: {
        dark: Boolean,
        show: Boolean,
        title: [String, Number, Object, Array],
        size: String,
        width: [Number, String],
        trigger: { validator: (e) => ["click", "hover", "focus"].includes(e), default: "hover" },
        placement: { validator: (e) => De.includes(e), default: "top" },
      },
      setup(e, a) {
        var { slots: i, attrs: v, emit: p } = a,
          m = l(e.show),
          h = l(e.show),
          f = l(),
          g = l(),
          k = l(0),
          b = l(0),
          x = l(e.placement),
          S = l("bottom"),
          M = l(),
          C = l(),
          z = () => {
            u(() => {
              Re({
                refSelection: g,
                refPopper: f,
                currentPlacement: x,
                transOrigin: S,
                top: b,
                left: k,
              });
            });
          };
        (s(() => {
          e.show && z();
        }),
          B(() => {
            document.removeEventListener("click", T);
          }),
          c(
            () => e.show,
            (e, t) => {
              h.value = e;
            }
          ),
          c(
            () => e.title,
            () => {
              h.value && z();
            }
          ));
        var A = (e) => {
            ((h.value = e), p("update:show", e));
          },
          T = (e) => {
            var t,
              l = (null === (t = g.value) || void 0 === t ? void 0 : t.$el) || g.value;
            f.value && !f.value.contains(e.target) && l && !l.contains(e.target) && A(!1);
          },
          O = () => {
            m.value
              ? (clearTimeout(C.value), A(!0), z())
              : ((m.value = !0),
                document.addEventListener("click", T),
                u(() => {
                  (A(!0), z());
                }));
          },
          N = () => {
            M.value = setTimeout(() => {
              e.show || A(!1);
            }, 300);
          };
        return () => {
          var l,
            a,
            s,
            u = (null === (l = i.title) || void 0 === l ? void 0 : l.call(i)) || e.title,
            c = (null === (a = i.content) || void 0 === a ? void 0 : a.call(i)) || e.content,
            p = "poptip",
            z = [
              "k-".concat(p),
              { ["k-".concat(p, "-has-arrow")]: !0, ["k-".concat(p, "-dark")]: e.dark },
            ],
            B = { ref: g, onMouseleave: N };
          "click" === e.trigger
            ? (B.onClick = O)
            : "hover" === e.trigger
              ? (B.onMouseenter = O)
              : "focus" === e.trigger && ((B.onFocus = O), (B.onBlur = N));
          var T = Oe(null === (s = i.default) || void 0 === s ? void 0 : s.call(i)),
            V =
              null == T
                ? void 0
                : T.map((e) => {
                    var t = P({}, v);
                    return (1 == T.length && (t = P(P({}, t), B)), y(e, t, !0, !0));
                  }),
            D = V.length > 1 ? t("span", B, [...V]) : V[0],
            E = {
              left: "".concat(k.value, "px"),
              top: "".concat(b.value, "px"),
              transformOrigin: S.value,
            },
            L = [D],
            j = {
              "k-placement": x.value,
              style: E,
              ref: f,
              onMouseenter: () => {
                (clearTimeout(M.value), A(!0));
              },
              onMouseleave: () => {
                C.value = setTimeout(() => {
                  e.show || A(!1);
                }, 300);
              },
            };
          return (
            m.value &&
              L.push(
                t(
                  r,
                  { name: "k-".concat(p) },
                  {
                    default: () => [
                      n(
                        t("div", w({ class: z }, j), [
                          t("div", { class: "k-".concat(p, "-content") }, [
                            u ? t("div", { class: "k-".concat(p, "-title") }, [u]) : null,
                            t("div", { class: "k-".concat(p, "-body") }, [c]),
                            t("div", { class: "k-".concat(p, "-arrow") }, [
                              t("svg", { style: { fill: "currentcolor" }, viewBox: "0 0 24 8" }, [
                                t(
                                  "path",
                                  {
                                    id: "ot",
                                    d: "m24,0.97087l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z",
                                  },
                                  null
                                ),
                                t(
                                  "path",
                                  {
                                    stroke: "currentcolor",
                                    id: "in",
                                    d: "m24,0l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z",
                                  },
                                  null
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                        [
                          [d("transfer"), !0],
                          [o, h.value],
                        ]
                      ),
                    ],
                  }
                )
              ),
            L
          );
        };
      },
    })
  ),
  Xa = j(
    e({
      name: "Popconfirm",
      directives: { transfer: Ke },
      props: {
        dark: Boolean,
        show: Boolean,
        title: [String, Number, Object, Array],
        size: String,
        width: [Number, String],
        okText: { type: String },
        cancelText: { type: String },
        placement: {
          validator: (e) =>
            [
              "top",
              "top-left",
              "top-right",
              "bottom",
              "bottom-left",
              "bottom-right",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-top",
              "right-bottom",
            ].includes(e),
          default: "top",
        },
      },
      setup(e, i) {
        var { slots: p, attrs: m, emit: h } = i,
          f = v("locale", ht),
          g = a(() => (f instanceof Object && "value" in f ? f.value : f)),
          k = l(!1),
          b = l(!1),
          x = l(),
          S = l(),
          M = l(0),
          C = l(0),
          z = l(e.placement),
          A = l("bottom"),
          T = l(),
          O = l(),
          N = () => {
            u(() => {
              Re({
                refSelection: S,
                refPopper: x,
                currentPlacement: z,
                transOrigin: A,
                top: C,
                left: M,
              });
            });
          };
        (s(() => {
          e.show && N();
        }),
          B(() => {
            document.removeEventListener("click", D);
          }),
          c(
            () => e.show,
            (e, t) => {
              b.value = e;
            }
          ),
          c(
            () => e.title,
            () => {
              b.value && N();
            }
          ));
        var V = (e) => {
            ((b.value = e), h("update:show", e));
          },
          D = (e) => {
            var t,
              l = (null === (t = S.value) || void 0 === t ? void 0 : t.$el) || S.value;
            x.value && !x.value.contains(e.target) && l && !l.contains(e.target) && V(!1);
          },
          E = () => {
            k.value
              ? (clearTimeout(O.value), V(!0), N())
              : ((k.value = !0),
                document.addEventListener("click", D),
                u(() => {
                  (V(!0), N());
                }));
          },
          L = () => {
            (V(!1), h("ok"));
          },
          j = () => {
            (V(!1), h("cancel"));
          };
        return () => {
          var l,
            a,
            i = (null === (l = p.title) || void 0 === l ? void 0 : l.call(p)) || e.title,
            s = "popconfirm",
            u = [
              "k-".concat(s),
              { ["k-".concat(s, "-has-arrow")]: !0, ["k-".concat(s, "-dark")]: e.dark },
            ],
            c = { ref: S, onClick: E },
            v = Oe(null === (a = p.default) || void 0 === a ? void 0 : a.call(p)),
            h =
              null == v
                ? void 0
                : v.map((e) => {
                    var t = P({}, m);
                    return (1 == v.length && (t = P(P({}, t), c)), y(e, t, !0));
                  }),
            f = h.length > 1 ? t("span", c, [...h]) : h[0],
            B = {
              left: "".concat(M.value, "px"),
              top: "".concat(C.value, "px"),
              transformOrigin: A.value,
            },
            N = [f],
            D = {
              "k-placement": z.value,
              style: B,
              ref: x,
              onMouseenter: () => {
                (clearTimeout(T.value), V(!0));
              },
              onMouseleave: () => {
                O.value = setTimeout(() => {
                  e.show || V(!1);
                }, 300);
              },
            };
          return (
            k.value &&
              N.push(
                t(
                  r,
                  { name: "k-".concat(s) },
                  {
                    default: () => [
                      n(
                        t("div", w({ class: u }, D), [
                          t("div", { class: "k-".concat(s, "-content") }, [
                            t("div", { class: "k-".concat(s, "-body") }, [
                              t(I, { type: ce }, null),
                              t("div", { class: "k-".concat(s, "-title") }, [i]),
                            ]),
                            t("div", { class: "k-".concat(s, "-footer") }, [
                              t(
                                Pe,
                                { size: "small", onClick: j },
                                { default: () => [e.cancelText || g.value.k.common.cancel] }
                              ),
                              t(
                                Pe,
                                { size: "small", type: "primary", onClick: L },
                                { default: () => [e.okText || g.value.k.common.ok] }
                              ),
                            ]),
                            t("div", { class: "k-".concat(s, "-arrow") }, [
                              t("svg", { style: { fill: "currentcolor" }, viewBox: "0 0 24 8" }, [
                                t(
                                  "path",
                                  {
                                    d: "M24,0.97087 L24,1.97087 C20,1.97087 18.5,2.97087 16.5,4.97087 C14.5,6.97087 14,7.97087 12,7.97087 C10,7.97087 9.5,6.97087 7.5,4.97087 C5.5,2.97087 4,1.97087 0,1.97087 L0,0.97087 L24,0.97087 Z",
                                    id: "ot",
                                  },
                                  null
                                ),
                                t(
                                  "path",
                                  {
                                    d: "M24,0 L24,1 C20.032328,1 18.1576594,1.985435 16.1576594,3.985435 C14.1576594,5.985435 13.3847825,7 12,7 C10.6152175,7 9.81306952,5.985435 7.81306952,3.985435 C5.81306952,1.985435 4.0114261,1 0,1 L0,0 L24,0 Z",
                                    id: "in",
                                    stroke: "currentcolor",
                                  },
                                  null
                                ),
                              ]),
                            ]),
                          ]),
                        ]),
                        [
                          [d("transfer"), !0],
                          [o, b.value],
                        ]
                      ),
                    ],
                  }
                )
              ),
            N
          );
        };
      },
    })
  ),
  Za = j(
    e({
      name: "Progress",
      props: {
        percent: { type: Number, default: 0 },
        strokeWidth: { type: Number, default: 6 },
        color: String,
        format: Function,
        width: Number,
        strokeHeight: Number,
        gapDegree: { type: Number, default: 75 },
        strokeColor: Object,
        strokeLinecap: { type: String, default: "round" },
        size: {
          type: String,
          default: "default",
          validator: function (e) {
            return ["small", "default"].indexOf(e) >= 0;
          },
        },
        status: {
          type: String,
          default: "normal",
          validator: function (e) {
            return ["active", "exception", "success", "normal"].indexOf(e) >= 0;
          },
        },
        type: {
          type: String,
          default: "line",
          validator: function (e) {
            return ["line", "circle", "dashboard"].indexOf(e) >= 0;
          },
        },
        showInfo: { type: Boolean, default: !0 },
      },
      setup(e, a) {
        var { slots: r } = a;
        c(
          () => e.percent,
          (e, t) => {
            n.value = e;
          }
        );
        var n = l(e.percent),
          o = (l, a, r) => {
            var { strokeWidth: n, gapDegree: o, strokeLinecap: i } = e,
              s = 50 - n / 2,
              u = s,
              c = 2 * s,
              d = Math.max(0, o);
            d = Math.min(259, d);
            var v = "M 50,50 \n               m "
                .concat(0, ", ")
                .concat(u, " \n               a ")
                .concat(s, ",")
                .concat(s, " 0 1 1 ")
                .concat(0, ", ")
                .concat(-c, " \n               a ")
                .concat(s, ",")
                .concat(s, " 0 1 1 ")
                .concat(-0, ",")
                .concat(c),
              p = 2 * Math.PI * s,
              m = {
                strokeDasharray: "".concat((l / 100) * (p - (r ? d : 0)), "px ").concat(p, "px"),
                transition: "stroke-dasharray .3s ease 0s,opacity 0.3s ease 0s",
                strokeDashoffset: r ? -d / 2 : 0,
                stroke: a,
                strokeLinecap: i,
                opacity: 0 == l ? 0 : 1,
              },
              h = {};
            return (
              r &&
                (h = {
                  strokeDasharray: "".concat(p - d, "px ").concat(p, "px"),
                  strokeDashoffset: -d / 2,
                  strokeLinecap: i,
                }),
              t("svg", { viewBox: "0 0 ".concat(100, " ").concat(100) }, [
                t(
                  "path",
                  { d: v, fill: "none", "stroke-width": n, style: h, class: "k-progress-inner" },
                  null
                ),
                t(
                  "path",
                  { d: v, fill: "none", "stroke-width": n, style: m, class: "k-progress-bg" },
                  null
                ),
              ])
            );
          };
        return () => {
          var { type: l, status: a, size: i, width: s, showInfo: u } = e;
          100 == n.value && "exception" != a && (a = "success");
          var c = [
              "k-progress",
              "k-progress-".concat(l),
              "k-progress-".concat(a),
              { "k-progress-sm": "line" == l && "small" == i },
              { "k-progress-hide-info": !u },
            ],
            d = (() => {
              if (!e.showInfo) return null;
              var { status: l, type: a, format: o } = e,
                i = "".concat(n.value, "%");
              return (
                o
                  ? (i = o(n.value))
                  : ("line" == a &&
                      (100 == n.value && (i = t(I, { type: G }, null)),
                      "exception" == l && (i = t(I, { type: ae }, null))),
                    "circle" == a &&
                      (r.format
                        ? (i = r.format())
                        : (100 == n.value && (i = t(I, { type: X }, null)),
                          "exception" == l && (i = t(I, { type: re }, null))))),
                t("div", { class: "k-progress-text" }, [i])
              );
            })(),
            v = (() => {
              var { type: l, color: a, strokeHeight: r } = e;
              if ("line" == l) {
                var i = { width: n.value + "%", backgroundColor: a };
                return (
                  r && (i.height = r + "px"),
                  t("div", { class: "k-progress-inner" }, [
                    t("div", { class: "k-progress-bg", style: i }, null),
                  ])
                );
              }
              return "circle" == l ? o(n.value, a) : "dashboard" == l ? o(n.value, a, !0) : void 0;
            })(),
            p = {};
          return (
            "line" != l && s > 10 && (p = { width: s + "px", height: s + "px" }),
            t("div", { class: c, style: p }, [[v, d]])
          );
        };
      },
    })
  ),
  Ja = j(
    e({
      name: "Radio",
      props: {
        modelValue: { type: [Boolean, String, Number], default: null },
        value: { type: [String, Number, Boolean] },
        label: { type: [String, Number] },
        checked: Boolean,
        disabled: Boolean,
        theme: String,
        size: {
          default: "default",
          validator: (e) => ["small", "large", "default"].indexOf(e) >= 0,
        },
      },
      setup(e, a) {
        var { slots: r, emit: n } = a,
          o = l(e.modelValue || e.checked);
        (c(
          () => e.modelValue,
          (e) => {
            o.value = e;
          }
        ),
          c(
            () => e.checked,
            (e) => {
              o.value = e;
            }
          ));
        var i = (t) => {
            var l;
            ((o.value = t),
              n("change", {
                checked: t,
                value: e.value,
                label: e.label || (null === (l = r.default) || void 0 === l ? void 0 : l.call(r)),
              }),
              n("update:modelValue", t),
              n("update:checked", t));
          },
          s = (t) => {
            if (!e.disabled && !o.value) {
              (t.stopPropagation(), t.preventDefault());
              var l = t.target.checked;
              i(l);
            }
          },
          u = (t) => {
            if ("Space" == t.code) {
              if ((t.preventDefault(), t.stopPropagation(), e.disabled || o.value)) return;
              i(!o.value);
            }
          };
        return () => {
          var l,
            a = [
              "k-radio",
              {
                "k-radio-light": "light" == e.theme,
                "k-radio-disabled": e.disabled,
                "k-radio-checked": o.value,
                "k-radio-lg": "large" === e.size,
                "k-radio-sm": "small" === e.size,
              },
            ],
            n = e.label || (null === (l = r.default) || void 0 === l ? void 0 : l.call(r));
          return t("label", { class: a, tabindex: e.disabled ? null : 0, onKeydown: u }, [
            t("span", { class: "k-radio-symbol" }, [
              t(
                "input",
                {
                  type: "radio",
                  tabindex: "-1",
                  class: "k-radio-input",
                  disabled: e.disabled,
                  onChange: s,
                  checked: o.value,
                },
                null
              ),
            ]),
            n ? t("span", { class: "k-radio-label" }, [n]) : null,
          ]);
        };
      },
    })
  );
var Qa = j(
    e({
      name: "RadioButton",
      props: {
        modelValue: { type: [Boolean], default: !1 },
        label: { type: [String, Number] },
        value: { type: [String, Number] },
        theme: String,
        disabled: Boolean,
        checked: Boolean,
        size: {
          default: "default",
          validator: (e) => ["small", "large", "default"].indexOf(e) >= 0,
        },
      },
      setup(e, a) {
        var r,
          { slots: n, emit: o, attrs: i, listeners: s } = a,
          u = l(e.modelValue || e.checked);
        (c(
          () => e.modelValue,
          (e) => {
            u.value = e;
          }
        ),
          c(
            () => e.checked,
            (e) => {
              u.value = e;
            }
          ));
        var d = e.label || (null === (r = n.default) || void 0 === r ? void 0 : r.call(n)),
          v = (t) => {
            if (!e.disabled && !u.value) {
              var l = !u.value;
              ((u.value = l),
                o("change", { checked: l, value: e.value, label: d }),
                o("update:modelValue", l),
                t.preventDefault());
            }
          };
        return () => {
          var l,
            a = P(
              P(
                P(
                  P({}, e),
                  {},
                  {
                    disabled: e.disabled,
                    size: e.size,
                    theme: e.theme,
                    shape: e.shape,
                    type: u.value ? "primary" : "default",
                  },
                  i
                ),
                s
              ),
              {},
              { onClick: v }
            );
          return (
            "default" == e.theme && delete a.theme,
            t(
              Pe,
              a,
              "function" == typeof (l = d) ||
                ("[object Object]" === Object.prototype.toString.call(l) && !h(l))
                ? d
                : { default: () => [d] }
            )
          );
        };
      },
    })
  ),
  er = j(
    e({
      name: "RadioGroup",
      props: {
        modelValue: { type: [String, Number, Boolean], default: "" },
        disabled: Boolean,
        direction: {
          type: String,
          default: "horizontal",
          validator: (e) => ["horizontal", "vertical"].indexOf(e) >= 0,
        },
        size: { validator: (e) => ["small", "large", "default"].indexOf(e) >= 0 },
        theme: String,
        shape: String,
        options: Array,
        type: String,
      },
      setup(e, r) {
        var { slots: n, emit: o } = r,
          i = l(e.modelValue),
          s = (e) => {
            var { value: t } = e;
            ((i.value = t), o("update:modelValue", t), o("change", t));
          };
        c(
          () => e.modelValue,
          (e) => {
            i.value = e;
          }
        );
        var u = a(() => {
          var t,
            { options: l } = e;
          l ||
            ((l = []),
            Oe(null === (t = n.default) || void 0 === t ? void 0 : t.call(n)).forEach((e, t) => {
              var a,
                { label: r, value: n, disabled: o, icon: i } = e.props;
              l.push({
                value: n,
                icon: i,
                disabled: o,
                label:
                  r ||
                  (null === (a = e.children) || void 0 === a ? void 0 : a.default()[0].children) ||
                  n,
              });
            }));
          return l;
        });
        return () => {
          var l = u.value,
            a = [],
            r = "button" === e.type ? Qa : Ja;
          l.forEach((l) =>
            a.push(
              t(
                r,
                {
                  key: l.value,
                  label: l.label,
                  value: l.value,
                  onChange: s,
                  checked: i.value === l.value,
                  disabled: e.disabled || l.disabled,
                  icon: l.icon,
                  size: e.size,
                  theme: e.theme,
                },
                null
              )
            )
          );
          var n = [
            "k-radio-group",
            {
              "k-radio-button-group": "button" === e.type,
              "k-radio-circle": "circle" === e.shape,
              "k-radio-group-light": "light" === e.theme && "button" === e.type,
              "k-radio-group-card": "card" === e.theme && "button" === e.type,
              "k-radio-group-vertical": "vertical" === e.direction,
            },
          ];
          return t("div", { class: n }, [a]);
        };
      },
    })
  );
var tr = e({
    name: "Star",
    props: {
      character: [String, Function],
      tooltips: String,
      percent: Number,
      full: Boolean,
      half: Boolean,
      allowHalf: Boolean,
      disabled: Boolean,
      icon: [String, Function, Array],
      size: [Number, String],
      index: Number,
    },
    emits: ["update"],
    setup(e, l) {
      var { slots: a, emit: r } = l,
        n = (t, l) => {
          if (!e.disabled) {
            var { target: a, clientX: n } = t,
              o = 0;
            if (a) {
              var { left: i, width: s } = a.getBoundingClientRect();
              o = (n - i) / s;
            }
            r("update", l, e.index, o);
          }
        };
      return () => {
        var l,
          {
            full: a,
            half: r,
            character: o,
            tooltips: i,
            icon: s,
            percent: u,
            disabled: c,
            size: d,
          } = e,
          v = {
            class: ["k-star", { "k-star-full": a, "k-star-half": r }],
            onClick: (e) => n(e, "C"),
            onMousemove: (e) => n(e, "M"),
          },
          p = "function" == typeof o ? o(e.index) : o,
          m = "function" == typeof s ? s(e.index) : s,
          f = t("span", v, [
            t("span", { class: ["k-star-front", {}], style: { width: c ? u + "%" : null } }, [
              p || t(I, { type: m || ke, size: d }, null),
            ]),
            t("span", { class: "k-star-back" }, [p || t(I, { type: m || ke, size: d }, null)]),
          ]);
        return i
          ? t(
              Wl,
              { title: i },
              "function" == typeof (l = f) ||
                ("[object Object]" === Object.prototype.toString.call(l) && !h(l))
                ? f
                : { default: () => [f] }
            )
          : f;
      };
    },
  }),
  lr = e({
    name: "Rate",
    props: {
      modelValue: { type: Number, default: 0 },
      allowClear: { type: Boolean, default: !0 },
      allowHalf: Boolean,
      character: [String, Function],
      icon: [String, Array, Function],
      count: { type: Number, default: 5 },
      disabled: Boolean,
      tooltips: Array,
      showScore: Boolean,
      size: [Number, String],
      color: String,
    },
    setup(e, a) {
      var { slots: r, emit: n } = a,
        o = l(e.modelValue),
        i = l(),
        s = l(!1);
      c(
        () => e.modelValue,
        (e) => {
          o.value = e;
        }
      );
      var u = (t, l, a) => {
          if ("M" == t) {
            if (s.value) return;
            if (e.allowHalf) {
              var r = l - (a < 0.5 ? 0.5 : 0);
              i.value = r;
            } else i.value = l;
          } else {
            var u = l - (e.allowHalf && a < 0.5 ? 0.5 : 0);
            ((u = parseFloat(u.toFixed(2))),
              (o.value = u == o.value && e.allowClear ? 0 : u),
              0 == o.value && ((s.value = !0), (i.value = null)),
              n("update:modelValue", o.value),
              n("change", o.value));
          }
        },
        d = (e) => {
          ((i.value = null), (s.value = !1));
        };
      return () => {
        var l = i.value || o.value,
          {
            count: a,
            allowHalf: r,
            character: n,
            disabled: s,
            tooltips: c = [],
            icon: v,
            showScore: p,
            color: m,
          } = e,
          h = e.size;
        if ("string" == typeof h && Le(h)) {
          h = [20, 24, 32][Ee.indexOf(h)];
        }
        var f = [];
        ((isNaN(Number(a)) || a <= 0) && (a = 5), a > 15 && (a = 15));
        for (var g = 1; g <= a; g++) {
          var k = g - l,
            y = 100 * (1 - (g - l)),
            b = {
              allowHalf: r,
              full: l >= g,
              half: k > 0 && k < 1,
              icon: v,
              character: n,
              size: h,
              disabled: s,
              percent: y < 100 ? y : null,
              tooltips: c[g - 1],
              index: g,
              onUpdate: u,
            };
          f.push(t(tr, b, null));
        }
        var w = {
          class: ["k-rate", { "k-rate-disabled": s }],
          onMouseleave: d,
          style: { fontSize: h + "px" },
        };
        return (
          m && (w.style.color = m),
          t("div", w, [f, p ? t("span", { class: "k-rate-score" }, [o.value]) : null])
        );
      };
    },
  }),
  ar = j(lr);
let rr = class {
  constructor(e, t) {
    var l,
      a,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    (E(this, "count", (e) => {
      this.startTime || (this.startTime = e);
      var t = e - this.startTime;
      ((this.remaining = this.duration - t),
        this.useEasing
          ? (this.frameVal = this.countDown
              ? this.startVal - this.easingFn(t, 0, this.startVal - this.endVal, this.duration)
              : this.easingFn(t, this.startVal, this.endVal - this.startVal, this.duration))
          : (this.frameVal = this.startVal + (this.endVal - this.startVal) * (t / this.duration)));
      var l = this.countDown ? this.frameVal < this.endVal : this.frameVal > this.endVal;
      if (
        ((this.frameVal = l ? this.endVal : this.frameVal),
        (this.frameVal = Number(this.frameVal.toFixed(this.options.decimalPlaces))),
        this.printValue(this.frameVal),
        t < this.duration)
      )
        this.rAF = requestAnimationFrame(this.count);
      else if (null !== this.finalEndVal) this.update(this.finalEndVal);
      else {
        var a, r;
        null === (a = (r = this.options).onCompleteCallback) || void 0 === a || a.call(r);
      }
    }),
    (this.defaults = {
      startVal: 0,
      decimalPlaces: 0,
      duration: 2,
      useEasing: !0,
      useGrouping: !0,
      useIndianSeparators: !1,
      smartEasingThreshold: 999,
      smartEasingAmount: 333,
      separator: ",",
      decimal: ".",
      prefix: "",
      suffix: "",
      enableScrollSpy: !1,
      scrollSpyDelay: 200,
      scrollSpyOnce: !1,
    }),
    (this.options = Object.assign({}, this.defaults, r)),
    (this.el = "string" == typeof e ? document.getElementById(e) : e),
    (this.error = ""),
    (this.paused = !0),
    (this.once = !1),
    (this.finalEndVal = null),
    (this.formattingFn = this.options.formattingFn || this.formatNumber.bind(this)),
    (this.easingFn = this.options.easingFn || this.easeOutExpo.bind(this)),
    (t =
      null == t
        ? this.parse((null === (l = this.el) || void 0 === l ? void 0 : l.innerHTML) || "0")
        : t),
    (this.startVal = this.validateValue(this.options.startVal)),
    (this.frameVal = this.startVal),
    (this.endVal = this.validateValue(t)),
    (this.options.decimalPlaces = Math.max(0, this.options.decimalPlaces)),
    (this.options.separator = String(this.options.separator)),
    (this.useEasing = this.options.useEasing),
    "" === this.options.separator && (this.options.useGrouping = !1),
    this.resetDuration(),
    this.el
      ? this.printValue(this.startVal)
      : (this.error = "[CountUp] target is null or undefined"),
    "undefined" != typeof window && this.options.enableScrollSpy) &&
      ((a = window).__countUpScrollFns || (a.__countUpScrollFns = []),
      window.__countUpScrollFns.push(() => this.handleScroll()),
      (window.onscroll = () => {
        window.__countUpScrollFns.forEach((e) => e());
      }),
      this.handleScroll());
  }
  start(e) {
    var t, l;
    this.error ||
      (null === (t = (l = this.options).onStartCallback) || void 0 === t || t.call(l),
      e && (this.options.onCompleteCallback = e),
      this.duration > 0
        ? (this.determineDirectionAndSmartEasing(),
          (this.paused = !1),
          (this.rAF = requestAnimationFrame(this.count)))
        : this.printValue(this.endVal));
  }
  pauseResume() {
    (this.paused
      ? ((this.startTime = null),
        (this.duration = this.remaining),
        (this.startVal = this.frameVal),
        this.determineDirectionAndSmartEasing(),
        (this.rAF = requestAnimationFrame(this.count)))
      : cancelAnimationFrame(this.rAF),
      (this.paused = !this.paused));
  }
  reset() {
    (cancelAnimationFrame(this.rAF),
      (this.paused = !0),
      this.resetDuration(),
      (this.startVal = this.validateValue(this.options.startVal)),
      (this.frameVal = this.startVal),
      this.printValue(this.startVal));
  }
  update(e) {
    (cancelAnimationFrame(this.rAF),
      (this.startTime = null),
      (this.endVal = this.validateValue(e)),
      this.endVal !== this.frameVal &&
        ((this.startVal = this.frameVal),
        null == this.finalEndVal && this.resetDuration(),
        (this.finalEndVal = null),
        this.determineDirectionAndSmartEasing(),
        (this.rAF = requestAnimationFrame(this.count))));
  }
  determineDirectionAndSmartEasing() {
    var e,
      t = null !== (e = this.finalEndVal) && void 0 !== e ? e : this.endVal;
    this.countDown = this.startVal > t;
    var l = t - this.startVal;
    if (Math.abs(l) > this.options.smartEasingThreshold && this.options.useEasing) {
      this.finalEndVal = t;
      var a = this.countDown ? 1 : -1;
      ((this.endVal = t + a * this.options.smartEasingAmount),
        (this.duration /= 2),
        (this.useEasing = !1));
    } else ((this.finalEndVal = null), (this.useEasing = this.options.useEasing));
  }
  formatNumber(e) {
    var t = e < 0 ? "-" : "",
      l = Math.abs(e).toFixed(this.options.decimalPlaces),
      [a, r] = l.split(".");
    return (
      (r = r ? this.options.decimal + r : ""),
      this.options.useGrouping && (a = a.replace(/\B(?=(\d{3})+(?!\d))/g, this.options.separator)),
      "".concat(t).concat(this.options.prefix).concat(a).concat(r).concat(this.options.suffix)
    );
  }
  easeOutExpo(e, t, l, a) {
    return (l * (1 - Math.pow(2, (-10 * e) / a)) * 1024) / 1023 + t;
  }
  printValue(e) {
    var t;
    if (this.el) {
      var l = this.formattingFn(e);
      null !== (t = this.options.plugin) && void 0 !== t && t.render
        ? this.options.plugin.render(this.el, l)
        : "INPUT" === this.el.tagName
          ? (this.el.value = l)
          : (this.el.textContent = l);
    }
  }
  validateValue(e) {
    var t = Number(e);
    return Number.isNaN(t) ? ((this.error = "[CountUp] invalid value: ".concat(e)), null) : t;
  }
  resetDuration() {
    ((this.startTime = null),
      (this.duration = 1e3 * Number(this.options.duration)),
      (this.remaining = this.duration));
  }
  parse(e) {
    var t = this.options.separator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      l = this.options.decimal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return parseFloat(e.replace(new RegExp(t, "g"), "").replace(new RegExp(l), "."));
  }
  handleScroll() {
    if (!this.once && this.el) {
      var e = window.innerHeight + window.scrollY,
        t = this.el.getBoundingClientRect(),
        l = t.top + window.pageYOffset,
        a = l + t.height;
      a < e && a > window.scrollY && this.paused
        ? ((this.paused = !1),
          setTimeout(() => this.start(), this.options.scrollSpyDelay),
          this.options.scrollSpyOnce && (this.once = !0))
        : (window.scrollY > a || l > e) && !this.paused && this.reset();
    }
  }
};
var nr = j(
    e({
      name: "CountUpNumber",
      props: {
        modelValue: { type: Number, required: !0 },
        separator: String,
        duration: { type: Number, default: 1.2 },
        precision: { type: Number, default: 0 },
      },
      setup(e) {
        var a,
          r = l(null);
        return (
          s(() => {
            (a = new rr(r.value, e.modelValue, {
              duration: e.duration,
              separator: e.separator || ",",
              decimalPlaces: e.precision,
            })).start();
          }),
          C(() => {
            a = null;
          }),
          c(
            () => e.modelValue,
            (e) => {
              a && a.update(e);
            }
          ),
          c(
            () => e.precision,
            (e) => {
              a && (a.options.decimalPlaces = e);
            }
          ),
          () => t("span", { class: "k-stat-countup-number", ref: r }, null)
        );
      },
    })
  ),
  or = e({
    name: "RollUp",
    props: {
      modelValue: { type: [Number, String], default: 0 },
      duration: { type: Number, default: 1.2 },
      precision: { type: Number, default: 0 },
    },
    setup(e) {
      var a,
        r = l([]),
        n = (t) =>
          new Intl.NumberFormat("en-US", {
            minimumFractionDigits: e.precision,
            maximumFractionDigits: e.precision,
          })
            .format(t)
            .split("");
      ((r.value =
        ((a = e.modelValue), n(a).map((e) => (/\d/.test(e) ? (e > 5 ? e - 5 : 1 * e + 5) : e)))),
        s(() => {
          r.value = n(e.modelValue);
        }),
        c(
          () => e.modelValue,
          (e) => {
            r.value = n(e);
          }
        ));
      var o = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      return () =>
        t("div", { class: "k-stat-roll-number-container" }, [
          r.value.map((l, a) =>
            t("div", { key: a, class: "k-stat-roll-number-slot" }, [
              /\d/.test(l)
                ? t(
                    "div",
                    {
                      class: "k-stat-roll-number-column",
                      style: {
                        transition: "transform ".concat(
                          1e3 * e.duration,
                          "ms cubic-bezier(0.4, 0, 0.2, 1)"
                        ),
                        transform: "translateY(-".concat(10 * Number(l), "%)"),
                      },
                    },
                    [o.map((e) => t("span", { key: e }, [e]))]
                  )
                : t("span", { class: "k-stat-roll-number-separator" }, [l]),
            ])
          ),
        ]);
    },
  }),
  ir = j(
    e({
      name: "StatNumber",
      props: {
        modelValue: { type: Number, required: !0 },
        separator: String,
        duration: { type: Number, default: 1 },
        precision: { type: Number, default: 0 },
        type: {
          type: String,
          default: "countup",
          validator: (e) => ["rollup", "countup"].includes(e),
        },
        prefix: String,
        suffix: String,
      },
      setup(e, l) {
        var { slots: a } = l;
        return () => {
          var l,
            r,
            n = {
              modelValue: e.modelValue,
              separator: e.separator,
              duration: e.duration,
              precision: e.precision,
            },
            o = e.prefix || (null === (l = a.prefix) || void 0 === l ? void 0 : l.call(a)),
            i = e.suffix || (null === (r = a.suffix) || void 0 === r ? void 0 : r.call(a));
          return t("div", { class: "k-stat-number" }, [
            o && t("span", { class: "k-stat-number-prefix" }, [o]),
            "rollup" === e.type ? t(or, n, null) : t(nr, n, null),
            i && t("span", { class: "k-stat-number-suffix" }, [i]),
          ]);
        };
      },
    })
  ),
  sr = e({
    name: "StatCard",
    props: {
      title: String,
      precision: { type: Number, default: 0 },
      items: { type: Array, default: () => [] },
      separator: String,
      statNumberType: String,
      bordered: { type: Boolean, default: !1 },
    },
    setup(e, l) {
      var { slots: a } = l;
      return () =>
        t("div", { class: ["k-stat-card", { "k-stat-card-bordered": e.bordered }] }, [
          t("div", { class: "k-stat-card-title" }, [e.title]),
          t("div", { class: "k-stat-card-items" }, [
            (e.items || []).map((l, r) =>
              t("div", { key: r, class: "k-stat-card-item" }, [
                t("div", { class: "k-stat-card-item-value" }, [
                  t(
                    ir,
                    {
                      modelValue: l.value,
                      duration: l.duration,
                      precision: void 0 !== l.precision ? l.precision : e.precision,
                      separator: void 0 !== l.separator ? l.separator : e.separator,
                      type: e.statNumberType,
                    },
                    { prefix: () => l.prefix || a.prefix, suffix: () => l.suffix || a.suffix }
                  ),
                ]),
                t("div", { class: "k-stat-card-item-desc" }, [l.desc]),
              ])
            ),
          ]),
        ]);
    },
  }),
  ur = j(sr),
  cr = j(
    e({
      name: "ConfigProvider",
      props: { locale: { type: Object, default: () => null } },
      setup(e, t) {
        var { slots: a } = t,
          r = l(e.locale);
        m("locale", r);
        var n = M();
        n && n.appContext && (n.appContext.provides.locale = r);
        var o = M();
        return (
          (ea = o),
          c(
            () => e.locale,
            (e) => {
              r.value = e;
            },
            { immediate: !0 }
          ),
          () => {
            var e;
            return null === (e = a.default) || void 0 === e ? void 0 : e.call(a);
          }
        );
      },
    })
  ),
  dr = j(
    e({
      name: "Skeleton",
      props: {
        animated: Boolean,
        avatar: [Boolean, Object],
        loading: Boolean,
        title: { type: Number, default: 35 },
        delay: { type: Number, default: 500 },
        rows: { type: Number, default: 3 },
      },
      setup(e, a) {
        var { slots: r } = a,
          n = l(e.loading),
          o = l();
        c(
          () => e.loading,
          (t) => {
            t
              ? (n.value = t)
              : (clearTimeout(o.value),
                (o.value = setTimeout(() => {
                  n.value = t;
                }, e.delay)));
          }
        );
        return () => {
          var l,
            { animated: a } = e,
            o = { class: ["k-skeleton", { "k-skeleton-animated": a }] },
            i = (() => {
              var { avatar: l } = e;
              if (!l) return null;
              var a = "large",
                r = "circle";
              return (
                "object" == typeof l && (l.size && (a = l.size), l.shape && (r = l.shape)),
                t("div", { class: "k-skeleton-header" }, [
                  t(
                    "span",
                    {
                      class: [
                        "k-skeleton-avatar",
                        {
                          "k-skeleton-avatar-lg": "large" == a,
                          "k-skeleton-avatar-sm": "small" == a,
                          "k-skeleton-avatar-circle": "circle" == r,
                          "k-skeleton-avatar-square": "square" == r,
                        },
                      ],
                    },
                    null
                  ),
                ])
              );
            })(),
            s = (() => {
              var { title: l, rows: a } = e,
                r = new Array(a).fill("");
              return t("div", { class: "k-skeleton-content" }, [
                l > 0
                  ? t("div", { class: "k-skeleton-title", style: "width:".concat(l, "%") }, null)
                  : null,
                t("ul", { class: "k-skeleton-paragraph" }, [r.map(() => t("li", null, null))]),
              ]);
            })(),
            u = null === (l = r.default) || void 0 === l ? void 0 : l.call(r);
          return t("div", o, [u && !n.value ? u : [i, s]]);
        };
      },
    })
  ),
  vr = j(
    e({
      name: "SkeletonAvatar",
      props: {
        animated: Boolean,
        radius: Number,
        loading: Boolean,
        delay: { type: Number, default: 500 },
        shape: String,
        size: [Number, String],
      },
      setup(e, a) {
        var { slots: r } = a,
          n = l(e.loading),
          o = l();
        return (
          c(
            () => e.loading,
            (t) => {
              t
                ? (n.value = t)
                : (clearTimeout(o.value),
                  (o.value = setTimeout(() => {
                    n.value = t;
                  }, e.delay)));
            }
          ),
          () => {
            var l,
              { size: a, animated: o, radius: i, shape: s } = e,
              u = { class: ["k-skeleton k-skeleton-ele", { "k-skeleton-animated": o }] },
              c = {
                class: [
                  "k-skeleton-avatar",
                  {
                    "k-skeleton-avatar-lg": "large" == a,
                    "k-skeleton-avatar-sm": "small" == a,
                    ["k-skeleton-avatar-".concat(s)]: "default" != s,
                  },
                ],
                style: {},
              },
              d = null === (l = r.default) || void 0 === l ? void 0 : l.call(r);
            return (
              isNaN(Number(a)) ||
                ((c.style.width = "".concat(a, "px")), (c.style.height = "".concat(a, "px"))),
              i && (c.style["border-radius"] = "".concat(i, "px")),
              t("div", u, [d && !n.value ? d : t("span", c, null)])
            );
          }
        );
      },
    })
  ),
  pr = j(
    e({
      name: "SkeletonButton",
      props: {
        animated: Boolean,
        block: Boolean,
        loading: Boolean,
        delay: { type: Number, default: 500 },
        shape: String,
        size: String,
        width: Number,
      },
      setup(e, a) {
        var { slots: r } = a,
          n = l(e.loading),
          o = l();
        return (
          c(
            () => e.loading,
            (t) => {
              t
                ? (n.value = t)
                : (clearTimeout(o.value),
                  (o.value = setTimeout(() => {
                    n.value = t;
                  }, e.delay)));
            }
          ),
          () => {
            var l,
              { size: a, animated: n, block: o, shape: i, show: s, width: u } = e,
              c = {
                class: [
                  "k-skeleton k-skeleton-ele",
                  { "k-skeleton-animated": n, "k-skeleton-block": o },
                ],
              },
              d = {
                class: [
                  "k-skeleton-btn",
                  {
                    "k-skeleton-btn-lg": "large" == a,
                    "k-skeleton-btn-sm": "small" == a,
                    ["k-skeleton-btn-".concat(i)]: "default" != i,
                  },
                ],
                style: {},
              },
              v = null === (l = r.default) || void 0 === l ? void 0 : l.call(r);
            return (
              u && (d.style.width = "".concat(u, "px")),
              t("div", c, [v && !s.value ? v : t("span", d, null)])
            );
          }
        );
      },
    })
  ),
  mr = j(
    e({
      name: "SkeletonImage",
      props: {
        animated: Boolean,
        loading: Boolean,
        delay: { type: Number, default: 500 },
        radius: Number,
        size: [Number, Array],
      },
      setup(e, a) {
        var { slots: r } = a,
          n = l(e.loading),
          o = l();
        return (
          c(
            () => e.loading,
            (t) => {
              t
                ? (n.value = t)
                : (clearTimeout(o.value),
                  (o.value = setTimeout(() => {
                    n.value = t;
                  }, e.delay)));
            }
          ),
          () => {
            var l,
              { animated: a, radius: o, size: i } = e,
              s = { class: ["k-skeleton k-skeleton-ele", { "k-skeleton-animated": a }] },
              u = { class: ["k-skeleton-image"], style: {} },
              c = null === (l = r.default) || void 0 === l ? void 0 : l.call(r);
            return (
              o && (u.style["border-radius"] = "".concat(o, "px")),
              isNaN(Number(i)) ||
                ((u.style.width = "".concat(i, "px")), (u.style.height = "".concat(i, "px"))),
              Array.isArray(i) &&
                ((u.style.width = "".concat(i[0], "px")), (u.style.height = "".concat(i[1], "px"))),
              t("div", s, [
                c && !n.value
                  ? c
                  : t("span", u, [
                      t(I, { type: "image-outline", class: "k-skeleton-image-icon" }, null),
                    ]),
              ])
            );
          }
        );
      },
    })
  ),
  hr = j(
    e({
      name: "SkeletonText",
      props: {
        animated: Boolean,
        loading: Boolean,
        delay: { type: Number, default: 500 },
        size: String,
        width: Number,
      },
      setup(e, a) {
        var { slots: r } = a,
          n = l(e.loading),
          o = l();
        return (
          c(
            () => e.loading,
            (t) => {
              t
                ? (n.value = t)
                : (clearTimeout(o.value),
                  (o.value = setTimeout(() => {
                    n.value = t;
                  }, e.delay)));
            }
          ),
          () => {
            var l,
              { size: a, animated: o, width: i } = e,
              s = { class: ["k-skeleton k-skeleton-ele", { "k-skeleton-animated": o }] },
              u = {
                class: [
                  "k-skeleton-text",
                  { "k-skeleton-text-lg": "large" == a, "k-skeleton-text-sm": "small" == a },
                ],
                style: {},
              },
              c = null === (l = r.default) || void 0 === l ? void 0 : l.call(r);
            return (
              i && (u.style.width = "".concat(i, "px")),
              t("div", s, [c && !n.value ? c : t("span", u, null)])
            );
          }
        );
      },
    })
  ),
  fr = j(
    e({
      name: "Space",
      props: {
        align: {
          type: String,
          validator: (e) => !e || ["start", "end", "center", "baseline"].includes(e),
        },
        vertical: Boolean,
        wrap: { type: Boolean, default: !1 },
        block: Boolean,
        compact: Boolean,
        size: {
          type: [String, Number, Array],
          validator: (e) => !("number" != typeof e && !Array.isArray(e)) || Le(e),
        },
      },
      setup(e, l) {
        var { slots: a, attrs: r } = l;
        return (
          m("size", e.size),
          () => {
            var l,
              n,
              o = Oe(null === (l = a.default) || void 0 === l ? void 0 : l.call(a)),
              i = null === (n = a.split) || void 0 === n ? void 0 : n.call(a),
              s = e.vertical || e.align ? e.align : "center",
              u = {},
              c = [
                "k-space",
                {
                  "k-space-vertical": e.vertical,
                  "k-space-compact": e.compact,
                  "k-space-wrap": e.wrap,
                  "k-space-block": e.block,
                  ["k-space-align-".concat(s)]: s,
                },
              ];
            if ((e.size || e.compact || (u.gap = "8px"), !e.compact))
              if (Array.isArray(e.size))
                u.gap = "".concat(e.size[1], "px ").concat(e.size[0], "px");
              else if (/small|middle|large/.test(e.size)) {
                u.gap = "".concat({ small: 8, middle: 16, large: 24 }[e.size], "px");
              } else void 0 !== e.size && null !== e.size && (u.gap = "".concat(e.size, "px"));
            for (
              var d = P(P({}, r), {}, { style: u, class: c }), v = [], p = 0;
              p < o.length;
              p++
            ) {
              var m = e.vertical ? "vertical-" : "",
                h = {
                  class: {
                    ["k-space-".concat(m, "first-item")]: 0 === p,
                    ["k-space-".concat(m, "item")]: p > 0 && p < o.length - 1,
                    ["k-space-".concat(m, "last-item")]: p === o.length - 1,
                  },
                };
              "string" == typeof e.size && ["large", "small"].includes(e.size) && (h.size = e.size);
              var f = e.compact ? y(o[p], h, !0, !0) : O("div", h, [o[p]]);
              (v.push(f), i && p < o.length - 1 && v.push(i));
            }
            return t("div", d, [...v]);
          }
        );
      },
    })
  ),
  gr = j(
    e({
      name: "Spin",
      props: {
        modelValue: { type: Boolean, default: !0 },
        delay: { type: Number, default: 500 },
        size: {
          type: String,
          default: "default",
          validator: (e) => ["large", "default", "small"].indexOf(e) >= 0,
        },
        mode: {
          type: String,
          default: "rotate",
          validator: (e) => ["bounce", "flip", "rotate", "zoom"].indexOf(e) >= 0,
        },
      },
      setup(e, a) {
        var { slots: r } = a,
          n = l(e.modelValue),
          o = null;
        return (
          c(
            () => e.modelValue,
            (t, l) => {
              t
                ? (n.value = t)
                : (clearTimeout(o),
                  (o = setTimeout(() => {
                    n.value = t;
                  }, e.delay)));
            }
          ),
          () => {
            var l,
              { mode: a, size: o } = e,
              i = [{ "k-spin-loading": n.value, ["k-spin-".concat(a)]: a && n.value }],
              s = null === (l = r.default) || void 0 === l ? void 0 : l.call(r),
              u = [
                "k-spin",
                { "k-spin-lg": "large" == o, "k-spin-sm": "small" == o, "k-spin-only": null == s },
              ],
              c = t("div", { class: i }, null);
            return t("div", { class: u }, [[c, s]]);
          }
        );
      },
    })
  ),
  kr = e({
    name: "KSwitch",
    props: {
      checked: [Boolean, Number],
      modelValue: [Boolean, Number],
      type: String,
      disabled: Boolean,
      loading: Boolean,
      size: { default: "default", validator: (e) => ["small", "default", "large"].indexOf(e) >= 0 },
      trueText: String,
      falseText: String,
    },
    setup(e, a) {
      var { slots: r, emit: n } = a,
        o = l(e.modelValue || e.checked);
      (c(
        () => e.modelValue,
        (e, t) => {
          o.value = e;
        }
      ),
        c(
          () => e.checked,
          (e, t) => {
            o.value = e;
          }
        ));
      var i = () => {
        if (e.disabled) return !1;
        var t = !o.value;
        ((o.value = t), n("update:modelValue", t), n("change", t));
      };
      return () => {
        var l,
          a,
          n,
          s,
          { type: u, trueText: c, falseText: d, disabled: v, loading: p, size: m } = e,
          h = [
            "k-switch",
            {
              "k-switch-checked": o.value,
              "k-switch-disabled": v || p,
              ["k-switch-".concat(u)]: !!u,
              "k-switch-sm": "small" == e.size,
            },
          ],
          f =
            (null === (l = r.checked) || void 0 === l ? void 0 : l.call(r)) ||
            c ||
            (null === (a = r.unchecked) || void 0 === a ? void 0 : a.call(r)) ||
            d,
          g = p ? t(I, { spin: !0, type: pe, class: "k-switch-loading" }, null) : null,
          k =
            "small" != m && f
              ? t("span", { class: "k-switch-inner" }, [
                  o.value
                    ? (null === (n = r.checked) || void 0 === n ? void 0 : n.call(r)) || c
                    : (null === (s = r.unchecked) || void 0 === s ? void 0 : s.call(r)) || d,
                ])
              : null;
        return t("button", { class: h, onClick: i, disabled: v || p, type: "button" }, [k, g]);
      };
    },
  }),
  yr = j(kr),
  br = e({
    name: "Table",
    props: {
      data: { type: Array, default: () => [] },
      columns: { type: Array, default: () => [] },
      selectedKeys: { type: Array, default: () => [] },
      disabledKeys: { type: Array, default: () => [] },
      rowKey: { type: String, default: "key" },
      scroll: { type: Object, default: () => ({}) },
      size: { default: "default", validator: (e) => ["small", "large", "default"].indexOf(e) >= 0 },
      bordered: { type: Boolean, default: !1 },
      checkable: Boolean,
      loading: Boolean,
      emptyText: String,
    },
    emits: ["update:selectedKeys", "rowClick", "sort"],
    setup(e, r) {
      var { emit: n, slots: o } = r,
        i = l(null),
        u = l(null),
        d = l(0),
        v = l(new Set(e.selectedKeys)),
        m = a(() => !!e.scroll.y),
        h = S({ key: null, order: null }),
        f = l(!1),
        g = l(!1);
      c(
        () => e.selectedKeys,
        (e) => {
          v.value = new Set(e);
        }
      );
      var k = (e) => {
          var t = [];
          return (
            e.forEach((e) => {
              e.children && e.children.length > 0 ? t.push(...k(e.children)) : t.push(e);
            }),
            t
          );
        },
        y = a(() => k(e.columns)),
        b = a(() => {
          var t = [],
            l = 0,
            a = function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
              e.forEach((e) => {
                e.children && e.children.length > 0
                  ? a(e.children, t + 1)
                  : (l = Math.max(l, t + 1));
              });
            };
          a(e.columns);
          var r = (e, a) => {
            (t[a] || (t[a] = []),
              e.forEach((e) => {
                var n = P({}, e),
                  o = (e) =>
                    e.children && e.children.length ? e.children.reduce((e, t) => e + o(t), 0) : 1;
                ((n.colSpan = o(e)),
                  e.children && e.children.length > 0
                    ? ((n.rowSpan = 1), r(e.children, a + 1))
                    : (n.rowSpan = l - a),
                  t[a].push(n));
              }));
          };
          return (r(e.columns, 0), { rows: t, maxDepth: l });
        }),
        x = (t) => e.disabledKeys && e.disabledKeys.includes(t),
        M = a(() => {
          var t = e.data.filter((t) => !x(t[e.rowKey]));
          if (0 === t.length) return { all: !1, indeterminate: !1 };
          var l = t.filter((t) => v.value.has(t[e.rowKey])).length;
          return { all: l > 0 && l === t.length, indeterminate: l > 0 && l < t.length };
        }),
        C = a(() => {
          var t = {},
            l = {},
            a = e.checkable ? 50 : 0;
          y.value.forEach((e) => {
            if ("left" === e.fixed) {
              var r = { position: "sticky", transform: "translateZ(0)", left: "".concat(a, "px") };
              ((t[e.key] = r), (l[e.key] = r), (a += e.width || 150));
            }
          });
          for (var r = 0, n = y.value.length - 1; n >= 0; n--) {
            var o = y.value[n];
            if ("right" === o.fixed) {
              l[o.key] = {
                position: "sticky",
                right: "".concat(r, "px"),
                transform: "translateZ(0)",
              };
              var i = m.value ? r + d.value : r;
              ((t[o.key] = {
                position: "sticky",
                right: "".concat(i, "px"),
                transform: "translateZ(0)",
              }),
                (r += o.width || 150));
            }
          }
          return { header: t, body: l };
        }),
        z = function (e, t) {
          var l,
            a,
            r = [];
          "left" === e.fixed &&
            (r.push("k-table-cell-fix-left"),
            "left" !== (null === (l = y.value[t + 1]) || void 0 === l ? void 0 : l.fixed) &&
              r.push("k-table-cell-fix-left-last"));
          "right" === e.fixed &&
            (r.push("k-table-cell-fix-right"),
            "right" !== (null === (a = y.value[t - 1]) || void 0 === a ? void 0 : a.fixed) &&
              r.push("k-table-cell-fix-right-first"));
          return (e.sorter && r.push("k-table-cell-sorter"), r);
        },
        B = 0,
        A = (e) => {
          var t = null == e ? void 0 : e.target;
          t &&
            (B && cancelAnimationFrame(B),
            (B = requestAnimationFrame(() => {
              var { scrollLeft: e, scrollWidth: l, clientWidth: a } = t;
              m.value && i.value && (i.value.scrollLeft = e);
              var r = e > 0.5,
                n = e < Math.max(0, l - a) - 0.5;
              (f.value !== r && (f.value = r), g.value !== n && (g.value = n));
            })));
        },
        T = () => {
          if (u.value) {
            var t = u.value.offsetWidth - u.value.clientWidth - (e.bordered ? 1 : 0);
            d.value !== t && (d.value = t);
          }
        };
      (s(() => {
        m.value ? (T(), u.value && A({ target: u.value })) : u.value && A({ target: u.value });
      }),
        p(() => {
          m.value && T();
        }));
      var N = a(() => {
          var t = [...e.data];
          if (h.key && h.order) {
            var l = y.value.find((e) => e.key === h.key);
            l &&
              !0 === l.sorter &&
              t.sort((e, t) => {
                var l = e[h.key],
                  a = t[h.key];
                return l === a ? 0 : "asc" === h.order ? (l > a ? 1 : -1) : l > a ? -1 : 1;
              });
          }
          return t;
        }),
        V = (t) => {
          var { checked: l } = t,
            a = new Set(v.value);
          (e.data.forEach((t) => {
            var r = t[e.rowKey];
            x(r) || (l ? a.add(r) : a.delete(r));
          }),
            (v.value = a),
            n("update:selectedKeys", Array.from(a)));
        },
        D = function () {
          var l = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return t("colgroup", null, [
            e.checkable && t("col", { style: { width: "50px", left: 0 } }, null),
            y.value.map((e) =>
              t(
                "col",
                {
                  key: e.key,
                  style: {
                    width: e.width ? "".concat(e.width, "px") : "auto",
                    minWidth: e.width ? "".concat(e.width, "px") : "150px",
                  },
                },
                null
              )
            ),
            l &&
              m.value &&
              t(
                "col",
                { style: { width: "".concat(d.value, "px"), minWidth: "".concat(d.value, "px") } },
                null
              ),
          ]);
        },
        E = () => {
          var { rows: l, maxDepth: a } = b.value;
          return t("thead", null, [
            l.map((l, r) =>
              t("tr", { key: r }, [
                e.checkable &&
                  0 === r &&
                  t(
                    "th",
                    {
                      rowSpan: a,
                      class: ["k-table-cell-fix-left", f.value && "k-table-cell-fix-left-last"],
                      style: { left: 0, zIndex: 3 },
                    },
                    [
                      t(
                        dl,
                        {
                          checked: M.value.all,
                          indeterminate: M.value.indeterminate,
                          onChange: V,
                          disabled: e.data.length > 0 && e.data.every((t) => x(t[e.rowKey])),
                        },
                        null
                      ),
                    ]
                  ),
                l.map((e, l) => {
                  var a;
                  return t(
                    "th",
                    {
                      key: e.key || l,
                      colSpan: e.colSpan,
                      rowSpan: e.rowSpan,
                      class: z(e, l),
                      style: C.value.header[e.key],
                      onClick: () =>
                        ((e) => {
                          e.sorter &&
                            (h.key !== e.key
                              ? ((h.key = e.key), (h.order = "asc"))
                              : (h.order =
                                  "asc" === h.order ? "desc" : "desc" === h.order ? null : "asc"),
                            "function" == typeof e.sorter && e.sorter(h),
                            n("sort", h));
                        })(e),
                    },
                    [
                      t("div", { class: "k-table-header-col" }, [
                        (null === (a = o["header-".concat(e.key)]) || void 0 === a
                          ? void 0
                          : a.call(o, { value: e.title, col: e, index: l })) || e.title,
                        e.sorter &&
                          t("span", { class: "k-table-sorter" }, [
                            t(
                              I,
                              {
                                type: q,
                                class: [
                                  "k-table-sorter-up",
                                  h.key === e.key && "asc" === h.order && "k-table-sorter-active",
                                ],
                              },
                              null
                            ),
                            t(
                              I,
                              {
                                type: W,
                                class: [
                                  "k-table-sorter-down",
                                  h.key === e.key && "desc" === h.order && "k-table-sorter-active",
                                ],
                              },
                              null
                            ),
                          ]),
                      ]),
                    ]
                  );
                }),
                m.value &&
                  0 === r &&
                  t(
                    "th",
                    {
                      rowSpan: a,
                      class: "k-table-scrollbar-patch",
                      style: { width: "".concat(d.value, "px") },
                    },
                    null
                  ),
              ])
            ),
          ]);
        },
        L = a(() => {
          var e = N.value,
            t = y.value,
            l = [];
          if (!e.length) return l;
          for (var a = 0; a < e.length; a++) {
            l[a] = [];
            for (var r = 0; r < t.length; r++) l[a][r] = { rowSpan: 1, colSpan: 1, show: !0 };
          }
          for (var n = 0; n < e.length; n++)
            for (var o = 0; o < t.length; o++)
              if (l[n][o].show) {
                var i = e[n],
                  s = t[o],
                  u = 1,
                  c = 1;
                if (
                  (s.rowSpan && (u = "function" == typeof s.rowSpan ? s.rowSpan(i, n) : s.rowSpan),
                  s.colSpan && (c = "function" == typeof s.colSpan ? s.colSpan(i, n) : s.colSpan),
                  1 !== u || 1 !== c)
                ) {
                  ((l[n][o].rowSpan = u), (l[n][o].colSpan = c));
                  for (var d = 0; d < u; d++)
                    for (var v = 0; v < c; v++)
                      if (0 !== d || 0 !== v) {
                        var p = n + d,
                          m = o + v;
                        l[p] && l[p][m] && (l[p][m].show = !1);
                      }
                }
              }
          return l;
        }),
        j = () =>
          t("tbody", null, [
            N.value.map((l, a) => {
              var r = l[e.rowKey];
              return t(
                "tr",
                {
                  key: r,
                  onClick: (e) => {
                    (e.stopPropagation(), n("rowClick", l));
                  },
                },
                [
                  e.checkable &&
                    t(
                      "td",
                      {
                        class: ["k-table-cell-fix-left", f.value && "k-table-cell-fix-left-last"],
                        style: { width: "50px", left: 0 },
                      },
                      [
                        t(
                          dl,
                          {
                            checked: v.value.has(r),
                            disabled: x(r),
                            onChange: () =>
                              ((e) => {
                                if (!x(e)) {
                                  var t = new Set(v.value);
                                  (t.has(e) ? t.delete(e) : t.add(e),
                                    (v.value = t),
                                    n("update:selectedKeys", Array.from(t)));
                                }
                              })(r),
                          },
                          null
                        ),
                      ]
                    ),
                  y.value.map((e, r) => {
                    var n,
                      i,
                      s,
                      u = null === (n = L.value[a]) || void 0 === n ? void 0 : n[r];
                    if (!u || !u.show) return null;
                    var c = {};
                    return (
                      u.rowSpan > 1 && (c.rowspan = u.rowSpan),
                      u.colSpan > 1 && (c.colspan = u.colSpan),
                      t(
                        "td",
                        w({ key: e.key }, c, { class: z(e, r), style: C.value.body[e.key] }),
                        [
                          (null === (i = o[e.key]) || void 0 === i
                            ? void 0
                            : i.call(o, { record: l, col: e, value: l[e.key] })) ||
                            (null === (s = e.render) || void 0 === s
                              ? void 0
                              : s.call(e, O, l, r)) ||
                            l[e.key],
                        ]
                      )
                    );
                  }),
                ]
              );
            }),
          ]),
        F = (l, a) => {
          var r = {
            width:
              e.scroll.x && "number" == typeof e.scroll.x
                ? "".concat(e.scroll.x, "px")
                : e.scroll.x || void 0,
            minWidth: e.scroll.x ? void 0 : "100%",
            tableLayout: "fixed",
          };
          return t("table", { style: r }, [D(l), l && E(), a && j()]);
        };
      return () => {
        var l,
          a = [
            "k-table",
            {
              "k-table-sm": "small" == e.size,
              "k-table-lg": "large" == e.size,
              "k-table-bordered": e.bordered,
              "k-table-ping-left": f.value,
              "k-table-ping-right": g.value,
            },
          ],
          r = !(e.data && e.data.length && e.columns && e.columns.length),
          n =
            m.value &&
            t("div", { class: "k-table-thead", ref: i, style: { overflow: "hidden" } }, [
              F(!0, !1),
            ]),
          s = t(
            "div",
            {
              class: "k-table-body k-scroll",
              ref: u,
              style: {
                overflowY: e.scroll.y ? "scroll" : "auto",
                overflowX: null !== (l = e.data) && void 0 !== l && l.length ? "auto" : "hidden",
                maxHeight: e.scroll.y
                  ? "number" == typeof e.scroll.y
                    ? "".concat(e.scroll.y, "px")
                    : e.scroll.y
                  : void 0,
              },
              onScroll: A,
            },
            [F(!m.value, !0), r && t(gt, { description: e.emptyText }, null)]
          );
        return t("div", { class: a }, [
          o.header && t("div", { class: "k-table-header" }, [o.header()]),
          n,
          s,
          o.footer && t("div", { class: "k-table-footer" }, [o.footer()]),
          e.loading && t(gr, null, null),
        ]);
      };
    },
  }),
  wr = j(br),
  xr = e({
    name: "Tabs",
    props: {
      modelValue: [String, Number],
      value: [String, Number],
      card: Boolean,
      sample: Boolean,
      centered: Boolean,
      animated: { type: Boolean, default: !0 },
    },
    setup(e, a) {
      var { slots: r, emit: n } = a,
        o = l(e.modelValue || e.value),
        i = l(-1),
        d = l(!1),
        v = l(0),
        p = l(!1),
        m = l(!1),
        h = l(),
        f = l(),
        g = l(),
        k = l();
      (c(
        () => e.modelValue,
        (e) => {
          ((o.value = e), S());
        }
      ),
        s(() => {
          (u(() => {
            S();
          }),
            window.addEventListener("resize", w));
        }),
        B(() => {
          window.removeEventListener("resize", w);
        }));
      var b = () => {
          var e = h.value.children[i.value];
          if (e) {
            var t = f.value,
              l = g.value.clientWidth,
              a = v.value,
              { offsetLeft: r, offsetWidth: n } = e;
            (a + r < 0 ? (a = -r) : l - a < r + n && (a -= r + n + a - l + 2),
              (v.value = a),
              (t.style.transform = "translate3d(".concat(a, "px,0,0)")));
          }
        },
        w = () => {
          u(() => {
            var e = f.value;
            if (e) {
              var t = e.offsetWidth,
                l = g.value.clientWidth,
                a = v.value;
              (l + a < l && (a = l - t),
                a > 0 && (a = 0),
                (v.value = a),
                (m.value = a == l - t),
                (p.value = 0 == a),
                (e.style.transform = "translate3d(".concat(a, "px,0,0)")),
                b(),
                M(),
                C());
            }
          });
        },
        x = (e) => {
          var t = f.value,
            l = t.offsetWidth,
            a = g.value.clientWidth,
            r = v.value;
          if ("right" == e) {
            var n = l - a + r;
            n > a ? (r -= a) : n > 0 && (r -= n);
          } else r < -a ? (r += a) : r < 0 && (r = 0);
          ((m.value = r == a - l),
            (p.value = 0 == r),
            (v.value = r),
            (t.style.transform = "translate3d(".concat(r, "px,0,0)")));
        },
        S = () => {
          u(() => {
            var e,
              t = Oe(null === (e = r.default) || void 0 === e ? void 0 : e.call(r));
            ((i.value = null == t ? void 0 : t.map((e) => e.key).indexOf(o.value)), b(), M());
          });
        },
        M = () => {
          if (!e.card && !e.sample) {
            var t = h.value.children[i.value];
            if (t) {
              var l = k.value,
                a = t.offsetLeft;
              (e.centered,
                (l.style.width = "".concat(t.offsetWidth, "px")),
                (l.style.transform = "translate3d(".concat(a, "px, 0px, 0px)")));
            }
          }
        },
        C = () => {
          u(() => {
            var e = g.value;
            e && (d.value = e.scrollWidth > e.clientWidth);
          });
        },
        z = () => {
          var l,
            a = Oe(null === (l = r.default) || void 0 === l ? void 0 : l.call(r)),
            s =
              null == a
                ? void 0
                : a.map((e) => y(e, { activeKey: o.value, onResetNavPosition: () => w() }, !0)),
            u =
              null == a
                ? void 0
                : a.map((l, a) => {
                    var r = l.key,
                      { icon: s, title: u, closable: c, disabled: d } = l.props;
                    ((d = void 0 !== d && 0 != d), (c = void 0 !== c));
                    var v = {
                      class: [
                        "k-tabs-tab",
                        { "k-tabs-tab-active": r === o.value, "k-tabs-tab-disabled": d },
                      ],
                      onClick: () =>
                        ((e, t) => {
                          var { disabled: l, key: a } = e;
                          l ||
                            (n("update:modelValue", a),
                            n("tab-click", a),
                            o.value !== a && ((o.value = a), (i.value = t), S(), n("change", a)));
                        })({ disabled: d, key: r }, a),
                    };
                    return t("div", v, [
                      s ? t(I, { type: s }, null) : null,
                      u,
                      c && e.card
                        ? t(
                            I,
                            {
                              type: re,
                              class: "k-tabs-close",
                              strokeWidth: 45,
                              onClick: (e) =>
                                ((e, t) => {
                                  (n("remove", e), t.stopPropagation());
                                })(r, e),
                            },
                            null
                          )
                        : null,
                    ]);
                  });
          return { panels: s, navNodes: u };
        };
      return () => {
        var { card: l, animated: a, centered: n, sample: o } = e,
          s = [
            "k-tabs",
            {
              "k-tabs-animated": a && !l && !o,
              "k-tabs-card": l && !o,
              "k-tabs-sample": o && !l,
              "k-tabs-centered": n,
            },
          ],
          u = {};
        !a || l || o || (u.marginLeft = "-".concat(100 * i.value, "%"));
        var c = ["k-tabs-nav-container", { "k-tabs-nav-container-scroll": d.value }],
          { panels: v, navNodes: y } = z();
        return t("div", { class: s }, [
          t("div", { class: "k-tabs-bar" }, [
            t("div", { class: c }, [
              d.value
                ? t(
                    "span",
                    {
                      class: ["k-tabs-tab-btn-prev", { "k-tabs-tab-btn-prev-disabled": p.value }],
                      onClick: () => x("left"),
                    },
                    [t(I, { type: Z }, null)]
                  )
                : null,
              t("div", { class: "k-tabs-nav-wrap", ref: g }, [
                t("div", { class: "k-tabs-nav", style: {}, ref: f }, [
                  l || o ? null : t("div", { class: "k-tabs-ink-bar", ref: k }, null),
                  t("div", { class: "k-tabs-nav-inner", ref: h }, [y]),
                ]),
              ]),
              d.value
                ? t(
                    "span",
                    {
                      class: ["k-tabs-tab-btn-next", { "k-tabs-tab-btn-next-disabled": m.value }],
                      onClick: () => x("right"),
                    },
                    [t(I, { type: te }, null)]
                  )
                : null,
            ]),
            r.extra ? t("div", { class: "k-tabs-extra" }, [r.extra()]) : null,
          ]),
          t("div", { class: "k-tabs-content", style: u }, [v]),
        ]);
      };
    },
  }),
  Sr = j(xr),
  Mr = j(
    e({
      name: "TabPanel",
      props: {
        title: String,
        icon: [String, Array],
        disabled: Boolean,
        closable: Boolean,
        activeKey: [String, Number],
      },
      setup(e, l) {
        var { emit: a, slots: r } = l;
        (s(() => a("resetNavPosition")), i(() => a("resetNavPosition")));
        var n = M().vnode.key;
        return () => {
          var l;
          return t(
            "div",
            { class: ["k-tabs-tabpanel", { "k-tabs-tabpanel-active": e.activeKey == n }] },
            [null === (l = r.default) || void 0 === l ? void 0 : l.call(r)]
          );
        };
      },
    })
  ),
  Cr = j(
    e({
      name: "TimeLine",
      props: {
        mode: {
          type: String,
          default: "left",
          validator: (e) => ["left", "right", "center", "alternate"].indexOf(e) > -1,
        },
      },
      setup(e, l) {
        var { slots: a } = l;
        return () => {
          var l,
            r = ["k-timeline", "k-timeline-".concat(e.mode)];
          return t("ul", { class: r }, [
            null === (l = a.default) || void 0 === l ? void 0 : l.call(a),
          ]);
        };
      },
    })
  ),
  zr = j(
    e({
      name: "TimeLineItem",
      props: { color: String, icon: [String, Array], time: String, extra: String },
      setup(e, l) {
        var { slots: a } = l;
        return () => {
          var l,
            r,
            n,
            { icon: o, color: i, time: s } = e,
            u = { color: i },
            c =
              (null === (l = a.dot) || void 0 === l ? void 0 : l.call(a)) ||
              (o ? t(I, { type: o }, null) : t("span", { class: "k-time-line-head" }, null)),
            d = e.extra || (null === (r = a.extra) || void 0 === r ? void 0 : r.call(a));
          return t("li", { class: "k-time-line-item" }, [
            t("div", { class: ["k-time-line-dot"], style: u }, [c]),
            t("div", { class: "k-time-line-item-content" }, [
              null === (n = a.default) || void 0 === n ? void 0 : n.call(a),
              d && t("div", { class: "k-time-line-item-extra" }, [d]),
              s && t("div", { class: "k-time-line-item-time" }, [s]),
            ]),
          ]);
        };
      },
    })
  ),
  Br = (e, t) => {
    var l = e.find((e) => e.key === t);
    if (l) {
      var a = e.filter((e) => e.parentKey === t).filter((e) => !e.disabled);
      if (0 !== a.length) {
        var r = a.filter((e) => e.checked).length,
          n = a.filter((e) => e.indeterminate).length;
        (r > 0 && r < a.length
          ? ((l.indeterminate = !0), (l.checked = !1))
          : r === a.length
            ? ((l.checked = !0), (l.indeterminate = !1))
            : 0 === r && 0 === n
              ? ((l.checked = !1), (l.indeterminate = !1))
              : n > 0 && ((l.indeterminate = !0), (l.checked = !1)),
          l.parentKey && Br(e, l.parentKey));
      }
    }
  },
  Ar = (e) => {
    for (
      var t,
        {
          data: l,
          expandedKeys: a = [],
          selectedKeys: r = [],
          checkedKeys: n = [],
          parentKey: o = null,
          hasLoad: i,
          checkStrictly: s,
          checkable: u,
        } = e,
        c = [],
        d = l
          .map((e, t) => {
            var a = t === l.length - 1;
            return [e, 0, o, [], a];
          })
          .reverse();
      d.length > 0;
    ) {
      var [v, p, m, h, f] = d.pop(),
        g = v.key,
        k = v.children && v.children.length > 0,
        y = !1;
      if (
        ((y = !0 === v.isLeaf || (!k && !i)),
        c.push(
          P(
            P({}, v),
            {},
            {
              level: p,
              parentKey: m,
              loading: !1,
              isLeaf: y,
              expanded: a.includes(g),
              selected: r.includes(g),
              checked: n.includes(g),
              dropping: !1,
              isLastChild: f,
              visiblePrefixes: h,
            }
          )
        ),
        k)
      )
        for (var b = [...h, !f], w = v.children.length - 1; w >= 0; w--) {
          var x = w === v.children.length - 1;
          d.push([v.children[w], p + 1, g, b, x]);
        }
    }
    return (
      u &&
        (s
          ? c.forEach((e) => {
              e.indeterminate = !1;
            })
          : ((t = c).forEach((e) => {
              e.indeterminate = !1;
            }),
            t
              .filter((e) => e.isLeaf)
              .forEach((e) => {
                e.checked && e.parentKey && Br(t, e.parentKey);
              }))),
      c
    );
  };
var Tr = e({
    name: "Tree",
    props: {
      data: Array,
      selectedKeys: Array,
      expandedKeys: Array,
      checkedKeys: Array,
      directory: Boolean,
      expandAll: Boolean,
      checkable: Boolean,
      draggable: Boolean,
      showLine: Boolean,
      showIcon: { type: Boolean, default: !0 },
      showExtra: { type: Boolean, default: !1 },
      multiple: { type: Boolean, default: !1 },
      checkStrictly: Boolean,
      selectAsCheck: Boolean,
      queryKey: String,
    },
    setup(e, a) {
      var { emit: r, slots: n, attrs: o, listeners: i } = a,
        s = l([]),
        d = l(e.selectedKeys || []),
        v = l(e.expandedKeys || []),
        p = l(e.checkedKeys || []),
        m = S({}),
        f = o.onLoadData,
        g = (e) => {
          if (!e.isLeaf && !e.loading) {
            var { key: t } = e;
            if (!(f && (!e.children || 0 === e.children.length) && !e.isLeaf) || e.expanded) {
              e.expanded = !e.expanded;
              var l = v.value,
                a = l.indexOf(t);
              (e.expanded ? -1 === a && l.push(t) : a > -1 && l.splice(a, 1),
                (v.value = [...l]),
                r("update:expandedKeys", v.value),
                r("expand", { key: t, expanded: e.expanded, node: e }));
            } else {
              e.loading = !0;
              var n = null == o ? void 0 : o.onLoadData(e);
              n &&
                n.then &&
                n
                  .then(() => {
                    u(() => {
                      var l = s.value.find((e) => e.key === t) || e;
                      ((l.loading = !1), (l.expanded = !0));
                      var a = v.value;
                      (a.includes(t) ||
                        (a.push(t), (v.value = [...a]), r("update:expandedKeys", v.value)),
                        r("expand", { key: t, expanded: !0, targetNode: l }));
                    });
                  })
                  .catch((t) => {
                    e.loading = !1;
                  });
            }
          }
        },
        k = {
          toggleNode: (t, l) => {
            var a = s.value.find((e) => e.key === t);
            a &&
              !a.disabled &&
              ((a.checked = l),
              e.checkStrictly || (k.updateChildren(t, l), k.updateParents(t)),
              k.recalculateIndeterminate());
          },
          updateChildren: (t, l) => {
            if (!e.checkStrictly) {
              var a = (e) => {
                  e.disabled ||
                    ((e.checked = l),
                    e.children &&
                      e.children.length > 0 &&
                      s.value
                        .filter((t) => e.children.some((e) => e.key === t.key))
                        .forEach((e) => {
                          e.disabled || ((e.checked = l), a(e));
                        }));
                },
                r = s.value.find((e) => e.key === t);
              r && a(r);
            }
          },
          updateParents: (t) => {
            if (!e.checkStrictly) {
              var l = (e) => {
                var t = s.value.find((t) => t.key === e);
                if (t && t.parentKey) {
                  var a = s.value.find((e) => e.key === t.parentKey);
                  if (a) {
                    var r = s.value
                      .filter((e) => a.children && a.children.some((t) => t.key === e.key))
                      .filter((e) => !e.disabled);
                    if (0 === r.length) return ((a.indeterminate = !1), void (a.checked = !1));
                    var n = r.filter((e) => e.checked).length,
                      o = r.filter((e) => e.indeterminate).length;
                    (n === r.length
                      ? ((a.checked = !0), (a.indeterminate = !1))
                      : n > 0 || o > 0
                        ? ((a.checked = !1), (a.indeterminate = !0))
                        : ((a.checked = !1), (a.indeterminate = !1)),
                      l(a.key));
                  }
                }
              };
              l(t);
            }
          },
          recalculateIndeterminate: () => {
            if (e.checkStrictly)
              s.value.forEach((e) => {
                e.indeterminate = !1;
              });
            else {
              s.value.forEach((e) => {
                e.indeterminate = !1;
              });
              var t = [...s.value];
              (t
                .filter((e) => e.isLeaf && e.checked)
                .forEach((e) => {
                  e.parentKey && Br(t, e.parentKey);
                }),
                t.forEach((e) => {
                  var t = s.value.find((t) => t.key === e.key);
                  t && (t.indeterminate = e.indeterminate);
                }));
            }
          },
          moveNode: (t, l) => {
            if (t !== l) {
              var a = (e, t) => {
                  for (var l of e) {
                    if (l.key === t) return l;
                    if (l.children && l.children.length > 0) {
                      var r = a(l.children, t);
                      if (r) return r;
                    }
                  }
                  return null;
                },
                n = a(e.data, t),
                o = a(e.data, l);
              if (n && o) {
                var i = s.value.find((e) => e.key === t),
                  u = null;
                if (i && i.parentKey) {
                  var c = a(e.data, i.parentKey);
                  if (c && c.children) {
                    var m = c.children.findIndex((e) => e.key === t);
                    m > -1 && ((u = c.children.splice(m, 1)[0]), c.children.length);
                  }
                } else {
                  var h = e.data.findIndex((e) => e.key === t);
                  h > -1 && (u = e.data.splice(h, 1)[0]);
                }
                if (u) {
                  ([
                    "level",
                    "parentKey",
                    "loading",
                    "isLeaf",
                    "expanded",
                    "selected",
                    "checked",
                    "dropping",
                    "indeterminate",
                  ].forEach((e) => delete u[e]),
                    o.children || (o.children = []),
                    o.children.push(u),
                    v.value.includes(l) || v.value.push(l),
                    (s.value = Ar({
                      data: e.data,
                      expandedKeys: v.value,
                      selectedKeys: d.value,
                      checkedKeys: p.value,
                      hasLoad: f,
                      checkable: e.checkable,
                      checkStrictly: e.checkStrictly,
                    })));
                  var g = s.value.find((e) => e.key === l);
                  g && ((g.expanded = !0), r("update:expandedKeys", v.value));
                }
              }
            }
          },
        },
        y = (e, t) => {
          var { checked: l } = e,
            { key: a } = t;
          k.toggleNode(a, l);
          var n = s.value.filter((e) => e.checked).map((e) => e.key);
          ((p.value = n), r("check", t, l, n));
        },
        b = (t) => {
          if (!t.disabled)
            if (e.selectAsCheck) y({ checked: !t.selected }, t);
            else {
              var l = d.value,
                { key: a, selected: n } = t;
              (e.multiple
                ? n
                  ? l.splice(l.indexOf(a), 1)
                  : l.push(a)
                : (s.value.forEach((e) => {
                    e.selected && (e.selected = !1);
                  }),
                  (l = n ? [] : [a])),
                ((e, t, l) => {
                  var a = s.value.findIndex((t) => t.key === e);
                  a > -1 && (s.value[a][t] = l);
                })(a, "selected", !n),
                (d.value = l),
                r("update:selectedKeys", l),
                r("select", t));
            }
        },
        x = (l, a) => {
          var o = l.key;
          (null != o && "" !== o) || ((o = "n_".concat(a)), (l.key = o));
          var i = [];
          if (
            (l.visiblePrefixes &&
              l.visiblePrefixes.length > 0 &&
              l.visiblePrefixes.forEach((e) => {
                i.push(
                  t("span", { class: e ? "k-tree-indent-line" : "k-tree-indent-empty" }, null)
                );
              }),
            l.isLeaf)
          )
            i.push(t("span", { class: "k-tree-arrow-placeholder" }, null));
          else {
            var s = ["k-tree-arrow", { "k-tree-arrow-open": l.expanded }],
              u = t(
                "span",
                {
                  class: s,
                  onClick: (e) => {
                    (e.stopPropagation(), g(l));
                  },
                },
                [
                  t(
                    z("Button"),
                    {
                      size: "small",
                      type: "text",
                      loading: l.loading,
                      icon: l.loading ? ye : e.showLine ? (l.expanded ? he : F) : te,
                      spin: l.loading,
                    },
                    null
                  ),
                ]
              );
            i.push(u);
          }
          var c = e.checkable
              ? t(
                  z("Checkbox"),
                  {
                    onChange: (e) => y(e, l),
                    checked: l.checked,
                    disabled: l.disabled,
                    indeterminate: l.indeterminate,
                  },
                  null
                )
              : null,
            d = t(z("Icon"), { type: l.icon, class: "k-tree-icon" }, null),
            v = {
              class: ["k-tree-title", { "k-tree-title-selected": l.selected }],
              draggable: e.draggable && !l.disabled,
              disabled: l.disabled,
            };
          (e.draggable &&
            ((v.onDragstart = (t) =>
              ((t, l) => {
                e.draggable &&
                  !l.disabled &&
                  (!l.isLeaf && l.expanded && g(l),
                  (m.key = l.key),
                  (m.data = l),
                  (t.dataTransfer.effectAllowed = "move"),
                  r("dragstart", l));
              })(t, l)),
            (v.onDragover = (t) =>
              ((t) => {
                e.draggable && (t.preventDefault(), (t.dataTransfer.dropEffect = "move"));
              })(t)),
            (v.onDragenter = (t) =>
              ((t, l) => {
                e.draggable &&
                  !l.disabled &&
                  l.key !== m.key &&
                  (t.preventDefault(), (l.dropping = !0), r("dragenter", l));
              })(t, l)),
            (v.onDragleave = (t) => {
              return ((a = l), void (e.draggable && ((a.dropping = !1), r("dragleave", a))));
              var a;
            }),
            (v.onDrop = (t) =>
              ((t, l) => {
                e.draggable &&
                  m.key &&
                  !l.disabled &&
                  l.key !== m.key &&
                  (t.preventDefault(),
                  (l.dropping = !1),
                  k.moveNode(m.key, l.key),
                  (m.key = null),
                  (m.data = null),
                  r("drop", { dragNode: m.data, dropNode: l }));
              })(t, l)),
            (v.onDragend = (t) => {
              return (
                (l = t),
                void (e.draggable && ((m.key = null), (m.data = null), r("dragend", l)))
              );
              var l;
            })),
            e.directory || (v.onClick = () => b(l)));
          var p = t("span", v, [l.icon && e.showIcon && d, l.title]),
            h = {
              key: l.key,
              class: [
                "k-tree-item",
                {
                  "k-tree-item-disabled": l.disabled,
                  "k-tree-item-drop": l.dropping && !l.disabled,
                  "k-tree-item-extra-hidden": !e.showExtra,
                  "k-tree-item-selected": e.directory && l.selected,
                },
              ],
            };
          e.directory &&
            (h.onClick = (e) => {
              (e.stopPropagation(), b(l), g(l));
            });
          var f = n.extra && t("span", { class: "k-tree-item-extra" }, [n.extra(l)]);
          return t("div", h, [i, c, p, f]);
        },
        M = () => {
          e.data &&
            (s.value = Ar({
              data: e.data,
              expandedKeys: v.value,
              selectedKeys: d.value,
              checkedKeys: p.value,
              hasLoad: f,
              checkable: e.checkable,
              checkStrictly: e.checkStrictly,
            }));
        };
      return (
        M(),
        c(
          () => e.data,
          () => {
            M();
          },
          { deep: !0 }
        ),
        c(
          () => e.checkedKeys,
          (e) => {
            ((p.value = e || []), M());
          }
        ),
        c(
          () => e.selectedKeys,
          (e) => {
            ((d.value = e || []), M());
          }
        ),
        c(
          () => e.expandedKeys,
          (e) => {
            ((v.value = e || []), M());
          }
        ),
        () => {
          var l,
            a,
            { showLine: r, directory: n, queryKey: o } = e,
            i = s.value.filter((e) => {
              if (0 === e.level) return !0;
              if (o && o.trim().length && !e.title.includes(o)) return !1;
              for (var t = e; t.parentKey; ) {
                var l = s.value.find((e) => e.key === t.parentKey);
                if (!l || !l.expanded) return !1;
                t = l;
              }
              return !0;
            }),
            u = we("k-tree-slide");
          return t("div", { class: ["k-tree", { "k-tree-show-line": r, "k-tree-directory": n }] }, [
            t(
              T,
              w(u, { tag: "div", class: "k-tree-node-list" }),
              ((a = l = i.map((e, t) => x(e, t))),
              "function" == typeof a ||
              ("[object Object]" === Object.prototype.toString.call(a) && !h(a))
                ? l
                : { default: () => [l] })
            ),
          ]);
        }
      );
    },
  }),
  Or = j(Tr),
  Nr = e({
    name: "TreeSelect",
    directives: { transfer: Ke, resize: Se },
    props: {
      placeholder: String,
      size: { default: "default", validator: (e) => ["small", "large", "default"].indexOf(e) >= 0 },
      placement: {
        validator: (e) =>
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].includes(e),
        default: "bottom-left",
      },
      width: Number,
      maxTagCount: Number,
      modelValue: [String, Number, Array],
      value: [String, Number, Array],
      clearable: { type: Boolean, default: !0 },
      filterable: Boolean,
      block: Boolean,
      disabled: Boolean,
      multiple: Boolean,
      loading: Boolean,
      bordered: { type: Boolean, default: !0 },
      showArrow: { type: Boolean, default: !0 },
      options: Array,
      theme: { type: String, default: "light" },
      emptyText: String,
      icon: [String, Array],
      shape: String,
      arrowIcon: [String, Array],
      treeData: Array,
      treeCheckable: Boolean,
      treeShowLine: Boolean,
      treeShowIcon: { type: Boolean, default: !0 },
      treeCheckStrictly: Boolean,
      treeExpandedKeys: Array,
      treeSelectedKeys: Array,
      treeExpandedAll: Boolean,
    },
    setup(e, i) {
      var { slots: p, emit: m, attrs: h, listeners: f } = i,
        g = v("locale", ht),
        k = a(() => (g instanceof Object && "value" in g ? g.value : g)),
        y = l(!1),
        b = l(!1),
        w = l(
          e.multiple
            ? e.modelValue || e.value || []
            : lt(e.modelValue || e.value)
              ? []
              : [e.modelValue || e.value]
        ),
        S = l(!1),
        M = l(""),
        C = l(),
        z = l(""),
        A = l(!1),
        T = l(),
        O = null == h ? void 0 : h.onSearch,
        N = l(),
        V = l("bottom"),
        D = l(),
        E = l(0),
        L = l(0),
        j = l(e.placement),
        F = l(),
        Y = h.onTreeLoadData,
        K = l(e.treeExpandedKeys || []),
        R = l(e.treeCheckedKeys || []),
        _ = l(!1);
      (c(
        () => e.placement,
        (e) => {
          ((j.value = e), U());
        }
      ),
        c(
          () => e.modelValue,
          (t) => {
            ((w.value = e.multiple ? t || [] : lt(t) ? [] : [t]), U());
          }
        ),
        B(() => {
          document.removeEventListener("click", H);
        }));
      var U = () => {
        u(() => {
          var e;
          ((z.value = null === (e = D.value) || void 0 === e ? void 0 : e.offsetWidth),
            Re({
              refSelection: D,
              refPopper: N,
              currentPlacement: j,
              transOrigin: V,
              top: L,
              left: E,
            }));
        });
      };
      s(() => {
        u(() => {
          var e;
          z.value = null === (e = D.value) || void 0 === e ? void 0 : e.offsetWidth;
        });
      });
      var H = (e) => {
          var t,
            l = (null === (t = D.value) || void 0 === t ? void 0 : t.$el) || D.value;
          N.value &&
            !N.value.contains(e.target) &&
            l &&
            !l.contains(e.target) &&
            ((y.value = !1), $());
        },
        $ = () => {
          (e.filterable || O) &&
            setTimeout(() => {
              ((M.value = ""),
                T.value && ((T.value.value = ""), (T.value.style.width = "")),
                (S.value = !1));
            }, 300);
        },
        W = (e) => {
          ((M.value = e.target.value),
            u(() => {
              ((e.target.style.width = C.value.offsetWidth + "px"), U());
            }),
            O &&
              (clearTimeout(F.value),
              (F.value = setTimeout(() => {
                (b.value
                  ? ((y.value = !0), U())
                  : ((b.value = !0),
                    document.addEventListener("click", H),
                    u(() => {
                      ((y.value = !0), U());
                    })),
                  m("search", e));
              }, 500))));
        },
        q = (e) => {
          S.value &&
            u((e) => {
              (T.value.focus(), (A.value = !0));
            });
        },
        G = () => {
          var t = e.multiple ? w.value : w.value[0] || null;
          (m("update:modelValue", t), m("change", t));
        },
        X = (e) => {
          ((w.value = []), G(), $(), e.stopPropagation());
        },
        Z = () => {
          (e.filterable || O) &&
            ((S.value = !0),
            u(() => {
              var e;
              (null === (e = T.value) || void 0 === e || e.focus(), (A.value = !0));
            }));
        },
        J = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          e.disabled ||
            (O
              ? Z()
              : b.value
                ? ((y.value = t || !y.value), y.value ? (U(), Z()) : $())
                : ((b.value = !0),
                  document.addEventListener("click", H),
                  u(() => {
                    ((y.value = !0), U(), Z());
                  })));
        },
        Q = a(() => {
          var e = new Map();
          return (
            te.value.forEach((t) => {
              e.set(t.key, t.title);
            }),
            w.value.map((t) => {
              var l;
              return null !== (l = e.get(t)) && void 0 !== l ? l : t;
            })
          );
        }),
        te = a(() =>
          Ar({
            data: e.treeData,
            expandedKeys: K.value,
            selectedKeys: w.value,
            checkedKeys: R.value,
            hasLoad: Y,
            checkStrictly: e.treeCheckStrictly,
          })
        );
      (c(
        () => e.treeCheckedKeys,
        (e) => {
          R.value = e || [];
        }
      ),
        c(
          () => e.treeExpandedKeys,
          (e) => {
            K.value = e || [];
          }
        ));
      var le = (e) => {
          var { key: t, expanded: l, targetNode: a } = e,
            r = K.value.indexOf(t);
          (r > -1 && !l ? K.value.splice(r, 1) : K.value.push(t),
            m("update:treeExpandedKeys", [...K.value]));
        },
        ne = (e, t, l) => {
          var { key: a } = e,
            r = [...l];
          ((w.value = r), G());
        },
        oe = (t) => {
          var l,
            { key: a, title: r } = P({}, t),
            n = !0;
          e.multiple
            ? ((null === (l = w.value) || void 0 === l ? void 0 : l.indexOf(a)) >= 0
                ? ((n = !1), (w.value = w.value.filter((e) => e !== a)))
                : w.value.push(a),
              U(),
              (O || e.filterable) && ((T.value.value = ""), (M.value = ""), Z()))
            : ((w.value = [a]), (y.value = !1), $());
          (G(), m("select", a, r, n));
        },
        ie = () => {
          var l = {
            checkable: e.treeCheckable,
            loading: e.loading,
            data: e.treeData,
            multiple: e.multiple || e.treeCheckable,
            checkStrictly: e.treeCheckStrictly,
            expandedKeys: [...K.value],
            selectedKeys: [...w.value],
            checkedKeys: [...w.value],
            selectAsCheck: e.treeCheckable,
            queryKey: M.value,
            onSelect: oe,
            onExpand: le,
            onCheck: ne,
          };
          return (Y && (l.onLoadData = h.onTreeLoadData), t(Or, l, null));
        },
        se = (t) => {
          var { key: l } = t;
          "Backspace" === l &&
            "" == M.value &&
            e.multiple &&
            w.value.length > 0 &&
            ((w.value = w.value.slice(0, -1)), G(), U());
        },
        ue = a(() => e.clearable && !e.disabled && !lt(w.value)),
        ce = () => {
          var l = null;
          if (b.value) {
            var a,
              i = {
                ref: N,
                style: {
                  minWidth: "".concat(z.value, "px"),
                  left: "".concat(E.value, "px"),
                  top: "".concat(L.value, "px"),
                  transformOrigin: V.value,
                },
                class: [
                  "k-tree-select-dropdown",
                  "k-scroll",
                  {
                    "k-tree-select-dropdown-multiple": e.multiple,
                    "k-tree-select-dropdown-sm": "small" == e.size,
                  },
                ],
              },
              s = t("div", { class: "k-tree-select-loading" }, [
                t(I, { type: pe, spin: !0 }, null),
                t("span", null, [null == k ? void 0 : k.value.k.select.loading]),
              ]);
            l = t(
              r,
              { name: "".concat("k-tree-select") },
              {
                default: () => [
                  n(
                    t("div", i, [
                      e.loading
                        ? s
                        : null !== (a = e.treeData) && void 0 !== a && a.length
                          ? ie()
                          : t(
                              gt,
                              {
                                onClick: q,
                                description: null == k ? void 0 : k.value.k.select.emptyText,
                              },
                              null
                            ),
                    ]),
                    [
                      [d("transfer"), !0],
                      [o, y.value],
                    ]
                  ),
                ],
              }
            );
          }
          return l;
        };
      return () => {
        var {
            disabled: l,
            size: a,
            multiple: r,
            placeholder: i,
            showArrow: s,
            bordered: u,
            theme: c,
            arrowIcon: v,
            icon: p,
            shape: m,
            filterable: h,
          } = e,
          f = [];
        void 0 === v && (v = ee);
        var g,
          b = n(
            t("div", { key: "search", class: "k-tree-select-search-wrap" }, [
              t(
                "input",
                {
                  ref: T,
                  class: "k-tree-select-search",
                  autoComplete: "off",
                  onChange: (e) => e.stopPropagation(),
                  onKeydown: se,
                  onInput: W,
                  onBlur: () => {
                    y.value || (S.value = !1);
                  },
                },
                null
              ),
              t("span", { class: "k-tree-select-search-mirror", ref: C }, [M.value]),
            ]),
            [[o, S.value]]
          ),
          z = i || (null == k ? void 0 : k.value.k.select.placeholder),
          B =
            z && lt(Q.value) && !M.value
              ? t("div", { class: "k-tree-select-placeholder" }, [z])
              : null,
          N = { display: M.value.length ? "none" : "" },
          V = r
            ? t("div", { class: "k-tree-select-labels", name: "k-tree-select-tag" }, [
                ((g = Q.value.map((l, a) =>
                  t("span", { class: "k-tree-select-tag", key: l }, [
                    l,
                    t(
                      I,
                      {
                        type: re,
                        onClick: (t) =>
                          ((t, l) => {
                            e.disabled || (w.value.splice(l, 1), t.stopPropagation(), U());
                          })(t, a),
                      },
                      null
                    ),
                  ])
                )),
                e.maxTagCount &&
                  e.maxTagCount > 0 &&
                  g.length > e.maxTagCount &&
                  (g = g.slice(0, e.maxTagCount)).push(
                    t("span", { class: "k-tree-select-tag" }, [
                      x("+"),
                      Q.value.length - e.maxTagCount,
                      x("..."),
                    ])
                  ),
                g),
                b,
              ])
            : lt(Q.value)
              ? null
              : t("div", { class: "k-tree-select-label", style: N }, [Q.value[0]]);
        (f.push(V), B && f.push(B), (!h && !O) || r || f.push(b));
        var E = { width: "".concat(e.width, "px") },
          L = !O && s ? t(I, { class: "k-tree-select-arrow", type: v }, null) : null,
          P = [
            "k-tree-select",
            {
              "k-tree-select-disabled": l,
              "k-tree-select-block": e.block,
              "k-tree-select-opened": y.value,
              "k-tree-select-borderless": !1 === u,
              "k-tree-select-lg": "large" == a,
              "k-tree-select-sm": "small" == a,
              "k-tree-select-light": "light" == c,
              "k-tree-select-has-icon": !!p,
              "k-tree-select-circle": "circle" == m && !r,
              "k-tree-select-multiple": r,
              "k-tree-select-show-search": A.value,
              "k-tree-select-show-tags": r && !lt(Q.value),
              "k-tree-select-has-clear": ue.value,
            },
          ],
          j = ue.value
            ? t(I, { class: "k-tree-select-clearable", type: ae, onClick: X }, null)
            : null;
        return n(
          t(
            "div",
            {
              tabIndex: "0",
              class: P,
              style: E,
              onClick: J,
              onFocus: () => (_.value = !0),
              onBlur: () => (_.value = !1),
              ref: D,
            },
            [
              p ? t(I, { type: p, class: "k-tree-select-icon" }, null) : null,
              t("div", { class: "k-tree-select-selection" }, [f]),
              t("span", { class: "k-tree-select-suffix" }, [L, j]),
              ce(),
            ]
          ),
          [[d("resize"), U]]
        );
      };
    },
  }),
  Vr = j(Nr),
  Dr = j(
    e({
      name: "Tag",
      props: {
        closeable: Boolean,
        color: String,
        shape: String,
        icon: [String, Array],
        size: { default: "small", validator: (e) => ["small", "large", "middle"].indexOf(e) >= 0 },
        theme: { type: String, default: "light" },
      },
      setup(e, a) {
        var { slots: i, emit: s, listeners: u } = a,
          c = l(!0),
          d = l(!1),
          v = () => {
            (s("close"),
              (c.value = !1),
              setTimeout(() => {
                d.value = !0;
              }, 300));
          };
        return () => {
          var l,
            { shape: a, icon: s, size: p, color: m, closeable: h } = e,
            f = P(
              P(
                {
                  class: [
                    "k-tag",
                    {
                      "k-tag-sm": "small" == p,
                      "k-tag-lg": "large" == p,
                      ["k-tag-".concat(m)]: Ve.includes(m),
                      "k-tag-circle": "circle" == a,
                      "k-tag-has-color": qt(m) && !Ve.includes(m),
                      "k-tag-closeable": h,
                      "k-tag-hidden": d.value,
                      "k-tag-light": "light" == e.theme,
                    },
                  ],
                },
                u
              ),
              {},
              { style: { backgroundColor: qt(m) && !Ve.includes(m) ? m : null } }
            ),
            g = [];
          return (
            s && g.push(t(I, { class: "k-tag-icon", type: s }, null)),
            g.push(
              t("span", { class: "k-tag-text" }, [
                null === (l = i.default) || void 0 === l ? void 0 : l.call(i),
              ])
            ),
            h && g.push(t(I, { class: "k-tag-close", type: re, onClick: v }, null)),
            t(r, { name: "k-tag" }, { default: () => [n(t("div", f, [...g]), [[o, c.value]])] })
          );
        };
      },
    })
  ),
  Er = e({
    name: "Selector",
    props: {
      disabled: Boolean,
      name: { type: String, default: "file" },
      accept: String,
      multiple: Boolean,
      directory: Boolean,
      limit: Number,
      uploadText: String,
      uploadSubText: String,
      draggable: Boolean,
      locale: Object,
      fileList: Array,
      uploadIcon: [String, Object, Array],
      type: {
        type: String,
        default: "list",
        validator: (e) => ["list", "picture"].indexOf(e) >= 0,
      },
    },
    setup(e, a) {
      var { emit: r, slots: n } = a,
        o = l(!1),
        i = l(null),
        s = (e) => ((o.value = !0), e.preventDefault(), !1),
        u = () => {
          o.value = !1;
        },
        c = (e) => {
          var t = e.dataTransfer ? e.dataTransfer.files : e.target.files;
          (t && t.length > 0 && r("select", t),
            (e.target.value = ""),
            e.preventDefault(),
            (o.value = !1));
        },
        d = (e) => (c(e), !1),
        v = (e) => {
          (e.stopPropagation(), e.preventDefault(), (o.value = !0));
        },
        p = (t) => {
          var l;
          e.disabled || null === (l = i.value) || void 0 === l || l.click();
        };
      return () => {
        var l,
          {
            name: a,
            accept: r,
            multiple: m,
            directory: h,
            limit: f,
            disabled: g,
            uploadText: k,
            uploadSubText: y,
            draggable: b,
            uploadIcon: w,
            type: x,
            fileList: S,
            locale: M,
          } = e,
          C = "picture" == x,
          z = f && S && S.length >= f,
          B = !C || !z;
        if (!B) return null;
        var A = {
          class: ["k-upload-add", { "k-upload-drag-over": o.value }],
          onDragenter: b ? s : null,
          onDrop: b ? d : null,
          onDragover: b ? v : null,
          onDragleave: b ? u : null,
          onClick: p,
        };
        return B
          ? t("div", { class: "k-upload-select" }, [
              t("div", A, [
                t(
                  "input",
                  {
                    type: "file",
                    class: "k-upload-file",
                    webkitdirectory: h,
                    name: a,
                    accept: r,
                    disabled: g,
                    multiple: m,
                    onChange: c,
                    ref: i,
                  },
                  null
                ),
                C || b
                  ? t(I, { type: w || Y }, null)
                  : null === (l = n.default) || void 0 === l
                    ? void 0
                    : l.call(n),
                (C || (b && k)) && t("span", { class: "k-upload-text" }, [k]),
                b &&
                  y &&
                  t("span", { class: "k-upload-sub-text" }, [
                    o.value ? (null == M ? void 0 : M.k.upload.releaseToUpload) : y,
                  ]),
              ]),
            ])
          : null;
      };
    },
  }),
  Lr = e({
    name: "UploadFileList",
    props: {
      showUploadList: { type: Boolean, default: !0 },
      locale: Object,
      type: {
        type: String,
        default: "list",
        validator: (e) => ["list", "picture"].indexOf(e) >= 0,
      },
      fileList: Array,
      disabled: Boolean,
    },
    setup(e, l) {
      var { emit: a, slots: r } = l,
        n = (e) =>
          e.preview && "string" == typeof e.preview
            ? t("img", { src: e.preview }, null)
            : e.url
              ? t("img", { src: e.url }, null)
              : null;
      return () => {
        var l,
          { showUploadList: o, type: i, fileList: s, locale: u } = e,
          c = "picture" === i;
        return (o || c) && ((o && !c) || c)
          ? t("div", { class: "k-upload-".concat(c ? "picture" : "file", "-list") }, [
              s.map((l, r) => {
                var o =
                  "success" == l.status
                    ? null == u
                      ? void 0
                      : u.k.upload.successful
                    : l.errorText || (null == u ? void 0 : u.k.upload.failed);
                return t(
                  "div",
                  {
                    class: [
                      "k-upload-file-".concat(i, "-item"),
                      "k-upload-file-status-".concat(l.status),
                    ],
                    key: l.uid || r,
                  },
                  [
                    t("div", { class: "k-upload-".concat(c ? "picture" : "file", "-preview") }, [
                      n(l) || t(I, { type: ne }, null),
                    ]),
                    t("div", { class: "k-upload-file-item-info" }, [
                      c
                        ? null
                        : t("div", { class: "k-upload-file-main" }, [
                            t("span", { class: "k-upload-file-name" }, [l.filename]),
                            t("span", { class: "k-upload-file-size" }, [l.size]),
                          ]),
                      "wait" !== l.status &&
                        t("div", { class: "k-upload-file-status" }, [
                          "uploading" == l.status
                            ? t(
                                Za,
                                {
                                  percent: l.percent,
                                  type: "".concat(c ? "circle" : "line"),
                                  size: "small",
                                  showInfo: !1,
                                  status: "active",
                                  strokeWidth: 15,
                                },
                                null
                              )
                            : o && !c
                              ? t("div", { class: "k-upload-file-status-text" }, [
                                  t(I, { type: K }, null),
                                  o,
                                ])
                              : null,
                          c &&
                            "error" == l.status &&
                            t(
                              Wl,
                              { title: o, placement: "bottom" },
                              { default: () => [t(I, { type: K }, null)] }
                            ),
                        ]),
                    ]),
                    t(
                      Pe,
                      {
                        type: "text",
                        size: "small",
                        icon: re,
                        class: "k-upload-file-".concat(c ? "picture" : "item", "-remove"),
                        onClick: () =>
                          ((t, l) => {
                            e.disabled || a("remove", { index: t, file: l });
                          })(r, l),
                      },
                      null
                    ),
                  ]
                );
              }),
              c && (null === (l = r.selector) || void 0 === l ? void 0 : l.call(r)),
            ])
          : null;
      };
    },
  });
const Pr = [];
for (let e = 0; e < 256; ++e) Pr.push((e + 256).toString(16).slice(1));
let jr;
const Ir = new Uint8Array(16);
var Fr = {
  randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
};
function Yr(e, t, l) {
  const a =
    (e = e || {}).random ??
    e.rng?.() ??
    (function () {
      if (!jr) {
        if ("undefined" == typeof crypto || !crypto.getRandomValues)
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        jr = crypto.getRandomValues.bind(crypto);
      }
      return jr(Ir);
    })();
  if (a.length < 16) throw new Error("Random bytes length must be >= 16");
  return (
    (a[6] = (15 & a[6]) | 64),
    (a[8] = (63 & a[8]) | 128),
    (function (e, t = 0) {
      return (
        Pr[e[t + 0]] +
        Pr[e[t + 1]] +
        Pr[e[t + 2]] +
        Pr[e[t + 3]] +
        "-" +
        Pr[e[t + 4]] +
        Pr[e[t + 5]] +
        "-" +
        Pr[e[t + 6]] +
        Pr[e[t + 7]] +
        "-" +
        Pr[e[t + 8]] +
        Pr[e[t + 9]] +
        "-" +
        Pr[e[t + 10]] +
        Pr[e[t + 11]] +
        Pr[e[t + 12]] +
        Pr[e[t + 13]] +
        Pr[e[t + 14]] +
        Pr[e[t + 15]]
      ).toLowerCase();
    })(a)
  );
}
function Kr(e, t, l) {
  return Fr.randomUUID && !e ? Fr.randomUUID() : Yr(e);
}
var Rr = e({
    name: "Upload",
    props: {
      method: { type: String, default: "post" },
      name: { type: String, default: "file" },
      action: { type: String, required: !0 },
      type: {
        type: String,
        default: "list",
        validator: (e) => ["list", "picture"].indexOf(e) >= 0,
      },
      data: { type: Object, default: () => ({}) },
      disabled: Boolean,
      directory: Boolean,
      multiple: Boolean,
      accept: String,
      headers: Object,
      showUploadList: { type: Boolean, default: !0 },
      transformFile: Function,
      fileList: Array,
      autoTrigger: { type: Boolean, default: !0 },
      limit: Number,
      minSize: Number,
      maxSize: Number,
      uploadText: String,
      uploadSubText: String,
      uploadIcon: [String, Object, Array],
      draggable: Boolean,
    },
    emits: [
      "remove",
      "exceed",
      "beforeUpload",
      "change",
      "sizeError",
      "update:fileList",
      "onSelectFiles",
    ],
    setup(e, r) {
      var { emit: n, slots: o, expose: i } = r,
        s = v("locale", ht),
        u = a(() => (s instanceof Object && "value" in s ? s.value : s)),
        d = l([...(e.fileList || [])]),
        p = S({});
      c(
        () => e.fileList,
        (e) => {
          d.value = e || [];
        },
        { deep: !0 }
      );
      var m = (e) =>
          e < 1024
            ? e + "B"
            : e < 1048576
              ? (e / 1024).toFixed(2) + "KB"
              : e < 1073741824
                ? (e / 1048576).toFixed(2) + "MB"
                : (e / 1073741824).toFixed(2) + "GB",
        h = (e) => {
          (n("update:fileList", d.value), n("change", { file: e, fileList: d.value }));
        },
        f = (t) => {
          for (
            var l,
              a = null === (l = d.value) || void 0 === l ? void 0 : l.length,
              { limit: r, minSize: o, maxSize: i } = e,
              s = 0;
            s < t.length;
            s++
          ) {
            var c = t[s];
            if (".DS_Store" != c.name) {
              var v = {
                uid: Kr(),
                filename: c.name,
                size: m(c.size),
                status: "wait",
                percent: 0,
                preview: null,
              };
              if (r && a + s >= r) return void n("exceed");
              if ((c.type || "").indexOf("image/") >= 0) {
                var p = function () {
                  return /\.(png|jpe?g|gif|webp|bmp|ico|svg|avif|apng)$/i.test(
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  );
                };
                p(c.name) && (v.preview = window.URL.createObjectURL(c));
              }
              (void 0 !== o && o >= 0 && c.size / 1024 < o) ||
              (void 0 !== i && i >= 0 && c.size / 1024 > i)
                ? ((v.errorText = null == u ? void 0 : u.value.k.upload.errorFileSize),
                  (v.status = "error"),
                  d.value.push(v),
                  h(v),
                  n("sizeError", { file: v, fileList: d.value }))
                : g({ item: v, file: c });
            }
          }
          n("onSelectFiles", d.value);
        },
        g = (t) => {
          var { item: l, file: a } = t;
          d.value.push(l);
          var r = d.value.find((e) => e.uid === l.uid);
          r && ((p[r.uid] = a), h(r), e.autoTrigger && y(r, a));
        },
        k = (e) => {
          var { index: t, file: l } = e,
            a = d.value[t];
          a &&
            (a.xhr && a.xhr.abort(),
            d.value.splice(t, 1),
            delete p[l.uid],
            l.preview && window.URL.revokeObjectURL(l.preview),
            n("update:fileList", d.value),
            n("remove", { file: l, fileList: d.value }));
        },
        y = (function () {
          var t,
            l =
              ((t = function* (t, l) {
                if ((n("beforeUpload", { file: t, fileList: d.value }), e.transformFile)) {
                  var a = e.transformFile(l);
                  a instanceof Promise ? a.then((e) => b(t, e)) : b(t, a);
                } else b(t, l);
              }),
              function () {
                var e = this,
                  l = arguments;
                return new Promise(function (a, r) {
                  var n = t.apply(e, l);
                  function o(e) {
                    D(n, a, r, o, i, "next", e);
                  }
                  function i(e) {
                    D(n, a, r, o, i, "throw", e);
                  }
                  o(void 0);
                });
              });
          return function (e, t) {
            return l.apply(this, arguments);
          };
        })(),
        b = (t, l) => {
          var { action: a, name: r, headers: n, data: o } = e,
            i = new FormData();
          if ((i.append(r, l), o)) for (var s in o) i.append(s, o[s]);
          var u = new XMLHttpRequest();
          if (((t.xhr = u), u.open("post", a), n)) for (var c in n) u.setRequestHeader(c, n[c]);
          ((u.onreadystatechange = () => {
            if (4 === u.readyState)
              if (200 === u.status) {
                ((t.status = "success"), (t.percent = 100));
                try {
                  t.response = JSON.parse(u.responseText);
                } catch (e) {
                  t.response = u.responseText;
                }
                (delete p[t.uid], h(t));
              } else d();
          }),
            (u.upload.onloadstart = () => {
              ((t.status = "uploading"), h(t));
            }),
            (u.upload.onprogress = (e) => {
              e.lengthComputable && (t.percent = (e.loaded / e.total) * 100);
            }));
          var d = () => {
            ((t.status = "error"), delete p[t.uid], h(t));
          };
          ((u.onerror = d), u.send(i));
        };
      return (
        i({
          upload: () => {
            e.autoTrigger ||
              e.disabled ||
              Object.keys(p).forEach((e) => {
                var t = d.value.find((t) => t.uid === e),
                  l = p[e];
                t && l && "wait" === t.status && y(t, l);
              });
          },
        }),
        () => {
          var {
              type: l,
              showUploadList: a,
              uploadIcon: r,
              name: n,
              accept: i,
              multiple: s,
              directory: c,
              limit: v,
              uploadText: p,
              uploadSubText: m,
              draggable: h,
              disabled: g,
            } = e,
            y = "picture" === l,
            b = {
              type: l,
              disabled: g,
              name: n,
              accept: i,
              multiple: s,
              directory: c,
              limit: v,
              uploadText: p,
              uploadSubText: m,
              draggable: h,
              fileList: d.value,
              uploadIcon: r,
              locale: u.value,
              onSelect: f,
            },
            w = t(Er, b, {
              default: () => {
                var e;
                return null === (e = o.default) || void 0 === e ? void 0 : e.call(o);
              },
            }),
            x = {
              type: l,
              fileList: d.value,
              showUploadList: a,
              disabled: g,
              locale: u.value,
              onRemove: k,
            },
            S = t(Lr, x, { selector: () => w });
          return t(
            "div",
            {
              class: [
                "k-upload",
                { "k-upload-disabled": g, "k-upload-picture": y, "k-upload-drag": h },
              ],
            },
            [y ? S : [w, S]]
          );
        }
      );
    },
  }),
  _r = j(Rr),
  Ur = "theme-mode",
  Hr = () => {
    var e = "dark" == localStorage.getItem(Ur),
      t = document.documentElement;
    return (
      e
        ? (t.setAttribute(Ur, "light"), localStorage.setItem(Ur, "light"))
        : (t.setAttribute(Ur, "dark"), localStorage.setItem(Ur, "dark")),
      !e
    );
  },
  $r = {
    name: "Theme",
    install(e) {
      e.prototype.$theme = $r;
    },
    useTheme: () => $r,
    setThemeMode(e, t) {
      var l = e.clientX,
        a = e.clientY,
        r = Math.hypot(Math.max(l, window.innerWidth - l), Math.max(a, window.innerHeight - a)),
        n = document.documentElement,
        o = "dark" == localStorage.getItem("theme");
      "function" == typeof document.startViewTransition
        ? document
            .startViewTransition(() => {
              ((o = Hr()), null == t || t(o));
            })
            .ready.then(() => {
              var e = [
                "circle(0px at ".concat(l, "px ").concat(a, "px)"),
                "circle(".concat(r, "px at ").concat(l, "px ").concat(a, "px)"),
              ];
              n.animate(
                { clipPath: o ? e : e.reverse() },
                {
                  duration: 500,
                  easing: "ease-in-out",
                  pseudoElement: o ? "::view-transition-new(root)" : "::view-transition-old(root)",
                }
              ).onfinish = () => {};
            })
        : ((o = Hr()), null == t || t(o));
    },
  },
  Wr = j($r),
  qr = Aa,
  Gr = Object.freeze({
    __proto__: null,
    Affix: Me,
    Alert: xe,
    Avatar: ze,
    BackTop: Ye,
    Badge: Fe,
    Breadcrumb: Be,
    BreadcrumbItem: Ae,
    Button: Pe,
    ButtonGroup: je,
    Card: rl,
    Carousel: ol,
    CarouselItem: il,
    Checkbox: dl,
    CheckboxGroup: pl,
    Col: Ul,
    Collapse: ul,
    CollapsePanel: cl,
    ColorPicker: al,
    ConfigProvider: cr,
    Content: ba,
    DatePicker: Al,
    Descriptions: Dl,
    DescriptionsItem: Ol,
    Divider: Yl,
    Drawer: Ll,
    Dropdown: jl,
    DropdownButton: Fl,
    Empty: gt,
    Flex: $l,
    Footer: ka,
    Form: Rl,
    FormItem: Hl,
    Header: ga,
    Icon: I,
    ImageGroup: ia,
    Input: ct,
    InputGroup: it,
    InputNumber: dt,
    KImage: na,
    KSwitch: yr,
    Layout: ha,
    Menu: La,
    MenuDivider: ja,
    MenuGroup: Pa,
    MenuItem: Da,
    Modal: qr,
    Option: mt,
    Page: qa,
    Popconfirm: Xa,
    Poptip: Ga,
    Progress: Za,
    Radio: Ja,
    RadioButton: Qa,
    RadioGroup: er,
    Rate: ar,
    Row: _l,
    Select: yt,
    Sider: ya,
    Skeleton: dr,
    SkeletonAvatar: vr,
    SkeletonButton: pr,
    SkeletonImage: mr,
    SkeletonText: hr,
    Slider: Xl,
    Space: fr,
    Spin: gr,
    StatCard: ur,
    StatNumber: ir,
    SubMenu: Va,
    TabPanel: Mr,
    Table: wr,
    Tabs: Sr,
    Tag: Dr,
    TextArea: pt,
    TimeLine: Cr,
    TimeLineItem: zr,
    Tooltip: Wl,
    Tree: Or,
    TreeSelect: Vr,
    Upload: _r,
    loading: Ca,
    message: Ha,
    modal: Aa,
    notice: Wa,
    theme: Wr,
  }),
  Xr = {
    version: V,
    lang: {},
    install: function (e) {
      (Object.keys(Gr).forEach((t) => {
        var l = Gr[t];
        if (!t.startsWith("K")) {
          var a =
            "k-" +
            t
              .replace(/([A-Z])/g, "-$1")
              .replace(/^-/, "")
              .toLowerCase();
          e.component(a, l);
        }
        e.component(t, l);
      }),
        (e.config.globalProperties.$message = Ha),
        (e.config.globalProperties.$notice = Wa),
        (e.config.globalProperties.$modal = Aa),
        (e.config.globalProperties.$loading = Ca),
        (e.config.globalProperties.$image = na),
        (e.config.globalProperties.$theme = Wr));
    },
  };
export {
  Me as Affix,
  xe as Alert,
  ze as Avatar,
  Ye as BackTop,
  Fe as Badge,
  Be as Breadcrumb,
  Ae as BreadcrumbItem,
  Pe as Button,
  je as ButtonGroup,
  rl as Card,
  ol as Carousel,
  il as CarouselItem,
  dl as Checkbox,
  pl as CheckboxGroup,
  Ul as Col,
  ul as Collapse,
  cl as CollapsePanel,
  al as ColorPicker,
  cr as ConfigProvider,
  ba as Content,
  Al as DatePicker,
  Dl as Descriptions,
  Ol as DescriptionsItem,
  Yl as Divider,
  Ll as Drawer,
  jl as Dropdown,
  Fl as DropdownButton,
  gt as Empty,
  $l as Flex,
  ka as Footer,
  Rl as Form,
  Hl as FormItem,
  ga as Header,
  I as Icon,
  ia as ImageGroup,
  ct as Input,
  it as InputGroup,
  dt as InputNumber,
  na as KImage,
  yr as KSwitch,
  ha as Layout,
  La as Menu,
  ja as MenuDivider,
  Pa as MenuGroup,
  Da as MenuItem,
  qr as Modal,
  mt as Option,
  qa as Page,
  Xa as Popconfirm,
  Ga as Poptip,
  Za as Progress,
  Ja as Radio,
  Qa as RadioButton,
  er as RadioGroup,
  ar as Rate,
  _l as Row,
  yt as Select,
  ya as Sider,
  dr as Skeleton,
  vr as SkeletonAvatar,
  pr as SkeletonButton,
  mr as SkeletonImage,
  hr as SkeletonText,
  Xl as Slider,
  fr as Space,
  gr as Spin,
  ur as StatCard,
  ir as StatNumber,
  Va as SubMenu,
  Mr as TabPanel,
  wr as Table,
  Sr as Tabs,
  Dr as Tag,
  pt as TextArea,
  Cr as TimeLine,
  zr as TimeLineItem,
  Wl as Tooltip,
  Or as Tree,
  Vr as TreeSelect,
  _r as Upload,
  Xr as default,
  Ca as loading,
  Ha as message,
  Aa as modal,
  Wa as notice,
  Wr as theme,
};

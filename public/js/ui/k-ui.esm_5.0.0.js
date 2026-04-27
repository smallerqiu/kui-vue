/*!
 * kui-vue v5.0.0
 * Copyright 2017-present, kui-vue.
 * All rights reserved.
 * Homepage: https://k-ui.cn
 * Author: Qiu / https://chuchur.com
 */

import zh_CN_default from "./locale/zh-CN.js";
import { Comment, Fragment, Text, Transition, TransitionGroup, cloneVNode, computed, createTextVNode, createVNode, defineComponent, getCurrentInstance, h, inject, isVNode, mergeProps, nextTick, onBeforeMount, onBeforeUnmount, onMounted, onUnmounted, onUpdated, provide, reactive, readonly, ref, render, resolveDirective, toRefs, vShow, watch, withDirectives } from "vue";
import dayjs from "dayjs";
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
//#region components/directives/resize.ts
var resize = {
	mounted(_, { value }) {
		window.addEventListener("resize", value);
	},
	unmounted(_, { value }) {
		window.removeEventListener("resize", value);
	}
};
//#endregion
//#region components/affix/index.tsx
var Affix = /* @__PURE__ */ defineComponent({
	name: "Affix",
	directives: { resize },
	props: {
		offsetTop: {
			type: Number,
			default: 0
		},
		offsetBottom: Number,
		target: {
			type: Function,
			default: () => {
				return typeof window !== "undefined" ? window : null;
			}
		},
		onChange: { type: Function }
	},
	setup(props, { slots, emit }) {
		const affixRef = ref();
		const fixed = ref(false);
		const styles = ref({});
		const placeholderStyles = ref({});
		let resizeObserver = null;
		let target = null;
		const getTarget = () => {
			const res = props.target?.();
			return res?.value || res;
		};
		const updatePosition = () => {
			if (!affixRef.value || !target) return;
			const rect = affixRef.value.getBoundingClientRect();
			const targetRect = !(target === window) ? target.getBoundingClientRect() : {
				top: 0,
				bottom: window.innerHeight
			};
			let isFixed = false;
			if (props.offsetBottom !== void 0) if (targetRect.bottom - rect.bottom - props.offsetBottom <= 0) {
				isFixed = true;
				styles.value = {
					position: "fixed",
					bottom: `${window.innerHeight - targetRect.bottom + props.offsetBottom}px`,
					width: `${rect.width}px`
				};
			} else {
				isFixed = false;
				styles.value = {};
			}
			else if (rect.top - targetRect.top - (props.offsetTop || 0) <= 0) {
				isFixed = true;
				styles.value = {
					position: "fixed",
					top: `${targetRect.top + (props.offsetTop || 0)}px`,
					width: `${rect.width}px`
				};
			} else {
				isFixed = false;
				styles.value = {};
			}
			placeholderStyles.value = isFixed ? {
				height: `${rect.height}px`,
				width: `${rect.width}px`
			} : {};
			if (fixed.value !== isFixed) {
				fixed.value = isFixed;
				emit("change", isFixed);
			}
		};
		const removeEventListeners = () => {
			target?.removeEventListener("scroll", updatePosition);
			window.removeEventListener("resize", updatePosition);
			resizeObserver?.disconnect();
			resizeObserver = null;
		};
		const addEventListeners = () => {
			target = getTarget();
			if (!target) return;
			target.addEventListener("scroll", updatePosition);
			window.addEventListener("resize", updatePosition);
			if (target !== window && "ResizeObserver" in window) {
				resizeObserver = new ResizeObserver(updatePosition);
				resizeObserver.observe(target);
			}
			updatePosition();
		};
		onBeforeUnmount(() => {
			removeEventListeners();
		});
		onMounted(() => {
			nextTick(addEventListeners);
		});
		watch(() => [
			props.offsetTop,
			props.offsetBottom,
			props.target
		], () => {
			removeEventListeners();
			nextTick(addEventListeners);
		});
		return () => {
			return withDirectives(createVNode("div", {
				ref: affixRef,
				style: placeholderStyles.value
			}, [createVNode("div", {
				style: styles.value,
				class: ["k-affix", { "k-affix-fixed": fixed.value }]
			}, [slots.default?.()])]), [[resolveDirective("resize"), updatePosition]]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/kui-icons@5.0.0/node_modules/kui-icons/dist/kui-icons.esm.js
var ArrowDown = [{
	d: "M12 5V19 M19 12L12 19L5 12",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var ArrowLeft = [{
	d: "M12 19L5 12L12 5 M19 12H5",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var ArrowRight = [{
	d: "M5 12H19 M12 5L19 12L12 19",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var ArrowUp = [{
	d: "M5 12L12 5L19 12 M12 19V5",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var CalendarDays = [{
	d: "M8 2V6 M16 2V6 M5 4H19A2 2 0 0 1 21 6V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V6A2 2 0 0 1 5 4z M3 10H21 M8 14H8 M12 14H12 M16 14H16 M8 18H8 M12 18H12 M16 18H16",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Check = [{
	d: "M20 6L9 17L4 12",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var ChevronDown = [{
	d: "M6 9L12 15L18 9",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var ChevronLeft = [{
	d: "M15 18L9 12L15 6",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var ChevronRight = [{
	d: "M9 18L15 12L9 6",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var ChevronUp = [{
	d: "M18 15L12 9L6 15",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var ChevronsLeft = [{
	d: "M11 17L6 12L11 7 M18 17L13 12L18 7",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var ChevronsRight = [{
	d: "M6 17L11 12L6 7 M13 17L18 12L13 7",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var CircleAlert = [{
	d: "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12z M12 8L12 12 M12 16L12 16",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var CircleCheck = [{
	d: "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12z M9 12L11 14L15 10",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var CircleMinus = [{
	d: "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12z M8 12H16",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var CirclePlus = [{
	d: "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12z M8 12H16 M12 8V16",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var CircleQuestionMark = [{
	d: "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12z M9 9A3 3 0 0 1 15 10C15 12 12 13 12 13 M12 17H12",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var CircleX = [{
	d: "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12z M15 9L9 15 M9 9L15 15",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Clock = [{
	d: "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12z M12 6V12L16 14",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Ellipsis = [{
	d: "M11 12A1 1 0 1 0 13 12A1 1 0 1 0 11 12z M18 12A1 1 0 1 0 20 12A1 1 0 1 0 18 12z M4 12A1 1 0 1 0 6 12A1 1 0 1 0 4 12z",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var EyeOff = [{
	d: "M10.75 5A10.75 10.75 0 0 1 22 11.75A1 1 0 0 1 22 12.25A10.75 10.75 0 0 1 20.5 14.75 M14 14.25A3 3 0 0 1 9.75 10 M17.5 17.5A10.75 10.75 0 0 1 2 12.25A1 1 0 0 1 2 11.75A10.75 10.75 0 0 1 6.5 6.5 M2 2L22 22",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Eye = [{
	d: "M2 12.25A1 1 0 0 1 2 11.75A10.75 10.75 0 0 1 22 11.75A1 1 0 0 1 22 12.25A10.75 10.75 0 0 1 2 12.25 M9 12A3 3 0 1 0 15 12A3 3 0 1 0 9 12z",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var FileText = [{
	d: "M6 22A2 2 0 0 1 4 20V4A2 2 0 0 1 6 2H14A2.5 2.5 0 0 1 15.75 2.75L19.25 6.25A2.5 2.5 0 0 1 20 8V20A2 2 0 0 1 18 22z M14 2V7A1 1 0 0 0 15 8H20 M10 9H8 M16 13H8 M16 17H8",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Image$1 = [{
	d: "M5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3z M7 9A2 2 0 1 0 11 9A2 2 0 1 0 7 9z M21 15L18 12A2 2 0 0 0 15 12L6 21",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Images = [{
	d: "M22 11L20.75 9.75A2.5 2.5 0 0 0 17.25 9.75L11 16 M4 8A2 2 0 0 0 2 10V20A2 2 0 0 0 4 22H14A2 2 0 0 0 16 20 M10 2H20A2 2 0 0 1 22 4V14A2 2 0 0 1 20 16H10A2 2 0 0 1 8 14V4A2 2 0 0 1 10 2z",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}, {
	d: "M12 7A1 1 0 1 0 14 7A1 1 0 1 0 12 7z",
	s: "fill:currentcolor;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Inbox = [{
	d: "M22 12L16 12L14 15L10 15L8 12L2 12 M5.5 5L2 12V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V12L18.5 5A2 2 0 0 0 16.75 4H7.25A2 2 0 0 0 5.5 5z",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Info = [{
	d: "M2 12A10 10 0 1 0 22 12A10 10 0 1 0 2 12z M12 16V12 M12 8H12",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var LoaderCircle = [{
	d: "M21 12A9 9 0 1 1 14.75 3.5",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Loading = [{
	d: "M22.5 10.5Q22.25 7 19.75 4.25T13.5 1.5Q13.25 1.5 13 1.75T12.75 2.25Q12.75 2.75 13 3T13.5 3.25Q14.75 3.25 16 3.75Q17.5 4.5 18.5 5.5T20.25 8Q20.75 9.25 20.75 10.5Q21 11 21 11.25T21.75 11.25Q22 11.25 22.25 11Q22.5 10.75 22.5 10.5z",
	s: "fill:currentcolor"
}];
var Minus = [{
	d: "M5 12H19",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Plus = [{
	d: "M5 12H19 M12 5V19",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var RotateCcwSquare = [{
	d: "M20 9V7A2 2 0 0 0 18 5H12 M15 2L12 5L15 8 M20 13V18A2 2 0 0 1 18 20H6A2 2 0 0 1 4 18V7A2 2 0 0 1 6 5H8",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var RotateCwSquare = [{
	d: "M12 5H6A2 2 0 0 0 4 7V10 M9 8L12 5L9 2 M4 14V18A2 2 0 0 0 6 20H18A2 2 0 0 0 20 18V7A2 2 0 0 0 18 5H16",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Search = [{
	d: "M21 21L16.75 16.75 M3 11A8 8 0 1 0 19 11A8 8 0 1 0 3 11z",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var Star = [{
	d: "M11.5 2.25A0.5 0.5 0 0 1 12.5 2.25L14.75 7A2 2 0 0 0 16.5 8.25L21.5 9A0.5 0.5 0 0 1 21.75 9.75L18 13.5A2 2 0 0 0 17.5 15.25L18.5 20.5A0.5 0.5 0 0 1 17.5 21L13 18.5A2 2 0 0 0 11 18.5L6.5 21A0.5 0.5 0 0 1 5.75 20.5L6.5 15.25A2 2 0 0 0 6 13.5L2.25 9.75A0.5 0.5 0 0 1 2.5 9L7.5 8.25A2 2 0 0 0 9.25 7z",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
var X = [{
	d: "M18 6L6 18 M6 6L18 18",
	s: "fill:none;stroke:currentcolor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round"
}];
//#endregion
//#region components/base/transition.ts
function getTransitionProp(name) {
	return {
		name,
		onBeforeEnter(el) {
			el.style.overflow = "hidden";
			el.style.height = "0";
			el.style.opacity = "0.1";
		},
		onEnter(el) {
			if (el.scrollHeight !== 0) {
				el.style.height = el.scrollHeight + "px";
				el.style.opacity = "1";
			} else {
				el.style.height = "";
				el.style.opacity = "";
			}
		},
		onAfterEnter(el) {
			el.style.height = "";
			el.style.overflow = "";
			el.style.opacity = "";
		},
		onBeforeLeave(el) {
			el.style.height = el.scrollHeight + "px";
			el.style.opacity = "1";
		},
		onLeave(el) {
			if (el.scrollHeight !== 0) {
				el.style.height = "0";
				el.style.paddingTop = "0";
				el.style.paddingBottom = "0";
				el.style.marginTop = "0";
				el.style.marginBottom = "0";
				el.style.opacity = "0";
			}
		},
		onAfterLeave(el) {
			el.style.height = "";
			el.style.paddingTop = "";
			el.style.paddingBottom = "";
			el.style.marginTop = "";
			el.style.marginBottom = "";
			el.style.opacity = "";
			el.style.overflow = "";
		}
	};
}
//#endregion
//#region components/icon/index.tsx
var parseStyle = (styleString) => {
	const styles = {};
	if (!styleString) return styles;
	styleString.split(";").forEach((rule) => {
		const [property, value] = rule.split(":");
		if (property && value) {
			const propName = property.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
			styles[propName] = value.trim();
		}
	});
	return styles;
};
var Icon = /* @__PURE__ */ defineComponent({
	name: "Icon",
	props: {
		type: Array,
		size: [String, Number],
		color: String,
		spin: Boolean,
		strokeWidth: {
			type: [String, Number],
			default: 2
		},
		onClick: Function,
		reverseFill: Boolean
	},
	setup(props, { attrs, emit }) {
		const renderPaths = () => {
			return (Array.isArray(props.type) ? props.type : []).map((i) => {
				const styleObj = parseStyle(i.s || "");
				if (props.reverseFill && styleObj["stroke"] == "currentcolor" && styleObj["fill"] == "none") {
					styleObj["fill"] = "currentColor";
					styleObj["stroke"] = "none";
				}
				if (props.strokeWidth) styleObj.strokeWidth = props.strokeWidth;
				return createVNode("path", {
					d: i.d,
					style: styleObj
				}, null);
			});
		};
		return () => {
			const styles = { color: props.color };
			if (props.size) styles.fontSize = `${props.size}px`;
			return createVNode("i", {
				...attrs,
				style: styles,
				class: ["k-icon", { "k-load-loop": props.spin }],
				onClick: (e) => emit("click", e)
			}, [createVNode("svg", {
				"viewBox": "0 0 24 24",
				"width": "1em",
				"height": "1em"
			}, [renderPaths()])]);
		};
	}
});
//#endregion
//#region components/alert/index.tsx
var Alert = /* @__PURE__ */ defineComponent({
	name: "Alert",
	props: {
		type: {
			type: String,
			default: "warning"
		},
		closable: Boolean,
		showIcon: {
			type: Boolean,
			default: true
		},
		icon: [Array],
		message: String,
		description: String,
		bordered: Boolean,
		onClose: { type: Function }
	},
	setup(props, { emit, slots }) {
		const closed = ref(false);
		const close = (e) => {
			closed.value = true;
			emit("close", e);
		};
		const icons = {
			info: Info,
			error: CircleX,
			success: CircleCheck,
			warning: CircleAlert
		};
		const transitionProps = getTransitionProp("k-alert-slide");
		return () => {
			const iconNode = props.showIcon ? createVNode(Icon, {
				"type": props.icon ? props.icon : icons[props.type],
				"class": "k-alert-icon"
			}, null) : null;
			const closeIcon = props.closable ? createVNode(Icon, {
				"class": "k-alert-close",
				"type": X,
				"onClick": close
			}, null) : null;
			const descriptionNode = props.description ? createVNode("div", { "class": "k-alert-description" }, [props.description]) : null;
			const msgNode = createVNode("div", { "class": "k-alert-message" }, [props.message || slots.default?.()]);
			const innerProps = { class: ["k-alert", {
				[`k-alert-${props.type}`]: props.type,
				"k-alert-has-icon": props.showIcon,
				"k-alert-has-close": props.closable,
				"k-alert-bordered": props.bordered,
				"k-alert-has-description": props.description
			}] };
			return createVNode(Transition, transitionProps, { default: () => [withDirectives(createVNode("div", innerProps, [
				iconNode,
				createVNode("div", { "class": "k-alert-content" }, [msgNode, descriptionNode]),
				closeIcon
			]), [[vShow, !closed.value]])] });
		};
	}
});
//#endregion
//#region components/anchor/anchor.tsx
var Anchor = /* @__PURE__ */ defineComponent({
	name: "Anchor",
	props: {
		affix: {
			type: Boolean,
			default: true
		},
		offsetTop: {
			type: Number,
			default: 0
		},
		bounds: {
			type: Number,
			default: 5
		},
		container: [String, Object]
	},
	setup(props, { slots, emit, attrs }) {
		const activeLink = ref("");
		const inkTop = ref(0);
		const inkHeight = ref(0);
		const links = /* @__PURE__ */ new Set();
		const anchorRef = ref(null);
		let isClickScrolling = false;
		const getContainer = () => {
			if (!props.container) return window;
			if (typeof props.container === "string") return document.querySelector(props.container) || window;
			return props.container;
		};
		const updateInk = () => {
			nextTick(() => {
				const activeNode = anchorRef.value?.querySelector(".k-anchor-link-active > .k-anchor-link-title");
				if (activeNode instanceof HTMLElement) {
					inkTop.value = activeNode.parentElement.offsetTop + 4;
					inkHeight.value = activeNode.clientHeight;
				} else {
					inkTop.value = 0;
					inkHeight.value = 0;
				}
			});
		};
		const handleScroll = () => {
			if (isClickScrolling) return;
			const linkList = Array.from(links);
			const container = getContainer();
			const containerScrollTop = container === window ? window.pageYOffset : container.scrollTop;
			const anchorTargets = linkList.map((link) => {
				const target = document.querySelector(link);
				return target ? {
					link,
					offsetTop: target.offsetTop
				} : null;
			}).filter((item) => item !== null).sort((a, b) => a.offsetTop - b.offsetTop);
			let current = "";
			for (let i = anchorTargets.length - 1; i >= 0; i--) {
				const { link, offsetTop } = anchorTargets[i];
				if (containerScrollTop >= offsetTop - props.offsetTop - props.bounds) {
					current = link;
					break;
				}
			}
			if (current && activeLink.value !== current) {
				activeLink.value = current;
				emit("change", current);
			}
		};
		watch(activeLink, updateInk);
		const handleScrollTo = (link) => {
			const target = document.querySelector(link);
			if (!target) return;
			isClickScrolling = true;
			activeLink.value = link;
			emit("click", link);
			const container = getContainer();
			const elementTop = target.offsetTop - props.offsetTop;
			container.scrollTo({
				top: elementTop,
				behavior: "smooth"
			});
			setTimeout(() => {
				isClickScrolling = false;
				updateInk();
			}, 600);
		};
		provide("kAnchor", {
			activeLink,
			registerLink: (link) => links.add(link),
			unregisterLink: (link) => links.delete(link),
			handleScrollTo
		});
		onMounted(() => {
			getContainer().addEventListener("scroll", handleScroll);
			setTimeout(handleScroll, 100);
		});
		onBeforeUnmount(() => {
			getContainer().removeEventListener("scroll", handleScroll);
		});
		return () => {
			return createVNode("div", {
				...attrs,
				class: ["k-anchor-wrapper", { "k-anchor-affix": props.affix }],
				ref: anchorRef
			}, [createVNode("div", { "class": "k-anchor" }, [createVNode("span", {
				class: "k-anchor-ink-ball",
				style: {
					top: `${inkTop.value}px`,
					height: `${inkHeight.value}px`,
					opacity: activeLink.value ? 1 : 0
				}
			}, null), slots.default?.()])]);
		};
	}
});
//#endregion
//#region components/anchor/anchor-link.tsx
var AnchorLink = /* @__PURE__ */ defineComponent({
	name: "AnchorLink",
	props: {
		href: {
			type: String,
			required: true
		},
		title: String
	},
	setup(props, { slots, attrs }) {
		const anchorContext = inject("kAnchor", null);
		onMounted(() => {
			props.href && anchorContext?.registerLink(props.href);
		});
		onBeforeUnmount(() => {
			props.href && anchorContext?.unregisterLink(props.href);
		});
		const handleClick = (e) => {
			e.preventDefault();
			props.href && anchorContext?.handleScrollTo(props.href);
		};
		return () => {
			return createVNode("div", { class: ["k-anchor-link", { "k-anchor-link-active": anchorContext?.activeLink.value === props.href }] }, [createVNode("a", {
				...attrs,
				href: props.href,
				class: "k-anchor-link-title",
				title: props.title,
				onClick: handleClick
			}, [slots.title ? slots.title() : props.title]), slots.default?.()]);
		};
	}
});
//#endregion
//#region components/avatar/avatar.tsx
var Avatar = /* @__PURE__ */ defineComponent({
	name: "Avatar",
	props: {
		icon: [Array],
		shape: {
			type: String,
			default: "circle"
		},
		size: {
			type: [Number, String],
			default: "default"
		},
		src: String
	},
	setup(props, { slots }) {
		const group = inject("KAvatarGroup", null);
		const innerRef = ref(null);
		const rootRef = ref(null);
		const textStyles = ref({});
		let observer = null;
		const computedSize = computed(() => group?.size?.value || props.size);
		const computedShape = computed(() => group?.shape?.value || props.shape);
		const updateSize = () => {
			if (innerRef.value && rootRef.value) {
				const max = rootRef.value.offsetWidth - 8;
				const innerWidth = innerRef.value.offsetWidth || innerRef.value.scrollWidth;
				if (innerWidth > 0 && innerWidth > max) textStyles.value = { transform: `scale(${Math.min(max / innerWidth, 1)}) translateX(-50%)` };
				else textStyles.value = { transform: "scale(1) translateX(-50%)" };
			}
		};
		onMounted(() => {
			observer = new ResizeObserver(() => {
				window.requestAnimationFrame(updateSize);
			});
			if (rootRef.value) observer.observe(rootRef.value);
			if (innerRef.value) observer.observe(innerRef.value);
			updateSize();
		});
		onBeforeUnmount(() => {
			observer?.disconnect();
			observer = null;
		});
		return () => {
			const sizeVal = computedSize.value;
			const shapeVal = computedShape.value;
			const { src, icon } = props;
			const rootStyles = {};
			if (typeof sizeVal === "number") {
				rootStyles.width = `${sizeVal}px`;
				rootStyles.height = `${sizeVal}px`;
				rootStyles.lineHeight = `${sizeVal}px`;
				rootStyles.fontSize = `${sizeVal / 2}px`;
			}
			const children = slots.default?.();
			const hasIcon = children?.some((c) => c.type?.name === "Icon");
			const isText = children?.length === 1 && typeof children[0].children === "string";
			const rootProps = {
				ref: rootRef,
				style: rootStyles,
				class: ["k-avatar", {
					"k-avatar-lg": sizeVal === "large",
					"k-avatar-sm": sizeVal === "small",
					"k-avatar-image": src,
					"k-avatar-icon": icon || hasIcon,
					"k-avatar-square": shapeVal === "square"
				}]
			};
			const textProps = {
				ref: innerRef,
				class: "k-avatar-string",
				style: textStyles.value
			};
			return createVNode("div", rootProps, [icon ? createVNode(Icon, { "type": icon }, null) : src ? createVNode("img", {
				"src": src,
				"alt": ""
			}, null) : isText ? createVNode("span", textProps, [children]) : children]);
		};
	}
});
//#endregion
//#region components/utils/vnode.tsx
function cloneNodes(vnode, props, merge = false, cloneTransition) {
	return vnode.length == 1 ? cloneVNode(vnode[0], props, merge) : cloneVNode(createVNode("span", null, [vnode]), props, merge, cloneTransition);
}
function getChildren(VNodes) {
	const result = [];
	const loop = (nodes) => {
		nodes?.forEach((vnode) => {
			if (!isVNode(vnode)) return;
			if (vnode.type === Comment) return;
			if (vnode.type === Text && vnode.children?.toString().trim() === "") return;
			if (vnode.type === Fragment && Array.isArray(vnode.children)) {
				loop(vnode.children);
				return;
			}
			result.push(vnode);
		});
	};
	loop(VNodes);
	return result;
}
var scrollbarWidth = null;
var getScrollbarWidth = () => {
	if (scrollbarWidth !== null) return scrollbarWidth;
	const outer = document.createElement("div");
	outer.style.visibility = "hidden";
	outer.style.overflow = "scroll";
	document.body.appendChild(outer);
	const inner = document.createElement("div");
	outer.appendChild(inner);
	scrollbarWidth = outer.offsetWidth - outer.clientWidth;
	outer.parentNode?.removeChild(outer);
	return scrollbarWidth;
};
var injectedStyles = /* @__PURE__ */ new Map();
var toggleContainerScroll = (target, lock) => {
	if (!target || target != document.body) return;
	if (lock) {
		if (injectedStyles.has("body")) return;
		const scrollbarWidth = getScrollbarWidth();
		const styleElement = document.createElement("style");
		styleElement.type = "text/css";
		const styleContent = `html body { overflow: hidden !important; width: calc(100vw - ${scrollbarWidth}px); }`;
		styleElement.appendChild(document.createTextNode(styleContent));
		document.head.appendChild(styleElement);
		injectedStyles.set("body", styleElement);
	} else {
		const styleElement = injectedStyles.get("body");
		if (styleElement && styleElement.parentNode) {
			styleElement.parentNode.removeChild(styleElement);
			injectedStyles.delete("body");
		}
	}
};
var AvatarGroup = /* @__PURE__ */ defineComponent({
	name: "AvatarGroup",
	props: {
		maxCount: Number,
		shape: {
			type: String,
			default: "circle"
		},
		size: {
			type: [String, Number],
			default: "default"
		}
	},
	setup(props, { slots }) {
		const { shape, size } = toRefs(props);
		provide("KAvatarGroup", {
			shape,
			size
		});
		return () => {
			const children = getChildren(slots.default?.());
			const { maxCount } = props;
			let childrenToShow = [...children];
			if (maxCount && maxCount < children.length) {
				childrenToShow = children.slice(0, maxCount);
				const restCount = children.length - maxCount;
				childrenToShow.push(createVNode(Avatar, {
					"shape": props.shape,
					"size": props.size
				}, { default: () => [`+${restCount}`] }));
			}
			return createVNode("div", { class: "k-avatar-group" }, [childrenToShow]);
		};
	}
});
//#endregion
//#region components/breadcrumb/breadcrumb.tsx
var Breadcrumb = /* @__PURE__ */ defineComponent({
	name: "Breadcrumb",
	props: { separator: {
		type: [String, Object],
		default: "/"
	} },
	setup(props, { slots }) {
		provide("separator", slots.separator?.() || props.separator);
		return () => {
			return createVNode("nav", { class: "k-breadcrumb" }, [createVNode("ol", null, [slots.default?.()])]);
		};
	}
});
//#endregion
//#region components/breadcrumb/breadcrumb-item.tsx
var BreadcrumbItem = /* @__PURE__ */ defineComponent({
	name: "BreadcrumbItem",
	props: {
		href: String,
		icon: [Array]
	},
	setup(props, { slots, emit }) {
		const separator = inject("separator", null);
		return () => {
			const iconNode = slots.icon ? slots.icon() : props.icon ? createVNode(Icon, { "type": props.icon }, null) : null;
			const itemProps = {
				class: "k-breadcrumb-item",
				onClick: (e) => emit("click", e)
			};
			const linkProps = {
				class: "k-breadcrumb-link",
				href: props.href
			};
			const content = [iconNode, slots.default?.()];
			return createVNode("li", itemProps, [props.href ? createVNode("a", linkProps, [content]) : createVNode("span", { "class": "k-breadcrumb-link" }, [content]), createVNode("span", { "class": "k-breadcrumb-separator" }, [separator])]);
		};
	}
});
//#endregion
//#region components/back-top/index.tsx
var BackTop = /* @__PURE__ */ defineComponent({
	name: "BackTop",
	directives: { scroll: {
		mounted(_, { value }) {
			window.addEventListener("scroll", value);
		},
		unmounted(_, { value }) {
			window.removeEventListener("scroll", value);
		}
	} },
	props: {
		height: {
			type: Number,
			default: 100
		},
		right: Number,
		bottom: Number,
		target: {
			type: Function,
			default: () => {
				return typeof document !== "undefined" ? document.body : null;
			}
		},
		onClick: Function
	},
	setup(props, { emit, slots }) {
		const visible = ref(false);
		const onScroll = () => {
			visible.value = (document.body.scrollTop || document.documentElement.scrollTop || window.scrollY) >= props.height;
		};
		const handleClick = (e) => {
			emit("click", e);
			props.target?.()?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		};
		return () => {
			let children = slots.default?.();
			if (!children || children.length === 0) children = [createVNode("div", { "class": "k-back-top-content" }, [createVNode(Icon, { "type": ArrowUp }, null)])];
			const rootProps = {
				class: "k-back-top",
				style: {
					bottom: props.bottom !== void 0 ? `${props.bottom}px` : void 0,
					right: props.right !== void 0 ? `${props.right}px` : void 0
				},
				onClick: handleClick
			};
			return createVNode(Transition, { "name": "k-back-top-fade" }, { default: () => [withDirectives(createVNode("div", rootProps, [children]), [[vShow, visible.value], [resolveDirective("scroll"), onScroll]])] });
		};
	}
});
//#endregion
//#region components/badge/index.tsx
var Badge = /* @__PURE__ */ defineComponent({
	name: "Badge",
	props: {
		count: [String, Number],
		dot: Boolean,
		color: String,
		status: {
			type: String,
			default: "default"
		},
		text: String,
		maxCount: {
			type: Number,
			default: 99
		}
	},
	setup(props, { slots }) {
		return () => {
			const { maxCount, count, dot, color, status, text } = props;
			const children = slots.default?.();
			const hasChildren = !!(children && children.length > 0);
			let displayCount = null;
			if (typeof count === "number" && count > 0) displayCount = count > maxCount ? `${maxCount}+` : count;
			else if (typeof count === "string" && count.length > 0) displayCount = count;
			const isStatusType = !hasChildren && (status || color) && !dot;
			const statusNodes = [];
			if (isStatusType && !displayCount) {
				const isHexColor = color && /^#/.test(color);
				const dotProps = {
					class: ["k-badge-status-dot", {
						[`k-badge-status-${status}`]: !!status,
						[`k-badge-status-${color}`]: color && !isHexColor
					}],
					style: { backgroundColor: isHexColor ? color : void 0 }
				};
				statusNodes.push(createVNode("span", dotProps, null));
				if (text) statusNodes.push(createVNode("span", { "class": "k-badge-status-text" }, [text]));
			}
			const showSup = displayCount !== null || dot;
			let supNode = null;
			if (showSup) supNode = createVNode("sup", {
				class: [{
					"k-badge-count": !dot && displayCount !== null,
					"k-badge-dot": dot,
					"k-badge-no-child": !hasChildren,
					[`k-badge-${status}`]: !!status && !color
				}],
				style: { backgroundColor: color }
			}, [!dot ? displayCount : null]);
			return createVNode("div", { class: "k-badge" }, [
				children,
				supNode,
				statusNodes
			]);
		};
	}
});
//#endregion
//#region components/const/var.ts
var colors$1 = [
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
	"gray"
];
//#endregion
//#region components/button/button.tsx
var Button = /* @__PURE__ */ defineComponent({
	name: "Button",
	props: {
		htmlType: {
			type: String,
			default: "button"
		},
		icon: [Array],
		block: {
			type: Boolean,
			default: false
		},
		size: { type: String },
		color: { type: String },
		loading: {
			type: Boolean,
			default: false
		},
		type: {
			type: String,
			default: "default"
		},
		disabled: Boolean,
		theme: { type: String },
		shape: String,
		href: String,
		target: String
	},
	setup(props, { slots, attrs }) {
		const buttonGroup = inject("KButtonGroup", null);
		const parentSize = inject("size", null);
		const computedSize = computed(() => {
			return props.size || buttonGroup?.size || parentSize || "default";
		});
		const computedShape = computed(() => {
			return props.shape || buttonGroup?.shape?.value;
		});
		const handleClick = (e) => {
			if (props.loading || props.disabled) {
				e.preventDefault();
				return;
			}
		};
		const children = computed(() => getChildren(slots.default?.()));
		return () => {
			const iconOnly = () => {
				const excluded = children.value.filter((c) => c.type !== Comment);
				if (!excluded?.length) return props.icon || props.loading;
				if (excluded.length === 1) {
					const type = excluded[0].type;
					return type && (type.name === "Icon" || type === Icon);
				}
				return false;
			};
			const classes = ["k-btn", {
				[`k-btn-${props.type}`]: !!props.type && !props.color,
				[`k-btn-outline`]: props.theme === "outline",
				["k-btn-sm"]: computedSize.value === "small",
				["k-btn-block"]: !!props.block,
				["k-btn-loading"]: props.loading,
				["k-btn-icon-only"]: iconOnly(),
				[`k-btn-${props.color}`]: props.color && colors$1.includes(props.color),
				["k-btn-lg"]: computedSize.value === "large",
				["k-btn-circle"]: computedShape.value === "circle",
				["k-btn-square"]: computedShape.value === "square",
				[`k-btn-${props.theme}`]: !!props.theme
			}];
			let childNodes = [];
			const iconType = props.loading ? Loading : props.icon;
			if (iconType) childNodes.push(createVNode(Icon, {
				"type": iconType,
				"spin": props.loading
			}, null));
			const processedChildren = children.value?.map((c) => {
				return typeof c.children === "string" ? createVNode("span", null, [c.children.trim()]) : c;
			});
			if (processedChildren) childNodes = childNodes.concat(processedChildren);
			const commonProps = {
				...attrs,
				class: classes,
				href: props.href,
				target: props.target,
				disabled: props.disabled || props.loading,
				type: props.htmlType,
				onClick: handleClick
			};
			return props.type === "link" && props.href && !props.disabled ? createVNode("a", commonProps, [childNodes]) : createVNode("button", commonProps, [childNodes]);
		};
	}
});
//#endregion
//#region components/button/button-group.tsx
var ButtonGroup = /* @__PURE__ */ defineComponent({
	name: "ButtonGroup",
	props: {
		size: { type: String },
		shape: String
	},
	setup(props, { slots }) {
		const { size, shape } = toRefs(props);
		const parentSize = inject("size", null);
		provide("KButtonGroup", {
			size: props.size || parentSize,
			shape
		});
		return () => {
			return createVNode("div", { class: ["k-btn-group", {
				["k-btn-group-sm"]: size.value === "small",
				["k-btn-group-lg"]: size.value === "large",
				["k-btn-group-circle"]: shape.value === "circle",
				["k-btn-group-square"]: shape.value === "square"
			}] }, [slots.default?.()]);
		};
	}
});
//#endregion
//#region components/card/index.tsx
var Card = /* @__PURE__ */ defineComponent({
	name: "Card",
	props: {
		bordered: {
			type: Boolean,
			default: false
		},
		title: String,
		icon: [Array]
	},
	setup(props, { slots, attrs }) {
		return () => {
			const { title, icon, bordered } = props;
			const extraSlot = slots.extra?.();
			const titleSlot = slots.title?.();
			const selfSlot = slots.default?.();
			const extraNode = extraSlot ? createVNode("div", { "class": "k-card-extra" }, [extraSlot]) : null;
			const iconNode = icon ? createVNode(Icon, {
				"type": icon,
				"class": "k-card-title-icon"
			}, null) : null;
			const titleNode = title ? createVNode("span", { "class": "k-card-title" }, [title]) : titleSlot || null;
			return createVNode("div", {
				...attrs,
				class: ["k-card", { "k-card-bordered": bordered }]
			}, [titleNode && createVNode("div", { "class": "k-card-head" }, [
				iconNode,
				titleNode,
				extraNode
			]), selfSlot ? createVNode("div", { "class": "k-card-body k-scroll" }, [selfSlot]) : null]);
		};
	}
});
//#endregion
//#region components/carousel/carousel.tsx
var Carousel = /* @__PURE__ */ defineComponent({
	name: "Carousel",
	directives: { resize },
	props: {
		value: {
			type: Number,
			default: 0
		},
		modelValue: {
			type: Number,
			default: 0
		},
		loop: {
			type: Boolean,
			default: true
		},
		autoplay: Boolean,
		delay: {
			type: Number,
			default: 3e3
		},
		height: {
			type: Number,
			default: 256
		},
		vertical: Boolean,
		dots: {
			type: Boolean,
			default: true
		}
	},
	setup(props, { slots, emit, expose, attrs }) {
		const currentIndex = ref(props.value || props.modelValue);
		const posIndex = ref(props.loop ? props.modelValue + 1 : props.modelValue);
		const autoTimer = ref(null);
		const width = ref(0);
		const animate = ref(props.modelValue <= 0);
		const playing = ref(false);
		const carouselRef = ref(null);
		provide("width", width);
		provide("height", props.height);
		const flatten = (nodes) => {
			let result = [];
			nodes.forEach((vnode) => {
				if (vnode.type === Fragment && Array.isArray(vnode.children)) result.push(...flatten(vnode.children));
				else result.push(vnode);
			});
			return result;
		};
		const children = computed(() => {
			return flatten(slots.default?.() || []);
		});
		watch(() => props.modelValue, (val) => {
			currentIndex.value = val;
		});
		watch(() => children.value.length, (newLen, oldLen) => {
			if (newLen !== oldLen) {
				currentIndex.value = 0;
				posIndex.value = props.loop ? 1 : 0;
			}
		});
		const autoToPlay = () => {
			if (!props.autoplay) return;
			if (autoTimer.value) clearInterval(autoTimer.value);
			autoTimer.value = setInterval(() => {
				change("right");
			}, props.delay);
		};
		const change = (type) => {
			animate.value = true;
			const len = children.value.length;
			if (len === 0) return;
			const total = props.loop ? len + 2 : len;
			let index = posIndex.value;
			let nextCurrent = currentIndex.value;
			if (type === "right") {
				index = (index + 1) % total;
				nextCurrent = props.loop ? (nextCurrent + 1) % len : index;
			} else {
				index = (index - 1 + total) % total;
				nextCurrent = props.loop ? (nextCurrent - 1 + len) % len : index;
			}
			posIndex.value = index;
			currentIndex.value = nextCurrent;
			emit("update:value", currentIndex.value);
			setTimeout(() => {
				playing.value = false;
				if (props.loop) {
					if (posIndex.value === total - 1) {
						animate.value = false;
						posIndex.value = 1;
					}
					if (posIndex.value === 0) {
						animate.value = false;
						posIndex.value = total - 2;
					}
				}
			}, 501);
			autoToPlay();
		};
		const toSwitch = (type) => {
			if (autoTimer.value) clearInterval(autoTimer.value);
			if (playing.value) return;
			playing.value = true;
			change(type);
		};
		const goTo = (index) => {
			if (autoTimer.value) clearInterval(autoTimer.value);
			animate.value = true;
			currentIndex.value = index;
			posIndex.value = props.loop ? index + 1 : index;
			emit("update:value", index);
			autoToPlay();
		};
		const resize = () => {
			if (!carouselRef.value) return;
			animate.value = false;
			width.value = carouselRef.value.offsetWidth;
		};
		expose({
			next: () => toSwitch("right"),
			prev: () => toSwitch("left"),
			goTo
		});
		onMounted(() => {
			nextTick(() => {
				resize();
				autoToPlay();
			});
		});
		onBeforeUnmount(() => {
			if (autoTimer.value) clearInterval(autoTimer.value);
		});
		return () => {
			const items = children.value;
			const len = items.length;
			if (len === 0) return null;
			const { vertical, dots, autoplay } = props;
			const newChildren = props.loop ? [
				items[len - 1],
				...items,
				items[0]
			] : items;
			const activeIndex = Math.max(0, Math.min(len - 1, currentIndex.value));
			const wrapperProps = {
				class: "k-carousel-wrapper",
				style: {
					transform: `translate3d(-${!vertical ? posIndex.value * width.value : 0}px, -${vertical ? posIndex.value * props.height : 0}px, 0)`,
					width: !vertical ? `${newChildren.length * width.value}px` : void 0,
					height: vertical ? `${newChildren.length * props.height}px` : void 0,
					transitionDuration: !animate.value ? "0s" : void 0
				}
			};
			return withDirectives(createVNode("div", {
				...attrs,
				style: { height: props.height + "px" },
				ref: carouselRef,
				class: ["k-carousel", { "k-carousel-vertical": vertical }],
				onMouseEnter: () => autoTimer.value && clearInterval(autoTimer.value),
				onMouseLeave: () => autoplay && autoToPlay()
			}, [
				createVNode("div", wrapperProps, [newChildren]),
				!vertical && createVNode(Fragment, null, [createVNode("span", {
					"class": "k-carousel-arrow-left",
					"onClick": () => toSwitch("left")
				}, [createVNode(Icon, { "type": ArrowLeft }, null)]), createVNode("span", {
					"class": "k-carousel-arrow-right",
					"onClick": () => toSwitch("right")
				}, [createVNode(Icon, { "type": ArrowRight }, null)])]),
				dots && createVNode("ul", { "class": "k-carousel-dots" }, [items.map((_, i) => createVNode("li", {
					"key": i,
					"class": { "k-carousel-dots-active": activeIndex === i },
					"onClick": () => goTo(i)
				}, null))])
			]), [[resolveDirective("resize"), resize]]);
		};
	}
});
//#endregion
//#region components/carousel/carousel-item.tsx
var CarouselItem = /* @__PURE__ */ defineComponent({
	name: "CarouselItem",
	setup(_, { slots }) {
		const width = inject("width");
		const height = inject("height");
		return () => {
			return createVNode("div", {
				class: "k-carousel-item",
				style: {
					width: width?.value ? `${width.value}px` : void 0,
					height: height ? `${height}px` : void 0
				}
			}, [slots.default?.()]);
		};
	}
});
//#endregion
//#region components/checkbox/checkbox.tsx
var Checkbox = /* @__PURE__ */ defineComponent({
	name: "Checkbox",
	props: {
		checked: {
			type: Boolean,
			default: false
		},
		modelValue: { type: [
			String,
			Number,
			Boolean
		] },
		value: { type: [
			String,
			Number,
			Boolean
		] },
		label: { type: [String, Number] },
		theme: {
			type: String,
			default: "light"
		},
		disabled: Boolean,
		indeterminate: Boolean,
		size: {
			type: String,
			default: "default"
		},
		onChange: { type: Function }
	},
	setup(props, { slots, emit }) {
		const isChecked = ref(props.modelValue || props.checked);
		watch(() => props.checked, (v) => {
			isChecked.value = v;
		});
		watch(() => props.modelValue, (v) => {
			isChecked.value = v || false;
		});
		const emitValue = (checked) => {
			isChecked.value = checked;
			emit("change", {
				checked,
				value: props.value,
				label: props.label || slots.default?.()
			});
			emit("update:modelValue", checked);
			emit("update:checked", checked);
		};
		const onChange = (e) => {
			if (props.disabled) return;
			e.stopPropagation();
			const target = e.target;
			emitValue(target.checked);
		};
		const triggerCheck = (e) => {
			if (e.code === "Space") {
				e.preventDefault();
				e.stopPropagation();
				if (props.disabled) return;
				emitValue(!isChecked.value);
			}
		};
		return () => {
			const { theme, disabled, indeterminate, size, label } = props;
			const rootProps = {
				class: ["k-checkbox", {
					"k-checkbox-light": theme === "light",
					"k-checkbox-disabled": disabled,
					"k-checkbox-checked": isChecked.value && !indeterminate,
					"k-checkbox-indeterminate": indeterminate && !isChecked.value,
					"k-checkbox-sm": size === "small",
					"k-checkbox-lg": size === "large"
				}],
				tabindex: disabled ? void 0 : 0,
				onKeydown: triggerCheck
			};
			const inputProps = {
				type: "checkbox",
				tabindex: -1,
				class: "k-checkbox-input",
				disabled,
				checked: !!isChecked.value,
				onChange
			};
			const innerNode = isChecked.value ? createVNode(Icon, { "type": Check }, null) : null;
			const labelNode = label || slots.default?.();
			return createVNode("label", rootProps, [createVNode("span", { "class": "k-checkbox-symbol" }, [createVNode("input", inputProps, null), innerNode]), labelNode ? createVNode("span", { "class": "k-checkbox-label" }, [labelNode]) : null]);
		};
	}
});
//#endregion
//#region components/checkbox/checkbox-group.tsx
var CheckboxGroup = /* @__PURE__ */ defineComponent({
	name: "CheckboxGroup",
	props: {
		modelValue: {
			type: Array,
			default: () => []
		},
		theme: {
			type: String,
			default: "light"
		},
		disabled: Boolean,
		options: Array,
		direction: {
			type: String,
			default: "horizontal"
		},
		size: {
			type: String,
			default: "default"
		},
		onChange: { type: Function }
	},
	setup(props, { slots, emit }) {
		const currentValue = ref(props.modelValue);
		watch(() => props.modelValue, (val) => {
			currentValue.value = val;
		});
		const onChange = ({ value }) => {
			const val = [...currentValue.value];
			const index = val.indexOf(value);
			if (index > -1) val.splice(index, 1);
			else val.push(value);
			emit("update:modelValue", val);
			emit("change", val);
		};
		const optionsData = computed(() => {
			const { options } = props;
			if (options && options.length > 0) return options;
			const data = [];
			getChildren(slots.default?.()).forEach((child) => {
				if (child?.props) {
					const { label, value, disabled } = child.props;
					const resolvedLabel = label || child.children?.default?.()?.[0]?.children || value;
					data.push({
						value,
						disabled,
						label: resolvedLabel
					});
				}
			});
			return data;
		});
		return () => {
			const { direction, disabled, theme, size } = props;
			return createVNode("div", { class: ["k-checkbox-group", { "k-checkbox-group-vertical": direction === "vertical" }] }, [optionsData.value.map((option) => createVNode(Checkbox, {
				"key": option.value,
				"label": option.label,
				"value": option.value,
				"checked": currentValue.value.indexOf(option.value) > -1,
				"disabled": disabled || option.disabled,
				"theme": theme,
				"size": size,
				"onChange": onChange
			}, null))]);
		};
	}
});
//#endregion
//#region components/checkbox/index.ts
var checkbox_default = Checkbox;
//#endregion
//#region components/collapse/collapse.tsx
var Collapse = /* @__PURE__ */ defineComponent({
	name: "Collapse",
	props: {
		openKeys: {
			type: Array,
			default: () => []
		},
		accordion: Boolean,
		sample: Boolean
	},
	setup(props, { slots, emit }) {
		const defaultOpenKeys = ref(props.openKeys || []);
		watch(() => props.openKeys, (nv) => {
			defaultOpenKeys.value = nv;
		});
		const change = (key) => {
			if (!key && key !== 0) return;
			let value = [...defaultOpenKeys.value];
			if (value.indexOf(key) >= 0) value = props.accordion ? [] : value.filter((k) => k !== key);
			else value = props.accordion ? [key] : [...value, key];
			defaultOpenKeys.value = value;
			emit("change", key);
			emit("update", value);
		};
		return () => {
			return createVNode("div", { class: ["k-collapse", { "k-collapse-sample": props.sample }] }, [getChildren(slots.default?.())?.map((child) => {
				return cloneVNode(child, {
					active: defaultOpenKeys.value.includes(child.key),
					onExpand: change
				});
			})]);
		};
	}
});
//#endregion
//#region components/collapse/collapse-panel.tsx
var CollapsePanel = /* @__PURE__ */ defineComponent({
	name: "CollapsePanel",
	props: {
		title: String,
		active: Boolean
	},
	setup(props, { slots, emit }) {
		const instance = getCurrentInstance();
		const expanded = ref(props.active);
		const rendered = ref(props.active);
		watch(() => props.active, (nv) => {
			rendered.value = true;
			nextTick(() => {
				expanded.value = nv;
			});
		});
		const handleClick = () => {
			const key = instance?.vnode.key;
			emit("expand", key);
		};
		return () => {
			const rootProps = { class: ["k-collapse-item", { "k-collapse-item-active": expanded.value }] };
			const extraNode = slots.extra?.();
			const transitionProps = getTransitionProp("k-collapse-slide");
			const panelNode = rendered.value ? createVNode(Transition, mergeProps(transitionProps, { "duration": 350 }), { default: () => [withDirectives(createVNode("div", { "class": "k-collapse-content" }, [createVNode("div", { "class": "k-collapse-content-box" }, [slots.default?.()])]), [[vShow, expanded.value]])] }) : null;
			return createVNode("div", rootProps, [createVNode("div", {
				"class": "k-collapse-header",
				"onClick": handleClick
			}, [
				createVNode(Icon, {
					"type": ChevronUp,
					"class": "k-collapse-arrow"
				}, null),
				createVNode("span", { "class": "k-collapse-title" }, [props.title]),
				extraNode ? createVNode("span", { "class": "k-collapse-extra" }, [extraNode]) : null
			]), panelNode]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/color-name@2.1.0/node_modules/color-name/index.js
var colors = {
	aliceblue: [
		240,
		248,
		255
	],
	antiquewhite: [
		250,
		235,
		215
	],
	aqua: [
		0,
		255,
		255
	],
	aquamarine: [
		127,
		255,
		212
	],
	azure: [
		240,
		255,
		255
	],
	beige: [
		245,
		245,
		220
	],
	bisque: [
		255,
		228,
		196
	],
	black: [
		0,
		0,
		0
	],
	blanchedalmond: [
		255,
		235,
		205
	],
	blue: [
		0,
		0,
		255
	],
	blueviolet: [
		138,
		43,
		226
	],
	brown: [
		165,
		42,
		42
	],
	burlywood: [
		222,
		184,
		135
	],
	cadetblue: [
		95,
		158,
		160
	],
	chartreuse: [
		127,
		255,
		0
	],
	chocolate: [
		210,
		105,
		30
	],
	coral: [
		255,
		127,
		80
	],
	cornflowerblue: [
		100,
		149,
		237
	],
	cornsilk: [
		255,
		248,
		220
	],
	crimson: [
		220,
		20,
		60
	],
	cyan: [
		0,
		255,
		255
	],
	darkblue: [
		0,
		0,
		139
	],
	darkcyan: [
		0,
		139,
		139
	],
	darkgoldenrod: [
		184,
		134,
		11
	],
	darkgray: [
		169,
		169,
		169
	],
	darkgreen: [
		0,
		100,
		0
	],
	darkgrey: [
		169,
		169,
		169
	],
	darkkhaki: [
		189,
		183,
		107
	],
	darkmagenta: [
		139,
		0,
		139
	],
	darkolivegreen: [
		85,
		107,
		47
	],
	darkorange: [
		255,
		140,
		0
	],
	darkorchid: [
		153,
		50,
		204
	],
	darkred: [
		139,
		0,
		0
	],
	darksalmon: [
		233,
		150,
		122
	],
	darkseagreen: [
		143,
		188,
		143
	],
	darkslateblue: [
		72,
		61,
		139
	],
	darkslategray: [
		47,
		79,
		79
	],
	darkslategrey: [
		47,
		79,
		79
	],
	darkturquoise: [
		0,
		206,
		209
	],
	darkviolet: [
		148,
		0,
		211
	],
	deeppink: [
		255,
		20,
		147
	],
	deepskyblue: [
		0,
		191,
		255
	],
	dimgray: [
		105,
		105,
		105
	],
	dimgrey: [
		105,
		105,
		105
	],
	dodgerblue: [
		30,
		144,
		255
	],
	firebrick: [
		178,
		34,
		34
	],
	floralwhite: [
		255,
		250,
		240
	],
	forestgreen: [
		34,
		139,
		34
	],
	fuchsia: [
		255,
		0,
		255
	],
	gainsboro: [
		220,
		220,
		220
	],
	ghostwhite: [
		248,
		248,
		255
	],
	gold: [
		255,
		215,
		0
	],
	goldenrod: [
		218,
		165,
		32
	],
	gray: [
		128,
		128,
		128
	],
	green: [
		0,
		128,
		0
	],
	greenyellow: [
		173,
		255,
		47
	],
	grey: [
		128,
		128,
		128
	],
	honeydew: [
		240,
		255,
		240
	],
	hotpink: [
		255,
		105,
		180
	],
	indianred: [
		205,
		92,
		92
	],
	indigo: [
		75,
		0,
		130
	],
	ivory: [
		255,
		255,
		240
	],
	khaki: [
		240,
		230,
		140
	],
	lavender: [
		230,
		230,
		250
	],
	lavenderblush: [
		255,
		240,
		245
	],
	lawngreen: [
		124,
		252,
		0
	],
	lemonchiffon: [
		255,
		250,
		205
	],
	lightblue: [
		173,
		216,
		230
	],
	lightcoral: [
		240,
		128,
		128
	],
	lightcyan: [
		224,
		255,
		255
	],
	lightgoldenrodyellow: [
		250,
		250,
		210
	],
	lightgray: [
		211,
		211,
		211
	],
	lightgreen: [
		144,
		238,
		144
	],
	lightgrey: [
		211,
		211,
		211
	],
	lightpink: [
		255,
		182,
		193
	],
	lightsalmon: [
		255,
		160,
		122
	],
	lightseagreen: [
		32,
		178,
		170
	],
	lightskyblue: [
		135,
		206,
		250
	],
	lightslategray: [
		119,
		136,
		153
	],
	lightslategrey: [
		119,
		136,
		153
	],
	lightsteelblue: [
		176,
		196,
		222
	],
	lightyellow: [
		255,
		255,
		224
	],
	lime: [
		0,
		255,
		0
	],
	limegreen: [
		50,
		205,
		50
	],
	linen: [
		250,
		240,
		230
	],
	magenta: [
		255,
		0,
		255
	],
	maroon: [
		128,
		0,
		0
	],
	mediumaquamarine: [
		102,
		205,
		170
	],
	mediumblue: [
		0,
		0,
		205
	],
	mediumorchid: [
		186,
		85,
		211
	],
	mediumpurple: [
		147,
		112,
		219
	],
	mediumseagreen: [
		60,
		179,
		113
	],
	mediumslateblue: [
		123,
		104,
		238
	],
	mediumspringgreen: [
		0,
		250,
		154
	],
	mediumturquoise: [
		72,
		209,
		204
	],
	mediumvioletred: [
		199,
		21,
		133
	],
	midnightblue: [
		25,
		25,
		112
	],
	mintcream: [
		245,
		255,
		250
	],
	mistyrose: [
		255,
		228,
		225
	],
	moccasin: [
		255,
		228,
		181
	],
	navajowhite: [
		255,
		222,
		173
	],
	navy: [
		0,
		0,
		128
	],
	oldlace: [
		253,
		245,
		230
	],
	olive: [
		128,
		128,
		0
	],
	olivedrab: [
		107,
		142,
		35
	],
	orange: [
		255,
		165,
		0
	],
	orangered: [
		255,
		69,
		0
	],
	orchid: [
		218,
		112,
		214
	],
	palegoldenrod: [
		238,
		232,
		170
	],
	palegreen: [
		152,
		251,
		152
	],
	paleturquoise: [
		175,
		238,
		238
	],
	palevioletred: [
		219,
		112,
		147
	],
	papayawhip: [
		255,
		239,
		213
	],
	peachpuff: [
		255,
		218,
		185
	],
	peru: [
		205,
		133,
		63
	],
	pink: [
		255,
		192,
		203
	],
	plum: [
		221,
		160,
		221
	],
	powderblue: [
		176,
		224,
		230
	],
	purple: [
		128,
		0,
		128
	],
	rebeccapurple: [
		102,
		51,
		153
	],
	red: [
		255,
		0,
		0
	],
	rosybrown: [
		188,
		143,
		143
	],
	royalblue: [
		65,
		105,
		225
	],
	saddlebrown: [
		139,
		69,
		19
	],
	salmon: [
		250,
		128,
		114
	],
	sandybrown: [
		244,
		164,
		96
	],
	seagreen: [
		46,
		139,
		87
	],
	seashell: [
		255,
		245,
		238
	],
	sienna: [
		160,
		82,
		45
	],
	silver: [
		192,
		192,
		192
	],
	skyblue: [
		135,
		206,
		235
	],
	slateblue: [
		106,
		90,
		205
	],
	slategray: [
		112,
		128,
		144
	],
	slategrey: [
		112,
		128,
		144
	],
	snow: [
		255,
		250,
		250
	],
	springgreen: [
		0,
		255,
		127
	],
	steelblue: [
		70,
		130,
		180
	],
	tan: [
		210,
		180,
		140
	],
	teal: [
		0,
		128,
		128
	],
	thistle: [
		216,
		191,
		216
	],
	tomato: [
		255,
		99,
		71
	],
	turquoise: [
		64,
		224,
		208
	],
	violet: [
		238,
		130,
		238
	],
	wheat: [
		245,
		222,
		179
	],
	white: [
		255,
		255,
		255
	],
	whitesmoke: [
		245,
		245,
		245
	],
	yellow: [
		255,
		255,
		0
	],
	yellowgreen: [
		154,
		205,
		50
	]
};
for (const key in colors) Object.freeze(colors[key]);
var color_name_default = Object.freeze(colors);
//#endregion
//#region node_modules/.pnpm/color-string@2.1.4/node_modules/color-string/index.js
var reverseNames = Object.create(null);
for (const name in color_name_default) if (Object.hasOwn(color_name_default, name)) reverseNames[color_name_default[name]] = name;
var cs = {
	to: {},
	get: {}
};
cs.get = function(string) {
	const prefix = string.slice(0, 3).toLowerCase();
	let value;
	let model;
	switch (prefix) {
		case "hsl":
			value = cs.get.hsl(string);
			model = "hsl";
			break;
		case "hwb":
			value = cs.get.hwb(string);
			model = "hwb";
			break;
		default:
			value = cs.get.rgb(string);
			model = "rgb";
			break;
	}
	if (!value) return null;
	return {
		model,
		value
	};
};
cs.get.rgb = function(string) {
	if (!string) return null;
	const abbr = /^#([a-f\d]{3,4})$/i;
	const hex = /^#([a-f\d]{6})([a-f\d]{2})?$/i;
	const rgba = /^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i;
	const per = /^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i;
	const keyword = /^(\w+)$/;
	let rgb = [
		0,
		0,
		0,
		1
	];
	let match;
	let i;
	let hexAlpha;
	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];
		for (i = 0; i < 3; i++) {
			const i2 = i * 2;
			rgb[i] = Number.parseInt(match.slice(i2, i2 + 2), 16);
		}
		if (hexAlpha) rgb[3] = Number.parseInt(hexAlpha, 16) / 255;
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];
		for (i = 0; i < 3; i++) rgb[i] = Number.parseInt(match[i] + match[i], 16);
		if (hexAlpha) rgb[3] = Number.parseInt(hexAlpha + hexAlpha, 16) / 255;
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) rgb[i] = Number.parseFloat(match[i + 1]);
		if (match[4]) rgb[3] = match[5] ? Number.parseFloat(match[4]) * .01 : Number.parseFloat(match[4]);
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) rgb[i] = Math.round(Number.parseFloat(match[i + 1]) * 2.55);
		if (match[4]) rgb[3] = match[5] ? Number.parseFloat(match[4]) * .01 : Number.parseFloat(match[4]);
	} else if (match = string.toLowerCase().match(keyword)) {
		if (match[1] === "transparent") return [
			0,
			0,
			0,
			0
		];
		if (!Object.hasOwn(color_name_default, match[1])) return null;
		rgb = color_name_default[match[1]].slice();
		rgb[3] = 1;
		return rgb;
	} else return null;
	for (i = 0; i < 3; i++) rgb[i] = clamp$1(rgb[i], 0, 255);
	rgb[3] = clamp$1(rgb[3], 0, 1);
	return rgb;
};
cs.get.hsl = function(string) {
	if (!string) return null;
	const match = string.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);
	if (match) {
		const alpha = Number.parseFloat(match[4]);
		return [
			(Number.parseFloat(match[1]) % 360 + 360) % 360,
			clamp$1(Number.parseFloat(match[2]), 0, 100),
			clamp$1(Number.parseFloat(match[3]), 0, 100),
			clamp$1(Number.isNaN(alpha) ? 1 : alpha, 0, 1)
		];
	}
	return null;
};
cs.get.hwb = function(string) {
	if (!string) return null;
	const match = string.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i);
	if (match) {
		const alpha = Number.parseFloat(match[4]);
		return [
			(Number.parseFloat(match[1]) % 360 + 360) % 360,
			clamp$1(Number.parseFloat(match[2]), 0, 100),
			clamp$1(Number.parseFloat(match[3]), 0, 100),
			clamp$1(Number.isNaN(alpha) ? 1 : alpha, 0, 1)
		];
	}
	return null;
};
cs.to.hex = function(...rgba) {
	return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
};
cs.to.rgb = function(...rgba) {
	return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
};
cs.to.rgb.percent = function(...rgba) {
	const r = Math.round(rgba[0] / 255 * 100);
	const g = Math.round(rgba[1] / 255 * 100);
	const b = Math.round(rgba[2] / 255 * 100);
	return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
};
cs.to.hsl = function(...hsla) {
	return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
};
cs.to.hwb = function(...hwba) {
	let a = "";
	if (hwba.length >= 4 && hwba[3] !== 1) a = ", " + hwba[3];
	return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
};
cs.to.keyword = function(...rgb) {
	return reverseNames[rgb.slice(0, 3)];
};
function clamp$1(number_, min, max) {
	return Math.min(Math.max(min, number_), max);
}
function hexDouble(number_) {
	const string_ = Math.round(number_).toString(16).toUpperCase();
	return string_.length < 2 ? "0" + string_ : string_;
}
//#endregion
//#region node_modules/.pnpm/color-convert@3.1.3/node_modules/color-convert/conversions.js
var reverseKeywords = {};
for (const key of Object.keys(color_name_default)) reverseKeywords[color_name_default[key]] = key;
var convert$1 = {
	rgb: {
		channels: 3,
		labels: "rgb"
	},
	hsl: {
		channels: 3,
		labels: "hsl"
	},
	hsv: {
		channels: 3,
		labels: "hsv"
	},
	hwb: {
		channels: 3,
		labels: "hwb"
	},
	cmyk: {
		channels: 4,
		labels: "cmyk"
	},
	xyz: {
		channels: 3,
		labels: "xyz"
	},
	lab: {
		channels: 3,
		labels: "lab"
	},
	oklab: {
		channels: 3,
		labels: [
			"okl",
			"oka",
			"okb"
		]
	},
	lch: {
		channels: 3,
		labels: "lch"
	},
	oklch: {
		channels: 3,
		labels: [
			"okl",
			"okc",
			"okh"
		]
	},
	hex: {
		channels: 1,
		labels: ["hex"]
	},
	keyword: {
		channels: 1,
		labels: ["keyword"]
	},
	ansi16: {
		channels: 1,
		labels: ["ansi16"]
	},
	ansi256: {
		channels: 1,
		labels: ["ansi256"]
	},
	hcg: {
		channels: 3,
		labels: [
			"h",
			"c",
			"g"
		]
	},
	apple: {
		channels: 3,
		labels: [
			"r16",
			"g16",
			"b16"
		]
	},
	gray: {
		channels: 1,
		labels: ["gray"]
	}
};
var LAB_FT = (6 / 29) ** 3;
function srgbNonlinearTransform(c) {
	const cc = c > .0031308 ? 1.055 * c ** (1 / 2.4) - .055 : c * 12.92;
	return Math.min(Math.max(0, cc), 1);
}
function srgbNonlinearTransformInv(c) {
	return c > .04045 ? ((c + .055) / 1.055) ** 2.4 : c / 12.92;
}
for (const model of Object.keys(convert$1)) {
	if (!("channels" in convert$1[model])) throw new Error("missing channels property: " + model);
	if (!("labels" in convert$1[model])) throw new Error("missing channel labels property: " + model);
	if (convert$1[model].labels.length !== convert$1[model].channels) throw new Error("channel and label counts mismatch: " + model);
	const { channels, labels } = convert$1[model];
	delete convert$1[model].channels;
	delete convert$1[model].labels;
	Object.defineProperty(convert$1[model], "channels", { value: channels });
	Object.defineProperty(convert$1[model], "labels", { value: labels });
}
convert$1.rgb.hsl = function(rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;
	switch (max) {
		case min:
			h = 0;
			break;
		case r:
			h = (g - b) / delta;
			break;
		case g:
			h = 2 + (b - r) / delta;
			break;
		case b:
			h = 4 + (r - g) / delta;
			break;
	}
	h = Math.min(h * 60, 360);
	if (h < 0) h += 360;
	const l = (min + max) / 2;
	if (max === min) s = 0;
	else if (l <= .5) s = delta / (max + min);
	else s = delta / (2 - max - min);
	return [
		h,
		s * 100,
		l * 100
	];
};
convert$1.rgb.hsv = function(rgb) {
	let rdif;
	let gdif;
	let bdif;
	let h;
	let s;
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const v = Math.max(r, g, b);
	const diff = v - Math.min(r, g, b);
	const diffc = function(c) {
		return (v - c) / 6 / diff + 1 / 2;
	};
	if (diff === 0) {
		h = 0;
		s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);
		switch (v) {
			case r:
				h = bdif - gdif;
				break;
			case g:
				h = 1 / 3 + rdif - bdif;
				break;
			case b:
				h = 2 / 3 + gdif - rdif;
				break;
		}
		if (h < 0) h += 1;
		else if (h > 1) h -= 1;
	}
	return [
		h * 360,
		s * 100,
		v * 100
	];
};
convert$1.rgb.hwb = function(rgb) {
	const r = rgb[0];
	const g = rgb[1];
	let b = rgb[2];
	const h = convert$1.rgb.hsl(rgb)[0];
	const w = 1 / 255 * Math.min(r, Math.min(g, b));
	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
	return [
		h,
		w * 100,
		b * 100
	];
};
convert$1.rgb.oklab = function(rgb) {
	const r = srgbNonlinearTransformInv(rgb[0] / 255);
	const g = srgbNonlinearTransformInv(rgb[1] / 255);
	const b = srgbNonlinearTransformInv(rgb[2] / 255);
	const lp = Math.cbrt(.4122214708 * r + .5363325363 * g + .0514459929 * b);
	const mp = Math.cbrt(.2119034982 * r + .6806995451 * g + .1073969566 * b);
	const sp = Math.cbrt(.0883024619 * r + .2817188376 * g + .6299787005 * b);
	const l = .2104542553 * lp + .793617785 * mp - .0040720468 * sp;
	const aa = 1.9779984951 * lp - 2.428592205 * mp + .4505937099 * sp;
	const bb = .0259040371 * lp + .7827717662 * mp - .808675766 * sp;
	return [
		l * 100,
		aa * 100,
		bb * 100
	];
};
convert$1.rgb.cmyk = function(rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const k = Math.min(1 - r, 1 - g, 1 - b);
	const c = (1 - r - k) / (1 - k) || 0;
	const m = (1 - g - k) / (1 - k) || 0;
	const y = (1 - b - k) / (1 - k) || 0;
	return [
		c * 100,
		m * 100,
		y * 100,
		k * 100
	];
};
function comparativeDistance(x, y) {
	return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2;
}
convert$1.rgb.keyword = function(rgb) {
	const reversed = reverseKeywords[rgb];
	if (reversed) return reversed;
	let currentClosestDistance = Number.POSITIVE_INFINITY;
	let currentClosestKeyword;
	for (const keyword of Object.keys(color_name_default)) {
		const value = color_name_default[keyword];
		const distance = comparativeDistance(rgb, value);
		if (distance < currentClosestDistance) {
			currentClosestDistance = distance;
			currentClosestKeyword = keyword;
		}
	}
	return currentClosestKeyword;
};
convert$1.keyword.rgb = function(keyword) {
	return [...color_name_default[keyword]];
};
convert$1.rgb.xyz = function(rgb) {
	const r = srgbNonlinearTransformInv(rgb[0] / 255);
	const g = srgbNonlinearTransformInv(rgb[1] / 255);
	const b = srgbNonlinearTransformInv(rgb[2] / 255);
	const x = r * .4124564 + g * .3575761 + b * .1804375;
	const y = r * .2126729 + g * .7151522 + b * .072175;
	const z = r * .0193339 + g * .119192 + b * .9503041;
	return [
		x * 100,
		y * 100,
		z * 100
	];
};
convert$1.rgb.lab = function(rgb) {
	const xyz = convert$1.rgb.xyz(rgb);
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
	y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
	z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;
	return [
		116 * y - 16,
		500 * (x - y),
		200 * (y - z)
	];
};
convert$1.hsl.rgb = function(hsl) {
	const h = hsl[0] / 360;
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	let t3;
	let value;
	if (s === 0) {
		value = l * 255;
		return [
			value,
			value,
			value
		];
	}
	const t2 = l < .5 ? l * (1 + s) : l + s - l * s;
	const t1 = 2 * l - t2;
	const rgb = [
		0,
		0,
		0
	];
	for (let i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) t3++;
		if (t3 > 1) t3--;
		if (6 * t3 < 1) value = t1 + (t2 - t1) * 6 * t3;
		else if (2 * t3 < 1) value = t2;
		else if (3 * t3 < 2) value = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		else value = t1;
		rgb[i] = value * 255;
	}
	return rgb;
};
convert$1.hsl.hsv = function(hsl) {
	const h = hsl[0];
	let s = hsl[1] / 100;
	let l = hsl[2] / 100;
	let smin = s;
	const lmin = Math.max(l, .01);
	l *= 2;
	s *= l <= 1 ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	const v = (l + s) / 2;
	return [
		h,
		(l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s)) * 100,
		v * 100
	];
};
convert$1.hsv.rgb = function(hsv) {
	const h = hsv[0] / 60;
	const s = hsv[1] / 100;
	let v = hsv[2] / 100;
	const hi = Math.floor(h) % 6;
	const f = h - Math.floor(h);
	const p = 255 * v * (1 - s);
	const q = 255 * v * (1 - s * f);
	const t = 255 * v * (1 - s * (1 - f));
	v *= 255;
	switch (hi) {
		case 0: return [
			v,
			t,
			p
		];
		case 1: return [
			q,
			v,
			p
		];
		case 2: return [
			p,
			v,
			t
		];
		case 3: return [
			p,
			q,
			v
		];
		case 4: return [
			t,
			p,
			v
		];
		case 5: return [
			v,
			p,
			q
		];
	}
};
convert$1.hsv.hsl = function(hsv) {
	const h = hsv[0];
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const vmin = Math.max(v, .01);
	let sl;
	let l;
	l = (2 - s) * v;
	const lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= lmin <= 1 ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;
	return [
		h,
		sl * 100,
		l * 100
	];
};
convert$1.hwb.rgb = function(hwb) {
	const h = hwb[0] / 360;
	let wh = hwb[1] / 100;
	let bl = hwb[2] / 100;
	const ratio = wh + bl;
	let f;
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}
	const i = Math.floor(6 * h);
	const v = 1 - bl;
	f = 6 * h - i;
	if ((i & 1) !== 0) f = 1 - f;
	const n = wh + f * (v - wh);
	let r;
	let g;
	let b;
	switch (i) {
		default:
		case 6:
		case 0:
			r = v;
			g = n;
			b = wh;
			break;
		case 1:
			r = n;
			g = v;
			b = wh;
			break;
		case 2:
			r = wh;
			g = v;
			b = n;
			break;
		case 3:
			r = wh;
			g = n;
			b = v;
			break;
		case 4:
			r = n;
			g = wh;
			b = v;
			break;
		case 5:
			r = v;
			g = wh;
			b = n;
			break;
	}
	return [
		r * 255,
		g * 255,
		b * 255
	];
};
convert$1.cmyk.rgb = function(cmyk) {
	const c = cmyk[0] / 100;
	const m = cmyk[1] / 100;
	const y = cmyk[2] / 100;
	const k = cmyk[3] / 100;
	const r = 1 - Math.min(1, c * (1 - k) + k);
	const g = 1 - Math.min(1, m * (1 - k) + k);
	const b = 1 - Math.min(1, y * (1 - k) + k);
	return [
		r * 255,
		g * 255,
		b * 255
	];
};
convert$1.xyz.rgb = function(xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	let r;
	let g;
	let b;
	r = x * 3.2404542 + y * -1.5371385 + z * -.4985314;
	g = x * -.969266 + y * 1.8760108 + z * .041556;
	b = x * .0556434 + y * -.2040259 + z * 1.0572252;
	r = srgbNonlinearTransform(r);
	g = srgbNonlinearTransform(g);
	b = srgbNonlinearTransform(b);
	return [
		r * 255,
		g * 255,
		b * 255
	];
};
convert$1.xyz.lab = function(xyz) {
	let x = xyz[0];
	let y = xyz[1];
	let z = xyz[2];
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > LAB_FT ? x ** (1 / 3) : 7.787 * x + 16 / 116;
	y = y > LAB_FT ? y ** (1 / 3) : 7.787 * y + 16 / 116;
	z = z > LAB_FT ? z ** (1 / 3) : 7.787 * z + 16 / 116;
	return [
		116 * y - 16,
		500 * (x - y),
		200 * (y - z)
	];
};
convert$1.xyz.oklab = function(xyz) {
	const x = xyz[0] / 100;
	const y = xyz[1] / 100;
	const z = xyz[2] / 100;
	const lp = Math.cbrt(.8189330101 * x + .3618667424 * y - .1288597137 * z);
	const mp = Math.cbrt(.0329845436 * x + .9293118715 * y + .0361456387 * z);
	const sp = Math.cbrt(.0482003018 * x + .2643662691 * y + .633851707 * z);
	const l = .2104542553 * lp + .793617785 * mp - .0040720468 * sp;
	const a = 1.9779984951 * lp - 2.428592205 * mp + .4505937099 * sp;
	const b = .0259040371 * lp + .7827717662 * mp - .808675766 * sp;
	return [
		l * 100,
		a * 100,
		b * 100
	];
};
convert$1.oklab.oklch = function(oklab) {
	return convert$1.lab.lch(oklab);
};
convert$1.oklab.xyz = function(oklab) {
	const ll = oklab[0] / 100;
	const a = oklab[1] / 100;
	const b = oklab[2] / 100;
	const l = (.999999998 * ll + .396337792 * a + .215803758 * b) ** 3;
	const m = (1.000000008 * ll - .105561342 * a - .063854175 * b) ** 3;
	const s = (1.000000055 * ll - .089484182 * a - 1.291485538 * b) ** 3;
	const x = 1.227013851 * l - .55779998 * m + .281256149 * s;
	const y = -.040580178 * l + 1.11225687 * m - .071676679 * s;
	const z = -.076381285 * l - .421481978 * m + 1.58616322 * s;
	return [
		x * 100,
		y * 100,
		z * 100
	];
};
convert$1.oklab.rgb = function(oklab) {
	const ll = oklab[0] / 100;
	const aa = oklab[1] / 100;
	const bb = oklab[2] / 100;
	const l = (ll + .3963377774 * aa + .2158037573 * bb) ** 3;
	const m = (ll - .1055613458 * aa - .0638541728 * bb) ** 3;
	const s = (ll - .0894841775 * aa - 1.291485548 * bb) ** 3;
	const r = srgbNonlinearTransform(4.0767416621 * l - 3.3077115913 * m + .2309699292 * s);
	const g = srgbNonlinearTransform(-1.2684380046 * l + 2.6097574011 * m - .3413193965 * s);
	const b = srgbNonlinearTransform(-.0041960863 * l - .7034186147 * m + 1.707614701 * s);
	return [
		r * 255,
		g * 255,
		b * 255
	];
};
convert$1.oklch.oklab = function(oklch) {
	return convert$1.lch.lab(oklch);
};
convert$1.lab.xyz = function(lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let x;
	let y;
	let z;
	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;
	const y2 = y ** 3;
	const x2 = x ** 3;
	const z2 = z ** 3;
	y = y2 > LAB_FT ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > LAB_FT ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > LAB_FT ? z2 : (z - 16 / 116) / 7.787;
	x *= 95.047;
	y *= 100;
	z *= 108.883;
	return [
		x,
		y,
		z
	];
};
convert$1.lab.lch = function(lab) {
	const l = lab[0];
	const a = lab[1];
	const b = lab[2];
	let h;
	h = Math.atan2(b, a) * 360 / 2 / Math.PI;
	if (h < 0) h += 360;
	return [
		l,
		Math.sqrt(a * a + b * b),
		h
	];
};
convert$1.lch.lab = function(lch) {
	const l = lch[0];
	const c = lch[1];
	const hr = lch[2] / 360 * 2 * Math.PI;
	return [
		l,
		c * Math.cos(hr),
		c * Math.sin(hr)
	];
};
convert$1.rgb.ansi16 = function(args, saturation = null) {
	const [r, g, b] = args;
	let value = saturation === null ? convert$1.rgb.hsv(args)[2] : saturation;
	value = Math.round(value / 50);
	if (value === 0) return 30;
	let ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
	if (value === 2) ansi += 60;
	return ansi;
};
convert$1.hsv.ansi16 = function(args) {
	return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
};
convert$1.rgb.ansi256 = function(args) {
	const r = args[0];
	const g = args[1];
	const b = args[2];
	if (r >> 4 === g >> 4 && g >> 4 === b >> 4) {
		if (r < 8) return 16;
		if (r > 248) return 231;
		return Math.round((r - 8) / 247 * 24) + 232;
	}
	return 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
};
convert$1.ansi16.rgb = function(args) {
	args = args[0];
	let color = args % 10;
	if (color === 0 || color === 7) {
		if (args > 50) color += 3.5;
		color = color / 10.5 * 255;
		return [
			color,
			color,
			color
		];
	}
	const mult = (Math.trunc(args > 50) + 1) * .5;
	return [
		(color & 1) * mult * 255,
		(color >> 1 & 1) * mult * 255,
		(color >> 2 & 1) * mult * 255
	];
};
convert$1.ansi256.rgb = function(args) {
	args = args[0];
	if (args >= 232) {
		const c = (args - 232) * 10 + 8;
		return [
			c,
			c,
			c
		];
	}
	args -= 16;
	let rem;
	return [
		Math.floor(args / 36) / 5 * 255,
		Math.floor((rem = args % 36) / 6) / 5 * 255,
		rem % 6 / 5 * 255
	];
};
convert$1.rgb.hex = function(args) {
	const string = (((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255)).toString(16).toUpperCase();
	return "000000".slice(string.length) + string;
};
convert$1.hex.rgb = function(args) {
	const match = args.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);
	if (!match) return [
		0,
		0,
		0
	];
	let colorString = match[0];
	if (match[0].length === 3) colorString = [...colorString].map((char) => char + char).join("");
	const integer = Number.parseInt(colorString, 16);
	return [
		integer >> 16 & 255,
		integer >> 8 & 255,
		integer & 255
	];
};
convert$1.rgb.hcg = function(rgb) {
	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const max = Math.max(Math.max(r, g), b);
	const min = Math.min(Math.min(r, g), b);
	const chroma = max - min;
	let hue;
	const grayscale = chroma < 1 ? min / (1 - chroma) : 0;
	if (chroma <= 0) hue = 0;
	else if (max === r) hue = (g - b) / chroma % 6;
	else if (max === g) hue = 2 + (b - r) / chroma;
	else hue = 4 + (r - g) / chroma;
	hue /= 6;
	hue %= 1;
	return [
		hue * 360,
		chroma * 100,
		grayscale * 100
	];
};
convert$1.hsl.hcg = function(hsl) {
	const s = hsl[1] / 100;
	const l = hsl[2] / 100;
	const c = l < .5 ? 2 * s * l : 2 * s * (1 - l);
	let f = 0;
	if (c < 1) f = (l - .5 * c) / (1 - c);
	return [
		hsl[0],
		c * 100,
		f * 100
	];
};
convert$1.hsv.hcg = function(hsv) {
	const s = hsv[1] / 100;
	const v = hsv[2] / 100;
	const c = s * v;
	let f = 0;
	if (c < 1) f = (v - c) / (1 - c);
	return [
		hsv[0],
		c * 100,
		f * 100
	];
};
convert$1.hcg.rgb = function(hcg) {
	const h = hcg[0] / 360;
	const c = hcg[1] / 100;
	const g = hcg[2] / 100;
	if (c === 0) return [
		g * 255,
		g * 255,
		g * 255
	];
	const pure = [
		0,
		0,
		0
	];
	const hi = h % 1 * 6;
	const v = hi % 1;
	const w = 1 - v;
	let mg = 0;
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1;
			pure[1] = v;
			pure[2] = 0;
			break;
		case 1:
			pure[0] = w;
			pure[1] = 1;
			pure[2] = 0;
			break;
		case 2:
			pure[0] = 0;
			pure[1] = 1;
			pure[2] = v;
			break;
		case 3:
			pure[0] = 0;
			pure[1] = w;
			pure[2] = 1;
			break;
		case 4:
			pure[0] = v;
			pure[1] = 0;
			pure[2] = 1;
			break;
		default:
			pure[0] = 1;
			pure[1] = 0;
			pure[2] = w;
	}
	mg = (1 - c) * g;
	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};
convert$1.hcg.hsv = function(hcg) {
	const c = hcg[1] / 100;
	const v = c + hcg[2] / 100 * (1 - c);
	let f = 0;
	if (v > 0) f = c / v;
	return [
		hcg[0],
		f * 100,
		v * 100
	];
};
convert$1.hcg.hsl = function(hcg) {
	const c = hcg[1] / 100;
	const l = hcg[2] / 100 * (1 - c) + .5 * c;
	let s = 0;
	if (l > 0 && l < .5) s = c / (2 * l);
	else if (l >= .5 && l < 1) s = c / (2 * (1 - l));
	return [
		hcg[0],
		s * 100,
		l * 100
	];
};
convert$1.hcg.hwb = function(hcg) {
	const c = hcg[1] / 100;
	const v = c + hcg[2] / 100 * (1 - c);
	return [
		hcg[0],
		(v - c) * 100,
		(1 - v) * 100
	];
};
convert$1.hwb.hcg = function(hwb) {
	const w = hwb[1] / 100;
	const v = 1 - hwb[2] / 100;
	const c = v - w;
	let g = 0;
	if (c < 1) g = (v - c) / (1 - c);
	return [
		hwb[0],
		c * 100,
		g * 100
	];
};
convert$1.apple.rgb = function(apple) {
	return [
		apple[0] / 65535 * 255,
		apple[1] / 65535 * 255,
		apple[2] / 65535 * 255
	];
};
convert$1.rgb.apple = function(rgb) {
	return [
		rgb[0] / 255 * 65535,
		rgb[1] / 255 * 65535,
		rgb[2] / 255 * 65535
	];
};
convert$1.gray.rgb = function(args) {
	return [
		args[0] / 100 * 255,
		args[0] / 100 * 255,
		args[0] / 100 * 255
	];
};
convert$1.gray.hsl = function(args) {
	return [
		0,
		0,
		args[0]
	];
};
convert$1.gray.hsv = convert$1.gray.hsl;
convert$1.gray.hwb = function(gray) {
	return [
		0,
		100,
		gray[0]
	];
};
convert$1.gray.cmyk = function(gray) {
	return [
		0,
		0,
		0,
		gray[0]
	];
};
convert$1.gray.lab = function(gray) {
	return [
		gray[0],
		0,
		0
	];
};
convert$1.gray.hex = function(gray) {
	const value = Math.round(gray[0] / 100 * 255) & 255;
	const string = ((value << 16) + (value << 8) + value).toString(16).toUpperCase();
	return "000000".slice(string.length) + string;
};
convert$1.rgb.gray = function(rgb) {
	return [(rgb[0] + rgb[1] + rgb[2]) / 3 / 255 * 100];
};
//#endregion
//#region node_modules/.pnpm/color-convert@3.1.3/node_modules/color-convert/route.js
function buildGraph() {
	const graph = {};
	const models = Object.keys(convert$1);
	for (let { length } = models, i = 0; i < length; i++) graph[models[i]] = {
		distance: -1,
		parent: null
	};
	return graph;
}
function deriveBFS(fromModel) {
	const graph = buildGraph();
	const queue = [fromModel];
	graph[fromModel].distance = 0;
	while (queue.length > 0) {
		const current = queue.pop();
		const adjacents = Object.keys(convert$1[current]);
		for (let { length } = adjacents, i = 0; i < length; i++) {
			const adjacent = adjacents[i];
			const node = graph[adjacent];
			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}
	return graph;
}
function link(from, to) {
	return function(args) {
		return to(from(args));
	};
}
function wrapConversion(toModel, graph) {
	const path = [graph[toModel].parent, toModel];
	let fn = convert$1[graph[toModel].parent][toModel];
	let cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(convert$1[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}
	fn.conversion = path;
	return fn;
}
function route(fromModel) {
	const graph = deriveBFS(fromModel);
	const conversion = {};
	const models = Object.keys(graph);
	for (let { length } = models, i = 0; i < length; i++) {
		const toModel = models[i];
		if (graph[toModel].parent === null) continue;
		conversion[toModel] = wrapConversion(toModel, graph);
	}
	return conversion;
}
//#endregion
//#region node_modules/.pnpm/color-convert@3.1.3/node_modules/color-convert/index.js
var convert = {};
var models = Object.keys(convert$1);
function wrapRaw(fn) {
	const wrappedFn = function(...args) {
		const arg0 = args[0];
		if (arg0 === void 0 || arg0 === null) return arg0;
		if (arg0.length > 1) args = arg0;
		return fn(args);
	};
	if ("conversion" in fn) wrappedFn.conversion = fn.conversion;
	return wrappedFn;
}
function wrapRounded(fn) {
	const wrappedFn = function(...args) {
		const arg0 = args[0];
		if (arg0 === void 0 || arg0 === null) return arg0;
		if (arg0.length > 1) args = arg0;
		const result = fn(args);
		if (typeof result === "object") for (let { length } = result, i = 0; i < length; i++) result[i] = Math.round(result[i]);
		return result;
	};
	if ("conversion" in fn) wrappedFn.conversion = fn.conversion;
	return wrappedFn;
}
for (const fromModel of models) {
	convert[fromModel] = {};
	Object.defineProperty(convert[fromModel], "channels", { value: convert$1[fromModel].channels });
	Object.defineProperty(convert[fromModel], "labels", { value: convert$1[fromModel].labels });
	const routes = route(fromModel);
	const routeModels = Object.keys(routes);
	for (const toModel of routeModels) {
		const fn = routes[toModel];
		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	}
}
//#endregion
//#region node_modules/.pnpm/color@5.0.3/node_modules/color/index.js
var skippedModels = [
	"keyword",
	"gray",
	"hex"
];
var hashedModelKeys = {};
for (const model of Object.keys(convert)) hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
var limiters = {};
function Color(object, model) {
	if (!(this instanceof Color)) return new Color(object, model);
	if (model && model in skippedModels) model = null;
	if (model && !(model in convert)) throw new Error("Unknown model: " + model);
	let i;
	let channels;
	if (object == null) {
		this.model = "rgb";
		this.color = [
			0,
			0,
			0
		];
		this.valpha = 1;
	} else if (object instanceof Color) {
		this.model = object.model;
		this.color = [...object.color];
		this.valpha = object.valpha;
	} else if (typeof object === "string") {
		const result = cs.get(object);
		if (result === null) throw new Error("Unable to parse color from string: " + object);
		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
	} else if (object.length > 0) {
		this.model = model || "rgb";
		channels = convert[this.model].channels;
		const newArray = Array.prototype.slice.call(object, 0, channels);
		this.color = zeroArray(newArray, channels);
		this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
	} else if (typeof object === "number") {
		this.model = "rgb";
		this.color = [
			object >> 16 & 255,
			object >> 8 & 255,
			object & 255
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;
		const keys = Object.keys(object);
		if ("alpha" in object) {
			keys.splice(keys.indexOf("alpha"), 1);
			this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
		}
		const hashedKeys = keys.sort().join("");
		if (!(hashedKeys in hashedModelKeys)) throw new Error("Unable to parse color from object: " + JSON.stringify(object));
		this.model = hashedModelKeys[hashedKeys];
		const { labels } = convert[this.model];
		const color = [];
		for (i = 0; i < labels.length; i++) color.push(object[labels[i]]);
		this.color = zeroArray(color);
	}
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			const limit = limiters[this.model][i];
			if (limit) this.color[i] = limit(this.color[i]);
		}
	}
	this.valpha = Math.max(0, Math.min(1, this.valpha));
	if (Object.freeze) Object.freeze(this);
}
Color.prototype = {
	toString() {
		return this.string();
	},
	toJSON() {
		return this[this.model]();
	},
	string(places) {
		let self = this.model in cs.to ? this : this.rgb();
		self = self.round(typeof places === "number" ? places : 1);
		const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return cs.to[self.model](...arguments_);
	},
	percentString(places) {
		const self = this.rgb().round(typeof places === "number" ? places : 1);
		const arguments_ = self.valpha === 1 ? self.color : [...self.color, this.valpha];
		return cs.to.rgb.percent(...arguments_);
	},
	array() {
		return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
	},
	object() {
		const result = {};
		const { channels } = convert[this.model];
		const { labels } = convert[this.model];
		for (let i = 0; i < channels; i++) result[labels[i]] = this.color[i];
		if (this.valpha !== 1) result.alpha = this.valpha;
		return result;
	},
	unitArray() {
		const rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;
		if (this.valpha !== 1) rgb.push(this.valpha);
		return rgb;
	},
	unitObject() {
		const rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;
		if (this.valpha !== 1) rgb.alpha = this.valpha;
		return rgb;
	},
	round(places) {
		places = Math.max(places || 0, 0);
		return new Color([...this.color.map(roundToPlace(places)), this.valpha], this.model);
	},
	alpha(value) {
		if (value !== void 0) return new Color([...this.color, Math.max(0, Math.min(1, value))], this.model);
		return this.valpha;
	},
	red: getset("rgb", 0, maxfn(255)),
	green: getset("rgb", 1, maxfn(255)),
	blue: getset("rgb", 2, maxfn(255)),
	hue: getset([
		"hsl",
		"hsv",
		"hsl",
		"hwb",
		"hcg"
	], 0, (value) => (value % 360 + 360) % 360),
	saturationl: getset("hsl", 1, maxfn(100)),
	lightness: getset("hsl", 2, maxfn(100)),
	saturationv: getset("hsv", 1, maxfn(100)),
	value: getset("hsv", 2, maxfn(100)),
	chroma: getset("hcg", 1, maxfn(100)),
	gray: getset("hcg", 2, maxfn(100)),
	white: getset("hwb", 1, maxfn(100)),
	wblack: getset("hwb", 2, maxfn(100)),
	cyan: getset("cmyk", 0, maxfn(100)),
	magenta: getset("cmyk", 1, maxfn(100)),
	yellow: getset("cmyk", 2, maxfn(100)),
	black: getset("cmyk", 3, maxfn(100)),
	x: getset("xyz", 0, maxfn(95.047)),
	y: getset("xyz", 1, maxfn(100)),
	z: getset("xyz", 2, maxfn(108.833)),
	l: getset("lab", 0, maxfn(100)),
	a: getset("lab", 1),
	b: getset("lab", 2),
	keyword(value) {
		if (value !== void 0) return new Color(value);
		return convert[this.model].keyword(this.color);
	},
	hex(value) {
		if (value !== void 0) return new Color(value);
		return cs.to.hex(...this.rgb().round().color);
	},
	hexa(value) {
		if (value !== void 0) return new Color(value);
		const rgbArray = this.rgb().round().color;
		let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
		if (alphaHex.length === 1) alphaHex = "0" + alphaHex;
		return cs.to.hex(...rgbArray) + alphaHex;
	},
	rgbNumber() {
		const rgb = this.rgb().color;
		return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
	},
	luminosity() {
		const rgb = this.rgb().color;
		const lum = [];
		for (const [i, element] of rgb.entries()) {
			const chan = element / 255;
			lum[i] = chan <= .04045 ? chan / 12.92 : ((chan + .055) / 1.055) ** 2.4;
		}
		return .2126 * lum[0] + .7152 * lum[1] + .0722 * lum[2];
	},
	contrast(color2) {
		const lum1 = this.luminosity();
		const lum2 = color2.luminosity();
		if (lum1 > lum2) return (lum1 + .05) / (lum2 + .05);
		return (lum2 + .05) / (lum1 + .05);
	},
	level(color2) {
		const contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7) return "AAA";
		return contrastRatio >= 4.5 ? "AA" : "";
	},
	isDark() {
		const rgb = this.rgb().color;
		return (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4 < 128;
	},
	isLight() {
		return !this.isDark();
	},
	negate() {
		const rgb = this.rgb();
		for (let i = 0; i < 3; i++) rgb.color[i] = 255 - rgb.color[i];
		return rgb;
	},
	lighten(ratio) {
		const hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},
	darken(ratio) {
		const hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},
	saturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},
	desaturate(ratio) {
		const hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},
	whiten(ratio) {
		const hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},
	blacken(ratio) {
		const hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},
	grayscale() {
		const rgb = this.rgb().color;
		const value = rgb[0] * .3 + rgb[1] * .59 + rgb[2] * .11;
		return Color.rgb(value, value, value);
	},
	fade(ratio) {
		return this.alpha(this.valpha - this.valpha * ratio);
	},
	opaquer(ratio) {
		return this.alpha(this.valpha + this.valpha * ratio);
	},
	rotate(degrees) {
		const hsl = this.hsl();
		let hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},
	mix(mixinColor, weight) {
		if (!mixinColor || !mixinColor.rgb) throw new Error("Argument to \"mix\" was not a Color instance, but rather an instance of " + typeof mixinColor);
		const color1 = mixinColor.rgb();
		const color2 = this.rgb();
		const p = weight === void 0 ? .5 : weight;
		const w = 2 * p - 1;
		const a = color1.alpha() - color2.alpha();
		const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
		const w2 = 1 - w1;
		return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
	}
};
for (const model of Object.keys(convert)) {
	if (skippedModels.includes(model)) continue;
	const { channels } = convert[model];
	Color.prototype[model] = function(...arguments_) {
		if (this.model === model) return new Color(this);
		if (arguments_.length > 0) return new Color(arguments_, model);
		return new Color([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
	};
	Color[model] = function(...arguments_) {
		let color = arguments_[0];
		if (typeof color === "number") color = zeroArray(arguments_, channels);
		return new Color(color, model);
	};
}
function roundTo(number, places) {
	return Number(number.toFixed(places));
}
function roundToPlace(places) {
	return function(number) {
		return roundTo(number, places);
	};
}
function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];
	for (const m of model) (limiters[m] ||= [])[channel] = modifier;
	model = model[0];
	return function(value) {
		let result;
		if (value !== void 0) {
			if (modifier) value = modifier(value);
			result = this[model]();
			result.color[channel] = value;
			return result;
		}
		result = this[model]().color[channel];
		if (modifier) result = modifier(result);
		return result;
	};
}
function maxfn(max) {
	return function(v) {
		return Math.max(0, Math.min(max, v));
	};
}
function assertArray(value) {
	return Array.isArray(value) ? value : [value];
}
function zeroArray(array, length) {
	for (let i = 0; i < length; i++) if (typeof array[i] !== "number") array[i] = 0;
	return array;
}
//#endregion
//#region components/directives/transfer.ts
var transfer = {
	mounted(el, { value }) {
		if (value) {
			const parentNode = el.parentNode;
			if (!parentNode) return false;
			(value.$el ? value.$el : (value === true ? document.body : value) || document.body).appendChild(el);
			el.__data = { parentNode };
		}
	},
	unmounted(el, { value }) {
		if (value && el.__data && el.__data.parentNode) {
			el.__data.parentNode.appendChild(el);
			el.__data = null;
		}
	}
};
//#endregion
//#region components/utils/placement.ts
function setPlacement({ refSelection, refPopper, currentPlacement, position = null, transOrigin, top, left, offset = 3 }) {
	if (!refPopper.value) return;
	let rect = null;
	const isMouseMode = position && typeof position.x === "number" && typeof position.y === "number";
	if (isMouseMode) rect = {
		width: 0,
		height: 0,
		top: position.y,
		bottom: position.y,
		left: position.x,
		right: position.x
	};
	else if (refSelection?.value) {
		const instance = refSelection.value;
		rect = (instance.$el || instance).getBoundingClientRect?.();
	} else return;
	const pickerH = refPopper.value.offsetHeight;
	const pickerW = refPopper.value.offsetWidth;
	const { clientHeight, clientWidth, scrollTop, scrollLeft } = document.documentElement;
	const centerLeft = rect.left + rect.width / 2 - pickerW / 2;
	const centerTop = rect.top + rect.height / 2 - pickerH / 2;
	const check = {
		top: rect.top > pickerH + offset,
		bottom: clientHeight - rect.bottom > pickerH + offset,
		left: rect.left > pickerW + offset,
		right: clientWidth - rect.right > pickerW + offset,
		alignLeft: clientWidth - rect.left > pickerW,
		alignRight: rect.right > pickerW,
		alignTop: clientHeight - rect.top > pickerH,
		alignBottom: rect.bottom > pickerH,
		centerH: centerLeft > 0 && centerLeft + pickerW < clientWidth,
		centerV: centerTop > 0 && centerTop + pickerH < clientHeight
	};
	let [side, align] = currentPlacement.value.split("-");
	if (isMouseMode && !align) {
		if (side === "top" || side === "bottom") align = "left";
		else if (side === "left" || side === "right") align = "top";
	}
	if (side === "top" && !check.top && check.bottom) side = "bottom";
	else if (side === "bottom" && !check.bottom && check.top) side = "top";
	else if (side === "left" && !check.left && check.right) side = "right";
	else if (side === "right" && !check.right && check.left) side = "left";
	if (side === "top" || side === "bottom") {
		if (align === "left" && !check.alignLeft && check.alignRight) align = "right";
		else if (align === "right" && !check.alignRight && check.alignLeft) align = "left";
		else if (!align && !check.centerH) {
			if (check.alignLeft) align = "left";
			else if (check.alignRight) align = "right";
		}
	} else if (side === "left" || side === "right") {
		if (align === "top" && !check.alignTop && check.alignBottom) align = "bottom";
		else if (align === "bottom" && !check.alignBottom && check.alignTop) align = "top";
		else if (!align && !check.centerV) {
			if (check.alignTop) align = "top";
			else if (check.alignBottom) align = "bottom";
		}
	}
	const finalPlacement = align ? `${side}-${align}` : side;
	let calcTop = 0;
	let calcLeft = 0;
	let originX = "center";
	let originY = "center";
	if (side === "top") {
		calcTop = rect.top - pickerH - offset;
		originY = "bottom";
	} else if (side === "bottom") {
		calcTop = rect.bottom + offset;
		originY = "top";
	} else if (align === "top") {
		calcTop = rect.top;
		originY = "top";
	} else if (align === "bottom") {
		calcTop = rect.bottom - pickerH;
		originY = "bottom";
	} else {
		calcTop = rect.top + (rect.height - pickerH) / 2;
		originY = "center";
	}
	if (side === "left") {
		calcLeft = rect.left - pickerW - offset;
		originX = "right";
	} else if (side === "right") {
		calcLeft = rect.right + offset;
		originX = "left";
	} else if (align === "left") {
		calcLeft = rect.left;
		originX = "left";
	} else if (align === "right") {
		calcLeft = rect.right - pickerW;
		originX = "right";
	} else {
		calcLeft = rect.left + (rect.width - pickerW) / 2;
		originX = "center";
	}
	top.value = calcTop + scrollTop;
	left.value = calcLeft + scrollLeft;
	transOrigin.value = `${originX} ${originY}`;
	if (currentPlacement.value !== finalPlacement) currentPlacement.value = finalPlacement;
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
var clamp = (n, min, max) => Math.min(max, Math.max(min, n));
function cacheStringFunction(fn) {
	const cache = Object.create(null);
	return ((str) => {
		return cache[str] || (cache[str] = fn(str));
	});
}
var hyphenateRE = /\B([A-Z])/g;
cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var camelizeRE = /-(\w)/g;
cacheStringFunction((str) => {
	return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
//#endregion
//#region components/color-picker/alpha.tsx
var alpha_default = /* @__PURE__ */ defineComponent({
	name: "Alpha",
	props: {
		modelValue: {
			type: [String, Object],
			required: true
		},
		onUpdateAlpha: Function
	},
	setup(props, { emit }) {
		const dotPos = ref(0);
		const refPaint = ref(null);
		const isMousePressed = ref(false);
		const renderPaint = () => {
			const canvas = refPaint.value;
			if (!canvas) return;
			const ctx = canvas.getContext("2d");
			if (!ctx) return;
			const { width, height } = canvas;
			const gradient = ctx.createLinearGradient(0, 0, width, 0);
			const c = Color(props.modelValue).rgb();
			gradient.addColorStop(0, `rgba(${c.red()}, ${c.green()}, ${c.blue()}, 0)`);
			gradient.addColorStop(1, `rgba(${c.red()}, ${c.green()}, ${c.blue()}, 1)`);
			ctx.clearRect(0, 0, width, height);
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, width, height);
		};
		const updatePos = () => {
			dotPos.value = Color(props.modelValue).alpha() * 190 - 7;
		};
		const handleMove = (e) => {
			const canvas = refPaint.value;
			if (!canvas) return;
			const { width, left } = canvas.getBoundingClientRect();
			const x = clamp(e.clientX - left, 0, width);
			emit("updateAlpha", parseFloat((x / width).toFixed(2)));
		};
		const onMouseDown = (e) => {
			isMousePressed.value = true;
			handleMove(e);
			document.addEventListener("mousemove", handleMove);
			document.addEventListener("mouseup", onMouseUp);
		};
		const onMouseUp = () => {
			isMousePressed.value = false;
			document.removeEventListener("mousemove", handleMove);
			document.removeEventListener("mouseup", onMouseUp);
		};
		watch(() => props.modelValue, () => {
			renderPaint();
			updatePos();
		});
		onMounted(() => {
			renderPaint();
			updatePos();
		});
		onBeforeUnmount(onMouseUp);
		return () => createVNode("div", { "class": "k-color-picker-alpha-box" }, [createVNode("canvas", {
			"class": "k-color-picker-alpha",
			"width": 190,
			"height": 8,
			"ref": refPaint,
			"onMousedown": onMouseDown
		}, null), createVNode("span", {
			"class": "k-color-picker-alpha-dot",
			"style": {
				left: `${dotPos.value}px`,
				backgroundColor: props.modelValue
			}
		}, null)]);
	}
});
//#endregion
//#region components/color-picker/hue.tsx
var hue_default = /* @__PURE__ */ defineComponent({
	name: "Hue",
	props: {
		hue: {
			type: Number,
			default: 0
		},
		onUpdateHue: Function
	},
	setup(props, { emit }) {
		const dotPos = ref(0);
		const refPaint = ref(null);
		const isMousePressed = ref(false);
		const renderPaint = () => {
			const canvas = refPaint.value;
			if (!canvas) return;
			const ctx = canvas.getContext("2d", { willReadFrequently: true });
			if (!ctx) return;
			const { width, height } = canvas;
			const gradient = ctx.createLinearGradient(0, 0, width, 0);
			for (let i = 0; i <= 360; i += 10) gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, width, height);
		};
		const updatePos = () => {
			dotPos.value = props.hue / 360 * 190 - 7;
		};
		const handleMove = (e) => {
			const canvas = refPaint.value;
			if (!canvas) return;
			const { width, left } = canvas.getBoundingClientRect();
			const newHue = clamp(e.clientX - left, 0, width) / width * 360;
			emit("updateHue", Math.round(newHue));
		};
		const onMouseUp = () => {
			isMousePressed.value = false;
			document.removeEventListener("mousemove", handleMove);
			document.removeEventListener("mouseup", onMouseUp);
		};
		const onMouseDown = (e) => {
			isMousePressed.value = true;
			handleMove(e);
			document.addEventListener("mousemove", handleMove);
			document.addEventListener("mouseup", onMouseUp);
			e.preventDefault();
		};
		watch(() => props.hue, updatePos);
		onMounted(() => {
			renderPaint();
			updatePos();
		});
		onBeforeUnmount(onMouseUp);
		return () => createVNode("div", { "class": "k-color-picker-slider-hue" }, [createVNode("canvas", {
			"class": "k-color-picker-hue",
			"width": 190,
			"height": 8,
			"ref": refPaint,
			"onMousedown": onMouseDown
		}, null), createVNode("span", {
			"class": "k-color-picker-hue-dot",
			"style": { left: `${dotPos.value}px` }
		}, null)]);
	}
});
//#endregion
//#region node_modules/.pnpm/big.js@7.0.1/node_modules/big.js/big.mjs
/************************************** EDITABLE DEFAULTS *****************************************/
var DP = 20, RM = 1, MAX_DP = 1e6, MAX_POWER = 1e6, NE = -7, PE = 21, STRICT = false, NAME = "[big.js] ", INVALID = NAME + "Invalid ", INVALID_DP = INVALID + "decimal places", INVALID_RM = INVALID + "rounding mode", DIV_BY_ZERO = NAME + "Division by zero", P = {}, UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function _Big_() {
	function Big(n) {
		var x = this;
		if (!(x instanceof Big)) return n === UNDEFINED && arguments.length === 0 ? _Big_() : new Big(n);
		if (n instanceof Big) {
			x.s = n.s;
			x.e = n.e;
			x.c = n.c.slice();
		} else {
			if (typeof n !== "string") {
				if (Big.strict === true && typeof n !== "bigint") throw TypeError(INVALID + "value");
				n = n === 0 && 1 / n < 0 ? "-0" : String(n);
			}
			parse(x, n);
		}
		x.constructor = Big;
	}
	Big.prototype = P;
	Big.DP = DP;
	Big.RM = RM;
	Big.NE = NE;
	Big.PE = PE;
	Big.strict = STRICT;
	Big.roundDown = 0;
	Big.roundHalfUp = 1;
	Big.roundHalfEven = 2;
	Big.roundUp = 3;
	return Big;
}
function parse(x, n) {
	var e, i, nl;
	if (!NUMERIC.test(n)) throw Error(INVALID + "number");
	x.s = n.charAt(0) == "-" ? (n = n.slice(1), -1) : 1;
	if ((e = n.indexOf(".")) > -1) n = n.replace(".", "");
	if ((i = n.search(/e/i)) > 0) {
		if (e < 0) e = i;
		e += +n.slice(i + 1);
		n = n.substring(0, i);
	} else if (e < 0) e = n.length;
	nl = n.length;
	for (i = 0; i < nl && n.charAt(i) == "0";) ++i;
	if (i == nl) x.c = [x.e = 0];
	else {
		for (; nl > 0 && n.charAt(--nl) == "0";);
		x.e = e - i - 1;
		x.c = [];
		for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
	}
	return x;
}
function round(x, sd, rm, more) {
	var xc = x.c;
	if (rm === UNDEFINED) rm = x.constructor.RM;
	if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) throw Error(INVALID_RM);
	if (sd < 1) {
		more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
		xc.length = 1;
		if (more) {
			x.e = x.e - sd + 1;
			xc[0] = 1;
		} else xc[0] = x.e = 0;
	} else if (sd < xc.length) {
		more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);
		xc.length = sd;
		if (more) for (; ++xc[--sd] > 9;) {
			xc[sd] = 0;
			if (sd === 0) {
				++x.e;
				xc.unshift(1);
				break;
			}
		}
		for (sd = xc.length; !xc[--sd];) xc.pop();
	}
	return x;
}
function stringify(x, doExponential, isNonzero) {
	var e = x.e, s = x.c.join(""), n = s.length;
	if (doExponential) s = s.charAt(0) + (n > 1 ? "." + s.slice(1) : "") + (e < 0 ? "e" : "e+") + e;
	else if (e < 0) {
		for (; ++e;) s = "0" + s;
		s = "0." + s;
	} else if (e > 0) {
		if (++e > n) for (e -= n; e--;) s += "0";
		else if (e < n) s = s.slice(0, e) + "." + s.slice(e);
	} else if (n > 1) s = s.charAt(0) + "." + s.slice(1);
	return x.s < 0 && isNonzero ? "-" + s : s;
}
P.abs = function() {
	var x = new this.constructor(this);
	x.s = 1;
	return x;
};
P.cmp = function(y) {
	var isneg, x = this, xc = x.c, yc = (y = new x.constructor(y)).c, i = x.s, j = y.s, k = x.e, l = y.e;
	if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;
	if (i != j) return i;
	isneg = i < 0;
	if (k != l) return k > l ^ isneg ? 1 : -1;
	j = (k = xc.length) < (l = yc.length) ? k : l;
	for (i = -1; ++i < j;) if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
	return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
P.div = function(y) {
	var x = this, Big = x.constructor, a = x.c, b = (y = new Big(y)).c, k = x.s == y.s ? 1 : -1, dp = Big.DP;
	if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);
	if (!b[0]) throw Error(DIV_BY_ZERO);
	if (!a[0]) {
		y.s = k;
		y.c = [y.e = 0];
		return y;
	}
	var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), rl = r.length, q = y, qc = q.c = [], qi = 0, p = dp + (q.e = x.e - y.e) + 1;
	q.s = k;
	k = p < 0 ? 0 : p;
	bz.unshift(0);
	for (; rl++ < bl;) r.push(0);
	do {
		for (n = 0; n < 10; n++) {
			if (bl != (rl = r.length)) cmp = bl > rl ? 1 : -1;
			else for (ri = -1, cmp = 0; ++ri < bl;) if (b[ri] != r[ri]) {
				cmp = b[ri] > r[ri] ? 1 : -1;
				break;
			}
			if (cmp < 0) {
				for (bt = rl == bl ? b : bz; rl;) {
					if (r[--rl] < bt[rl]) {
						ri = rl;
						for (; ri && !r[--ri];) r[ri] = 9;
						--r[ri];
						r[rl] += 10;
					}
					r[rl] -= bt[rl];
				}
				for (; !r[0];) r.shift();
			} else break;
		}
		qc[qi++] = cmp ? n : ++n;
		if (r[0] && cmp) r[rl] = a[ai] || 0;
		else r = [a[ai]];
	} while ((ai++ < al || r[0] !== UNDEFINED) && k--);
	if (!qc[0] && qi != 1) {
		qc.shift();
		q.e--;
		p--;
	}
	if (qi > p) round(q, p, Big.RM, r[0] !== UNDEFINED);
	return q;
};
P.eq = function(y) {
	return this.cmp(y) === 0;
};
P.gt = function(y) {
	return this.cmp(y) > 0;
};
P.gte = function(y) {
	return this.cmp(y) > -1;
};
P.lt = function(y) {
	return this.cmp(y) < 0;
};
P.lte = function(y) {
	return this.cmp(y) < 1;
};
P.minus = P.sub = function(y) {
	var i, j, t, xlty, x = this, Big = x.constructor, a = x.s, b = (y = new Big(y)).s;
	if (a != b) {
		y.s = -b;
		return x.plus(y);
	}
	var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
	if (!xc[0] || !yc[0]) {
		if (yc[0]) y.s = -b;
		else if (xc[0]) y = new Big(x);
		else y.s = 1;
		return y;
	}
	if (a = xe - ye) {
		if (xlty = a < 0) {
			a = -a;
			t = xc;
		} else {
			ye = xe;
			t = yc;
		}
		t.reverse();
		for (b = a; b--;) t.push(0);
		t.reverse();
	} else {
		j = ((xlty = xc.length < yc.length) ? xc : yc).length;
		for (a = b = 0; b < j; b++) if (xc[b] != yc[b]) {
			xlty = xc[b] < yc[b];
			break;
		}
	}
	if (xlty) {
		t = xc;
		xc = yc;
		yc = t;
		y.s = -y.s;
	}
	if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;
	for (b = i; j > a;) {
		if (xc[--j] < yc[j]) {
			for (i = j; i && !xc[--i];) xc[i] = 9;
			--xc[i];
			xc[j] += 10;
		}
		xc[j] -= yc[j];
	}
	for (; xc[--b] === 0;) xc.pop();
	for (; xc[0] === 0;) {
		xc.shift();
		--ye;
	}
	if (!xc[0]) {
		y.s = 1;
		xc = [ye = 0];
	}
	y.c = xc;
	y.e = ye;
	return y;
};
P.mod = function(y) {
	var ygtx, x = this, Big = x.constructor, a = x.s, b = (y = new Big(y)).s;
	if (!y.c[0]) throw Error(DIV_BY_ZERO);
	x.s = y.s = 1;
	ygtx = y.cmp(x) == 1;
	x.s = a;
	y.s = b;
	if (ygtx) return new Big(x);
	a = Big.DP;
	b = Big.RM;
	Big.DP = Big.RM = 0;
	x = x.div(y);
	Big.DP = a;
	Big.RM = b;
	return this.minus(x.times(y));
};
P.neg = function() {
	var x = new this.constructor(this);
	x.s = -x.s;
	return x;
};
P.plus = P.add = function(y) {
	var e, k, t, x = this, Big = x.constructor;
	y = new Big(y);
	if (x.s != y.s) {
		y.s = -y.s;
		return x.minus(y);
	}
	var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
	if (!xc[0] || !yc[0]) {
		if (!yc[0]) if (xc[0]) y = new Big(x);
		else y.s = x.s;
		return y;
	}
	xc = xc.slice();
	if (e = xe - ye) {
		if (e > 0) {
			ye = xe;
			t = yc;
		} else {
			e = -e;
			t = xc;
		}
		t.reverse();
		for (; e--;) t.push(0);
		t.reverse();
	}
	if (xc.length - yc.length < 0) {
		t = yc;
		yc = xc;
		xc = t;
	}
	e = yc.length;
	for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;
	if (k) {
		xc.unshift(k);
		++ye;
	}
	for (e = xc.length; xc[--e] === 0;) xc.pop();
	y.c = xc;
	y.e = ye;
	return y;
};
P.pow = function(n) {
	var x = this, one = new x.constructor("1"), y = one, isneg = n < 0;
	if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) throw Error(INVALID + "exponent");
	if (isneg) n = -n;
	for (;;) {
		if (n & 1) y = y.times(x);
		n >>= 1;
		if (!n) break;
		x = x.times(x);
	}
	return isneg ? one.div(y) : y;
};
P.prec = function(sd, rm) {
	if (sd !== ~~sd || sd < 1 || sd > MAX_DP) throw Error(INVALID + "precision");
	return round(new this.constructor(this), sd, rm);
};
P.round = function(dp, rm) {
	if (dp === UNDEFINED) dp = 0;
	else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) throw Error(INVALID_DP);
	return round(new this.constructor(this), dp + this.e + 1, rm);
};
P.sqrt = function() {
	var r, c, t, x = this, Big = x.constructor, s = x.s, e = x.e, half = new Big("0.5");
	if (!x.c[0]) return new Big(x);
	if (s < 0) throw Error(NAME + "No square root");
	s = Math.sqrt(+stringify(x, true, true));
	if (s === 0 || s === Infinity) {
		c = x.c.join("");
		if (!(c.length + e & 1)) c += "0";
		s = Math.sqrt(c);
		e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
		r = new Big((s == Infinity ? "5e" : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + e);
	} else r = new Big(s + "");
	e = r.e + (Big.DP += 4);
	do {
		t = r;
		r = half.times(t.plus(x.div(t)));
	} while (t.c.slice(0, e).join("") !== r.c.slice(0, e).join(""));
	return round(r, (Big.DP -= 4) + r.e + 1, Big.RM);
};
P.times = P.mul = function(y) {
	var c, x = this, Big = x.constructor, xc = x.c, yc = (y = new Big(y)).c, a = xc.length, b = yc.length, i = x.e, j = y.e;
	y.s = x.s == y.s ? 1 : -1;
	if (!xc[0] || !yc[0]) {
		y.c = [y.e = 0];
		return y;
	}
	y.e = i + j;
	if (a < b) {
		c = xc;
		xc = yc;
		yc = c;
		j = a;
		a = b;
		b = j;
	}
	for (c = new Array(j = a + b); j--;) c[j] = 0;
	for (i = b; i--;) {
		b = 0;
		for (j = a + i; j > i;) {
			b = c[j] + yc[i] * xc[j - i - 1] + b;
			c[j--] = b % 10;
			b = b / 10 | 0;
		}
		c[j] = b;
	}
	if (b) ++y.e;
	else c.shift();
	for (i = c.length; !c[--i];) c.pop();
	y.c = c;
	return y;
};
P.toExponential = function(dp, rm) {
	var x = this, n = x.c[0];
	if (dp !== UNDEFINED) {
		if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);
		x = round(new x.constructor(x), ++dp, rm);
		for (; x.c.length < dp;) x.c.push(0);
	}
	return stringify(x, true, !!n);
};
P.toFixed = function(dp, rm) {
	var x = this, n = x.c[0];
	if (dp !== UNDEFINED) {
		if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);
		x = round(new x.constructor(x), dp + x.e + 1, rm);
		for (dp = dp + x.e + 1; x.c.length < dp;) x.c.push(0);
	}
	return stringify(x, false, !!n);
};
P.toJSON = P.toString = function() {
	var x = this, Big = x.constructor;
	return stringify(x, x.e <= Big.NE || x.e >= Big.PE, !!x.c[0]);
};
if (typeof Symbol !== "undefined") P[Symbol.for("nodejs.util.inspect.custom")] = P.toJSON;
P.toNumber = function() {
	var n = +stringify(this, true, true);
	if (this.constructor.strict === true && !this.eq(n.toString())) throw Error(NAME + "Imprecise conversion");
	return n;
};
P.toPrecision = function(sd, rm) {
	var x = this, Big = x.constructor, n = x.c[0];
	if (sd !== UNDEFINED) {
		if (sd !== ~~sd || sd < 1 || sd > MAX_DP) throw Error(INVALID + "precision");
		x = round(new Big(x), sd, rm);
		for (; x.c.length < sd;) x.c.push(0);
	}
	return stringify(x, sd <= x.e || x.e <= Big.NE || x.e >= Big.PE, !!n);
};
P.valueOf = function() {
	var x = this, Big = x.constructor;
	if (Big.strict === true) throw Error(NAME + "valueOf disallowed");
	return stringify(x, x.e <= Big.NE || x.e >= Big.PE, true);
};
var Big = _Big_();
//#endregion
//#region components/utils/number.ts
var isEmpty = (value) => {
	return value == null || typeof value === "string" && value.trim() === "" || Array.isArray(value) && value.length === 0 || typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0;
};
var isRealNum = (val) => {
	if (val === null || val === "" || Array.isArray(val)) return false;
	try {
		new Big(val);
		return true;
	} catch (e) {
		return false;
	}
};
var normalize = (val, precision) => {
	if (!isRealNum(val)) return "";
	const b = new Big(val);
	return precision !== void 0 ? b.toFixed(precision) : b.toFixed();
};
var isValidBig = (val) => {
	if (val === null || val === void 0 || val === "") return false;
	const str = String(val).trim();
	if (str === "-" || str === "." || str === "-.") return false;
	try {
		new Big(str);
		return true;
	} catch (e) {
		return false;
	}
};
var toBigSafe = (val) => {
	try {
		if (val === null || val === void 0 || val === "") throw new Error();
		return new Big(val);
	} catch (e) {
		return new Big(0);
	}
};
var getClosestStep = (val, { min, max, step, marks }) => {
	const bMin = toBigSafe(min);
	const bMax = toBigSafe(max);
	const bVal = toBigSafe(val);
	const markValues = marks ? Object.keys(marks).map(Number) : [];
	if (step === null || step === void 0) {
		if (markValues.length > 0) return markValues.reduce((prev, curr) => {
			return Math.abs(curr - val) < Math.abs(prev - val) ? curr : prev;
		});
		const clampedVal = bVal.gt(bMax) ? bMax : bVal.lt(bMin) ? bMin : bVal;
		return Number(clampedVal.toFixed());
	}
	const bStep = toBigSafe(step || 1);
	const diff = bVal.minus(bMin);
	const stepCount = Math.round(Number(diff.div(bStep)));
	let closest = bMin.plus(bStep.times(stepCount));
	if (markValues.length > 0) markValues.forEach((m) => {
		if (Math.abs(m - val) < Math.abs(Number(closest.minus(val)))) closest = new Big(m);
	});
	if (closest.gt(bMax)) return Number(bMax.toFixed());
	if (closest.lt(bMin)) return Number(bMin.toFixed());
	return Number(closest.toFixed());
};
var input_box_default = /* @__PURE__ */ defineComponent({
	name: "InputBox",
	props: {
		multiple: Boolean,
		disabled: Boolean,
		size: String,
		type: String,
		theme: String,
		shape: String,
		inputType: String,
		value: [
			String,
			Number,
			Object
		],
		showPassword: Boolean,
		inputRef: Object
	},
	setup(props, { emit, attrs }) {
		const handleInput = (e) => {
			emit("update:value", e);
		};
		const handleFocus = (e) => {
			emit("focus", e);
		};
		const handleBlur = (e) => {
			emit("blur", e);
		};
		return () => {
			const { disabled, multiple, size, theme, shape, inputType } = props;
			let type = props.type;
			if (props.showPassword === true && type === "password") type = "text";
			return createVNode("input", {
				ref: props.inputRef,
				...attrs,
				class: [{
					[`k-${inputType}`]: !multiple,
					[`k-${inputType}-text`]: multiple,
					[`k-${inputType}-disabled`]: disabled,
					[`k-${inputType}-sm`]: size === "small" && !multiple,
					[`k-${inputType}-lg`]: size === "large" && !multiple,
					[`k-${inputType}-${theme}`]: theme !== "solid" && !multiple && theme,
					[`k-${inputType}-circle`]: shape === "circle" && !multiple
				}],
				disabled,
				type,
				single: true,
				value: props.value,
				onFocus: handleFocus,
				onBlur: handleBlur,
				onInput: handleInput
			}, null);
		};
	}
});
var InputGroup = /* @__PURE__ */ defineComponent({
	name: "InputGroup",
	props: {
		block: {
			type: Boolean,
			default: false
		},
		compact: {
			type: Boolean,
			default: true
		},
		theme: {
			type: String,
			default: "light"
		},
		size: { type: [
			String,
			Array,
			Number
		] }
	},
	setup(props, { slots }) {
		const parentSize = inject("size", null);
		provide("size", props.size || parentSize);
		return () => {
			const { size, compact, block, theme } = props;
			const styles = {};
			const rootProps = {
				style: styles,
				class: ["k-input-group", {
					"k-input-group-compact": compact,
					"k-input-group-block": block,
					"k-input-group-light": theme === "light",
					"k-input-group-lg": size === "large",
					"k-input-group-sm": size === "small"
				}]
			};
			if (!compact && size !== void 0) {
				if (typeof size === "number") styles.gap = `${size}px`;
			}
			let children = getChildren(slots.default?.());
			if (compact && children) children = children.map((child, i) => {
				return cloneVNode(child, { class: {
					"k-input-group-first-item": i === 0,
					"k-input-group-item": i > 0 && i < children.length - 1,
					"k-input-group-last-item": i === children.length - 1
				} }, true, true);
			});
			return createVNode("div", rootProps, [children]);
		};
	}
});
//#endregion
//#region components/input/input.tsx
var Input = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	name: "Input",
	props: {
		clearable: {
			type: Boolean,
			default: true
		},
		visiblePasswordIcon: {
			type: Boolean,
			default: true
		},
		size: { type: String },
		modelValue: { type: [
			String,
			Number,
			Array,
			Object
		] },
		value: { type: [
			String,
			Number,
			Array,
			Object
		] },
		disabled: Boolean,
		type: {
			type: String,
			default: "text"
		},
		icon: [Array],
		suffix: { type: [
			String,
			Element,
			Object
		] },
		readonly: Boolean,
		prefix: { type: [
			String,
			Element,
			Object
		] },
		theme: {
			type: String,
			default: "light"
		},
		shape: String,
		inputType: {
			type: String,
			default: "input"
		},
		onSearch: { type: Function },
		maxlength: Number,
		"onUpdate:modelValue": Function,
		onIconClick: { type: Function }
	},
	setup(props, { slots, emit, attrs, expose }) {
		const currentValue = ref(props.modelValue || props.value);
		const focused = ref(false);
		const showPassword = ref(false);
		const inputRef = ref();
		const parentSize = inject("size", void 0);
		provide("size", props.size || parentSize);
		watch(() => props.modelValue, (v) => {
			currentValue.value = v;
		});
		const focus = () => inputRef.value?.focus();
		const blur = () => inputRef.value?.blur();
		expose({
			focus,
			blur
		});
		const clear = () => {
			currentValue.value = "";
			emit("update:modelValue", "");
			nextTick(() => focus());
		};
		const togglePassword = () => {
			if (props.disabled) return;
			showPassword.value = !showPassword.value;
		};
		const getSuffix = (slotSuffix) => {
			const { suffix, visiblePasswordIcon, type } = props;
			if (type === "password" && visiblePasswordIcon) return createVNode(Icon, {
				"class": "k-input-password-icon",
				"type": !showPassword.value ? Eye : EyeOff,
				"onClick": togglePassword
			}, null);
			else if (props?.onSearch) return createVNode(Icon, {
				"type": Search,
				"class": "k-input-search-icon",
				"onClick": () => emit("search", currentValue.value)
			}, null);
			return slotSuffix.length > 0 ? slotSuffix : suffix ? createVNode("div", { "class": "k-input-suffix" }, [suffix]) : null;
		};
		return () => {
			const { icon, size = parentSize || void 0, disabled, type, clearable, suffix, theme, prefix, shape, inputType } = props;
			const slotSuffix = getChildren(slots.suffix?.());
			const slotPrefix = getChildren(slots.prefix?.());
			const slotControls = getChildren(slots.controls?.());
			const multiple = (icon || props.onSearch || slotSuffix.length > 0 || suffix || slotPrefix.length > 0 || prefix || type === "password" || clearable || slotControls.length > 0) && type !== "hidden";
			const inputBoxProps = {
				...attrs,
				disabled,
				multiple,
				type,
				theme,
				shape,
				inputRef,
				inputType,
				value: currentValue.value,
				showPassword: showPassword.value,
				onInput: (e) => {
					const v = e.target.value;
					currentValue.value = v;
					emit("update:modelValue", v);
					emit("change", e);
				},
				onFocus: (e) => {
					focused.value = true;
					emit("focus", e);
				},
				onBlur: (e) => {
					focused.value = false;
					emit("blur", e);
				}
			};
			if (typeof size === "string") inputBoxProps.size = size;
			const textInput = createVNode(input_box_default, inputBoxProps, null);
			if (!multiple) return textInput;
			const clearableShow = clearable && !isEmpty(currentValue.value) && type !== "password" && attrs.readonly === void 0;
			const rootProps = {
				class: [{
					[`k-${inputType}`]: true,
					[`k-${inputType}-focus`]: focused.value,
					[`k-${inputType}-disabled`]: disabled,
					[`k-${inputType}-has-clear`]: clearableShow,
					[`k-${inputType}-sm`]: size === "small",
					[`k-${inputType}-lg`]: size === "large",
					[`k-${inputType}-${theme}`]: theme && theme !== "outline",
					[`k-${inputType}-circle`]: shape === "circle",
					[`k-${inputType}-square`]: shape === "square"
				}, attrs.class],
				multiple,
				style: attrs.style
			};
			if (slotPrefix.length > 0 || slotSuffix.length > 0) {
				const preChildren = slotPrefix.length ? createVNode("div", { "class": "k-input-group-prefix" }, [slotPrefix]) : null;
				const innerChildren = [];
				if (icon) innerChildren.push(createVNode(Icon, {
					"type": icon,
					"class": `k-${inputType}-icon`,
					"onClick": (e) => !disabled && emit("iconClick", e)
				}, null));
				if (prefix) innerChildren.push(createVNode("div", { "class": `k-${inputType}-prefix` }, [prefix]));
				innerChildren.push(textInput);
				if (clearable) innerChildren.push(createVNode(Icon, {
					"type": CircleX,
					"class": [`k-${inputType}-clearable`, { [`k-${inputType}-clearable-hidden`]: !clearableShow }],
					"onClick": clear
				}, null));
				if (slotControls.length) innerChildren.push(slotControls);
				const sufChildren = slotSuffix.length > 0 ? createVNode("div", { "class": "k-input-group-suffix" }, [slotSuffix]) : null;
				return createVNode(InputGroup, {
					"size": size,
					"theme": theme
				}, { default: () => [
					preChildren,
					createVNode("div", rootProps, [innerChildren]),
					sufChildren
				] });
			} else {
				const suffixNode = getSuffix(slotSuffix);
				const children = [];
				if (icon) children.push(createVNode(Icon, {
					"type": icon,
					"class": `k-${inputType}-icon`,
					"onClick": () => !disabled && emit("icon-click")
				}, null));
				if (prefix) children.push(createVNode("div", { "class": `k-${inputType}-prefix` }, [prefix]));
				children.push(textInput);
				if (clearable) children.push(createVNode(Icon, {
					"type": CircleX,
					"class": [`k-${inputType}-clearable`, { [`k-${inputType}-clearable-hidden`]: !clearableShow }],
					"onClick": clear
				}, null));
				if (suffixNode) children.push(suffixNode);
				if (slotControls.length) children.push(slotControls);
				return createVNode("div", rootProps, [children]);
			}
		};
	}
});
var TextArea = /* @__PURE__ */ defineComponent({
	name: "TextArea",
	props: {
		modelValue: [
			String,
			Number,
			Object,
			Array
		],
		value: [
			String,
			Number,
			Object,
			Array
		],
		theme: {
			type: String,
			default: "light"
		},
		shape: { type: String },
		size: String,
		placeholder: String,
		rows: {
			type: Number,
			default: 2
		},
		disabled: Boolean,
		readonly: Boolean
	},
	setup(props, { attrs, emit }) {
		const currentValue = ref(props.modelValue ?? props.value);
		watch(() => props.modelValue, (v) => {
			currentValue.value = v;
		});
		return () => {
			const { theme, disabled, size, shape, placeholder, rows } = props;
			return createVNode("textarea", {
				...attrs,
				placeholder,
				rows,
				class: ["k-textarea", {
					[`k-textarea-${theme}`]: theme === "light",
					"k-textarea-sm": size === "small",
					"k-textarea-square": shape === "square",
					"k-textarea-lg": size === "large"
				}],
				disabled,
				value: currentValue.value,
				onInput: (e) => emit("update:modelValue", e.target.value)
			}, null);
		};
	}
});
var InputNumber = /* @__PURE__ */ defineComponent({
	inheritAttrs: false,
	name: "InputNumber",
	props: {
		modelValue: [Number, String],
		value: [Number, String],
		min: {
			type: Number,
			default: -Infinity
		},
		max: {
			type: Number,
			default: Infinity
		},
		step: {
			type: Number,
			default: 1
		},
		precision: Number,
		formatter: Function,
		parser: Function,
		disabled: Boolean,
		readonly: Boolean,
		controls: {
			type: Boolean,
			default: true
		},
		suffix: String,
		prefix: String,
		theme: {
			type: String,
			default: "light"
		},
		shape: { type: String },
		icon: [Array],
		size: { type: String },
		placeholder: String,
		onChange: Function
	},
	setup(props, { slots, attrs, emit }) {
		const parentSize = inject("size", void 0);
		const innerValue = ref("");
		const userInput = ref(null);
		const clamp = (val) => {
			if (!isValidBig(val)) return val === "" ? "" : innerValue.value;
			try {
				let b = new Big(val);
				if (props.max !== Infinity && b.gt(props.max)) b = new Big(props.max);
				if (props.min !== -Infinity && b.lt(props.min)) b = new Big(props.min);
				return props.precision !== void 0 ? b.toFixed(props.precision) : b.toFixed();
			} catch (e) {
				return innerValue.value;
			}
		};
		watch(() => props.modelValue, (val) => {
			const next = normalize(val, props.precision);
			if (next !== innerValue.value) innerValue.value = next;
		}, { immediate: true });
		const emitValue = (value) => {
			emit("update:modelValue", value);
			emit("change", value);
		};
		const displayValue = computed(() => {
			if (userInput.value !== null) return userInput.value;
			if (innerValue.value === "") return "";
			return props.formatter ? props.formatter(innerValue.value) : innerValue.value;
		});
		const triggerUpdate = (val) => {
			const parsed = props.parser ? props.parser(String(val)) : val;
			const clampedStr = clamp(String(parsed));
			innerValue.value = clampedStr;
			userInput.value = null;
			emitValue(clampedStr === "" ? void 0 : Number(clampedStr));
		};
		const handleInput = (val) => {
			userInput.value = val;
			const parsed = props.parser ? props.parser(val) : val;
			if (val === "") {
				innerValue.value = "";
				emitValue(void 0);
				return;
			}
			if (isValidBig(parsed)) {
				const normalizedStr = new Big(parsed).toFixed();
				innerValue.value = normalizedStr;
				emitValue(Number(normalizedStr));
				if (props.formatter) {
					const formatted = props.formatter(normalizedStr);
					if (formatted !== userInput.value) userInput.value = formatted;
				}
			}
		};
		const handleBlur = (event) => {
			triggerUpdate(userInput.value !== null ? userInput.value : innerValue.value);
			emit("blur", event);
		};
		const stepAction = (type) => {
			if (props.disabled || props.readonly) return;
			const current = isValidBig(innerValue.value) ? innerValue.value : 0;
			triggerUpdate((type === "up" ? new Big(current).plus(props.step) : new Big(current).minus(props.step)).toFixed());
		};
		return () => {
			const inputProps = {
				...attrs,
				modelValue: displayValue.value,
				disabled: props.disabled,
				readonly: props.readonly,
				clearable: false,
				placeholder: props.placeholder,
				suffix: props.suffix,
				prefix: props.prefix,
				size: props.size || parentSize,
				icon: props.icon,
				shape: props.shape,
				theme: props.theme,
				inputType: "input-number",
				"onUpdate:modelValue": handleInput,
				onBlur: handleBlur,
				onKeydown: (e) => {
					if (e.key === "ArrowUp") {
						e.preventDefault();
						stepAction("up");
					}
					if (e.key === "ArrowDown") {
						e.preventDefault();
						stepAction("down");
					}
				}
			};
			const controls = props.controls && !props.readonly && !props.disabled ? createVNode("div", { "class": "k-input-number-controls" }, [createVNode("span", {
				"class": "k-input-number-control",
				"onClick": () => stepAction("up")
			}, [createVNode(Icon, { "type": ChevronUp }, null)]), createVNode("span", {
				"class": "k-input-number-control",
				"onClick": () => stepAction("down")
			}, [createVNode(Icon, { "type": ChevronDown }, null)])]) : null;
			return createVNode(Input, inputProps, {
				suffix: () => slots.suffix?.(),
				prefix: () => slots.prefix?.(),
				controls: () => controls
			});
		};
	}
});
var Option = /* @__PURE__ */ defineComponent({
	name: "Option",
	props: {
		value: {
			type: [String, Number],
			required: true
		},
		label: { type: [String, Number] },
		disabled: Boolean,
		checked: Boolean,
		active: Boolean,
		multiple: Boolean,
		onSelect: Function
	},
	setup(props, { slots, emit, attrs }) {
		const labelText = computed(() => props.label || slots.default?.() || props.value);
		const checked = computed(() => props.checked);
		const onSelect = () => {
			if (props.disabled) return;
			emit("select", {
				value: props.value,
				label: labelText.value
			});
		};
		return () => {
			const { multiple, disabled, active } = props;
			return createVNode("li", {
				...attrs,
				class: ["k-select-item", {
					"k-select-item-selected": checked.value,
					"k-select-item-active": active,
					"k-select-item-disabled": disabled
				}],
				onClick: onSelect
			}, [createVNode("span", null, [labelText.value, multiple ? createVNode(Icon, { "type": Check }, null) : null])]);
		};
	}
});
var Empty = /* @__PURE__ */ defineComponent({
	name: "Empty",
	props: {
		description: [String, Boolean],
		image: String,
		imageStyle: Object
	},
	setup(props, { slots, attrs }) {
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return injectedLocale instanceof Object && "value" in injectedLocale ? injectedLocale.value : injectedLocale;
		});
		return () => {
			const { image, imageStyle, description } = props;
			return createVNode("div", {
				...attrs,
				class: "k-empty"
			}, [createVNode("div", { "class": "k-empty-content" }, [
				(() => {
					if (!image && !slots.image) return createVNode(Icon, {
						"type": Inbox,
						"class": "k-empty-icon",
						"strokeWidth": "0.01em"
					}, null);
					else if (slots.image) return slots.image();
					else return createVNode("img", {
						src: image,
						class: "k-empty-image",
						style: imageStyle,
						alt: description || locale.value?.k.empty.description || "Empty state image"
					}, null);
				})(),
				description !== false ? createVNode("p", { "class": "k-empty-description" }, [description || slots.description?.() || locale.value?.k.empty.description]) : null,
				slots.default ? createVNode("div", { "class": "k-empty-footer" }, [slots.default()]) : null
			])]);
		};
	}
});
var Select = /* @__PURE__ */ defineComponent({
	name: "Select",
	directives: {
		transfer,
		resize
	},
	props: {
		placeholder: String,
		size: {
			type: String,
			default: "default"
		},
		placement: {
			type: String,
			default: "bottom-left"
		},
		width: Number,
		maxTagCount: Number,
		modelValue: [
			String,
			Number,
			Array
		],
		value: [
			String,
			Number,
			Array
		],
		clearable: {
			type: Boolean,
			default: true
		},
		filterable: Boolean,
		block: Boolean,
		disabled: Boolean,
		multiple: Boolean,
		loading: Boolean,
		bordered: {
			type: Boolean,
			default: true
		},
		showArrow: {
			type: Boolean,
			default: true
		},
		options: Array,
		theme: {
			type: String,
			default: "light"
		},
		emptyText: String,
		loadingText: String,
		icon: [Array],
		shape: String,
		arrowIcon: [Array],
		onSearch: Function,
		onChange: Function,
		onSelect: Function
	},
	setup(props, { slots, emit }) {
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return injectedLocale instanceof Object && "value" in injectedLocale ? injectedLocale.value : injectedLocale;
		});
		const visible = ref(false);
		const rendered = ref(false);
		const currentValue = ref(props.multiple ? props.modelValue || props.value || [] : isEmpty(props.modelValue || props.value) ? [] : [props.modelValue || props.value]);
		const queryInputVisible = ref(false);
		const queryKey = ref("");
		const queryInputMirrorRef = ref(null);
		const minWidth = ref(0);
		const queryInputFocused = ref(false);
		const queryInputRef = ref(null);
		const hasSearchEvent = !!props.onSearch;
		const refPopper = ref(null);
		const transOrigin = ref("bottom");
		const refSelection = ref(null);
		const left = ref(0);
		const top = ref(0);
		const currentPlacement = ref(props.placement);
		const queryInputEventTimer = ref();
		const activeIndex = ref(-1);
		const reallySize = ref(0);
		const ctxFocused = ref(false);
		watch(() => props.placement, (v) => {
			currentPlacement.value = v;
			if (visible.value) updatePosition();
		});
		watch(() => props.options, () => {
			if (visible.value) updatePosition();
		}, { deep: true });
		watch(() => props.modelValue, (v) => {
			currentValue.value = props.multiple ? v || [] : isEmpty(v) ? [] : [v];
			if (visible.value) updatePosition();
		});
		const scrollOptionIntoView = () => {
			const containerEl = refPopper.value;
			if (!containerEl) return;
			const optionEl = containerEl.children[0].children[activeIndex.value];
			const optionTop = optionEl.offsetTop;
			const optionHeight = optionEl.offsetHeight;
			containerEl.scrollTop = optionTop - containerEl.clientHeight / 2 + optionHeight / 2;
		};
		const onKeydown = (e) => {
			if ((!visible.value || optionsData.value.length === 0) && ctxFocused.value) {
				if (e.key === "ArrowDown" || e.key === "ArrowUp") toggle();
				return;
			}
			if (visible.value) {
				if (e.key === "ArrowDown") {
					let index = activeIndex.value;
					if (index < reallySize.value - 1) index += 1;
					else index = 0;
					activeIndex.value = index;
					scrollOptionIntoView();
					e.preventDefault();
					return;
				} else if (e.key === "ArrowUp") {
					let index = activeIndex.value;
					if (index >= 1) index -= 1;
					else index = reallySize.value - 1;
					activeIndex.value = index;
					scrollOptionIntoView();
					e.preventDefault();
					return;
				} else if (e.key === "Enter" && activeIndex.value >= 0 && (ctxFocused.value || queryInputFocused.value)) {
					const { label, value } = optionsData.value[activeIndex.value];
					onSelect({
						label,
						value
					});
					e.preventDefault();
					return;
				} else if (e.key === "Escape" && (ctxFocused.value || queryInputFocused.value)) {
					visible.value = false;
					clearQuery();
					e.preventDefault();
				}
			}
		};
		onBeforeUnmount(() => {
			document.removeEventListener("keydown", onKeydown);
			document.removeEventListener("click", outsideClick);
		});
		const labelText = computed(() => {
			const lookup = /* @__PURE__ */ new Map();
			optionsData.value.forEach((item) => {
				lookup.set(item.value, item.label);
			});
			return currentValue.value.map((val) => lookup.get(val) ?? val);
		});
		const updatePosition = () => {
			nextTick(() => {
				minWidth.value = refSelection.value?.offsetWidth || 0;
				setPlacement({
					refSelection,
					refPopper,
					currentPlacement,
					transOrigin,
					top,
					left
				});
			});
		};
		onMounted(() => {
			nextTick(() => {
				minWidth.value = refSelection.value?.offsetWidth || 0;
			});
			document.addEventListener("keydown", onKeydown);
		});
		const outsideClick = (e) => {
			const ctx = refSelection.value?.$el || refSelection.value;
			if (refPopper.value && !refPopper.value.contains(e.target) && ctx && !ctx.contains(e.target)) {
				visible.value = false;
				clearQuery();
			}
		};
		const isChecked = (value) => {
			if (props.multiple) return currentValue.value?.indexOf(value) >= 0;
			else return !isEmpty(currentValue.value) && currentValue.value[0] === value;
		};
		const clearQuery = () => {
			activeIndex.value = -1;
			if (props.filterable || hasSearchEvent) setTimeout(() => {
				queryKey.value = "";
				if (queryInputRef.value) {
					queryInputRef.value.value = "";
					queryInputRef.value.style.width = "";
				}
				queryInputVisible.value = false;
			}, 300);
		};
		const onMouseenter = (index) => {
			activeIndex.value = index;
		};
		const onSelect = (item) => {
			const { value, label } = { ...item };
			let selected = true;
			if (props.multiple) {
				if (currentValue.value?.indexOf(value) >= 0) {
					selected = false;
					currentValue.value = currentValue.value.filter((v) => v !== value);
				} else currentValue.value.push(value);
				updatePosition();
				if (hasSearchEvent || props.filterable) {
					if (queryInputRef.value) {
						queryInputRef.value.value = "";
						queryInputRef.value.style.width = "";
					}
					queryKey.value = "";
					showQuery();
				}
			} else {
				currentValue.value = [value];
				visible.value = false;
				emit("openChange", false);
				clearQuery();
				activeIndex.value = -1;
			}
			emitValue();
			emit("select", {
				value,
				label,
				selected
			});
		};
		const searchInput = (e) => {
			const target = e.target;
			queryKey.value = target.value;
			activeIndex.value = -1;
			nextTick(() => {
				if (queryInputMirrorRef.value) target.style.width = queryInputMirrorRef.value.offsetWidth + "px";
				updatePosition();
			});
			if (hasSearchEvent) {
				if (queryInputEventTimer.value) clearTimeout(queryInputEventTimer.value);
				queryInputEventTimer.value = setTimeout(() => {
					if (!rendered.value) {
						rendered.value = true;
						document.addEventListener("click", outsideClick);
						nextTick(() => {
							visible.value = true;
							emit("openChange", true);
							updatePosition();
						});
					} else {
						visible.value = true;
						emit("openChange", true);
						updatePosition();
					}
					emit("search", e);
				}, 500);
			}
		};
		const emptyClick = () => {
			if (queryInputVisible.value) nextTick(() => {
				queryInputRef.value?.focus();
				queryInputFocused.value = true;
			});
		};
		const emitValue = () => {
			const result = props.multiple ? currentValue.value : currentValue.value[0];
			emit("update:modelValue", result);
			emit("change", result);
		};
		const removeTag = (e, index) => {
			if (props.disabled) return;
			currentValue.value.splice(index, 1);
			e.stopPropagation();
			updatePosition();
			emitValue();
		};
		const onClear = (e) => {
			currentValue.value = [];
			emitValue();
			clearQuery();
			e.stopPropagation();
		};
		const showQuery = () => {
			if (props.filterable || hasSearchEvent) {
				queryInputVisible.value = true;
				nextTick(() => {
					queryInputRef.value?.focus();
					queryInputFocused.value = true;
				});
			}
		};
		const toggle = (show = null) => {
			if (props.disabled) return;
			if (hasSearchEvent) {
				showQuery();
				return;
			}
			if (!rendered.value) {
				rendered.value = true;
				document.addEventListener("click", outsideClick);
				nextTick(() => {
					visible.value = true;
					emit("openChange", true);
					updatePosition();
					showQuery();
				});
			} else {
				visible.value = show !== null ? show : !visible.value;
				emit("openChange", visible.value);
				if (visible.value) {
					updatePosition();
					showQuery();
				} else clearQuery();
			}
		};
		const optionsData = computed(() => {
			let { options, loading } = props;
			if (loading) return [];
			if (options && options.length > 0) return options;
			const data = [];
			getChildren(slots.default?.()).forEach((child) => {
				if (child?.props) {
					const { label, value, disabled } = child.props;
					const resolvedLabel = label || child?.children?.default?.()?.[0]?.children || value;
					data.push({
						value,
						disabled,
						label: resolvedLabel
					});
				}
			});
			return data;
		});
		const filterOptions = () => {
			const key = queryKey.value;
			return props.filterable && key.trim() !== "" ? optionsData.value.filter((item) => item.label.toLowerCase().includes(key.toLowerCase())) : optionsData.value;
		};
		const renderOptions = () => {
			const optionNodes = [];
			const nodes = filterOptions();
			reallySize.value = nodes.length;
			nodes.forEach((item, index) => {
				const { label, value, disabled } = { ...item };
				const checked = isChecked(value);
				optionNodes.push(createVNode(Option, {
					"onSelect": onSelect,
					"onMouseenter": () => onMouseenter(index),
					"key": `${value}-${label}`,
					"active": activeIndex.value === index,
					"value": value,
					"label": label,
					"disabled": disabled,
					"checked": checked,
					"multiple": props.multiple
				}, null));
			});
			return optionNodes;
		};
		const queryKeydown = ({ key }) => {
			if (key === "Backspace") {
				if (queryKey.value === "" && props.multiple && currentValue.value.length > 0) {
					currentValue.value = currentValue.value.slice(0, -1);
					emitValue();
					updatePosition();
				}
			}
		};
		const showClear = computed(() => {
			return props.clearable && !props.disabled && !isEmpty(currentValue.value) && !isEmpty(labelText.value);
		});
		const renderOverlay = () => {
			if (!rendered.value) return null;
			const optionNodes = renderOptions();
			const preCls = "k-select";
			const popperProps = {
				ref: refPopper,
				style: {
					minWidth: `${minWidth.value}px`,
					left: `${left.value}px`,
					top: `${top.value}px`,
					transformOrigin: transOrigin.value
				},
				class: [
					"k-select-dropdown",
					"k-scroll",
					{
						"k-select-dropdown-multiple": props.multiple,
						"k-select-dropdown-sm": props.size === "small"
					}
				]
			};
			const loadingNode = createVNode("div", { "class": "k-select-loading" }, [createVNode(Icon, {
				"type": Loading,
				"spin": true
			}, null), createVNode("span", null, [locale.value?.k.select.loading])]);
			return createVNode(Transition, { "name": `${preCls}` }, { default: () => [withDirectives(createVNode("div", popperProps, [props.loading ? loadingNode : optionNodes.length ? createVNode("ul", null, [optionNodes]) : createVNode(Empty, {
				"onClick": emptyClick,
				"description": props.emptyText || locale.value?.k.select.emptyText
			}, null)]), [[resolveDirective("transfer"), true], [vShow, visible.value]])] });
		};
		return () => {
			const { disabled, size, multiple, placeholder, showArrow, bordered, theme, arrowIcon, icon, shape, filterable } = props;
			let childNode = [];
			const finalArrowIcon = arrowIcon || ChevronDown;
			const queryNode = withDirectives(createVNode("div", {
				"key": "search",
				"class": "k-select-search-wrap"
			}, [createVNode("input", {
				ref: queryInputRef,
				class: "k-select-search",
				autoComplete: "off",
				onChange: (e) => e.stopPropagation(),
				onKeydown: queryKeydown,
				onInput: searchInput,
				onBlur: () => {
					if (!visible.value) queryInputVisible.value = false;
				}
			}, null), createVNode("span", {
				"class": "k-select-search-mirror",
				"ref": queryInputMirrorRef
			}, [queryKey.value])]), [[vShow, queryInputVisible.value]]);
			const placeholderText = placeholder || locale.value?.k.select.placeholder;
			const placeNode = placeholderText && isEmpty(labelText.value) && !queryKey.value ? createVNode("div", { "class": "k-select-placeholder" }, [placeholderText]) : null;
			const renderTags = () => {
				let tags = labelText.value.map((label, i) => {
					return createVNode("span", {
						"class": "k-select-tag",
						"key": label
					}, [label, createVNode(Icon, {
						"type": X,
						"onClick": (e) => removeTag(e, i)
					}, null)]);
				});
				if (props.maxTagCount && props.maxTagCount > 0 && tags.length > props.maxTagCount) {
					tags = tags.slice(0, props.maxTagCount);
					tags.push(createVNode("span", { "class": "k-select-tag" }, [
						createTextVNode("+"),
						labelText.value.length - props.maxTagCount,
						createTextVNode("...")
					]));
				}
				return tags;
			};
			const labelsNode = multiple ? createVNode("div", { "class": "k-select-labels" }, [renderTags(), queryNode]) : !isEmpty(labelText.value) ? withDirectives(createVNode("div", { "class": "k-select-label" }, [labelText.value[0]]), [[vShow, !queryKey.value.length]]) : null;
			childNode.push(labelsNode);
			placeNode && childNode.push(placeNode);
			if ((filterable || hasSearchEvent) && !multiple) childNode.push(queryNode);
			const rootStyles = {};
			if (props.width) rootStyles.width = `${props.width}px`;
			const arrowNode = !hasSearchEvent && showArrow ? createVNode(Icon, {
				"class": "k-select-arrow",
				"type": finalArrowIcon
			}, null) : null;
			const rootClasses = ["k-select", {
				"k-select-disabled": disabled,
				"k-select-block": props.block,
				"k-select-opened": visible.value,
				"k-select-borderless": bordered === false,
				"k-select-lg": size === "large",
				"k-select-sm": size === "small",
				"k-select-light": theme === "light",
				"k-select-has-icon": !!icon,
				"k-select-circle": shape === "circle" && !multiple,
				"k-select-square": shape === "square",
				"k-select-multiple": multiple,
				"k-select-show-search": queryInputFocused.value,
				"k-select-show-tags": multiple && !isEmpty(labelText.value),
				"k-select-has-clear": showClear.value
			}];
			const clearNode = showClear.value ? createVNode(Icon, {
				"class": "k-select-clearable",
				"type": CircleX,
				"onClick": onClear
			}, null) : null;
			return withDirectives(createVNode("div", {
				tabIndex: disabled ? void 0 : 0,
				class: rootClasses,
				style: rootStyles,
				onClick: () => toggle(),
				onFocus: () => ctxFocused.value = true,
				onBlur: () => ctxFocused.value = false,
				ref: refSelection
			}, [
				icon ? createVNode(Icon, {
					"type": icon,
					"class": "k-select-icon"
				}, null) : null,
				createVNode("div", { "class": "k-select-selection" }, [childNode]),
				createVNode("span", { "class": "k-select-suffix" }, [arrowNode, clearNode]),
				renderOverlay()
			]), [[resolveDirective("resize"), updatePosition]]);
		};
	}
});
//#endregion
//#region components/utils/color.ts
function isColor(value) {
	if (typeof value !== "string" || typeof CSS === "undefined" || !CSS.supports) return false;
	return CSS.supports("color", value);
}
//#endregion
//#region components/color-picker/mode.tsx
var mode_default = /* @__PURE__ */ defineComponent({
	name: "Mode",
	props: {
		modelValue: [String, Object],
		mode: {
			type: String,
			default: "hex"
		},
		disabledAlpha: Boolean,
		onUpdateMode: Function,
		onUpdateColorValue: Function
	},
	setup(props, { emit }) {
		const currentMode = ref(props.mode);
		const options = [
			{
				label: "HEX",
				value: "hex"
			},
			{
				label: "RGB",
				value: "rgb"
			},
			{
				label: "HSL",
				value: "hsl"
			}
		];
		watch(() => props.mode, (val) => {
			currentMode.value = val;
		});
		const updateHex = (e) => {
			const hex = e.target.value;
			if (!isColor(hex)) return;
			emit("updateColorValue", Color(hex).rgb());
		};
		const valueChange = (value, type) => {
			let color = Color(props.modelValue);
			switch (type) {
				case "r":
					color = color.red(value);
					break;
				case "g":
					color = color.green(value);
					break;
				case "b":
					color = color.blue(value);
					break;
				case "a":
					color = color.alpha(value / 100);
					break;
				case "h":
					color = color.hue(value);
					break;
				case "s":
					color = color.saturationl(value);
					break;
				case "l":
					color = color.lightness(value);
					break;
			}
			emit("updateColorValue", color);
		};
		const changeMode = (v) => {
			currentMode.value = v;
			emit("updateMode", v);
		};
		return () => {
			const nodes = [];
			const color = Color(props.modelValue);
			const alpha = color.alpha();
			if (currentMode.value === "hex") {
				const hex = color.hex().slice(1);
				nodes.push(createVNode(Input, {
					"prefix": "#",
					"size": "small",
					"modelValue": hex,
					"onChange": (e) => updateHex(e)
				}, null));
			} else if (currentMode.value === "rgb") {
				const [r, g, b] = color.rgb().array();
				nodes.push(createVNode(InputNumber, {
					"size": "small",
					"min": 0,
					"max": 255,
					"modelValue": Math.round(r),
					"onChange": (e) => valueChange(e, "r")
				}, null));
				nodes.push(createVNode(InputNumber, {
					"size": "small",
					"min": 0,
					"max": 255,
					"modelValue": Math.round(g),
					"onChange": (e) => valueChange(e, "g")
				}, null));
				nodes.push(createVNode(InputNumber, {
					"size": "small",
					"min": 0,
					"max": 255,
					"modelValue": Math.round(b),
					"onChange": (e) => valueChange(e, "b")
				}, null));
			} else if (currentMode.value === "hsl") {
				const [_h, s, l] = color.hsl().array();
				nodes.push(createVNode(InputNumber, {
					"size": "small",
					"min": 0,
					"max": 359,
					"modelValue": Math.round(_h),
					"onChange": (e) => valueChange(e, "h")
				}, null));
				nodes.push(createVNode(InputNumber, {
					"size": "small",
					"formatter": (value) => `${value}%`,
					"parser": (value) => value.replace("%", ""),
					"min": 0,
					"max": 100,
					"modelValue": Math.round(s),
					"onChange": (e) => valueChange(e, "s")
				}, null));
				nodes.push(createVNode(InputNumber, {
					"size": "small",
					"formatter": (value) => `${value}%`,
					"parser": (value) => value.replace("%", ""),
					"min": 0,
					"max": 100,
					"modelValue": Math.round(l),
					"onChange": (e) => valueChange(e, "l")
				}, null));
			}
			if (!props.disabledAlpha) nodes.push(createVNode(InputNumber, {
				"formatter": (value) => `${value}%`,
				"parser": (value) => value.replace("%", ""),
				"modelValue": Math.round(alpha * 100),
				"size": "small",
				"min": 0,
				"max": 100,
				"class": "k-color-picker-alpha-input",
				"onChange": (e) => valueChange(e, "a")
			}, null));
			return createVNode("div", { "class": `k-color-picker-mode k-color-picker-${currentMode.value}` }, [createVNode(Select, {
				"clearable": false,
				"bordered": false,
				"size": "small",
				"modelValue": currentMode.value,
				"options": options,
				"onChange": changeMode
			}, null), createVNode("div", { "class": "k-color-picker-val" }, [[...nodes]])]);
		};
	}
});
//#endregion
//#region components/color-picker/paint.tsx
var paint_default = /* @__PURE__ */ defineComponent({
	name: "Paint",
	props: {
		hue: {
			type: Number,
			default: 0
		},
		modelValue: {
			type: [String, Object],
			required: true
		},
		onUpdateRGB: Function
	},
	setup(props, { emit }) {
		const refPaint = ref(null);
		const dotPos = reactive({
			x: 0,
			y: 0
		});
		const renderPaint = () => {
			const canvas = refPaint.value;
			if (!canvas) return;
			const ctx = canvas.getContext("2d", { willReadFrequently: true });
			if (!ctx) return;
			const { width, height } = canvas;
			ctx.fillStyle = `hsl(${props.hue}, 100%, 50%)`;
			ctx.fillRect(0, 0, width, height);
			const whiteGrad = ctx.createLinearGradient(0, 0, width, 0);
			whiteGrad.addColorStop(0, "#fff");
			whiteGrad.addColorStop(1, "rgba(255,255,255,0)");
			ctx.fillStyle = whiteGrad;
			ctx.fillRect(0, 0, width, height);
			const blackGrad = ctx.createLinearGradient(0, 0, 0, height);
			blackGrad.addColorStop(0, "rgba(0,0,0,0)");
			blackGrad.addColorStop(1, "#000");
			ctx.fillStyle = blackGrad;
			ctx.fillRect(0, 0, width, height);
		};
		const updatePos = () => {
			const hsv = Color(props.modelValue).hsv().object();
			dotPos.x = hsv.s / 100 * 234 - 7;
			dotPos.y = (1 - hsv.v / 100) * 136 - 7;
		};
		const handleMove = (e) => {
			const canvas = refPaint.value;
			if (!canvas) return;
			const { width, height, left, top } = canvas.getBoundingClientRect();
			const x = clamp(e.clientX - left, 0, width);
			const y = clamp(e.clientY - top, 0, height);
			const s = x / width * 100;
			const v = (1 - y / height) * 100;
			emit("updateRGB", Color().hsv(props.hue, s, v).rgb().object());
		};
		const onMouseDown = (e) => {
			handleMove(e);
			document.addEventListener("mousemove", handleMove);
			document.addEventListener("mouseup", () => {
				document.removeEventListener("mousemove", handleMove);
			}, { once: true });
		};
		watch([() => props.hue, () => props.modelValue], () => {
			renderPaint();
			updatePos();
		});
		onMounted(() => {
			renderPaint();
			updatePos();
		});
		return () => createVNode("div", { "class": "k-color-picker-paint-container" }, [createVNode("canvas", {
			"class": "k-color-picker-paint",
			"width": 234,
			"height": 136,
			"ref": refPaint,
			"onMousedown": onMouseDown
		}, null), createVNode("span", {
			"class": "k-color-picker-paint-dot",
			"style": {
				left: `${dotPos.x}px`,
				top: `${dotPos.y}px`
			}
		}, null)]);
	}
});
//#endregion
//#region components/color-picker/presets.tsx
var presets_default = /* @__PURE__ */ defineComponent({
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
				"#000"
			]
		},
		onUpdateColor: Function
	},
	setup(props, { emit }) {
		return () => {
			if (props.modelValue.length == 0) return null;
			return createVNode("div", { "class": "k-color-picker-presets" }, [props.modelValue.map((hex) => createVNode("span", {
				"style": { backgroundColor: hex },
				"onClick": () => emit("updateColor", Color(hex))
			}, [Color(props.color).hex() == Color(hex).hex() ? createVNode(Icon, { "type": Check }, null) : null]))]);
		};
	}
});
var ColorPicker = /* @__PURE__ */ defineComponent({
	name: "ColorPicker",
	directives: {
		transfer,
		resize
	},
	props: {
		modelValue: String,
		value: String,
		disabled: Boolean,
		disabledAlpha: Boolean,
		showText: Boolean,
		placement: {
			type: String,
			default: "bottom-left"
		},
		trigger: {
			type: String,
			default: "click"
		},
		size: {
			type: String,
			default: "default"
		},
		mode: {
			type: String,
			default: "hex"
		},
		presets: { type: Array },
		onChange: { type: Function },
		onUpdateMode: { type: Function }
	},
	setup(props, { emit, slots }) {
		const currentMode = ref(props.mode);
		const currentColor = ref(props.modelValue || props.value || "#000000ff");
		const visible = ref(false);
		const refPopper = ref();
		const refSelection = ref();
		const left = ref(0);
		const top = ref(0);
		const currentPlacement = ref(props.placement);
		const transOrigin = ref("bottom");
		const rendered = ref(false);
		const currentAlpha = ref(1);
		const currentHue = ref(0);
		const hideTimer = ref();
		watch(() => props.modelValue, (v) => {
			currentColor.value = v || "#000000ff";
		});
		onMounted(() => {
			if (props.modelValue) {
				currentAlpha.value = Color(props.modelValue).alpha();
				currentHue.value = Color(props.modelValue).hue();
			}
		});
		onBeforeUnmount(() => {
			document.removeEventListener("click", outsideClick);
		});
		const updatePopPosition = () => {
			nextTick(() => {
				setPlacement({
					refSelection,
					refPopper,
					currentPlacement,
					transOrigin,
					top,
					left
				});
			});
		};
		const outsideClick = (e) => {
			const ctx = refSelection.value?.$el || refSelection.value;
			if (refPopper.value && !refPopper.value.contains(e.target) && ctx && !ctx.contains(e.target)) {
				clearTimeout(hideTimer.value);
				hideTimer.value = setTimeout(() => visible.value = false, 200);
			}
		};
		const toggle = (open) => {
			if (props.disabled) return false;
			if (open) if (!rendered.value) {
				rendered.value = true;
				document.addEventListener("click", outsideClick);
				nextTick(() => {
					visible.value = true;
					updatePopPosition();
				});
			} else {
				visible.value = true;
				updatePopPosition();
			}
			else visible.value = false;
		};
		const getColor = () => {
			let text = "";
			const color = Color(currentColor.value);
			if (currentMode.value == "hex") text = color.alpha() < 1 ? color.hexa() : color.hex();
			else if (currentMode.value == "rgb") text = color.rgb().string(0);
			else if (currentMode.value == "hsl") text = color.hsl().string(0);
			return text;
		};
		const renderTriggerText = () => {
			let text = getColor();
			return props.showText ? createVNode("div", { "class": "k-color-picker-trigger-text" }, [text]) : null;
		};
		const onUpdate = (color) => {
			currentColor.value = color;
			const value = getColor();
			emit("update:modelValue", value);
			emit("change", value);
		};
		const onUpdateRGB = ({ r, g, b }) => {
			onUpdate(Color({
				r,
				g,
				b,
				alpha: currentAlpha.value
			}).rgb());
		};
		const onUpdateHue = (hue) => {
			currentHue.value = hue;
			onUpdate(Color(currentColor.value).hue(hue).rgb());
		};
		const onUpdateAlpha = (a) => {
			currentAlpha.value = a;
			onUpdate(Color(currentColor.value).alpha(a).rgb());
		};
		const onUpdateMode = (mode) => {
			currentMode.value = mode;
			onUpdate(currentColor.value);
			emit("update:mode", mode);
			setTimeout(() => {
				clearTimeout(hideTimer.value);
			}, 0);
		};
		const updateColorValue = (color) => {
			currentAlpha.value = color.alpha();
			currentColor.value = color;
			currentHue.value = color.hue();
			onUpdate(color);
		};
		const updateColor = (color) => {
			currentAlpha.value = color.alpha();
			currentHue.value = color.hue();
			updateColorValue(color.rgb());
		};
		const renderDrop = () => {
			if (!rendered.value) return null;
			const _props = {
				ref: refPopper,
				"k-placement": currentPlacement.value,
				class: ["k-color-picker-dropdown", { "k-color-picker-disabled-alpha": props.disabledAlpha }],
				style: {
					left: `${left.value}px`,
					top: `${top.value}px`,
					transformOrigin: transOrigin.value
				},
				onMouseenter: () => {
					clearTimeout(hideTimer.value);
				}
			};
			return createVNode(Transition, { "name": "k-color-picker" }, { default: () => [withDirectives(createVNode("div", _props, [createVNode("div", { "class": "k-color-picker-body" }, [
				createVNode(paint_default, {
					"hue": currentHue.value,
					"modelValue": currentColor.value,
					"onUpdateRGB": onUpdateRGB
				}, null),
				createVNode("div", { "class": "k-color-picker-bar" }, [createVNode("div", { "class": "k-color-picker-avatar" }, [createVNode("div", {
					"class": "k-color-picker-avatar-inner",
					"style": `background-color:${currentColor.value}`
				}, null)]), createVNode("div", { "class": "k-color-picker-bar-box" }, [createVNode(hue_default, {
					"hue": currentHue.value,
					"onUpdateHue": onUpdateHue
				}, null), !props.disabledAlpha ? createVNode(alpha_default, {
					"modelValue": currentColor.value,
					"onUpdateAlpha": onUpdateAlpha
				}, null) : null])]),
				createVNode(mode_default, {
					"mode": currentMode.value,
					"modelValue": currentColor.value,
					"disabledAlpha": props.disabledAlpha,
					"onUpdateMode": onUpdateMode,
					"onUpdateColorValue": updateColorValue
				}, null),
				createVNode(presets_default, {
					"onUpdateColor": updateColor,
					"modelValue": props.presets,
					"color": currentColor.value
				}, null)
			]), createVNode("div", { "class": `k-color-picker-arrow` }, [createVNode("svg", {
				"style": { fill: "currentcolor" },
				"viewBox": "0 0 24 8"
			}, [createVNode("path", {
				"id": "ot",
				"d": "m24,0.97087l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
			}, null), createVNode("path", {
				"stroke": "currentcolor",
				"id": "in",
				"d": "m24,0l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
			}, null)])])]), [[resolveDirective("transfer"), true], [vShow, visible.value]])] });
		};
		const onMouseleave = () => {
			if (props.disabled) return;
			if (props.trigger == "hover") hideTimer.value = setTimeout(() => {
				toggle(false);
			}, 300);
		};
		return () => {
			let drop = renderDrop();
			let style = ["k-color-picker", {
				"k-color-picker-opened": visible.value,
				"k-color-picker-disabled": props.disabled,
				"k-color-picker-sm": props.size == "small",
				"k-color-picker-lg": props.size == "large"
			}];
			const triggerClick = props.trigger == "click";
			return slots.default ? createVNode("span", null, [cloneNodes(slots.default(), {
				ref: refSelection,
				onClick: () => triggerClick && toggle(!visible.value),
				onMouseenter: () => !triggerClick && toggle(true),
				onMouseleave
			}, true), drop]) : withDirectives(createVNode("div", {
				"class": style,
				"ref": refSelection
			}, [createVNode("div", {
				"class": "k-color-picker-selection",
				"onMouseenter": () => !triggerClick && toggle(true),
				"onMouseleave": onMouseleave,
				"onClick": () => triggerClick && toggle(!visible.value)
			}, [createVNode("div", { "class": "k-color-picker-color" }, [createVNode("div", {
				"class": "k-color-picker-color-inner",
				"style": `background-color:${currentColor.value}`
			}, null)]), renderTriggerText()]), drop]), [[resolveDirective("resize"), updatePopPosition]]);
		};
	}
});
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, t) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
	})(exports, (function() {
		"use strict";
		var e = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		}, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, a = function(e) {
			return (e = +e) + (e > 68 ? 1900 : 2e3);
		};
		var f = function(e) {
			return function(t) {
				this[e] = +t;
			};
		}, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e) {
			(this.zone || (this.zone = {})).offset = function(e) {
				if (!e) return 0;
				if ("Z" === e) return 0;
				var t = e.match(/([+-]|\d\d)/g), n = 60 * t[1] + (+t[2] || 0);
				return 0 === n ? 0 : "+" === t[0] ? -n : n;
			}(e);
		}], u = function(e) {
			var t = s[e];
			return t && (t.indexOf ? t : t.s.concat(t.f));
		}, d = function(e, t) {
			var n, r = s.meridiem;
			if (r) {
				for (var i = 1; i <= 24; i += 1) if (e.indexOf(r(i, 0, t)) > -1) {
					n = i > 12;
					break;
				}
			} else n = e === (t ? "pm" : "PM");
			return n;
		}, c = {
			A: [o, function(e) {
				this.afternoon = d(e, !1);
			}],
			a: [o, function(e) {
				this.afternoon = d(e, !0);
			}],
			Q: [n, function(e) {
				this.month = 3 * (e - 1) + 1;
			}],
			S: [n, function(e) {
				this.milliseconds = 100 * +e;
			}],
			SS: [r, function(e) {
				this.milliseconds = 10 * +e;
			}],
			SSS: [/\d{3}/, function(e) {
				this.milliseconds = +e;
			}],
			s: [i, f("seconds")],
			ss: [i, f("seconds")],
			m: [i, f("minutes")],
			mm: [i, f("minutes")],
			H: [i, f("hours")],
			h: [i, f("hours")],
			HH: [i, f("hours")],
			hh: [i, f("hours")],
			D: [i, f("day")],
			DD: [r, f("day")],
			Do: [o, function(e) {
				var t = s.ordinal, n = e.match(/\d+/);
				if (this.day = n[0], t) for (var r = 1; r <= 31; r += 1) t(r).replace(/\[|\]/g, "") === e && (this.day = r);
			}],
			w: [i, f("week")],
			ww: [r, f("week")],
			M: [i, f("month")],
			MM: [r, f("month")],
			MMM: [o, function(e) {
				var t = u("months"), n = (u("monthsShort") || t.map((function(e) {
					return e.slice(0, 3);
				}))).indexOf(e) + 1;
				if (n < 1) throw new Error();
				this.month = n % 12 || n;
			}],
			MMMM: [o, function(e) {
				var t = u("months").indexOf(e) + 1;
				if (t < 1) throw new Error();
				this.month = t % 12 || t;
			}],
			Y: [/[+-]?\d+/, f("year")],
			YY: [r, function(e) {
				this.year = a(e);
			}],
			YYYY: [/\d{4}/, f("year")],
			Z: h,
			ZZ: h
		};
		function l(n) {
			var r = n, i = s && s.formats;
			for (var o = (n = r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t, n, r) {
				var o = r && r.toUpperCase();
				return n || i[r] || e[r] || i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, t, n) {
					return t || n.slice(1);
				}));
			}))).match(t), a = o.length, f = 0; f < a; f += 1) {
				var h = o[f], u = c[h], d = u && u[0], l = u && u[1];
				o[f] = l ? {
					regex: d,
					parser: l
				} : h.replace(/^\[|\]$/g, "");
			}
			return function(e) {
				for (var t = {}, n = 0, r = 0; n < a; n += 1) {
					var i = o[n];
					if ("string" == typeof i) r += i.length;
					else {
						var s = i.regex, f = i.parser, h = e.slice(r), u = s.exec(h)[0];
						f.call(t, u), e = e.replace(u, "");
					}
				}
				return function(e) {
					var t = e.afternoon;
					if (void 0 !== t) {
						var n = e.hours;
						t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0), delete e.afternoon;
					}
				}(t), t;
			};
		}
		return function(e, t, n) {
			n.p.customParseFormat = !0, e && e.parseTwoDigitYear && (a = e.parseTwoDigitYear);
			var r = t.prototype, i = r.parse;
			r.parse = function(e) {
				var t = e.date, r = e.utc, o = e.args;
				this.$u = r;
				var a = o[1];
				if ("string" == typeof a) {
					var f = !0 === o[2], h = !0 === o[3], u = f || h, d = o[2];
					h && (d = o[2]), s = this.$locale(), !f && d && (s = n.Ls[d]), this.$d = function(e, t, n, r) {
						try {
							if (["x", "X"].indexOf(t) > -1) return /* @__PURE__ */ new Date(("X" === t ? 1e3 : 1) * e);
							var i = l(t)(e), o = i.year, s = i.month, a = i.day, f = i.hours, h = i.minutes, u = i.seconds, d = i.milliseconds, c = i.zone, m = i.week, M = /* @__PURE__ */ new Date(), Y = a || (o || s ? 1 : M.getDate()), p = o || M.getFullYear(), v = 0;
							o && !s || (v = s > 0 ? s - 1 : M.getMonth());
							var D, w = f || 0, g = h || 0, y = u || 0, L = d || 0;
							return c ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c.offset * 1e3)) : n ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m && (D = r(D).week(m).toDate()), D);
						} catch (e) {
							return /* @__PURE__ */ new Date("");
						}
					}(t, a, r, n), this.init(), d && !0 !== d && (this.$L = this.locale(d).$L), u && t != this.format(a) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
				} else if (a instanceof Array) for (var c = a.length, m = 1; m <= c; m += 1) {
					o[1] = a[m - 1];
					var M = n.apply(this, o);
					if (M.isValid()) {
						this.$d = M.$d, this.$L = M.$L, this.init();
						break;
					}
					m === c && (this.$d = /* @__PURE__ */ new Date(""));
				}
				else i.call(this, e);
			};
		};
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/plugin/isBetween.js
var require_isBetween = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(e, i) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isBetween = i();
	})(exports, (function() {
		"use strict";
		return function(e, i, t) {
			i.prototype.isBetween = function(e, i, s, f) {
				var n = t(e), o = t(i), r = "(" === (f = f || "()")[0], u = ")" === f[1];
				return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
			};
		};
	}));
}));
//#endregion
//#region node_modules/.pnpm/dayjs@1.11.20/node_modules/dayjs/plugin/localeData.js
var require_localeData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(n, e) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (n = "undefined" != typeof globalThis ? globalThis : n || self).dayjs_plugin_localeData = e();
	})(exports, (function() {
		"use strict";
		return function(n, e, t) {
			var r = e.prototype, o = function(n) {
				return n && (n.indexOf ? n : n.s);
			}, u = function(n, e, t, r, u) {
				var i = n.name ? n : n.$locale(), a = o(i[e]), s = o(i[t]), f = a || s.map((function(n) {
					return n.slice(0, r);
				}));
				if (!u) return f;
				var d = i.weekStart;
				return f.map((function(n, e) {
					return f[(e + (d || 0)) % 7];
				}));
			}, i = function() {
				return t.Ls[t.locale()];
			}, a = function(n, e) {
				return n.formats[e] || function(n) {
					return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(n, e, t) {
						return e || t.slice(1);
					}));
				}(n.formats[e.toUpperCase()]);
			}, s = function() {
				var n = this;
				return {
					months: function(e) {
						return e ? e.format("MMMM") : u(n, "months");
					},
					monthsShort: function(e) {
						return e ? e.format("MMM") : u(n, "monthsShort", "months", 3);
					},
					firstDayOfWeek: function() {
						return n.$locale().weekStart || 0;
					},
					weekdays: function(e) {
						return e ? e.format("dddd") : u(n, "weekdays");
					},
					weekdaysMin: function(e) {
						return e ? e.format("dd") : u(n, "weekdaysMin", "weekdays", 2);
					},
					weekdaysShort: function(e) {
						return e ? e.format("ddd") : u(n, "weekdaysShort", "weekdays", 3);
					},
					longDateFormat: function(e) {
						return a(n.$locale(), e);
					},
					meridiem: this.$locale().meridiem,
					ordinal: this.$locale().ordinal
				};
			};
			r.localeData = function() {
				return s.bind(this)();
			}, t.localeData = function() {
				var n = i();
				return {
					firstDayOfWeek: function() {
						return n.weekStart || 0;
					},
					weekdays: function() {
						return t.weekdays();
					},
					weekdaysShort: function() {
						return t.weekdaysShort();
					},
					weekdaysMin: function() {
						return t.weekdaysMin();
					},
					months: function() {
						return t.months();
					},
					monthsShort: function() {
						return t.monthsShort();
					},
					longDateFormat: function(e) {
						return a(n, e);
					},
					meridiem: n.meridiem,
					ordinal: n.ordinal
				};
			}, t.months = function() {
				return u(i(), "months");
			}, t.monthsShort = function() {
				return u(i(), "monthsShort", "months", 3);
			}, t.weekdays = function(n) {
				return u(i(), "weekdays", null, null, n);
			}, t.weekdaysShort = function(n) {
				return u(i(), "weekdaysShort", "weekdays", 3, n);
			}, t.weekdaysMin = function(n) {
				return u(i(), "weekdaysMin", "weekdays", 2, n);
			};
		};
	}));
}));
//#endregion
//#region components/date-picker/index.tsx
var import_customParseFormat = /* @__PURE__ */ __toESM(require_customParseFormat(), 1);
var import_isBetween = /* @__PURE__ */ __toESM(require_isBetween(), 1);
var import_localeData = /* @__PURE__ */ __toESM(require_localeData(), 1);
dayjs.extend(import_isBetween.default);
dayjs.extend(import_customParseFormat.default);
dayjs.extend(import_localeData.default);
var DatePicker = /* @__PURE__ */ defineComponent({
	name: "DatePicker",
	directives: {
		transfer,
		resize
	},
	props: {
		modelValue: {
			type: [
				Date,
				Object,
				Array,
				String,
				Number
			],
			default: null
		},
		startDate: {
			type: [
				Date,
				Object,
				String,
				Number
			],
			default: null
		},
		endDate: {
			type: [
				Date,
				Object,
				String,
				Number
			],
			default: null
		},
		valueType: {
			type: String,
			default: "string"
		},
		mode: {
			type: String,
			default: "date"
		},
		presets: Array,
		disabled: { type: Boolean },
		clearable: {
			type: Boolean,
			default: true
		},
		editable: {
			type: Boolean,
			default: true
		},
		placeholder: {
			type: [String, Array],
			default: ""
		},
		format: {
			type: String,
			default: null
		},
		disabledDate: {
			type: Function,
			default: () => false
		},
		disabledTime: {
			type: Function,
			default: () => false
		},
		size: {
			type: String,
			default: "default"
		},
		dateIcon: { type: Array },
		theme: {
			type: String,
			default: "light"
		},
		shape: {
			type: String,
			default: "default"
		},
		bordered: {
			type: Boolean,
			default: true
		},
		placement: {
			type: String,
			default: "bottom-left"
		}
	},
	setup(props, { emit, slots }) {
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return (injectedLocale instanceof Object && "value" in injectedLocale ? injectedLocale.value : injectedLocale) || zh_CN_default;
		});
		const local = () => {
			return dayjs().locale(localeName.value).localeData();
		};
		const localeName = computed(() => {
			return locale.value.name || "zh-cn";
		});
		const isVisible = ref(false);
		const isFocus = ref(false);
		const rendered = ref(false);
		const currentPlacement = ref(props.placement);
		const left = ref(0);
		const top = ref(0);
		const transOrigin = ref("bottom");
		const refPopper = ref(null);
		const refSelection = ref(null);
		const timeColRefs = ref({});
		const panelDate = ref(dayjs());
		const innerValue = ref(null);
		const textValue = ref("");
		const textValueStart = ref("");
		const textValueEnd = ref("");
		const hoverDate = ref(null);
		const currentView = ref("date");
		const timeEditSide = ref("start");
		const isRange = computed(() => props.mode.includes("Range"));
		watch(localeName, () => {
			syncTextFromValue();
		});
		const isYearFirst = computed(() => {
			const name = localeName.value.toLowerCase();
			return [
				"zh",
				"ja",
				"ko"
			].some((k) => name.includes(k));
		});
		const formatOutputValue = (dayjsVal) => {
			if (!dayjsVal) return null;
			const d = dayjsVal.locale(localeName.value);
			switch (props.valueType) {
				case "timestamp": return d.valueOf();
				case "unix": return d.unix();
				case "string": return d.format(getFormat());
				default: return d.toDate();
			}
		};
		const getFormat = () => {
			if (props.format) return Array.isArray(props.format) ? props.format[0] : props.format;
			return {
				date: "YYYY-MM-DD",
				dateTime: "YYYY-MM-DD HH:mm:ss",
				dateRange: "YYYY-MM-DD",
				dateTimeRange: "YYYY-MM-DD HH:mm:ss",
				month: "YYYY-MM",
				time: "HH:mm:ss",
				year: "YYYY"
			}[props.mode] || "YYYY-MM-DD";
		};
		const scrollToCurrentTime = () => {
			nextTick(() => {
				let activeDate = dayjs();
				if (props.mode === "dateTimeRange") {
					const idx = timeEditSide.value === "start" ? 0 : 1;
					let value = innerValue.value;
					if (value && value[idx]) activeDate = value[idx];
				} else if (innerValue.value && !Array.isArray(innerValue.value)) activeDate = innerValue.value;
				const targets = {
					hour: activeDate.hour(),
					minute: activeDate.minute(),
					second: activeDate.second()
				};
				[
					"hour",
					"minute",
					"second"
				].forEach((type) => {
					const el = timeColRefs.value[type];
					if (el) el.scrollTop = targets[type] * 32 + 16;
				});
			});
		};
		watch([currentView, timeEditSide], ([v]) => {
			if (v === "time") scrollToCurrentTime();
		});
		const syncTextFromValue = () => {
			const fmt = getFormat();
			if (!innerValue.value) {
				textValue.value = "";
				textValueStart.value = "";
				textValueEnd.value = "";
				return;
			}
			const fmtDate = (d) => d ? d.locale(localeName.value).format(fmt) : "";
			if (Array.isArray(innerValue.value)) {
				const [start, end] = innerValue.value;
				if (end) {
					textValueStart.value = start ? start.format(fmt) : "";
					textValueEnd.value = end ? end.format(fmt) : "";
				}
			} else textValue.value = fmtDate(innerValue.value);
		};
		const parsePropValue = (val) => {
			if (val === null || val === void 0 || val === "") return null;
			let d;
			if (props.valueType === "unix") d = dayjs.unix(Number(val));
			else {
				d = dayjs(val, getFormat(), localeName.value);
				if (!d.isValid()) d = dayjs(val);
			}
			return d.isValid() ? d.locale(localeName.value) : null;
		};
		watch(() => props.modelValue, (val) => {
			if (!val) {
				innerValue.value = null;
				syncTextFromValue();
				return;
			}
			if (isRange.value && Array.isArray(val)) {
				innerValue.value = val.map((d) => {
					const parsed = parsePropValue(d);
					return parsed?.isValid() ? parsed : null;
				});
				if (!isFocus.value) syncTextFromValue();
				if (innerValue.value[0]) panelDate.value = innerValue.value[0];
			} else {
				const d = parsePropValue(val);
				innerValue.value = d;
				if (!isFocus.value) syncTextFromValue();
				if (d?.isValid()) panelDate.value = d;
			}
		}, { immediate: true });
		const emitValue = (closePanel = true) => {
			if (!innerValue.value) {
				emit("update:modelValue", null);
				emit("change", null, "");
				return;
			}
			const fmt = getFormat();
			const getStr = (d) => d.locale(localeName.value).format(fmt);
			if (Array.isArray(innerValue.value)) {
				const [start, end] = innerValue.value;
				if (start && end) {
					const dates = [start, end].sort((a, b) => a.valueOf() - b.valueOf());
					const out = dates.map((d) => formatOutputValue(d));
					emit("update:modelValue", out);
					emit("update:startDate", out[0]);
					emit("update:endDate", out[1]);
					emit("change", dates, dates.map((d) => getStr(d)));
					innerValue.value = dates;
					syncTextFromValue();
					if (closePanel) isVisible.value = false;
				}
			} else {
				emit("update:modelValue", formatOutputValue(innerValue.value));
				emit("change", innerValue.value, getStr(innerValue.value));
				syncTextFromValue();
				if (closePanel) isVisible.value = false;
			}
		};
		const handleInput = (e, index = 0) => {
			const val = e.target.value;
			const fmt = getFormat();
			if (isRange.value) if (index === 0) textValueStart.value = val;
			else textValueEnd.value = val;
			else textValue.value = val;
			const d = dayjs(val, fmt, localeName.value, true);
			if (d.isValid()) if (isRange.value) {
				const newArr = Array.isArray(innerValue.value) ? [...innerValue.value] : [null, null];
				newArr[index] = d;
				innerValue.value = newArr;
				panelDate.value = d;
				if (newArr[0] && newArr[1]) emitValue(false);
			} else {
				innerValue.value = d;
				panelDate.value = d;
				emitValue(false);
			}
			else if (val === "") if (isRange.value) {
				const newArr = Array.isArray(innerValue.value) ? [...innerValue.value] : [null, null];
				newArr[index] = null;
				innerValue.value = newArr;
			} else {
				innerValue.value = null;
				emitValue(false);
			}
		};
		const updatePanelState = () => {
			if (isVisible.value) return;
			isVisible.value = true;
			isFocus.value = true;
			if (props.mode === "year") currentView.value = "year";
			else if (props.mode === "month") currentView.value = "month";
			else if (props.mode === "time") currentView.value = "time";
			else currentView.value = "date";
			let base = dayjs().locale(localeName.value);
			if (!innerValue.value) panelDate.value = base;
			else if (!Array.isArray(innerValue.value)) panelDate.value = innerValue.value;
			else if (innerValue.value[0]) panelDate.value = innerValue.value[0];
			else panelDate.value = base;
		};
		const togglePanel = () => {
			if (props.disabled || isVisible.value) return;
			if (!rendered.value) {
				rendered.value = true;
				document.addEventListener("click", handleClickOutside);
				nextTick(() => {
					updatePanelState();
					updatePosition();
				});
			} else {
				updatePanelState();
				updatePosition();
			}
		};
		const handleClickOutside = (e) => {
			const ctx = refSelection.value;
			const popper = refPopper.value;
			const target = e.target;
			if (popper && !popper.contains(target) && ctx && !ctx.contains(target)) {
				if (isRange.value && Array.isArray(innerValue.value)) {
					if (innerValue.value.length === 1 || !innerValue.value[1]) {
						syncTextFromValue();
						const val = props.modelValue;
						if (Array.isArray(val)) innerValue.value = val.map((d) => parsePropValue(d));
						else innerValue.value = null;
					}
				}
				isVisible.value = false;
				isFocus.value = false;
			}
		};
		const timeLabelClick = (e, direction) => {
			e.preventDefault();
			if (timeEditSide.value == direction && currentView.value == "time") {
				currentView.value = "date";
				return;
			}
			timeEditSide.value = direction;
			currentView.value = "time";
		};
		const pickDate = (date) => {
			if (isRange.value) {
				let newVal = Array.isArray(innerValue.value) ? [...innerValue.value] : [];
				newVal = newVal.filter((x) => x);
				if (newVal.length === 2 || newVal.length === 0) newVal = [date.startOf("day")];
				else {
					const first = newVal[0];
					const second = date;
					let start, end;
					if (second.isBefore(first)) {
						start = second;
						end = first;
					} else {
						start = first;
						end = second;
					}
					start = start.startOf("day");
					end = end.endOf("day");
					newVal = [start, end];
				}
				innerValue.value = newVal;
				if (newVal.length === 2) if (props.mode === "dateTimeRange") emitValue(false);
				else emitValue(true);
			} else if (props.mode === "dateTime") {
				const old = innerValue.value || dayjs();
				innerValue.value = date.hour(old.hour()).minute(old.minute()).second(old.second());
				emitValue(false);
			} else {
				innerValue.value = date;
				emitValue(true);
			}
		};
		const pickYear = (y) => {
			panelDate.value = panelDate.value.year(y);
			if (props.mode === "year") {
				innerValue.value = panelDate.value;
				emitValue(true);
			} else setTimeout(() => {
				currentView.value = "month";
			}, 0);
		};
		const pickMonth = (m) => {
			panelDate.value = panelDate.value.month(m);
			if (props.mode === "month") {
				innerValue.value = panelDate.value;
				emitValue(true);
			} else setTimeout(() => {
				currentView.value = "date";
			}, 0);
		};
		const checkTimeDisabled = (d) => {
			if (!props.disabledTime || !d) return false;
			return props.disabledTime(d.toDate());
		};
		const handleTimeScrollPick = (type, val) => {
			let activeDate = dayjs();
			let idx = 0;
			if (props.mode === "dateTimeRange") {
				idx = timeEditSide.value === "start" ? 0 : 1;
				let value = innerValue.value;
				if (value && value[idx]) activeDate = value[idx];
				else if (Array.isArray(innerValue.value) && innerValue.value[idx] === null) return;
			} else if (innerValue.value && !Array.isArray(innerValue.value)) activeDate = innerValue.value;
			const nextDate = activeDate.set(type, val);
			if (checkTimeDisabled(nextDate)) return;
			if (props.mode === "dateTimeRange") {
				const newArr = [...innerValue.value || [null, null]];
				newArr[idx] = nextDate;
				innerValue.value = newArr;
				emitValue(false);
			} else {
				innerValue.value = nextDate;
				emitValue(false);
			}
			const el = timeColRefs.value[type];
			if (el) el.scrollTo({
				top: val * 32 + 16,
				behavior: "smooth"
			});
		};
		const renderHeader = () => {
			if (props.mode === "time") return null;
			const pDate = panelDate.value.locale(localeName.value);
			const year = pDate.year();
			const monthName = pDate.format("MMM");
			const yearNode = createVNode("span", { "onClick": () => currentView.value = "year" }, [`${year}${locale.value.k.datePicker.year || ""}`]);
			const monthNode = props.mode !== "year" ? createVNode("span", {
				"class": "k-picker-header-month-btn",
				"onClick": () => currentView.value = "month"
			}, [monthName]) : null;
			return createVNode("div", { "class": "k-picker-header" }, [
				createVNode(Button, {
					"icon": ChevronsLeft,
					"type": "text",
					"onClick": () => panelDate.value = panelDate.value.subtract(10, "year")
				}, null),
				props.mode !== "year" ? createVNode(Button, {
					"icon": ChevronLeft,
					"type": "text",
					"onClick": () => panelDate.value = panelDate.value.subtract(1, "month")
				}, null) : null,
				createVNode("span", { "class": "k-picker-header-label" }, [isYearFirst.value ? [yearNode, monthNode] : [monthNode, yearNode]]),
				props.mode !== "year" ? createVNode(Button, {
					"icon": ChevronRight,
					"type": "text",
					"onClick": () => panelDate.value = panelDate.value.add(1, "month")
				}, null) : null,
				createVNode(Button, {
					"type": "text",
					"icon": ChevronsRight,
					"onClick": () => panelDate.value = panelDate.value.add(10, "year")
				}, null)
			]);
		};
		const renderYearTable = () => {
			const startY = Math.floor(panelDate.value.year() / 10) * 10;
			return createVNode("div", { "class": "k-picker-body" }, [createVNode("div", { "class": "k-picker-year-body" }, [Array.from({ length: 12 }, (_, i) => startY - 1 + i).map((y) => createVNode("div", {
				"key": y,
				"class": ["k-picker-year-item", y === panelDate.value.year() ? "k-picker-year-selected" : ""],
				"onClick": () => pickYear(y)
			}, [y]))])]);
		};
		const renderMonthTable = () => {
			return createVNode("div", { "class": "k-picker-body" }, [createVNode("div", { "class": "k-picker-month-body" }, [local().monthsShort().map((m, i) => createVNode("div", {
				"key": i,
				"class": ["k-picker-month-item", i === panelDate.value.month() ? "k-picker-month-selected" : ""],
				"onClick": () => pickMonth(i)
			}, [m]))])]);
		};
		const renderDateTable = () => {
			const currentLocaleData = local();
			const firstDayOfWeek = currentLocaleData.firstDayOfWeek();
			const startOfMonth = panelDate.value.startOf("month");
			const startDay = startOfMonth.day();
			const days = [];
			const diff = (startDay - firstDayOfWeek + 7) % 7;
			for (let i = diff; i > 0; i--) days.push({
				d: startOfMonth.subtract(i, "day"),
				type: "prev"
			});
			for (let i = 0; i < startOfMonth.daysInMonth(); i++) days.push({
				d: startOfMonth.add(i, "day"),
				type: "curr"
			});
			const rem = 42 - days.length;
			for (let i = 1; i <= rem; i++) days.push({
				d: startOfMonth.endOf("month").add(i, "day"),
				type: "next"
			});
			const weekDaysRaw = currentLocaleData.weekdaysMin();
			return createVNode("div", { "class": "k-picker-body" }, [createVNode("div", { "class": "k-picker-weekdays" }, [[...weekDaysRaw.slice(firstDayOfWeek), ...weekDaysRaw.slice(0, firstDayOfWeek)].map((w) => createVNode("span", {
				"class": "k-picker-weekday",
				"key": w
			}, [w]))]), createVNode("div", {
				"class": "v-dp-table",
				"onMouseleave": () => hoverDate.value = null
			}, [days.map((item, idx) => {
				const date = item.d;
				const isDisabled = props.disabledDate(date.toDate());
				let isSelected = false;
				let inRange = false;
				let isRangeStart = false;
				let isRangeEnd = false;
				if (props.mode.includes("Range") && Array.isArray(innerValue.value)) {
					const [s, e] = innerValue.value;
					if (s && date.isSame(s, "day")) {
						isSelected = true;
						isRangeStart = true;
					}
					if (e && date.isSame(e, "day")) {
						isSelected = true;
						isRangeEnd = true;
					}
					if (s && e && date.isBetween(s, e, "day", "[]")) inRange = true;
					if (s && !e && hoverDate.value) {
						const min = s.isBefore(hoverDate.value) ? s : hoverDate.value;
						const max = s.isBefore(hoverDate.value) ? hoverDate.value : s;
						if (date.isBetween(min, max, "day", "[]")) inRange = true;
					}
				} else if (innerValue.value && !Array.isArray(innerValue.value)) {
					if (date.isSame(innerValue.value, "day")) isSelected = true;
				}
				return createVNode("div", {
					"key": idx,
					"class": ["k-picker-day", {
						"k-picker-day-out": item.type !== "curr",
						"k-picker-is-today": date.isSame(dayjs(), "day"),
						"k-picker-day-selected": isSelected,
						"k-picker-day-in": inRange && !isSelected,
						"k-picker-range-start": isRangeStart,
						"k-picker-range-end": isRangeEnd,
						"k-picker-day-disabled": isDisabled
					}],
					"onMouseenter": () => {
						if (props.mode.includes("Range")) hoverDate.value = date;
					},
					"onClick": () => !isDisabled && pickDate(date)
				}, [date.date()]);
			})])]);
		};
		const renderTimePicker = () => {
			let activeDate = dayjs();
			if (props.mode === "dateTimeRange") {
				const idx = timeEditSide.value === "start" ? 0 : 1;
				let value = innerValue.value;
				if (value && value[idx]) activeDate = value[idx];
			} else if (innerValue.value && !Array.isArray(innerValue.value)) activeDate = innerValue.value;
			const renderCol = (type, max) => {
				const curr = type === "hour" ? activeDate.hour() : type === "minute" ? activeDate.minute() : activeDate.second();
				return createVNode("ul", {
					"class": "k-picker-time-col",
					"ref": (el) => timeColRefs.value[type] = el
				}, [Array.from({ length: max }).map((_, i) => {
					const isDisabled = checkTimeDisabled(activeDate.set(type, i));
					return createVNode("li", {
						"key": i,
						"class": [
							"k-picker-time-item",
							i === curr ? "active" : "",
							isDisabled ? "k-picker-time-disabled" : ""
						],
						"onClick": (e) => {
							e.stopPropagation();
							!isDisabled && handleTimeScrollPick(type, i);
						}
					}, [String(i).padStart(2, "0")]);
				})]);
			};
			return createVNode("div", { "class": "k-picker-time-picker" }, [
				renderCol("hour", 24),
				renderCol("minute", 60),
				renderCol("second", 60)
			]);
		};
		const renderFooter = () => {
			if (!props.mode.includes("Time")) return null;
			if (props.mode === "dateTimeRange") {
				const [s, e] = (innerValue.value || [null, null]).map((d) => d ? d.format("HH:mm:ss") : "--:--:--");
				return createVNode("div", { "class": "k-picker-footer" }, [
					createVNode("div", {
						"class": ["k-picker-footer-time", currentView.value === "time" && timeEditSide.value === "start" ? "active" : ""],
						"onClick": (e) => timeLabelClick(e, "start")
					}, [s]),
					createVNode("span", { "class": "k-picker-footer-time-split" }, [createVNode(Icon, { "type": ArrowRight }, null)]),
					createVNode("div", {
						"class": ["k-picker-footer-time", currentView.value === "time" && timeEditSide.value === "end" ? "active" : ""],
						"onClick": (e) => timeLabelClick(e, "end")
					}, [e])
				]);
			} else {
				const t = (innerValue.value || dayjs()).format("HH:mm:ss");
				return createVNode("div", { "class": "k-picker-footer" }, [createVNode("div", {
					"class": ["k-picker-footer-time", currentView.value === "time" ? "active" : ""],
					"onClick": () => currentView.value = currentView.value === "time" ? "date" : "time"
				}, [t])]);
			}
		};
		const updatePosition = () => {
			nextTick(() => {
				setPlacement({
					refSelection,
					refPopper,
					currentPlacement,
					transOrigin,
					top,
					left
				});
			});
		};
		onUnmounted(() => document.removeEventListener("click", handleClickOutside));
		return () => {
			const localPlaceholders = {
				year: locale?.value.k.datePicker.selectYear,
				month: locale?.value.k.datePicker.selectMonth,
				date: locale?.value.k.datePicker.selectDate,
				dateTime: locale?.value.k.datePicker.selectDate,
				time: locale?.value.k.datePicker.selectTime,
				startDate: locale?.value.k.datePicker.startDate,
				endDate: locale?.value.k.datePicker.endDate
			};
			const classes = [
				"k-datepicker",
				{ "k-datepicker-opened": isFocus.value },
				{ "k-datepicker-borderless": props.bordered === false },
				{ "k-datepicker-sm": props.size == "small" },
				{ "k-datepicker-lg": props.size == "large" },
				{ "k-datepicker-disabled": props.disabled },
				{ "k-datepicker-light": props.theme == "light" },
				{ "k-datepicker-circle": props.shape == "circle" },
				{ "k-datepicker-square": props.shape == "square" }
			];
			const showClear = props.clearable && (textValue.value || textValueStart.value && textValueStart.value) && !props.disabled;
			const selectCls = ["k-datepicker-selection", { "k-datepicker-has-clear": showClear }];
			const dateIcon = props.mode == "time" ? Clock : props.dateIcon || CalendarDays;
			const overlayProps = {
				class: "k-datepicker-overlay",
				ref: refPopper,
				style: {
					left: `${left.value}px`,
					top: `${top.value}px`,
					transformOrigin: transOrigin.value
				},
				mode: props.mode
			};
			const renderInput = () => {
				const fmt = getFormat();
				const len = fmt ? fmt.length : 10;
				const size = Math.max(10, len);
				if (isRange.value) {
					const placeholders = Array.isArray(props.placeholder) ? props.placeholder : [props.placeholder, props.placeholder];
					return [
						createVNode("input", {
							"autocomplete": "off",
							"size": size,
							"tabindex": -1,
							"class": "k-datepicker-input",
							"value": textValueStart.value,
							"onInput": (e) => handleInput(e, 0),
							"placeholder": placeholders[0] || localPlaceholders.startDate,
							"disabled": props.disabled,
							"readonly": props.editable ? false : true,
							"onClick": () => {
								timeEditSide.value = "start";
							}
						}, null),
						createVNode("span", { "class": "k-datepicker-separator" }, [createVNode(Icon, { "type": ArrowRight }, null)]),
						createVNode("input", {
							"size": size,
							"tabindex": -1,
							"readonly": props.editable ? false : true,
							"autocomplete": "off",
							"class": "k-datepicker-input",
							"value": textValueEnd.value,
							"onInput": (e) => handleInput(e, 1),
							"placeholder": placeholders[1] || localPlaceholders.endDate,
							"disabled": props.disabled,
							"onClick": () => {
								timeEditSide.value = "end";
							}
						}, null)
					];
				} else return createVNode("input", {
					"tabindex": -1,
					"autocomplete": "off",
					"readonly": props.editable ? false : true,
					"size": size,
					"class": "k-datepicker-input",
					"value": textValue.value,
					"onInput": (e) => handleInput(e),
					"placeholder": props.placeholder || localPlaceholders[props.mode],
					"disabled": props.disabled
				}, null);
			};
			const presetEmit = ({ value }) => {
				if (typeof value === "function") {
					let date = value();
					if (isRange.value && Array.isArray(date)) {
						innerValue.value = [dayjs(date[0]), dayjs(date[1])];
						emitValue(true);
					} else {
						innerValue.value = dayjs(date);
						emitValue(true);
					}
				}
			};
			const renderPresets = () => {
				if (props.presets && props.presets.length > 0) return createVNode("div", { "class": "k-picker-presets" }, [props.presets.map((x) => {
					return createVNode(Button, {
						"size": "small",
						"onClick": () => presetEmit(x)
					}, { default: () => [x.label] });
				})]);
			};
			const extraEmit = (date) => {
				if (isRange.value && Array.isArray(date)) {
					innerValue.value = [dayjs(date[0]), dayjs(date[1])];
					emitValue(true);
				} else {
					innerValue.value = dayjs(date);
					emitValue(true);
				}
			};
			const renderExtraHeader = () => {
				return slots.header ? createVNode("div", { "class": "k-picker-extra-header" }, [slots.header({ emit: extraEmit })]) : null;
			};
			const renderExtraFooter = () => {
				return slots.footer ? createVNode("div", { "class": "k-picker-extra-footer" }, [slots.footer({ emit: extraEmit })]) : null;
			};
			const overlay = rendered.value ? createVNode(Transition, { "name": "k-date-picker" }, { default: () => [withDirectives(createVNode("div", overlayProps, [renderPresets(), createVNode("div", { "class": "k-picker-container" }, [
				renderExtraHeader(),
				renderHeader(),
				currentView.value === "year" && renderYearTable(),
				currentView.value === "month" && renderMonthTable(),
				currentView.value === "date" && renderDateTable(),
				currentView.value === "time" && renderTimePicker(),
				renderFooter(),
				renderExtraFooter()
			])]), [[resolveDirective("transfer"), true], [vShow, isVisible.value]])] }) : null;
			return createVNode("div", {
				"class": classes,
				"ref": refSelection,
				"tabindex": props.disabled ? void 0 : 0
			}, [createVNode("div", {
				"class": selectCls,
				"onClick": togglePanel
			}, [
				renderInput(),
				createVNode(Icon, {
					"type": dateIcon,
					"class": "k-icon-calendar",
					"strokeWidth": 1.5
				}, null),
				showClear && createVNode(Icon, {
					"type": CircleX,
					"class": "k-icon-clean",
					"onClick": (e) => {
						e.stopPropagation();
						innerValue.value = null;
						syncTextFromValue();
						emit("update:startDate", null);
						emit("update:endDate", null);
						emit("update:modelValue", null);
						emit("change", null, "");
					}
				}, null)
			]), overlay]);
		};
	}
});
var DescriptionsItem = /* @__PURE__ */ defineComponent({
	name: "DescriptionsItem",
	props: {
		label: String,
		span: {
			type: Number,
			default: 1
		},
		type: String,
		bordered: Boolean,
		layout: String
	},
	setup(props, { slots }) {
		return () => {
			const children = slots.default?.();
			const { bordered, label, span, type, layout } = props;
			if (bordered && layout !== "vertical") {
				if (type === "label") return createVNode("th", {
					"class": "k-descriptions-item-label",
					"colspan": span
				}, [label]);
				return createVNode("td", {
					"class": "k-descriptions-item-content",
					"colspan": span
				}, [children]);
			}
			if (layout === "vertical") {
				if (bordered) {
					if (type === "label") return createVNode("th", {
						"class": "k-descriptions-item-label",
						"colspan": span
					}, [label]);
					return createVNode("td", {
						"class": "k-descriptions-item-content",
						"colspan": span
					}, [children]);
				}
				if (type === "label") return createVNode("td", {
					"class": "k-descriptions-item",
					"colspan": span
				}, [createVNode("div", { "class": "k-descriptions-item-inner" }, [createVNode("div", { "class": "k-descriptions-item-label" }, [label])])]);
				return createVNode("td", {
					"class": "k-descriptions-item",
					"colspan": span
				}, [createVNode("div", { "class": "k-descriptions-item-inner" }, [createVNode("div", { "class": "k-descriptions-item-content" }, [children])])]);
			}
			return createVNode("td", {
				"class": "k-descriptions-item",
				"colspan": span
			}, [createVNode("div", { "class": "k-descriptions-item-inner" }, [label && createVNode("div", { "class": "k-descriptions-item-label" }, [label]), createVNode("div", { "class": "k-descriptions-item-content" }, [children])])]);
		};
	}
});
//#endregion
//#region components/descriptions/descriptions.tsx
function _isSlot$5(s) {
	return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Descriptions = /* @__PURE__ */ defineComponent({
	name: "Descriptions",
	props: {
		bordered: Boolean,
		column: {
			type: Number,
			default: 3
		},
		layout: {
			type: String,
			default: "horizontal"
		},
		title: String,
		extra: String,
		size: {
			type: String,
			default: "default"
		}
	},
	setup(props, { slots }) {
		return () => {
			const { column, bordered, layout, size, title, extra } = props;
			const children = getChildren(slots.default?.());
			const isVertical = layout === "vertical";
			const rows = [];
			let currentRow = [];
			let currentContentRow = [];
			let currentSpanSum = 0;
			children.forEach((child, index) => {
				const isLast = index === children.length - 1;
				const childProps = child.props || {};
				let span = Number(childProps.span || 1);
				const label = childProps.label;
				const childNodes = child.children;
				const remaining = column - currentSpanSum;
				if (isLast) span = remaining;
				if (isVertical) {
					currentRow.push(createVNode(DescriptionsItem, {
						"key": `l-${index}`,
						"label": label,
						"span": span,
						"type": "label",
						"layout": layout,
						"bordered": bordered
					}, null));
					currentContentRow.push(createVNode(DescriptionsItem, {
						"key": `c-${index}`,
						"span": span,
						"layout": layout,
						"bordered": bordered
					}, _isSlot$5(childNodes) ? childNodes : { default: () => [childNodes] }));
					currentSpanSum += span;
					if (currentSpanSum >= column || isLast) {
						rows.push(currentRow);
						rows.push(currentContentRow);
						currentRow = [];
						currentContentRow = [];
						currentSpanSum = 0;
					}
				} else {
					if (bordered) currentRow.push(createVNode(DescriptionsItem, {
						"key": `l-${index}`,
						"label": label,
						"bordered": bordered,
						"span": 1,
						"type": "label"
					}, null), createVNode(DescriptionsItem, {
						"key": `c-${index}`,
						"span": span * 2 - 1,
						"bordered": bordered
					}, _isSlot$5(childNodes) ? childNodes : { default: () => [childNodes] }));
					else currentRow.push(createVNode(DescriptionsItem, {
						"key": `i-${index}`,
						"label": label,
						"span": span
					}, _isSlot$5(childNodes) ? childNodes : { default: () => [childNodes] }));
					currentSpanSum += span;
					if (currentSpanSum >= column || isLast) {
						rows.push(currentRow);
						currentRow = [];
						currentSpanSum = 0;
					}
				}
			});
			const trs = rows.map((row, idx) => createVNode("tr", {
				"key": idx,
				"class": "k-descriptions-row"
			}, [row]));
			const wrapperProps = { class: ["k-descriptions", {
				"k-descriptions-vertical": isVertical,
				"k-descriptions-bordered": bordered,
				"k-descriptions-middle": size === "middle",
				"k-descriptions-sm": size === "small"
			}] };
			const extraNode = extra || slots.extra?.();
			return createVNode("div", wrapperProps, [createVNode("div", { "class": "k-descriptions-header" }, [createVNode("div", { "class": "k-descriptions-title" }, [title || slots.title?.()]), extraNode && createVNode("div", { "class": "k-descriptions-extra" }, [extraNode])]), createVNode("div", { "class": "k-descriptions-view" }, [createVNode("table", null, [createVNode("tbody", null, [trs])])])]);
		};
	}
});
var Drawer = /* @__PURE__ */ defineComponent({
	name: "Drawer",
	directives: { transfer },
	props: {
		modelValue: Boolean,
		title: {
			type: String,
			default: "Title"
		},
		width: {
			type: [Number, String],
			default: 520
		},
		height: {
			type: [Number, String],
			default: 520
		},
		okText: String,
		cancelText: String,
		placement: {
			type: String,
			default: "right"
		},
		closable: {
			type: Boolean,
			default: true
		},
		footer: {
			type: Boolean,
			default: true
		},
		maskClosable: {
			type: Boolean,
			default: true
		},
		target: {
			type: Function,
			default: () => document.body
		},
		mask: {
			type: Boolean,
			default: true
		},
		loading: {
			type: Boolean,
			default: false
		},
		escKey: {
			type: Boolean,
			default: true
		},
		onOk: Function,
		onCancel: Function,
		onClose: Function
	},
	setup(props, { slots, emit }) {
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return injectedLocale instanceof Object && "value" in injectedLocale ? injectedLocale.value : injectedLocale;
		});
		const rendered = ref(props.modelValue);
		const visible = ref(props.modelValue);
		const opened = ref(props.modelValue);
		watch(() => props.modelValue, (nv) => {
			toggle(nv);
		});
		onMounted(() => {
			props.escKey && document.addEventListener("keydown", escToClose);
		});
		onBeforeUnmount(() => {
			props.escKey && document.removeEventListener("keydown", escToClose);
			toggleContainerScroll(props.target(), false);
		});
		const toggle = (value) => {
			if (!rendered.value && value) {
				rendered.value = true;
				toggle(true);
			} else if (value) nextTick(() => {
				visible.value = value;
				opened.value = value;
				emit("update:modelValue", true);
			});
			else {
				visible.value = false;
				setTimeout(() => {
					opened.value = false;
				}, 300);
				emit("update:modelValue", false);
			}
		};
		const escToClose = (event) => {
			if (event.key === "Escape") close();
		};
		const clickMaskToClose = () => {
			if (props.maskClosable) close();
		};
		const cancel = () => {
			emit("cancel");
			toggle(false);
		};
		const close = () => {
			emit("close");
			toggle(false);
		};
		const ok = () => {
			emit("ok");
		};
		return () => {
			const { title, cancelText, okText, placement, width, height, closable, loading } = props;
			const hasFooter = props.footer || slots.footer;
			const cancelBtn = createVNode(Button, { "onClick": cancel }, { default: () => [cancelText || locale.value?.k?.common?.cancel] });
			const okBtn = createVNode(Button, {
				"type": "primary",
				"onClick": ok,
				"loading": loading
			}, { default: () => [okText || locale.value?.k?.common?.ok] });
			const footNode = hasFooter ? createVNode("div", { "class": "k-drawer-footer" }, [slots.footer ? slots.footer() : [cancelBtn, okBtn]]) : null;
			const closeNode = closable ? createVNode(Button, {
				"class": "k-drawer-close",
				"size": "small",
				"type": "text",
				"onClick": close,
				"icon": X
			}, null) : null;
			const transitionName = `k-drawer-${placement}`;
			const target = props.target();
			const isBody = target === document.body;
			const classes = [
				"k-drawer",
				`k-drawer-${placement}`,
				{ "k-drawer-has-footer": hasFooter },
				{ "k-drawer-to-body": isBody },
				{ "k-drawer-no-mask": !props.mask }
			];
			const styles = {};
			if (placement === "left" || placement === "right") styles.width = typeof width === "number" ? `${width}px` : width;
			if (placement === "top" || placement === "bottom") styles.height = typeof height === "number" ? `${height}px` : height;
			const maskNode = props.mask ? createVNode(Transition, { "name": "k-drawer-fade" }, { default: () => [withDirectives(createVNode("div", {
				"class": ["k-drawer-mask", { "k-drawer-mask-to-body": isBody }],
				"onClick": clickMaskToClose
			}, null), [[vShow, visible.value]])] }) : null;
			const drawerProps = {
				class: "k-drawer-box",
				style: styles
			};
			return rendered.value ? withDirectives(createVNode("div", { "class": classes }, [maskNode, withDirectives(createVNode("div", {
				"class": "k-drawer-wrap",
				"tabindex": -1
			}, [createVNode(Transition, { "name": transitionName }, { default: () => [withDirectives(createVNode("div", drawerProps, [createVNode("div", { "class": "k-drawer-content" }, [
				createVNode("div", { "class": "k-drawer-header" }, [closeNode, createVNode("div", { "class": "k-drawer-header-inner" }, [title])]),
				createVNode("div", { "class": "k-drawer-body" }, [slots.default?.()]),
				footNode
			])]), [[vShow, visible.value]])] })]), [[vShow, opened.value]])]), [[resolveDirective("transfer"), target]]) : null;
		};
	}
});
var Dropdown = /* @__PURE__ */ defineComponent({
	name: "Dropdown",
	directives: {
		transfer,
		resize
	},
	props: {
		trigger: {
			type: String,
			default: "hover"
		},
		disabled: Boolean,
		arrow: {
			type: Boolean,
			default: false
		},
		show: Boolean,
		placement: {
			type: String,
			default: "bottom-left"
		},
		target: Object
	},
	setup(props, { slots, emit, attrs }) {
		const visible = ref(props.show);
		const refSelection = ref(null);
		const currentPlacement = ref(props.placement);
		const transOrigin = ref("bottom");
		const refPopper = ref(null);
		const left = ref(0);
		const top = ref(0);
		const rendered = ref(false);
		const showTimer = ref();
		provide("dropdown", true);
		onMounted(() => {
			if (props.show) toggle(true);
		});
		onBeforeMount(() => {
			document.removeEventListener("click", outsideClick);
		});
		const clearPopTimer = () => clearTimeout(showTimer.value);
		provide("clearPopTimer", clearPopTimer);
		watch(() => props.placement, (v) => {
			currentPlacement.value = v;
			updatePosition();
		});
		watch(() => props.show, (v) => {
			toggle(v);
		});
		const outsideClick = (e) => {
			const ctx = refSelection.value?.$el || refSelection.value;
			if (!refPopper.value) return;
			const target = e.target;
			if (!refPopper.value.contains(target) && ctx && !ctx.contains(target) || props.trigger == "contextmenu" && !refPopper.value.contains(target)) visible.value = false;
		};
		const updatePosition = (e) => {
			const position = e ? {
				x: e.clientX,
				y: e.clientY
			} : null;
			nextTick(() => {
				setPlacement({
					refSelection,
					position,
					refPopper,
					currentPlacement,
					transOrigin,
					top,
					left
				});
			});
		};
		const toggle = (open, e) => {
			if (open) if (!rendered.value) {
				rendered.value = true;
				document.addEventListener("click", outsideClick);
				nextTick(() => {
					visible.value = true;
					emit("update:visible", true);
					updatePosition(e);
				});
			} else {
				visible.value = true;
				emit("update:visible", true);
				updatePosition(e);
			}
			else {
				visible.value = false;
				emit("update:visible", false);
			}
		};
		const hidePopper = () => {
			visible.value = false;
		};
		provide("dropdown-menu-selected", hidePopper);
		const clickEvent = () => {
			if (props.disabled) return;
			if (props.trigger == "click") toggle(true);
		};
		const mouseLeaveEvent = () => {
			if (props.disabled) return;
			if (props.trigger == "hover") showTimer.value = setTimeout(() => {
				toggle(false);
			}, 300);
		};
		const mouseEnterEvent = () => {
			if (props.disabled) return;
			if (props.trigger == "hover") {
				clearTimeout(showTimer.value);
				toggle(true);
			}
		};
		const contextmenuEvent = (e) => {
			if (props.disabled) return;
			if (props.trigger == "contextmenu") {
				e.preventDefault();
				toggle(true, e);
			}
		};
		provide("dropdown-trigger-in", mouseEnterEvent);
		provide("dropdown-trigger-out", mouseLeaveEvent);
		return () => {
			const _props = {
				ref: refPopper,
				style: {
					left: `${left.value}px`,
					top: `${top.value}px`,
					transformOrigin: transOrigin.value
				},
				"k-placement": currentPlacement.value,
				class: ["k-dropdown", { "k-dropdown-has-arrow": props.arrow }],
				onClick: (e) => {
					toggle(false, e);
				},
				onMouseenter: () => {
					clearTimeout(showTimer.value);
				},
				onMouseleave: () => {
					if (props.trigger == "hover") showTimer.value = setTimeout(() => {
						toggle(false);
					}, 300);
				}
			};
			const overlay = rendered.value && slots.overlay ? createVNode(Transition, { "name": "k-dropdown" }, { default: () => [withDirectives(createVNode("div", _props, [createVNode("div", { "class": `k-dropdown-content` }, [createVNode("div", { "class": `k-dropdown-body` }, [slots.overlay?.()]), props.arrow ? createVNode("div", { "class": `k-dropdown-arrow` }, [createVNode("svg", {
				"style": { fill: "currentcolor" },
				"viewBox": "0 0 24 8"
			}, [createVNode("path", {
				"d": "M24,0.97087 L24,1.97087 C20,1.97087 18.5,2.97087 16.5,4.97087 C14.5,6.97087 14,7.97087 12,7.97087 C10,7.97087 9.5,6.97087 7.5,4.97087 C5.5,2.97087 4,1.97087 0,1.97087 L0,0.97087 L24,0.97087 Z",
				"id": "ot"
			}, null), createVNode("path", {
				"d": "M24,0 L24,1 C20.032328,1 18.1576594,1.985435 16.1576594,3.985435 C14.1576594,5.985435 13.3847825,7 12,7 C10.6152175,7 9.81306952,5.985435 7.81306952,3.985435 C5.81306952,1.985435 4.0114261,1 0,1 L0,0 L24,0 Z",
				"id": "in",
				"stroke": "currentcolor"
			}, null)])]) : null])]), [
				[resolveDirective("transfer"), true],
				[resolveDirective("resize"), updatePosition],
				[vShow, visible.value]
			])] }) : null;
			let nodes = getChildren(slots.default?.());
			const pp = props.target ? {} : {
				onClick: clickEvent,
				onMouseenter: mouseEnterEvent,
				onMouseleave: mouseLeaveEvent,
				onContextmenu: contextmenuEvent
			};
			return [cloneVNode(nodes.length == 1 ? nodes[0] : createVNode("span", null, [nodes]), {
				ref: refSelection,
				...attrs,
				...pp
			}, true), overlay];
		};
	}
});
//#endregion
//#region components/dropdown/trigger.tsx
var trigger_default = /* @__PURE__ */ defineComponent({
	name: "TriggerButton",
	props: {
		icon: Array,
		disabled: Boolean
	},
	setup(ps, { attrs, slots }) {
		const mouseEnterEvent = inject("dropdown-trigger-in");
		const mouseLeaveEvent = inject("dropdown-trigger-out");
		return () => {
			return createVNode(Button, mergeProps({
				"icon": ps.icon,
				"disabled": ps.disabled
			}, attrs, {
				"onMouseenter": () => mouseEnterEvent?.(),
				"onMouseleave": () => mouseLeaveEvent?.()
			}), { default: () => [slots.default?.()] });
		};
	}
});
var DropdownButton = /* @__PURE__ */ defineComponent({
	name: "DropdownButton",
	props: {
		size: String,
		shape: String,
		disabled: Boolean,
		icon: Array,
		theme: String,
		arrow: Boolean,
		placement: {
			type: String,
			default: "bottom-right"
		},
		onClick: Function
	},
	setup(props, { slots, emit }) {
		const refTrigger = ref();
		return () => {
			return createVNode(Dropdown, {
				"arrow": props.arrow,
				"placement": props.placement,
				"target": refTrigger,
				"disabled": props.disabled
			}, {
				default: () => createVNode(ButtonGroup, {
					"class": "k-dropdown-button",
					"size": props.size,
					"shape": props.shape
				}, { default: () => [createVNode(Button, {
					"disabled": props.disabled,
					"onClick": (e) => {
						emit("click", e);
					}
				}, { default: () => [slots.default?.()] }), createVNode(trigger_default, {
					"disabled": props.disabled,
					"ref": refTrigger,
					"icon": !slots.icon ? Ellipsis : void 0,
					"class": "k-dropdown-trigger"
				}, { default: () => [slots.icon?.()] })] }),
				overlay: () => slots.overlay?.()
			});
		};
	}
});
var Divider = /* @__PURE__ */ defineComponent({
	name: "Divider",
	props: {
		type: {
			type: String,
			default: "horizontal"
		},
		text: String,
		dashed: Boolean,
		orientation: {
			type: String,
			default: "center"
		}
	},
	setup(props, { slots }) {
		return () => {
			const hasText = !!(slots.default || props.text);
			const textNode = slots.default ? slots.default() : props.text;
			return createVNode("div", {
				"class": ["k-divider", {
					[`k-divider-${props.type}`]: true,
					"k-divider-dashed": props.dashed,
					[`k-divider-with-text-${props.orientation}`]: props.type === "horizontal" && hasText
				}],
				"role": "separator"
			}, [props.type === "horizontal" && hasText ? createVNode("span", { "class": "k-divider-inner-text" }, [textNode]) : null]);
		};
	}
});
//#endregion
//#region components/form/form.tsx
var Form = /* @__PURE__ */ defineComponent({
	name: "Form",
	props: {
		layout: {
			type: String,
			default: "horizontal"
		},
		model: Object,
		name: String,
		labelCol: Object,
		wrapperCol: Object,
		rules: { type: Object },
		size: {
			type: String,
			default: "default"
		},
		theme: String,
		shape: String,
		disabled: Boolean,
		onSubmit: { type: Function }
	},
	setup(props, { emit, slots, expose }) {
		const formRef = ref(null);
		const formItems = ref({});
		const { model, rules, size, shape, theme, disabled, layout, name } = toRefs(props);
		const updateMode = (prop, value = null) => {
			const { o, k } = getPropByPath(model.value, prop);
			if (o) {
				o[k] = value;
				emit("change", model.value);
			}
		};
		const getValueFromProp = (path) => {
			const { v } = getPropByPath(model.value, path);
			return v;
		};
		const reset = () => {
			Object.keys(formItems.value).forEach((prop) => {
				updateMode(prop);
				formItems.value[prop].valid = true;
			});
		};
		const test = (key) => {
			const item = formItems.value[key];
			if (item) {
				const rules = item.rules || (props.rules || {})[item.prop];
				if (rules) return item.validate(rules);
			}
		};
		const getPropByPath = (obj, path) => {
			let tempObj = obj;
			path = path.replace(/\[(\w+)\]/g, ".$1").replace(/^\./, "");
			const keyArr = path.split(".");
			let i = 0;
			for (let len = keyArr.length; i < len - 1; ++i) {
				if (!tempObj) break;
				let key = keyArr[i];
				tempObj = tempObj[key];
			}
			const lastKey = keyArr[keyArr.length - 1];
			return {
				o: tempObj,
				k: lastKey,
				v: tempObj ? tempObj[lastKey] : null
			};
		};
		const onSubmit = (e) => {
			e.preventDefault();
			submit();
			return false;
		};
		const submit = () => {
			validate(({ valid }) => {
				emit("submit", { valid });
			});
		};
		const validate = (callback) => {
			let result = true;
			Object.keys(formItems.value).forEach((key) => {
				let item = formItems.value[key];
				const rules = item.rules || (props.rules || {})[item.prop];
				if (rules) {
					if (!item.validate(rules)) result = false;
				}
			});
			if (typeof callback === "function") callback({ valid: result });
		};
		watch(model, () => {
			validate();
		});
		const register = (item) => {
			formItems.value[item.prop] = item;
		};
		const unregister = (item) => {
			delete formItems.value[item.prop];
		};
		expose({
			validate,
			reset,
			test,
			submit
		});
		provide("Form", reactive({
			model,
			layout,
			name,
			rules,
			disabled,
			size,
			shape,
			theme,
			getValueFromProp,
			updateMode,
			register,
			unregister
		}));
		return () => {
			const { layout, size, labelCol = {}, wrapperCol = {}, name } = props;
			const classes = ["k-form", {
				[`k-form-${layout}`]: layout,
				"k-form-lg": size === "large",
				"k-form-sm": size === "small"
			}];
			const children = getChildren(slots.default?.());
			return createVNode("form", {
				"ref": formRef,
				"class": classes,
				"id": name,
				"onSubmit": onSubmit,
				"onReset": reset,
				"autocomplete": "off"
			}, [children.map((child) => {
				return cloneVNode(child, {
					labelCol: child.props?.labelCol || labelCol,
					wrapperCol: child.props?.wrapperCol || wrapperCol
				}, true);
			})]);
		};
	}
});
var Col = /* @__PURE__ */ defineComponent({
	name: "Col",
	props: {
		span: Number,
		offset: Number,
		flex: [String, Number]
	},
	setup(props, { slots }) {
		const parseFlex = (flex) => {
			if (typeof flex === "number") return `${flex} ${flex} auto`;
			if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) return `0 0 ${flex}`;
			return flex;
		};
		return () => {
			const gutter = inject("gutter")?.value;
			let { offset, span, flex } = props;
			let _props = {
				class: [`k-col`, { [`k-col-${span}`]: span }],
				style: {}
			};
			if (Array.isArray(gutter)) {
				let [v = 0, _h = 0] = gutter;
				if (v == _h && v > 0) _props.style.padding = `${v / 2}px`;
				else if (v > 0 && _h > 0) _props.style.padding = `${_h / 2}px ${v / 2}px`;
				else {
					if (v > 0) {
						_props.style.paddingLeft = `${v / 2}px`;
						_props.style.paddingRight = `${v / 2}px`;
					}
					if (_h > 0) {
						_props.style.paddingTop = `${v / 2}px`;
						_props.style.paddingTop = `${v / 2}px`;
					}
				}
			} else if (gutter && gutter > 0) {
				_props.style.paddingLeft = `${gutter / 2}px`;
				_props.style.paddingRight = `${gutter / 2}px`;
			}
			if (flex) _props.style.flex = parseFlex(flex);
			if (offset && offset > 0 && offset <= 24) _props.class.push(`k-col-offset-${offset}`);
			return createVNode("div", _props, [slots.default?.()]);
		};
	}
});
var Row = /* @__PURE__ */ defineComponent({
	name: "Row",
	props: {
		gutter: [Number, Array],
		type: {
			type: String,
			default: "flex"
		},
		justify: { type: String },
		align: { type: String }
	},
	setup(props, { slots }) {
		const gutter = ref(props.gutter);
		provide("gutter", gutter);
		watch(() => props.gutter, (nv) => {
			gutter.value = nv;
		});
		return () => {
			const { align, justify, gutter } = props;
			let _props = {
				class: ["k-row", {
					"k-row-flex": props.type == "flex",
					[`k-row-flex-${justify}`]: justify,
					[`k-row-flex-${align}`]: align
				}],
				style: {}
			};
			if (Array.isArray(gutter)) {
				let [v = 0, _h = 0] = gutter;
				if (v == _h && v > 0) _props.style.margin = `-${v / 2}px`;
				else if (v > 0 && _h > 0) _props.style.margin = `-${_h / 2}px -${v / 2}px`;
				else {
					if (v > 0) {
						_props.style.marginLeft = `-${v / 2}px`;
						_props.style.marginRight = `-${v / 2}px`;
					}
					if (_h > 0) {
						_props.style.marginTop = `-${v / 2}px`;
						_props.style.marginTop = `-${v / 2}px`;
					}
				}
			} else if (gutter && gutter > 0) {
				_props.style.marginLeft = `-${gutter / 2}px`;
				_props.style.marginRight = `-${gutter / 2}px`;
			}
			return createVNode("div", _props, [slots.default?.()]);
		};
	}
});
//#endregion
//#region components/form/form-item.tsx
var FormItem = /* @__PURE__ */ defineComponent({
	name: "FormItem",
	props: {
		label: String,
		prop: String,
		labelCol: Object,
		wrapperCol: Object,
		rules: [Array, Object]
	},
	setup(props, { slots }) {
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return injectedLocale instanceof Object && "value" in injectedLocale ? injectedLocale.value : injectedLocale;
		});
		const valid = ref(true);
		const message = ref();
		const Form = inject("Form", {});
		const test = (rule) => {
			let isValid = valid.value;
			const itemValue = Form.getValueFromProp?.(props.prop);
			let msg = rule.message;
			if (rule.required) {
				isValid = Array.isArray(itemValue) ? itemValue.length > 0 : itemValue !== null && itemValue !== void 0 && itemValue !== "" && itemValue !== false;
				msg = msg || locale.value?.k.form.required.replace("{label}", props.label || props.prop);
			} else if (rule.pattern) isValid = rule.pattern.test(itemValue);
			else if (rule.type) switch (rule.type) {
				case "mail":
					isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(itemValue);
					msg = msg || locale.value?.k.form.email;
					break;
				case "mobile":
					isValid = /^[1][3-9][0-9]{9}$/.test(itemValue);
					msg = msg || locale.value?.k.form.mobile;
					break;
				case "number":
					isValid = /^(-?\d+)(\.\d+)?$/.test(itemValue);
					if (isValid) {
						if (rule.min !== void 0 && itemValue < rule.min) {
							isValid = false;
							msg = msg || locale.value?.k.form.num_min.replace("{min}", rule.min);
						} else if (rule.max !== void 0 && itemValue > rule.max) {
							isValid = false;
							msg = msg || locale.value?.k.form.num_max.replace("{max}", rule.max);
						}
					}
					msg = msg || locale.value?.k.form.number;
					break;
				default: break;
			}
			else if (typeof rule.validator === "function") rule.validator(rule, itemValue, (error) => {
				isValid = error === void 0;
				if (error) msg = error.message;
			});
			else if (rule.min !== void 0 || rule.max !== void 0) {
				const valueType = typeof itemValue;
				if (rule.min !== void 0) {
					if (Array.isArray(itemValue)) isValid = itemValue.length >= rule.min;
					else if (valueType === "string") isValid = itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length >= rule.min;
					else if (valueType === "number") isValid = itemValue >= rule.min;
				}
				if (rule.max !== void 0 && isValid) {
					if (Array.isArray(itemValue)) isValid = itemValue.length <= rule.max;
					else if (valueType === "string") isValid = itemValue.replace(/[\u0391-\uFFE5]/g, "aa").length <= rule.max;
					else if (valueType === "number") isValid = itemValue <= rule.max;
				}
				msg = msg || "Incorrect length";
			}
			message.value = msg;
			valid.value = isValid;
			return isValid;
		};
		const validate = (rules, _) => {
			if (!rules) return true;
			if (rules.constructor === Object) return test(rules);
			const sortedRules = [...rules].sort((a) => a.required ? -1 : 0);
			for (let i = 0; i < sortedRules.length; i++) if (!test(sortedRules[i])) break;
			return valid.value;
		};
		const testValue = (trigger) => {
			if (props.prop) {
				const rules = props.rules || (Form.rules || {})[props.prop];
				rules && validate(rules, trigger);
			}
		};
		const { prop, rules } = toRefs(props);
		const formItem = reactive({
			prop,
			rules,
			valid,
			validate
		});
		onMounted(() => {
			if (props.prop) Form.register?.(formItem);
		});
		onBeforeUnmount(() => {
			if (props.prop) Form.unregister?.(formItem);
		});
		return () => {
			const { label, prop } = props;
			const rules = props.rules || (prop ? Form.rules[prop] : "") || [];
			const classes = ["k-form-item", {
				"k-form-item-required": rules.constructor === Object ? rules.required : rules.filter((r) => r.required).length > 0,
				"k-form-item-error": !valid.value
			}];
			let labelProp, wrapperProp;
			if (Form.layout == "vertical") delete props.wrapperCol?.offset;
			if (Form.layout != "inline") {
				labelProp = { ...props.labelCol };
				wrapperProp = { ...props.wrapperCol };
			}
			const children = getChildren(slots.default?.());
			let id = void 0;
			if (Form.name && prop) id = `${Form.name || `form_`}_${prop}`;
			return createVNode(Row, {
				"class": classes,
				"type": "flex"
			}, { default: () => [label ? createVNode(Col, mergeProps({ "class": "k-form-item-label" }, labelProp), { default: () => [createVNode("label", { "for": id }, [label])] }) : null, createVNode(Col, wrapperProp, { default: () => [createVNode("div", { "class": "k-form-item-content" }, [children.map((child) => {
				if (isVNode(child)) {
					const tag = child.type?.name;
					const value = prop ? Form.getValueFromProp?.(prop) || void 0 : void 0;
					const propsData = child?.props || {};
					const size = propsData.size || Form.size;
					const theme = propsData.theme || Form.theme;
					const shape = propsData.shape || Form.shape;
					const disabled = propsData.disabled || Form.disabled;
					const childProps = {
						id,
						size,
						disabled,
						theme,
						shape
					};
					const childEvents = {};
					if (prop) {
						if (/(switch|radio|checkbox)/.test(tag)) childProps.checked = value || false;
						else childProps.modelValue = value;
						childEvents["onUpdate:modelValue"] = (value) => {
							if (tag) {
								Form.updateMode?.(prop, value);
								testValue();
							}
						};
					}
					if (/(input|textarea)/.test(tag)) childEvents.onBlur = () => {
						testValue();
					};
					return cloneVNode(child, {
						...childProps,
						...childEvents
					});
				} else return child;
			}), prop ? createVNode(Transition, { "name": "k-form-item-fade" }, { default: () => [!valid.value ? createVNode("div", { "class": "k-form-item-error-tip" }, [message.value]) : null] }) : null])] })] });
		};
	}
});
var Flex = /* @__PURE__ */ defineComponent({
	name: "Flex",
	props: {
		align: { type: String },
		justify: { type: String },
		vertical: Boolean,
		wrap: Boolean,
		size: { type: [
			String,
			Number,
			Array
		] }
	},
	setup(props, { slots }) {
		provide("size", props.size);
		return () => {
			let { align, justify, vertical, size, wrap } = props;
			align = !vertical && !align ? "center" : align;
			const _props = {
				style: {},
				class: ["k-flex", {
					[`k-flex-vertical`]: vertical,
					[`k-flex-wrap`]: wrap,
					[`k-flex-align-${align}`]: align,
					[`k-flex-justify-${justify}`]: justify
				}]
			};
			if (Array.isArray(size)) _props.style = { gap: `${size[1]}px ${size[0]}px` };
			else if (/small|middle|large/.test(size)) {
				const sizes = {
					small: 8,
					middle: 16,
					large: 24,
					default: 16
				};
				_props.style.gap = sizes[size] + "px";
			} else if (size !== void 0 && size !== null) _props.style.gap = `${size}px`;
			return createVNode("div", _props, [slots.default?.()]);
		};
	}
});
//#endregion
//#region components/grid/useBreakpoint.ts
var breakpointMap = {
	0: "xs",
	576: "sm",
	768: "md",
	992: "lg",
	1200: "xl",
	1600: "xxl"
};
var GRID_KEY = Symbol("GRID_KEY");
function useBreakpoint(elRef) {
	if (typeof window === "undefined") return null;
	const active = ref("md");
	let rafId = null;
	const observer = new ResizeObserver((entries) => {
		if (rafId) cancelAnimationFrame(rafId);
		rafId = requestAnimationFrame(() => {
			const width = entries[0].contentRect.width;
			const sortedPoints = Object.keys(breakpointMap).map(Number).sort((a, b) => b - a);
			for (const point of sortedPoints) if (width >= point) {
				active.value = breakpointMap[point];
				break;
			}
		});
	});
	onMounted(() => elRef.value && observer.observe(elRef.value));
	onUnmounted(() => observer.disconnect());
	return readonly(active);
}
//#endregion
//#region components/grid/grid.tsx
var Grid = /* @__PURE__ */ defineComponent({
	name: "Grid",
	props: {
		cols: {
			type: [
				Number,
				String,
				Object
			],
			default: 24
		},
		rows: {
			type: [
				Number,
				String,
				Object
			],
			default: "auto"
		},
		autoRows: {
			type: String,
			default: "auto"
		},
		xGap: {
			type: [
				Number,
				String,
				Object
			],
			default: 0
		},
		yGap: {
			type: [
				Number,
				String,
				Object
			],
			default: 0
		},
		itemMinWidth: { type: Number },
		align: { type: String },
		justify: { type: String },
		debug: { type: Boolean }
	},
	setup(props, { slots }) {
		const gridRef = ref();
		const breakpoint = useBreakpoint(gridRef);
		const resolveResponsive = (val, fallback) => {
			if (val === void 0) return fallback;
			if (typeof val !== "object") return val;
			const order = [
				"xxl",
				"xl",
				"lg",
				"md",
				"sm",
				"xs"
			];
			const currentIndex = order.indexOf(breakpoint?.value || "md");
			for (let i = currentIndex; i < order.length; i++) {
				const key = order[i];
				if (val[key] !== void 0) return val[key];
			}
			return fallback;
		};
		provide(GRID_KEY, {
			breakpoint,
			resolveResponsive
		});
		const gridProps = {
			class: "k-grid",
			style: computed(() => {
				const activeCols = resolveResponsive(props.cols, 24);
				const activeRows = resolveResponsive(props.rows, "auto");
				const activeXGap = resolveResponsive(props.xGap, 0);
				const activeYGap = resolveResponsive(props.yGap, 0);
				const parseGap = (val) => typeof val === "number" ? `${val}px` : val;
				const style = {
					gridTemplateColumns: props.itemMinWidth ? `repeat(auto-fill, minmax(${props.itemMinWidth}px, 1fr))` : typeof activeCols === "number" ? `repeat(${activeCols}, minmax(0, 1fr))` : activeCols,
					gridTemplateRows: typeof activeRows === "number" ? `repeat(${activeRows}, minmax(0, 1fr))` : activeRows,
					columnGap: parseGap(activeXGap),
					rowGap: parseGap(activeYGap),
					gridAutoRows: props.autoRows,
					alignItems: props.align,
					justifyItems: props.justify
				};
				if (props.debug && typeof activeCols === "number") style.backgroundImage = `repeating-linear-gradient(to right, rgba(255,0,0,0.05) 0, rgba(255,0,0,0.05) ${100 / activeCols}%, transparent ${100 / activeCols}%, transparent ${200 / activeCols}%)`;
				return style;
			}).value,
			ref: gridRef
		};
		return () => {
			return createVNode("div", gridProps, [slots.default?.()]);
		};
	}
});
//#endregion
//#region components/grid/grid-item.tsx
var GridItem = /* @__PURE__ */ defineComponent({
	name: "GridItem",
	props: {
		span: {
			type: [
				Number,
				String,
				Object
			],
			default: 1
		},
		rowSpan: {
			type: [
				Number,
				String,
				Object
			],
			default: 1
		},
		offset: {
			type: [Number, Object],
			default: 0
		},
		suffix: {
			type: Boolean,
			default: false
		}
	},
	setup(props, { slots }) {
		const context = inject(GRID_KEY);
		const itemProps = {
			class: "k-grid-item",
			style: computed(() => {
				if (!context) return {};
				const s = context.resolveResponsive(props.span, 1);
				const rs = context.resolveResponsive(props.rowSpan, 1);
				const o = context.resolveResponsive(props.offset, 0);
				if (s === 0) return { display: "none" };
				const styles = {};
				if (s !== 1) styles.gridColumn = `span ${s} / span ${s}`;
				if (o > 0) {
					styles.gridColumnStart = `span ${s + o}`;
					if (s === 1) styles.gridColumnEnd = `span 1`;
				}
				if (rs !== 1) styles.gridRow = `span ${rs} / span ${rs}`;
				if (props.suffix) {
					styles.gridColumnStart = "-1";
					styles.justifySelf = "end";
				}
				return styles;
			}).value
		};
		return () => {
			return createVNode("div", itemProps, [slots.default?.()]);
		};
	}
});
//#endregion
//#region components/config/context.ts
var __appContext = null;
var __mouse__point = null;
function setAppContext(app) {
	__appContext = app;
}
var getAppContext = () => {
	return __appContext;
};
var recordMousePoint = () => {
	if (typeof window !== "undefined") document.addEventListener("mousedown", (e) => {
		__mouse__point = {
			x: e.clientX,
			y: e.clientY
		};
	});
};
var getMousePoint = () => {
	return __mouse__point || {
		x: 0,
		y: 0
	};
};
var Tooltip = /* @__PURE__ */ defineComponent({
	name: "Tooltip",
	directives: { transfer },
	props: {
		show: Boolean,
		title: [
			String,
			Number,
			Object,
			Array
		],
		color: String,
		disabled: Boolean,
		width: [Number, String],
		placement: {
			type: String,
			default: "top"
		}
	},
	setup(props, { slots, attrs, emit }) {
		const rendered = ref(props.show);
		const visible = ref(props.show);
		const refPopper = ref(null);
		const refSelection = ref(null);
		const left = ref(0);
		const top = ref(0);
		const currentPlacement = ref(props.placement);
		const transOrigin = ref("bottom");
		const hideTimer = ref();
		const showTimer = ref();
		const updateShow = (value) => {
			visible.value = value;
			emit("update:show", value);
		};
		const updatePosition = () => {
			nextTick(() => {
				setPlacement({
					refSelection,
					refPopper,
					currentPlacement,
					transOrigin,
					top,
					left
				});
			});
		};
		onMounted(() => {
			updatePosition();
			window.addEventListener("resize", updatePosition);
		});
		onUnmounted(() => {
			window.removeEventListener("resize", updatePosition);
			clearTimeout(hideTimer.value);
			clearTimeout(showTimer.value);
		});
		watch(() => props.show, (nv) => {
			visible.value = nv;
		});
		watch(() => props.title, () => {
			if (visible.value) updatePosition();
		});
		const mouseEnter = () => {
			if (props.disabled) return;
			if (!rendered.value) {
				rendered.value = true;
				nextTick(() => {
					updateShow(true);
					updatePosition();
				});
			} else {
				clearTimeout(showTimer.value);
				updateShow(true);
				updatePosition();
			}
		};
		const hide = () => {
			hideTimer.value = setTimeout(() => {
				if (!props.show) updateShow(false);
			}, 300);
		};
		return () => {
			const title = slots.title?.() || props.title;
			const preCls = "tooltip";
			const { color } = props;
			const wpProps = {
				ref: refSelection,
				onTouchstart: mouseEnter,
				onTouchend: hide,
				onTouchmove: updatePosition,
				onMouseenter: mouseEnter,
				onMouseleave: hide
			};
			const children = getChildren(slots.default?.());
			const nodes = children?.map((node) => {
				return cloneVNode(node, children.length === 1 ? {
					...attrs,
					...wpProps
				} : { ...attrs }, true, true);
			});
			const nodeWrapper = nodes.length > 1 ? createVNode("span", wpProps, [nodes]) : nodes[0];
			const styles = {
				left: `${left.value}px`,
				top: `${top.value}px`,
				transformOrigin: transOrigin.value
			};
			const overlayProps = {
				class: [`k-${preCls}`, {
					[`k-${preCls}-${color}`]: color && !isColor(color),
					[`k-${preCls}-has-color`]: isColor(color),
					[`k-${preCls}-has-arrow`]: true
				}],
				"k-placement": currentPlacement.value,
				style: styles,
				ref: refPopper,
				onMouseenter: () => {
					clearTimeout(hideTimer.value);
					if (!props.disabled) updateShow(true);
				},
				onMouseleave: () => {
					showTimer.value = setTimeout(() => {
						if (!props.show) updateShow(false);
					}, 300);
				}
			};
			const contentProps = {
				class: [`k-${preCls}-content`],
				style: { backgroundColor: isColor(color) ? colors$1.includes(color || "") ? `var(--kui-color-${color})` : color : void 0 }
			};
			const arrowProps = { style: { fill: isColor(color) ? colors$1.includes(color || "") ? `var(--kui-color-${color})` : color : "currentcolor" } };
			return [nodeWrapper, rendered.value ? createVNode(Transition, { "name": `k-${preCls}` }, { default: () => [withDirectives(createVNode("div", overlayProps, [createVNode("div", contentProps, [createVNode("div", { "class": `k-${preCls}-title` }, [title]), createVNode("div", { "class": `k-${preCls}-arrow` }, [createVNode("svg", mergeProps(arrowProps, { "viewBox": "0 0 24 7" }), [createVNode("path", { "d": "M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z" }, null)])])])]), [[resolveDirective("transfer"), true], [vShow, visible.value]])] }) : null];
		};
	}
});
//#endregion
//#region components/slider/thumb.tsx
var thumb_default = /* @__PURE__ */ defineComponent({
	props: {
		value: {
			type: Number,
			required: true
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		vertical: Boolean,
		size: [String, Number],
		reverse: Boolean,
		disabled: Boolean,
		tooltipVisible: {
			type: Boolean,
			default: null
		},
		tipFormatter: Function,
		dragging: Boolean,
		onDragStart: Function,
		onKeydownUpdate: Function
	},
	setup(props, { emit, expose }) {
		const isHover = ref(false);
		const elRef = ref();
		expose({ focus: () => {
			elRef.value?.focus();
		} });
		const percent = computed(() => {
			const diff = props.max - props.min;
			if (diff === 0) return 0;
			return Math.max(0, Math.min(100, (props.value - props.min) / diff * 100));
		});
		const thumbStyle = computed(() => {
			const p = percent.value;
			const size = props.size === "small" ? 18 : 24;
			const position = `calc(${p}% + ${(.5 - p / 100) * size}px)`;
			if (props.vertical) return props.reverse ? {
				top: position,
				transform: "translate(-50%, -50%)"
			} : {
				bottom: position,
				transform: "translate(-50%, 50%)"
			};
			return props.reverse ? {
				right: position,
				transform: "translate(50%, -50%)"
			} : {
				left: position,
				transform: "translate(-50%, -50%)"
			};
		});
		const handleDown = (e) => {
			if (props.disabled) return;
			e.preventDefault();
			e.stopPropagation();
			emit("dragStart", e);
		};
		return () => {
			const displayValue = props.tipFormatter ? props.tipFormatter(props.value) : String(props.value);
			const showTooltip = props.tooltipVisible === true ? true : props.dragging || isHover.value;
			const thumpProps = {
				class: ["k-slider-thumb", {
					"is-dragging": props.dragging,
					"k-slider-thumb-sm": props.size === "small"
				}],
				style: thumbStyle.value,
				ref: elRef,
				tabindex: props.disabled ? void 0 : 0,
				onMousedown: handleDown,
				onTouchstart: handleDown,
				onKeydown: (e) => emit("keydownUpdate", e),
				onMouseenter: () => isHover.value = true,
				onMouseleave: () => isHover.value = false
			};
			return createVNode(Tooltip, {
				"title": displayValue,
				"disabled": props.disabled || props.tooltipVisible === false,
				"show": showTooltip && !props.disabled,
				"placement": props.vertical ? "right" : "top"
			}, { default: () => [createVNode("div", thumpProps, null)] });
		};
	}
});
//#endregion
//#region components/utils/mouse.ts
var getPosition = (e) => {
	let clientX = 0, clientY = 0;
	if ("touches" in e) {
		clientX = e.touches[0].clientX;
		clientY = e.touches[0].clientY;
	} else {
		clientX = e.clientX;
		clientY = e.clientY;
	}
	return [clientX, clientY];
};
var Slider = /* @__PURE__ */ defineComponent({
	name: "Slider",
	props: {
		modelValue: {
			type: [Array, Number],
			default: 0
		},
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		step: {
			type: Number,
			default: 1
		},
		disabled: Boolean,
		vertical: Boolean,
		reverse: Boolean,
		range: Boolean,
		marks: Object,
		size: [String, Number],
		included: {
			type: Boolean,
			default: true
		},
		tipFormatter: Function,
		tooltipVisible: {
			type: Boolean,
			default: null
		},
		onChange: Function
	},
	setup(props, { emit }) {
		const size = inject("size", void 0);
		const railWidth = ref(0);
		const thumbRefs = ref([]);
		const setThumbRef = (el, index) => {
			if (el) thumbRefs.value[index] = el;
		};
		const railRef = ref();
		const draggingIndex = ref(-1);
		const internalValue = ref(props.range ? [props.min, props.min] : props.min);
		const sortValue = (val) => {
			if (Array.isArray(val)) return [...val].sort((a, b) => a - b);
			return val;
		};
		const formatValue = (val) => {
			if (props.range) return sortValue((Array.isArray(val) ? [...val] : [props.min, props.min]).map((v) => getClosestStep(v, props)));
			return getClosestStep(val, props);
		};
		const updateSize = () => {
			if (railRef.value) railWidth.value = props.vertical ? railRef.value.offsetHeight : railRef.value.offsetWidth;
		};
		onMounted(() => {
			updateSize();
			window.addEventListener("resize", updateSize);
		});
		onUnmounted(() => {
			window.removeEventListener("resize", updateSize);
		});
		watch(() => props.modelValue, (nv) => {
			if (draggingIndex.value === -1) internalValue.value = formatValue(nv);
		}, { immediate: true });
		const getPercent = (val) => {
			const diff = props.max - props.min;
			return diff === 0 ? 0 : Math.max(0, Math.min(100, (val - props.min) / diff * 100));
		};
		const getValueFromEvent = (e) => {
			const rect = railRef.value.getBoundingClientRect();
			const W = props.vertical ? rect.height : rect.width;
			const size = props.size === "small" ? 18 : 24;
			const R = size / 2;
			let [x, y] = getPosition(e);
			let distFromPhysicalStart = props.vertical ? rect.bottom - y : x - rect.left;
			const distFromLogicalStart = props.reverse ? W - distFromPhysicalStart : distFromPhysicalStart;
			const percent = Math.max(0, Math.min(1, (distFromLogicalStart - R) / (W - size)));
			const rawValue = new Big(props.max - props.min).times(percent).plus(props.min);
			return getClosestStep(Number(rawValue), props);
		};
		const handleThumbMove = (e) => {
			if (props.disabled || draggingIndex.value === -1) return;
			const newValue = getValueFromEvent(e);
			let nextInternal = null;
			if (props.range) {
				const oldValues = [...internalValue.value];
				oldValues[draggingIndex.value] = newValue;
				if (oldValues[0] > oldValues[1]) {
					nextInternal = [oldValues[1], oldValues[0]];
					draggingIndex.value = draggingIndex.value === 0 ? 1 : 0;
				} else nextInternal = oldValues;
			} else nextInternal = newValue;
			if (JSON.stringify(nextInternal) !== JSON.stringify(internalValue.value)) {
				internalValue.value = nextInternal;
				emit("update:modelValue", nextInternal);
				emit("change", nextInternal);
			}
		};
		const handleRailClick = (e) => {
			if (props.disabled) return;
			const newValue = getValueFromEvent(e);
			if (props.range) {
				const [v1, v2] = internalValue.value;
				const targetIndex = Math.abs(newValue - v1) <= Math.abs(newValue - v2) ? 0 : 1;
				const nextValues = [...internalValue.value];
				nextValues[targetIndex] = newValue;
				internalValue.value = sortValue(nextValues);
			} else internalValue.value = newValue;
			emit("update:modelValue", internalValue.value);
			emit("change", internalValue.value);
		};
		const handleThumbDown = (index) => {
			if (props.disabled) return;
			draggingIndex.value = index;
			const onMove = (e) => handleThumbMove(e);
			const onUp = () => {
				draggingIndex.value = -1;
				document.removeEventListener("mousemove", onMove);
				document.removeEventListener("mouseup", onUp);
				document.removeEventListener("touchmove", onMove);
				document.removeEventListener("touchend", onUp);
			};
			document.addEventListener("mousemove", onMove);
			document.addEventListener("mouseup", onUp);
			document.addEventListener("touchmove", onMove, { passive: false });
			document.addEventListener("touchend", onUp);
		};
		const handleKeydown = (e, index) => {
			if (props.disabled) return;
			const isPlus = ["ArrowRight", "ArrowUp"].includes(e.key);
			const isMinus = ["ArrowLeft", "ArrowDown"].includes(e.key);
			if (!isPlus && !isMinus) return;
			e.preventDefault();
			let nextValue = 0;
			const currentValues = props.range ? [...internalValue.value] : [internalValue.value];
			const targetValue = currentValues[index];
			if (typeof props.step !== "number") {
				if (props.marks) {
					const mKeys = Object.keys(props.marks).map(Number).sort((a, b) => a - b);
					const currIdx = mKeys.indexOf(getClosestStep(targetValue, props));
					let nextIdx = isPlus ? currIdx + 1 : currIdx - 1;
					nextIdx = Math.max(0, Math.min(mKeys.length - 1, nextIdx));
					nextValue = mKeys[nextIdx];
				}
			} else nextValue = Number(new Big(targetValue).plus(isPlus ? props.step : -props.step));
			if (props.range) {
				const otherIndex = index === 0 ? 1 : 0;
				const otherValue = currentValues[otherIndex];
				if (index === 0 && nextValue > otherValue || index === 1 && nextValue < otherValue) {
					const nextInternal = [];
					nextInternal[index] = otherValue;
					nextInternal[otherIndex] = getClosestStep(nextValue, props);
					internalValue.value = nextInternal.sort((a, b) => a - b);
					nextTick(() => {
						const targetThumb = thumbRefs.value[otherIndex];
						if (targetThumb) targetThumb.focus();
					});
				} else {
					currentValues[index] = nextValue;
					internalValue.value = formatValue(currentValues);
				}
			} else internalValue.value = formatValue(nextValue);
			emit("update:modelValue", internalValue.value);
			emit("change", internalValue.value);
		};
		const getCoord = (val) => {
			const p = getPercent(val) / 100;
			const size = props.size === "small" ? 18 : 24;
			const R = size / 2;
			const W = railWidth.value;
			if (W === 0) return 0;
			const D = 18;
			const thumbPos = p * (W - size) + R;
			if (thumbPos < D) return (thumbPos - R) / (D - R) * D;
			else if (thumbPos > W - D) return W - D + (thumbPos - (W - D)) / (D - R) * D;
			else return thumbPos;
		};
		return () => {
			const { vertical, reverse, min, max, disabled, marks, included } = props;
			const renderTrack = () => {
				if (!included && marks) return null;
				const [v1, v2] = props.range ? internalValue.value : [props.min, internalValue.value];
				const pos1 = getCoord(Math.min(v1, v2));
				const pos2 = getCoord(Math.max(v1, v2));
				const start = props.range ? `${pos1}px` : "0px";
				const length = props.range ? `${pos2 - pos1}px` : `${pos2}px`;
				let style = {};
				if (props.vertical) style = props.reverse ? {
					top: start,
					height: length
				} : {
					bottom: start,
					height: length
				};
				else style = props.reverse ? {
					right: start,
					width: length
				} : {
					left: start,
					width: length
				};
				return createVNode("div", {
					class: "k-slider-track",
					style
				}, null);
			};
			const renderMarks = () => {
				if (!marks) return null;
				return createVNode("div", { "class": "k-slider-marks" }, [Object.keys(marks).map(Number).map((val) => {
					const coord = getCoord(val);
					let isActive = false;
					if (props.range && Array.isArray(internalValue.value)) isActive = val >= internalValue.value[0] && val <= internalValue.value[1];
					else isActive = val <= internalValue.value;
					let style = {};
					if (vertical) {
						style = reverse ? {
							top: `${coord}px`,
							transform: "translateY(-50%)"
						} : {
							bottom: `${coord}px`,
							transform: "translateY(50%)"
						};
						if (val == props.max) style.marginTop = "-4px";
						if (val == props.min) style.marginTop = "4px";
					} else {
						style = reverse ? {
							right: `${coord}px`,
							transform: "translateX(50%)"
						} : {
							left: `${coord}px`,
							transform: "translateX(-50%)"
						};
						if (val == props.max) style.marginLeft = "-4px";
						if (val == props.min) style.marginLeft = "4px";
					}
					return createVNode("div", mergeProps({ "key": val }, {
						class: "k-slider-mark-item",
						style
					}), [createVNode("span", { "class": ["k-slider-mark-dot", { "is-active": isActive }] }, null), createVNode("div", { "class": ["k-slider-mark-text", { "is-active": isActive }] }, [marks[val]])]);
				})]);
			};
			const thumbs = (props.range ? [0, 1] : [0]).map((idx) => {
				return createVNode(thumb_default, {
					"key": idx,
					"ref": (el) => setThumbRef(el, idx),
					"value": props.range ? internalValue.value[idx] : internalValue.value,
					"min": min,
					"max": max,
					"size": props.size || size,
					"vertical": vertical,
					"reverse": reverse,
					"disabled": disabled,
					"tooltipVisible": props.tooltipVisible,
					"tipFormatter": props.tipFormatter,
					"dragging": draggingIndex.value === idx,
					"onDragStart": () => handleThumbDown(idx),
					"onKeydownUpdate": (e) => handleKeydown(e, idx)
				}, null);
			});
			return createVNode("div", {
				type: vertical ? "vertical" : "horizontal",
				class: ["k-slider", {
					"k-slider-disabled": disabled,
					"k-slider-vertical": vertical,
					"k-slider-reverse": reverse
				}]
			}, [createVNode("div", { "class": "k-slider-bar" }, [
				createVNode("div", {
					"class": "k-slider-rail",
					"ref": railRef,
					"onClick": handleRailClick
				}, null),
				renderTrack(),
				renderMarks(),
				thumbs
			])]);
		};
	}
});
//#endregion
//#region components/image/utils.ts
var loadImage = (src, callback, err) => {
	if (!src) return;
	let image = new Image();
	let isCompleted = false;
	const cleanup = () => {
		if (isCompleted || !image) return;
		isCompleted = true;
		image.onload = null;
		image.onerror = null;
		image = null;
	};
	image.onload = () => {
		if (!isCompleted && image) {
			const { width, height } = image;
			callback && callback({
				width,
				height
			});
		}
		cleanup();
	};
	image.onerror = () => {
		if (!isCompleted) err && err();
		cleanup();
	};
	image.src = src;
};
//#endregion
//#region components/image/preview.tsx
var ImagePreview = /* @__PURE__ */ defineComponent({
	name: "ImagePreview",
	props: {
		type: String,
		src: String,
		origin: String,
		hasControl: Boolean,
		value: Boolean,
		data: {
			type: Array,
			default: () => []
		},
		showPanel: Boolean
	},
	setup(props, { emit, slots, expose }) {
		const { value, type, src, origin, showPanel, data } = toRefs(props);
		const state = reactive({
			scale: 1,
			data,
			rotate: 0,
			startPos: {
				x: 0,
				y: 0
			},
			initPos: {
				x: 0,
				y: 0
			},
			left: 0,
			top: 0,
			isMouseDown: false,
			type: type.value,
			visible: value.value,
			src: origin.value || src.value || "",
			loading: false,
			error: false,
			vertical: true,
			isShowPanel: showPanel.value,
			panelRight: 0,
			touch: false
		});
		const refImage = ref();
		const panelRef = ref();
		const maxScale = 10;
		const updatePanelRight = () => {
			state.panelRight = panelRef.value && state.isShowPanel ? panelRef.value.offsetWidth : 0;
		};
		const setRotate = (left) => {
			state.rotate = left ? state.rotate - 90 : state.rotate + 90;
			state.vertical = !state.vertical;
			resetPosition();
		};
		const setScale = (zoomIn) => {
			state.scale = zoomIn ? state.scale + 1 : state.scale - 1;
			state.scale = zoomIn ? Math.min(state.scale, maxScale) : Math.max(1, state.scale);
			resetPosition();
		};
		const close = () => {
			state.visible = false;
			emit("input", false);
			emit("close");
		};
		const mousewheel = (e) => {
			if (!state.visible) return;
			const { deltaY } = e;
			setScale(deltaY < 0);
			e.stopPropagation();
			e.preventDefault();
		};
		const mousedown = (e) => {
			if (!state.visible) return;
			if (refImage.value && refImage.value.contains(e.target)) {
				if (e.button && e.button != 0) return;
				let [x, y] = getPosition(e);
				state.isMouseDown = true;
				state.startPos = {
					x,
					y
				};
				state.initPos = {
					x,
					y
				};
				mousemove(e);
				if (state.touch) {
					document.addEventListener("touchmove", mousemove, { passive: false });
					document.addEventListener("touchend", mouseup, { passive: false });
				} else {
					document.addEventListener("mousemove", mousemove, { passive: false });
					document.addEventListener("mouseup", mouseup, { passive: false });
				}
			}
		};
		const resetPosition = () => {
			if (state.error) return;
			const { innerHeight, innerWidth } = window;
			const scale = state.scale;
			const top = state.top;
			const left = state.left;
			const vertical = state.vertical;
			if (!refImage.value) return;
			let offsetWidth = refImage.value.offsetWidth;
			let offsetHeight = refImage.value.offsetHeight;
			let panelWidth = panelRef.value && state.isShowPanel ? panelRef.value.offsetWidth : 0;
			let newWidth = offsetWidth;
			let newHeight = offsetHeight;
			if (!vertical) {
				newWidth = offsetHeight;
				newHeight = offsetWidth;
			}
			if (newWidth * scale >= innerWidth - panelWidth) {
				let maxLeft = (newWidth * scale - (innerWidth - panelWidth)) / 2;
				if (left >= maxLeft) state.left = maxLeft;
				else if (state.left < -maxLeft) state.left = -maxLeft;
			} else state.left = 0;
			if (newHeight * scale >= innerHeight) {
				let maxTop = (newHeight * scale - innerHeight) / 2;
				if (top >= maxTop) state.top = maxTop;
				else if (top < -maxTop) state.top = -maxTop;
			} else state.top = 0;
		};
		const mouseup = () => {
			if (!state.visible) return;
			state.isMouseDown = false;
			resetPosition();
			if (state.touch) {
				document.removeEventListener("touchmove", mousemove);
				document.removeEventListener("touchend", mouseup);
			} else {
				document.removeEventListener("mousemove", mousemove);
				document.removeEventListener("mouseup", mouseup);
			}
		};
		const mousemove = (e) => {
			if (!state.visible) return;
			if (state.isMouseDown) {
				e.preventDefault();
				let [clientX, clientY] = getPosition(e);
				const { x, y } = state.startPos;
				state.left += clientX - x;
				state.top += clientY - y;
				state.startPos = {
					x: clientX,
					y: clientY
				};
			}
		};
		const switchImage = (left) => {
			state.scale = 1;
			const data = props.data || [];
			const index = data.indexOf(state.src);
			let newIndex = index;
			newIndex = left ? newIndex - 1 : newIndex + 1;
			newIndex = Math.max(0, newIndex);
			newIndex = Math.min(newIndex, data.length - 1);
			state.src = data[newIndex];
			if (left && index == 0 || !left && index == data.length - 1) return;
			emit("switch", newIndex);
		};
		const download = () => {
			if (!state.error) {
				const x = new XMLHttpRequest();
				x.open("GET", state.src, true);
				x.responseType = "blob";
				x.onload = function() {
					const url = window.URL.createObjectURL(x.response);
					const a = document.createElement("a");
					a.href = url;
					a.download = "";
					a.click();
				};
				x.send();
			}
		};
		const togglePanel = () => {
			state.isShowPanel = !state.isShowPanel;
			emit("togglePanel", state.isShowPanel);
			nextTick(() => resetPosition());
			updatePanelRight();
		};
		const getPanel = () => {
			const panel = getChildren(slots.panel?.());
			if (panel.length) return createVNode("div", {
				"class": ["k-image-preview-panel", { "k-image-preview-panel-hidden": !state.isShowPanel }],
				"ref": panelRef
			}, [createVNode("span", {
				"class": "k-image-preview-panel-action",
				"onClick": () => togglePanel()
			}, [createVNode(Icon, { "type": ChevronUp }, null)]), panel]);
			return null;
		};
		watch(() => props.src, (src) => {
			state.src = src || "";
		});
		watch(() => props.value, (value) => {
			state.visible = value;
			if (value) nextTick(() => {
				updatePanelRight();
			});
		});
		watch(() => state.src, (src) => {
			if (state.type == "media" || !src) return;
			state.loading = true;
			loadImage(src, () => {
				state.loading = false;
				state.error = false;
			}, () => {
				state.loading = false;
				state.error = true;
			});
		});
		watch(() => props.showPanel, (value) => {
			state.isShowPanel = value;
			updatePanelRight();
		});
		onMounted(() => {
			if (typeof window !== "undefined") {
				const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.TouchEvent !== void 0;
				state.touch = touch;
				const event = touch ? "touchstart" : "mousedown";
				document.addEventListener(event, mousedown, { passive: false });
				document.addEventListener("wheel", mousewheel, { passive: false });
				document.addEventListener("keydown", escToClose);
			}
		});
		onBeforeUnmount(() => {
			document.removeEventListener("wheel", mousewheel);
			document.removeEventListener("keydown", escToClose);
		});
		const show = (props) => {
			if (props?.src) state.src = props.src;
			if (props?.type) state.type = props.type;
			state.visible = true;
		};
		const escToClose = (e) => {
			if (e.keyCode === 27) close();
		};
		expose({
			show,
			close,
			togglePanel
		});
		return () => {
			const { scale, rotate, visible, src, left, top, data, loading, panelRight, type } = state;
			const imgStyle = { transform: `scale3d(${scale}, ${scale}, 1) rotate(${rotate}deg)` };
			const moveStyle = {
				transform: `translate3d(${left}px, ${top}px, 0px)`,
				transition: state.isMouseDown ? "0" : void 0
			};
			const imgProps = {
				class: "k-image-preview-img",
				src,
				style: imgStyle,
				ref: refImage
			};
			const tools = getChildren(slots.tool?.());
			return createVNode("div", { "class": "k-image-preview-root" }, [withDirectives(createVNode("div", { "class": "k-image-preview" }, [
				createVNode(Transition, { "name": "k-image-fade" }, { default: () => [withDirectives(createVNode("div", {
					"class": "k-image-preview-mask",
					"onClick": close
				}, null), [[vShow, visible]])] }),
				createVNode("div", {
					"class": "k-image-preview-wrap",
					"style": { right: panelRight + "px" }
				}, [
					createVNode(Transition, { "name": "k-image-fade" }, { default: () => [withDirectives(createVNode("ul", { "class": "k-image-preview-control" }, [
						createVNode("li", { "class": "k-image-preview-action-nav" }, [
							createVNode(Button, {
								"icon": ChevronLeft,
								"type": "text",
								"disabled": !data.length || data.indexOf(src) == 0,
								"onClick": () => switchImage(true)
							}, null),
							createVNode("span", null, [
								data?.indexOf(src) + 1 || 1,
								createTextVNode("/"),
								data?.length || 1
							]),
							createVNode(Button, {
								"icon": ChevronRight,
								"type": "text",
								"disabled": !data.length || data.indexOf(src) == data.length - 1,
								"onClick": () => switchImage()
							}, null)
						]),
						createVNode("li", {
							"class": "k-image-preview-action k-image-preview-action-rotate-left",
							"onClick": () => setRotate(true)
						}, [createVNode(Icon, { "type": RotateCcwSquare }, null)]),
						createVNode("li", {
							"class": "k-image-preview-action k-image-preview-action-rotate-right",
							"onClick": () => setRotate()
						}, [createVNode(Icon, { "type": RotateCwSquare }, null)]),
						createVNode("li", {
							"class": ["k-image-preview-action", { "k-image-preview-action-disabled": scale <= 1 }],
							"onClick": () => setScale()
						}, [createVNode(Icon, { "type": Minus }, null)]),
						createVNode("li", { "class": "k-image-preview-action k-image-preview-action-scale" }, [createVNode(Slider, {
							"modelValue": state.scale,
							"min": 1,
							"max": maxScale,
							"size": "small",
							"tooltipVisible": false,
							"onChange": (val) => state.scale = val
						}, null)]),
						createVNode("li", {
							"class": ["k-image-preview-action", { "k-image-preview-action-disabled": scale >= 5 }],
							"onClick": () => setScale(true)
						}, [createVNode(Icon, { "type": Plus }, null)]),
						createVNode("li", {
							"class": "k-image-preview-action",
							"onClick": download
						}, [createVNode(Icon, { "type": ArrowDown }, null)]),
						tools.map((tool) => {
							return createVNode("li", { "class": "k-image-preview-action" }, [tool]);
						}),
						createVNode("li", { "class": "k-image-preview-action-divider" }, null),
						createVNode("li", {
							"class": "k-image-preview-action",
							"onClick": close
						}, [createVNode(Icon, { "type": X }, null)])
					]), [[vShow, visible]])] }),
					createVNode("div", {
						"class": "k-image-preview-img-wrap",
						"style": moveStyle
					}, [type == "media" ? withDirectives(createVNode("video", mergeProps({ "controls": true }, imgProps), null), [[vShow, visible]]) : !state.error && !state.loading ? withDirectives(createVNode("img", imgProps, null), [[vShow, visible]]) : !loading ? createVNode("div", { "class": "k-image-preview-img-error" }, [createVNode(Icon, { "type": Image$1 }, null)]) : null]),
					props.data.length > 1 ? [createVNode("div", {
						"class": ["k-image-preview-switch-left", { "k-image-preview-switch-disabled": data.indexOf(src) == 0 }],
						"onClick": () => switchImage(true)
					}, [createVNode(Icon, { "type": ArrowLeft }, null)]), createVNode("div", {
						"class": ["k-image-preview-switch-right", { "k-image-preview-switch-disabled": data.indexOf(src) == data.length - 1 }],
						"onClick": () => switchImage()
					}, [createVNode(Icon, { "type": ArrowRight }, null)])] : null,
					loading ? createVNode("div", { "class": "k-image-preview-loading" }, [createVNode(Icon, {
						"type": Loading,
						"spin": true
					}, null)]) : null
				]),
				getPanel()
			]), [[vShow, visible]])]);
		};
	}
});
//#endregion
//#region components/image/instance.ts
var createInstance$2 = (props = {}, slots) => {
	const containerId = `k-image-preview-box`;
	let container = document.getElementById(containerId);
	if (!container) {
		container = document.createElement("div");
		container.id = containerId;
		document.body.appendChild(container);
	}
	const vm = createVNode(ImagePreview, props, slots);
	render(vm, container);
	vm.appContext = getAppContext()?.appContext || null;
	const instance = vm.component?.exposed;
	if (instance) instance.destroy = () => {
		render(null, container);
		if (container.parentNode) container.parentNode.removeChild(container);
	};
	return instance;
};
//#endregion
//#region components/image/group.tsx
var ImageGroup = /* @__PURE__ */ defineComponent({
	name: "ImageGroup",
	props: { data: Array },
	setup(props, { slots }) {
		const data = ref(props.data || []);
		const preview = ref();
		const show = (props, slots) => {
			if (!preview.value) {
				props.data = data.value;
				preview.value = createInstance$2({ ...props }, slots);
			}
			preview.value.show(props);
		};
		const togglePanel = () => {
			if (preview.value) preview.value.togglePanel();
		};
		const register = (item) => {
			data.value.push(item);
		};
		const unregister = (item) => {
			const index = data.value.indexOf(item);
			if (index >= 0) data.value.splice(index, 1);
		};
		const destroy = () => {
			if (preview.value) {
				preview.value.destroy();
				preview.value = null;
			}
		};
		provide("ImageGroup", {
			show,
			destroy,
			register,
			unregister,
			data,
			togglePanel
		});
		onUnmounted(() => {
			destroy();
		});
		return () => {
			return createVNode("div", { "class": "k-image-group" }, [slots.default?.()]);
		};
	}
});
//#endregion
//#region components/image/image.tsx
var KImage = /* @__PURE__ */ defineComponent({
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
		onClose: Function,
		onSwitch: Function
	},
	setup(props, { emit, slots, expose }) {
		const loading = ref(false);
		const showPlaceholder = ref(false);
		const imageUrl = ref();
		const imgWidth = ref(0);
		const imgHeight = ref(0);
		const preview = ref();
		const ImageGroup = inject("ImageGroup", null);
		const togglePanel = () => {
			const instance = ImageGroup || preview.value;
			if (instance) instance.togglePanel();
		};
		const show = (props, slots) => {
			if (ImageGroup) {
				ImageGroup.show(props, slots);
				return;
			}
			if (!preview.value) preview.value = createInstance$2({ ...props }, slots);
			preview.value.show(props);
		};
		const destroy = () => {
			if (preview.value) {
				preview.value.destroy();
				preview.value = null;
			}
			if (ImageGroup) ImageGroup.destroy();
		};
		expose({
			show,
			destroy,
			togglePanel
		});
		const showPreview = (e) => {
			const { origin, src } = props;
			if (!src && !origin || showPlaceholder.value || loading.value) return;
			show({
				onClose: () => {
					emit("close");
					setTimeout(() => {
						destroy();
					}, 200);
				},
				onSwitch: (index) => {
					emit("switch", index);
				},
				src: origin || src,
				showPanel: props.showPanel,
				type: props.type
			}, slots);
			e.preventDefault();
		};
		const reload = () => {
			const { src, placeholder } = props;
			if (src) {
				loading.value = true;
				loadImage(src, ({ width, height }) => {
					showPlaceholder.value = false;
					loading.value = false;
					imageUrl.value = src;
					imgWidth.value = width;
					imgHeight.value = height;
				}, () => {
					loading.value = false;
					showPlaceholder.value = true;
					imageUrl.value = placeholder;
				});
			} else {
				showPlaceholder.value = true;
				imageUrl.value = placeholder;
			}
		};
		watch(() => props.src, () => {
			reload();
		});
		onMounted(() => {
			reload();
			ImageGroup?.register(props.origin || props.src);
		});
		onBeforeUnmount(() => {
			destroy();
			ImageGroup?.unregister(props.origin || props.src);
		});
		return () => {
			const { alt, width, height, imgStyle } = props;
			const containerProps = {
				style: {
					width: width ? `${width}px` : void 0,
					height: height ? `${height}px` : void 0
				},
				class: "k-image",
				onClick: showPreview
			};
			const imgProps = {
				style: imgStyle,
				class: "k-image-img",
				alt,
				src: imageUrl.value
			};
			const nodes = [];
			if (loading.value) nodes.push(createVNode("div", { "class": "k-image-loading" }, [createVNode(Icon, {
				"type": Loading,
				"spin": true,
				"class": "k-image-loading-icon"
			}, null)]));
			else if (showPlaceholder.value) if (imageUrl.value) nodes.push(createVNode("img", imgProps, null));
			else nodes.push(createVNode(Icon, {
				"type": Image$1,
				"class": "k-image-error"
			}, null));
			else nodes.push(createVNode("img", imgProps, null));
			return createVNode("div", containerProps, [nodes, slots.default?.()]);
		};
	}
});
//#endregion
//#region components/layout/index.tsx
var SiderHookKey = Symbol("SiderHookKey");
var layoutProps = {
	suffixCls: {
		type: String,
		default: "layout"
	},
	hasSider: {
		type: Boolean,
		default: void 0
	}
};
var siderProps = {
	suffixCls: {
		type: String,
		default: "layout-sider"
	},
	width: {
		type: [Number, String],
		default: 200
	},
	collapsedWidth: {
		type: [Number, String],
		default: 80
	},
	collapsible: Boolean,
	collapsed: Boolean
};
function createBasicComponent(suffixCls, name) {
	return /* @__PURE__ */ defineComponent({
		name,
		props: { suffixCls: {
			type: String,
			default: suffixCls
		} },
		setup(props, { slots }) {
			return () => createVNode("section", { "class": `k-${props.suffixCls}` }, [slots.default?.()]);
		}
	});
}
var LayoutMain = /* @__PURE__ */ defineComponent({
	name: "Layout",
	props: layoutProps,
	setup(props, { slots }) {
		const siders = ref([]);
		const collectSider = (mounted) => {
			mounted ? siders.value.push("sider") : siders.value.pop();
		};
		provide(SiderHookKey, collectSider);
		const classes = computed(() => [`k-${props.suffixCls}`, { [`k-${props.suffixCls}-has-sider`]: props.hasSider ?? siders.value.length > 0 }]);
		return () => createVNode("section", { "class": classes.value }, [slots.default?.()]);
	}
});
var Sider = /* @__PURE__ */ defineComponent({
	name: "LayoutSider",
	props: siderProps,
	setup(props, { slots }) {
		const collectSider = inject(SiderHookKey, null);
		onMounted(() => {
			collectSider?.(true);
		});
		onBeforeUnmount(() => {
			collectSider?.(false);
		});
		return () => createVNode("aside", { "class": `k-${props.suffixCls}` }, [slots.default?.()]);
	}
});
var Content = createBasicComponent("layout-content", "LayoutContent");
var Header = createBasicComponent("layout-header", "LayoutHeader");
var Footer = createBasicComponent("layout-footer", "LayoutFooter");
var Layout = LayoutMain;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;
var LoadingComponent = /* @__PURE__ */ defineComponent({
	name: "LoadingBar",
	props: { height: {
		type: [Number, String],
		default: 2
	} },
	setup(_, { expose }) {
		const visible = ref(false);
		const percent = ref(0);
		const animate = ref(false);
		const isError = ref(false);
		const updateTimer = ref();
		const hideTimer = ref();
		const start = () => {
			percent.value = 0;
			isError.value = false;
			visible.value = true;
			clearInterval(updateTimer.value);
			updateTimer.value = setInterval(() => {
				animate.value = true;
				const step = percent.value < 80 ? Math.random() * 5 + 2 : Math.random() * 1;
				percent.value = Math.min(percent.value + step, 95);
				if (percent.value >= 95) clearInterval(updateTimer.value);
			}, 200);
		};
		const finish = () => {
			clearInterval(updateTimer.value);
			percent.value = 100;
			hideTimer.value = setTimeout(() => {
				visible.value = false;
				setTimeout(() => {
					percent.value = 0;
				}, 300);
			}, 500);
		};
		const error = () => {
			isError.value = true;
			percent.value = 100;
			visible.value = true;
			clearInterval(updateTimer.value);
			hideTimer.value = setTimeout(() => {
				visible.value = false;
			}, 500);
		};
		const update = (pt) => {
			isError.value = false;
			visible.value = true;
			animate.value = pt > percent.value;
			percent.value = pt;
		};
		onBeforeUnmount(() => {
			clearInterval(updateTimer.value);
			clearTimeout(hideTimer.value);
		});
		expose({
			start,
			finish,
			error,
			update
		});
		return () => {
			const lineProps = {
				class: ["k-loading-line", { "k-loading-line-error": isError.value }],
				style: {
					width: `${percent.value}%`,
					transitionDuration: !animate.value || percent.value === 0 ? "0s" : "0.2s"
				}
			};
			return createVNode(Transition, { "name": "fade" }, { default: () => [withDirectives(createVNode("div", { "class": "k-loading-container" }, [createVNode("div", lineProps, null)]), [[vShow, visible.value]])] });
		};
	}
});
var loadInstance = null;
var createInstance$1 = (props, context) => {
	const containerId = `k-loading-box`;
	let container = document.getElementById(containerId);
	if (!container) {
		container = document.createElement("div");
		container.id = containerId;
		document.body.appendChild(container);
	}
	const vm = createVNode(LoadingComponent, props);
	vm.appContext = context?.appContext || getAppContext()?.appContext;
	render(vm, container);
	const instance = vm.component?.exposed;
	if (instance) instance.destroy = () => {
		render(null, container);
		if (container?.parentNode) container.parentNode.removeChild(container);
		loadInstance = null;
	};
	return instance;
};
var loading = {
	start() {
		if (!loadInstance) loadInstance = createInstance$1();
		loadInstance.start();
	},
	finish() {
		loadInstance?.finish();
	},
	error() {
		if (!loadInstance) loadInstance = createInstance$1();
		loadInstance.error();
	},
	update(pt) {
		if (!loadInstance) loadInstance = createInstance$1();
		loadInstance.update(pt);
	},
	destroy() {
		loadInstance?.destroy?.();
	}
};
var MenuItem = /* @__PURE__ */ defineComponent({
	name: "MenuItem",
	props: {
		icon: Array,
		title: String,
		disabled: Boolean,
		isPopup: Boolean
	},
	setup(props, { slots }) {
		let { icon, disabled, title } = props;
		const key = getCurrentInstance()?.vnode.key;
		const selectedKeys = inject("menu-selected-keys", ref([]));
		const mode = inject("menu-mode");
		const dropdown = inject("dropdown", null);
		const active = ref(false);
		const keyPah = inject("menu-key-path", []);
		const selectedKeysChange = inject("selectedKeysChange");
		onMounted(() => {
			const selected = selectedKeys.value.indexOf(key) >= 0;
			selected && selectedKeysChange?.(key, selected, keyPah);
		});
		return () => {
			const preCls = dropdown ? "dropdown-menu" : "menu";
			const selected = selectedKeys.value.indexOf(key) >= 0 && !dropdown;
			const _props = {
				class: [`k-${preCls}-item`, {
					[`k-${preCls}-item-active`]: active.value,
					[`k-${preCls}-item-selected`]: selected,
					[`k-${preCls}-item-disabled`]: disabled
				}],
				style: { paddingLeft: (mode?.value == "inline" || mode?.value == "vertical") && keyPah.length && !props.isPopup ? `${keyPah.length * 16 + 16}px` : void 0 },
				onMouseenter: () => {
					if (disabled) return;
					active.value = true;
				},
				onMouseleave: () => {
					if (disabled) return;
					active.value = false;
				},
				onClick: () => {
					if (disabled) return;
					selectedKeysChange?.(key, true, keyPah);
				}
			};
			let titleNode = createVNode("span", { "class": `k-${preCls}-title-content` }, [title || getChildren(slots.default?.())]);
			return createVNode("li", _props, [slots.icon ? createVNode("span", { "class": `k-${preCls}-item-icon` }, [slots.icon()]) : icon ? createVNode(Icon, {
				"type": icon,
				"class": `k-${preCls}-item-icon`
			}, null) : null, titleNode]);
		};
	}
});
var SubMenu = /* @__PURE__ */ defineComponent({
	name: "SubMenu",
	directives: { transfer },
	props: {
		disabled: Boolean,
		title: String,
		isPopup: Boolean,
		icon: Array
	},
	setup(props, { slots }) {
		const refSelection = ref(null);
		const refPopper = ref(null);
		const top = ref(0);
		const left = ref(0);
		const minWidth = ref("");
		const key = getCurrentInstance()?.vnode.key;
		const menuMode = inject("menu-mode", ref(null));
		const selectedKeys = inject("menu-selected-keys", ref([]));
		const openKeys = inject("menu-open-keys", ref([]));
		const openKeysChange = inject("openKeysChange");
		const clearPopTimer = inject("clearPopTimer", null);
		const hidePopTimer = inject("hidePopTimer", null);
		const currentPlacement = ref("bottom-left");
		const transOrigin = ref("bottom left");
		const popTimer = ref();
		const inlineCollapsed = inject("menu-inline-collapsed", ref(false));
		const dropdown = inject("dropdown", null);
		const preCls = dropdown ? "dropdown-menu-submenu" : "menu-submenu";
		const rendered = ref(false);
		onMounted(() => {
			nextTick(() => {
				minWidth.value = `${refSelection.value?.offsetWidth}px`;
				if (openKeys.value.indexOf(key) >= 0) updatePosition();
			});
		});
		const clearCurrentPopTimer = () => {
			clearTimeout(popTimer.value);
		};
		const hideCurrentPopTimer = () => {
			popTimer.value = setTimeout(() => {
				openKeysChange?.(key, false, keyPah);
			}, 200);
		};
		const keyPah = inject("menu-key-path", []);
		provide("menu-key-path", [...keyPah, key]);
		provide("clearPopTimer", clearCurrentPopTimer);
		provide("hidePopTimer", hideCurrentPopTimer);
		const showPopper = () => {
			rendered.value = true;
			nextTick(() => {
				openKeysChange?.(key, true, keyPah);
				updatePosition();
			});
		};
		const updatePosition = () => {
			if (menuMode.value == "horizontal" && keyPah.length > 0 || menuMode.value == "vertical" || menuMode.value == "inline" && inlineCollapsed.value) currentPlacement.value = "right-top";
			nextTick(() => {
				setPlacement({
					refSelection,
					refPopper,
					currentPlacement,
					transOrigin,
					top,
					left,
					offset: 8
				});
			});
		};
		const renderPopper = () => {
			const opened = openKeys.value.indexOf(key) >= 0;
			let leftValue = left.value;
			if (menuMode?.value == "horizontal" && keyPah.length || menuMode.value == "vertical") leftValue += 3;
			const popperPros = {
				ref: refPopper,
				"k-placement": currentPlacement.value,
				style: {
					minWidth: menuMode.value == "horizontal" ? minWidth.value : null,
					top: top.value + "px",
					left: leftValue + "px",
					transformOrigin: transOrigin.value
				},
				onMouseenter: () => {
					clearCurrentPopTimer();
					openKeysChange?.(key, true, keyPah);
					clearPopTimer?.();
				},
				onMouseleave: () => {
					hideCurrentPopTimer();
					hidePopTimer?.();
				}
			};
			const menuItems = getChildren(slots.default?.()).map((child) => {
				return cloneVNode(child, { isPopup: true });
			});
			return rendered.value ? createVNode(Transition, { "name": `k-${preCls}-popup` }, { default: () => [withDirectives(createVNode("div", mergeProps({ "class": `k-${preCls}-popup` }, popperPros), [createVNode("div", { "class": `k-${preCls}-sub` }, [createVNode("ul", { "class": `k-menu k-menu-vertical` }, [menuItems])])]), [[vShow, opened], [resolveDirective("transfer"), true]])] }) : null;
		};
		const renderSubmenu = () => {
			const opened = openKeys.value.indexOf(key) >= 0;
			const popper = renderPopper();
			if (menuMode.value != "horizontal") {
				const node = [createVNode(Transition, getTransitionProp("k-collapse-slide"), { default: () => [withDirectives(createVNode("div", { "class": `k-${preCls}-sub` }, [createVNode("ul", { "class": `k-menu k-menu-${menuMode.value}` }, [slots.default?.()])]), [[vShow, opened && !inlineCollapsed.value && menuMode.value != "vertical"]])] })];
				if (inlineCollapsed.value || menuMode.value == "vertical") popper && node.push(popper);
				return node;
			} else return popper;
		};
		return () => {
			const selected = selectedKeys.value.indexOf(key) >= 0 && !dropdown;
			const opened = openKeys.value.indexOf(key) >= 0;
			let titleProps = {
				class: `k-${preCls}-title`,
				style: {}
			};
			if (menuMode.value == "inline" && !inlineCollapsed.value) titleProps.onClick = () => {
				if (props.disabled) return;
				openKeysChange?.(key, !opened, keyPah);
			};
			else if (menuMode.value == "horizontal" || menuMode.value == "vertical" || inlineCollapsed.value) {
				titleProps.ref = refSelection;
				titleProps.onMouseenter = () => {
					if (props.disabled) return;
					clearCurrentPopTimer();
					showPopper();
				};
				titleProps.onMouseleave = () => {
					if (props.disabled) return;
					popTimer.value = setTimeout(() => {
						openKeysChange?.(key, false, keyPah);
					}, 200);
				};
			}
			if (keyPah.length && menuMode.value != "horizontal" && !props.isPopup) titleProps.style.paddingLeft = `${keyPah.length * 16 + 16}px`;
			let title = props.title || slots.title?.();
			const titleNode = createVNode("div", titleProps, [
				props.icon ? createVNode(Icon, {
					"type": props.icon,
					"class": "k-menu-item-icon"
				}, null) : null,
				createVNode("span", { "class": `k-${preCls}-title-content` }, [title]),
				menuMode.value == "horizontal" && !keyPah.length ? null : createVNode("i", { "class": `k-${preCls}-arrow` }, null)
			]);
			const classes = [`k-${preCls}`, {
				[`k-${preCls}-active`]: opened || selected,
				[`k-${preCls}-selected`]: selected,
				[`k-${preCls}-opened`]: opened,
				[`k-${preCls}-disabled`]: props.disabled
			}];
			const popper = renderSubmenu();
			return createVNode("li", { "class": classes }, [titleNode, popper]);
		};
	}
});
//#endregion
//#region components/menu/recursive-menu.tsx
function _isSlot$4(s) {
	return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var RecursiveMenu = /* @__PURE__ */ defineComponent({
	name: "RecursiveMenu",
	props: {
		item: {
			type: Object,
			required: true
		},
		isPopup: Boolean
	},
	setup(props) {
		return () => {
			let _slot;
			const { item } = props;
			return item.children && item.children.length > 0 ? createVNode(SubMenu, {
				"key": item.key,
				"isPopup": props.isPopup,
				"title": item.title,
				"icon": item.icon,
				"disabled": item.disabled
			}, _isSlot$4(_slot = item.children.map((child) => {
				return createVNode(RecursiveMenu, {
					"item": child,
					"key": child.key
				}, null);
			})) ? _slot : { default: () => [_slot] }) : createVNode(MenuItem, {
				"key": item.key,
				"isPopup": props.isPopup,
				"icon": item.icon,
				"disabled": item.disabled
			}, { default: () => [item.title] });
		};
	}
});
var Menu = /* @__PURE__ */ defineComponent({
	name: "Menu",
	props: {
		theme: String,
		mode: {
			type: String,
			default: "vertical"
		},
		modelValue: {
			type: Array,
			default: () => []
		},
		accordion: Boolean,
		items: Array,
		inlineCollapsed: Boolean,
		openKeys: {
			type: Array,
			default: () => []
		},
		onSelect: { type: Function },
		onOpenChange: { type: Function }
	},
	setup(props, { emit, slots }) {
		const defaultSelectedKeys = ref(props.modelValue || []);
		const defaultOpenKeys = ref(props.openKeys || []);
		const currentMode = ref(props.mode);
		const currentInlineCollapsed = ref(props.inlineCollapsed);
		const tempOpenKeys = ref(props.openKeys || []);
		provide("menu-open-keys", defaultOpenKeys);
		provide("menu-selected-keys", defaultSelectedKeys);
		provide("menu-mode", currentMode);
		provide("menu-inline-collapsed", currentInlineCollapsed);
		const dropdown = inject("dropdown", null);
		watch(() => props.modelValue, (value) => {
			defaultSelectedKeys.value = value;
		});
		watch(() => props.mode, (value) => {
			currentMode.value = value;
			setCollapsed(value === "vertical");
		});
		watch(() => props.openKeys, (value) => {
			defaultOpenKeys.value = value;
		});
		watch(() => props.inlineCollapsed, (collapsed) => {
			currentInlineCollapsed.value = collapsed;
			setCollapsed(collapsed);
		});
		onMounted(() => {
			setCollapsed(props.inlineCollapsed);
		});
		const setCollapsed = (collapsed) => {
			if (collapsed) {
				if (defaultOpenKeys.value.length > 0) tempOpenKeys.value = defaultOpenKeys.value;
				defaultOpenKeys.value = [];
			} else defaultOpenKeys.value = tempOpenKeys.value;
		};
		const dropdownMenuSelected = inject("dropdown-menu-selected", null);
		const selectedKeysChange = (key, selected, keyPath) => {
			if (selected) defaultSelectedKeys.value = [...keyPath, key];
			else defaultSelectedKeys.value = defaultSelectedKeys.value.filter((x) => x !== key);
			emit("update:value", defaultSelectedKeys.value);
			emit("select", {
				key,
				keyPath
			});
			if (currentMode.value == "horizontal" || currentMode.value == "vertical" || currentInlineCollapsed.value) {
				if (defaultOpenKeys.value.length > 0) tempOpenKeys.value = defaultOpenKeys.value;
				defaultOpenKeys.value = [];
			}
			dropdownMenuSelected?.({
				key,
				keyPath
			});
		};
		const openKeysChange = (key, opened, keyPath) => {
			if (props.accordion) defaultOpenKeys.value = opened ? [...keyPath, key] : keyPath;
			else if (!opened) defaultOpenKeys.value = defaultOpenKeys.value.filter((x) => x !== key);
			else defaultOpenKeys.value.push(key);
			emit("update:openKeys", defaultOpenKeys.value);
			emit("openChange", defaultOpenKeys.value);
		};
		provide("openKeysChange", openKeysChange);
		provide("selectedKeysChange", selectedKeysChange);
		return () => {
			const preCls = dropdown ? "dropdown-menu k-scroll" : "menu";
			const { items } = props;
			return createVNode("ul", {
				"class": [`k-${preCls} k-${preCls}-${currentMode.value}`, { [`k-${preCls}-inline-collapsed`]: props.inlineCollapsed }],
				"theme-mode": props.theme
			}, [items && items.length > 0 ? items.map((item) => {
				return createVNode(RecursiveMenu, {
					"item": item,
					"key": item.key
				}, null);
			}) : slots.default?.()]);
		};
	}
});
//#endregion
//#region components/menu/menu-divider.tsx
var MenuDivider = /* @__PURE__ */ defineComponent({
	name: "MenuDivider",
	setup() {
		const dropdown = inject("dropdown", null);
		return () => {
			return createVNode("li", { "class": `k-${dropdown ? "dropdown-menu" : "menu"}-item-divider` }, null);
		};
	}
});
var MenuGroup = /* @__PURE__ */ defineComponent({
	name: "MenuGroup",
	props: { title: {
		type: String,
		required: true
	} },
	setup(props, { slots }) {
		return () => {
			return createVNode("li", { "class": "k-menu-item-group" }, [createVNode("div", { "class": "k-menu-item-group-title" }, [props.title || slots.title?.()]), createVNode("ul", { "class": "k-menu-item-group-list" }, [slots.default?.()])]);
		};
	}
});
var content_default = /* @__PURE__ */ defineComponent({
	props: {
		type: { type: String },
		title: String,
		content: [String, Object],
		icon: Array,
		color: String,
		duration: Number,
		closable: Boolean,
		onClose: Function,
		noticeType: {
			type: String,
			default: "message"
		}
	},
	setup(props, { emit }) {
		const onClose = () => {
			emit("close");
		};
		return () => {
			let { noticeType, type, content, title, closable, icon, color } = props;
			const AlertIcon = icon ? icon : type ? {
				info: Info,
				error: CircleX,
				success: CircleCheck,
				warning: CircleAlert
			}[type] : null;
			const classes = [`k-${noticeType}-box`, {
				[`k-${noticeType}-${type}`]: type,
				"k-notice-has-icon": AlertIcon
			}];
			const children = [];
			if (AlertIcon) children.push(createVNode(Icon, {
				"type": AlertIcon,
				"color": color,
				"class": `k-${noticeType}-icon`
			}, null));
			if (noticeType == "message") {
				children.push(createVNode("span", null, [content]));
				if (closable) children.push(createVNode(Button, {
					"class": "k-message-close",
					"size": "small",
					"type": "text",
					"icon": X,
					"onClick": onClose
				}, null));
			} else {
				children.push(createVNode("div", { "class": "k-notice-title" }, [title]));
				children.push(createVNode("div", { "class": "k-notice-desc" }, [content]));
				children.push(createVNode(Button, {
					"class": "k-notice-close",
					"size": "small",
					"type": "text",
					"icon": X,
					"onClick": onClose
				}, null));
			}
			return createVNode("div", { "class": classes }, [createVNode("div", { "class": `k-${noticeType}-content` }, [...children])]);
		};
	}
});
//#endregion
//#region components/notice/container.tsx
var count = 0;
function getUuid() {
	return `k-message-${Date.now()}-${count++}`;
}
var container_default = /* @__PURE__ */ defineComponent({
	props: { type: String },
	setup(ps, { expose }) {
		const options = ref([]);
		const show = (option) => {
			let { duration = 3.5, onClose, closable, noticeType } = option;
			let key = getUuid();
			let timer;
			let callback = (key) => {
				typeof onClose === "function" && onClose();
				options.value = options.value.filter((item) => item.key !== key);
				clearTimeout(timer);
			};
			duration > 0 && (timer = setTimeout(callback, duration * 1e3, key));
			if (closable === true && noticeType == "message" || noticeType == "notice") option.onClose = () => callback(key);
			options.value.push({
				...option,
				key
			});
		};
		const clean = () => {
			options.value = [];
		};
		expose({
			show,
			clean
		});
		return () => {
			const { type } = ps;
			let transitionProps = {
				name: `k-${type}-slide`,
				class: `k-${type}`
			};
			if (type == "notice") {
				const p = getTransitionProp(`k-${type}-slide`);
				delete p.onEnter;
				delete p.onBeforeEnter;
				transitionProps = {
					...p,
					...transitionProps
				};
			}
			let children = options.value.map((item) => {
				return createVNode(content_default, { ...item }, null);
			});
			return createVNode(TransitionGroup, mergeProps({ "tag": "div" }, transitionProps), { default: () => [...children] });
		};
	}
});
//#endregion
//#region components/notice/instance.ts
var createInstance = (type, context) => {
	const containerId = `k-${type}-box`;
	let container = document.getElementById(containerId);
	if (!container) {
		container = document.createElement("div");
		container.id = containerId;
		document.body.appendChild(container);
	}
	const vm = createVNode(container_default, { type });
	vm.appContext = context?.appContext || getAppContext()?.appContext || null;
	render(vm, container);
	const instance = vm.component?.exposed;
	if (instance) instance.destroy = () => {
		render(null, container);
		if (container.parentNode) container.parentNode.removeChild(container);
	};
	return instance;
};
//#endregion
//#region components/message/index.ts
var messageInstance = null;
var message = {
	name: "message",
	show(options = {}) {
		if (!messageInstance) messageInstance = createInstance("message");
		const props = Object.assign(options, { noticeType: "message" });
		messageInstance?.show(props);
	},
	destroy() {
		if (messageInstance) {
			messageInstance.clean();
			messageInstance.destroy();
			messageInstance = null;
		}
	},
	info(content, duration, onClose) {
		return this.show({
			type: "info",
			content,
			duration,
			onClose
		});
	},
	error(content, duration, onClose) {
		return this.show({
			type: "error",
			content,
			duration,
			onClose
		});
	},
	success(content, duration, onClose) {
		return this.show({
			type: "success",
			content,
			duration,
			onClose
		});
	},
	warning(content, duration, onClose) {
		return this.show({
			type: "warning",
			content,
			duration,
			onClose
		});
	}
};
//#endregion
//#region components/modal/modal.tsx
function _isSlot$3(s) {
	return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Modal = /* @__PURE__ */ defineComponent({
	name: "Modal",
	directives: { transfer },
	props: {
		modelValue: Boolean,
		title: String,
		okText: String,
		cancelText: String,
		top: Number,
		width: Number,
		mask: {
			type: Boolean,
			default: true
		},
		maskClosable: {
			type: Boolean,
			default: false
		},
		maximized: Boolean,
		centered: Boolean,
		draggable: Boolean,
		showClose: {
			type: Boolean,
			default: true
		},
		loading: Boolean,
		footer: {
			type: Boolean,
			default: true
		},
		escKey: {
			type: Boolean,
			default: true
		},
		onClose: { type: Function },
		onOk: { type: Function },
		onCancel: { type: Function }
	},
	setup(props, { slots, emit }) {
		const visible = ref(props.modelValue);
		const rendered = ref(false);
		const showInner = ref(props.modelValue);
		const left = ref(0);
		const currentTop = ref(props.top);
		const isMousePressed = ref(false);
		const mousedownIn = ref(false);
		const startPos = ref({
			x: 0,
			y: 0
		});
		const refModal = ref();
		const refHeader = ref();
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return injectedLocale instanceof Object && "value" in injectedLocale ? injectedLocale.value : injectedLocale;
		});
		const escToClose = (event) => {
			if (event.key === "Escape") close();
		};
		onBeforeMount(() => {
			document.removeEventListener("mousedown", mousedown);
			props.escKey && document.removeEventListener("keydown", escToClose);
		});
		onMounted(() => {
			document.addEventListener("mousedown", mousedown);
			props.escKey && document.addEventListener("keydown", escToClose);
			if (props.draggable) left.value = (document.body.offsetWidth - (props.width || 480)) / 2;
			if (props.modelValue) toggle(true);
		});
		watch(() => props.modelValue, (nv) => {
			toggle(nv);
		});
		const getOffset = (el) => {
			return el ? {
				left: el.offsetLeft,
				top: el.offsetTop
			} : {
				left: 0,
				top: 0
			};
		};
		const toggle = (value) => {
			if (!rendered.value && value) {
				rendered.value = true;
				toggle(true);
			} else if (value) nextTick(() => {
				visible.value = value;
				showInner.value = value;
				emit("update:modelValue", true);
				nextTick(() => {
					updateOrigin();
				});
			});
			else {
				visible.value = false;
				setTimeout(() => {
					showInner.value = false;
				}, 300);
				emit("update:modelValue", false);
			}
		};
		const updateOrigin = () => {
			if (refModal.value) {
				let { x, y } = getMousePoint();
				let { left, top } = getOffset(refModal.value);
				refModal.value.style["transform-origin"] = `${x - left}px ${y - top}px`;
			}
		};
		const ok = () => {
			emit("ok");
		};
		const cancel = () => {
			toggle(false);
			emit("cancel");
		};
		const close = () => {
			toggle(false);
			emit("close");
		};
		const clickMaskToClose = (e) => {
			if (!props.loading && props.maskClosable && !refModal.value.contains(e.target) && !mousedownIn.value) close();
		};
		const mousemove = (e) => {
			if (isMousePressed.value && props.draggable) {
				let { x, y } = startPos.value;
				left.value += e.clientX - x;
				currentTop.value = currentTop.value || 100;
				currentTop.value += e.clientY - y;
				startPos.value = {
					x: e.clientX,
					y: e.clientY
				};
				updateOrigin();
				e.preventDefault();
			}
		};
		const mouseup = () => {
			isMousePressed.value = false;
			document.removeEventListener("mousemove", mousemove);
			document.removeEventListener("mouseup", mouseup);
		};
		const mousedown = (e) => {
			if (e.button == 0 && props.draggable === true && refHeader.value && refHeader.value.contains(e.target)) {
				isMousePressed.value = true;
				startPos.value = {
					x: e.clientX,
					y: e.clientY
				};
				mousemove(e);
				document.addEventListener("mousemove", mousemove);
				document.addEventListener("mouseup", mouseup);
			}
			mousedownIn.value = visible.value && refModal.value && refModal.value.contains(e.target);
		};
		return () => {
			let { draggable, width } = props;
			let maskNode = null;
			if (props.mask) maskNode = createVNode(Transition, { "name": "k-modal-fade" }, { default: () => [withDirectives(createVNode("div", { "class": "k-modal-mask" }, null), [[vShow, visible.value]])] });
			let okText = props.okText || locale.value?.k.common.ok;
			let cancelText = props.cancelText || locale.value?.k.common.cancel;
			let contentNode = slots.content?.();
			if (!contentNode) {
				const contents = [];
				props.showClose && contents.push(createVNode(Button, {
					"icon": X,
					"size": "small",
					"onClick": close,
					"class": "k-modal-close",
					"type": "text"
				}, null));
				props.title !== null && contents.push(createVNode("div", {
					"class": "k-modal-header",
					"ref": refHeader
				}, [createVNode("div", { "class": "k-modal-header-inner" }, [props.title])]));
				contents.push(createVNode("div", { "class": "k-modal-body" }, [slots.default?.()]));
				if (props.footer) {
					let footer = slots.footer?.();
					if (!footer) footer = [createVNode(Button, { "onClick": cancel }, _isSlot$3(cancelText) ? cancelText : { default: () => [cancelText] }), createVNode(Button, {
						"onClick": ok,
						"type": "primary",
						"loading": props.loading
					}, _isSlot$3(okText) ? okText : { default: () => [okText] })];
					const footerNode = footer ? createVNode("div", { "class": "k-modal-footer" }, [footer]) : null;
					contents.push(footerNode);
				}
				contentNode = createVNode("div", {
					"class": "k-modal-content",
					"tabindex": "0"
				}, [contents]);
			}
			const style = {
				width: `${width}px`,
				top: `${currentTop.value}px`,
				left: `${left.value}px`
			};
			const classes = ["k-modal", {
				"k-modal-draggable": draggable,
				"k-modal-maximized": props.maximized,
				"k-modal-centered": props.centered,
				"k-modal-has-footer": props.footer !== null
			}];
			return rendered.value ? withDirectives(createVNode("div", { "class": classes }, [maskNode, withDirectives(createVNode("div", {
				"class": "k-modal-wrap",
				"tabindex": "-1",
				"role": "dialog",
				"onClick": clickMaskToClose
			}, [createVNode(Transition, { "name": "k-modal-zoom" }, { default: () => [withDirectives(createVNode("div", {
				"class": "k-modal-inner",
				"ref": refModal,
				"style": style
			}, [contentNode, createVNode("div", { "tabindex": "0" }, null)]), [[vShow, visible.value]])] })]), [[vShow, showInner.value]])]), [[resolveDirective("transfer"), true]]) : null;
		};
	}
});
//#endregion
//#region components/modal/toast.tsx
var toast_default = /* @__PURE__ */ defineComponent({
	name: "Toast",
	props: {
		title: String,
		okText: String,
		cancelText: String,
		content: String,
		color: String,
		icon: Array,
		onOk: Function,
		onCancel: Function,
		type: {
			type: String,
			default: "info"
		}
	},
	setup(ps, { expose, emit }) {
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return injectedLocale instanceof Object && "value" in injectedLocale ? injectedLocale.value : injectedLocale;
		});
		const loading = ref(false);
		const visible = ref(false);
		const isPromise = (obj) => {
			return typeof obj === "object" && typeof obj.then === "function";
		};
		const show = () => {
			visible.value = true;
		};
		const hide = () => {
			visible.value = false;
			emit("destroy");
		};
		expose({
			show,
			hide
		});
		const ok = () => {
			let { onOk } = ps;
			let fun = onOk ? onOk() : {};
			if (isPromise(fun)) {
				loading.value = true;
				fun.then(() => {
					hide();
				}).catch(() => {});
			} else hide();
		};
		const cancel = () => {
			let { onCancel } = ps;
			typeof onCancel == "function" && onCancel();
			hide();
		};
		return () => {
			let { title, content, color, type, icon, cancelText, okText } = ps;
			let icons = {
				info: Info,
				error: CircleX,
				success: CircleCheck,
				warning: CircleAlert,
				confirm: CircleQuestionMark
			};
			let header = createVNode("div", { "class": "k-toast-header" }, [type || icon ? createVNode(Icon, {
				"class": "k-toast-icon",
				"type": icon || icons[type],
				"color": color
			}, null) : null, createVNode("div", { "class": "k-toast-title" }, [title])]);
			let body = createVNode("div", { "class": "k-toast-content" }, [content]);
			let footerNode = [createVNode(Button, {
				"type": "primary",
				"loading": loading.value,
				"onClick": ok
			}, { default: () => [okText || locale.value?.k.common.ok] })];
			if (type == "confirm") footerNode.unshift(createVNode(Button, { "onClick": cancel }, { default: () => [createTextVNode(" "), cancelText || locale.value?.k.common.cancel] }));
			let footer = createVNode("div", { "class": "k-toast-footer" }, [footerNode]);
			return createVNode(Modal, {
				"class": ["k-modal k-toast", { [`k-toast-${type}`]: icons[type] != void 0 }],
				"modelValue": visible.value,
				"onUpdate:modelValue": ($event) => visible.value = $event,
				"maskClosable": false
			}, { content: () => [
				header,
				body,
				footer
			] });
		};
	}
});
//#endregion
//#region components/modal/index.ts
var modalList = [];
recordMousePoint();
var showModal = (props = {}) => {
	const context = getCurrentInstance();
	const container = document.createElement("div");
	document.body.appendChild(container);
	const vm = createVNode(toast_default, { ...props });
	vm.appContext = context?.appContext || getAppContext()?.appContext || null;
	render(vm, container);
	let instance = vm.component?.exposed;
	if (instance) {
		instance.destroy = () => {
			instance.hide();
			modalList = modalList.filter((item) => item !== instance);
			setTimeout(() => {
				render(null, container);
				if (container.parentNode) container.parentNode.removeChild(container);
			}, 100);
		};
		instance.show();
		modalList.push(instance);
	}
	return instance;
};
var modal = {
	show(props) {
		return showModal(props);
	},
	destroyAll() {
		modalList.forEach((toast) => {
			toast.destroy();
		});
	},
	info(props) {
		return showModal({
			type: "info",
			...props
		});
	},
	success(props) {
		return showModal({
			type: "success",
			...props
		});
	},
	warning(props) {
		return showModal({
			type: "warning",
			...props
		});
	},
	error(props) {
		return showModal({
			type: "error",
			...props
		});
	},
	confirm(props) {
		return showModal({
			type: "confirm",
			...props
		});
	}
};
var modal_default = Modal;
//#endregion
//#region components/notice/index.ts
var noticeInstance = null;
var notice = {
	name: "notice",
	open(options) {
		if (!noticeInstance) noticeInstance = createInstance("notice");
		const props = Object.assign(options, { noticeType: "notice" });
		noticeInstance?.show(props);
	},
	destroy() {
		if (noticeInstance) {
			noticeInstance.clean();
			noticeInstance.destroy();
			noticeInstance = null;
		}
	},
	info(options) {
		return this.open({
			...options,
			type: "info"
		});
	},
	success(options) {
		return this.open({
			...options,
			type: "success"
		});
	},
	warning(options) {
		return this.open({
			...options,
			type: "warning"
		});
	},
	error(options) {
		return this.open({
			...options,
			type: "error"
		});
	}
};
var Page = /* @__PURE__ */ defineComponent({
	name: "Page",
	props: {
		disabled: Boolean,
		showSizer: Boolean,
		showTotal: {
			type: Boolean,
			default: true
		},
		showElevator: Boolean,
		theme: {
			type: String,
			default: "light"
		},
		sizeData: {
			type: Array,
			default: () => [
				10,
				15,
				20,
				30,
				40
			]
		},
		size: {
			default: "default",
			type: String
		},
		total: {
			default: 0,
			type: Number
		},
		pageSize: {
			default: 10,
			type: Number
		},
		page: {
			default: 1,
			type: Number
		},
		onChange: { type: Function }
	},
	setup(props, { emit }) {
		const nextPageGroup = ref(false);
		const prevPageGroup = ref(false);
		const pageCount = ref(Math.ceil(props.total / props.pageSize) || 1);
		const defaultPage = ref(props.page);
		const defaultPageSize = ref(props.pageSize);
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return injectedLocale instanceof Object && "value" in injectedLocale ? injectedLocale.value : injectedLocale;
		});
		watch(() => props.pageSize, (v) => {
			defaultPageSize.value = v;
			resetPage();
		});
		watch(() => props.total, () => {
			resetPage();
		});
		watch(() => props.page, (v) => {
			defaultPage.value = v;
			resetPage();
		});
		const resetPage = () => {
			pageCount.value = Math.ceil(props.total / defaultPageSize.value) || 1;
			if (defaultPage.value > pageCount.value) defaultPage.value = pageCount.value;
		};
		const renderPage = () => {
			const groupCount = 7, page = Number(defaultPage.value), pCount = Number(pageCount.value);
			let showPrevMore = false;
			let showNextMore = false;
			if (pCount > groupCount) {
				if (page > groupCount - 3) showPrevMore = true;
				if (page < pCount - 3) showNextMore = true;
			}
			const array = [];
			if (showPrevMore && !showNextMore) {
				const startPage = pCount - (groupCount - 2);
				for (let i = startPage; i < pCount; i++) array.push(i);
			} else if (!showPrevMore && showNextMore) for (let i = 2; i < groupCount; i++) array.push(i);
			else if (showPrevMore && showNextMore) {
				const offset = Math.floor(groupCount / 2) - 1;
				for (let i = page - offset; i <= page + offset; i++) array.push(i);
			} else for (let i = 2; i < pCount; i++) array.push(i);
			let child = array.map((p, i) => {
				return createVNode("li", {
					class: ["k-pager-item", { "k-pager-item-active": page == p }],
					key: i,
					onClick: (e) => toPage(e, p)
				}, [createVNode("span", null, [p])]);
			});
			if (showPrevMore) {
				const moreNode = createVNode("li", {
					class: "k-pager-item k-pager-more",
					onMouseenter: () => prevPageGroup.value = true,
					onMouseleave: () => prevPageGroup.value = false,
					onClick: (e) => toPage(e, defaultPage.value - 5)
				}, [createVNode(Icon, { "type": prevPageGroup.value ? ChevronsLeft : Ellipsis }, null)]);
				child.unshift(moreNode);
			}
			if (showNextMore) {
				const moreNode = createVNode("li", {
					class: "k-pager-item k-pager-more",
					onMouseenter: () => nextPageGroup.value = true,
					onMouseleave: () => nextPageGroup.value = false,
					onClick: (e) => toPage(e, defaultPage.value + 5)
				}, [createVNode(Icon, { "type": nextPageGroup.value ? ChevronsRight : Ellipsis }, null)]);
				child.push(moreNode);
			}
			return child;
		};
		const prePage = () => {
			if (props.disabled) return;
			if (defaultPage.value > 1) {
				defaultPage.value--;
				emit("update:page", defaultPage.value);
				emit("change", defaultPage.value, defaultPageSize.value);
			}
		};
		const nextPage = () => {
			if (props.disabled) return;
			if (defaultPage.value < pageCount.value) {
				defaultPage.value++;
				emit("update:page", defaultPage.value);
				emit("change", defaultPage.value, defaultPageSize.value);
			}
		};
		const toPage = (e, page) => {
			e.preventDefault();
			if (props.disabled) return;
			if (page == defaultPage.value) return;
			if (page <= 1) {
				page = 1;
				prevPageGroup.value = false;
			}
			if (page >= pageCount.value) {
				nextPageGroup.value = false;
				page = pageCount.value;
			}
			defaultPage.value = page;
			emit("update:page", page);
			emit("change", defaultPage.value, defaultPageSize.value);
		};
		const changeSize = (value) => {
			defaultPageSize.value = value;
			pageCount.value = Math.ceil(props.total / defaultPageSize.value) || 1;
			if (defaultPage.value > pageCount.value) {
				defaultPage.value = pageCount.value;
				emit("update:page", defaultPage.value);
			}
			emit("change", defaultPage.value, defaultPageSize.value);
		};
		const renderFirst = () => {
			if (pageCount.value > 0) return createVNode("li", {
				"class": ["k-pager-item", { "k-pager-item-active": defaultPage.value == 1 }],
				"onClick": (e) => toPage(e, 1)
			}, [createVNode("span", null, [createTextVNode("1")])]);
			return null;
		};
		const renderLast = () => {
			let pCount = pageCount.value;
			if (pCount > 1) return createVNode("li", {
				"class": ["k-pager-item", { "k-pager-item-active": defaultPage.value == pCount }],
				"onClick": (e) => toPage(e, pCount)
			}, [createVNode("span", null, [pCount])]);
			return null;
		};
		const renderSize = () => {
			let prop = {
				value: defaultPageSize.value,
				size: props.size,
				clearable: false,
				theme: props.theme,
				options: props.sizeData.map((s) => {
					return {
						value: s,
						label: `${s}${locale.value?.k.page.pageSize}`
					};
				}),
				disabled: props.disabled,
				onChange: changeSize
			};
			return props.showSizer ? createVNode("div", { "class": "k-page-sizer" }, [createVNode(Select, prop, null)]) : null;
		};
		const renderElevator = () => {
			let { size } = props;
			let _props = {
				class: "k-page-options-elevator",
				size,
				theme: props.theme,
				disabled: props.disabled,
				clearable: false,
				onChange: (page) => {
					if (page == void 0) return;
					let pCount = pageCount.value;
					if (page > pCount) page = pCount;
					if (page < 1) page = 1;
					if ((page >= 1 || page <= pCount) && defaultPage.value != page) {
						defaultPage.value = page;
						emit("update:page", page);
						emit("change", page, defaultPageSize.value);
					}
				}
			};
			return props.showElevator ? createVNode("div", { "class": "k-page-options" }, [
				createVNode("span", null, [locale.value?.k.page.goto]),
				createVNode(InputNumber, _props, null),
				createVNode("span", null, [locale.value?.k.page.page])
			]) : null;
		};
		return () => {
			const classes = ["k-page", {
				["k-page-sm"]: props.size == "small",
				"k-page-light": props.theme == "light",
				"k-page-disabled": props.disabled
			}], preNode = createVNode("li", {
				"class": ["k-pager-item k-pager-prev", { "k-pager-item-disabled": defaultPage.value == 1 }],
				"onClick": prePage
			}, [createVNode(Icon, { "type": ChevronUp }, null)]), nextNode = createVNode("li", {
				"class": ["k-pager-item k-pager-next", { "k-pager-item-disabled": defaultPage.value == pageCount.value }],
				"onClick": nextPage
			}, [createVNode(Icon, { "type": ChevronUp }, null)]), totalNode = props.showTotal ? createVNode("div", { "class": "k-page-number" }, [createVNode("span", null, [
				locale.value?.k.page.total,
				createTextVNode(" "),
				props.total,
				createTextVNode(" "),
				locale.value?.k.page.items
			])]) : null, pagerNode = renderPage(), sizeNode = renderSize(), elevatorNode = renderElevator(), firstNode = renderFirst(), lastNode = renderLast();
			return createVNode("div", { "class": classes }, [
				totalNode,
				createVNode("ul", { "class": "k-pager" }, [[
					preNode,
					firstNode,
					pagerNode,
					lastNode,
					nextNode
				]]),
				[sizeNode, elevatorNode]
			]);
		};
	}
});
var Poptip = /* @__PURE__ */ defineComponent({
	name: "Poptip",
	directives: { transfer },
	props: {
		dark: Boolean,
		show: Boolean,
		title: [
			String,
			Number,
			Object,
			Array
		],
		content: String,
		width: [Number, String],
		trigger: {
			type: String,
			default: "hover"
		},
		placement: {
			type: String,
			default: "top"
		},
		onClose: { type: Function }
	},
	setup(props, { slots, attrs, emit }) {
		const rendered = ref(props.show);
		const visible = ref(props.show);
		const refPopper = ref();
		const refSelection = ref();
		const left = ref(0);
		const top = ref(0);
		const currentPlacement = ref(props.placement);
		const transOrigin = ref("bottom");
		const hideTimer = ref();
		const showTimer = ref();
		const updatePosition = () => {
			nextTick(() => {
				setPlacement({
					refSelection,
					refPopper,
					currentPlacement,
					transOrigin,
					top,
					left
				});
			});
		};
		onMounted(() => {
			updatePosition();
			window.addEventListener("resize", updatePosition);
		});
		onUnmounted(() => {
			document.removeEventListener("click", outsideClick);
			window.removeEventListener("resize", updatePosition);
		});
		watch(() => props.show, (nv) => {
			visible.value = nv;
		});
		watch(() => props.title, () => {
			if (visible.value) updatePosition();
		});
		const updateShow = (value) => {
			visible.value = value;
			emit("update:show", value);
			if (value == false) emit("close");
		};
		const outsideClick = (e) => {
			const ctx = refSelection.value?.$el || refSelection.value;
			if (refPopper.value && !refPopper.value.contains(e.target) && ctx && !ctx.contains(e.target)) updateShow(false);
		};
		const show = () => {
			if (!rendered.value) {
				rendered.value = true;
				document.addEventListener("click", outsideClick);
				nextTick(() => {
					updateShow(true);
					updatePosition();
				});
			} else {
				clearTimeout(showTimer.value);
				updateShow(true);
				updatePosition();
			}
		};
		const hide = () => {
			hideTimer.value = setTimeout(() => {
				if (!props.show) updateShow(false);
			}, 300);
		};
		return () => {
			const title = slots.title?.() || props.title;
			const content = slots.content?.() || props.content;
			const preCls = "poptip";
			const cls = [`k-${preCls}`, {
				[`k-${preCls}-has-arrow`]: true,
				[`k-${preCls}-dark`]: props.dark
			}];
			const wpProps = {
				ref: refSelection,
				onMouseleave: hide
			};
			if (props.trigger === "click") wpProps.onClick = show;
			else if (props.trigger === "hover") wpProps.onMouseenter = show;
			else if (props.trigger === "focus") {
				wpProps.onFocus = show;
				wpProps.onBlur = hide;
			}
			const children = getChildren(slots.default?.());
			const nodes = children?.map((node) => {
				let pp = { ...attrs };
				if (children.length == 1) pp = {
					...pp,
					...wpProps
				};
				return cloneVNode(node, pp, true, true);
			});
			const nodeWrapper = nodes.length > 1 ? createVNode("span", wpProps, [...nodes]) : nodes[0];
			const styles = {
				left: `${left.value}px`,
				top: `${top.value}px`,
				transformOrigin: transOrigin.value
			};
			const childNodes = [nodeWrapper];
			const _props = {
				"k-placement": currentPlacement.value,
				style: styles,
				ref: refPopper,
				onMouseenter: () => {
					clearTimeout(hideTimer.value);
					updateShow(true);
				},
				onMouseleave: () => {
					showTimer.value = setTimeout(() => {
						if (!props.show) updateShow(false);
					}, 300);
				}
			};
			if (rendered.value) childNodes.push(createVNode(Transition, { "name": `k-${preCls}` }, { default: () => [withDirectives(createVNode("div", mergeProps({ "class": cls }, _props), [createVNode("div", { "class": `k-${preCls}-content` }, [
				title ? createVNode("div", { "class": `k-${preCls}-title` }, [title]) : null,
				createVNode("div", { "class": `k-${preCls}-body` }, [content]),
				createVNode("div", { "class": `k-${preCls}-arrow` }, [createVNode("svg", {
					"style": { fill: "currentcolor" },
					"viewBox": "0 0 24 8"
				}, [createVNode("path", {
					"id": "ot",
					"d": "m24,0.97087l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
				}, null), createVNode("path", {
					"stroke": "currentcolor",
					"id": "in",
					"d": "m24,0l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
				}, null)])])
			])]), [[resolveDirective("transfer"), true], [vShow, visible.value]])] }));
			return childNodes;
		};
	}
});
var Popconfirm = /* @__PURE__ */ defineComponent({
	name: "Popconfirm",
	directives: { transfer },
	props: {
		dark: Boolean,
		show: Boolean,
		title: [
			String,
			Number,
			Object,
			Array
		],
		width: [Number, String],
		okText: { type: String },
		cancelText: { type: String },
		placement: {
			type: String,
			default: "top"
		},
		onCancel: { type: Function },
		onOk: { type: Function }
	},
	setup(props, { slots, attrs, emit }) {
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return injectedLocale instanceof Object && "value" in injectedLocale ? injectedLocale.value : injectedLocale;
		});
		const rendered = ref(false);
		const visible = ref(false);
		const refPopper = ref();
		const refSelection = ref();
		const left = ref(0);
		const top = ref(0);
		const currentPlacement = ref(props.placement);
		const transOrigin = ref("bottom");
		const hideTimer = ref();
		const showTimer = ref();
		const updatePosition = () => {
			nextTick(() => {
				setPlacement({
					refSelection,
					refPopper,
					currentPlacement,
					transOrigin,
					top,
					left
				});
			});
		};
		onMounted(() => {
			updatePosition();
			window.addEventListener("resize", updatePosition);
		});
		onUnmounted(() => {
			document.removeEventListener("click", outsideClick);
			window.removeEventListener("resize", updatePosition);
		});
		watch(() => props.show, (nv) => {
			visible.value = nv || false;
		});
		watch(() => props.title, () => {
			if (visible.value) updatePosition();
		});
		const updateShow = (value) => {
			visible.value = value;
			emit("update:show", value);
		};
		const outsideClick = (e) => {
			const ctx = refSelection.value?.$el || refSelection.value;
			if (refPopper.value && !refPopper.value.contains(e.target) && ctx && !ctx.contains(e.target)) updateShow(false);
		};
		const mouseEnter = () => {
			if (!rendered.value) {
				rendered.value = true;
				document.addEventListener("click", outsideClick);
				nextTick(() => {
					updateShow(true);
					updatePosition();
				});
			} else {
				clearTimeout(showTimer.value);
				updateShow(true);
				updatePosition();
			}
		};
		const ok = () => {
			updateShow(false);
			emit("ok");
		};
		const cancel = () => {
			updateShow(false);
			emit("cancel");
		};
		return () => {
			const title = slots.title?.() || props.title;
			const preCls = "popconfirm";
			const cls = [`k-${preCls}`, {
				[`k-${preCls}-has-arrow`]: true,
				[`k-${preCls}-dark`]: props.dark
			}];
			const wpProps = {
				ref: refSelection,
				onClick: mouseEnter
			};
			const children = getChildren(slots.default?.());
			const nodes = children?.map((node) => {
				let pp = { ...attrs };
				if (children.length == 1) pp = {
					...pp,
					...wpProps
				};
				return cloneVNode(node, pp, true);
			});
			const nodeWrapper = nodes.length > 1 ? createVNode("span", wpProps, [...nodes]) : nodes[0];
			const styles = {
				left: `${left.value}px`,
				top: `${top.value}px`,
				transformOrigin: transOrigin.value
			};
			const childNodes = [nodeWrapper];
			const _props = {
				"k-placement": currentPlacement.value,
				style: styles,
				ref: refPopper,
				onMouseenter: () => {
					clearTimeout(hideTimer.value);
					updateShow(true);
				},
				onMouseleave: () => {
					showTimer.value = setTimeout(() => {
						if (!props.show) updateShow(false);
					}, 300);
				}
			};
			if (rendered.value) childNodes.push(createVNode(Transition, { "name": `k-${preCls}` }, { default: () => [withDirectives(createVNode("div", mergeProps({ "class": cls }, _props), [createVNode("div", { "class": `k-${preCls}-content` }, [
				createVNode("div", { "class": `k-${preCls}-body` }, [createVNode(Icon, { "type": CircleQuestionMark }, null), createVNode("div", { "class": `k-${preCls}-title` }, [title])]),
				createVNode("div", { "class": `k-${preCls}-footer` }, [createVNode(Button, {
					"size": "small",
					"onClick": cancel
				}, { default: () => [props.cancelText || locale.value?.k.common.cancel] }), createVNode(Button, {
					"size": "small",
					"type": "primary",
					"onClick": ok
				}, { default: () => [props.okText || locale.value?.k.common.ok] })]),
				createVNode("div", { "class": `k-${preCls}-arrow` }, [createVNode("svg", {
					"style": { fill: "currentcolor" },
					"viewBox": "0 0 24 8"
				}, [createVNode("path", {
					"d": "M24,0.97087 L24,1.97087 C20,1.97087 18.5,2.97087 16.5,4.97087 C14.5,6.97087 14,7.97087 12,7.97087 C10,7.97087 9.5,6.97087 7.5,4.97087 C5.5,2.97087 4,1.97087 0,1.97087 L0,0.97087 L24,0.97087 Z",
					"id": "ot"
				}, null), createVNode("path", {
					"d": "M24,0 L24,1 C20.032328,1 18.1576594,1.985435 16.1576594,3.985435 C14.1576594,5.985435 13.3847825,7 12,7 C10.6152175,7 9.81306952,5.985435 7.81306952,3.985435 C5.81306952,1.985435 4.0114261,1 0,1 L0,0 L24,0 Z",
					"id": "in",
					"stroke": "currentcolor"
				}, null)])])
			])]), [[resolveDirective("transfer"), true], [vShow, visible.value]])] }));
			return childNodes;
		};
	}
});
var Progress = /* @__PURE__ */ defineComponent({
	name: "Progress",
	props: {
		percent: {
			type: Number,
			default: 0
		},
		strokeWidth: {
			type: Number,
			default: 6
		},
		color: String,
		format: Function,
		width: Number,
		strokeHeight: Number,
		gapDegree: {
			type: Number,
			default: 75
		},
		strokeLinecap: {
			type: String,
			default: "round"
		},
		size: {
			type: String,
			default: "default"
		},
		status: {
			type: String,
			default: "normal"
		},
		type: {
			type: String,
			default: "line"
		},
		showInfo: {
			type: Boolean,
			default: true
		}
	},
	setup(props, { slots }) {
		const currentPercent = ref(props.percent);
		watch(() => props.percent, (nv) => {
			currentPercent.value = nv;
		});
		const renderTip = (status, type) => {
			if (!props.showInfo) return null;
			let text = `${currentPercent.value}%`;
			if (props.format) text = props.format(currentPercent.value);
			else if (type === "line") {
				if (currentPercent.value === 100) text = createVNode(Icon, { "type": CircleCheck }, null);
				if (status === "exception") text = createVNode(Icon, { "type": CircleX }, null);
			} else if (type === "circle" || type === "dashboard") if (slots.format) text = slots.format();
			else {
				if (currentPercent.value === 100) text = createVNode(Icon, { "type": Check }, null);
				if (status === "exception") text = createVNode(Icon, { "type": X }, null);
			}
			return createVNode("div", { "class": "k-progress-text" }, [text]);
		};
		const renderCircle = (percent, strokeColor, dashboard) => {
			const { strokeWidth, gapDegree, strokeLinecap } = props;
			const radius = 50 - strokeWidth / 2;
			const beginX = 0;
			const beginY = radius;
			const endX = 0;
			const endY = 2 * radius;
			let gap = Math.max(0, gapDegree);
			gap = Math.min(259, gap);
			const d = `M 50,50 
               m ${beginX}, ${beginY} 
               a ${radius},${radius} 0 1 1 ${endX}, ${-endY} 
               a ${radius},${radius} 0 1 1 ${-endX},${endY}`, len = Math.PI * 2 * radius;
			const style = {
				strokeDasharray: `${percent / 100 * (len - (dashboard ? gap : 0))}px ${len}px`,
				transition: `stroke-dasharray .3s ease 0s,opacity 0.3s ease 0s`,
				strokeDashoffset: dashboard ? -gap / 2 : 0,
				stroke: strokeColor,
				strokeLinecap,
				opacity: percent === 0 ? 0 : 1
			};
			const ds = {};
			if (dashboard) {
				ds.strokeDasharray = `${len - gap}px ${len}px`;
				ds.strokeDashoffset = -gap / 2;
				ds.strokeLinecap = strokeLinecap;
			}
			const innerProps = {
				d,
				fill: "none",
				style: ds,
				class: "k-progress-inner"
			};
			const bgProps = {
				d,
				fill: "none",
				style,
				class: "k-progress-bg"
			};
			return createVNode("svg", { "viewBox": `0 0 100 100` }, [createVNode("path", mergeProps({ "stroke-width": strokeWidth }, innerProps), null), createVNode("path", mergeProps({ "stroke-width": strokeWidth }, bgProps), null)]);
		};
		const renderBar = () => {
			const { type, color, strokeHeight } = props;
			if (type === "line") {
				const style = {
					width: currentPercent.value + "%",
					backgroundColor: color || void 0
				};
				if (strokeHeight) style.height = strokeHeight + "px";
				return createVNode("div", { "class": "k-progress-inner" }, [createVNode("div", {
					class: "k-progress-bg",
					style
				}, null)]);
			} else if (type === "circle") return renderCircle(currentPercent.value, color, false);
			else if (type === "dashboard") return renderCircle(currentPercent.value, color, true);
			return null;
		};
		return () => {
			let { type, status, size, width, showInfo } = props;
			if (currentPercent.value === 100 && status !== "exception") status = "success";
			const classes = [
				"k-progress",
				`k-progress-${type}`,
				`k-progress-${status}`,
				{ "k-progress-sm": type === "line" && size === "small" },
				{ "k-progress-hide-info": !showInfo }
			];
			const tipNode = renderTip(status, type);
			const bar = renderBar();
			const style = {};
			if (type !== "line" && width !== void 0 && width > 10) {
				style.width = width + "px";
				style.height = width + "px";
			}
			return createVNode("div", {
				class: classes,
				style
			}, [bar, tipNode]);
		};
	}
});
var Radio = /* @__PURE__ */ defineComponent({
	name: "Radio",
	props: {
		modelValue: {
			type: [
				Boolean,
				String,
				Number
			],
			default: false
		},
		value: { type: [
			String,
			Number,
			Boolean
		] },
		label: { type: String },
		checked: Boolean,
		disabled: Boolean,
		theme: {
			type: String,
			default: "light"
		},
		size: {
			type: String,
			default: "default"
		},
		onChange: Function
	},
	setup(props, { slots, emit }) {
		const isChecked = ref(props.modelValue || props.checked);
		watch(() => props.modelValue, (v) => {
			isChecked.value = v;
		});
		watch(() => props.checked, (v) => {
			isChecked.value = v;
		});
		const emitValue = (checked) => {
			isChecked.value = checked;
			emit("change", {
				checked,
				value: props.value,
				label: props.label || slots.default?.()
			});
			emit("update:modelValue", checked);
			emit("update:checked", checked);
		};
		const onChange = (e) => {
			if (props.disabled || isChecked.value) return;
			e.stopPropagation();
			e.preventDefault();
			const checked = e.target.checked;
			emitValue(checked);
		};
		const triggerCheck = (e) => {
			if (e.code == "Space") {
				e.preventDefault();
				e.stopPropagation();
				if (props.disabled || isChecked.value) return;
				emitValue(!isChecked.value);
			}
		};
		return () => {
			const classes = ["k-radio", {
				["k-radio-light"]: props.theme == "light",
				["k-radio-disabled"]: props.disabled,
				["k-radio-checked"]: isChecked.value,
				["k-radio-lg"]: props.size === "large",
				["k-radio-sm"]: props.size === "small"
			}];
			const labelNode = props.label || slots.default?.();
			return createVNode("label", {
				"class": classes,
				"tabindex": props.disabled ? void 0 : 0,
				"onKeydown": triggerCheck
			}, [createVNode("span", { "class": "k-radio-symbol" }, [createVNode("input", {
				"type": "radio",
				"tabindex": "-1",
				"class": "k-radio-input",
				"disabled": props.disabled,
				"onChange": onChange,
				"checked": isChecked.value
			}, null)]), labelNode ? createVNode("span", { "class": "k-radio-label" }, [labelNode]) : null]);
		};
	}
});
//#endregion
//#region components/radio/radio-button.tsx
function _isSlot$2(s) {
	return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var RadioButton = /* @__PURE__ */ defineComponent({
	name: "RadioButton",
	props: {
		modelValue: {
			type: [Boolean],
			default: false
		},
		label: { type: String },
		value: { type: [String, Number] },
		theme: String,
		disabled: Boolean,
		checked: Boolean,
		icon: Array,
		size: {
			type: String,
			default: "default"
		},
		shape: { type: String }
	},
	setup(props, { slots, emit, attrs }) {
		const isChecked = ref(props.modelValue || props.checked);
		watch(() => props.modelValue, (v) => {
			isChecked.value = v;
		});
		watch(() => props.checked, (v) => {
			isChecked.value = v;
		});
		const labelText = props.label || slots.default?.();
		const handleClick = (e) => {
			if (props.disabled || isChecked.value) return;
			const checked = !isChecked.value;
			isChecked.value = checked;
			emit("change", {
				checked,
				value: props.value,
				label: labelText
			});
			emit("update:modelValue", checked);
			e.preventDefault();
		};
		return () => {
			return createVNode(Button, {
				...props,
				disabled: props.disabled,
				size: props.size,
				theme: props.theme,
				shape: props.shape,
				type: isChecked.value ? "primary" : "default",
				...attrs,
				onClick: handleClick
			}, _isSlot$2(labelText) ? labelText : { default: () => [labelText] });
		};
	}
});
var RadioGroup = /* @__PURE__ */ defineComponent({
	name: "RadioGroup",
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		disabled: Boolean,
		direction: {
			type: String,
			default: "horizontal"
		},
		size: { type: String },
		theme: { type: String },
		shape: String,
		options: Array,
		type: String,
		onChange: Function
	},
	setup(props, { slots, emit }) {
		const currentValue = ref(props.modelValue);
		const onChange = ({ value }) => {
			currentValue.value = value;
			emit("update:modelValue", value);
			emit("change", value);
		};
		watch(() => props.modelValue, (val) => {
			currentValue.value = val;
		});
		const optionsData = computed(() => {
			let { options } = props;
			if (!options) {
				options = [];
				getChildren(slots.default?.()).forEach((child) => {
					let { label, value, disabled, icon } = child.props;
					options?.push({
						value,
						icon,
						disabled,
						label: label || child.children?.default()[0].children || value
					});
				});
			}
			return options;
		});
		return () => {
			let options = optionsData.value;
			let nodes = [];
			const Component = props.type === "button" ? RadioButton : Radio;
			options.forEach((option) => nodes.push(createVNode(Component, {
				"key": option.label,
				"label": option.label,
				"value": option.value,
				"onChange": onChange,
				"checked": currentValue.value === option.value,
				"disabled": props.disabled || option.disabled,
				"icon": option.icon,
				"size": props.size,
				"theme": props.theme,
				"shape": props.shape
			}, null)));
			return createVNode("div", { "class": ["k-radio-group", {
				"k-radio-button-group": props.type === "button",
				"k-radio-circle": props.shape === "circle",
				"k-radio-group-light": props.theme === "light" && props.type === "button",
				"k-radio-group-card": props.theme === "card" && props.type === "button",
				"k-radio-group-vertical": props.direction === "vertical"
			}] }, [nodes]);
		};
	}
});
//#endregion
//#region components/rate/star.tsx
function _isSlot$1(s) {
	return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var star_default = /* @__PURE__ */ defineComponent({
	name: "Star",
	props: {
		character: [String, Function],
		tooltips: String,
		percent: Number,
		full: Boolean,
		half: Boolean,
		allowHalf: Boolean,
		disabled: Boolean,
		icon: [
			String,
			Function,
			Array
		],
		size: [Number, String],
		index: {
			type: Number,
			required: true
		},
		symbolReverseFill: Boolean,
		strokeWidth: {
			type: Number,
			default: 1
		}
	},
	setup(props, { emit }) {
		const onUpdate = (e, t) => {
			if (props.disabled) return;
			const target = e.currentTarget;
			const { clientX } = e;
			let percent = 0;
			if (target) {
				const { left, width } = target.getBoundingClientRect();
				percent = (clientX - left) / width;
			}
			emit("update", t, props.index, percent);
		};
		return () => {
			const { full, half, character, tooltips, icon, percent, disabled, size, index } = props;
			const starClasses = {
				class: ["k-star", {
					"k-star-full": full,
					"k-star-half": half
				}],
				onClick: (e) => onUpdate(e, "C"),
				onMousemove: (e) => onUpdate(e, "M")
			};
			const iconType = typeof icon === "function" ? icon(index) : icon;
			const reverse = props.symbolReverseFill || !iconType;
			const characterNode = (typeof character === "function" ? character(index) : character) || createVNode(Icon, {
				"type": iconType || Star,
				"size": size,
				"reverseFill": reverse,
				"strokeWidth": props.strokeWidth
			}, null);
			const node = createVNode("span", starClasses, [createVNode("span", {
				class: ["k-star-front"],
				style: { width: disabled && percent !== void 0 ? `${percent}%` : void 0 }
			}, [characterNode]), createVNode("span", { "class": "k-star-back" }, [characterNode])]);
			return tooltips ? createVNode(Tooltip, { "title": tooltips }, _isSlot$1(node) ? node : { default: () => [node] }) : node;
		};
	}
});
var Rate = /* @__PURE__ */ defineComponent({
	name: "Rate",
	props: {
		modelValue: {
			type: Number,
			default: 0
		},
		allowClear: {
			type: Boolean,
			default: true
		},
		allowHalf: Boolean,
		color: String,
		size: [Number, String],
		showScore: Boolean,
		tooltips: Array,
		disabled: Boolean,
		count: {
			type: Number,
			default: 5
		},
		character: [String, Function],
		icon: [Array, Function],
		symbolReverseFill: Boolean,
		strokeWidth: {
			type: Number,
			default: 1
		},
		onChange: { type: Function }
	},
	setup(props, { emit }) {
		const initValue = ref(props.modelValue);
		const tempValue = ref(null);
		const cleared = ref(false);
		watch(() => props.modelValue, (v) => {
			initValue.value = v;
		});
		const update = (t, index, percent) => {
			if (t === "M") {
				if (cleared.value) return;
				if (props.allowHalf) tempValue.value = index - (percent < .5 ? .5 : 0);
				else tempValue.value = index;
			} else {
				let value = index - (props.allowHalf ? percent < .5 ? .5 : 0 : 0);
				value = parseFloat(value.toFixed(2));
				const nextValue = value === initValue.value && props.allowClear ? 0 : value;
				initValue.value = nextValue;
				if (nextValue === 0) {
					cleared.value = true;
					tempValue.value = null;
				}
				emit("update:modelValue", initValue.value);
				emit("change", initValue.value);
			}
		};
		const mouseLeave = () => {
			tempValue.value = null;
			cleared.value = false;
		};
		return () => {
			const tpValue = tempValue.value !== null ? tempValue.value : initValue.value;
			let { count, allowHalf, character, disabled, tooltips = [], icon, showScore, color, size } = props;
			if (typeof size === "string") size = {
				small: 20,
				middle: 24,
				large: 32,
				default: 24
			}[size];
			const stars = [];
			let actualCount = count;
			if (isNaN(Number(count)) || count <= 0) actualCount = 5;
			if (actualCount > 15) actualCount = 15;
			for (let i = 1; i <= actualCount; i++) {
				const mod = i - tpValue;
				const percent = (1 - (i - tpValue)) * 100;
				const sp = {
					key: i,
					allowHalf,
					full: tpValue >= i,
					half: mod > 0 && mod < 1,
					icon,
					character,
					size,
					disabled,
					percent: percent < 100 ? percent : void 0,
					tooltips: tooltips[i - 1],
					index: i,
					symbolReverseFill: props.symbolReverseFill,
					onUpdate: update
				};
				stars.push(createVNode(star_default, sp, null));
			}
			const containerStyle = {
				fontSize: size + "px",
				color: color || void 0
			};
			return createVNode("div", {
				class: ["k-rate", { "k-rate-disabled": disabled }],
				onMouseleave: mouseLeave,
				style: containerStyle
			}, [stars, showScore ? createVNode("span", { "class": "k-rate-score" }, [initValue.value]) : null]);
		};
	}
});
//#endregion
//#region components/config/index.ts
var ConfigProvider = defineComponent({
	name: "ConfigProvider",
	props: { locale: {
		type: Object,
		default: () => null
	} },
	setup(props, { slots }) {
		const locale = ref(props.locale);
		provide("locale", locale);
		const instance = getCurrentInstance();
		if (instance && instance.appContext) instance.appContext.provides["locale"] = locale;
		setAppContext(getCurrentInstance());
		watch(() => props.locale, (newVal) => {
			locale.value = newVal;
		}, { immediate: true });
		return () => {
			return slots.default?.();
		};
	}
});
//#endregion
//#region components/skeleton/types.ts
var skeletonProps = {
	animated: Boolean,
	radius: Number,
	loading: Boolean,
	block: Boolean,
	width: Number,
	delay: {
		type: Number,
		default: 500
	},
	shape: String,
	size: [
		Number,
		String,
		Array
	],
	title: {
		type: Number,
		default: 35
	},
	rows: {
		type: Number,
		default: 3
	},
	avatar: { type: [Boolean, Object] }
};
//#endregion
//#region components/skeleton/skeleton.tsx
var Skeleton = /* @__PURE__ */ defineComponent({
	name: "Skeleton",
	props: skeletonProps,
	setup(ps, { slots }) {
		const show = ref(ps.loading);
		const timer = ref();
		watch(() => ps.loading, (v) => {
			if (v) show.value = v;
			else {
				clearTimeout(timer.value);
				timer.value = setTimeout(() => {
					show.value = v;
				}, ps.delay);
			}
		});
		const renderAvatar = () => {
			const { avatar } = ps;
			if (!avatar) return null;
			let size = "large", shape = "circle";
			if (typeof avatar == "object") {
				if (avatar.size) size = avatar.size;
				if (avatar.shape) shape = avatar.shape;
			}
			return createVNode("div", { "class": "k-skeleton-header" }, [createVNode("span", { class: ["k-skeleton-avatar", {
				"k-skeleton-avatar-lg": size == "large",
				"k-skeleton-avatar-sm": size == "small",
				"k-skeleton-avatar-circle": shape == "circle",
				"k-skeleton-avatar-square": shape == "square"
			}] }, null)]);
		};
		const renderContent = () => {
			const { title, rows } = ps;
			let lines = new Array(rows).fill("");
			return createVNode("div", { "class": "k-skeleton-content" }, [title > 0 ? createVNode("div", {
				"class": "k-skeleton-title",
				"style": `width:${title}%`
			}, null) : null, createVNode("ul", { "class": "k-skeleton-paragraph" }, [lines.map(() => createVNode("li", null, null))])]);
		};
		return () => {
			let { animated } = ps;
			let props = { class: ["k-skeleton", { "k-skeleton-animated": animated }] };
			let nodeAvatar = renderAvatar();
			let nodeContent = renderContent();
			let child = slots.default?.();
			return createVNode("div", props, [child && !show.value ? child : [nodeAvatar, nodeContent]]);
		};
	}
});
//#endregion
//#region components/skeleton/skeleton-avatar.tsx
var SkeletonAvatar = /* @__PURE__ */ defineComponent({
	name: "SkeletonAvatar",
	props: skeletonProps,
	setup(props, { slots }) {
		const show = ref(props.loading);
		const timer = ref();
		watch(() => props.loading, (v) => {
			if (v) show.value = v;
			else {
				clearTimeout(timer.value);
				timer.value = setTimeout(() => {
					show.value = v;
				}, props.delay);
			}
		});
		return () => {
			let { size, animated, radius, shape } = props;
			let _props = { class: ["k-skeleton k-skeleton-ele", { "k-skeleton-animated": animated }] };
			let innerProps = {
				class: ["k-skeleton-avatar", {
					"k-skeleton-avatar-lg": size == "large",
					"k-skeleton-avatar-sm": size == "small",
					[`k-skeleton-avatar-${shape}`]: shape != "default"
				}],
				style: {}
			};
			let child = slots.default?.();
			if (!isNaN(Number(size))) {
				innerProps.style.width = `${size}px`;
				innerProps.style.height = `${size}px`;
			}
			if (radius) innerProps.style["border-radius"] = `${radius}px`;
			return createVNode("div", _props, [child && !show.value ? child : createVNode("span", innerProps, null)]);
		};
	}
});
//#endregion
//#region components/skeleton/skeleton-button.tsx
var SkeletonButton = /* @__PURE__ */ defineComponent({
	name: "SkeletonButton",
	props: skeletonProps,
	setup(props, { slots }) {
		const show = ref(props.loading);
		const timer = ref();
		watch(() => props.loading, (v) => {
			if (v) show.value = v;
			else {
				clearTimeout(timer.value);
				timer.value = setTimeout(() => {
					show.value = v;
				}, props.delay);
			}
		});
		return () => {
			let { size, animated, block, shape, width } = props;
			let _props = { class: ["k-skeleton k-skeleton-ele", {
				"k-skeleton-animated": animated,
				"k-skeleton-block": block
			}] };
			let innerProps = {
				class: ["k-skeleton-btn", {
					"k-skeleton-btn-lg": size == "large",
					"k-skeleton-btn-sm": size == "small",
					[`k-skeleton-btn-${shape}`]: shape != "default"
				}],
				style: {}
			};
			let child = slots.default?.();
			if (width) innerProps.style.width = `${width}px`;
			return createVNode("div", _props, [child && !show.value ? child : createVNode("span", innerProps, null)]);
		};
	}
});
//#endregion
//#region components/skeleton/skeleton-image.tsx
var SkeletonImage = /* @__PURE__ */ defineComponent({
	name: "SkeletonImage",
	props: skeletonProps,
	setup(ps, { slots }) {
		const show = ref(ps.loading);
		const timer = ref();
		watch(() => ps.loading, (v) => {
			if (v) show.value = v;
			else {
				clearTimeout(timer.value);
				timer.value = setTimeout(() => {
					show.value = v;
				}, ps.delay);
			}
		});
		return () => {
			let { animated, radius, size } = ps;
			let props = { class: ["k-skeleton k-skeleton-ele", { "k-skeleton-animated": animated }] };
			let innerProps = {
				class: ["k-skeleton-image"],
				style: {}
			};
			let child = slots.default?.();
			if (radius) innerProps.style["border-radius"] = `${radius}px`;
			if (!isNaN(Number(size))) {
				innerProps.style.width = `${size}px`;
				innerProps.style.height = `${size}px`;
			}
			if (Array.isArray(size)) {
				innerProps.style.width = `${size[0]}px`;
				innerProps.style.height = `${size[1]}px`;
			}
			return createVNode("div", props, [child && !show.value ? child : createVNode("span", innerProps, [createVNode(Icon, {
				"type": Images,
				"class": "k-skeleton-image-icon"
			}, null)])]);
		};
	}
});
//#endregion
//#region components/skeleton/skeleton-text.tsx
var SkeletonText = /* @__PURE__ */ defineComponent({
	name: "SkeletonText",
	props: skeletonProps,
	setup(ps, { slots }) {
		const show = ref(ps.loading);
		const timer = ref();
		watch(() => ps.loading, (v) => {
			if (v) show.value = v;
			else {
				clearTimeout(timer.value);
				timer.value = setTimeout(() => {
					show.value = v;
				}, ps.delay);
			}
		});
		return () => {
			let { size, animated, width } = ps;
			let props = { class: ["k-skeleton k-skeleton-ele", { "k-skeleton-animated": animated }] };
			let innerProps = {
				class: ["k-skeleton-text", {
					"k-skeleton-text-lg": size == "large",
					"k-skeleton-text-sm": size == "small"
				}],
				style: {}
			};
			let child = slots.default?.();
			if (width) innerProps.style.width = `${width}px`;
			return createVNode("div", props, [child && !show.value ? child : createVNode("span", innerProps, null)]);
		};
	}
});
//#endregion
//#region components/stat-card/utils/countup.ts
/**
* Animates a number by counting to it.
* playground: stackblitz.com/edit/countup-typescript
*
* @param target - id of html element, input, svg text element, or DOM element reference where counting occurs.
* @param endVal - the value you want to arrive at.
* @param options - optional configuration object for fine-grain control
*/
var CountUp = class CountUp {
	version = "2.10.0";
	static observedElements = /* @__PURE__ */ new WeakMap();
	defaults = {
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
		autoAnimate: false,
		autoAnimateDelay: 200,
		autoAnimateOnce: false
	};
	rAF;
	autoAnimateTimeout;
	startTime = null;
	remaining = 0;
	finalEndVal = null;
	useEasing = true;
	countDown = false;
	observer = null;
	el;
	formattingFn;
	easingFn;
	error = "";
	startVal = 0;
	duration = 2;
	paused = true;
	frameVal;
	once = false;
	options;
	endVal;
	constructor(target, endVal, options) {
		this.options = {
			...this.defaults,
			...options
		};
		this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber;
		this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo;
		this.el = typeof target === "string" ? document.getElementById(target) : target;
		endVal = endVal == null && this.el ? this.parse(this.el.innerHTML) : endVal;
		this.startVal = this.validateValue(this.options.startVal || 0);
		this.frameVal = this.startVal;
		this.endVal = this.validateValue(endVal);
		this.options.decimalPlaces = Math.max(this.options.decimalPlaces);
		this.resetDuration();
		this.options.separator = String(this.options.separator);
		this.useEasing = this.options.useEasing || false;
		if (this.options.separator === "") this.options.useGrouping = false;
		if (this.el) this.printValue(this.startVal);
		else this.error = "[CountUp] target is null or undefined";
		if (typeof window !== "undefined" && this.options.autoAnimate) if (!this.error && typeof IntersectionObserver !== "undefined") this.setupObserver();
		else if (this.error) console.error(this.error, target);
		else console.error("IntersectionObserver is not supported by this browser");
	}
	/** Set up an IntersectionObserver to auto-animate when the target element appears. */
	setupObserver() {
		const existing = CountUp.observedElements.get(this.el);
		if (existing) existing.unobserve();
		CountUp.observedElements.set(this.el, this);
		this.observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting && this.paused && !this.once) {
				this.paused = false;
				this.autoAnimateTimeout = setTimeout(() => this.start(), this.options.autoAnimateDelay);
				if (this.options.autoAnimateOnce) {
					this.once = true;
					this.observer?.disconnect();
				}
			} else if (!entry.isIntersecting && !this.paused) {
				clearTimeout(this.autoAnimateTimeout);
				this.reset();
			}
		}, { threshold: 0 });
		this.el && this.observer.observe(this.el);
	}
	/** Disconnect the IntersectionObserver and stop watching this element. */
	unobserve() {
		clearTimeout(this.autoAnimateTimeout);
		this.observer?.disconnect();
		CountUp.observedElements.delete(this.el);
	}
	/** Teardown: cancel animation, disconnect observer, clear callbacks. */
	onDestroy() {
		clearTimeout(this.autoAnimateTimeout);
		cancelAnimationFrame(this.rAF);
		this.paused = true;
		this.unobserve();
		this.options.onCompleteCallback = null;
		this.options.onStartCallback = null;
	}
	/**
	* Smart easing works by breaking the animation into 2 parts, the second part being the
	* smartEasingAmount and first part being the total amount minus the smartEasingAmount. It works
	* by disabling easing for the first part and enabling it on the second part. It is used if
	* useEasing is true and the total animation amount exceeds the smartEasingThreshold.
	*/
	determineDirectionAndSmartEasing() {
		const end = this.finalEndVal ? this.finalEndVal : this.endVal;
		this.countDown = this.startVal > end;
		const animateAmount = end - this.startVal;
		if (Math.abs(animateAmount) > (this.options.smartEasingThreshold || 999) && this.options.useEasing) {
			this.finalEndVal = end;
			const up = this.countDown ? 1 : -1;
			this.endVal = end + up * (this.options.smartEasingAmount || 333);
			this.duration = this.duration / 2;
		} else {
			this.endVal = end;
			this.finalEndVal = null;
		}
		if (this.finalEndVal !== null) this.useEasing = false;
		else this.useEasing = this.options.useEasing || false;
	}
	/** Start the animation. Optionally pass a callback that fires on completion. */
	start(callback) {
		if (this.error) return;
		if (this.options.onStartCallback) this.options.onStartCallback();
		if (callback) this.options.onCompleteCallback = callback;
		if (this.duration > 0) {
			this.determineDirectionAndSmartEasing();
			this.paused = false;
			this.rAF = requestAnimationFrame(this.count);
		} else this.printValue(this.endVal);
	}
	/** Toggle pause/resume on the animation. */
	pauseResume() {
		if (!this.paused) cancelAnimationFrame(this.rAF);
		else {
			this.startTime = null;
			this.duration = this.remaining;
			this.startVal = this.frameVal;
			this.determineDirectionAndSmartEasing();
			this.rAF = requestAnimationFrame(this.count);
		}
		this.paused = !this.paused;
	}
	/** Reset to startVal so the animation can be run again. */
	reset() {
		clearTimeout(this.autoAnimateTimeout);
		cancelAnimationFrame(this.rAF);
		this.paused = true;
		this.once = false;
		this.resetDuration();
		this.startVal = this.validateValue(this.options.startVal || 0);
		this.frameVal = this.startVal;
		this.printValue(this.startVal);
	}
	/** Pass a new endVal and start the animation. */
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
	/** Animation frame callback — advances the value each frame. */
	count = (timestamp) => {
		if (!this.startTime) this.startTime = timestamp;
		const progress = timestamp - this.startTime;
		this.remaining = this.duration - progress;
		if (this.useEasing) if (this.countDown) this.frameVal = this.startVal - this.easingFn(progress, 0, this.startVal - this.endVal, this.duration);
		else this.frameVal = this.easingFn(progress, this.startVal, this.endVal - this.startVal, this.duration);
		else this.frameVal = this.startVal + (this.endVal - this.startVal) * (progress / this.duration);
		const wentPast = this.countDown ? this.frameVal < this.endVal : this.frameVal > this.endVal;
		this.frameVal = wentPast ? this.endVal : this.frameVal;
		this.frameVal = Number(this.frameVal.toFixed(this.options.decimalPlaces));
		this.printValue(this.frameVal);
		if (progress < this.duration) this.rAF = requestAnimationFrame(this.count);
		else if (this.finalEndVal !== null) this.update(this.finalEndVal);
		else if (this.options.onCompleteCallback) this.options.onCompleteCallback();
	};
	/** Format and render the given value to the target element. */
	printValue(val) {
		if (!this.el) return;
		const result = this.formattingFn(val);
		if (this.options.plugin?.render) {
			this.options.plugin.render(this.el, result);
			return;
		}
		if (this.el.tagName === "INPUT") {
			const input = this.el;
			input.value = result;
		} else if (this.el.tagName === "text" || this.el.tagName === "tspan") this.el.textContent = result;
		else this.el.innerHTML = result;
	}
	/** Return true if the value is a finite number. */
	ensureNumber(n) {
		return typeof n === "number" && !isNaN(n);
	}
	/** Validate and convert a value to a number, setting an error if invalid. */
	validateValue(value) {
		const newValue = Number(value);
		if (!this.ensureNumber(newValue)) {
			this.error = `[CountUp] invalid start or end value: ${value}`;
			return 0;
		} else return newValue;
	}
	/** Reset startTime, duration, and remaining to their initial values. */
	resetDuration() {
		this.startTime = null;
		this.duration = Number(this.options.duration) * 1e3;
		this.remaining = this.duration;
	}
	/** Default number formatter with grouping, decimals, prefix/suffix, and numeral substitution. */
	formatNumber = (num) => {
		const neg = num < 0 ? "-" : "";
		let result, x1, x2, x3;
		result = Math.abs(num).toFixed(this.options.decimalPlaces);
		result += "";
		const x = result.split(".");
		x1 = x[0];
		x2 = x.length > 1 ? this.options.decimal + x[1] : "";
		if (this.options.useGrouping) {
			x3 = "";
			let factor = 3, j = 0;
			for (let i = 0, len = x1.length; i < len; ++i) {
				if (this.options.useIndianSeparators && i === 4) {
					factor = 2;
					j = 1;
				}
				if (i !== 0 && j % factor === 0) x3 = this.options.separator + x3;
				j++;
				x3 = x1[len - i - 1] + x3;
			}
			x1 = x3;
		}
		const { numerals } = this.options;
		if (numerals && numerals.length) {
			x1 = x1.replace(/[0-9]/g, (w) => numerals[+w]);
			x2 = x2.replace(/[0-9]/g, (w) => numerals[+w]);
		}
		return neg + this.options.prefix + x1 + x2 + this.options.suffix;
	};
	/**
	* Default easing function (easeOutExpo).
	* @param t current time
	* @param b beginning value
	* @param c change in value
	* @param d duration
	*/
	easeOutExpo = (t, b, c, d) => c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
	/** Parse a formatted string back to a number using the current separator/decimal options. */
	parse(number) {
		const escapeRegExp = (s) => s.replace(/([.,'  ])/g, "\\$1");
		const sep = escapeRegExp(this.options.separator || ",");
		const dec = escapeRegExp(this.options.decimal || ".");
		const num = number.replace(new RegExp(sep, "g"), "").replace(new RegExp(dec, "g"), ".");
		return parseFloat(num);
	}
};
//#endregion
//#region components/stat-card/utils/odometer.ts
var rAF = window.requestAnimationFrame || function(callback) {
	window.setTimeout(callback, 1e3 / 60);
};
var Odometer = class {
	version = "1.0";
	options;
	defaults = {
		duration: .8,
		lastDigitDelay: .25
	};
	cell_digits = null;
	constructor(options) {
		this.options = {
			...this.defaults,
			...options
		};
		this.cell_digits = null;
	}
	render(elem, formatted) {
		const options = this.options;
		var createdNow = false;
		if (!this.cell_digits) {
			createdNow = true;
			if (!document.querySelector("style[odometer]")) {
				var style = document.createElement("style");
				style.setAttribute("odometer", "odometer");
				style.innerHTML = ".odometer-numbers{display:inline-flex;line-height:100%;overflow-y:hidden}.odometer-numbers>span{display:flex;flex-direction:column;justify-content:start;align-items:center;height:1em;will-change:transform;transform:translateY(0)}";
				document.head.appendChild(style);
			}
			elem.innerHTML = "<div class=\"odometer-numbers\"></div>";
			this.cell_digits = [];
		}
		const blank = "<span style=\"color:transparent\">0</span>";
		const transitionDigit = `transform ${options.duration}s ease-out`;
		for (var i = this.cell_digits.length; i < formatted.length; i++) {
			const container = document.createElement("span");
			container.style.transition = transitionDigit;
			container.innerHTML = createdNow ? "" : blank;
			if (elem.firstChild) elem.firstChild.appendChild(container);
			this.cell_digits.push({
				container,
				current: void 0,
				position: createdNow ? 1 : 0,
				new: true
			});
		}
		function appendDigit(cell, newDigit) {
			cell.position--;
			cell.container.appendChild(newDigit);
			cell.lastTimeAdd = +/* @__PURE__ */ new Date();
			if (cell.new) {
				cell.new = false;
				rAF(function() {
					cell.container.style.transform = `translateY(${cell.position}em)`;
				});
			} else cell.container.style.transform = `translateY(${cell.position}em)`;
		}
		function pushDigit(cell, newDigit) {
			const { lastDigitDelay = .25, duration = .8 } = options;
			if (cell.nextToAdd) {
				appendDigit(cell, cell.nextToAdd);
				clearTimeout(cell.lastTimer);
				cell.nextToAdd = null;
			}
			const now = +/* @__PURE__ */ new Date();
			const delayTime = lastDigitDelay * 1e3 - (now - cell.lastTimeAdd);
			if (lastDigitDelay <= 0 || now - cell.lastTimeAdd >= delayTime * 1.05) {
				appendDigit(cell, newDigit);
				cell.nextToAdd = null;
			} else {
				cell.nextToAdd = newDigit;
				cell.lastTimer = setTimeout(() => {
					appendDigit(cell, cell.nextToAdd);
					cell.nextToAdd = null;
				}, duration * 1e3);
			}
		}
		const len = Math.max(formatted.length, this.cell_digits.length);
		for (var i = 0; i < len; i++) {
			var ch = i < formatted.length ? formatted.charAt(i) : null;
			const cell = this.cell_digits[i];
			if (cell.current != ch) {
				cell.current = ch;
				var newDigit = document.createElement("span");
				newDigit.innerHTML = ch === null ? blank : ch;
				if (cell.container.children.length < 4) appendDigit(cell, newDigit);
				else pushDigit(cell, newDigit);
				clearTimeout(cell.timerClean);
				cell.timerClean = setTimeout(function() {
					cell.timerClean = null;
					if (cell.container.children.length < 3) return;
					cell.container.style.transition = "none";
					rAF(() => {
						cell.position = -1;
						while (cell.container.children.length > 1) cell.container.removeChild(cell.container.firstChild);
						const digitBlank = document.createElement("span");
						digitBlank.innerHTML = blank;
						cell.container.insertBefore(digitBlank, cell.container.firstChild);
						cell.container.style.transform = `translateY(${cell.position}em)`;
						rAF(() => {
							cell.container.style.transition = transitionDigit;
						});
					});
				}, ((options.duration || .8) + (options.duration || .25)) * 1e3 + 2500);
			}
		}
	}
};
//#endregion
//#region components/stat-card/countup.tsx
var CountUpNumber = /* @__PURE__ */ defineComponent({
	name: "CountUpNumber",
	props: {
		modelValue: {
			type: [Number],
			required: true
		},
		separator: {
			type: String,
			default: ","
		},
		duration: {
			type: Number,
			default: 1.2
		},
		precision: {
			type: Number,
			default: 0
		},
		type: {
			type: String,
			default: "countup"
		},
		autoAnimate: Boolean,
		autoAnimateOnce: Boolean
	},
	setup(props) {
		const el = ref();
		let countUp;
		onMounted(() => {
			if (el.value) {
				const options = {
					duration: props.duration,
					separator: props.separator,
					decimalPlaces: props.precision,
					autoAnimate: props.autoAnimate,
					autoAnimateOnce: props.autoAnimateOnce
				};
				if (props.type === "rollup") options.plugin = new Odometer({
					duration: props.duration,
					lastDigitDelay: 0
				});
				countUp = new CountUp(el.value, props.modelValue, options);
				countUp.start();
			}
		});
		watch(() => props.modelValue, (newVal) => {
			if (countUp) countUp.update(newVal);
		});
		watch(() => props.precision, (newVal) => {
			if (countUp) countUp.options.decimalPlaces = newVal;
		});
		return () => createVNode("span", {
			"class": "k-stat-countup-number",
			"ref": el
		}, null);
	}
});
var StatNumber = /* @__PURE__ */ defineComponent({
	name: "StatNumber",
	props: {
		modelValue: {
			type: [Number],
			required: true,
			default: 0
		},
		separator: String,
		duration: {
			type: Number,
			default: 1
		},
		precision: {
			type: Number,
			default: 0
		},
		type: {
			type: String,
			default: "countup"
		},
		prefix: String,
		suffix: String,
		autoAnimate: {
			type: Boolean,
			default: true
		},
		autoAnimateOnce: {
			type: Boolean,
			default: true
		}
	},
	setup(props, { slots }) {
		return () => {
			const prefixNode = props.prefix || getChildren(slots.prefix?.());
			const suffixNode = props.suffix || getChildren(slots.suffix?.());
			const items = {
				modelValue: props.modelValue,
				separator: props.separator,
				duration: props.duration,
				precision: props.precision,
				type: props.type,
				autoAnimate: props.autoAnimate,
				autoAnimateOnce: props.autoAnimateOnce
			};
			return createVNode("div", { "class": "k-stat-number" }, [
				prefixNode?.length > 0 && createVNode("span", { "class": "k-stat-number-prefix" }, [prefixNode]),
				createVNode(CountUpNumber, items, null),
				suffixNode?.length > 0 && createVNode("span", { "class": "k-stat-number-suffix" }, [suffixNode])
			]);
		};
	}
});
var StatCard = /* @__PURE__ */ defineComponent({
	name: "StatCard",
	props: {
		title: String,
		precision: {
			type: Number,
			default: 0
		},
		items: {
			type: Array,
			default: () => []
		},
		separator: String,
		statNumberType: String,
		reverse: Boolean,
		bordered: {
			type: Boolean,
			default: false
		}
	},
	setup(props, { slots }) {
		return () => {
			return createVNode("div", { "class": ["k-stat-card", { "k-stat-card-bordered": props.bordered }] }, [props.title && createVNode("div", { "class": "k-stat-card-title" }, [props.title]), createVNode("div", { "class": "k-stat-card-items" }, [(props.items || []).map((item, index) => {
				return createVNode("div", {
					"key": index,
					"class": ["k-stat-card-item", { "k-stat-card-item-reverse": props.reverse }]
				}, [createVNode("div", { "class": "k-stat-card-item-value" }, [createVNode(StatNumber, {
					"modelValue": item.value,
					"autoAnimate": item.autoAnimate,
					"duration": item.duration,
					"precision": item.precision !== void 0 ? item.precision : props.precision,
					"separator": item.separator !== void 0 ? item.separator : props.separator,
					"type": props.statNumberType
				}, {
					prefix: () => item.prefix || slots.prefix,
					suffix: () => item.suffix || slots.suffix
				})]), createVNode("div", { "class": "k-stat-card-item-desc" }, [item.desc])]);
			})])]);
		};
	}
});
var Space = /* @__PURE__ */ defineComponent({
	name: "Space",
	props: {
		align: { type: String },
		vertical: Boolean,
		wrap: {
			type: Boolean,
			default: false
		},
		block: Boolean,
		compact: Boolean,
		size: { type: [
			String,
			Number,
			Array
		] }
	},
	setup(props, { slots, attrs }) {
		provide("size", props.size);
		return () => {
			const size = props.size;
			let children = getChildren(slots.default?.());
			const split = slots.split?.();
			const align = !props.vertical && !props.align ? "center" : props.align;
			const style = {};
			const cls = ["k-space", {
				[`k-space-vertical`]: props.vertical,
				[`k-space-compact`]: props.compact,
				[`k-space-wrap`]: props.wrap,
				[`k-space-block`]: props.block,
				[`k-space-align-${align}`]: align
			}];
			if (!props.compact) {
				if (Array.isArray(size)) style.gap = `${size[1]}px ${size[0]}px`;
				else if (typeof size === "string") style.gap = `${{
					small: 8,
					middle: 16,
					large: 24,
					default: 16
				}[size]}px`;
				else if (typeof size === "number") style.gap = `${size}px`;
				else if (!size) style.gap = `8px`;
			}
			const _props = {
				...attrs,
				style,
				class: cls
			};
			const vNodes = [];
			for (let i = 0; i < children.length; i++) {
				const pre = props.vertical ? "vertical-" : "";
				const p = { class: {
					[`k-space-${pre}first-item`]: i === 0,
					[`k-space-${pre}item`]: i > 0 && i < children.length - 1,
					[`k-space-${pre}last-item`]: i === children.length - 1
				} };
				if (typeof size === "string") p.size = size;
				const child = props.compact ? cloneVNode(children[i], p, true, true) : h("div", p, [children[i]]);
				vNodes.push(child);
				if (split && i < children.length - 1) vNodes.push(split);
			}
			return createVNode("div", _props, [...vNodes]);
		};
	}
});
var Spin = /* @__PURE__ */ defineComponent({
	name: "Spin",
	props: {
		modelValue: {
			type: Boolean,
			default: true
		},
		delay: {
			type: Number,
			default: 500
		},
		size: {
			type: String,
			default: "default"
		},
		mode: {
			type: String,
			default: "rotate"
		}
	},
	setup(props, { slots }) {
		const spinning = ref(props.modelValue);
		let timer;
		watch(() => props.modelValue, (nv) => {
			if (nv) spinning.value = nv;
			else {
				clearTimeout(timer);
				timer = setTimeout(() => {
					spinning.value = nv;
				}, props.delay);
			}
		});
		return () => {
			let { mode, size } = props;
			const classes = [{
				[`k-spin-loading`]: spinning.value,
				[`k-spin-${mode}`]: mode && spinning.value
			}];
			const children = slots.default?.();
			const root = ["k-spin", {
				[`k-spin-lg`]: size == "large",
				[`k-spin-sm`]: size == "small",
				[`k-spin-only`]: children == null
			}];
			const spin = createVNode("div", { "class": classes }, null);
			return createVNode("div", { "class": root }, [[spin, children]]);
		};
	}
});
var Switch = /* @__PURE__ */ defineComponent({
	name: "KSwitch",
	props: {
		checked: [Boolean, Number],
		modelValue: [Boolean, Number],
		type: String,
		disabled: Boolean,
		loading: Boolean,
		size: {
			default: "default",
			type: String
		},
		trueText: String,
		falseText: String,
		onChange: Function
	},
	setup(ps, { slots, emit }) {
		const isChecked = ref(ps.modelValue || ps.checked);
		watch(() => ps.modelValue, (nv) => {
			isChecked.value = nv;
		});
		watch(() => ps.checked, (nv) => {
			isChecked.value = nv;
		});
		const change = () => {
			if (ps.disabled) return false;
			const checked = !isChecked.value;
			isChecked.value = checked;
			emit("update:modelValue", checked);
			emit("change", checked);
		};
		return () => {
			const { type, trueText, falseText, disabled, loading, size } = ps;
			const classes = ["k-switch", {
				["k-switch-checked"]: isChecked.value,
				["k-switch-disabled"]: disabled || loading,
				[`k-switch-${type}`]: !!type,
				["k-switch-sm"]: ps.size == "small"
			}];
			const children = slots.checked?.() || trueText || slots.unchecked?.() || falseText;
			const loadNode = loading ? createVNode(Icon, {
				"spin": true,
				"type": Loading,
				"class": "k-switch-loading"
			}, null) : null;
			const textNode = size != "small" && children ? createVNode("span", { "class": "k-switch-inner" }, [isChecked.value ? slots.checked?.() || trueText : slots.unchecked?.() || falseText]) : null;
			return createVNode("button", {
				"class": classes,
				"onClick": change,
				"disabled": disabled || loading,
				"type": "button"
			}, [textNode, loadNode]);
		};
	}
});
var Table = /* @__PURE__ */ defineComponent({
	name: "Table",
	props: {
		data: {
			type: Array,
			default: () => []
		},
		columns: {
			type: Array,
			default: () => []
		},
		selectedKeys: {
			type: Array,
			default: () => []
		},
		disabledKeys: {
			type: Array,
			default: () => []
		},
		rowKey: {
			type: String,
			default: "key"
		},
		scroll: {
			type: Object,
			default: () => ({})
		},
		size: {
			type: String,
			default: "default"
		},
		striped: Boolean,
		bordered: {
			type: Boolean,
			default: false
		},
		checkable: Boolean,
		loading: Boolean,
		emptyText: String,
		onSort: { type: Function },
		onRowClick: { type: Function },
		onSelect: { type: Function },
		onSelectAll: { type: Function }
	},
	setup(props, { emit, slots }) {
		const headerWrapperRef = ref();
		const bodyWrapperRef = ref();
		const scrollbarWidth = ref(0);
		const innerSelectedKeys = ref(new Set(props.selectedKeys));
		const isSplit = computed(() => !!props.scroll.y);
		const sortState = reactive({
			key: "",
			order: null
		});
		const pingLeft = ref(false);
		const pingRight = ref(false);
		watch(() => props.selectedKeys, (val) => {
			innerSelectedKeys.value = new Set(val);
		});
		const getFlattedColumns = (cols) => {
			const result = [];
			cols.forEach((col) => {
				if (col.children && col.children.length > 0) result.push(...getFlattedColumns(col.children));
				else result.push(col);
			});
			return result;
		};
		const flattedColumns = computed(() => getFlattedColumns(props.columns));
		const headerRows = computed(() => {
			const rows = [];
			let maxDepth = 0;
			const getDepth = (cols, depth = 0) => {
				cols.forEach((col) => {
					if (col.children && col.children.length > 0) getDepth(col.children, depth + 1);
					else maxDepth = Math.max(maxDepth, depth + 1);
				});
			};
			getDepth(props.columns);
			const traverse = (cols, depth) => {
				if (!rows[depth]) rows[depth] = [];
				cols.forEach((col) => {
					const cell = { ...col };
					const getLeafCount = (c) => {
						if (c.children && c.children.length) return c.children.reduce((acc, item) => acc + getLeafCount(item), 0);
						return 1;
					};
					cell.colSpan = getLeafCount(col);
					if (col.children && col.children.length > 0) {
						cell.rowSpan = 1;
						traverse(col.children, depth + 1);
					} else cell.rowSpan = maxDepth - depth;
					rows[depth].push(cell);
				});
			};
			traverse(props.columns, 0);
			return {
				rows,
				maxDepth
			};
		});
		const isDisabled = (key) => props.disabledKeys && props.disabledKeys.includes(key);
		const selectionState = computed(() => {
			const enableData = props.data.filter((item) => !isDisabled(item[props.rowKey]));
			if (enableData.length === 0) return {
				all: false,
				indeterminate: false
			};
			const checkedCount = enableData.filter((item) => innerSelectedKeys.value.has(item[props.rowKey])).length;
			return {
				all: checkedCount > 0 && checkedCount === enableData.length,
				indeterminate: checkedCount > 0 && checkedCount < enableData.length
			};
		});
		const fixedInfo = computed(() => {
			const headerStyles = {};
			const bodyStyles = {};
			let leftOffset = props.checkable ? 50 : 0;
			flattedColumns.value.forEach((col) => {
				if (col.fixed === "left") {
					const style = {
						position: "sticky",
						transform: "translateZ(0)",
						left: `${leftOffset}px`
					};
					headerStyles[col.key] = style;
					bodyStyles[col.key] = style;
					leftOffset += col.width || 150;
				}
			});
			let rightOffset = 0;
			for (let i = flattedColumns.value.length - 1; i >= 0; i--) {
				const col = flattedColumns.value[i];
				if (col.fixed === "right") {
					bodyStyles[col.key] = {
						position: "sticky",
						right: `${rightOffset}px`,
						transform: "translateZ(0)"
					};
					const headerRight = isSplit.value ? rightOffset + scrollbarWidth.value : rightOffset;
					headerStyles[col.key] = {
						position: "sticky",
						right: `${headerRight}px`,
						transform: "translateZ(0)"
					};
					rightOffset += col.width || 150;
				}
			}
			return {
				header: headerStyles,
				body: bodyStyles
			};
		});
		const getFixedClass = (col, index) => {
			const cls = [];
			if (col.fixed === "left") {
				cls.push("k-table-cell-fix-left");
				if (flattedColumns.value[index + 1]?.fixed !== "left") cls.push("k-table-cell-fix-left-last");
			}
			if (col.fixed === "right") {
				cls.push("k-table-cell-fix-right");
				if (flattedColumns.value[index - 1]?.fixed !== "right") cls.push("k-table-cell-fix-right-first");
			}
			if (col.sorter) cls.push("k-table-cell-sorter");
			return cls;
		};
		let scrollRafId = 0;
		const handleBodyScroll = (target) => {
			if (!target) return;
			if (scrollRafId) cancelAnimationFrame(scrollRafId);
			scrollRafId = requestAnimationFrame(() => {
				const { scrollLeft, scrollWidth, clientWidth } = target;
				if (isSplit.value && headerWrapperRef.value) headerWrapperRef.value.scrollLeft = scrollLeft;
				const maxScrollLeft = Math.max(0, scrollWidth - clientWidth);
				const nextPingLeft = scrollLeft > .5;
				const nextPingRight = scrollLeft < maxScrollLeft - .5;
				if (pingLeft.value !== nextPingLeft) pingLeft.value = nextPingLeft;
				if (pingRight.value !== nextPingRight) pingRight.value = nextPingRight;
			});
		};
		const measureScrollbar = () => {
			if (bodyWrapperRef.value) {
				const width = bodyWrapperRef.value.offsetWidth - bodyWrapperRef.value.clientWidth - (props.bordered ? 1 : 0);
				if (scrollbarWidth.value !== width) scrollbarWidth.value = width;
			}
		};
		onMounted(() => {
			if (isSplit.value) {
				measureScrollbar();
				if (bodyWrapperRef.value) handleBodyScroll(bodyWrapperRef.value);
			} else if (bodyWrapperRef.value) handleBodyScroll(bodyWrapperRef.value);
		});
		onUpdated(() => {
			if (isSplit.value) measureScrollbar();
		});
		const handleSort = (col) => {
			if (!col.sorter) return;
			if (sortState.key !== col.key) {
				sortState.key = col.key;
				sortState.order = "asc";
			} else sortState.order = sortState.order === "asc" ? "desc" : sortState.order === "desc" ? null : "asc";
			if (typeof col.sorter === "function") col.sorter(sortState);
			emit("sort", sortState);
		};
		const processedData = computed(() => {
			let list = [...props.data];
			if (sortState.key && sortState.order) {
				const col = flattedColumns.value.find((c) => c.key === sortState.key);
				if (col && col.sorter === true) list.sort((a, b) => {
					const valA = a[sortState.key];
					const valB = b[sortState.key];
					if (valA === valB) return 0;
					return sortState.order === "asc" ? valA > valB ? 1 : -1 : valA > valB ? -1 : 1;
				});
			}
			return list;
		});
		const toggleAll = ({ checked }) => {
			const newSet = new Set(innerSelectedKeys.value);
			props.data.forEach((item) => {
				const key = item[props.rowKey];
				if (!isDisabled(key)) checked ? newSet.add(key) : newSet.delete(key);
			});
			innerSelectedKeys.value = newSet;
			const rows = Array.from(newSet);
			emit("update:selectedKeys", rows);
			emit("selectAll", checked, rows);
		};
		const toggleOne = (e, record, key) => {
			if (isDisabled(key)) return;
			const newSet = new Set(innerSelectedKeys.value);
			newSet.has(key) ? newSet.delete(key) : newSet.add(key);
			innerSelectedKeys.value = newSet;
			const rows = Array.from(newSet);
			emit("update:selectedKeys", rows);
			emit("select", record, e.checked, rows);
		};
		const renderColGroup = (isHeader = false) => createVNode("colgroup", null, [
			props.checkable && createVNode("col", { "style": {
				width: "50px",
				left: 0
			} }, null),
			flattedColumns.value.map((col) => createVNode("col", {
				"key": col.key,
				"style": {
					width: col.width ? `${col.width}px` : "auto",
					minWidth: col.width ? `${col.width}px` : "150px"
				}
			}, null)),
			isHeader && isSplit.value && createVNode("col", { "style": {
				width: `${scrollbarWidth.value}px`,
				minWidth: `${scrollbarWidth.value}px`
			} }, null)
		]);
		const renderThead = () => {
			const { rows, maxDepth } = headerRows.value;
			return createVNode("thead", null, [rows.map((row, rowIndex) => createVNode("tr", { "key": rowIndex }, [
				props.checkable && rowIndex === 0 && createVNode("th", {
					"rowspan": maxDepth,
					"class": ["k-table-cell-fix-left", pingLeft.value && "k-table-cell-fix-left-last"],
					"style": {
						left: 0,
						zIndex: 3
					}
				}, [createVNode(Checkbox, {
					"checked": selectionState.value.all,
					"indeterminate": selectionState.value.indeterminate,
					"onChange": toggleAll,
					"disabled": props.data.length > 0 && props.data.every((item) => isDisabled(item[props.rowKey]))
				}, null)]),
				row.map((col, idx) => createVNode("th", {
					"key": col.key || idx,
					"colspan": col.colSpan,
					"rowspan": col.rowSpan,
					"class": getFixedClass(col, idx),
					"style": fixedInfo.value.header[col.key],
					"onClick": () => handleSort(col)
				}, [createVNode("div", { "class": "k-table-header-col" }, [slots[`header-${col.key}`]?.({
					value: col.title,
					col,
					index: idx
				}) || col.title, col.sorter && createVNode("span", { "class": "k-table-sorter" }, [createVNode(Icon, {
					"type": ChevronUp,
					"class": ["k-table-sorter-up", sortState.key === col.key && sortState.order === "asc" && "k-table-sorter-active"]
				}, null), createVNode(Icon, {
					"type": ChevronDown,
					"class": ["k-table-sorter-down", sortState.key === col.key && sortState.order === "desc" && "k-table-sorter-active"]
				}, null)])])])),
				isSplit.value && rowIndex === 0 && createVNode("th", {
					"rowspan": maxDepth,
					"class": "k-table-scrollbar-patch",
					"style": { width: `${scrollbarWidth.value}px` }
				}, null)
			]))]);
		};
		const mergeMatrix = computed(() => {
			const data = processedData.value;
			const cols = flattedColumns.value;
			const matrix = [];
			if (!data.length) return matrix;
			for (let i = 0; i < data.length; i++) {
				matrix[i] = [];
				for (let j = 0; j < cols.length; j++) matrix[i][j] = {
					rowSpan: 1,
					colSpan: 1,
					show: true
				};
			}
			for (let i = 0; i < data.length; i++) for (let j = 0; j < cols.length; j++) {
				if (!matrix[i][j].show) continue;
				const record = data[i];
				const col = cols[j];
				let rowspan = 1;
				let colspan = 1;
				if (col.rowSpan) rowspan = typeof col.rowSpan === "function" ? col.rowSpan(record, i) : col.rowSpan;
				if (col.colSpan) colspan = typeof col.colSpan === "function" ? col.colSpan(record, i) : col.colSpan;
				if (rowspan === 1 && colspan === 1) continue;
				matrix[i][j].rowSpan = rowspan;
				matrix[i][j].colSpan = colspan;
				for (let r = 0; r < rowspan; r++) for (let c = 0; c < colspan; c++) {
					if (r === 0 && c === 0) continue;
					const targetRow = i + r;
					const targetCol = j + c;
					if (matrix[targetRow] && matrix[targetRow][targetCol]) matrix[targetRow][targetCol].show = false;
				}
			}
			return matrix;
		});
		const renderTbody = () => createVNode("tbody", null, [processedData.value.map((record, rowIndex) => {
			const rowId = record[props.rowKey];
			return createVNode("tr", {
				"key": rowId,
				"onClick": (e) => {
					e.stopPropagation();
					emit("rowClick", record, rowIndex);
				}
			}, [props.checkable && createVNode("td", {
				"class": ["k-table-cell-fix-left", pingLeft.value && "k-table-cell-fix-left-last"],
				"style": {
					width: "50px",
					left: 0
				}
			}, [createVNode(Checkbox, {
				"checked": innerSelectedKeys.value.has(rowId),
				"disabled": isDisabled(rowId),
				"onChange": (e) => toggleOne(e, record, rowId)
			}, null)]), flattedColumns.value.map((col, colIndex) => {
				const cellState = mergeMatrix.value[rowIndex]?.[colIndex];
				if (!cellState || !cellState.show) return null;
				const attrs = {};
				if (cellState.rowSpan > 1) attrs.rowspan = cellState.rowSpan;
				if (cellState.colSpan > 1) attrs.colspan = cellState.colSpan;
				return createVNode("td", mergeProps({ "key": col.key }, attrs, {
					"class": getFixedClass(col, colIndex),
					"style": fixedInfo.value.body[col.key]
				}), [slots[col.key]?.({
					record,
					col,
					value: record[col.key]
				}) || col.render?.(h, record, colIndex) || record[col.key]]);
			})]);
		})]);
		const renderTable = (isHeader, isBody) => {
			return createVNode("table", { "style": {
				width: props.scroll.x && typeof props.scroll.x === "number" ? `${props.scroll.x}px` : props.scroll.x || void 0,
				minWidth: !props.scroll.x ? "100%" : void 0,
				tableLayout: "fixed"
			} }, [
				renderColGroup(isHeader),
				isHeader && renderThead(),
				isBody && renderTbody()
			]);
		};
		return () => {
			const tableCls = ["k-table", {
				"k-table-striped": props.striped,
				"k-table-sm": props.size == "small",
				"k-table-lg": props.size == "large",
				"k-table-bordered": props.bordered,
				"k-table-ping-left": pingLeft.value,
				"k-table-ping-right": pingRight.value
			}];
			const isEmpty = !props.data || !props.data.length || !props.columns || !props.columns.length;
			const splitHeader = isSplit.value && createVNode("div", {
				"class": "k-table-thead",
				"ref": headerWrapperRef,
				"style": { overflow: "hidden" }
			}, [renderTable(true, false)]);
			const bodyContent = createVNode("div", {
				"class": "k-table-body k-scroll",
				"ref": bodyWrapperRef,
				"style": {
					overflowY: props.scroll.y ? "scroll" : "auto",
					overflowX: props.data?.length ? "auto" : "hidden",
					maxHeight: props.scroll.y ? typeof props.scroll.y === "number" ? `${props.scroll.y}px` : props.scroll.y : void 0
				},
				"onScroll": (e) => handleBodyScroll(e.target)
			}, [renderTable(!isSplit.value, true), isEmpty && createVNode(Empty, { "description": props.emptyText }, null)]);
			return createVNode("div", { "class": tableCls }, [
				slots.header && createVNode("div", { "class": "k-table-header" }, [slots.header()]),
				splitHeader,
				bodyContent,
				slots.footer && createVNode("div", { "class": "k-table-footer" }, [slots.footer()]),
				props.loading && createVNode(Spin, null, null)
			]);
		};
	}
});
var TabPanel = /* @__PURE__ */ defineComponent({
	name: "TabPanel",
	props: {
		title: String,
		icon: Array,
		disabled: Boolean,
		closable: Boolean
	},
	setup(_, { slots }) {
		const key = getCurrentInstance()?.vnode.key;
		const activeKey = inject("tabActiveKey", ref(null));
		const tabUpdateNav = inject("tabUpdateNav", null);
		onMounted(() => tabUpdateNav?.());
		onBeforeUnmount(() => tabUpdateNav?.());
		return () => {
			return createVNode("div", { "class": ["k-tabs-tabpanel", { "k-tabs-tabpanel-active": activeKey.value == key }] }, [slots.default?.()]);
		};
	}
});
var Tabs = /* @__PURE__ */ defineComponent({
	name: "Tabs",
	props: {
		modelValue: [String, Number],
		value: [String, Number],
		card: Boolean,
		sample: Boolean,
		centered: Boolean,
		animated: {
			type: Boolean,
			default: true
		},
		onTabClick: Function,
		onChange: Function,
		onRemove: Function
	},
	setup(ps, { slots, emit }) {
		const defaultActiveKey = ref(ps.modelValue);
		const currentIndex = ref(-1);
		const scrollable = ref(false);
		const navOffsetLeft = ref(0);
		const prevBtnDisabled = ref(false);
		const nextBtnDisabled = ref(false);
		const navRef = ref();
		const navScrollRef = ref();
		const navBoxRef = ref();
		const inkBarRef = ref();
		provide("tabActiveKey", defaultActiveKey);
		watch(() => ps.modelValue, (nv) => {
			defaultActiveKey.value = nv;
			updateIndex();
		});
		onMounted(() => {
			nextTick(() => {
				updateIndex();
			});
			window.addEventListener("resize", resetNavPosition);
		});
		onBeforeMount(() => {
			window.removeEventListener("resize", resetNavPosition);
		});
		const resetActivePosition = () => {
			const target = navRef.value.children[currentIndex.value];
			if (!target) return;
			const nav = navScrollRef.value;
			let clientWidth = navBoxRef.value.clientWidth;
			let navLeft = navOffsetLeft.value;
			let { offsetLeft, offsetWidth } = target;
			if (navLeft + offsetLeft < 0) navLeft = -offsetLeft;
			else if (clientWidth - navLeft < offsetLeft + offsetWidth) navLeft -= offsetLeft + offsetWidth + navLeft - clientWidth + 2;
			navOffsetLeft.value = navLeft;
			nav.style.transform = `translate3d(${navLeft}px,0,0)`;
		};
		const resetNavPosition = () => {
			nextTick(() => {
				const nav = navScrollRef.value;
				if (!nav) return;
				let totalWidth = nav.offsetWidth;
				let clientWidth = navBoxRef.value.clientWidth;
				let navLeft = navOffsetLeft.value;
				if (clientWidth + navLeft < clientWidth) navLeft = clientWidth - totalWidth;
				if (navLeft > 0) navLeft = 0;
				navOffsetLeft.value = navLeft;
				nextBtnDisabled.value = navLeft == clientWidth - totalWidth;
				prevBtnDisabled.value = navLeft == 0;
				nav.style.transform = `translate3d(${navLeft}px,0,0)`;
				resetActivePosition();
				updateInkBarPosition();
				updateNav();
			});
		};
		provide("tabUpdateNav", resetNavPosition);
		const scroll = (direction) => {
			const panel = navScrollRef.value;
			let totalWidth = panel.offsetWidth;
			let clientWidth = navBoxRef.value.clientWidth;
			let navLeft = navOffsetLeft.value;
			if (direction == "right") {
				const endWidth = totalWidth - clientWidth + navLeft;
				if (endWidth > clientWidth) navLeft -= clientWidth;
				else if (endWidth > 0) navLeft -= endWidth;
			} else if (navLeft < -clientWidth) navLeft += clientWidth;
			else if (navLeft < 0) navLeft = 0;
			nextBtnDisabled.value = navLeft == clientWidth - totalWidth;
			prevBtnDisabled.value = navLeft == 0;
			navOffsetLeft.value = navLeft;
			panel.style.transform = `translate3d(${navLeft}px,0,0)`;
		};
		const closeTab = (key, e) => {
			emit("remove", key);
			e.stopPropagation();
		};
		const tabClick = ({ disabled, key }, index) => {
			if (!disabled) {
				emit("update:modelValue", key);
				emit("tabClick", key);
				if (defaultActiveKey.value !== key) {
					defaultActiveKey.value = key;
					currentIndex.value = index;
					updateIndex();
					emit("change", key);
				}
			}
		};
		const updateIndex = () => {
			nextTick(() => {
				currentIndex.value = getChildren(slots.default?.())?.map((p) => p.key).indexOf(defaultActiveKey.value);
				resetActivePosition();
				updateInkBarPosition();
			});
		};
		const updateInkBarPosition = () => {
			if (!ps.card && !ps.sample) {
				const nav = navRef.value.children[currentIndex.value];
				if (nav) {
					const inkBar = inkBarRef.value;
					let offsetLeft = nav.offsetLeft;
					if (ps.centered) {}
					inkBar.style.width = `${nav.offsetWidth}px`;
					inkBar.style.transform = `translate3d(${offsetLeft}px, 0px, 0px)`;
				}
			}
		};
		const updateNav = () => {
			nextTick(() => {
				const navBox = navBoxRef.value;
				if (!navBox) return;
				scrollable.value = navBox.scrollWidth > navBox.clientWidth;
			});
		};
		const navNodes = computed(() => {
			return getChildren(slots.default?.())?.map((panel, index) => {
				const key = panel.key;
				let { icon, title, closable, disabled } = panel.props;
				disabled = disabled !== void 0 && disabled != false;
				closable = closable !== void 0;
				return createVNode("div", {
					class: ["k-tabs-tab", {
						["k-tabs-tab-active"]: key === defaultActiveKey.value,
						["k-tabs-tab-disabled"]: disabled
					}],
					onClick: () => tabClick({
						disabled,
						key
					}, index)
				}, [
					icon ? createVNode(Icon, { "type": icon }, null) : null,
					title,
					closable && ps.card ? createVNode(Icon, {
						"type": X,
						"class": "k-tabs-close",
						"onClick": (e) => closeTab(key, e)
					}, null) : null
				]);
			});
		});
		return () => {
			const { card, animated, centered, sample } = ps;
			const classes = ["k-tabs", {
				["k-tabs-animated"]: animated && !card && !sample,
				["k-tabs-card"]: card && !sample,
				["k-tabs-sample"]: sample && !card,
				["k-tabs-centered"]: centered
			}];
			let scrollStyle = {}, paneStyle = {};
			if (animated && !card && !sample) paneStyle.marginLeft = `-${100 * currentIndex.value}%`;
			const navCls = ["k-tabs-nav-container", { ["k-tabs-nav-container-scroll"]: scrollable.value }];
			return createVNode("div", { "class": classes }, [createVNode("div", { "class": "k-tabs-bar" }, [createVNode("div", { "class": navCls }, [
				scrollable.value ? createVNode("span", {
					"class": ["k-tabs-tab-btn-prev", { "k-tabs-tab-btn-prev-disabled": prevBtnDisabled.value }],
					"onClick": () => scroll("left")
				}, [createVNode(Icon, { "type": ChevronLeft }, null)]) : null,
				createVNode("div", {
					"class": "k-tabs-nav-wrap",
					"ref": navBoxRef
				}, [createVNode("div", {
					"class": "k-tabs-nav",
					"style": scrollStyle,
					"ref": navScrollRef
				}, [!card && !sample ? createVNode("div", {
					"class": "k-tabs-ink-bar",
					"ref": inkBarRef
				}, null) : null, createVNode("div", {
					"class": "k-tabs-nav-inner",
					"ref": navRef
				}, [navNodes.value])])]),
				scrollable.value ? createVNode("span", {
					"class": ["k-tabs-tab-btn-next", { "k-tabs-tab-btn-next-disabled": nextBtnDisabled.value }],
					"onClick": () => scroll("right")
				}, [createVNode(Icon, { "type": ChevronRight }, null)]) : null
			]), slots.extra ? createVNode("div", { "class": "k-tabs-extra" }, [slots.extra()]) : null]), createVNode("div", {
				"class": "k-tabs-content",
				"style": paneStyle
			}, [slots.default?.()])]);
		};
	}
});
var TimeLine = /* @__PURE__ */ defineComponent({
	name: "TimeLine",
	props: { mode: {
		type: String,
		default: "left",
		validator: (val) => {
			return [
				"left",
				"right",
				"center",
				"alternate"
			].includes(val);
		}
	} },
	setup(props, { slots }) {
		return () => {
			return createVNode("ul", { "class": ["k-time-line", `k-time-line-${props.mode}`] }, [slots.default?.()]);
		};
	}
});
var TimeLineItem = /* @__PURE__ */ defineComponent({
	name: "TimeLineItem",
	props: {
		color: String,
		icon: [String, Array],
		time: String,
		extra: String
	},
	setup(props, { slots }) {
		return () => {
			const { icon, color, time } = props;
			const styles = { color };
			const iconNode = slots.dot?.() || (icon ? createVNode(Icon, { "type": icon }, null) : createVNode("span", { "class": "k-time-line-head" }, null));
			const itemProps = {
				class: ["k-time-line-dot", { "k-time-line-dot-custom": !!slots.dot || !!icon }],
				style: styles
			};
			const extraNode = props.extra || slots.extra?.();
			return createVNode("li", { "class": "k-time-line-item" }, [createVNode("div", itemProps, [iconNode]), createVNode("div", { "class": "k-time-line-item-content" }, [
				slots.default?.(),
				extraNode && createVNode("div", { "class": "k-time-line-item-extra" }, [extraNode]),
				time && createVNode("div", { "class": "k-time-line-item-time" }, [time])
			])]);
		};
	}
});
//#endregion
//#region components/tree/utils.ts
var updateParentIndeterminate = (nodes, parentKey) => {
	let parent;
	for (let i = 0; i < nodes.length; i++) if (nodes[i].key === parentKey) {
		parent = nodes[i];
		break;
	}
	if (!parent) return;
	const enabledSiblings = nodes.filter((node) => node.parentKey === parentKey).filter((node) => !node.disabled);
	if (enabledSiblings.length === 0) return;
	const checkedCount = enabledSiblings.filter((node) => node.checked).length;
	const indeterminateCount = enabledSiblings.filter((node) => node.indeterminate).length;
	if (checkedCount > 0 && checkedCount < enabledSiblings.length) {
		parent.indeterminate = true;
		parent.checked = false;
	} else if (checkedCount === enabledSiblings.length) {
		parent.checked = true;
		parent.indeterminate = false;
	} else if (checkedCount === 0 && indeterminateCount === 0) {
		parent.checked = false;
		parent.indeterminate = false;
	} else if (indeterminateCount > 0) {
		parent.indeterminate = true;
		parent.checked = false;
	}
	if (parent.parentKey) updateParentIndeterminate(nodes, parent.parentKey);
};
var calculateIndeterminateStates = (nodes) => {
	nodes.forEach((node) => {
		node.indeterminate = false;
	});
	nodes.filter((node) => node.isLeaf).forEach((leaf) => {
		if (leaf.checked && leaf.parentKey) updateParentIndeterminate(nodes, leaf.parentKey);
	});
};
var buildTree = ({ data, expandedKeys = [], selectedKeys = [], checkedKeys = [], parentKey = null, hasLoad, checkStrictly, checkable }) => {
	const result = [];
	const stack = [];
	for (let i = data.length - 1; i >= 0; i--) {
		const node = data[i];
		const isLast = i === data.length - 1;
		stack.push([
			node,
			0,
			parentKey,
			[],
			isLast
		]);
	}
	while (stack.length > 0) {
		const current = stack.pop();
		if (!current) break;
		const [node, level, pNodeKey, visiblePrefixes, isLastChild] = current;
		const key = node.key;
		const hasChildren = !!(node.children && node.children.length > 0);
		let isLeaf = false;
		if (node.isLeaf === true) isLeaf = true;
		else if (hasChildren) isLeaf = false;
		else if (hasLoad) isLeaf = false;
		else isLeaf = true;
		result.push({
			...node,
			level,
			parentKey: pNodeKey,
			loading: false,
			isLeaf,
			expanded: expandedKeys.indexOf(key) > -1,
			selected: selectedKeys.indexOf(key) > -1,
			checked: checkedKeys.indexOf(key) > -1,
			dropping: false,
			isLastChild,
			visiblePrefixes
		});
		if (hasChildren && node.children) {
			const childPrefixes = visiblePrefixes.concat(!isLastChild);
			for (let i = node.children.length - 1; i >= 0; i--) {
				const childIsLast = i === node.children.length - 1;
				stack.push([
					node.children[i],
					level + 1,
					key,
					childPrefixes,
					childIsLast
				]);
			}
		}
	}
	if (checkable) if (!checkStrictly) calculateIndeterminateStates(result);
	else result.forEach((node) => {
		node.indeterminate = false;
	});
	return result;
};
//#endregion
//#region components/tree/index.tsx
function _isSlot(s) {
	return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var Tree = /* @__PURE__ */ defineComponent({
	name: "Tree",
	props: {
		data: Array,
		selectedKeys: Array,
		expandedKeys: Array,
		checkedKeys: Array,
		directory: Boolean,
		checkable: Boolean,
		draggable: Boolean,
		showLine: Boolean,
		showIcon: {
			type: Boolean,
			default: true
		},
		showExtra: {
			type: Boolean,
			default: false
		},
		multiple: {
			type: Boolean,
			default: false
		},
		checkStrictly: Boolean,
		selectAsCheck: Boolean,
		queryKey: String,
		onExpand: { type: Function },
		onCheck: { type: Function },
		onSelect: { type: Function },
		onDragStart: { type: Function },
		onDragEnter: { type: Function },
		onDragLeave: { type: Function },
		onDrop: { type: Function },
		onDragEnd: { type: Function },
		loadData: { type: Function }
	},
	setup(props, { emit, slots }) {
		const defaultData = ref([]);
		const defaultSelectedKeys = ref(props.selectedKeys || []);
		const defaultExpandedKeys = ref(props.expandedKeys || []);
		const defaultCheckedKeys = ref(props.checkedKeys || []);
		const dragNode = reactive({
			key: null,
			data: null
		});
		const hasLoad = !!props.loadData;
		const rebuildTree = () => {
			if (!props.data) {
				defaultData.value = [];
				return;
			}
			defaultData.value = buildTree({
				data: props.data,
				expandedKeys: defaultExpandedKeys.value,
				selectedKeys: defaultSelectedKeys.value,
				checkedKeys: defaultCheckedKeys.value,
				hasLoad,
				checkable: props.checkable,
				checkStrictly: props.checkStrictly
			});
		};
		const findNode = (key) => {
			return defaultData.value.find((item) => item.key === key);
		};
		const handleExpand = (node) => {
			if (node.isLeaf || node.loading) return;
			const key = node.key;
			if (hasLoad && (!node.children || node.children.length === 0) && !node.isLeaf && !node.expanded) {
				node.loading = true;
				props.loadData(node).then(() => {
					nextTick(() => {
						const targetNode = findNode(key) || node;
						targetNode.loading = false;
						targetNode.expanded = true;
						const expandedKeys = defaultExpandedKeys.value.slice();
						if (expandedKeys.indexOf(key) === -1) {
							expandedKeys.push(key);
							defaultExpandedKeys.value = expandedKeys;
							emit("update:expandedKeys", defaultExpandedKeys.value);
						}
						emit("expand", {
							key,
							expanded: true,
							node: targetNode
						});
					});
				}).finally(() => {
					node.loading = false;
				});
				return;
			}
			node.expanded = !node.expanded;
			const expandedKeys = defaultExpandedKeys.value.slice();
			const index = expandedKeys.indexOf(key);
			if (node.expanded) {
				if (index === -1) expandedKeys.push(key);
			} else if (index > -1) expandedKeys.splice(index, 1);
			defaultExpandedKeys.value = expandedKeys;
			emit("update:expandedKeys", defaultExpandedKeys.value);
			emit("expand", {
				key,
				expanded: node.expanded,
				node
			});
		};
		const updateCheckState = {
			toggleNode: (key, checked) => {
				const node = findNode(key);
				if (!node || node.disabled) return;
				node.checked = checked;
				if (!props.checkStrictly) {
					updateCheckState.updateChildren(key, checked);
					updateCheckState.updateParents(key);
				}
				updateCheckState.recalculateIndeterminate();
			},
			updateChildren: (parentKey, checked) => {
				if (props.checkStrictly) return;
				const updateChild = (node) => {
					if (node.disabled) return;
					node.checked = checked;
					if (node.children && node.children.length > 0) defaultData.value.filter((item) => {
						return !!node.children && node.children.some((child) => child.key === item.key);
					}).forEach((childNode) => {
						if (!childNode.disabled) {
							childNode.checked = checked;
							updateChild(childNode);
						}
					});
				};
				const parentNode = findNode(parentKey);
				if (parentNode) updateChild(parentNode);
			},
			updateParents: (childKey) => {
				if (props.checkStrictly) return;
				const updateParent = (nodeKey) => {
					const node = findNode(nodeKey);
					if (!node || !node.parentKey) return;
					const parent = findNode(node.parentKey);
					if (!parent) return;
					const enabledChildren = defaultData.value.filter((item) => {
						return !!parent.children && parent.children.some((child) => child.key === item.key);
					}).filter((item) => !item.disabled);
					if (enabledChildren.length === 0) {
						parent.indeterminate = false;
						parent.checked = false;
						return;
					}
					const checkedCount = enabledChildren.filter((item) => item.checked).length;
					const indeterminateCount = enabledChildren.filter((item) => item.indeterminate).length;
					if (checkedCount === enabledChildren.length) {
						parent.checked = true;
						parent.indeterminate = false;
					} else if (checkedCount > 0 || indeterminateCount > 0) {
						parent.checked = false;
						parent.indeterminate = true;
					} else {
						parent.checked = false;
						parent.indeterminate = false;
					}
					updateParent(parent.key);
				};
				updateParent(childKey);
			},
			recalculateIndeterminate: () => {
				if (props.checkStrictly) {
					defaultData.value.forEach((node) => {
						node.indeterminate = false;
					});
					return;
				}
				defaultData.value.forEach((node) => {
					node.indeterminate = false;
				});
				const nodes = defaultData.value.slice();
				nodes.filter((node) => node.isLeaf && node.checked).forEach((leaf) => {
					if (leaf.parentKey) updateParentIndeterminate(nodes, leaf.parentKey);
				});
				nodes.forEach((node) => {
					const originalNode = findNode(node.key);
					if (originalNode) originalNode.indeterminate = node.indeterminate;
				});
			},
			moveNode: (dragKey, dropKey) => {
				if (dragKey === dropKey || !props.data) return;
				const findRawNode = (nodes, key) => {
					if (!nodes) return null;
					for (let i = 0; i < nodes.length; i++) {
						const node = nodes[i];
						if (node.key === key) return node;
						if (node.children && node.children.length > 0) {
							const found = findRawNode(node.children, key);
							if (found) return found;
						}
					}
					return null;
				};
				const rawDragNode = findRawNode(props.data, dragKey);
				const rawDropNode = findRawNode(props.data, dropKey);
				if (!rawDragNode || !rawDropNode) return;
				const flatDragNode = findNode(dragKey);
				let nodeToMove = null;
				if (flatDragNode && flatDragNode.parentKey) {
					const rawOldParent = findRawNode(props.data, flatDragNode.parentKey);
					if (rawOldParent && rawOldParent.children) {
						let index = -1;
						for (let i = 0; i < rawOldParent.children.length; i++) if (rawOldParent.children[i].key === dragKey) {
							index = i;
							break;
						}
						if (index > -1) nodeToMove = rawOldParent.children.splice(index, 1)[0];
					}
				} else {
					let index = -1;
					for (let i = 0; i < props.data.length; i++) if (props.data[i].key === dragKey) {
						index = i;
						break;
					}
					if (index > -1) nodeToMove = props.data.splice(index, 1)[0];
				}
				if (!nodeToMove) return;
				[
					"level",
					"parentKey",
					"loading",
					"isLeaf",
					"expanded",
					"selected",
					"checked",
					"dropping",
					"indeterminate",
					"isLastChild",
					"visiblePrefixes"
				].forEach((prop) => {
					delete nodeToMove[prop];
				});
				if (!rawDropNode.children) rawDropNode.children = [];
				rawDropNode.children.push(nodeToMove);
				if (defaultExpandedKeys.value.indexOf(dropKey) === -1) defaultExpandedKeys.value.push(dropKey);
				rebuildTree();
				const newDropNode = findNode(dropKey);
				if (newDropNode) {
					newDropNode.expanded = true;
					emit("update:expandedKeys", defaultExpandedKeys.value);
				}
			}
		};
		const toggleCheck = (event, item) => {
			const key = item.key;
			updateCheckState.toggleNode(key, event.checked);
			const checkedNodes = defaultData.value.filter((node) => node.checked).map((node) => node.key);
			defaultCheckedKeys.value = checkedNodes;
			emit("check", item, event.checked, checkedNodes);
		};
		const updateNodeStatus = (key, property, value) => {
			for (let i = 0; i < defaultData.value.length; i++) {
				const item = defaultData.value[i];
				if (item.key === key) {
					item[property] = value;
					break;
				}
			}
		};
		const onSelect = (item) => {
			if (item.disabled) return;
			if (props.selectAsCheck) {
				toggleCheck({ checked: !item.selected }, item);
				return;
			}
			let selectedKeys = defaultSelectedKeys.value.slice();
			const key = item.key;
			const selected = !!item.selected;
			if (!props.multiple) {
				defaultData.value.forEach((node) => {
					if (node.selected) node.selected = false;
				});
				selectedKeys = !selected ? [key] : [];
			} else {
				const index = selectedKeys.indexOf(key);
				if (selected) {
					if (index > -1) selectedKeys.splice(index, 1);
				} else selectedKeys.push(key);
			}
			updateNodeStatus(key, "selected", !selected);
			defaultSelectedKeys.value = selectedKeys;
			emit("update:selectedKeys", selectedKeys);
			emit("select", item);
		};
		const handleDragStart = (e, node) => {
			if (!props.draggable || node.disabled) return;
			if (!node.isLeaf && node.expanded) handleExpand(node);
			dragNode.key = node.key;
			dragNode.data = node;
			if (e.dataTransfer) e.dataTransfer.effectAllowed = "move";
			emit("dragstart", node, e);
		};
		const handleDragOver = (e) => {
			if (!props.draggable) return;
			e.preventDefault();
			if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
		};
		const handleDragEnter = (e, node) => {
			if (!props.draggable || node.disabled || node.key === dragNode.key) return;
			e.preventDefault();
			node.dropping = true;
			emit("dragenter", node, e);
		};
		const handleDragLeave = (e, node) => {
			if (!props.draggable) return;
			node.dropping = false;
			emit("dragleave", node, e);
		};
		const handleDrop = (e, dropNode) => {
			if (!props.draggable || !dragNode.key || dropNode.disabled || dropNode.key === dragNode.key) return;
			e.preventDefault();
			dropNode.dropping = false;
			const currentDragNode = dragNode.data;
			updateCheckState.moveNode(dragNode.key, dropNode.key);
			dragNode.key = null;
			dragNode.data = null;
			emit("drop", {
				dragNode: currentDragNode,
				dropNode
			}, e);
		};
		const handleDragEnd = (e, node) => {
			if (!props.draggable) return;
			dragNode.key = null;
			dragNode.data = null;
			emit("dragend", node, e);
		};
		const renderTreeNode = (item, i) => {
			let key = item.key;
			if (key == null || key === "") {
				key = "n_" + i;
				item.key = key;
			}
			const arrowCommentNode = [];
			if (item.visiblePrefixes && item.visiblePrefixes.length > 0) item.visiblePrefixes.forEach((showLine) => {
				arrowCommentNode.push(createVNode("span", { "class": showLine ? "k-tree-indent-line" : "k-tree-indent-empty" }, null));
			});
			if (!item.isLeaf) {
				const arrowNode = createVNode("span", {
					"class": ["k-tree-arrow", { "k-tree-arrow-open": item.expanded }],
					"onClick": (e) => {
						e.stopPropagation();
						handleExpand(item);
					}
				}, [createVNode(Button, {
					"size": "small",
					"type": "text",
					"loading": item.loading,
					"icon": item.loading ? Loading : props.showLine ? item.expanded ? CircleMinus : CirclePlus : ChevronRight
				}, null)]);
				arrowCommentNode.push(arrowNode);
			} else arrowCommentNode.push(createVNode("span", { "class": "k-tree-arrow-placeholder" }, null));
			const checkNode = props.checkable ? createVNode(checkbox_default, {
				"onChange": (e) => toggleCheck(e, item),
				"checked": item.checked,
				"disabled": item.disabled,
				"indeterminate": item.indeterminate
			}, null) : null;
			const iconNode = createVNode(Icon, {
				"type": item.icon,
				"class": "k-tree-icon"
			}, null);
			const titleProps = {
				class: ["k-tree-title", { "k-tree-title-selected": item.selected }],
				draggable: props.draggable && !item.disabled,
				disabled: item.disabled
			};
			if (props.draggable) {
				titleProps.onDragstart = (e) => handleDragStart(e, item);
				titleProps.onDragover = (e) => handleDragOver(e);
				titleProps.onDragenter = (e) => handleDragEnter(e, item);
				titleProps.onDragleave = (e) => handleDragLeave(e, item);
				titleProps.onDrop = (e) => handleDrop(e, item);
				titleProps.onDragend = (e) => handleDragEnd(e, item);
			}
			if (!props.directory) titleProps.onClick = () => onSelect(item);
			const titleNode = createVNode("span", titleProps, [item.icon && props.showIcon && iconNode, item.title]);
			const itemProps = {
				key: item.key,
				class: ["k-tree-item", {
					"k-tree-item-disabled": item.disabled,
					"k-tree-item-drop": item.dropping && !item.disabled,
					"k-tree-item-extra-hidden": !props.showExtra,
					"k-tree-item-selected": props.directory && item.selected
				}]
			};
			if (props.directory) itemProps.onClick = (e) => {
				e.stopPropagation();
				onSelect(item);
				handleExpand(item);
			};
			return createVNode("div", itemProps, [
				arrowCommentNode,
				checkNode,
				titleNode,
				slots.extra && createVNode("span", { "class": "k-tree-item-extra" }, [slots.extra(item)])
			]);
		};
		rebuildTree();
		watch(() => props.data, () => {
			rebuildTree();
		}, { deep: true });
		watch(() => props.checkedKeys, (nv) => {
			defaultCheckedKeys.value = nv || [];
			rebuildTree();
		});
		watch(() => props.selectedKeys, (nv) => {
			defaultSelectedKeys.value = nv || [];
			rebuildTree();
		});
		watch(() => props.expandedKeys, (nv) => {
			defaultExpandedKeys.value = nv || [];
			rebuildTree();
		});
		return () => {
			let _slot;
			const showLine = props.showLine;
			const directory = props.directory;
			const queryKey = props.queryKey;
			const visibleNodes = defaultData.value.filter((node) => {
				if (node.level === 0) return true;
				if (queryKey && queryKey.trim().length && String(node.title).indexOf(queryKey) === -1) return false;
				let current = node;
				while (current.parentKey) {
					const parent = defaultData.value.find((item) => item.key === current.parentKey);
					if (!parent || !parent.expanded) return false;
					current = parent;
				}
				return true;
			});
			const onProps = getTransitionProp("k-tree-slide");
			return createVNode("div", { "class": ["k-tree", {
				"k-tree-show-line": showLine,
				"k-tree-directory": directory
			}] }, [createVNode("div", { "class": "k-tree-node-list" }, [createVNode(TransitionGroup, mergeProps(onProps, { "tag": "div" }), _isSlot(_slot = visibleNodes.map((item, index) => renderTreeNode(item, index))) ? _slot : { default: () => [_slot] })])]);
		};
	}
});
var TreeSelect = /* @__PURE__ */ defineComponent({
	name: "TreeSelect",
	directives: {
		transfer,
		resize
	},
	props: {
		placeholder: String,
		size: {
			type: String,
			default: "default"
		},
		placement: {
			type: String,
			default: "bottom-left"
		},
		width: Number,
		maxTagCount: Number,
		modelValue: [
			String,
			Number,
			Array
		],
		value: [
			String,
			Number,
			Array
		],
		clearable: {
			type: Boolean,
			default: true
		},
		filterable: Boolean,
		block: Boolean,
		disabled: Boolean,
		multiple: Boolean,
		loading: Boolean,
		bordered: {
			type: Boolean,
			default: true
		},
		showArrow: {
			type: Boolean,
			default: true
		},
		options: Array,
		theme: {
			type: String,
			default: "light"
		},
		emptyText: String,
		icon: [Array],
		shape: String,
		arrowIcon: [Array],
		treeData: Array,
		treeCheckable: Boolean,
		treeShowLine: Boolean,
		treeShowIcon: {
			type: Boolean,
			default: true
		},
		treeCheckStrictly: Boolean,
		treeExpandedKeys: Array,
		treeCheckedKeys: Array,
		treeSelectedKeys: Array,
		treeExpandedAll: Boolean,
		treeLoadData: { type: Function },
		onChange: { type: Function },
		onTreeSelect: { type: Function },
		onSearch: { type: Function },
		onTreeExpand: { type: Function }
	},
	setup(props, { emit, attrs }) {
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return injectedLocale instanceof Object && "value" in injectedLocale ? injectedLocale.value : injectedLocale;
		});
		const visible = ref(false);
		const rendered = ref(false);
		const currentValue = ref(props.multiple ? props.modelValue || props.value || [] : isEmpty(props.modelValue || props.value) ? [] : [props.modelValue || props.value]);
		const queryInputVisible = ref(false);
		const queryKey = ref("");
		const queryInputMirrorRef = ref(null);
		const minWidth = ref("");
		const queryInputFocused = ref(false);
		const queryInputRef = ref(null);
		const hasSearchEvent = !!attrs.onSearch;
		const refPopper = ref(null);
		const transOrigin = ref("bottom");
		const refSelection = ref(null);
		const left = ref(0);
		const top = ref(0);
		const currentPlacement = ref(props.placement);
		const queryInputEventTimer = ref(void 0);
		const hasLoad = !!props.treeLoadData;
		const defaultExpandedKeys = ref(props.treeExpandedKeys || []);
		const defaultCheckedKeys = ref(props.treeCheckedKeys || []);
		const ctxFocused = ref(false);
		watch(() => props.placement, (v) => {
			currentPlacement.value = v;
			updatePosition();
		});
		watch(() => props.modelValue, (v) => {
			currentValue.value = props.multiple ? v || [] : isEmpty(v) ? [] : [v];
			updatePosition();
		});
		onBeforeMount(() => {
			document.removeEventListener("click", outsideClick);
		});
		const updatePosition = () => {
			nextTick(() => {
				minWidth.value = refSelection.value ? refSelection.value.offsetWidth : "";
				setPlacement({
					refSelection,
					refPopper,
					currentPlacement,
					transOrigin,
					top,
					left
				});
			});
		};
		onMounted(() => {
			nextTick(() => {
				minWidth.value = refSelection.value ? refSelection.value.offsetWidth : "";
			});
		});
		const outsideClick = (e) => {
			const target = e.target;
			const ctx = refSelection.value;
			if (refPopper.value && target && !refPopper.value.contains(target) && ctx && !ctx.contains(target)) {
				visible.value = false;
				clearQuery();
			}
		};
		const clearQuery = () => {
			if (props.filterable || hasSearchEvent) setTimeout(() => {
				queryKey.value = "";
				if (queryInputRef.value) {
					queryInputRef.value.value = "";
					queryInputRef.value.style.width = "";
				}
				queryInputVisible.value = false;
			}, 300);
		};
		const searchInput = (e) => {
			const target = e.target;
			queryKey.value = target.value || "";
			nextTick(() => {
				if (target.style && queryInputMirrorRef.value) target.style.width = queryInputMirrorRef.value.offsetWidth + "px";
				updatePosition();
			});
			if (hasSearchEvent) {
				clearTimeout(queryInputEventTimer.value);
				queryInputEventTimer.value = window.setTimeout(() => {
					if (!rendered.value) {
						rendered.value = true;
						document.addEventListener("click", outsideClick);
						nextTick(() => {
							visible.value = true;
							updatePosition();
						});
					} else {
						visible.value = true;
						updatePosition();
					}
					emit("search", e);
				}, 500);
			}
		};
		const emptyClick = () => {
			if (queryInputVisible.value) nextTick(() => {
				if (queryInputRef.value) queryInputRef.value.focus();
				queryInputFocused.value = true;
			});
		};
		const emitValue = () => {
			const result = props.multiple ? currentValue.value : currentValue.value[0] || null;
			emit("update:modelValue", result);
			emit("change", result);
		};
		const removeTag = (e, index) => {
			if (props.disabled) return;
			currentValue.value.splice(index, 1);
			e.stopPropagation();
			emitValue();
			updatePosition();
		};
		const onClear = (e) => {
			currentValue.value = [];
			emitValue();
			clearQuery();
			e.stopPropagation();
		};
		const showQuery = () => {
			if (props.filterable || hasSearchEvent) {
				queryInputVisible.value = true;
				nextTick(() => {
					queryInputRef.value?.focus();
					queryInputFocused.value = true;
				});
			}
		};
		const toggle = (show = false) => {
			if (props.disabled) return;
			if (hasSearchEvent) {
				showQuery();
				return;
			}
			if (!rendered.value) {
				rendered.value = true;
				document.addEventListener("click", outsideClick);
				nextTick(() => {
					visible.value = true;
					updatePosition();
					showQuery();
				});
			} else {
				visible.value = show || !visible.value;
				if (visible.value) {
					updatePosition();
					showQuery();
				} else clearQuery();
			}
		};
		const optionsData = computed(() => {
			return buildTree({
				data: props.treeData || [],
				expandedKeys: defaultExpandedKeys.value,
				selectedKeys: currentValue.value,
				checkedKeys: defaultCheckedKeys.value,
				hasLoad,
				checkStrictly: props.treeCheckStrictly
			});
		});
		const labelText = computed(() => {
			const lookup = {};
			optionsData.value.forEach((item) => {
				lookup[String(item.key)] = item.title || item.key;
			});
			return currentValue.value.map((val) => {
				return lookup[String(val)] || val;
			});
		});
		watch(() => props.treeCheckedKeys, (nv) => {
			defaultCheckedKeys.value = nv || [];
		});
		watch(() => props.treeExpandedKeys, (nv) => {
			defaultExpandedKeys.value = nv || [];
		});
		const onExpand = ({ key, expanded, node }) => {
			const nextKeys = defaultExpandedKeys.value.slice();
			const index = nextKeys.indexOf(key);
			if (index > -1 && !expanded) nextKeys.splice(index, 1);
			else if (index === -1 && expanded) nextKeys.push(key);
			defaultExpandedKeys.value = nextKeys;
			emit("update:treeExpandedKeys", nextKeys.slice());
			emit("treeExpand", {
				key,
				expanded,
				node
			});
		};
		const onCheck = (_checkedNode, _checked, checkedKeys) => {
			currentValue.value = checkedKeys.slice();
			emitValue();
		};
		const onSelect = (item) => {
			const value = item.key;
			const label = item.title;
			let selected = true;
			if (props.multiple) {
				if (currentValue.value.indexOf(value) >= 0) {
					selected = false;
					currentValue.value = currentValue.value.filter((v) => v !== value);
				} else currentValue.value.push(value);
				updatePosition();
				if (hasSearchEvent || props.filterable) {
					if (queryInputRef.value) queryInputRef.value.value = "";
					queryKey.value = "";
					showQuery();
				}
			} else {
				currentValue.value = [value];
				visible.value = false;
				clearQuery();
			}
			emitValue();
			emit("treeSelect", value, label, selected);
		};
		const renderTree = () => {
			return createVNode(Tree, {
				checkable: props.treeCheckable,
				loading: props.loading,
				data: props.treeData,
				multiple: props.multiple || props.treeCheckable,
				checkStrictly: props.treeCheckStrictly,
				expandedKeys: defaultExpandedKeys.value.slice(),
				selectedKeys: currentValue.value.slice(),
				checkedKeys: currentValue.value.slice(),
				selectAsCheck: props.treeCheckable,
				loadData: props.treeLoadData,
				queryKey: queryKey.value,
				onSelect,
				onExpand,
				onCheck
			}, null);
		};
		const queryKeydown = ({ key }) => {
			if (key === "Backspace") {
				if (queryKey.value === "" && props.multiple && currentValue.value.length > 0) {
					currentValue.value = currentValue.value.slice(0, -1);
					emitValue();
					updatePosition();
				}
			}
		};
		const showClear = computed(() => {
			return props.clearable && !props.disabled && !isEmpty(currentValue.value);
		});
		const renderOverlay = () => {
			if (!rendered.value) return null;
			const preCls = "k-tree-select";
			const overlayProps = {
				ref: refPopper,
				style: {
					minWidth: String(minWidth.value ? `${minWidth.value}px` : ""),
					left: `${left.value}px`,
					top: `${top.value}px`,
					transformOrigin: transOrigin.value
				},
				class: [
					"k-tree-select-dropdown",
					"k-scroll",
					{
						"k-tree-select-dropdown-multiple": props.multiple,
						"k-tree-select-dropdown-sm": props.size === "small"
					}
				]
			};
			const loadingNode = createVNode("div", { "class": "k-tree-select-loading" }, [createVNode(Icon, {
				"type": LoaderCircle,
				"spin": true
			}, null), createVNode("span", null, [locale.value?.k?.select?.loading])]);
			return createVNode(Transition, { "name": preCls }, { default: () => [withDirectives(createVNode("div", overlayProps, [props.loading ? loadingNode : props.treeData && props.treeData.length ? renderTree() : createVNode(Empty, {
				"onClick": emptyClick,
				"description": props.emptyText || locale.value?.k?.select?.emptyText
			}, null)]), [[resolveDirective("transfer"), true], [vShow, visible.value]])] });
		};
		return () => {
			let arrowIcon = props.arrowIcon;
			if (arrowIcon === void 0) arrowIcon = ChevronDown;
			const childNode = [];
			const queryNode = withDirectives(createVNode("div", {
				"key": "search",
				"class": "k-tree-select-search-wrap"
			}, [createVNode("input", {
				ref: queryInputRef,
				class: "k-tree-select-search",
				autoComplete: "off",
				onChange: (e) => e.stopPropagation(),
				onKeydown: queryKeydown,
				onInput: searchInput,
				onBlur: () => {
					if (!visible.value) queryInputVisible.value = false;
				}
			}, null), createVNode("span", {
				"class": "k-tree-select-search-mirror",
				"ref": queryInputMirrorRef
			}, [queryKey.value])]), [[vShow, queryInputVisible.value]]);
			const placeholderText = props.placeholder || locale.value?.k?.select?.placeholder;
			const placeNode = placeholderText && isEmpty(labelText.value) && !queryKey.value ? createVNode("div", { "class": "k-tree-select-placeholder" }, [placeholderText]) : null;
			const renderTags = () => {
				let tags = labelText.value.map((label, i) => {
					return createVNode("span", {
						"class": "k-tree-select-tag",
						"key": String(label)
					}, [label, createVNode(Icon, {
						"type": X,
						"onClick": (e) => removeTag(e, i)
					}, null)]);
				});
				if (props.maxTagCount && props.maxTagCount > 0 && tags.length > props.maxTagCount) {
					tags = tags.slice(0, props.maxTagCount);
					tags.push(createVNode("span", { "class": "k-tree-select-tag" }, [
						createTextVNode("+"),
						labelText.value.length - props.maxTagCount,
						createTextVNode("...")
					]));
				}
				return tags;
			};
			const labelsNode = props.multiple ? createVNode("div", { "class": "k-tree-select-labels" }, [renderTags(), queryNode]) : !isEmpty(labelText.value) ? withDirectives(createVNode("div", { "class": "k-tree-select-label" }, [labelText.value[0]]), [[vShow, queryKey.value.length == 0]]) : null;
			if (labelsNode) childNode.push(labelsNode);
			if (placeNode) childNode.push(placeNode);
			if ((props.filterable || hasSearchEvent) && !props.multiple) childNode.push(queryNode);
			const styles = props.width ? { width: `${props.width}px` } : {};
			const arrowNode = !hasSearchEvent && props.showArrow ? createVNode(Icon, {
				"class": "k-tree-select-arrow",
				"type": arrowIcon
			}, null) : null;
			const classes = ["k-tree-select", {
				"k-tree-select-disabled": props.disabled,
				"k-tree-select-block": props.block,
				"k-tree-select-opened": visible.value,
				"k-tree-select-borderless": props.bordered === false,
				"k-tree-select-lg": props.size === "large",
				"k-tree-select-sm": props.size === "small",
				"k-tree-select-light": props.theme === "light",
				"k-tree-select-has-icon": !!props.icon,
				"k-tree-select-circle": props.shape === "circle" && !props.multiple,
				"k-tree-select-square": props.shape == "square",
				"k-tree-select-multiple": props.multiple,
				"k-tree-select-show-search": queryInputFocused.value,
				"k-tree-select-show-tags": props.multiple && !isEmpty(labelText.value),
				"k-tree-select-has-clear": showClear.value
			}];
			const clearNode = showClear.value ? createVNode(Icon, {
				"class": "k-tree-select-clearable",
				"type": CircleX,
				"onClick": onClear
			}, null) : null;
			return withDirectives(createVNode("div", {
				tabindex: "0",
				class: classes,
				style: styles,
				onClick: () => toggle(),
				onFocus: () => ctxFocused.value = true,
				onBlur: () => ctxFocused.value = false,
				ref: refSelection
			}, [
				props.icon ? createVNode(Icon, {
					"type": props.icon,
					"class": "k-tree-select-icon"
				}, null) : null,
				createVNode("div", { "class": "k-tree-select-selection" }, [childNode]),
				createVNode("span", { "class": "k-tree-select-suffix" }, [arrowNode, clearNode]),
				renderOverlay()
			]), [[resolveDirective("resize"), updatePosition]]);
		};
	}
});
var Tag = /* @__PURE__ */ defineComponent({
	name: "Tag",
	props: {
		closeable: Boolean,
		color: String,
		shape: String,
		icon: [String, Array],
		size: {
			type: String,
			default: "small"
		},
		theme: {
			type: String,
			default: "light"
		},
		onClose: { type: Function }
	},
	setup(props, { slots, emit, attrs }) {
		const visible = ref(true);
		const hidden = ref(false);
		const closeHandler = (e) => {
			e.stopPropagation();
			emit("close");
			visible.value = false;
			setTimeout(() => {
				hidden.value = true;
			}, 300);
		};
		return () => {
			const { shape, icon, size, color, closeable } = props;
			const isPresetColor = color && colors$1.includes(color);
			const isCustomColor = color && isColor(color) && !isPresetColor;
			const tagClasses = ["k-tag", {
				"k-tag-sm": size === "small",
				"k-tag-lg": size === "large",
				[`k-tag-${color}`]: isPresetColor,
				"k-tag-circle": shape === "circle",
				"k-tag-square": shape === "square",
				"k-tag-has-color": isCustomColor,
				"k-tag-closeable": closeable,
				"k-tag-hidden": hidden.value,
				"k-tag-light": props.theme === "light"
			}];
			const tagStyle = { backgroundColor: isCustomColor ? color : void 0 };
			const content = [];
			if (icon) content.push(createVNode(Icon, {
				"class": "k-tag-icon",
				"type": icon
			}, null));
			content.push(createVNode("span", { "class": "k-tag-text" }, [slots.default?.()]));
			if (closeable) content.push(createVNode(Icon, {
				"class": "k-tag-close",
				"type": X,
				"onClick": closeHandler
			}, null));
			const tagProps = {
				class: tagClasses,
				style: tagStyle,
				...attrs
			};
			return createVNode(Transition, { "name": "k-tag" }, { default: () => [withDirectives(createVNode("div", tagProps, [content]), [[vShow, visible.value]])] });
		};
	}
});
//#endregion
//#region node_modules/.pnpm/uuid@14.0.0/node_modules/uuid/dist/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) byteToHex.push((i + 256).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
	return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/uuid@14.0.0/node_modules/uuid/dist/rng.js
var rnds8 = new Uint8Array(16);
function rng() {
	return crypto.getRandomValues(rnds8);
}
//#endregion
//#region node_modules/.pnpm/uuid@14.0.0/node_modules/uuid/dist/v4.js
function v4(options, buf, offset) {
	if (!buf && !options && crypto.randomUUID) return crypto.randomUUID();
	return _v4(options, buf, offset);
}
function _v4(options, buf, offset) {
	options = options || {};
	const rnds = options.random ?? options.rng?.() ?? rng();
	if (rnds.length < 16) throw new Error("Random bytes length must be >= 16");
	rnds[6] = rnds[6] & 15 | 64;
	rnds[8] = rnds[8] & 63 | 128;
	if (buf) {
		offset = offset || 0;
		if (offset < 0 || offset + 16 > buf.length) throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
		for (let i = 0; i < 16; ++i) buf[offset + i] = rnds[i];
		return buf;
	}
	return unsafeStringify(rnds);
}
var file_list_default = /* @__PURE__ */ defineComponent({
	name: "UploadFileList",
	props: {
		showUploadList: {
			type: Boolean,
			default: true
		},
		locale: Object,
		type: {
			type: String,
			default: "list",
			validator: (val) => ["list", "picture"].indexOf(val) >= 0
		},
		fileList: {
			type: Array,
			default: () => []
		},
		disabled: Boolean
	},
	setup(props, { emit, slots }) {
		const getPreview = (item) => {
			if (item.preview) return createVNode("img", {
				"src": item.preview,
				"alt": ""
			}, null);
			if (item.url) return createVNode("img", {
				"src": item.url,
				"alt": ""
			}, null);
			return null;
		};
		const handleRemove = (index, item) => {
			if (props.disabled) return;
			emit("remove", {
				index,
				file: item
			});
		};
		return () => {
			const { showUploadList, type, fileList, locale } = props;
			const isPicture = type === "picture";
			if (!showUploadList && !isPicture) return null;
			return showUploadList && !isPicture || isPicture ? createVNode("div", { "class": `k-upload-${isPicture ? "picture" : "file"}-list` }, [fileList.map((item, i) => {
				const statusText = item.status === "success" ? locale?.k.upload.successful : item.errorText || locale?.k.upload.failed;
				return createVNode("div", {
					"class": [`k-upload-file-${type}-item`, `k-upload-file-status-${item.status}`],
					"key": item.uid || i
				}, [
					createVNode("div", { "class": `k-upload-${isPicture ? "picture" : "file"}-preview` }, [getPreview(item) || createVNode(Icon, {
						"type": FileText,
						"strokeWidth": 1,
						"size": 30
					}, null)]),
					createVNode("div", { "class": "k-upload-file-item-info" }, [!isPicture ? createVNode("div", { "class": "k-upload-file-main" }, [createVNode("span", { "class": "k-upload-file-name" }, [item.filename]), createVNode("span", { "class": "k-upload-file-size" }, [item.size])]) : null, item.status !== "waiting" && createVNode("div", { "class": "k-upload-file-status" }, [item.status === "uploading" ? createVNode(Progress, {
						"percent": item.percent,
						"type": `${isPicture ? "circle" : "line"}`,
						"size": "small",
						"showInfo": false,
						"status": "active",
						"strokeWidth": 15
					}, null) : statusText && !isPicture ? createVNode("div", { "class": "k-upload-file-status-text" }, [createVNode(Icon, { "type": item.status == "success" ? CircleCheck : CircleX }, null), statusText]) : null, isPicture && item.status === "error" && createVNode(Tooltip, {
						"title": statusText,
						"placement": "bottom"
					}, { default: () => [createVNode(Icon, { "type": Info }, null)] })])]),
					createVNode(Button, {
						"type": "text",
						"size": "small",
						"icon": X,
						"class": `k-upload-file-${isPicture ? "picture" : "item"}-remove`,
						"onClick": () => handleRemove(i, item)
					}, null)
				]);
			}), isPicture && slots.selector?.()]) : null;
		};
	}
});
var selector_default = /* @__PURE__ */ defineComponent({
	name: "Selector",
	props: {
		disabled: Boolean,
		name: {
			type: String,
			default: "file"
		},
		accept: String,
		multiple: Boolean,
		directory: Boolean,
		limit: Number,
		uploadText: String,
		uploadSubText: String,
		draggable: Boolean,
		locale: Object,
		fileList: Array,
		uploadIcon: [
			String,
			Object,
			Array
		],
		type: {
			type: String,
			default: "list",
			validator: (val) => ["list", "picture"].indexOf(val) >= 0
		}
	},
	setup(props, { emit, slots }) {
		const dragOver = ref(false);
		const uploadFileRef = ref(null);
		const onDragEnter = (e) => {
			dragOver.value = true;
			e.preventDefault();
		};
		const onDragLeave = () => {
			dragOver.value = false;
		};
		const selectFiles = (e) => {
			const files = e.dataTransfer ? e.dataTransfer?.files : e.target.files;
			if (files && files.length > 0) emit("select", files);
			if (e.target) e.target.value = "";
			e.preventDefault();
			dragOver.value = false;
		};
		const onDrop = (e) => {
			selectFiles(e);
		};
		const onDragOver = (e) => {
			e.stopPropagation();
			e.preventDefault();
			dragOver.value = true;
		};
		const triggerSelect = () => {
			if (props.disabled) return;
			uploadFileRef.value?.click();
		};
		return () => {
			const { name, accept, multiple, directory, limit, disabled, uploadText, uploadSubText, draggable, uploadIcon, type, fileList, locale } = props;
			const isPicture = type === "picture";
			const isLimitExceeded = !!(limit && fileList && fileList.length >= limit);
			const showSelector = !isPicture || !isLimitExceeded;
			if (!showSelector) return null;
			let addProps = {
				class: ["k-upload-add", { "k-upload-drag-over": dragOver.value }],
				onDragenter: draggable ? onDragEnter : void 0,
				onDrop: draggable ? onDrop : void 0,
				onDragover: draggable ? onDragOver : void 0,
				onDragleave: draggable ? onDragLeave : void 0,
				onClick: triggerSelect
			};
			return showSelector ? createVNode("div", { "class": "k-upload-select" }, [createVNode("div", addProps, [
				createVNode("input", mergeProps({
					"type": "file",
					"class": "k-upload-file"
				}, { webkitdirectory: directory ? "true" : void 0 }, {
					"name": name,
					"accept": accept,
					"disabled": disabled,
					"multiple": multiple,
					"onChange": selectFiles,
					"ref": uploadFileRef
				}), null),
				isPicture || draggable ? createVNode(Icon, { "type": uploadIcon || Plus }, null) : slots.default?.(),
				(isPicture || draggable && uploadText) && createVNode("span", { "class": "k-upload-text" }, [uploadText]),
				draggable && uploadSubText && createVNode("span", { "class": "k-upload-sub-text" }, [dragOver.value ? locale?.k.upload.releaseToUpload : uploadSubText])
			])]) : null;
		};
	}
});
var Upload = /* @__PURE__ */ defineComponent({
	name: "Upload",
	props: {
		method: {
			type: String,
			default: "post"
		},
		name: {
			type: String,
			default: "file"
		},
		action: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: "list"
		},
		data: {
			type: Object,
			default: () => ({})
		},
		disabled: Boolean,
		directory: Boolean,
		multiple: Boolean,
		accept: String,
		headers: Object,
		showUploadList: {
			type: Boolean,
			default: true
		},
		transformFile: Function,
		fileList: {
			type: Array,
			default: () => []
		},
		autoTrigger: {
			type: Boolean,
			default: true
		},
		limit: Number,
		minSize: Number,
		maxSize: Number,
		uploadText: String,
		uploadSubText: String,
		uploadIcon: Array,
		draggable: Boolean,
		onChange: Function,
		onRemove: Function,
		onSelectFiles: Function,
		onExceed: Function,
		onSizeError: Function
	},
	setup(props, { emit, slots, expose }) {
		const injectedLocale = inject("locale", zh_CN_default);
		const locale = computed(() => {
			return injectedLocale?.value || injectedLocale || zh_CN_default;
		});
		const innerFileList = ref([...props.fileList || []]);
		const uploadTemp = reactive({});
		watch(() => props.fileList, (newVal) => {
			innerFileList.value = [...newVal || []];
		}, { deep: true });
		const formatFileSize = (fileSize) => {
			if (fileSize <= 0) return "0B";
			const k = 1024;
			if (fileSize < k) return fileSize + "B";
			else if (fileSize < k * k) return (fileSize / k).toFixed(2) + "KB";
			else if (fileSize < k * k * k) return (fileSize / (k * k)).toFixed(2) + "MB";
			else return (fileSize / (k * k * k)).toFixed(2) + "GB";
		};
		const triggerUpdate = (fileItem) => {
			emit("update:fileList", innerFileList.value);
			emit("change", {
				file: fileItem,
				fileList: innerFileList.value
			});
		};
		const onSelectFiles = (files) => {
			const { limit, minSize, maxSize } = props;
			Array.from(files).filter((f) => f.name !== ".DS_Store").forEach((file, index) => {
				const currentCount = innerFileList.value.length;
				if (limit && currentCount >= limit) {
					if (index === 0) emit("exceed");
					return;
				}
				const item = {
					uid: v4(),
					filename: file.name,
					size: formatFileSize(file.size),
					status: "waiting",
					percent: 0,
					preview: null
				};
				if (file.type?.startsWith("image/")) {
					const isImageByName = (name = "") => /\.(png|jpe?g|gif|webp|bmp|ico|svg|avif|apng)$/i.test(name);
					if (isImageByName(file.name)) item.preview = window.URL.createObjectURL(file);
				}
				const fileSizeInKB = file.size / 1024;
				if (minSize !== void 0 && minSize >= 0 && fileSizeInKB < minSize || maxSize !== void 0 && maxSize >= 0 && fileSizeInKB > maxSize) {
					item.errorText = locale.value?.k.upload.errorFileSize;
					item.status = "error";
					innerFileList.value.push(item);
					triggerUpdate(item);
					emit("sizeError", {
						file: item,
						fileList: innerFileList.value
					});
					return;
				}
				handleSelect({
					item,
					file
				});
			});
			emit("selectFiles", innerFileList.value);
		};
		const handleSelect = ({ item, file }) => {
			innerFileList.value.push(item);
			const reactiveItem = innerFileList.value.find((x) => x.uid === item.uid);
			if (!reactiveItem) return;
			if (reactiveItem.uid) uploadTemp[reactiveItem.uid] = file;
			triggerUpdate(reactiveItem);
			if (props.autoTrigger) uploadFile(reactiveItem, file);
		};
		const handleRemove = ({ index }) => {
			const item = innerFileList.value[index];
			if (!item) return;
			if (item.xhr) item.xhr.abort();
			innerFileList.value.splice(index, 1);
			item.uid && delete uploadTemp[item.uid];
			if (item.preview) window.URL.revokeObjectURL(item.preview);
			emit("update:fileList", innerFileList.value);
			emit("remove", {
				file: item,
				fileList: innerFileList.value
			});
		};
		const upload = () => {
			if (!props.autoTrigger && !props.disabled) Object.keys(uploadTemp).forEach((uid) => {
				const item = innerFileList.value.find((x) => x.uid === uid);
				const file = uploadTemp[uid];
				if (item && file && item.status === "waiting") uploadFile(item, file);
			});
		};
		const uploadFile = (item, file) => {
			emit("beforeUpload", {
				file: item,
				fileList: innerFileList.value
			});
			if (props.transformFile) props.transformFile(file).then((res) => {
				toUpload(item, res);
			});
			else toUpload(item, file);
		};
		const toUpload = (item, file) => {
			const { action, name, headers, data } = props;
			const formdata = new FormData();
			formdata.append(name, file);
			if (data) Object.keys(data).forEach((k) => formdata.append(k, data[k]));
			const xhr = new XMLHttpRequest();
			item.xhr = xhr;
			xhr.open("post", action);
			if (headers) for (const k in headers) xhr.setRequestHeader(k, headers[k]);
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) if (xhr.status === 200) {
					item.status = "success";
					item.percent = 100;
					try {
						item.response = JSON.parse(xhr.responseText);
					} catch (e) {
						item.response = xhr.responseText;
					}
					item.uid && delete uploadTemp[item.uid];
					triggerUpdate(item);
				} else handleError();
			};
			xhr.upload.onloadstart = () => {
				item.status = "uploading";
				triggerUpdate(item);
			};
			xhr.upload.onprogress = (event) => {
				if (event.lengthComputable) item.percent = event.loaded / event.total * 100;
			};
			const handleError = () => {
				item.status = "error";
				item.uid && delete uploadTemp[item.uid];
				triggerUpdate(item);
			};
			xhr.onerror = handleError;
			xhr.send(formdata);
		};
		expose({ upload });
		return () => {
			const { type, showUploadList, uploadIcon, name, accept, multiple, directory, limit, uploadText, uploadSubText, draggable, disabled } = props;
			const isPicture = type === "picture";
			const SelectorNode = createVNode(selector_default, mergeProps({ "key": "selector" }, {
				type,
				disabled,
				name,
				accept,
				multiple,
				directory,
				limit,
				uploadText,
				uploadSubText,
				draggable,
				fileList: innerFileList.value,
				uploadIcon,
				locale: locale.value,
				onSelect: onSelectFiles
			}), { default: () => slots.default?.() });
			const FileListNode = createVNode(file_list_default, mergeProps({ "key": "filelist" }, {
				type,
				fileList: innerFileList.value,
				showUploadList,
				disabled,
				locale: locale.value,
				onRemove: handleRemove
			}), { selector: () => SelectorNode });
			return createVNode("div", { "class": ["k-upload", {
				"k-upload-disabled": disabled,
				"k-upload-picture": isPicture,
				"k-upload-drag": draggable
			}] }, [!isPicture ? [SelectorNode, FileListNode] : FileListNode]);
		};
	}
});
//#endregion
//#region components/utils/theme.ts
var THEME_KEY = "theme-mode";
var toggleTheme = () => {
	const isDark = localStorage.getItem(THEME_KEY) == "dark";
	const root = document.documentElement;
	if (isDark) {
		root.setAttribute(THEME_KEY, "light");
		localStorage.setItem(THEME_KEY, "light");
	} else {
		root.setAttribute(THEME_KEY, "dark");
		localStorage.setItem(THEME_KEY, "dark");
	}
	return !isDark;
};
var Theme = {
	name: "Theme",
	setThemeMode(event, callback) {
		if (!(document.startViewTransition !== void 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) || !event) {
			const isDark = toggleTheme();
			callback?.(isDark);
		}
		const x = event.clientX;
		const y = event.clientY;
		const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
		let isDark = localStorage.getItem(THEME_KEY) == "dark";
		const transition = document.startViewTransition(async () => {
			isDark = toggleTheme();
			callback?.(isDark);
			await nextTick();
		});
		transition.ready.then(() => {
			const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
			const animate = document.documentElement.animate({ clipPath: !isDark ? clipPath.reverse() : clipPath }, {
				duration: 500,
				easing: "ease-in-out",
				pseudoElement: !isDark ? "::view-transition-old(root)" : "::view-transition-new(root)"
			});
			animate.onfinish = () => {
				transition.skipTransition();
			};
		});
	}
};
//#endregion
//#region components/components.ts
var components_exports = /* @__PURE__ */ __exportAll({
	Affix: () => Affix,
	Alert: () => Alert,
	Anchor: () => Anchor,
	AnchorLink: () => AnchorLink,
	Avatar: () => Avatar,
	AvatarGroup: () => AvatarGroup,
	BackTop: () => BackTop,
	Badge: () => Badge,
	Breadcrumb: () => Breadcrumb,
	BreadcrumbItem: () => BreadcrumbItem,
	Button: () => Button,
	ButtonGroup: () => ButtonGroup,
	Card: () => Card,
	Carousel: () => Carousel,
	CarouselItem: () => CarouselItem,
	Checkbox: () => Checkbox,
	CheckboxGroup: () => CheckboxGroup,
	Col: () => Col,
	Collapse: () => Collapse,
	CollapsePanel: () => CollapsePanel,
	ColorPicker: () => ColorPicker,
	ConfigProvider: () => ConfigProvider,
	Content: () => Content,
	DatePicker: () => DatePicker,
	Descriptions: () => Descriptions,
	DescriptionsItem: () => DescriptionsItem,
	Divider: () => Divider,
	Drawer: () => Drawer,
	Dropdown: () => Dropdown,
	DropdownButton: () => DropdownButton,
	Empty: () => Empty,
	Flex: () => Flex,
	Footer: () => Footer,
	Form: () => Form,
	FormItem: () => FormItem,
	Grid: () => Grid,
	GridItem: () => GridItem,
	Header: () => Header,
	Icon: () => Icon,
	ImageGroup: () => ImageGroup,
	Input: () => Input,
	InputGroup: () => InputGroup,
	InputNumber: () => InputNumber,
	KImage: () => KImage,
	KSwitch: () => Switch,
	Layout: () => Layout,
	Menu: () => Menu,
	MenuDivider: () => MenuDivider,
	MenuGroup: () => MenuGroup,
	MenuItem: () => MenuItem,
	Modal: () => modal_default,
	Option: () => Option,
	Page: () => Page,
	Popconfirm: () => Popconfirm,
	Poptip: () => Poptip,
	Progress: () => Progress,
	Radio: () => Radio,
	RadioButton: () => RadioButton,
	RadioGroup: () => RadioGroup,
	Rate: () => Rate,
	Row: () => Row,
	Select: () => Select,
	Sider: () => Sider,
	Skeleton: () => Skeleton,
	SkeletonAvatar: () => SkeletonAvatar,
	SkeletonButton: () => SkeletonButton,
	SkeletonImage: () => SkeletonImage,
	SkeletonText: () => SkeletonText,
	Slider: () => Slider,
	Space: () => Space,
	Spin: () => Spin,
	StatCard: () => StatCard,
	StatNumber: () => StatNumber,
	SubMenu: () => SubMenu,
	TabPanel: () => TabPanel,
	Table: () => Table,
	Tabs: () => Tabs,
	Tag: () => Tag,
	TextArea: () => TextArea,
	TimeLine: () => TimeLine,
	TimeLineItem: () => TimeLineItem,
	Tooltip: () => Tooltip,
	Tree: () => Tree,
	TreeSelect: () => TreeSelect,
	Upload: () => Upload,
	loading: () => loading,
	message: () => message,
	modal: () => modal,
	notice: () => notice,
	theme: () => Theme
});
//#endregion
//#region components/utils/vue.js
var globalComponents = [
	"message",
	"modal",
	"notice",
	"loading",
	"theme"
];
var installGlobal = (app, component) => {
	if (globalComponents.includes(component.name)) app.config.globalProperties[`$${component.name}`] = component;
};
//#endregion
//#region components/index.ts
var UI = {
	version: void 0,
	lang: {},
	install: (app) => {
		Object.keys(components_exports).forEach((key) => {
			const component = components_exports[key];
			if (globalComponents.includes(key)) installGlobal(app, component);
			else if (!key.startsWith("K")) {
				const kebabName = `K${key}`;
				app.component(kebabName, component);
				app.component(key, component);
			} else app.component(key, component);
		});
	}
};
var install = UI.install;
var version = UI.version;
//#endregion
export { Affix, Alert, Anchor, AnchorLink, Avatar, AvatarGroup, BackTop, Badge, Breadcrumb, BreadcrumbItem, Button, ButtonGroup, Card, Carousel, CarouselItem, Checkbox, CheckboxGroup, Col, Collapse, CollapsePanel, ColorPicker, ConfigProvider, Content, DatePicker, Descriptions, DescriptionsItem, Divider, Drawer, Dropdown, DropdownButton, Empty, Flex, Footer, Form, FormItem, Grid, GridItem, Header, Icon, ImageGroup, Input, InputGroup, InputNumber, KImage, Switch as KSwitch, Layout, Menu, MenuDivider, MenuGroup, MenuItem, modal_default as Modal, Option, Page, Popconfirm, Poptip, Progress, Radio, RadioButton, RadioGroup, Rate, Row, Select, Sider, Skeleton, SkeletonAvatar, SkeletonButton, SkeletonImage, SkeletonText, Slider, Space, Spin, StatCard, StatNumber, SubMenu, TabPanel, Table, Tabs, Tag, TextArea, TimeLine, TimeLineItem, Tooltip, Tree, TreeSelect, Upload, UI as default, install, loading, message, modal, notice, Theme as theme, version };

import Hljs from "highlight.js";
import 'highlight.js/styles/atom-one-light.css'
var vueHljs = {};

vueHljs.install = (Vue) => {
   Vue.directive("high", function (el, binding) {
      let blocks = el.querySelectorAll("pre code");
      Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
   });
};

//CommonJS
if (typeof exports == "object") {
   module.exports = vueHljs;
}
//using Vue.use()
else if (window.Vue) {
   window.VueHljs = vueHljs;
   Vue.use(vueHljs);
}

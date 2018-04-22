import Code from './code'

// import Hljs from "highlight.js";
// import "highlight.js/styles/atom-one-light.css";

var Hljs = require('./highlight');
Hljs.registerLanguage('xml', require('./lang/xml'));
Hljs.registerLanguage('javascript', require('./lang/javascript'));
import "./atom-one-light.css";


const vueHljs = {};

vueHljs.install = (Vue) => {
   Vue.component('Code', Code);
   Vue.directive("high", function (el, binding) {
      let blocks = el.querySelectorAll("pre code");
      Array.prototype.forEach.call(blocks, Hljs.highlightBlock);
   });
};
export default vueHljs

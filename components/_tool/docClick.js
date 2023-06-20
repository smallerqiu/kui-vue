import Vue from 'vue';
export default {
	bind(el, binding) {
    const SSR = Vue && Vue.prototype.$isServer
		let docClick = (e) => {
			if (el.contains(e.target)) {
				return false;
			}
			if (binding.expression) {
				binding.value(e);
			}
		}
		el._docClick = docClick
		!SSR && document.addEventListener('click', docClick)
	},
	unbind(el, bind) {
		document.removeEventListener('click', el._docClick)
		delete el._docClick
	}
}
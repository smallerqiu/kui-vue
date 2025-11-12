import pkg from '../package.json'
import locale from './locale'

import * as components from './components';
import './styles/index.less';

export * from './components';

const UI = {
	version: pkg.version,
	locale: locale.use,
	i18n: locale.i18n,
	lang: {},
	install: function (Vue, opts = {}) {
		if (opts.locale) {
			locale.use(opts.locale);
		}
		if (opts.i18n) {
			locale.setI18n(opts.i18n);
		}

		for (let key in components) {
			const component = components[key]
			if (!key.startsWith('K')) {
				const kebabName = 'k-' + key
					.replace(/([A-Z])/g, '-$1')
					.replace(/^-/, '')
					.toLowerCase()
				Vue.component(kebabName, component);
			}
			Vue.component(key, component);
		}
		Vue.prototype.$message = components.message;
		Vue.prototype.$notice = components.notice;
		Vue.prototype.$modal = components.modal;
		Vue.prototype.$loading = components.loading;
		Vue.prototype.$image = components.KImage;
		Vue.prototype.$theme = components.theme;
	}
}

// auto install
// if (typeof window !== 'undefined' && window.Vue) {
// 	UI.install(window.Vue);
// }

export default UI;
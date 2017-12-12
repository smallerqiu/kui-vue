import Table from './src/table'
import Page from './src/page'
import Button from './src/button'
import Input from './src/input'
import datePicker from './src/datePicker'
import Modal from './src/modal/modal'
import Toast from './src/modal/toast'

import './styles';

const components = {
    Table,
    Page,
    datePicker,
    Button,
    Input,
    Modal,
    Toast
}
const UI = {
    ...components,
    kButton: Button,
    kInput: Input,
    kTable: Table,
}
const install = function(Vue, opts = {}) {
    Object.keys(UI).map((x) => {
        Vue.component(x, UI[x]);
    })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports.default = module.exports = UI;
// export default UI;
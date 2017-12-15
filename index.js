import Table from './src/table'
import Page from './src/page'
import Button from './src/button'
import Input from './src/input'
import datePicker from './src/datePicker'
// import { Modal, Toast } from './src/modal'
import { Row, Col } from './src/grid'
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
    Toast,
    Row, Col
}
const UI = {
    ...components,
    kButton: Button,
    kInput: Input,
    kTable: Table,
}
const install = function (Vue, opts = {}) {
    Object.keys(UI).map((x) => {
        Vue.component(x, UI[x]);
    })
}
UI.install = install
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports.default = module.exports = UI;
// export default UI;
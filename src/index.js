import Table from './table'
import Page from './page'
import { Button, ButtonGroup } from './button'
import Input from './input'
import { Select, Option } from './select'
import Switch from './switch'
import { Checkbox, CheckboxGroup } from './checkbox'
import { Radio, RadioGroup } from './radio'
import DatePicker from './datePicker'
import { Modal, Toast } from './modal'
import { Row, Col } from './grid'
import { Form, FormItem } from './form'
import { TimeLine, TimeLineItem } from './timeline'
import ColorPicker from './colorPicker'
import Icon from './icon'
const pkg = require('../package.json');

import '../styles';

const components = {
    Table,
    Page,
    DatePicker, ColorPicker,
    Button, ButtonGroup,
    Select, Option,
    Input,
    Form,
    FormItem,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Modal,
    Toast,
    Row, Col,
    Icon, TimeLine, TimeLineItem
}
const UI = {
    ...components,
    kForm: Form,
    kButton: Button,
    kInput: Input,
    kSelect: Select,
    kOption: Option,
    kTable: Table,
    kSwitch: Switch,
    kCol: Col,
    Version: pkg.version,
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
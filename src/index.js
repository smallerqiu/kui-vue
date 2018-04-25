import Alert from './components/alert'
import Affix from './components/affix'
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb'
import BackTop from './components/backtop'
import Table from './components/table'
import Card from './components/card'
import Page from './components/page'
import Input from './components/input'
import Switch from './components/switch'
import DatePicker from './components/datePicker'
import Modal from './components/modal'
import ColorPicker from './components/colorPicker'
import Icon from './components/icon'
import Upload from './components/upload'
import Poptip from './components/poptip'
import Tooltip from './components/tooltip'
import Loading from './components/loading'
import Badge from './components/badge'
import Slider from './components/slider'
import { Tabs, TabPane } from './components/tabs'
import { Select, Option } from './components/select'
import { Radio, RadioGroup } from './components/radio'
import { Checkbox, CheckboxGroup } from './components/checkbox'
import { Message, Notice } from './components/message'
import { Button, ButtonGroup } from './components/button'
import { Row, Col } from './components/grid'
import { Form, FormItem } from './components/form'
import { TimeLine, TimeLineItem } from './components/timeline'
import { Menu, MenuGroup, MenuItem, SubMenu } from './components/menu'
import Tag from './components/tag'

const pkg = require('../package.json');

import './styles';

const components = {
    Alert, Affix, BackTop,
    Breadcrumb, BreadcrumbItem,
    Message, Notice,
    Card,
    Table, Badge,
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
    Modal, Poptip,
    Row, Col, Upload,
    Icon, TimeLine, TimeLineItem,
    Tabs, TabPane,
    Menu, MenuGroup, MenuItem, SubMenu,
    Loading, Slider,
    Tag, Tooltip
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
    kMenu: Menu,
    Version: pkg.version,
}
const install = function (Vue, opts = {}) {
    Object.keys(UI).map((x) => {
        Vue.component(x, UI[x]);
    })
    Vue.prototype.$Message = Message;
    Vue.prototype.$Loading = Loading;
    Vue.prototype.$Notice = Notice;
}
UI.install = install
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports.default = module.exports = UI;

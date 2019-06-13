import Alert from './components/alert'
import Affix from './components/affix'
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb'
import { Button, ButtonGroup } from './components/button'
import Badge from './components/badge'
import BackTop from './components/backtop'
import ColorPicker from './components/colorPicker'
import Card from './components/card'
import { Carousel, CarouselItem } from './components/carousel'
import { Collapse, Panel } from './components/collapse'
import { Checkbox, CheckboxGroup } from './components/checkbox'
import DatePicker from './components/datePicker'
import { Dropdown, DropdownItem, DropdownMenu } from './components/dropdown'
import { Form, FormItem } from './components/form'
import ImagePreview from './components/imagePreview'
import Icon from './components/icon'
import Input from './components/input'
import Loading from './components/loading'
import { Layout, Header, Footer, Content, Sider } from './components/layout'
import Modal from './components/modal'
import { Menu, MenuGroup, MenuItem, SubMenu } from './components/menu'
import { Message, Notice } from './components/message'
import Page from './components/page'
import Poptip from './components/poptip'
import { Radio, RadioGroup, RadioButton } from './components/radio'
import Scroll from './components/scroll'
// import Slider from './components/slider'
import Switch from './components/switch'
import { Select, Option } from './components/select'
import { Steps, Step } from './components/steps'
import Table from './components/table'
import Tooltip from './components/tooltip'
import TreeSelect from './components/treeselect'
import { Tabs, TabPane } from './components/tabs'
import { TimeLine, TimeLineItem } from './components/timeline'
import Tree from './components/tree'
import Tag from './components/tag'
import { Row, Col } from './components/grid'
import Upload from './components/upload'

const pkg = require('../package.json');

import './styles';
// import './styles/cover';

const components = {
    Alert, Affix,
    BackTop, Badge, Button, ButtonGroup, Breadcrumb, BreadcrumbItem,
    Card, Carousel, CarouselItem, Collapse, ColorPicker, Checkbox, CheckboxGroup, Col,
    DatePicker, Dropdown, DropdownItem, DropdownMenu,
    Form, FormItem,
    ImagePreview, Input, Icon,
    Loading,
    Menu, MenuGroup, MenuItem, Modal, Message,
    Layout, Header, Footer, Content, Sider,
    Notice,
    Option,
    Page, Poptip, Panel,
    Row, Radio, RadioGroup, RadioButton,
    Scroll, Steps, Step, Select, SubMenu, //Slider,
    Table, Tabs, TabPane, TimeLine, TimeLineItem, Tag, Tooltip, Tree, TreeSelect,
    Upload,
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
    for (let key in UI) {
        Vue.component(key, UI[key]);
    }
    Vue.prototype.$Message = Message;
    Vue.prototype.$Loading = Loading;
    Vue.prototype.$Notice = Notice;
}
UI.install = install
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default UI
import Alert from './alert'
import Affix from './affix'
import Avatar from './avatar'
import { Breadcrumb, BreadcrumbItem } from './breadcrumb'
import Button from './button'
import Badge from './badge'
import BackTop from './backtop'
import ColorPicker from './colorPicker'
import Card from './card'
import { Carousel, CarouselItem } from './carousel'
import { Collapse, Panel } from './collapse'
import { Checkbox, CheckboxGroup } from './checkbox'
import { DatePicker, DateCalendar } from './datePicker'
import Drawer from './drawer'
import Dropdown from './dropdown'
import Divider from './divider'
import Empty from './empty'
import { Form, FormItem } from './form'
import { Image, ImageGroup } from './image'
import Icon from './icon'
import { Input, TextArea } from './input'
import { Layout, Header, Footer, Content, Sider } from './layout'
import Loading from './loading'
import Modal from './modal'
import { Menu, MenuGroup, MenuItem, SubMenu, MenuDivider } from './menu'
import Message from './message'
import Notice from './notice'
import Page from './page'
import Poptip from './poptip'
import Popconfirm from './popconfirm'
import Progress from './progress'
import { Radio, RadioGroup, RadioButton } from './radio'
import Rate from './rate'
import Spin from './spin'
import Space from './space'
import Slider from './slider'
import Switch from './switch'
import { Select, Option } from './select'
import Table from './table'
import Tooltip from './tooltip'
import { Tabs, TabPane } from './tabs'
import { TimeLine, TimeLineItem } from './timeline'
import { Tree, TreeNode } from './tree'
import Tag from './tag'
import { Row, Col } from './grid'
import Upload from './upload'

import { version } from '../package.json'



import locale from './locale'

const components = {
	Affix,
	Alert,
	Avatar,
	BackTop,
	Badge,
	Breadcrumb, BreadcrumbItem,
	Button, ButtonGroup: Button.Group,
	Card,
	Carousel, CarouselItem,
	Checkbox, CheckboxGroup,
	Collapse, Panel,
	ColorPicker,
	Col, Row,
	DatePicker, DateCalendar,
	Dropdown,
	Drawer,
	Divider,
	Empty,
	Form, FormItem,
	Icon,
	ImageGroup,
	Input, TextArea,
	Menu, MenuGroup, MenuItem, MenuDivider, SubMenu,
	Modal,
	Message,
	Layout, Header, Footer, Content, Sider,
	Loading,
	Notice,
	Page,
	Poptip,
	Popconfirm,
	Progress,
	Radio, RadioGroup, RadioButton,
	Rate,
	Space,
	Spin,
	Slider,
	Select, Option,
	Table,
	Tabs, TabPane,
	TimeLine, TimeLineItem,
	Tag,
	Tooltip,
	Tree, TreeNode,
	Upload
}
const UI = {
	...components,
	kForm: Form,
	kButton: Button,
	kInput: Input,
	kTextarea: TextArea,
	kHeader: Header,
	kFooter: Footer,
	kContent: Content,
	kSider: Sider,
	kSelect: Select,
	kOption: Option,
	kTable: Table,
	kSwitch: Switch,
	kImage: Image,
	kCol: Col,
	kMenu: Menu,
	Version: version,
	install: function (Vue, opts = {}) {
		locale.use(opts.locale);
		locale.i18n(opts.i18n);

		for (let key in UI) {
			Vue.component(key, UI[key]);
		}
		Vue.prototype.$Message = Message;
		Vue.prototype.$Notice = Notice;
		Vue.prototype.$Modal = Modal;
		Vue.prototype.$Loading = Loading;
		Vue.prototype.$Image = Image;
	},
	locale: locale.use,
	i18n: locale.i18n,
	lang: {}
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
	UI.install(window.Vue);
}
export default UI
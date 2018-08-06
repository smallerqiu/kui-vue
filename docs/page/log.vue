<template>
  <div class="demo-logs">
    <h2>更新日志</h2>
    <TimeLine>
      <TimeLineItem >
        <h3>1.8.9<span> 2018-8-6 </span></h3>
        <p>把原来的辣眼睛的logo 重新设计了，换上新的，组件风格统一了圆角4px</p>
        <p><code>Icon</code>库升级到4.3.0，使用更加规范，有效区分了ios和安卓粗细线条</p>
        <p><code>Input</code>新增icon-align属性控制图标显示位置</p>
        <p>修复<code>Select</code>组件几处bug</p>
        <p>修复<code>Menu</code>组件初始化的问题，新增open-name 属性，可以默认展开子菜单</p>
        <p>文档可以搜索组件，去掉了左右分裂滚动，因为会导致很多奇葩的问题</p>
      </TimeLineItem>
      <TimeLineItem >
        <h3>1.8.8<span> 2018-7-13 </span></h3>
        <p><code>Table</code>文字处理完善</p>
        <p><code>Menu</code>完善在特定情况下显示不全的问题</p>
        <p><code>Table</code>组件新增text-max-length 属性，统一处理文字限制</p>
      </TimeLineItem>
      <TimeLineItem  icon="ios-bug" color="red">
        <h3>1.8.6<span> 2018-7-11 </span></h3>
        <p><code>Upload</code>组件新增beforeUpload，afterUpload事件</p>
        <p>修复<code>DatePicker</code>组件特定情况下换行的问题</p>
        <p>修复<code>Page</code>组件打印错误的ios-bug</p>
        <p>修复<code>Table</code>组件数据为空时全选的问题</p>
        <p>修复下拉transfer多组件干扰的问题</p>
        <p>组件内部调用隔离，用于兼容第三方UI组件库</p>
        <p>修复一些问题</p>
        <p>修复一些问题</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-ribbon" color="green">
        <h3>1.8.0<span> 2018-7-6 </span></h3>
        <p>KUI for React1.0 发布了</p>
        <p>重写了部分组件，优化和修复一些问题</p>
        <p>修复<code>poptip</code>等一系列组件特定情况下无法销毁的问题</p>
        <p>修复<code>Table</code>全选反选的问题</p>
        <p>新增布局组件<code>Layout</code>等一些列组件和子组件</p>
        <p>修复transfer钩子无法销毁的问题</p>
      </TimeLineItem>
      <TimeLineItem >
        <h3>1.7.9<span> 2018-6-15 </span></h3>
        <p><code>Select</code>无法赋值，和搜索的问题</p>
        <p>修复<code>TreeSelect</code>lable 无法更改的ios-bug</p>
        <p><code>Table</code>组件新增表头固定</p>
        <p>修复<code>Tooltip</code>组件显示隐藏的问题</p>
        <p>优化transfer性能问题</p>
      </TimeLineItem>
      <TimeLineItem >
        <h3>1.7.7<span> 2018-6-12 </span></h3>
        <p>修复<code>Tree，TreeSelect</code>异步加载的问题</p>
        <p><code>Tooltip</code>组件新增<code>breaked</code>属性，文字过长强制换行</p>
        <p><code>Table</code>组件新增<code>overflow，tooltip</code>属性</p>
      </TimeLineItem>
      <TimeLineItem >
        <h3>1.7.6<span> 2018-6-12 </span></h3>
        <p>新增<code>TreeSelect</code>组件</p>
        <p>优化一些细节，规范一些组件名称和函数定义</p>
        <p>修复文档部分示例展示错误</p>
        <p>打包编译升级webpack4</p>
      </TimeLineItem>
      <TimeLineItem >
        <h3>1.7.5<span> 2018-5-24 </span></h3>
        <p>优化<code>Poptip</code>等一些列组件的定位卡顿问题</p>
        <p>优化<code>Menu</code>手风琴模式的展示卡顿问题</p>
        <p>文档加入了自定义滚动容器 @海豚xxx，优化移动端阅读</p>
        <p>优化一些细节</p>
      </TimeLineItem>
      <TimeLineItem >
        <h3>1.7.3<span> 2018-5-17 </span></h3>
        <p>修复IE9+<code>Tree</code>组件选中的问题</p>
        <p>优化<code>datePicker</code>更加友好展示</p>
        <p>修复<code>Tabs</code>子集增加删除宽度错误的ios-bug</p>
        <p>优化一些其他的1像素的问题</p>
      </TimeLineItem>
      <TimeLineItem icon="ribbon">
        <h3>1.7.0<span> 2018-5-10 </span></h3>
        <p>修复<code>Select</code>，<code>dataPicker</code><code>colorPicker</code>等组件在Modal组件内时，下拉位置偏移的问题</p>
        <p><code>emitter</code>加入了滚动监听</p>
        <p>修复下拉组件在浏览器的一些兼容性问题</p>
        <p>修复IE9+浏览器中的花式ios-bug</p>
      </TimeLineItem>
      <TimeLineItem >
        <h3>1.6.9<span> 2018-5-9 </span></h3>
        <p>重写了<code>Page</code>组件，保持队形</p>
        <p>新增<code>Tabs</code>，<code>TabPane</code>组件</p>
        <p>优化<code>Modal</code><code>Select</code>组件展示1像素的问题</p>
        <p>修复文档表单展示问题</p>
      </TimeLineItem>
      <TimeLineItem >
        <h3>1.6.8<span> 2018-5-8 </span></h3>
        <p>修复Form验证的问题</p>
        <p>修复Select选中的问题</p>
        <p>修复Modal图标展示的问题</p>
        <p>完善<code>tree</code>组件选中的问题</p>
        <p>修复一部分组件mini模式怪异展示</p>
        <p>完善<code>Modal</code>显示滚动条的问题</p>
        <p><code>checkbox</code>组件新增<code>indeterminate</code>，协助全选展示</p>
        <p>修复Select无法选中的问题，修复poptip confirm模式怪异问题</p>
        <p>修复表单自定义类型验证</p>
        <p>新增<code>Carousel</code>，<code>Collapse</code>，<code>Tree</code>，<code>Steps</code>等组件</p>
        <p>优化表单验证 双向排列验证提示</p>
      </TimeLineItem>
      <TimeLineItem >
        <h3>1.6.1<span> 2018-4-25 </span></h3>
        <p>新增<code>Tooltip</code>，<code>Tag</code>，<code>Breadcrumb</code>，<code>BackTop</code>，<code>Affix</code>，<code>Card</code>等组件</p>
        <p>修复<code>RadioGroup</code>无法选中的ios-bug</p>
        <p>修复<code>Select</code>无法赋值的ios-bug</p>
        <p>完善<code>Poptip</code>子元素有<code>margin</code>时无法对齐的问题</p>
        <p>完善表单文档</p>
      </TimeLineItem>
      <TimeLineItem icon="trophy" color="green">
        <h3>1.6<span> 2018-4-22 </span></h3>
        <p>为了有效区分和名称，框架更名为<code>kui-vue</code></p>
        <p>统一组件的事件回调</p>
        <p>重写了<code>Checkbox</code>，<code>Radio</code>，<code>Select</code><code>Menu</code>等一系列组件</p>
        <p>完成了<code>Form</code>表单验证 <a href="/form">#体验</a></p>
        <p>完善文档，分离代码示例和模版</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-bug" color="red">
        <h3>1.5
          <span> 2018-3-27 </span>
        </h3>
        <p>新增<code>Menu</code>,<code>MenuGroup</code>,<code>MenuItem</code>,<code>SubMenu</code> 组件
          <a href="/menu">#体验</a>
        </p>
        <p>优化了文档的可读性</p>
        <p>优化<code>Select</code>组件，可清空状态</p>
        <p>优化<code>datePicker</code>在safari下展示怪异模式</p>
        <p>修复<code>Page</code>组件跳转翻页的问题以及按钮字符换行的问题</p>
        <p>优化<code>Loading</code>组件展示半透明模式</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-bug" color="red">
        <h3>1.4.9
          <span> 2018-3-20 </span>
        </h3>
        <p>修复<code>colorPicker</code>组件，当页面滚动时找不到对象的错误</p>
        <p>优化了文档页面首次载入过慢的问题
          <a href="https://www.chuchur.com/article/vue-code-optimization" target="_blank">#解决方案</a>
        </p>
      </TimeLineItem>
      <TimeLineItem icon="ios-bug" color="red">
        <h3>1.4.8
          <span> 2018-2-2 </span>
        </h3>
        <p>新增<code>Loading</code>组件
          <a href="/loading">#体验</a>
        </p>
        <p>新增<code>Badge</code>组件
          <a href="/badge">#体验</a>
        </p>
        <p>优化文档，加入了代码展示部分 展开折叠</p>
        <p>修复了文档<code>Table</code>部分，日期下拉导致出现滚动条，部分被隐藏</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-bug" color="red">
        <h3>1.4.6
          <span> 2018-1-31 </span>
        </h3>
        <p>加入了全局的<code>document click，scroll</code>指令优化显示一系列组件的下拉显示将更加人性化</p>
        <p>修复了<code>DatePicker</code>组件层级显示问题</p>
        <p>优化了<code>Page</code>组件在<code>mini</code>模式显示的问题</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-bug" color="red">
        <h3>1.4.5
          <span> 2018-1-29 </span>
        </h3>
        <p>修复<code>Table</code>组件 <code>bordered</code>显示问题</p>
        <p>优化<code>Table</code>组件 无数据时文字显示问题，优化表格表头字体大小</p>
        <p>新增<code>Table</code>组件 <code>mini</code>显示模式
          <a href="/table">#体检</a>
        </p>
        <p>优化<code>Select</code>,<code>DataPicker等组件mini</code>模式 <code>icon</code>显示问题</p>
        <p>优化<code>Select</code>,<code>DataPicker</code>,<code>colorPicker</code>等组件点击隐藏的问题</p>
        <p>新增<code>Input</code> 组件可以设置右侧图标
          <a href="/input">#体检</a>
        </p>
        <p>新增<code>Button</code> 组件可以设置图标
          <a href="/button">#体检</a>
        </p>
        <p>新增<code>Poptip</code> 组件
          <a href="/poptip">#体检</a>
        </p>
        <p><code>DatePicker</code>，<code>colorPicker</code>，<code>Select</code>等下拉组件新增<code>transifer</code>属性，下拉组件可以append到body尾部，解决了父级overflow遮挡的问题
          <a href="/table">#体检</a>
        </p>
        <p>增加了几个钩子，优化了一些显示细节</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-bug" color="red">
        <h3>1.4.3
          <span> 2018-1-22 </span>
        </h3>
        <p>修复多个下拉组件显示隐藏的问题</p>
        <p>修复<code>Modal</code>组件冒泡显示移除的问题</p>
        <p>修复<code>Message</code>组件显示隐藏警告提示的问题</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-cloud-upload" color="orange">
        <h3>1.4.2
          <span> 2018-1-22 </span>
        </h3>
        <p>废弃一些组件</p>
        <p>新增<code>Modal</code> <code>Toast</code>模式，优化动画流畅性，加入点击Mask，和ESC键关闭弹框。
          <a href="/modal">#体验</a>
        </p>
        <p>解决<code>Message</code>，<code>Notice</code>组件动画的流畅性。
          <a href="/message">#体验Msessage</a>，
          <a href="/notice">#体验Notice</a>，
          <a href="https://www.chuchur.com/article/vue-v-for-transition" target="_blank">#解决方案</a>
        </p>
      </TimeLineItem>
      <TimeLineItem icon="ios-ribbon" color="green">
        <h3>1.4
          <span> 2018-1-19 </span>
        </h3>
        <p>修复<code>DataPicker</code>时间选择完整性</p>
        <p>修复完善文档多处文字错误</p>
        <p>新增Upload组件。
          <a href="https://www.chuchur.com/article/ajax-upload-download" target="_blank">#解决方案</a>
        </p>
        <p>新增<code>Select</code>,<code>DatePicker</code>,<code>mini</code>属性，可以使用小尺寸</p>
        <p>新增<code>DatePicker</code> width 属性，可以自定义宽度</p>
        <p>完善文档说明</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-bug" color="red">
        <h3>1.3.7
          <span> 2018-1-17 </span>
        </h3>
        <p>修复<code>Select</code>组件无法赋值的问题</p>
        <p>修复<code>Input</code>组件默认参数定义出错的问题</p>
        <p>清理<code>Table</code>组件打印字符</p>
        <p>完善文档说明</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-cloud-upload">
        <h3>1.3.6
          <span> 2018-1-15 </span>
        </h3>
        <p>新增<code>Alert</code>组件</p>
        <p>新增<code>Message</code>组件</p>
        <p>新增<code>Notice</code>组件</p>
        <p><code>Table</code>组件新增文字对其属性</p>
        <p><code>Modal</code>组件新增可拖动属性</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-bug" color="red">
        <h3>1.3.5
          <span> 2018-1-10 </span>
        </h3>
        <p>修复<code>Select</code>组件数据动态改变后无法选中的ios-bug</p>
        <p>修复<code>Option</code>组件<code>label</code>赋值的问题</p>
        <p>增加<code>Option</code>组件</p>
        <p>修改<code>Select</code>组件数据结构</p>
        <p>修复文档多处错误,完善文档数据结构</p>
        <p>修复<code>render</code>模式下无法渲染的问题</p>
        <p>修复表格组件冲突问题</p>
        <p>完善文档</p>
        <p>新增<code>icon</code>组件</p>
        <p>新增<code>TimeLine</code></p>
        <p>完善文档</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-bug" color="red">
        <h3>1.2.8
          <span> 2018-1-3 </span>
        </h3>
        <p>修复部分组件在禁用状态下显示异常的问题</p>
        <p>新增<code>Form</code>组件</p>
        <p>修复<code>colorPicker</code>组件内存泄漏问题</p>
        <p>部分组件加入禁用状态</p>
        <p>完善文档</p>
      </TimeLineItem>
      <TimeLineItem>
        <h3>1.2.6
          <span> 2017-12-19</span>
        </h3>
        <p>修复下拉组件绑定数据的问题</p>
        <p>完善表单问题</p>
        <p>新增<code>color</code>组件</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-cloud-upload">
        <h3>1.2
          <span>2017-12-19</span>
        </h3>
        <p>新增<code>Switch</code> 组件</p>
        <p>完善<code>Select</code>组件</p>
        <p>完善<code>Page</code>分页组件</p>
        <p>完善<code>Input</code>组件 </p>
        <p>修复在ie下表格无法选中的ios-bug</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-cloud-upload">
        <h3>1.1
          <span> 2017-12-18</span>
        </h3>
        <p>新增<code>Radio</code>组件</p>
        <p>新增<code>Checkbox</code>组件</p>
        <p>修复<code>Table</code> 组件更新数据更新问题</p>
        <p>新增<code>Select</code> 组件</p>
        <p>完善<code>Modal</code> 回调问题</p>
        <p>日期控件新增回调</p>
        <p>新增<code>Row</code>，<code>Col</code> 组件</p>
        <p>完成<code>Table</code>，<code>Page</code>，<code>Button</code>，<code>DatePicker</code>等组件</p>
      </TimeLineItem>
      <TimeLineItem icon="ios-flask">
        <h3> 1. 0.0 <span>2017-12-10</span> </h3>
        <p>着手开发</p>
      </TimeLineItem>
    </TimeLine>
  </div>
</template>

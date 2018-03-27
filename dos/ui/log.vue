<template>
  <div class="demo-logs">
    <h2>更新日志</h2>
    <TimeLine>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.5
          <span> 2018-3-27 </span>
        </h3>
        <p>新增Menu,MenuGroup,MenuItem,SubMenu 组件<a href="/menu">#体验</a></p>
        <p>优化了文档的可读性</p>
        <p>优化Select组件，可清空状态</p>
        <p>优化datePicker在safari下展示怪异模式</p>
        <p>修复Page组件跳转翻页的问题以及按钮字符换行的问题</p>
        <p>优化Loading组件展示半透明模式</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.4.9
          <span> 2018-3-20 </span>
        </h3>
        <p>修复ColorPicker组件，当页面滚动时找不到对象的错误</p>
        <p>优化了文档页面首次载入过慢的问题<a href="https://www.chuchur.com/article/vue-code-optimization" target="_blank">#解决方案</a></p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.4.8
          <span> 2018-2-2 </span>
        </h3>
        <p>新增Loading组件<a href="/loading">#体验</a></p>
        <p>新增Badge组件<a href="/badge">#体验</a></p>
        <p>优化文档，加入了代码展示部分 展开折叠</p>
        <p>修复了文档Table部分，日期下拉导致出现滚动条，部分被隐藏</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.4.6
          <span> 2018-1-31 </span>
        </h3>
        <p>加入了全局的document click，scroll指令优化显示一系列组件的下拉显示将更加人性化</p>
        <p>修复了DatePicker组件层级显示问题</p>
        <p>优化了Page组件在mini模式显示的问题</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.4.5
          <span> 2018-1-29 </span>
        </h3>
        <p>修复Table组件 border显示问题</p>
        <p>优化Table组件 无数据时文字显示问题，优化表格表头字体大小</p>
        <p>新增Table组件 mini显示模式
          <a href="/table">#体检</a>
        </p>
        <p>优化Select,DataPicker等组件mini模式 Icon显示问题</p>
        <p>优化Select,DataPicker,colorPicker等组件点击隐藏的问题</p>
        <p>新增Input 组件可以设置右侧图标
          <a href="/input">#体检</a>
        </p>
        <p>新增Button 组件可以设置图标
          <a href="/button">#体检</a>
        </p>
        <p>新增Poptip 组件
          <a href="/toptip">#体检</a>
        </p>
        <p>DatePicker，ColorPicker，Select等下拉组件新增transifer属性，下拉组件可以append到body尾部，解决了父级overflow遮挡的问题
          <a href="/table">#体检</a>
        </p>
        <p>增加了几个钩子，优化了一些显示细节</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.4.3
          <span> 2018-1-22 </span>
        </h3>
        <p>修复多个下拉组件显示隐藏的问题</p>
        <p>修复Modal组件冒泡显示移除的问题</p>
        <p>修复Message组件显示隐藏警告提示的问题</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload" Color="orange">
        <h3>1.4.2
          <span> 2018-1-22 </span>
        </h3>
        <p>废弃一些组件</p>
        <p>新增Modal Toast模式，优化动画流畅性，加入点击Mask，和ESC键关闭弹框。
          <a href="/modal">#体验</a>
        </p>
        <p>解决Message，Notice组件动画的流畅性。
          <a href="/message">#体验Msessage</a>，
          <a href="/notice">#体验Notice</a>，
          <a href="https://www.chuchur.com/article/vue-v-for-transition" target="_blank">#解决方案</a>
        </p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.4
          <span> 2018-1-19 </span>
        </h3>
        <p>修复DataPicker时间选择完整性</p>
        <p>修复完善文档多处文字错误</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.3.9
          <span> 2018-1-18 </span>
        </h3>
        <p>新增Upload组件。
          <a href="https://www.chuchur.com/article/ajax-upload-download" target="_blank">#解决方案</a>
        </p>
      </TimeLineItem>
      <TimeLineItem>
        <h3>1.3.8
          <span> 2018-1-17 </span>
        </h3>
        <p>新增Select,DatePicker,mini属性，可以使用小尺寸</p>
        <p>新增DatePicker width 属性，可以自定义宽度</p>
        <p>完善文档说明</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.3.7
          <span> 2018-1-17 </span>
        </h3>
        <p>修复Select组件无法赋值的问题</p>
        <p>修复Input组件默认参数定义出错的问题</p>
        <p>清理Table组件打印字符</p>
        <p>完善文档说明</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.3.6
          <span> 2018-1-15 </span>
        </h3>
        <p>新增Alert组件</p>
        <p>新增Message组件</p>
        <p>新增Notice组件</p>
        <p>Table组件新增文字对其属性</p>
        <p>Modal组件新增可拖动属性</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.3.5
          <span> 2018-1-10 </span>
        </h3>
        <p>修复Select组件数据动态改变后无法选中的bug</p>
        <p>修复Option组件label赋值的问题</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.3.4
          <span> 2018-1-9 </span>
        </h3>
        <p>增加Option组件</p>
        <p>修改Select组件数据结构</p>
        <p>修复文档多处错误,完善文档数据结构</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.3.1
          <span> 2018-1-7 </span>
        </h3>
        <p>修复render模式下无法渲染的问题</p>
        <p>修复表格组件冲突问题</p>
        <p>完善文档</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.3
          <span> 2018-1-5 </span>
        </h3>
        <p>新增Icon组件</p>
        <p>新增TimeLine</p>
        <p>完善文档</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.2.8
          <span> 2018-1-3 </span>
        </h3>
        <p>修复部分组件在禁用状态下显示异常的问题</p>
        <p>新增表单组件</p>
        <p>修复颜色组件内存泄漏问题</p>
        <p>部分组件加入禁用状态</p>
        <p>完善文档</p>
      </TimeLineItem>
      <TimeLineItem>
        <h3>1.2.6
          <span> 2017-12-19</span>
        </h3>
        <p>修复下拉组件绑定数据的问题</p>
        <p>完善表单问题</p>
        <p>新增Color组件</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.2
          <span>2017-12-19</span>
        </h3>
        <p>新增Switch 组件</p>
        <p>完善Select组件</p>
        <p>完善Page分页组件</p>
        <p>完善Input组件 </p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.1.9
          <span> 2017-12-18</span>
        </h3>
        <p>修复在ie下表格无法选中的bug</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.2
          <span> 2017-12-18</span>
        </h3>
        <p>新增Radio组件</p>
        <p>新增Checkbox组件</p>
        <p>修复Table 组件更新数据更新问题</p>
        <p>新增Select 组件</p>
        <p>完善Modal 回调问题</p>
      </TimeLineItem>
      <TimeLineItem>
        <h3> 1.1.4
          <span>2017-12-15</span>
        </h3>
        <p>日期控件新增回调</p>
        <p>新增Row，Col 组件</p>
      </TimeLineItem>
      <TimeLineItem>
        <h3>1.2
          <span>2017-12-12</span>
        </h3>
        <p>完成Table，Page，Button，DatePicker等组件</p>
      </TimeLineItem>
      <TimeLineItem Icon="erlenmeyer-flask">
        <h3> 1.0.0
          <span>2017-12-10</span>
        </h3>
        <p>着手开发</p>
      </TimeLineItem>
    </TimeLine>

  </div>
</template>

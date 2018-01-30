<template>
  <div class="demo-logs">
    <h2>更新日志</h2>
    <TimeLine>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.0.45
          <span> 2018-1-29 </span>
        </h3>
        <p>修复Table组件 border显示问题</p>
        <p>优化Table组件 无数据时文字显示问题，优化表格表头字体大小</p>
        <p>新增Table组件 mini显示模式</p>
        <p>优化Select,DataPicker等组件mini模式 Icon显示问题</p>
        <p>优化Select,DataPicker,colorPicker等组件点击隐藏的问题</p>
        <p>新增Input 组件可以设置右侧图标<a href="/input">#体检</a></p>
        <p>新增Button 组件可以设置图标<a href="/button">#体检</a></p>
        <p>新增Poptip 组件 <a href="/toptip">#体检</a></p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.0.43
          <span> 2018-1-22 </span>
        </h3>
        <p>修复多个下拉组件显示隐藏的问题</p>
        <p>修复Modal组件冒泡显示移除的问题</p>
        <p>修复Message组件显示隐藏警告提示的问题</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload" Color="orange">
        <h3>1.0.42
          <span> 2018-1-22 </span>
        </h3>
        <p>废弃一些组件</p>
        <p>新增Modal Toast模式，优化动画流畅性，加入点击Mask，和ESC键关闭弹框。<a href="/modal">#体验</a></p>
        <p>解决Message，Notice组件动画的流畅性。<a href="/message">#体验Msessage</a>，<a href="/notice">#体验Notice</a>，<a href="https://www.chuchur.com/article/vue-v-for-transition" target="_blank">#解决方案</a></p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.0.40
          <span> 2018-1-19 </span>
        </h3>
        <p>修复DataPicker时间选择完整性</p>
        <p>修复完善文档多处文字错误</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.0.39
          <span> 2018-1-18 </span>
        </h3>
        <p>新增Upload组件。<a href="https://www.chuchur.com/article/ajax-upload-download" target="_blank">#解决方案</a></p>
      </TimeLineItem>
      <TimeLineItem>
        <h3>1.0.38
          <span> 2018-1-17 </span>
        </h3>
        <p>新增Select,DatePicker,mini属性，可以使用小尺寸</p>
        <p>新增DatePicker width 属性，可以自定义宽度</p>
        <p>完善文档说明</p>
      </TimeLineItem>
      <TimeLineItem  Icon="bug" Color="red">
        <h3>1.0.37
          <span> 2018-1-17 </span>
        </h3>
        <p>修复Select组件无法赋值的问题</p>
        <p>修复Input组件默认参数定义出错的问题</p>
        <p>清理Table组件打印字符</p>
        <p>完善文档说明</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.0.36
          <span> 2018-1-15 </span>
        </h3>
        <p>新增Alert组件</p>
        <p>新增Message组件</p>
        <p>新增Notice组件</p>
        <p>Table组件新增文字对其属性</p>
        <p>Modal组件新增可拖动属性</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.0.35
          <span> 2018-1-10 </span>
        </h3>
        <p>修复Select组件数据动态改变后无法选中的bug</p>
        <p>修复Option组件label赋值的问题</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.0.34
          <span> 2018-1-9 </span>
        </h3>
        <p>增加Option组件</p>
        <p>修改Select组件数据结构</p>
        <p>修复文档多处错误,完善文档数据结构</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.0.31
          <span> 2018-1-7 </span>
        </h3>
        <p>修复render模式下无法渲染的问题</p>
        <p>修复表格组件冲突问题</p>
        <p>完善文档</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.0.30
          <span> 2018-1-5 </span>
        </h3>
        <p>新增Icon组件</p>
        <p>新增TimeLine</p>
        <p>完善文档</p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.0.28
          <span> 2018-1-3 </span>
        </h3>
        <p>修复部分组件在禁用状态下显示异常的问题</p>
        <p>新增表单组件</p>
        <p>修复颜色组件内存泄漏问题</p>
        <p>部分组件加入禁用状态</p>
        <p>完善文档</p>
      </TimeLineItem>
      <TimeLineItem>
        <h3>1.0.26
          <span> 2017-12-19</span>
        </h3>
        <p>修复下拉组件绑定数据的问题</p>
        <p>完善表单问题</p>
        <p>新增Color组件</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.0.20
          <span>2017-12-19</span>
        </h3>
        <p>新增Switch 组件</p>
        <p>完善Select组件</p>
        <p>完善Page分页组件</p>
        <p>完善Input组件 </p>
      </TimeLineItem>
      <TimeLineItem Icon="bug" Color="red">
        <h3>1.0.19
          <span> 2017-12-18</span>
        </h3>
        <p>修复在ie下表格无法选中的bug</p>
      </TimeLineItem>
      <TimeLineItem Icon="ios-cloud-upload">
        <h3>1.0.20
          <span> 2017-12-18</span>
        </h3>
        <p>新增Radio组件</p>
        <p>新增Checkbox组件</p>
        <p>修复Table 组件更新数据更新问题</p>
        <p>新增Select 组件</p>
        <p>完善Modal 回调问题</p>
      </TimeLineItem>
      <TimeLineItem>
        <h3> 1.0.14
          <span>2017-12-15</span>
        </h3>
        <p>日期控件新增回调</p>
        <p>新增Row，Col 组件</p>
      </TimeLineItem>
      <TimeLineItem>
        <h3>1.0.2
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

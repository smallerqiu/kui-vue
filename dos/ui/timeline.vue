<template>
   <div>
      <h2>TimeLine 时间轴</h2>
      <h3>基础</h3>
      <TimeLine>
         <TimeLineItem>发布1.0版本</TimeLineItem>
         <TimeLineItem>发布1.0版本</TimeLineItem>
         <TimeLineItem>发布1.0版本</TimeLineItem>
      </TimeLine>
      <Code lang="xml html">{{demo1}}</Code>
      <h3>图标</h3>
      <TimeLine>
         <TimeLineItem Icon="ribbon-b">发布2.0版本</TimeLineItem>
         <TimeLineItem Icon="bug">修复bug</TimeLineItem>
         <TimeLineItem>发布1.0版本</TimeLineItem>
      </TimeLine>
      <Code lang="xml html">{{demo2}}</Code>
      <h3>颜色</h3>
      <TimeLine>
         <TimeLineItem Icon="ribbon-b" Color="#cba302">发布2.0版本</TimeLineItem>
         <TimeLineItem Icon="bug" Color="red">修复bug</TimeLineItem>
         <TimeLineItem>发布1.0版本</TimeLineItem>
      </TimeLine>
      <Code lang="xml html">{{demo3}}</Code>
      <h3>TimeLineItem props</h3>
      <div class="table-border">
         <table>
            <tr>
               <th>属性</th>
               <th>说明</th>
               <th>类型</th>
               <th>默认值</th>
            </tr>
            <tr>
               <td>Icon</td>
               <td>时间轴item 图标</td>
               <td>String</td>
               <td>-</td>
            </tr>
            <tr>
               <td>Color</td>
               <td>时间轴item 颜色</td>
               <td>String</td>
               <td>String</td>
            </tr>
         </table>
      </div>
   </div>
</template>
<script>
export default {
  data() {
    return {
      demo1: `<TimeLine>
   <TimeLineItem>发布1.0版本</TimeLineItem>
   <TimeLineItem>发布1.0版本</TimeLineItem>
   <TimeLineItem>发布1.0版本</TimeLineItem>
</TimeLine>`,
      demo2: `<TimeLine>
   <TimeLineItem Icon="ribbon-b">发布2.0版本</TimeLineItem>
   <TimeLineItem Icon="bug">修复bug</TimeLineItem>
   <TimeLineItem>发布1.0版本</TimeLineItem>
</TimeLine>`,
      demo3: `<TimeLine>
   <TimeLineItem Icon="ribbon-b" Color="#cba302">发布2.0版本</TimeLineItem>
   <TimeLineItem Icon="bug" Color="red">修复bug</TimeLineItem>
   <TimeLineItem>发布1.0版本</TimeLineItem>
</TimeLine>`
    };
  }
};
</script>


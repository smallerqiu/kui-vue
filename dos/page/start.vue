<template>
  <div>
    <h2>快速上手</h2>
    <h3>引入 KUI</h3>
    <p>一般在 webpack 入口页面 main.js 中如下配置：</p>
    <Code lang="js javascript">{{code.webpack}}</Code>
    <h3>使用规范</h3>
    <p>在非 template/render 模式下（例如使用 CDN 引用时），组件名要分隔，例如
      <code>Buton</code> 必须要写成
      <code>k-button</code>。</li>
      <p>以下组件，在非 template/render 模式下，需要加前缀 k-</p>
      <ul class="k-item-list">
        <li>Table :
          <code>k-table</code>
        </li>
        <li>Button:
          <code>k-button</code>
        </li>
        <li>Input :
          <code>k-input</code>
        </li>
        <li>Switch:
          <code>k-switch</code>
        </li>
        <li>Select:
          <code>k-select</code>
        </li>
        <li>Option:
          <code>k-option</code>
        </li>
        <li>Col:
          <code>k-col</code>
        </li>
      </ul>
      <p>以下组件，在非 template/render 模式下，组件名要分隔</p>
      <ul class="k-item-list">
        <li>ButtonGroup :
          <code>button-group</code>
        </li>
        <li>CheckboxGroup:
          <code>checkbox-group</code>
        </li>
        <li>FormItem :
          <code>form-item</code>
        </li>
        <li>DatePicker :
          <code>date-picker</code>
        </li>
        <li>ColorPicker :
          <code>color-picker</code>
        </li>
        <li>TimeLine :
          <code>time-line</code>
        </li>
        <li>TimeLineItem :
          <code>time-line-item</code>
        </li>
      </ul>
  </div>
</template>
<script>
import code from '../code/start'
export default {
  data() {
    return {
      code: code
    };
  }
};
</script>

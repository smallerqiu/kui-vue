# 暗色模式
3.2.5+ 版本 重新设计了 浅色模式和暗色模式, 可以更方便的切换, 并且支持局部范围使用暗色模式

## 使用

3.2.5之后的版本暗色模式的切换是通过给 根元素节点 添加属性 [theme-mode='dark'] 来实现的 ,下面是例子:

```js
const body = document.documentElement;
if (body.hasAttribute('theme-mode')) {
    body.removeAttribute('theme-mode');
} else {
    body.setAttribute('theme-mode', 'dark');
}
```
## 主题跟随系统

macOS 下的系统主题可以通过 系统偏好设置 -> 通用 -> 外观 来配置。

在浏览器 (Chrome >= 76, Safari >= 12.1) 中可以通过媒体查询来设定:

```css
.day   { background: #eee; color: black; }
.night { background: #333; color: white; }

@media (prefers-color-scheme: dark) {
  .day.dark-scheme   { background:  #333; color: white; }
  .night.dark-scheme { background: black; color:  #ddd; }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme   { background: white; color:  #555; }
  .night.light-scheme { background:  #eee; color: black; }
}
```

当然也可以通过JS 来监听 :

```js
const monitor = window.matchMedia('(prefers-color-scheme: dark)');

function matchMode(e) {
    const body = document.documentElement;
    if (e.matches) {
        if (!body.hasAttribute('theme-mode')) {
            body.setAttribute('theme-mode', 'dark');
        }
    } else {
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
        }
    }
}

// monitor.addListener(matchMode); //旧的api已经废弃 
monitor.addEventListener('change',matchMode)
```

# 局部模式

在顶级元素上添加 'theme-mode=dark' 或者 'theme-mode=light' 属性 ，这个元素下的组件会使用对应模式的颜色变量。

>局部暗色/亮色对弹出层不生效


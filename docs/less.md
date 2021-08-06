```js
image-size("file.jpg"); // => 100px 50px
image-width("file.jpg"); // => 100px
image-height("file.jpg"); // => 50px

// 单位转换
convert(9s, "ms"); // => 9000ms
convert(14cm, mm); // => 140mm
convert(8, mm); // => 8

// 列表
@list: "A", "B", C, "D";
length(@list); // => 4
extract(@list, 3); // => C

// 数学

ceil(2.1); // => 3 向上取整
floor(2.1); // => 2 向下取整
percentage(.3); // => 30% 转百分比
round(1.67, 1); // => 1.7 四舍五入，保留一位小数点
sqrt(25cm); // => 5cm 取平方根
abs(-5cm); // => 5cm 取绝对值
pi(); // => 3.141592653589793 圆周率π
max(3px, 42px, 1px, 16px); // => 42px
min(3px, 42px, 1px, 16px); // => 1px

// 字符串

replace("Hi Tom?", "Tom", "Jack"); // => "Hi Jack"

// 判断类型

isnumber(56px); // => true 是否含数字
isstring("string"); // => true
iscolor(#ff0); // => true
iscolor(blue); // => true
iskeyword(keyword); // => true
isurl(url(...)); // => true
ispixel(56px); // => true
isem(7.8em); // => true
ispercentage(7.8%); // => true
isunit(4rem, rem); // => true 是否为指定单位
isruleset(@rules); // => true 是否为变量

// 颜色操作

//增加饱和度
saturate(color, 20%)
//减少饱和度
desaturate(color, 20%)
//增加亮度
lighten(color, 20%)
//减少亮度
darken(color, 20%)
//降低透明度
fadein(color, 10%)
//增加透明度
fadeout(color, 10%)
//设置绝对不透明度(覆盖原透明度)
fade(color, 20%)
//旋转色调角度
spin(color, 10)
//将两种颜色混合，不透明度包括在计算中。
mix(#f00, #00f, 50%)
//与白色混合
tint(#007fff, 50%)
//与黑色混合
shade(#007fff, 50%)
//灰度，移除饱和度
greyscale(color)
//返回对比度最大的颜色
contrast(color1, color2)

// 颜色混合

//每个RGB 通道相乘，然后除以255
multiply(color1, color2);
//与 multiply 相反
screen(color1, color2);
//使之更浅或更暗
overlay(color1, color2)
//避免太亮或太暗
softlight(color1, color2)
//与overlay相同，但颜色互换
hardlight(color1, color2)
//计算每个通道(RGB)基础上的两种颜色的平均值
average(color1, color2)
```
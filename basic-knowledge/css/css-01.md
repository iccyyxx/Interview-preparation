#### 盒模型介绍

CSS3 中的盒模型有以下两种：**标准盒模型**、**IE（替代）盒模型**。

两种盒子模型都是由 `content + padding + border + margin` 构成，其大小都是由 `content + padding + border` 决定的，但是盒子内容宽/高度（即 `width/height`）的计算范围根据盒模型的不同会有所不同：

- 标准盒模型：只包含 `content` 。
- IE（替代）盒模型：`content + padding + border` 。

可以通过 `box-sizing` 来改变元素的盒模型：

- `box-sizing: content-box` ：标准盒模型（默认值）。
- `box-sizing: border-box` ：IE（替代）盒模型。

## CSS选择器有哪些？哪些属性可以继承？

### CSS选择器：

属性选择器、类选择器、标签选择器、id 选择器、

相邻选择器、子选择器、后代选择器、通配符选择器、伪类选择器

**可继承的属性：**

font-size, font-family, color

**不可继承的样式：**

border, padding, margin, width, height

**优先级（就近原则）：**

!important > [ id > class > tag ]  
!important 比内联优先级高

## 优先级计算

元素选择符： 1  
class选择符： 10  
id选择符：100  
元素标签：1000

1. !important声明的样式优先级最高，如果冲突再进行计算。
2. 如果优先级相同，则选择最后出现的样式。
3. 继承得到的样式的优先级最低。

## 如何居中div？

### 垂直居中

1. `margin: 0 auto;`

### 水平居中

## 如何居中一个浮动元素？

## 如何让绝对定位的div居中？

### 

## 伪类和伪属性区别



## CSS3

### CSS3新增的伪类

p:first-of-type 选择属于其父元素的首个元素  
p:last-of-type 选择属于其父元素的最后元素  
p:only-of-type 选择属于其父元素唯一的元素  
p:only-child 选择属于其父元素的唯一子元素  
p:nth-child(2) 选择属于其父元素的第二个子元素  
:enabled :disabled 表单控件的禁用状态。  
:checked 单选框或复选框被选中。



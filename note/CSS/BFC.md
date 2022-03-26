# 块级格式化上下文：block formatting context

BFC规定了内部的Block Box如何布局。  
定位方案：

1. 内部的Box会在**垂直方向**上一个接一个放置。
2. Box垂直方向的距离由margin决定，属于**同一个BFC**的两个相邻Box的**margin会发生重叠**。
3. 每个元素的margin box 的左边，与包含块border box的左边相接触。
4. **BFC的区域不会与float box重叠**。
5. BFC是页面上的一个隔离的独立容器，容器里面的**子元素不会影响到外面的元素。**
6. **计算BFC的高度时，浮动元素也会参与计算**。

满足下列条件之一就可触发BFC

1. **根元素，即html**
2. **float的值不为none（默认）**
3. **overflow的值不为visible（默认）**
4. **display的值为inline-block、table-cell、table-caption**
5. **position的值为absolute或fixed***

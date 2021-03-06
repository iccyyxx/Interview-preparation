## CSS选择器：

属性选择器、类选择器、标签选择器、id 选择器、

相邻选择器、子选择器、后代选择器、通配符选择器、伪类选择器

**可继承的属性：**

font-size, font-family, color

**不可继承的样式：**

border, padding, margin, width, height

**优先级（就近原则）：**

!important > [ id > class > tag ]  
!important 比内联优先级高

## 选择器的权重和优先级

CSS 选择器有很多，不同的选择器的权重和优先级不一样，对于一个元素，如果存在多个选择器，那么就需要根据权重来计算其优先级。

权重分为四级，分别是：

1. 代表内联样式，如`style="xxx"`，权值为 1000；
2. 代表 ID 选择器，如`#content`，权值为 100；
3. 代表类、伪类和属性选择器，如`.content`、`:hover`、`[attribute]`，权值为 10；
4. 代表元素选择器和伪元素选择器，如`div`、`p`，权值为 1。

**需要注意的是：通用选择器（*）、子选择器（>）和相邻同胞选择器（+）并不在这四个等级中，所以他们的权值都为 0**。 权重值大的选择器其优先级也高，相同权重的优先级又遵循后定义覆盖前面定义的情况。

- !important声明的样式优先级最高，如果冲突再进行计算。
- 如果优先级相同，则选择最后出现的样式。
- 继承得到的样式的优先级最低。

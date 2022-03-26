# 与 console 相关

### console.dir(object)

**非标准:** 该特性是非标准的，请尽量不要在生产环境中使用它！

在控制台中显示指定JavaScript对象的属性，并通过类似文件树样式的交互列表显示。

[参数](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/dir#%E5%8F%82%E6%95%B0 "Permalink to 参数")

`object`

打印出该对象的所有属性和属性值.

## Console.assert()

如果断言为false，则将一个错误消息写入控制台。如果断言是 `true`，没有任何反应。

`console.assert()`方法在Node.js中的实现和浏览器中可用的`console.assert()`方法实现是不同的。在浏览器中当`console.assert()`方法接受到一个值为假断言的时候，会向控制台输出传入的内容，但是并不会中断代码的执行，而在Node.js v10.0.0之前，一个值为假的断言也将会导致一个`AssertionError`被抛出，使得代码执行被打断。v10.0.0修复了此差异，所以现在`console.assert()`在Node 和浏览器中执行行为相同 。

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/assert#%E5%8F%82%E6%95%B0 "Permalink to 参数")

`assertion`

一个布尔表达式。如果assertion为假，消息将会被输出到控制台之中。

`obj1` ... `objN`

被用来输出的Javascript对象列表，最后输出的字符串是各个对象依次拼接的结果。

`msg`

一个包含零个或多个子串的Javascript字符串。

`subst1` ... `substN`

各个消息作为字串的Javascript对象。这个参数可以让你能够控制输出的格式。

### 案例

```javascript
console.assert(true, "true是不会打印的")
console.assert(false, "可以可以")
console.assert(false, { "很遗憾的告诉你": "这里出错啦" })
```

<img title="" src="./img/basic.jpg" alt="">

## console.clear();

**非标准:** 该特性是非标准的，请尽量不要在生产环境中使用它！

清空控制台.

控制台显示的内容将会被一些信息替换，比如‘Console was cleared’这样的信息。

## Console.count()

**非标准:** 该特性是非标准的，请尽量不要在生产环境中使用它！

输出 count() 被调用的次数。此函数接受一个可选参数 `label。`

如果有 `label`，此函数输出为那个指定的 `label 和` count() 被调用的次数。

如果 `label` 被忽略，此函数输出 count() 在其所处位置上被调用的次数。

### [语法](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/count#%E8%AF%AD%E6%B3%95 "Permalink to 语法")

console.count([label]);

### [参数](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/count#%E5%8F%82%E6%95%B0 "Permalink to 参数")

`label`

    字符串，如果有，count() 输出此给定的 `label 及其`被调用的次数。

## console.log

### [概述](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/log#summary "Permalink to 概述")

向 Web 控制台输出一条消息。

## 输出文本到控制台

console 对象中较多使用的主要有四个方法 [`console.log()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/log), [`console.info()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/info), [`console.warn()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/warn), 和[`console.error()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/error)。每一个结果在日志中都有不同的样式，可以使用浏览器控制台的日志筛选功能筛选出感兴趣的日志信息。

#### 使用字符串替换

可以在传递给 console 的方法的时候使用下面的字符以期进行参数的替换。

| Substitution string | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| `%o` or `%O`        | 打印 JavaScript 对象。在审阅器点击对象名字可展开更多对象的信息。                                      |
| `%d` or `%i`        | 打印整数。支持数字格式化。例如, `console.log("Foo %.2d", 1.1)` 会输出有先导 0 的两位有效数字: `Foo 01`。 |
| `%s`                | 打印字符串。                                                                      |
| `%f`                | 打印浮点数。支持格式化，比如 `console.log("Foo %.2f", 1.1)` 会输出两位小数: `Foo 1.10`           |

#### 为控制台定义样式

可以使用 `%c` 为打印内容定义样式：

```
console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
```

##### [堆栈跟踪](https://developer.mozilla.org/zh-CN/docs/Web/API/Console#%E5%A0%86%E6%A0%88%E8%B7%9F%E8%B8%AA "Permalink to 堆栈跟踪")

控制台也支持输出堆栈，其将会显示到调用 [`console.trace()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/trace) 的点的调用路径。如下所示：

```
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

控制台的输出：

<img title="" src="./img/basic-1.jpg" alt="">

## Console.error()

向 Web 控制台输出一条错误消息。

**Note:** 此特性在 [Web Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API) 中可用

## console.trace

[`console`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console) 的 **`trace()` 方法**向 [Web控制台](https://developer.mozilla.org/zh-cn/docs/Tools/Web_Console "Web Console") 输出一个堆栈跟踪。

**Note:** 此特性在 [Web Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API) 中可用

在页面[`console`](https://developer.mozilla.org/zh-CN/docs/Web/API/Console)文档中查看[堆栈跟踪](https://developer.mozilla.org/zh-CN/docs/Web/API/Console#%e5%a0%86%e6%a0%88%e8%b7%9f%e8%b8%aa "zh-cn/DOM/console#Stack_traces")的详细介绍和示例。

### [语法](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/trace#syntax "Permalink to 语法")

console.trace( [...any, ...data ]);

## Console.warn()

向 Web 控制台输出一条警告信息。

# Map

**`Map`** 对象保存键值对，并且能够记住键的原始插入顺序

一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个  [`for...of`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环在每次迭代后会返回一个形式为[key，value]的数组。

## [构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map#构造函数)

- [`Map()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)

  创建 `Map` 对象

  

## [属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map#属性)

- `Map.length`

  属性 length 的值为 0 。 想要计算一个`Map` 中的条目数量， 使用 [`Map.prototype.size`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/size).

- [`get Map[@@species\]`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/@@species)

  本构造函数用于创建派生对象。

- [`Map.prototype` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

  表示 `Map` 构造器的原型。 允许添加属性从而应用于所有的 `Map` 对象。

## [`Map` 实例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map#map_实例)

所有的 `Map` 对象实例都会继承 [`Map.prototype` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)。
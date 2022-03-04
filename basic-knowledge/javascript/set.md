# set
- 使用`new Set()`构造函数创建 Set 对象，可以存储任意类型的数据；
- `Set`对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会**出现一次**，即 Set 中的元素是唯一的。
- `NaN`和`undefined`都可以被存储在Set 中

## [Constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#constructor)

- [`Set()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/Set)

  创建一个新的`Set`对象。

## [实例属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#properties)

- [`Set.prototype.size`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/size)

  返回 Set 对象中的值的个数

## [实例方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set#实例方法)

- [`Set.prototype.add(value)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/add)

  在`Set`对象尾部添加一个元素。返回该`Set`对象。

- [`Set.prototype.clear()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/clear)

  移除`Set`对象内的所有元素。

- [`Set.prototype.delete(value)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/delete)

  移除`Set`中与这个值相等的元素，返回`Set.prototype.has(value)`在这个操作前会返回的值（即如果该元素存在，返回`true`，否则返回`false`）。`Set.prototype.has(value)`在此后会返回`false`。

- [`Set.prototype.entries()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/entries)

  返回一个新的迭代器对象，该对象包含`Set`对象中的按插入顺序排列的所有元素的值的`[value, value]`数组。为了使这个方法和`Map`对象保持相似， 每个值的键和值相等。

- [`Set.prototype.forEach(*callbackFn*[, *thisArg*\])`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach)

  按照插入顺序，为Set对象中的每一个值调用一次callBackFn。如果提供了`thisArg`参数，回调中的`this`会是这个参数。

- [`Set.prototype.has(*value*)`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/has)

  返回一个布尔值，表示该值在`Set`中存在与否。

- [`Set.prototype.keys()` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values)

  与**`values()`**方法相同，返回一个新的迭代器对象，该对象包含`Set`对象中的按插入顺序排列的所有元素的值。

- [`Set.prototype.values()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/values)

  返回一个新的迭代器对象，该对象包含`Set`对象中的按插入顺序排列的所有元素的值。

- [`Set.prototype[@@iterator]()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator)

  返回一个新的迭代器对象，该对象包含`Set`对象中的按插入顺序排列的所有元素的值。

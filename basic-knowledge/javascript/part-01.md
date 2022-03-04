# 数据类型

### JavaScript有哪些数据类型，它们的区别？

基础数据类型 5 种：undefined、Boolean、String、Nunber、Null

引用类型：Object

ES6 新增：BingInt、Symbol

这些数据可以分为原始数据类型和引用数据类型：

- 栈：原始数据类型（Undefined、Null、Boolean、Number、String）
- 堆：引用数据类型（对象、数组和函数）

两种类型的区别在于**存储位置的不同：**

- 原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
- 引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

### 数据类型检测的方式有哪些

**（1）typeof**

其中数组、对象、null都会被判断为object，其他判断都正确。

**（2）instanceof**

`instanceof`可以正确判断对象的类型，**其内部运行机制是判断在其原型链中能否找到该类型的原型**。

`instanceof`**只能正确判断引用数据类型**，而不能判断基本数据类型。`instanceof` 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性。

**（3） constructor**

`constructor`有两个作用，一是判断数据的类型，二是对象实例通过 `constrcutor` 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，`constructor`就不能用来判断数据类型了

**（4）Object.prototype.toString.call()**

`Object.prototype.toString.call()` 使用 Object 对象的原型方法 toString 来判断数据类型

## 判断数组的方式有哪些

```javascript
// 判断数组的方式
var arr = []
console.log(arr instanceof Array);
console.log(Object.prototype.toString.call(arr).slice[8, -1] == "Array")
console.log(Array.isArray(arr));
console.log(Array.prototype.isPrototypeOf(arr));
```

> 注意：
> 
> console.log(Object.prototype.toString.call(arr)) 
> 
> 会输出"[object Array]"，因此需要字符串切割再加以判断

## null 和 undefined 的区别

undefined 代表的含义是**未定义**，null 代表的含义是**空对象**。一般变量声明了但还没有定义的时候会返回 undefined，null主要用于赋值给一些可能会返回对象的变量，作为初始化。

当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false。

```javascript
console.log(null == undefined);   //true
console.log(null === undefined);  //false
```

## typeof null 的结果是什么，为什么？

typeof null 的结果是Object。

在 JavaScript 第一个版本中，所有值都存储在 32 位的单元中，每个单元包含一个小的 **类型标签(1-3 bits)** 以及当前要存储值的真实数据。类型标签存储在每个单元的低位中，共有五种数据类型：

```javascript
000: object   - 当前存储的数据指向一个对象。
  1: int      - 当前存储的数据是一个 31 位的有符号整数。
010: double   - 当前存储的数据指向一个双精度的浮点数。
100: string   - 当前存储的数据指向一个字符串。
110: boolean  - 当前存储的数据是布尔值。
```

如果最低位是 1，则类型标签标志位的长度只有一位；如果最低位是 0，则类型标签标志位的长度占三位，为存储其他四种数据类型提供了额外两个 bit 的长度。

有两种特殊数据类型：

- undefined的值是 (-2)30(一个超出整数范围的数字)；
- null 的值是机器码 NULL 指针(null 指针的值全是 0)

那也就是说null的类型标签也是000，和Object的类型标签一样，所以会被判定为Object。

##### intanceof 操作符的实现原理及实现

instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

```javascript
var intan = function (left, right) {
        var proto = Object.getPrototypeOf(left);
        while (true) {
          if (!proto) return false;
          if (proto === right.prototype) return true;
          proto = Object.getPrototypeOf(proto);
        }
      }
```

以上方法如果left为非对象类型，则会被强制转换为对象类型，例如

`intan(1,Number)`会为true

## 为什么0.1+0.2 ! == 0.3，如何让其相等

因为计算机时通过二进制数的方式存储数据的，二进制的 0.1 和 0.2 为循环数，相加结果也为循环数，则没法等于0.3

相等的方法可以是四舍五入的`toFixed(num)`,也可以比较他们的精读差小于`Number.EPSILON`

## typeof NaN 的结果是什么？

NaN 指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。

```javascript
typeof NaN; // "number"
复制代码
```

NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN !== NaN 为 true。

## isNaN 和 Number.isNaN 函数的区别？

- 函数 isNaN 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断。
- 函数 Number.isNaN 会首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。

## Object.is() 与比较操作符 “===”、“==” 的区别？

- 使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
- 使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
- 使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。

# 原型和原型链

## 答题思路

| // 原型的理解: 原型什么时候产生,原型有哪些,原型的作用,继承的实现,面向的编程思想,面向过程,有了数据的共享,还有数据的缓存--->闭包---->预解析--->作用域--->执行上下文环境--- |
| --- | --- |
|     | // 原型的应用---->Vue中的事件总线----->Vue中的组件的通信的各种方式--- |
|     | // Vue.prototype.$bus = new Vue() |
|     | // Vue.prototype.$API = API ----->任意的组件中都可以直接调用api方法,调用接口,发送请求 |

## 原型是什么时候产生的

执行函数定义的时候,prototype显示原型就创建出来了,由于函数本身也是对象(实例对象),里面的隐式原型__proto__也产生了

## 原型的分类

显示原型 protorype 存在于函数中，隐式原型`_protp_`是在实例对象产生的

## 原型的作用

- 实现数据的共享，节省内存空间

- 实现继承

## 继承的实现

## 面对的编程思想

- 面对对象

- 面对过程

## 原型的引用

# constructor

# call

# null 为什么使用 typeof 时会返回 object

#### 宏任务和微任务(event loop) promise属于哪个

- 事件循环
- 任务队列
- 宏任务
- 微任务

[js中的宏任务与微任务](https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F78113300 "https://zhuanlan.zhihu.com/p/78113300")

# 事件循环

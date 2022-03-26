# 第一章 精华

# 第二章 语法

## 数字 Number

1. JavaScript 只有**单一的数字类型**

2. 在内部被表示为**64位的浮点数**

3. 没有分离出整数类型（1===1.0），避免了**短整数溢出的问题**

4. 值`NaN`是一个数字，表示一个不能产生正常结果的运算结果

5. `NaN` 不等于任何值（包括 `Nan`），可以用`isNaN(number)`检测`NaN`

## ？短整数溢出的问题

## 字符串 Strings

- `\`是转义字符

- 所有字符都是16位的

- 没有字符类型，只有String.

- 字符串类型是不可变的。一旦被创建便无法改变。 

## 语句

- 被当为 `False`的值有：`false、null、undefined、‘’、0、NaN`

- `for in`会枚举一个对象的所有属性名（键名）

- `object.hasOwnPrototype(varible)`可以判断属性名是该对象的成员还是从原型链找到的。
  
  ```javascript
  function A() {
    this.a = 1;
  }
  function B() {
    this.b = 2;
  }
  B.prototype = new A();
  let obj = new B();
  for (i in obj) {
    console.log(i, obj.hasOwnProperty(i));
  }
  //b true
  //a false
  ```

- <img title="" src="file:///D:/Github/Interview-preparation/image/try.jpg" alt="">

- `typeof` 返回的值有`number、string、boolean、undefined、function、object`

- 运算优先级
  
  <img title="" src="file:///D:/Github/Interview-preparation/image/priority.jpg" alt="">

# 第三章 对象

## 引用

- 对象通过引用来传递；
  
  ```javascript
  var a = {}, b = {};
  console.log(a == b, a === b);
  // false false
  var c = d = {};
  console.log(c == d, c === d);
  // true true
  ```
  
  ```javascript
  var a = {};
  var b = a;
  b.name = 'nihao';
  var n = a.name;
  console.log(n);
  console.log(a == b, a ===b) //a和b指向同一个对象
  //nihao
  //true true
  ```

# 第四章 函数

## 调用模式

### 方法调用模式

- 当一个函数被保存位对象的一个属性时称为方法。

- 当一个方法被调用时，`this`被绑定到该对象上

- 通过`this` 可取得它们所属对象的上下文的方法称为公共方法

### 函数调用模式

```javascript
c= function() {
  console.log("c", this);
  function d() {
    console.log("d", this);
  }
  d();
}
c();
// c Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// d Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

- 由以上看出当函数以函数模式调用的时候，`this`被绑定到全局变量上了，无论函数有无嵌套。

- 如果想要在函数`this`指向外部的函数，可以按照以下做法
  
  ```javascript
  var obj = {};
  obj.c = function () {
    this.name = "这是c";
    console.log("c:this", this);
    that = this;
    function d() {
      console.log("d:this", this);
      console.log("d", that);
    }
    d();
  }
  obj.c();
  // c:this {name: '这是c', c: ƒ}
  // d:this Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  // d {name: '这是c', c: ƒ}
  ```

### 构造器调用模式

使用 new

```javascript
var fun = function () {
  console.log("i love js");
}
var fun1 = new fun();
console.log(typeof fun, typeof fun1);
// i love js
// function object
```

### apply 调用模式

## ?参数：# Arguments 对象

## 返回值

如果一个函数被`new`后，返回值不是一个对象，则返回`this`（该新对象本身)

## 作用域

- 作用域控制着变量与参数的可见性及生命周期，提供了自动内存管理

- 好处：内部函数可以访问他们的外部函数的参数和变量(除了`this 和 arguments`)

## 闭包

- 内部函数拥有比它的外部函数更长的声明周期

## ？自动内存管理

# 第五章 继承

# 第六章 数组

## is_array 函数

```javascript
var is_array = function(value){
    return value && typeof value === 'object' && value.constructor === Array;
}
```

# 第七章 正则表达式

# 第八章 方法

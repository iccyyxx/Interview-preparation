# this 指向

在绝大多数情况下，函数的**调用方式决定**了 `this` 的值（运行时绑定），`this` 不能在执行期间被赋值，并且在每次函数被调用时 `this` 的值也可能会不同。ES5 引入了 [bind](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 方法来设置函数的 `this` 值，而不用考虑函数如何被调用的。ES6引入了[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)，箭头函数不提供自身的 this 绑定（`this` 的值将保持为闭合词法上下文的值）。

### 全局上下文

- 无论是否在严格模式下，在全局执行环境中（在任何函数体外部）`this` 都指向**全局对象** `window`。

- 可以使用 [`globalThis`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis) 获取全局对象，无论你的代码是否在当前上下文运行。
  
  ```javascript
  console.log(this === window); // true`
  
  a = 37;
  console.log(window.a); // 37
  
  this.b = "MDN";
  console.log(window.b)  // "MDN"
  console.log(b)         // "MDN"
  ```

### [函数上下文](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#%E5%87%BD%E6%95%B0%E4%B8%8A%E4%B8%8B%E6%96%87 "Permalink to 函数上下文")

在函数内部，`this`的值取决于函数被调用的方式。

- 不在严格模式下，且 `this` 的值不是由该调用设置的。`this` 的值默认指向全局对象，浏览器中就是 [`window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window "window")。
  
  ```javascript
  function f1(){
    return this;
  }
  //在浏览器中：
  f1() === window;   //在浏览器中，全局对象是window
  
  //在Node中：
  f1() === globalThis;
  ```

- 在严格模式下，如果进入执行环境时没有设置 `this` 的值，`this` 会保持为 `undefined`，如下
  
  ```javascript
  function f2(){
    "use strict"; // 这里是严格模式
    return this;
  }
  
  f2() === undefined; // true
  ```

如果要想把 `this` 的值从一个环境传到另一个，就要用 [call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)`或者[apply](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法，如下方的示例所示。 

### [类上下文](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#%E7%B1%BB%E4%B8%8A%E4%B8%8B%E6%96%87 "Permalink to 类上下文")

在类的构造函数中，`this` 是一个常规对象。类中所有非静态的方法都会被添加到 `this` 的原型中：(静态方法不是 this 的属性，它们只是类自身的属性)

```javascript
class Example {
  constructor() {
    // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）
    const proto = Object.getPrototypeOf(this);
    // Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名组成的数组
    console.log(Object.getOwnPropertyNames(proto));
  }
  first() { }
  second() { }
  static third() { }
}

new Example(); // ['constructor', 'first', 'second'] 'second']
```

### [派生类](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#%E6%B4%BE%E7%94%9F%E7%B1%BB "Permalink to 派生类")

派生类的构造函数没有初始的 `this` 绑定。在构造函数中调用 [`super()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 会生成一个 `this` 绑定，并相当于执行如下代码，Base为基类：

`this = new Base();`

派生类不能在调用 `super()` 之前返回，除非其构造函数返回的是一个对象，或者根本没有构造函数。

```javascript
class Base { }
// 没有构造器
class Good extends Base { }
// 构造器返回的是一个对象
class AlsoGood extends Base {
  constructor() {
    return { a: 5 };
  }
}
class Bad extends Base {
  constructor() { }
}
new Good();
new AlsoGood();
new Bad(); // ReferenceError
```

### 示例

#### bind 方法

用`f.bind(someObject)`会**创建一个**与`f`具有相同函数体和作用域的函数，但是在这个新函数中，`this`将**永久地被绑定**到了`bind`的第一个参数，无论这个函数是如何被调用的。

```javascript
function f() {
  return this.a;
}
// 将 g的this绑定在{ a: "azerty" }上了
var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var h = g.bind({ a: 'yoo' }); // bind只生效一次！
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
```

#### 箭头函数

在[箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)中，`this`与封闭词法环境的`this`保持一致。

**备注：** 如果将`this`传递给`call`、`bind`、或者`apply`来调用箭头函数，它将被忽略。不过你仍然可以为调用添加参数，不过第一个参数（`thisArg`）应该设置为`null`。

```javascript
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
// 作为对象的一个方法调用
var obj = { foo: foo };
console.log(obj.foo() === globalObject); // true

// 尝试使用call来设定this
console.log(foo.call(obj) === globalObject); // true

// 尝试使用bind来设定this
foo = foo.bind(obj);
console.log(foo() === globalObject); // true   
```

无论如何，`foo` 的 `this` 被设置为他被创建时的环境

```javascript
// 创建一个含有bar方法的obj对象，
// bar返回一个函数，
// 这个函数返回this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的this被永久绑定到了它外层函数的this。
// bar的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
  bar: function() {
    var x = (() => this);
    return x;
  }
};

// 作为obj对象的一个方法来调用bar，把它的this绑定到obj。
// 将返回的函数的引用赋值给fn。
var fn = obj.bar();

// 直接调用fn而不设置this，
// 通常(即不使用箭头函数的情况)默认为全局对象
// 若在严格模式则为undefined
console.log(fn() === obj); // true

// 但是注意，如果你只是引用obj的方法，
// 而没有调用它
var fn2 = obj.bar;
// 那么调用箭头函数后，this指向window，因为它从 bar 继承了this。
console.log(fn2()() == window); // true
```

#### [作为对象的方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#%E4%BD%9C%E4%B8%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E6%B3%95 "Permalink to 作为对象的方法")

当函数作为对象里的方法被调用时，`this` 被设置为调用该函数的对象。

下面的例子中，当 `o.f()` 被调用时，函数内的 `this` 将绑定到 `o` 对象。

```javascript
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37
```

这样的行为完全不会受函数定义方式或位置的影响

```javascript
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // 37
```

`this` 的绑定只受最接近的成员引用的影响

#### 原型链中的 `this`

如果该方法存在于一个对象的原型链上，那么 `this` 指向的是**调用这个方法的对象**，就像该方法就在这个对象上一样。

```javascript
var o = {
  f: function () {
    console.log(this);
    return this.a + this.b;
  }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f())  //{a: 1, b: 4}  5
var oo = p.f;
console.log(oo());  //Window NaN()); // 5
```

#### getter 与 setter 中的 `this`

用作 `getter` 或 `setter` 的函数都会把 `this` 绑定到设置或获取属性的对象

```javascript
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  }
};
// configurable 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变
// enumerable  当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
Object.defineProperty(o, 'sum', {
  get: sum, enumerable: true, configurable: true
});

console.log(o.average, o.sum); // logs 2, 6m); // logs 2, 6
```

#### [作为构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#%E4%BD%9C%E4%B8%BA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0 "Permalink to 作为构造函数")

当一个函数用作构造函数时（使用[new](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)关键字），它的`this`被绑定到正在构造的新对象。

```javascript
/*
 * 构造函数这样工作:
 *
 * function MyConstructor(){
 *   // 函数实体写在这里
 *   // 根据需要在this上创建属性，然后赋值给它们，比如：
 *   this.fum = "nom";
 *   // 等等...
 *
 *   // 如果函数具有返回对象的return语句，
 *   // 则该对象将是 new 表达式的结果。
 *   // 否则，表达式的结果是当前绑定到 this 的对象。
 *   //（即通常看到的常见情况）。
 * }
 */

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // logs 38
```

在刚刚的例子中（`C2`），因为在调用构造函数的过程中，手动的设置了返回对象，与`this`绑定的默认对象被丢弃了。

#### [作为一个DOM事件处理函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#%E4%BD%9C%E4%B8%BA%E4%B8%80%E4%B8%AAdom%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0 "Permalink to 作为一个DOM事件处理函数")

当函数被用作事件处理函数时，它的 `this` 指向**触发事件的元素**

```javascript
// 被调用时，将关联的元素变成蓝色
function bluify(e){
  console.log(this === e.currentTarget); // 总是 true

  // 当 currentTarget 和 target 是同一个对象时为 true
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// 获取文档中的所有元素的列表
var elements = document.getElementsByTagName('*');

// 将bluify作为元素的点击监听函数，当元素被点击时，就会变成蓝色
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}
```

#### [作为一个内联事件处理函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#%E4%BD%9C%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%86%85%E8%81%94%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0 "Permalink to 作为一个内联事件处理函数")

当代码被内联 [on-event 处理函数 (en-US)](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers "Currently only available in English (US)") 调用时，它的`this`指向**监听器所在的DOM元素：**

```html
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
```

上面的 alert 会显示 `button`。

！ 注意只有外层代码中的 `this` 是这样设置的：

```html
<button onclick="alert((function(){return this})());">
  Show inner this
</button>
```

在这种情况下，没有设置内部函数的 `this`，所以它指向` global/window` 对象（即非严格模式下调用的函数未设置 `this` 时指向的默认对象）。

#### [类中的this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#%E7%B1%BB%E4%B8%AD%E7%9A%84this "Permalink to 类中的this")

和其他普通函数一样，方法中的 `this` 值取决于它们如何被调用。

```javascript
class Car {
  constructor() {
    // Bind sayBye but not sayHi to show the difference
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return 'Ferrari';
  }
}

class Bird {
  get name() {
    return 'Tweety';
  }
}

const car = new Car();
const bird = new Bird();

// The value of 'this' in methods depends on their caller
car.sayHi(); // Hello from Ferrari
bird.sayHi = car.sayHi;
bird.sayHi(); // Hello from Tweety

// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye();  // Bye from Ferrari
```

类内部总是严格模式。调用一个 `this` 值为 undefined 的方法会抛出错误。

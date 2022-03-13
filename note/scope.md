## 作用域面试题

```javascript
var n = 100
function foo() {
  n = 200
}
foo()
console.log(n)    //200
```

```javascript
function foo() {
  console.log(n)    //undefined
  var n = 200
  console.log(n)    //200
}

var n = 100
foo()
```

```javascript
var a = 100

function foo() {
  console.log(a)  //undefined
  return
  var a = 200
}

foo()

//因为return是在函数执行的时候才执行的
//但是变量 a 的声明是在预编译的时候执行
//所以 a 是 undefined
```

```javascript
function foo() {
  m = 100
}

foo()
console.log(m)    //100

//此时的m没有关键字，所以会把它放到全局作用域里
```

```javascript
function foo() {
  var a = b = 10
  // => 转成下面的两行代码
  // var a = 10
  // b = 10
}

foo()

console.log(a)    //报错，因为a是局部变量
console.log(b)    //如果上面那句执行则这句不会执行了
//如果单纯执行 console.log(b) 的话会打印 10
```

## 内存管理

### JS的垃圾回收（GC）

因为内存的大小是有限的，所以当内存不再需要的时候，我们需要对其进行释放，以便腾出更多的内存空间

### GC算法--引用计数

当一个对象有一个引用指向它时，那么这个对象的引用就+1，当一个对象的引用为0时，这个对象就可以被销
毁掉

- 弊端：循环引用
  
  ```javascript
  // 引用计数存在一个很大的弊端: 循环引用
  var obj1 = {friend: obj2}
  var obj2 = {friend: obj1}
  ```

### GC算法 – 标记清除

- 这个算法是设置一个根对象（root object），垃圾回收器会定期从这个根开始，找所有从根开始有引用到的对象，对于哪些没有引用到的对象，就认为是不可用的对象

- JS引擎比较广泛的采用的就是标记清除算法，当然类似于V8引擎为了进行更好的优化，它在算法的实现细节上也会结合一些其他的算法

## 闭包

### 数组中的函数使用

#### filter: 过滤

```javascript
// var newNums = nums.filter(function(item) {
//   return item % 2 === 0 // 偶数
// })
```

#### find/findIndex

```javascript
// var findFriend = friends.find(function(item) {
//   return item.name === 'james'
// })
// console.log(findFriend)

// var friendIndex = friends.findIndex(function(item) {
//   return item.name === 'james'
// })
// console.log(friendIndex)
```

#### forEach: 迭代

```javascript
// nums.forEach(function(item) {
//   console.log(item)
// })
```

#### map: 映射

```javascript
// var newNums2 = nums.map(function(item) {
//   return item * 10
// })
```

#### reduce: 累加

```javascript
var total = nums.reduce(function(prevValue, item) {
  return prevValue + item
}, init)
console.log(total)
```

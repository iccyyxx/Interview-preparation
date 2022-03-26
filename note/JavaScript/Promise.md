# 回调函数

回调地狱的根本问题就是：

1. 嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身
2. 嵌套函数一多，就很难处理错误

# Promise

`Promise`是 CommonJS 提出来的这一种规范，有多个版本，在 ES6 当中已经纳入规范，原生支持 Promise 对象，非 ES6 环境可以用类似 Bluebird、Q 这类库来支持。

`Promise` 可以将回调变成链式调用写法，流程更加清晰，代码更加优雅。

简单归纳下 Promise：**三个状态、两个过程、一个方法**，快速记忆方法：**3-2-1**

三个状态：`pending`、`fulfilled`、`rejected`

两个过程：

- pending→fulfilled（resolve）
- pending→rejected（reject）

一个方法：`then`

当然还有其他概念，如`catch`、 `Promise.all/race`，这里就不展开了。

关于 ES6/7 的考查内容还有很多，本小节就不逐一介绍了，如果想继续深入学习，可以在线看《[ES6入门](http://es6.ruanyifeng.com/)》。

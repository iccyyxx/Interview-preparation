可以通过操作 JS 来模拟 DOM 操作，提高速度

```js
const ul = {
  tag: 'ul'
  ,
  props: {
    class: 'list'
  },
  children: {
    tag: 'li'
    ,
    children: '1'
  }
}
```

对应的 DOM 为 

```html
<ul class='list'>
  <li>1</li>
</ul>
```

? 难点在于如何判断新旧两个 JS 对象的最⼩差
异并且实现局部更新 DOM

 Virtual DOM 提⾼性能是其中⼀个优势，其实最⼤的优势还
是在于：

1. 将 Virtual DOM 作为⼀个兼容层，让我们还能对接⾮ Web 端
   的系统，实现跨端开发。
2. 同样的，通过 Virtual DOM 我们可以渲染到其他的平台，⽐如
   实现 SSR、同构渲染等等。
3. 实现组件的⾼度抽象化

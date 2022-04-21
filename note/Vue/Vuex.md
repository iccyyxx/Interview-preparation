## 状态管理

### 简易的状态管理

[状态管理 — Vue.js](https://cn.vuejs.org/v2/guide/state-management.html)

## Vuex 的简介

- 是一个状态管理的库

- 解决了复杂组件通信和数据共享的问题

- 小型没必要，大型的比较需要

## vuex的核心概念

<img title="" src="https://vuex.vuejs.org/vuex.png" alt="">

- store 是容器，唯一的

- state：保存在store中，唯一的，响应式的

- Getter：计算属性

- Mutations：完成状态的更新

- Action：可进行异步操作

- Module：模块

## State

### vuex 数据刷新丢失的问题

- 绑定事件监听：在卸载前保存当前数据

```js
window.addEventListener('beforeunload',()=>{
    sessionStorage.setItem('CART_LIST_KEY',
        JSON.stringify(this.$store.state.shopCart.cartlist))
})
```

- 在初始化时读取保存数据作为状态的初始值

```js
cartlist:JSON.parse(sessionStorage.getItem('CART_LIST_KEY')||[])
```

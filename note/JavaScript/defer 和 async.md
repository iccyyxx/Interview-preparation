# script 标签中 defer 和 async 的区别

- `script` ：会阻碍 HTML 解析，只有下载好并执行完脚本才会继续解析 HTML。

- `async script` ：解析 HTML 过程中进行脚本的异步下载，下载成功立马执行，有可能会阻断 HTML 的解析。

- `defer script`：完全不会阻碍 HTML 的解析，解析完成之后再按照顺序执行脚本。
  
  #### script
  
  浏览器在解析 HTML 的时候，如果遇到一个没有任何属性的 script 标签，就会暂停解析，先发送网络请求获取该 JS 脚本的代码内容，然后让 JS 引擎执行该代码，当代码执行完毕后恢复解析。
  
  ![](D:\Github\Interview-preparation\image\html-script.jpg)

#### async script

当浏览器遇到带有 async 属性的 script 时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器会暂停解析，先让 JS 引擎执行代码，执行完毕后再进行解析

<img title="" src="file:///D:/Github/Interview-preparation/image/html-async.jpg" alt="">

<img title="" src="file:///D:/Github/Interview-preparation/image/html-async1.jpg" alt="">

### defer script

当浏览器遇到带有 defer 属性的 script 时，获取该脚本的网络请求也是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器不会暂停解析并执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码，图示如下：

> 如果存在多个 defer script 标签，浏览器（IE9及以下除外）会保证它们按照在 HTML 中出现的顺序执行，不会破坏 JS 脚本之间的依赖关系。

<img title="" src="file:///D:/Github/Interview-preparation/image/html-defer.jpg" alt=""> 

### 总结

| script 标签        | JS 执行顺序     | 是否阻塞解析 HTML |
| ---------------- | ----------- | ----------- |
| `<script>`       | 在 HTML 中的顺序 | 阻塞          |
| `<script async>` | 网络请求返回顺序    | 可能阻塞，也可能不阻塞 |
| `<script defer>` | 在 HTML 中的顺序 | 不阻塞         |
